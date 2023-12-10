/**
 * Original source: https://github.com/honojs/hono/tree/main/src/jsx
 * This library is based on hono's JSX and modified to be extensible.
 */
import type { IntrinsicElements as IntrinsicElementsDefined } from "./intrinsic-elements";
import type { MTTags } from "./mttags";

const isEscapedKey = Symbol("isEscaped");
const promisesKey = Symbol("promises");

type HtmlEscaped = { [isEscapedKey]: true; [promisesKey]?: Promise<string>[] };
export type HtmlEscapedString = string & HtmlEscaped;
export type StringBuffer = (string | Promise<string>)[];

export const raw = (
  value: unknown,
  promises?: Promise<string>[]
): HtmlEscapedString => {
  const escapedString = new String(value) as HtmlEscapedString;
  escapedString[isEscapedKey] = true;
  escapedString[promisesKey] = promises;

  return escapedString;
};

const escapeToBuffer = (str: string, buffer: StringBuffer): void => {
  buffer[0] += str.replace(/[&<>'"]/g, (match) => {
    switch (match) {
      case "&":
        return "&amp;";
      case "<":
        return "&lt;";
      case ">":
        return "&gt;";
      case "'":
        return "&#39;";
      case '"':
        return "&quot;";
      default:
        return match;
    }
  });
};

export const stringBufferToString = async (
  buffer: StringBuffer
): Promise<HtmlEscapedString> => {
  let str = "";
  const promises: Promise<string>[] = [];
  for (let i = buffer.length - 1; i >= 0; i--) {
    let r = await buffer[i];
    if (typeof r === "object") {
      promises.push(...((r as HtmlEscapedString)[promisesKey] || []));
    }
    r = await (typeof r === "object" ? (r as HtmlEscapedString).toString() : r);
    if (typeof r === "object") {
      promises.push(...((r as HtmlEscapedString)[promisesKey] || []));
    }
    str += r;
  }

  return raw(str, promises);
};

type Props = Record<string, any>;

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    type Element = HtmlEscapedString;
    interface ElementChildrenAttribute {
      children: Child;
    }
    interface IntrinsicElements extends IntrinsicElementsDefined, MTTags {
      [tagName: string]: Props;
    }
  }
}

const emptyTags = [
  "area",
  "base",
  "br",
  "col",
  "embed",
  "hr",
  "img",
  "input",
  "keygen",
  "link",
  "meta",
  "param",
  "source",
  "track",
  "wbr",
];
const booleanAttributes = [
  "allowfullscreen",
  "async",
  "autofocus",
  "autoplay",
  "checked",
  "controls",
  "default",
  "defer",
  "disabled",
  "formnovalidate",
  "hidden",
  "inert",
  "ismap",
  "itemscope",
  "loop",
  "multiple",
  "muted",
  "nomodule",
  "novalidate",
  "open",
  "playsinline",
  "readonly",
  "required",
  "reversed",
  "selected",
];

const childrenToStringToBuffer = (
  children: Child[],
  buffer: StringBuffer
): void => {
  for (let i = 0, len = children.length; i < len; i++) {
    const child = children[i];
    if (typeof child === "string") {
      escapeToBuffer(child, buffer);
    } else if (
      typeof child === "boolean" ||
      child === null ||
      child === undefined
    ) {
      continue;
    } else if (child instanceof JSXNode) {
      child.toStringToBuffer(buffer);
    } else if (
      typeof child === "number" ||
      (child as unknown as { isEscaped: boolean }).isEscaped
    ) {
      (buffer[0] as string) += child;
    } else if (child instanceof Promise) {
      buffer.unshift("", child);
    } else {
      // `child` type is `Child[]`, so stringify recursively
      childrenToStringToBuffer(child, buffer);
    }
  }
};

export type Child = string | Promise<string> | number | JSXNode | Child[];
export class JSXNode implements HtmlEscaped {
  tag: string | Function;
  props: Props;
  children: Child[];
  [isEscapedKey]: true = true as const;
  constructor(tag: string | Function, props: Props, children: Child[]) {
    this.tag = tag;
    this.props = props;
    this.children = children;
  }

  toString(): string | Promise<string> {
    const buffer: StringBuffer = [""];
    this.toStringToBuffer(buffer);
    return buffer.length === 1 ? buffer[0] : stringBufferToString(buffer);
  }

  toStringToBuffer(buffer: StringBuffer): void {
    const tag = this.tag as string;
    const props = this.props;
    let { children } = this;

    buffer[0] += `<${tag}`;

    const propsKeys = Object.keys(props || {});

    for (let i = 0, len = propsKeys.length; i < len; i++) {
      const key = propsKeys[i];
      const v = props[key];
      // object to style strings
      if (key === "style" && typeof v === "object") {
        const styles = Object.keys(v)
          .map((k) => {
            const property = k.replace(
              /[A-Z]/g,
              (match) => `-${match.toLowerCase()}`
            );
            return `${property}:${v[k]}`;
          })
          .join(";");
        buffer[0] += ` style="${styles}"`;
      } else if (typeof v === "string") {
        buffer[0] += ` ${key}="`;
        escapeToBuffer(v, buffer);
        buffer[0] += '"';
      } else if (v === null || v === undefined) {
        // Do nothing
      } else if (typeof v === "number" || (v as HtmlEscaped)[isEscapedKey]) {
        buffer[0] += ` ${key}="${v}"`;
      } else if (typeof v === "boolean" && booleanAttributes.includes(key)) {
        if (v) {
          buffer[0] += ` ${key}=""`;
        }
      } else if (key === "dangerouslySetInnerHTML") {
        if (children.length > 0) {
          throw "Can only set one of `children` or `props.dangerouslySetInnerHTML`.";
        }

        children = [raw(v.__html)];
      } else {
        buffer[0] += ` ${key}="`;
        escapeToBuffer(v.toString(), buffer);
        buffer[0] += '"';
      }
    }

    if (emptyTags.includes(tag as string)) {
      buffer[0] += "/>";
      return;
    }

    buffer[0] += ">";

    childrenToStringToBuffer(children, buffer);

    buffer[0] += `</${tag}>`;
  }
}

class JSXFunctionNode extends JSXNode {
  toStringToBuffer(buffer: StringBuffer): void {
    const { children } = this;

    const res = (this.tag as Function).call(null, {
      ...this.props,
      children: children.length <= 1 ? children[0] : children,
    });

    if (res instanceof Promise) {
      buffer.unshift("", res);
    } else if (res instanceof JSXNode) {
      res.toStringToBuffer(buffer);
    } else if (typeof res === "number" || (res as HtmlEscaped)[isEscapedKey]) {
      buffer[0] += res;
    } else {
      escapeToBuffer(res, buffer);
    }
  }
}

class JSXFragmentNode extends JSXNode {
  toStringToBuffer(buffer: StringBuffer): void {
    childrenToStringToBuffer(this.children, buffer);
  }
}

export let lastCreatedNode: JSXNode | undefined;

const jsxNodeClassMap = new Map<string | RegExp, typeof JSXNode>();
export const registerJSXNodeClass = (
  tag: string | RegExp,
  cls: typeof JSXNode
): void => {
  jsxNodeClassMap.set(tag, cls);
};

export { jsxFn as jsx };
const jsxFn = (
  tag: string | Function,
  props: Props,
  ...children: (string | HtmlEscapedString)[]
): JSXNode => {
  let node: JSXNode;
  if (typeof tag === "function") {
    node = new JSXFunctionNode(tag, props, children);
  } else {
    let nodeClass: typeof JSXNode | undefined;
    jsxNodeClassMap.forEach((cls, key) => {
      if (typeof key === "string" && key === tag) {
        nodeClass = cls;
      } else if (key instanceof RegExp && key.test(tag)) {
        nodeClass = cls;
      }
    });

    node = new (nodeClass || JSXNode)(tag, props, children);
  }

  lastCreatedNode = node;

  return node;
};

export type FC<T = Props> = (
  props: T & { children?: Child }
) => HtmlEscapedString | Promise<HtmlEscapedString>;

export const Fragment = (props: {
  key?: string;
  children?: Child | HtmlEscapedString;
}): HtmlEscapedString => {
  return new JSXFragmentNode(
    "",
    {},
    props.children ? [props.children] : []
  ) as never;
};
