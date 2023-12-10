import type { Child } from "./index";

declare global {
  namespace MTJSXTemplate {
    interface BlockElement {
      children?: Child;
    }

    interface GlobalModifier {
      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる単語の最初の文字を大文字に変更し、残りの文字を小文字に変換します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/capitalize.html
       */
      capitalize?: string;

      /**
       * モディファイアを付与したファンクションタグの値の最後に、指定された値を追加します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/cat.html
       */
      cat?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる文字数 (空白を含む) をファンクションタグの値の代わりに出力します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/count_characters.html
       */
      count_characters?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる行数 (空白行を含まない) をファンクションタグの値の代わりに出力します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/count_paragraphs.html
       */
      count_paragraphs?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる単語の数をファンクションタグの値の代わりに出力します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/count_words.html
       */
      count_words?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれるすべての HTML エンティティをデコードします。
       * @see https://movabletype.jp/documentation/appendices/modifiers/decode_html.html
       */
      decode_html?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれるすべての XML エンティティをデコードします。
       * @see https://movabletype.jp/documentation/appendices/modifiers/decode_xml.html
       */
      decode_xml?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値をファイル名や検索用に適したものに変換します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/dirify.html
       */
      dirify?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる HTML をエスケープします。
       * @see https://movabletype.jp/documentation/appendices/modifiers/encode_html.html
       */
      encode_html?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値を JavaScript の文字列として利用できるように適切にエスケープ処理をおこないます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/encode_js.html
       */
      encode_js?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値を JSON として扱えるようにエスケープします。
       * @see https://movabletype.jp/documentation/appendices/modifiers/encode_json.html
       */
      encode_json?: string;

      /**
       * モディファイアを付与したファンクションタグの値を PHP コード内で利用できるように適切にエスケープ処理をおこないます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/encode_php.html
       */
      encode_php?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値を sha1 16進数に変換して出力します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/encode_sha1.html
       */
      encode_sha1?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値を URL での利用に合わせたフォーマットにエンコードします。
       * @see https://movabletype.jp/documentation/appendices/modifiers/encode_url.html
       */
      encode_url?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値を XML フォーマットに適した形式にエンコードします。
       * @see https://movabletype.jp/documentation/appendices/modifiers/encode_xml.html
       */
      encode_xml?: string;

      /**
       * モディファイアを付与したファンクションタグの値を、指定した値に応じて、エンコードします。
       * @see https://movabletype.jp/documentation/appendices/modifiers/escape.html
       */
      escape?: string;

      /**
       * モディファイアを付与したファンクションタグの値に対して、テキストフォーマットを適用します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/filters.html
       */
      filters?: string;

      /**
       * モディファイアを付与したファンクションタグの値の行頭に、モディファイアで指定した数の半角スペースを挿入します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/indent.html
       */
      indent?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値を小文字 (abc...) に変換します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/lower_case.html
       */
      lower_case?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値の先頭に含まれる空白文字を削除します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/ltrim.html
       */
      ltrim?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれるテンプレートタグを実行します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/mteval.html
       */
      mteval?: string;

      /**
       * モディファイアを付与したファンクションタグの値に含まれる改行を br 要素に置き換えます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/nl2br.html
       */
      nl2br?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる anchor 要素に値が nofollow の rel 属性を挿入します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/nofollowfy.html
       */
      nofollowfy?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる数字を3桁ごとにカンマで区切ります
       * @see https://movabletype.jp/documentation/appendices/modifiers/numify.html
       */
      numify?: string;

      /**
       * モディファイアを付与したファンクションタグの値に対して、正規表現を利用して検索文字列を置換文字列で置き換えます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/regex_replace.html
       */
      regex_replace?: string;

      /**
     * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれるすべての HTML タグを除去します。

     * @see https://movabletype.jp/documentation/appendices/modifiers/remove_html.html
     */
      remove_html?: string;

      /**
       * モディファイアを付与したファンクションタグの値に対して、検索文字列を置換文字列で置き換えます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/replace.html
       */
      replace?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値の最後に含まれる空白文字を削除します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/rtrim.html
       */
      rtrim?: string;

      /**
       * モディファイアを付与したファンクションタグの値に対して、HTML の除去フィルターを適用します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/sanitize.html
       */
      sanitize?: string;

      /**
       * このモディファイアを設定したブロックタグまたはファンクションタグは結果が出力されず、setvar で指定された名前の変数にその結果が保存されます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/setvar.html
       */
      setvar?: string;

      /**
       * モディファイアを付与したファンクションタグの値に含まれるダッシュ、引用符、ピリオドを変換します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/smarty_pants.html
       */
      smarty_pants?: string;

      /**
       * モディファイアを付与したファンクションタグの値に含まれるダッシュを変換します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/smart_dashes.html
       */
      smart_dashes?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる3度続けたピリオドを省略記号に対応した数値文字参照に変換します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/smart_ellipses.html
       */
      smart_ellipses?: string;

      /**
       * モディファイアを付与したファンクションタグの値に含まれる引用符を変換します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/smart_quotes.html
       */
      smart_quotes?: string;

      /**
       * モディファイアを付与したファンクションタグの値の文字数が space_pad で指定された値を下回る場合、先頭から余白を空白文字で埋めます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/space_pad.html
       */
      space_pad?: string;

      /**
       * モディファイアを付与したファンクションタグの値について、一文字ずつの間にモディファイアで指定した文字を挿入します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/spacify.html
       */
      spacify?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値に含まれる一部の記号を数値文字参照に変換します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/spam_protect.html
       */
      spam_protect?: string;

      /**
       * モディファイアを付与したファンクションタグの値を printf 記法のフォーマットで整形します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/sprintf.html
       */
      sprintf?: string;

      /**
       * モディファイアを付与したファンクションタグの値を printf 記法のフォーマットで整形します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/string_format.html
       */
      string_format?: string;

      /**
       * モディファイアを付与したファンクションタグの値に含まれる、1つ以上の連続する半角空白文字をモディファイアで指定した内容に置き換えます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/strip.html
       */
      strip?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値から改行コードを除きます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/strip_linefeeds.html
       */
      strip_linefeeds?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値から、HTML タグを取り除きます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/strip_tags.html
       */
      strip_tags?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値の先頭と最後に含まれる空白文字を削除します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/trim.html
       */
      trim?: string;

      /**
       * モディファイアを付与したファンクションタグの値の先頭から trim_to で指定した文字数の文字を取り出します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/trim_to.html
       */
      trim_to?: string;

      /**
       * 1 を指定すると、モディファイアを付与したファンクションタグの値を大文字 (ABC...) に変換します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/upper_case.html
       */
      upper_case?: string;

      /**
       * モディファイアを付与したファンクションタグの値を、wrap_text で指定したバイト数で改行して出力します。
       * @see https://movabletype.jp/documentation/appendices/modifiers/wrap_text.html
       */
      wrap_text?: string;

      /**
       * モディファイアを付与したファンクションタグの値の文字数が zero_pad で指定された値を下回る場合、先頭から余白を 0 で埋めます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/zero_pad.html
       */
      zero_pad?: string;

      /**
       * モディファイアを付与したファンクションタグの値が空になる場合に、代わりに出力する値を指定できます。
       * @see https://movabletype.jp/documentation/appendices/modifiers/default.html
       */
      _default?: string;

      to_json?: string;
    }

    interface MTTags {
      /**
       * ユーザーのコンテキスト内で条件分岐をおこなうブロックタグです。ユーザーが公開 (Publish) されたコンテンツデータを持っているか判別し、もし持っているときは true (真) となり、ブロック内を処理します。あわせて MTElse ブロックタグを使用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/authorhascontent.html
       */
      [" MTAuthorHasContent"]: {} & GlobalModifier & BlockElement;

      /**
       * ユーザーの投稿した記事やトピック、コメント、お気に入り登録など、コミュニティ内でのアクション一覧を表示するためのブロックタグです。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。アクションを並べる方法を選択します。authored_on はユーザー名順、created_on (初期値) は時系列に並べます。指定した N 日以内のアクションをすべて表示します。days は単独で使います。他のオプションと併用すると、days が無視されます。現在は、"community_pack_recommend" のみ指定できます。lastn モディファイアが最新アクションから指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数を最大件数として表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。指定した数の記事を表示します。N は 0 より大きな数値にしてください。並べる順序を指定します。ascend を指定すると昇順、descend は降順です。 アクションを並び替える対象を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/actions.html
       */
      ["mt:Actions"]: {
        /**
         * アクションを並べる方法を選択します。authored_on はユーザー名順、created_on (初期値) は時系列に並べます。
         */
        sort?: string;

        /**
         * 指定した N 日以内のアクションをすべて表示します。days は単独で使います。他のオプションと併用すると、days が無視されます。
         */
        days?: string;

        /**
         * 現在は、"community_pack_recommend" のみ指定できます。
         */
        namespace?: string;

        /**
         * lastn モディファイアが最新アクションから指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数を最大件数として表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。
         */
        limit?: number;

        /**
         * 指定した数の記事を表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順です。
         */
        sort_order?: "ascend" | "descend";

        /**
         * アクションを並び替える対象を指定します。
         */
        sort_by?:
          | "title"
          | "author_id"
          | "excerpt"
          | "status"
          | "created_on"
          | "modified_on"
          | "authored_on"
          | string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 特定のユーザーのコミュニティ内でのアクションのうち、コメントを一覧するためのブロックタグです。このタグは MTActions ブロックタグの中で使用します。またこのタグで囲まれた中では、コメント関連のテンプレートタグを使用できます。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/actionscomment.html
       */
      ["mt:ActionsComment"]: {} & GlobalModifier & BlockElement;

      /**
       * 特定のユーザーのコミュニティ内でのアクションのうち、記事・トピックの投稿を一覧するためのブロックタグです。このタグは MTActions ブロックタグの中で使用します。またこのタグで囲まれた中では、記事関連のテンプレートタグを使用できます。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/actionsentry.html
       */
      ["mt:ActionsEntry"]: {} & GlobalModifier & BlockElement;

      /**
       * ユーザーのコミュニティ内でのアクションのうち、お気に入り登録アクション一覧するためのブロックタグです。このタグは MTActions ブロックタグの中で使用します。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/actionsfavorite.html
       */
      ["mt:ActionsFavorite"]: {} & GlobalModifier & BlockElement;

      /**
       * MTActions ブロックタグの中で、最後のアクションのときだけ囲んだ内容を実行するブロックタグです。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/actionsfooter.html
       */
      ["mt:ActionsFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * MTActions ブロックタグの中で、最初のアクションのときだけ囲んだ内容を実行するブロックタグです。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/actionsheader.html
       */
      ["mt:ActionsHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * Movable Type に登録した利用サービスや、ブログ内から集められたアクションの一覧を出力するためのブロックタグです。Movable Type 5.x でこのタグを利用するためには、アクションストリーム プラグインをインストールしてください。アクションを特定のユーザーが投稿したものにフィルタリングします。値として設定するのは、ユーザーのログインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーのアクションのみにフィルタリングします。複数のユーザーを対象にしたい場合は、アカウント名をカンマ , で区切ります。アクションを特定のユーザーが投稿したものにフィルタリングします。値として設定するのは、ユーザーの設定した表示名です。次のサンプルは、表示名が『メロディ』のユーザーのアクションのみにフィルタリングします。複数のユーザーを対象にしたい場合は、表示名をカンマ , で区切ります。アクションを特定のユーザーのものにフィルタリングします。値として設定するのは、ユーザーの ID です。複数のユーザーを対象にしたい場合は、表示名をカンマ , で区切ります。現在の日に基いて、アクションを指定日数内に投稿されたものに限定して出力します。次のサンプルは、現在の日に基いて、10日以内のアクションのみにフィルタリングします。出力するアクションを、どのサービスのものにするかを設定できます。値として設定するのは、サービスの ID です。たとえば、アクションを出力するサービスを Twitter のみにしたい場合は、twitter と設定します。出力するアクションを、どんなイベントのアクションにするかを設定できます。stream はサービス毎に値が指定されており、たとえば、Flickr で写真を表示する場合は photos を指定します。どのような値を指定できるかは、各サービス毎の Action Streams の定義を参照してください。指定された条件でフィルタリングした結果を指定数を最大件数として表示します。初期値は 20 です記事を並び替える対象を指定します。並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。指定した数のアクションを除外して表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/actionstreams.html
       */
      ["mt:ActionStreams"]: {
        /**
         * アクションを特定のユーザーが投稿したものにフィルタリングします。値として設定するのは、ユーザーのログインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーのアクションのみにフィルタリングします。複数のユーザーを対象にしたい場合は、アカウント名をカンマ , で区切ります。
         */
        authors?: string;

        /**
         * アクションを特定のユーザーが投稿したものにフィルタリングします。値として設定するのは、ユーザーの設定した表示名です。次のサンプルは、表示名が『メロディ』のユーザーのアクションのみにフィルタリングします。複数のユーザーを対象にしたい場合は、表示名をカンマ , で区切ります。
         */
        display_names?: string;

        /**
         * アクションを特定のユーザーのものにフィルタリングします。値として設定するのは、ユーザーの ID です。複数のユーザーを対象にしたい場合は、表示名をカンマ , で区切ります。
         */
        author_ids?: string;

        /**
         * 現在の日に基いて、アクションを指定日数内に投稿されたものに限定して出力します。次のサンプルは、現在の日に基いて、10日以内のアクションのみにフィルタリングします。
         */
        days?: string;

        /**
         * 出力するアクションを、どのサービスのものにするかを設定できます。値として設定するのは、サービスの ID です。たとえば、アクションを出力するサービスを Twitter のみにしたい場合は、twitter と設定します。
         */
        service?: string;

        /**
         * 出力するアクションを、どんなイベントのアクションにするかを設定できます。stream はサービス毎に値が指定されており、たとえば、Flickr で写真を表示する場合は photos を指定します。どのような値を指定できるかは、各サービス毎の Action Streams の定義を参照してください。
         */
        stream?: "独自の" | string;

        /**
         * 指定された条件でフィルタリングした結果を指定数を最大件数として表示します。初期値は 20 です
         */
        limit?: number;

        /**
         * 記事を並び替える対象を指定します。
         */
        sort_by?: "author_id" | "created_on" | "modified_on" | string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。
         */
        direction?: string;

        /**
         * 指定した数のアクションを除外して表示します。
         */
        offset?: number;
      } & GlobalModifier &
        BlockElement;

      /**
       * 管理画面用 CGI プログラムがインストールされた URL を表示します。環境設定ファイル (mt-config.cgi) の AdminCGIPath の値を表示します。AdminCGIPath の値が設定されていない場合は、CGIPath の値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/admincgipath.html
       */
      ["mt:AdminCGIPath"]: {} & GlobalModifier;

      /**
       * 管理プログラムの CGI スクリプトの名前を設定する、環境変数 AdminScript で設定した値を出力します。環境変数を設定していない場合は、mt.cgi が出力されます。
       * @see https://movabletype.jp/documentation/appendices/tags/adminscript.html
       */
      ["mt:AdminScript"]: {} & GlobalModifier;

      /**
       * このテンプレートタグは主に Movable Type の管理画面で使用されます。一覧画面や編集画面のアクションのストリップのためのアプリケーションテンプレートのマークアップを生成します。指定されたフォーム上でページネーション制御をおこなうポジションを示す CSS クラス名を指定します。初期値は top です。ページネーションを制御します。値に 1 を指定した場合はページネーションしません。初期値は 0 です。ページネーション制御をおこなう対象のフォーム要素の ID 属性を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/app:actionbar.html
       */
      ["mt:App:ActionBar"]: {
        /**
         * 指定されたフォーム上でページネーション制御をおこなうポジションを示す CSS クラス名を指定します。初期値は top です。
         */
        bar_position?: string;

        /**
         * ページネーションを制御します。値に 1 を指定した場合はページネーションしません。初期値は 0 です。
         */
        hide_pager?: string;

        /**
         * ページネーション制御をおこなう対象のフォーム要素の ID 属性を指定します。
         */
        form_id?: string;
      } & GlobalModifier;

      /**
       * このテンプレートタグは Movable Type の管理画面の各フォーム等で使用されます。フォームの内容を渡す URL を設定しますフォームのメソッドを設定します。GET または POST のほか、HTTP コンパチブルメソッド (例: PUT | DELETE) も設定できます。初期値は POST です。hidden タイプで name 属性の値が id の input 要素を出力します。値は value 属性の値です。hidden タイプで name 属性の値が blog_id の input 要素を出力します。値は value 属性の値です。hidden タイプで name 属性の値が _type の input 要素を出力します。値は value 属性の値です。hidden タイプで name 属性の値が __mode の input 要素を出力します。値は value 属性の値です。フォームデータのエンコード形式を定義する enctype 属性を form 要素に追加します。次のサンプルはメール送信などの場合に定義する text/plain を定義したものです。form 要素の id 属性、name 属性の値を定義します。
       * @see https://movabletype.jp/documentation/appendices/tags/app:form.html
       */
      ["mt:App:Form"]: {
        /**
         * フォームの内容を渡す URL を設定します
         */
        action?: string;

        /**
         * フォームのメソッドを設定します。GET または POST のほか、HTTP コンパチブルメソッド (例: PUT | DELETE) も設定できます。初期値は POST です。
         */
        method?: string;

        /**
         * hidden タイプで name 属性の値が id の input 要素を出力します。値は value 属性の値です。
         */
        object_id?: string;

        /**
         * hidden タイプで name 属性の値が blog_id の input 要素を出力します。値は value 属性の値です。
         */
        blog_id?: string;

        /**
         * hidden タイプで name 属性の値が _type の input 要素を出力します。値は value 属性の値です。
         */
        object_type?: string;

        /**
         * hidden タイプで name 属性の値が __mode の input 要素を出力します。値は value 属性の値です。
         */
        name?: string;

        /**
         * フォームデータのエンコード形式を定義する enctype 属性を form 要素に追加します。次のサンプルはメール送信などの場合に定義する text/plain を定義したものです。
         */
        enctype?: string;

        /**
         * form 要素の id 属性、name 属性の値を定義します。
         */
        id?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * このテンプレートタグは主に Movable Type の管理画面で使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/app:link.html
       */
      ["mt:App:Link"]: {} & GlobalModifier;

      /**
       * このテンプレートタグは主に Movable Type の管理画面で使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/app:listfilters.html
       */
      ["mt:App:ListFilters"]: {} & GlobalModifier;

      /**
       * このテンプレートタグは主に Movable Type の管理画面で使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/app:listing.html
       */
      ["mt:App:Listing"]: {} & GlobalModifier & BlockElement;

      /**
       * このテンプレートタグは主に Movable Type の管理画面で使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/app:pageactions.html
       */
      ["mt:App:PageActions"]: {} & GlobalModifier;

      /**
       * このテンプレートタグは主に Movable Type の管理画面で使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/app:setting.html
       */
      ["mt:App:Setting"]: {} & GlobalModifier & BlockElement;

      /**
       * このテンプレートタグは主に Movable Type の管理画面で使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/app:settinggroup.html
       */
      ["mt:App:SettingGroup"]: {} & GlobalModifier & BlockElement;

      /**
       * このテンプレートタグは主に Movable Type の管理画面で使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/app:statusmsg.html
       */
      ["mt:App:StatusMsg"]: {} & GlobalModifier & BlockElement;

      /**
       * このテンプレートタグは主に Movable Type の管理画面で使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/app:widget.html
       */
      ["mt:App:Widget"]: {} & GlobalModifier & BlockElement;

      /**
       * このタグは現在、非推奨です。MTCategoryLabel タグを使用してください。カテゴリ名を表示します。このタグは MTCategoryLabel ファンクションタグと同じ働きをします。
       * @see https://movabletype.jp/documentation/appendices/tags/archivecategory.html
       */
      ["mt:ArchiveCategory"]: {} & GlobalModifier;

      /**
       * 記事リストアーカイブや MTArchiveList ブロックタグのコンテキスト内にある記事数を表示します。カテゴリアーカイブ内では、MTCategoryCount タグと同じ動作になります。
モディファイアを指定した場合は、カウントした数の代わりにモディファイアで指定した内容が出力されます。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/archivecount.html
       */
      ["mt:ArchiveCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 日付アーカイブの最初の日付を表示します。このタグは、MTArchiveList タグの中か、日付アーカイブの MTEntries タグの外側で利用できます。例えば、2015年7月のアーカイブでは、2015年7月 1日 00:00 と出力されます。日付をヘッダーとして表示したいときに利用します。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/archivedate.html
       */
      ["mt:ArchiveDate"]: {} & GlobalModifier;

      /**
       * 日付アーカイブの最後の日付を表示します。このタグは、MTArchiveList タグの中か、日付アーカイブの MTEntries タグの外側で利用できます。例えば、2015年7月のアーカイブでは、2015年7月31日 23:59 と出力されます。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/archivedateend.html
       */
      ["mt:ArchiveDateEnd"]: {} & GlobalModifier;

      /**
       * インデックスアーカイブ、記事アーカイブの中で使用した場合は、記事の出力ファイル名を表示します。記事リストアーカイブ で使用した場合は、記事リストアーカイブの出力ファイル名が表示されます。拡張子の付加に関するスイッチです。extension="0" と設定すると、拡張子を付加しません。デフォルトは extension="1" です。ファイル名の中の _ を - に変換します。
       * @see https://movabletype.jp/documentation/appendices/tags/archivefile.html
       */
      ["mt:ArchiveFile"]: {
        /**
         * 拡張子の付加に関するスイッチです。extension="0" と設定すると、拡張子を付加しません。デフォルトは extension="1" です。
         */
        extension?: string;

        /**
         * ファイル名の中の _ を - に変換します。
         */
        separator?: string;
      } & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTArchiveTypeLabel タグを使用してください。Movable Type で設定した使用言語でアーカイブの種類を表示します。例えば、使用言語に日本語を選択したブログで、月別アーカイブや MTArchiveList ブロックタグに archive_type="Monthly" モディファイアを設定したブロックの中では、月別 と表示します。このタグは MTArchiveTypeLabel ファンクションタグと同じ働きをします。システムで利用するアーカイブの種類を表す名前を必ず表示したい場合は MTArchiveType ファンクションタグを利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/archivelabel.html
       */
      ["mt:ArchiveLabel"]: {} & GlobalModifier;

      /**
       * 記事リストアーカイブの絶対 URL を表示します。記事リストアーカイブへのリンクを作るときに使います。MTArchiveList ブロックタグの中か、アーカイブに関連したテンプレートで使用できます。表示する URL は、MTArchiveList ブロックタグの設定 (モディファイア) やテンプレートに準じます。例えば、MTArchiveList ブロックタグに archive_type="Monthly" と設定した場合、ブロックタグ内では、月別アーカイブの URL を表示します。アーカイブの種類を選択します。アーカイブの種類は以下のようになります。1 の値を設定した場合、出力された URL にインデックスファイル名(通常 index.html)を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/archivelink.html
       */
      ["mt:ArchiveLink"]: {
        /**
         * アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
         */
        archive_type?:
          | "Individual"
          | "Page"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | string;

        /**
         * 1 の値を設定した場合、出力された URL にインデックスファイル名(通常 index.html)を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
         */
        with_index?: string;
      } & GlobalModifier;

      /**
       * アーカイブの一覧を表示するためのブロックタグです。モディファイア archive_type で、表示するアーカイブの種類を指定できます。archive_type を指定しないときは、優先アーカイブタイプ、もしくはそのときのアーカイブの種類を使います。アーカイブの種類を指定します。アーカイブの種類は以下のようになります。これ以降は Movable Type 7 でご利用いただけます。コンテンツタイプの名前、ID、ユニーク ID のいずれかを指定します。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。指定した数の記事を表示します。N は 0 より大きな数値にしてください。
       * @see https://movabletype.jp/documentation/appendices/tags/archivelist.html
       */
      ["mt:ArchiveList"]: {
        /**
         * アーカイブの種類を指定します。アーカイブの種類は以下のようになります。これ以降は Movable Type 7 でご利用いただけます。
         */
        archive_type?:
          | "Individual"
          | "Page"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | "ContentType"
          | "ContentType-Daily"
          | "ContentType-Weekly"
          | "ContentType-Monthly"
          | "ContentType-Yearly"
          | "ContentType-Author"
          | "ContentType-Author-Daily"
          | "ContentType-Author-Weekly"
          | "ContentType-Author-Monthly"
          | "ContentType-Author-Yearly"
          | "ContentType-Category"
          | "ContentType-Category-Daily"
          | "ContentType-Category-Weekly"
          | "ContentType-Category-Monthly"
          | "ContentType-Category-Yearly"
          | string;

        /**
         * アーカイブの種類を指定します。アーカイブの種類は以下のようになります。これ以降は Movable Type 7 でご利用いただけます。
         */
        type?:
          | "Individual"
          | "Page"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | "ContentType"
          | "ContentType-Daily"
          | "ContentType-Weekly"
          | "ContentType-Monthly"
          | "ContentType-Yearly"
          | "ContentType-Author"
          | "ContentType-Author-Daily"
          | "ContentType-Author-Weekly"
          | "ContentType-Author-Monthly"
          | "ContentType-Author-Yearly"
          | "ContentType-Category"
          | "ContentType-Category-Daily"
          | "ContentType-Category-Weekly"
          | "ContentType-Category-Monthly"
          | "ContentType-Category-Yearly"
          | string;

        /**
         * コンテンツタイプの名前、ID、ユニーク ID のいずれかを指定します。
         */
        content_type?: string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
         */
        sort_order?: "ascend" | "descend";

        /**
         * 指定した数の記事を表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;
      } & GlobalModifier &
        BlockElement;

      /**
       * MTArchiveList タグの中で、最後のループ時に一度だけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/archivelistfooter.html
       */
      ["mt:ArchiveListFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * MTArchiveList タグの中で、初回のループ時に一度だけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/archivelistheader.html
       */
      ["mt:ArchiveListHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のアーカイブの次のアーカイブの内容を表示するためのブロックタグです。このタグの中では、MTArchiveTitle タグは、次のアーカイブのタイトルを表示します。通常、同じ種類のアーカイブを表示します。週別アーカイブでは、次の週のアーカイブになります。変更するには archive_type モディファイアで指定します。記事アーカイブでは、MTEntryNext ブロックタグを、ウェブページアーカイブでは、MTPageNext ブロックタグを、カテゴリアーカイブでは MTCategoryNext ブロックタグも利用できます。アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/archivenext.html
       */
      ["mt:ArchiveNext"]: {
        /**
         * アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
         */
        archive_type?:
          | "Individual"
          | "Page"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 現在のアーカイブの前のアーカイブの内容を表示するためのブロックタグです。このタグの中では、MTArchiveTitle タグは、前のアーカイブのタイトルを表示します。通常、同じ種類のアーカイブを表示します。週別アーカイブでは、前の週のアーカイブになります。変更するにはモディファイア archive_type で指定します。記事アーカイブでは、MTEntryPrevious ブロックタグを、ウェブページアーカイブでは、MTPagePrevious ブロックタグを、カテゴリアーカイブでは MTCategoryPrevious ブロックタグも利用できます。アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/archiveprevious.html
       */
      ["mt:ArchivePrevious"]: {
        /**
         * アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
         */
        archive_type?:
          | "Individual"
          | "Page"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ブログ内のすべてのアーカイブの種類を表示するブロックタグです。サイトマップなどを作成する際に有効です。archive_type モディファイアでアーカイブの種類を指定できます。各アーカイブ内のオブジェクトを出力する場合には MTArchiveList ブロックタグをお使いください。アーカイブの種類を指定します。カンマ区切りで複数指定も可能です。アーカイブの種類は以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/archives.html
       */
      ["mt:Archives"]: {
        /**
         * アーカイブの種類を指定します。カンマ区切りで複数指定も可能です。アーカイブの種類は以下のようになります。
         */
        archive_type?:
          | "Individual"
          | "Page"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 記事リストアーカイブのタイトルを表示します。表示されるタイトルはアーカイブの種類に依存します。例えば、月別アーカイブや、MTArchiveList ブロックタグに archive_type="Monthly" モディファイアを設定したブロックの中では、年月を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/archivetitle.html
       */
      ["mt:ArchiveTitle"]: {} & GlobalModifier;

      /**
       * アーカイブの種類を表示します。たとえば、月別アーカイブや MTArchiveList ブロックタグに archive_type="Monthly" モディファイアを設定したブロックの中では、Monthly と表示されます。
Movable Type で使用している言語でアーカイブの種類を表示させたい場合は MTArchiveLabel ファンクションタグを利用してください。アーカイブの種類は以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/archivetype.html
       */
      ["mt:ArchiveType"]: {} & GlobalModifier;

      /**
       * Movable Type で設定した使用言語でアーカイブの種類を表示します。例えば、使用言語に日本語を選択したブログで、月別アーカイブや MTArchiveList ブロックタグに archive_type="Monthly" モディファイアを設定したブロックの中では、月別 と表示します。このタグは MTArchiveLabel と同じ働きをします。システムで利用するアーカイブの種類を表す名前を必ず表示したい場合は MTArchiveType ファンクションタグを利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/archivetypelabel.html
       */
      ["mt:ArchiveTypeLabel"]: {} & GlobalModifier;

      /**
       * id モディファイアで指定した単一のアイテムを表示するためのブロックタグです。表示させたいアイテムの id を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/asset.html
       */
      ["mt:Asset"]: {
        /**
         * 表示させたいアイテムの id を指定します。
         */
        id?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * アイテムを追加したユーザーの表示名を表示します。表示名の設定が無い場合は、ユーザー名を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetaddedby.html
       */
      ["mt:AssetAddedBy"]: {} & GlobalModifier;

      /**
       * 現在処理しているアイテムが属するブログ又はウェブサイトの ID を表示します。ユーザー画像などシステムに属するアイテムの場合、値は 0 になります。1 を指定すると6 桁の文字列として表示します。足りない桁は 0 が表示されます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/assetblogid.html
       */
      ["mt:AssetBlogID"]: {
        /**
         * 1 を指定すると6 桁の文字列として表示します。足りない桁は 0 が表示されます。初期値は 0 です。
         */
        pad?: string;
      } & GlobalModifier;

      /**
       * ブログで管理しているアイテムの数を表示します。アップロードした画像ファイルから生成されたサムネイルのアイテムはカウントされません。singular、plural、none モディファイアは、カウントした数の代わりに出力する内容を指定します。カウントするアイテムをアイテムの種類で絞り込むことができます。対象のアイテムが image でも audio でも video でもない場合は、file という値を設定します。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetcount.html
       */
      ["mt:AssetCount"]: {
        /**
         * カウントするアイテムをアイテムの種類で絞り込むことができます。対象のアイテムが image でも audio でも video でもない場合は、file という値を設定します。
         */
        type?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * アイテムの追加日時を表示します。モディファイア format と language を指定して、日時の表示方法を変更できます。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/assetdateadded.html
       */
      ["mt:AssetDateAdded"]: {} & GlobalModifier;

      /**
       * アイテムの説明を表示するファンクションタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/assetdescription.html
       */
      ["mt:AssetDescription"]: {} & GlobalModifier;

      /**
       * アイテムの拡張子を表示します (. ドットは付きません。)
       * @see https://movabletype.jp/documentation/appendices/tags/assetfileext.html
       */
      ["mt:AssetFileExt"]: {} & GlobalModifier;

      /**
       * アイテムのファイル名を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetfilename.html
       */
      ["mt:AssetFileName"]: {} & GlobalModifier;

      /**
       * アイテムのファイル・システム上のパスを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetfilepath.html
       */
      ["mt:AssetFilePath"]: {} & GlobalModifier;

      /**
       * アイテムの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetid.html
       */
      ["mt:AssetID"]: {} & GlobalModifier;

      /**
       * 特定のタグがアイテムに付けられているときに囲まれた内容を処理するブロックタグです。tag モディファイアでタグの名前を指定します。指定したタグを対象とします。プライベートタグ（@ で始まるタグ）を対象にするかどうかを指定。"1" を指定すると対象に含めます。
       * @see https://movabletype.jp/documentation/appendices/tags/assetiftagged.html
       */
      ["mt:AssetIfTagged"]: {
        /**
         * 指定したタグを対象とします。
         */
        tag?: string;

        /**
         * プライベートタグ（@ で始まるタグ）を対象にするかどうかを指定。"1" を指定すると対象に含めます。
         */
        include_private?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * MTAssets ブロックタグとあわせて使用し、画像の一覧を作成する際、MTAssets ブロックタグ に設定した assets_per_row モディファイアで設定した一行に表示する件数に応じてコンテナした内容を表示します。MTAssetIsFirstInRow ブロックタグは、行頭にコンテナした内容を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetisfirstinrow.html
       */
      ["mt:AssetIsFirstInRow"]: {} & GlobalModifier & BlockElement;

      /**
       * MTAssets ブロックタグとあわせて使用し、画像の一覧を作成する際、MTAssets ブロックタグ に設定した assets_per_row モディファイアで設定した一行に表示する件数に応じてコンテナした内容を表示します。MTAssetIsLasrInRow ブロックタグは、行末にコンテナした内容を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetislastinrow.html
       */
      ["mt:AssetIsLastInRow"]: {} & GlobalModifier & BlockElement;

      /**
       * アイテムを追加する際に入力した『名前』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetlabel.html
       */
      ["mt:AssetLabel"]: {} & GlobalModifier;

      /**
       * アイテムファイルへのリンクを表示します。new_window モディファイアを設定するとアイテムが新しいウィンドウで表示されるようになります。アイテムを新しいウィンドウで表示させたい場合 1 を設定します。初期値は現在のウィンドウで表示する 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/assetlink.html
       */
      ["mt:AssetLink"]: {
        /**
         * アイテムを新しいウィンドウで表示させたい場合 1 を設定します。初期値は現在のウィンドウで表示する 0 です。
         */
        new_window?: string;
      } & GlobalModifier;

      /**
       * アイテムの MIME Type を表示します。例えば HTML 文書であれば text/html と、jpg イメージであれば image/jpeg となります。
       * @see https://movabletype.jp/documentation/appendices/tags/assetmimetype.html
       */
      ["mt:AssetMimeType"]: {} & GlobalModifier;

      /**
       * property モディファイアに表示したいデータを設定し、アイテムの詳細データを表示します。アイテムのファイルサイズを表示します。合わせて format モディファイアを利用することで、出力結果を操作できます。初期値は単位付きのキロバイト表示 format="1" です。アイテムが画像 (image) の場合、横幅を単位無しで表示します。アイテムが画像 (image) の場合、高さを単位無しで表示します。アイテムを追加する際に入力した『名前』が表示されます。MTAssetLabel も同様の機能を持ちます。アイテムを追加する際に入力した『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetproperty.html
       */
      ["mt:AssetProperty"]: {
        /**
         * アイテムのファイルサイズを表示します。合わせて format モディファイアを利用することで、出力結果を操作できます。初期値は単位付きのキロバイト表示 format="1" です。アイテムが画像 (image) の場合、横幅を単位無しで表示します。アイテムが画像 (image) の場合、高さを単位無しで表示します。アイテムを追加する際に入力した『名前』が表示されます。MTAssetLabel も同様の機能を持ちます。アイテムを追加する際に入力した『説明』を表示します。
         */
        property?: "0" | "1" | "k" | "m" | string;
      } & GlobalModifier;

      /**
       * アイテムに付けられたスコアを一定の範囲内でランク付けします。数値が小さい方が頻度が高くなります。スコアを付けるには別途プラグインなどが必要です。頻度の基準値を設定します。初期値は6です。
       * @see https://movabletype.jp/documentation/appendices/tags/assetrank.html
       */
      ["mt:AssetRank"]: {
        /**
         * 頻度の基準値を設定します。初期値は6です。
         */
        max?: string;
      } & GlobalModifier;

      /**
       * ブログのアイテム一覧のためのブロックタグです。モディファイアを指定することで、特定の条件にあてはまるアイテムだけを抜き出すことや、日付順で指定した数のアイテムを一覧することができます。指定した数のアイテムを表示します。N は 0 より大きな数値にしてください。指定した数のアイテムを除外して表示します。値に 5 を指定すると、最新 5 件のアイテムを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。sort_by モディファイアでフィルタリングされたアイテムを、指定数表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。指定したタグが設定されたアイテムをすべて表示します。アイテムの数を指定するときは lastn モディファイアを併用してください。複数のタグを指定するときは AND か OR を使います。特定のタグ以外を指定するときは NOT を使います。また、() でくくることで、条件判断の優先順位を指定できます。指定したユーザーがアップロードしたアイテムをすべて表示します。アイテム数を指定するときは lastn モディファイアを併用してください。指定した日数以内にアップロードされたアイテムをすべて表示します。表示したいアイテムをアイテムの種類で絞り込むことができます。表示したいアイテムが image でも audio でも video でもない場合は、file という値を設定します。表示したいアイテムを拡張子で絞り込むことができます。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。アイテムを並び替える対象を指定します。複数のブログを対象にできます。all の場合は、すべてのブログを対象とします。また、ブログ ID を列記 (カンマ区切り) すると、指定したブログのみを対象とします。スコアでソート (sort_by="score") するとき、どのスコア名前空間を使用するかを設定します。対象のブログ、ウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。MTAssetIsFirstInRow, MTAssetIsLastInRow タグを使用して、画像の一覧を作成する際に、一行に表示するアイテム数 N 件を設定します。ignore_archive_context モディファイアに "1" を指定すると、現在のアーカイブの影響を受けずに、データをロードさせることができます。初期値は 0 です。このモディファイアは、Movable Type 6.0.4 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/assets.html
       */
      ["mt:Assets"]: {
        /**
         * 指定した数のアイテムを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 指定した数のアイテムを除外して表示します。値に 5 を指定すると、最新 5 件のアイテムを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。
         */
        offset?: number;

        /**
         * sort_by モディファイアでフィルタリングされたアイテムを、指定数表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。
         */
        limit?: number;

        /**
         * 指定したタグが設定されたアイテムをすべて表示します。アイテムの数を指定するときは lastn モディファイアを併用してください。複数のタグを指定するときは AND か OR を使います。特定のタグ以外を指定するときは NOT を使います。また、() でくくることで、条件判断の優先順位を指定できます。
         */
        tags?: string;

        /**
         * 指定したユーザーがアップロードしたアイテムをすべて表示します。アイテム数を指定するときは lastn モディファイアを併用してください。
         */
        author?: string;

        /**
         * 指定した日数以内にアップロードされたアイテムをすべて表示します。
         */
        days?: string;

        /**
         * 表示したいアイテムをアイテムの種類で絞り込むことができます。表示したいアイテムが image でも audio でも video でもない場合は、file という値を設定します。
         */
        type?: string;

        /**
         * 表示したいアイテムを拡張子で絞り込むことができます。
         */
        file_ext?: string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
         */
        sort_order?: "ascend" | "descend";

        /**
         * アイテムを並び替える対象を指定します。
         */
        sort_by?: "file_name" | "created_by" | "created_on" | string;

        /**
         * 複数のブログを対象にできます。all の場合は、すべてのブログを対象とします。また、ブログ ID を列記 (カンマ区切り) すると、指定したブログのみを対象とします。
         */
        blog_ids?: string;

        /**
         * スコアでソート (sort_by="score") するとき、どのスコア名前空間を使用するかを設定します。
         */
        namespace?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         *
         */
        include_websites?: string;

        /**
         *
         */
        exclude_blogs?: string;

        /**
         * 対象のブログ、ウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_websites?: string;

        /**
         * MTAssetIsFirstInRow, MTAssetIsLastInRow タグを使用して、画像の一覧を作成する際に、一行に表示するアイテム数 N 件を設定します。
         */
        assets_per_row?: string;

        /**
         * ignore_archive_context モディファイアに "1" を指定すると、現在のアーカイブの影響を受けずに、データをロードさせることができます。初期値は 0 です。このモディファイアは、Movable Type 6.0.4 で追加されました。
         */
        ignore_archive_context?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * アイテムに付けられたスコアの合計を表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/assetscore.html
       */
      ["mt:AssetScore"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * アイテムに付けられたスコアの平均スコアを表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/assetscoreavg.html
       */
      ["mt:AssetScoreAvg"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * アイテムに付けられたスコア合計回数を表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetscorecount.html
       */
      ["mt:AssetScoreCount"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * アイテムに付けられたスコアの中で一番高いスコアを表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/assetscorehigh.html
       */
      ["mt:AssetScoreHigh"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * アイテムに付けられたスコアの中で一番低いスコアを表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/assetscorelow.html
       */
      ["mt:AssetScoreLow"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * MTAssets ブロックタグの中で、最後にだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/assetsfooter.html
       */
      ["mt:AssetsFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * MTAssets ブロックタグの中で、最初にだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/assetsheader.html
       */
      ["mt:AssetsHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のコンテクストにおけるアセットが属するサイトの ID 番号を表示します。ユーザー画像などシステムに属するアセットの場合、値は 0 になります。MTAssetBlogIDと互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/assetsiteid.html
       */
      ["mt:AssetSiteID"]: {} & GlobalModifier;

      /**
       * 特定のアイテムに設定されたタグの一覧のためのブロックタグです。glue モディファイアを使うと、タグの区切り文字を指定できます。複数のタグを並べて表示するときの、区切り文字を設定します。プライベートタグ（@ で始まるタグ）を対象にするか指定します。"1" を指定すると対象に含めます。
       * @see https://movabletype.jp/documentation/appendices/tags/assettags.html
       */
      ["mt:AssetTags"]: {
        /**
         * 複数のタグを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;

        /**
         * プライベートタグ（@ で始まるタグ）を対象にするか指定します。"1" を指定すると対象に含めます。
         */
        include_private?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * アイテムの種類が画像 (image)の場合、オリジナルファイルへのリンク付きのサムネイルを表示する XHTML タグを表示します。サイズを指定するモディファイアを併用して、サムネイルのサイズを指定することができます。サイズを指定しない場合は、オリジナルファイルと同サイズのサムネイルを生成して表示します。画像のサムネイルの幅を指定値 (px) で出力します。高さは比率を保ち自動算出されます。画像のサムネイルの高さを指定値 (px) で出力します。幅は比率を保ち自動算出されます。画像のサムネイルを実際サイズの指定値 (%) 縮小して出力します。サムネイルを 1:1 で出力します。辺のサイズは width, height または scale モディファイアを付与して設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetthumbnaillink.html
       */
      ["mt:AssetThumbnailLink"]: {
        /**
         * 画像のサムネイルの幅を指定値 (px) で出力します。高さは比率を保ち自動算出されます。
         */
        width?: number;

        /**
         * 画像のサムネイルの高さを指定値 (px) で出力します。幅は比率を保ち自動算出されます。
         */
        height?: number;

        /**
         * 画像のサムネイルを実際サイズの指定値 (%) 縮小して出力します。
         */
        scale?: string;

        /**
         * サムネイルを 1:1 で出力します。辺のサイズは width, height または scale モディファイアを付与して設定します。
         */
        square?: string;

        /**
         *
         */
        force?: string;
      } & GlobalModifier;

      /**
       * MTAssetThumbnailLink がサムネイルを表示する img 要素を表示するのに対し、MTAssetThumbnailURL はサムネイルの URL のみを表示します。画像のサムネイルの幅を指定値 (px) で出力します。高さは比率を保ち自動算出されます。元画像のサイズより大きな値を指定した場合は、無視されます。画像のサムネイルの高さを指定値 (px) で出力します。幅は比率を保ち自動算出されます。width と height の両方を指定した場合、元画像サイズの長辺の指定を適用し、短辺は比率を保って自動算出します。画像のサムネイルを実際サイズの指定値 (%) 縮小して出力します。サムネイルを 1:1 で出力します。辺のサイズは width または height モディファイアを付与して設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/assetthumbnailurl.html
       */
      ["mt:AssetThumbnailURL"]: {
        /**
         * 画像のサムネイルの幅を指定値 (px) で出力します。高さは比率を保ち自動算出されます。元画像のサイズより大きな値を指定した場合は、無視されます。
         */
        width?: number;

        /**
         * 画像のサムネイルの高さを指定値 (px) で出力します。幅は比率を保ち自動算出されます。width と height の両方を指定した場合、元画像サイズの長辺の指定を適用し、短辺は比率を保って自動算出します。
         */
        height?: number;

        /**
         * 画像のサムネイルを実際サイズの指定値 (%) 縮小して出力します。
         */
        scale?: string;

        /**
         * サムネイルを 1:1 で出力します。辺のサイズは width または height モディファイアを付与して設定します。
         */
        square?: string;

        /**
         *
         */
        force?: string;
      } & GlobalModifier;

      /**
       * アイテムの種類を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/assettype.html
       */
      ["mt:AssetType"]: {} & GlobalModifier;

      /**
       * アイテムのオリジナルファイルへの URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/asseturl.html
       */
      ["mt:AssetURL"]: {} & GlobalModifier;

      /**
       * Atom API をサポートする CGI プログラムのファイル名を表示します。MTCGIPath タグと組み合わせることで、プログラムへのパスを生成できます。
       * @see https://movabletype.jp/documentation/appendices/tags/atomscript.html
       */
      ["mt:AtomScript"]: {} & GlobalModifier;

      /**
       * 「オーディオ」システムオブジェクトで作成したカスタムフィールドの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/audiocustomfielddescription.html
       */
      ["mt:AudioCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 「オーディオ」システムオブジェクトで作成したカスタムフィールドの『名前』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/audiocustomfieldname.html
       */
      ["mt:AudioCustomFieldName"]: {} & GlobalModifier;

      /**
       * 「オーディオ」システムオブジェクトで作成したカスタムフィールドを一覧で表示するブロックタグです。作成したすべてのカスタムフィールドを表示します。include モディファイアでは、指定したカスタムフィールドのみを表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/audiocustomfields.html
       */
      ["mt:AudioCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 「オーディオ」システムオブジェクトで作成したカスタムフィールドに入力した値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/audiocustomfieldvalue.html
       */
      ["mt:AudioCustomFieldValue"]: {} & GlobalModifier;

      /**
       * ユーザーアカウントの作成元のサービスを示すアイコンの絶対 URL を表示します。例えば LiveJournal のアカウントでサインインしてコメントした場合、 のような画像の絶対 URL が表示されます。ロゴのサイズを指定します。ピクセル数の指定ではなく、識別子を指定します。初期値は logo_small です。現在サポートしている識別子は logo_small のみです。
       * @see https://movabletype.jp/documentation/appendices/tags/authorauthiconurl.html
       */
      ["mt:AuthorAuthIconURL"]: {
        /**
         * ロゴのサイズを指定します。ピクセル数の指定ではなく、識別子を指定します。初期値は logo_small です。現在サポートしている識別子は logo_small のみです。
         */
        size?: string;
      } & GlobalModifier;

      /**
       * ユーザーの登録先システムを表示します。通常は Movable Type を示す MT です。
          
       * @see https://movabletype.jp/documentation/appendices/tags/authorauthtype.html
       */
      ["mt:AuthorAuthType"]: {} & GlobalModifier;

      /**
       * ユーザーのベースネームを表示します。主にユーザーアーカイブのフォルダ名などに利用されます。ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorbasename.html
       */
      ["mt:AuthorBasename"]: {
        /**
         * ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
         */
        separator?: string;
      } & GlobalModifier;

      /**
       * ユーザーが投稿したコメントの数を表示します。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorcommentcount.html
       */
      ["mt:AuthorCommentCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 特定のユーザーが投稿したコメントに対して返信されたコメントを一覧するためのブロックタグです。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。指定した数のコメントを表示します。N は 0 より大きな数値にしてください。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
       * @see https://movabletype.jp/documentation/appendices/tags/authorcommentresponses.html
       */
      ["mt:AuthorCommentResponses"]: {
        /**
         * 指定した数のコメントを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
         */
        sort_order?: "ascend" | "descend";
      } & GlobalModifier &
        BlockElement;

      /**
       * 特定のユーザーが投稿したコメントの一覧を出力するためのブロックタグです。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。指定した数のコメントを表示します。N は 0 より大きな数値にしてください。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
       * @see https://movabletype.jp/documentation/appendices/tags/authorcomments.html
       */
      ["mt:AuthorComments"]: {
        /**
         * 指定した数のコメントを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
         */
        sort_order?: "ascend" | "descend";
      } & GlobalModifier &
        BlockElement;

      /**
       * ユーザーが公開しているコンテンツデータの数を出力します。ステータスが公開になっていないコンテンツデータは含まれません。
       * @see https://movabletype.jp/documentation/appendices/tags/authorcontentcount.html
       */
      ["mt:AuthorContentCount"]: {
        /**
         *
         */
        singular?: string;

        /**
         *
         */
        plural?: string;

        /**
         *
         */
        none?: string;
      } & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTCustomFieldDescription タグを使用してください。ユーザー情報の編集画面に追加されたカスタムフィールドの『説明』を表示するファンクションタグです。MTCustomFieldDescription タグと同じ働きをします。このタグは MTAuthorCustomFields のコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorcustomfielddescription.html
       */
      ["mt:AuthorCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTCustomFieldName タグを使用してください。ユーザー情報の編集画面に追加されたフィールドの『名前』を表示するファンクションタグです。MTCustomFieldName タグと同じ働きをします。このタグは MTAuthorCustomFields タグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorcustomfieldname.html
       */
      ["mt:AuthorCustomFieldName"]: {} & GlobalModifier;

      /**
       * ユーザーのプロフィールに関するカスタムフィールドの情報を表示するためのブロックタグです。ユーザー情報の編集画面に追加された、すべてのカスタムフィールドの情報を表示します。include モディファイアに名前を指定したカスタムフィールドの情報を表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、カスタムフィールド作成時に設定した専用のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorcustomfields.html
       */
      ["mt:AuthorCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * このタグは現在、非推奨です。MTCustomFieldValue タグを使用してください。ユーザー情報の編集画面に追加されたフィールドの値を表示するファンクションタグです。MTCustomFieldValue タグと同じ働きをします。このタグは MTAuthorCustomFields タグのコンテキストで使用します。カスタムフィールドで追加した項目からアップロードした画像などのアイテムを表示するには、専用のタグと合わせて追加される Asset タグを使用します。詳しくはドキュメントをご参照ください。
       * @see https://movabletype.jp/documentation/appendices/tags/authorcustomfieldvalue.html
       */
      ["mt:AuthorCustomFieldValue"]: {} & GlobalModifier;

      /**
       * ユーザー情報の編集画面で入力した『表示名』の内容を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/authordisplayname.html
       */
      ["mt:AuthorDisplayName"]: {} & GlobalModifier;

      /**
       * ユーザー情報の編集画面で入力した『電子メール』の内容を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/authoremail.html
       */
      ["mt:AuthorEmail"]: {} & GlobalModifier;

      /**
       * ユーザーが作成した記事（公開・未公開）の数を表示します。公開日を指定している記事はカウントされません。公開した記事のみを表示する場合は MTAuthorEntryCount タグを使用します。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorentriescount.html
       */
      ["mt:AuthorEntriesCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * ユーザーが公開している記事の数を表示します。未公開記事も含める場合には MTAuthorEntriesCount タグを使用します。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorentrycount.html
       */
      ["mt:AuthorEntryCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 現在のコンテクストのユーザーがお気に入りにしている記事の一覧を表示します。通常は、ユーザーのプロフィールページで利用します。指定できるモディファイアなどは、MTEntries と互換性があります。

Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/authorfavoriteentries.html
       */
      ["mt:AuthorFavoriteEntries"]: {} & GlobalModifier;

      /**
       * 対象のユーザーを注目しているユーザーの一覧を表示するためのブロックタグです。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。指定した数のユーザーを表示します。ユーザーは作成した順に表示されます。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。複数のユーザー情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、ユーザーの『表示名』を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果は次のとおりです。
       * @see https://movabletype.jp/documentation/appendices/tags/authorfollowers.html
       */
      ["mt:AuthorFollowers"]: {
        /**
         * 指定した数のユーザーを表示します。ユーザーは作成した順に表示されます。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。
         */
        lastn?: number;

        /**
         * 複数のユーザー情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、ユーザーの『表示名』を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果は次のとおりです。
         */
        glue?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ほかのユーザーから注目されている数を表示します。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorfollowerscount.html
       */
      ["mt:AuthorFollowersCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 対象のユーザーが注目しているユーザーの一覧を表示するためのブロックタグです。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。指定した数のユーザーを表示します。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。複数のユーザー情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、ユーザーの『表示名』を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果は次のとおりです。
       * @see https://movabletype.jp/documentation/appendices/tags/authorfollowing.html
       */
      ["mt:AuthorFollowing"]: {
        /**
         * 指定した数のユーザーを表示します。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。
         */
        lastn?: number;

        /**
         * 複数のユーザー情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、ユーザーの『表示名』を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果は次のとおりです。
         */
        glue?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 注目しているユーザーのアクションのうち、コメント投稿を一覧するブロックタグです。このタグの中では、コメント関連のテンプレートタグを使用できます。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。指定した数のコメントを表示します。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。lastn モディファイアがコメントの作成日順に指定件数を表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数を最大件数として表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。値に auto を指定した場合、Movable Type の管理画面で設定した表示件数、または、日数分で出力します。lastn モディファイアの無い状態で、並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。
       * @see https://movabletype.jp/documentation/appendices/tags/authorfollowingcomments.html
       */
      ["mt:AuthorFollowingComments"]: {
        /**
         * 指定した数のコメントを表示します。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。
         */
        lastn?: number;

        /**
         * lastn モディファイアがコメントの作成日順に指定件数を表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数を最大件数として表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。値に auto を指定した場合、Movable Type の管理画面で設定した表示件数、または、日数分で出力します。
         */
        limit?: number;

        /**
         * lastn モディファイアの無い状態で、並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。
         */
        sort_order?: "ascend" | "descend";
      } & GlobalModifier &
        BlockElement;

      /**
       * 対象のユーザーが注目しているユーザーの数を表示します。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorfollowingcount.html
       */
      ["mt:AuthorFollowingCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 注目しているユーザーのアクションのうち、記事（トピック）の投稿を一覧するためのブロックタグです。このタグの中では、記事関連のテンプレートタグを使用できます。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。指定した数の記事を表示します。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。lastn モディファイアが記事の作成日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数を最大件数として表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。記事を並び替える対象を指定します。rate, score を指定するときは、namespace モディファイアで対象を設定する必要があります。もし、Commercial Pack がインストールされているなら、カスタムフィールドの値を利用してソートできます。モディファイアの値を field:customfieldbasename のように設定し、customfieldbasename には、カスタムフィールドで作成したフィールドの [ベースネーム] を記入します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorfollowingentries.html
       */
      ["mt:AuthorFollowingEntries"]: {
        /**
         * 指定した数の記事を表示します。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。
         */
        lastn?: number;

        /**
         * lastn モディファイアが記事の作成日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数を最大件数として表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。
         */
        limit?: number;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。
         */
        sort_order?: "ascend" | "descend";

        /**
         * 記事を並び替える対象を指定します。rate, score を指定するときは、namespace モディファイアで対象を設定する必要があります。もし、Commercial Pack がインストールされているなら、カスタムフィールドの値を利用してソートできます。モディファイアの値を field:customfieldbasename のように設定し、customfieldbasename には、カスタムフィールドで作成したフィールドの [ベースネーム] を記入します。
         */
        sort_by?:
          | "authored_on"
          | "title"
          | "ping_count"
          | "comment_count"
          | "author_id"
          | "excerpt"
          | "status"
          | "created_on"
          | "modified_on"
          | "rate"
          | "score"
          | "カスタムフィールドの値で並べ替えやフィルタリングする"
          | string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 注目しているユーザーのアクションのうち、お気に入り登録を一覧するブロックタグです。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。指定した数のお気に入り登録を表示します。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。lastn モディファイアが記事の作成日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数を最大件数として表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。記事を並び替える対象を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorfollowingfavorites.html
       */
      ["mt:AuthorFollowingFavorites"]: {
        /**
         * 指定した数のお気に入り登録を表示します。N は 0 より大きな数値にしてください。初期値 (このモディファイアを指定しないときに設定される件数) は 20 件です。
         */
        lastn?: number;

        /**
         * lastn モディファイアが記事の作成日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数を最大件数として表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。
         */
        limit?: number;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。
         */
        sort_order?: "ascend" | "descend";

        /**
         * 記事を並び替える対象を指定します。
         */
        sort_by?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 特定のユーザーを注目するリンクを出力します。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。リンクにするテキストを入力します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorfollowlink.html
       */
      ["mt:AuthorFollowLink"]: {
        /**
         * リンクにするテキストを入力します。
         */
        text?: string;
      } & GlobalModifier;

      /**
       * ユーザーのコンテキスト内で条件分岐をおこなうブロックタグです。ユーザーが公開 (Publish) された記事を持っているか判別し、もし持っているときは true (真) となり、囲んだ内容を処理します。あわせて MTElse ブロックタグを使用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/authorhasentry.html
       */
      ["mt:AuthorHasEntry"]: {} & GlobalModifier & BlockElement;

      /**
       * ユーザーのコンテキスト内で条件分岐をおこなうブロックタグです。公開 (Publish) されたウェブページをユーザーが持っているか判別し、持っているときは true (真) となり、囲んだ内容を処理します。あわせて MTElse ブロックタグを使用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/authorhaspage.html
       */
      ["mt:AuthorHasPage"]: {} & GlobalModifier & BlockElement;

      /**
       * ユーザーの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorid.html
       */
      ["mt:AuthorID"]: {} & GlobalModifier;

      /**
       * ブログにサインイン中のユーザーが、表示中のプロフィールページのユーザーに注目されているか判別します。実際には、span タグに style="display:none" がついた状態で、true (真) と false (偽) の内容が両方出力され、コミュニティブログ、コミュニティ掲示板の JavaScript で表示内容が制御されます。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。値はコミュニティスクリプトが利用します。MTAuthorIfFollowed タグを利用するページのユーザーの ID が 4 のとき、値は followed_4 または followed_else_4 となります。 初期値は followed です。値はコミュニティスクリプトが利用します。MTAuthorIfFollowed タグの中で条件分岐を行った時、条件に当てはまる場合に付与する class 属性の値を指定します。通常の利用では、特に設定する必要はありません。初期値は followed です。値はコミュニティスクリプトが利用します。MTAuthorIfFollowed タグの中で条件分岐を行った時、条件に当てはまらなかった場合に付与する class 属性の値を指定します。通常の利用では、特に設定する必要はありません。コミュニティスクリプトを呼び出す HTML コードを出力します。初期値は 1 (出力する) です。
       * @see https://movabletype.jp/documentation/appendices/tags/authoriffollowed.html
       */
      ["mt:AuthorIfFollowed"]: {
        /**
         * 値はコミュニティスクリプトが利用します。MTAuthorIfFollowed タグを利用するページのユーザーの ID が 4 のとき、値は followed_4 または followed_else_4 となります。 初期値は followed です。
         */
        id?: string;

        /**
         * 値はコミュニティスクリプトが利用します。MTAuthorIfFollowed タグの中で条件分岐を行った時、条件に当てはまる場合に付与する class 属性の値を指定します。通常の利用では、特に設定する必要はありません。初期値は followed です。
         */
        class?: string;

        /**
         * 値はコミュニティスクリプトが利用します。MTAuthorIfFollowed タグの中で条件分岐を行った時、条件に当てはまらなかった場合に付与する class 属性の値を指定します。通常の利用では、特に設定する必要はありません。
         */
        class_else?: string;

        /**
         * コミュニティスクリプトを呼び出す HTML コードを出力します。初期値は 1 (出力する) です。
         */
        script?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * サインイン中のユーザーが、表示中のプロフィールページのユーザーを注目しているか判別します。実際には、span タグに style="display:none" がついた状態で、true (真) と false (偽) の内容が両方出力され、コミュニティブログ、コミュニティ掲示板の JavaScript で表示内容が制御されます。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。値はコミュニティスクリプトが利用します。MTAuthorIfFollowing タグを利用するページのユーザーの ID が 4 のとき、値は following_4 または following_else_4 となります。 初期値は following です。値はコミュニティスクリプトが利用します。MTAuthorIfFollowing タグの中で条件分岐を行った時、条件に当てはまる場合に付与する class 属性の値を指定します。通常の利用では、特に設定する必要はありません。初期値は following です。値はコミュニティスクリプトが利用します。MTAuthorIfFollowing タグの中で条件分岐を行った時、条件に当てはまらなかった場合に付与する class 属性の値を指定します。通常の利用では、特に設定する必要はありません。初期値は followingl_else です。コミュニティスクリプトを呼び出す HTML コードを出力します。初期値は 1 (出力する) です。
       * @see https://movabletype.jp/documentation/appendices/tags/authoriffollowing.html
       */
      ["mt:AuthorIfFollowing"]: {
        /**
         * 値はコミュニティスクリプトが利用します。MTAuthorIfFollowing タグを利用するページのユーザーの ID が 4 のとき、値は following_4 または following_else_4 となります。 初期値は following です。
         */
        id?: string;

        /**
         * 値はコミュニティスクリプトが利用します。MTAuthorIfFollowing タグの中で条件分岐を行った時、条件に当てはまる場合に付与する class 属性の値を指定します。通常の利用では、特に設定する必要はありません。初期値は following です。
         */
        class?: string;

        /**
         * 値はコミュニティスクリプトが利用します。MTAuthorIfFollowing タグの中で条件分岐を行った時、条件に当てはまらなかった場合に付与する class 属性の値を指定します。通常の利用では、特に設定する必要はありません。初期値は followingl_else です。
         */
        class_else?: string;

        /**
         * コミュニティスクリプトを呼び出す HTML コードを出力します。初期値は 1 (出力する) です。
         */
        script?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ユーザー作成時、または、ユーザー情報の編集画面で入力した『ユーザー名』の内容を表示します。ユーザー名は管理画面へのサインインに使用されるため、ブログ上での表示には MTEntryAuthorDisplayName ファンクションタグの利用を推奨しています。
       * @see https://movabletype.jp/documentation/appendices/tags/authorname.html
       */
      ["mt:AuthorName"]: {} & GlobalModifier;

      /**
       * 現在のユーザーアーカイブの次のユーザーアーカイブの内容を表示するためのブロックタグです。記事やウェブページをひとつも公開していないユーザーは除かれます。
       * @see https://movabletype.jp/documentation/appendices/tags/authornext.html
       */
      ["mt:AuthorNext"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のユーザーアーカイブのひとつ前のユーザーアーカイブの内容を表示するためのブロックタグです。記事やウェブページをひとつも公開していないユーザーは除かれます。
       * @see https://movabletype.jp/documentation/appendices/tags/authorprevious.html
       */
      ["mt:AuthorPrevious"]: {} & GlobalModifier & BlockElement;

      /**
       * ユーザーに付けられたスコアを一定の範囲内でランク付けします。数値が小さい方が頻度が高くなります。スコアを付けるには別途プラグインなどが必要です。
       * @see https://movabletype.jp/documentation/appendices/tags/authorrank.html
       */
      ["mt:AuthorRank"]: {} & GlobalModifier;

      /**
       * ブログに登録されているユーザー一覧のためのブロックタグです。モディファイアを指定することで、特定の条件で並べたり、一覧するユーザーの数を限定できます。ユーザーの設定で『表示名』に入力した内容でフィルタリングをおこないます。指定した数のユーザーを表示します。N は 0 より大きな数値にしてください。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。ユーザーを並び替える対象を指定します。指定したロール (役割)に所属するユーザーのみを表示します。カンマで区切ることで複数のロールを指定できます。また、カテゴリのフィルタリングのように role="デザイナ AND NOT ユーザー" という書式が利用できます。値を 1 に設定すると、すでに記事かウェブページを作成しているユーザーのみを表示します。初期値は 1 です。"1" を指定すると、コメント投稿者を含むすべてのロールで権限設定されたユーザーを表示します。need_entry="0" とあわせて利用してください。初期値は 0 です。"1" を指定すると、システム管理者などの全般的な権限ではなく、ブログを直接指定した権限をもつユーザーのみを表示します。このモディファイアは、include_blogs, exclude_blogs, blog_ids などのコンテキストが必要です。初期値は 0 です。有効化されたユーザー、もしくは無効化されたユーザーでフィルタリングをおこないます。enabled あるいは disabled の値を設定します。初期値は enabled です。スコアを追加する仕組みで決められた名前空間を設定します。"min_*" および "max_*" とあわせて、スコアを評価するために利用します。namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のスコアでフィルターします。このモディファイアは、どのオブジェクトを参照するかを指定します。オブジェクトはコンテキスト内で指定されている必要があります。namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のスコアでフィルターします。フィルターする最小値を指定します。namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のスコアでフィルターします。フィルターする最大値を指定します。namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のランクでフィルターします。フィルターする最小値を指定します。namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のランクでフィルターします。フィルターする最大値を指定します。namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内の数でフィルターします。フィルターする最小値を指定します。namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内の数でフィルターします。フィルターする最大値を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/authors.html
       */
      ["mt:Authors"]: {
        /**
         * ユーザーの設定で『表示名』に入力した内容でフィルタリングをおこないます。
         */
        display_name?: string;

        /**
         * 指定した数のユーザーを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。
         */
        sort_order?: "ascend" | "descend";

        /**
         * ユーザーを並び替える対象を指定します。
         */
        sort_by?:
          | "created_on"
          | "name"
          | "display_name"
          | "email"
          | "url"
          | string;

        /**
         * 指定したロール (役割)に所属するユーザーのみを表示します。カンマで区切ることで複数のロールを指定できます。また、カテゴリのフィルタリングのように role="デザイナ AND NOT ユーザー" という書式が利用できます。
         */
        role?: string;

        /**
         * 値を 1 に設定すると、すでに記事かウェブページを作成しているユーザーのみを表示します。初期値は 1 です。
         */
        need_entry?: string;

        /**
         * "1" を指定すると、コメント投稿者を含むすべてのロールで権限設定されたユーザーを表示します。need_entry="0" とあわせて利用してください。初期値は 0 です。
         */
        any_type?: string;

        /**
         * "1" を指定すると、システム管理者などの全般的な権限ではなく、ブログを直接指定した権限をもつユーザーのみを表示します。このモディファイアは、include_blogs, exclude_blogs, blog_ids などのコンテキストが必要です。初期値は 0 です。
         */
        need_association?: string;

        /**
         * 有効化されたユーザー、もしくは無効化されたユーザーでフィルタリングをおこないます。enabled あるいは disabled の値を設定します。初期値は enabled です。
         */
        status?: string;

        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。"min_*" および "max_*" とあわせて、スコアを評価するために利用します。
         */
        namespace?: string;

        /**
         * namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のスコアでフィルターします。このモディファイアは、どのオブジェクトを参照するかを指定します。オブジェクトはコンテキスト内で指定されている必要があります。
         */
        scoring_to?: string;

        /**
         * namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のスコアでフィルターします。フィルターする最小値を指定します。
         */
        min_score?: string;

        /**
         * namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のスコアでフィルターします。フィルターする最大値を指定します。
         */
        max_score?: string;

        /**
         * namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のランクでフィルターします。フィルターする最小値を指定します。
         */
        min_rate?: string;

        /**
         * namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内のランクでフィルターします。フィルターする最大値を指定します。
         */
        max_rate?: string;

        /**
         * namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内の数でフィルターします。フィルターする最小値を指定します。
         */
        min_count?: string;

        /**
         * namespace モディファイアが同時に指定されていた場合、ユーザーをその名前空間内の数でフィルターします。フィルターする最大値を指定します。
         */
        max_count?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ユーザーに付けられたスコアの合計を表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/authorscore.html
       */
      ["mt:AuthorScore"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * ユーザーに付けられたスコアの平均スコアを表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/authorscoreavg.html
       */
      ["mt:AuthorScoreAvg"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * ユーザーに付けられたスコア合計回数を表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorscorecount.html
       */
      ["mt:AuthorScoreCount"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * ユーザーに付けられたスコアの中で一番高いスコアを表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/authorscorehigh.html
       */
      ["mt:AuthorScoreHigh"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * ユーザーに付けられたスコアの中で一番低いスコアを表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/authorscorelow.html
       */
      ["mt:AuthorScoreLow"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * 特定のユーザーの注目をやめるリンクを出力します。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。出力するリンクに class 属性を付与します。設定する値は class 属性の値で、半角スペースで区切って複数の値を指定できます。リンクにするテキストを入力します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorunfollowlink.html
       */
      ["mt:AuthorUnFollowLink"]: {
        /**
         * 出力するリンクに class 属性を付与します。設定する値は class 属性の値で、半角スペースで区切って複数の値を指定できます。
         */
        class?: string;

        /**
         * リンクにするテキストを入力します。
         */
        text?: string;
      } & GlobalModifier;

      /**
       * ユーザー情報の編集画面で入力した『ウェブサイト URL』の内容を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/authorurl.html
       */
      ["mt:AuthorURL"]: {} & GlobalModifier;

      /**
       * 登録ユーザーのプロフィール画像を表示するための img 要素を表示します。出力のサンプルは以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/authoruserpic.html
       */
      ["mt:AuthorUserpic"]: {} & GlobalModifier;

      /**
       * ユーザー情報の編集画面でアップロードしたプロフィール画像は、システムレベルのアイテムとして登録されます。このブロックタグの中では、アイテム関連のテンプレートタグを利用し、プロフィール画像の情報を取得することができます。
       * @see https://movabletype.jp/documentation/appendices/tags/authoruserpicasset.html
       */
      ["mt:AuthorUserpicAsset"]: {} & GlobalModifier & BlockElement;

      /**
       * ユーザーのプロフィール画像の URL アドレスを出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/authoruserpicurl.html
       */
      ["mt:AuthorUserpicURL"]: {} & GlobalModifier;

      /**
       * 画像とファイルブロックをアイテムとして出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/mtblockeditorblockasset.html
       */
      ["mt:BlockEditorBlockAsset"]: {} & GlobalModifier;

      /**
       * ブロックを繰り返しで表示します。
マルチカラムのブロックは、入れ子にして利用することで深い階層も構造的に表示することができます。モディファイアを指定しない場合には、「現在のブロックの子ブロック」が対象になります。
       * @see https://movabletype.jp/documentation/appendices/tags/mtblockeditorblocks.html
       */
      ["mt:BlockEditorBlocks"]: {
        /**
         *
         */
        tag?: string;

        /**
         *
         */
        var?: string;

        /**
         *
         */
        name?: string;
      } & GlobalModifier;

      /**
       * ブログに設定した『アーカイブ URL』を表示します。『アーカイブ URL』を設定していない場合は『ブログ URL』を表示します。URL の末尾には必ず / がつきます。ブログの ID を指定します。このモディファイアを指定した場合、指定した ID のブログのアーカイブ URL を出力します。次のサンプルは、ID が 10 のブログのアーカイブ URL を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogarchiveurl.html
       */
      ["mt:BlogArchiveURL"]: {
        /**
         * ブログの ID を指定します。このモディファイアを指定した場合、指定した ID のブログのアーカイブ URL を出力します。次のサンプルは、ID が 10 のブログのアーカイブ URL を出力します。
         */
        id?: string;
      } & GlobalModifier;

      /**
       * ブログの総カテゴリ数を表示します。複数のブログを運用しているとき、下記のモディファイアを指定すると、複数のブログに登録されているカテゴリの数を表示します。対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogcategorycount.html
       */
      ["mt:BlogCategoryCount"]: {
        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * ブログの設定で選択したクリエイティブ・コモンズ・ライセンスのバナー画像の URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogcclicenseimage.html
       */
      ["mt:BlogCCLicenseImage"]: {} & GlobalModifier;

      /**
       * ブログの設定で選択したクリエイティブ・コモンズ・ライセンスに関する内容が書かれているサイトの URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogcclicenseurl.html
       */
      ["mt:BlogCCLicenseURL"]: {} & GlobalModifier;

      /**
       * ブログの総コメント数を表示します。複数のブログを運用しているとき、下記のモディファイアを指定すると、複数のブログのコメント数を表示します。対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogcommentcount.html
       */
      ["mt:BlogCommentCount"]: {
        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;

        /**
         *
         */
        top?: string;
      } & GlobalModifier;

      /**
       * 「ブログ」システムオブジェクトで作成したカスタムフィールドの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogcustomfielddescription.html
       */
      ["mt:BlogCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 「ブログ」システムオブジェクトで作成したカスタムフィールドの『名前』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogcustomfieldname.html
       */
      ["mt:BlogCustomFieldName"]: {} & GlobalModifier;

      /**
       * 「ブログ」システムオブジェクトで作成したカスタムフィールドを一覧で表示するブロックタグです。作成したすべてのカスタムフィールドを表示します。include モディファイアでは、指定したカスタムフィールドのみを表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。カンマで区切ることで複数指定できます。指定した名前のカスタムフィールドの情報を対象から除外します。カンマで区切ることで複数指定できます。
       * @see https://movabletype.jp/documentation/appendices/tags/blogcustomfields.html
       */
      ["mt:BlogCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。カンマで区切ることで複数指定できます。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。カンマで区切ることで複数指定できます。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 「ブログ」システムオブジェクトで作成したカスタムフィールドに入力した値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogcustomfieldvalue.html
       */
      ["mt:BlogCustomFieldValue"]: {} & GlobalModifier;

      /**
       * ブログの「日付の言語」で設定した言語名を表示します。このタグは Movable Type 5.2.5 から導入されました。値に 1 を設定した場合、言語名をロケール形式 ("en_US", "de_DE"など) で表示します。初期値は 0 です。値に 1 を設定した場合、RFC3066 の仕様にもとづき、下位言語コードをつなぐアンダースコア'_' をハイフン '-' に変換して表示します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/blogdatelanguage.html
       */
      ["mt:BlogDateLanguage"]: {
        /**
         * 値に 1 を設定した場合、言語名をロケール形式 ("en_US", "de_DE"など) で表示します。初期値は 0 です。
         */
        locale?: string;

        /**
         * 値に 1 を設定した場合、RFC3066 の仕様にもとづき、下位言語コードをつなぐアンダースコア'_' をハイフン '-' に変換して表示します。初期値は 0 です。
         */
        ietf?: string;
      } & GlobalModifier;

      /**
       * ブログに設定した『説明』の内容を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogdescription.html
       */
      ["mt:BlogDescription"]: {} & GlobalModifier;

      /**
       * ブログの総記事数 (公開している) を表示します。複数のブログを運用しているとき、下記のモディファイアを指定すると、複数のブログの記事の合計数を表示します。対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogentrycount.html
       */
      ["mt:BlogEntryCount"]: {
        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * ブログの公開の設定で指定したアーカイブの拡張子をピリオドを付けて表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogfileextension.html
       */
      ["mt:BlogFileExtension"]: {} & GlobalModifier;

      /**
       * ブログのホスト名を表示します。例えば、ブログ URL が http://www.example.com/blog/ の場合、www.example.com を表示します。1 に設定すると、ブログ URL にポート番号が含まれている場合に、ポート番号を除いてホスト名を表示します。例えば、ブログ URL が http://www.example.com:8080/blog/ の場合は、www.example.com が表示されます。初期値は 0 です。1 に設定すると、ホスト名に含まれるドット（.）をアンダースコア（_）に変換して表示します。例えば、http://www.example.com/blog/ の場合は、www_example_com が表示されます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/bloghost.html
       */
      ["mt:BlogHost"]: {
        /**
         * 1 に設定すると、ブログ URL にポート番号が含まれている場合に、ポート番号を除いてホスト名を表示します。例えば、ブログ URL が http://www.example.com:8080/blog/ の場合は、www.example.com が表示されます。初期値は 0 です。
         */
        exclude_port?: string;

        /**
         * 1 に設定すると、ホスト名に含まれるドット（.）をアンダースコア（_）に変換して表示します。例えば、http://www.example.com/blog/ の場合は、www_example_com が表示されます。初期値は 0 です。
         */
        signature?: string;
      } & GlobalModifier;

      /**
       * ブログの ID 番号を表示します。ブログには 1, 2, 3... といった正の整数の ID 番号が割り当てられます (必ずしも1から始まる連番になるわけではありません)。
       * @see https://movabletype.jp/documentation/appendices/tags/blogid.html
       */
      ["mt:BlogID"]: {} & GlobalModifier;

      /**
       * ブログの設定でクリエイティブ・コモンズ・ライセンスを選択しているときに実行する条件タグです。クリエイティブ・コモンズ・ライセンスを選択していないときは実行されません。
       * @see https://movabletype.jp/documentation/appendices/tags/blogifcclicense.html
       */
      ["mt:BlogIfCCLicense"]: {} & GlobalModifier & BlockElement;

      /**
       * ブログでコメントを受け付けるよう設定していて、且つ、認証方式の設定において匿名ユーザーからコメントを受け付けるよう設定している場合に、このタグで囲んだ部分を実行します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogifcommentsopen.html
       */
      ["mt:BlogIfCommentsOpen"]: {} & GlobalModifier & BlockElement;

      /**
       * ブログに設定した「使用言語」を表示します。1 の値を設定した場合、言語名をロケール形式 ("en_US", "de_DE"など) で表示します。初期値は 0 です。1 の値を設定した場合、RFC3066 の仕様にもとづき、下位言語コードをつなぐアンダーバー'_' をハイフン '-' に変換して表示します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/bloglanguage.html
       */
      ["mt:BlogLanguage"]: {
        /**
         * 1 の値を設定した場合、言語名をロケール形式 ("en_US", "de_DE"など) で表示します。初期値は 0 です。
         */
        locale?: string;

        /**
         * 1 の値を設定した場合、RFC3066 の仕様にもとづき、下位言語コードをつなぐアンダーバー'_' をハイフン '-' に変換して表示します。初期値は 0 です。
         */
        ietf?: string;
      } & GlobalModifier;

      /**
       * ブログの名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogname.html
       */
      ["mt:BlogName"]: {} & GlobalModifier;

      /**
       * ブログの総ウェブページ数 (公開している) を表示します。複数のブログを運用しているとき、モディファイアを指定すると、複数のブログのウェブページの合計数を表示します。対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogpagecount.html
       */
      ["mt:BlogPageCount"]: {
        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * ブログのコンテキストから、ブログが所属している親ウェブサイトを取得するブロックタグです。例えば、親ウェブサイトの ID を以下のサンプルように取得できます。Movable Type 5.2.7 以降では、ブログのコンテキスト内であれば、以下のサンプルのように親ウェブサイトの ID を直接取得できます。
       * @see https://movabletype.jp/documentation/appendices/tags/blogparentwebsite.html
       */
      ["mt:BlogParentWebsite"]: {} & GlobalModifier & BlockElement;

      /**
       * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogpingcount.html
       */
      ["mt:BlogPingCount"]: {
        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * ブログの URL を相対 URL で表示します。例えば、ブログ URL が http://www.example.com/blog/ の場合は /blog/ を表示します。ブログの ID を指定します。このモディファイアを指定した場合、指定した ID のブログの相対 URL を出力します。次のサンプルは、ID が 10 のブログの相対 URL を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogrelativeurl.html
       */
      ["mt:BlogRelativeURL"]: {
        /**
         * ブログの ID を指定します。このモディファイアを指定した場合、指定した ID のブログの相対 URL を出力します。次のサンプルは、ID が 10 のブログの相対 URL を出力します。
         */
        id?: string;
      } & GlobalModifier;

      /**
       * 検索結果の表示に利用します。検索結果のリスト内で、記事が所属するブログ（コンテキスト内の Blog ID）が切り替わる際に、このブロックタグの内容をフッターとして表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogresultfooter.html
       */
      ["mt:BlogResultFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * 検索結果の表示に利用します。検索結果のリスト内で、記事が所属するブログ（コンテキスト内の Blog ID）が切り替わる際に、このブロックタグの内容をヘッダーとして表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogresultheader.html
       */
      ["mt:BlogResultHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * ブログの一覧を表示するためのブロックタグです。対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/blogs.html
       */
      ["mt:Blogs"]: {
        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ブログの管理画面で設定した『ブログパス』の内容を表示します。ウェブブラウザで表示する URL ではなく、サーバールートからブログディレクトリまでの絶対パスを表示します。パスの末尾には必ずスラッシュ (/) がつきます。
       * @see https://movabletype.jp/documentation/appendices/tags/blogsitepath.html
       */
      ["mt:BlogSitePath"]: {} & GlobalModifier;

      /**
       * Movable Type 5 以降では MTBlogThemeID タグを使用してください。ブログに適用されているテーマ（テンプレートセット）の識別子を表示します。表示される識別子は、数値ではなく文字列になります。例えば、「クラシックブログ」テーマを適用しているブログでは、Classic Blog が表示されます。識別子にアンダースコアが含まれている場合はハイフンに置換されます。例えば、Classic_Blog は Classic-Blog となります。
       * @see https://movabletype.jp/documentation/appendices/tags/blogtemplatesetid.html
       */
      ["mt:BlogTemplateSetID"]: {} & GlobalModifier;

      /**
       * ブログに適用されているテーマの識別子を表示します。表示される識別子は、数値ではなく文字列になります。また、識別子にアンダースコアが含まれる場合はハイフンに置換されます。例えば、「クラシックブログ」テーマ (classic_blog) を適用している場合は classic-blog が表示されます。アンダースコアのまま出力したい場合は 1 を設定します。このモディファイアは Movable Type 6.0.4 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/blogthemeid.html
       */
      ["mt:BlogThemeID"]: {
        /**
         * アンダースコアのまま出力したい場合は 1 を設定します。このモディファイアは Movable Type 6.0.4 で追加されました。
         */
        raw?: string;
      } & GlobalModifier;

      /**
       * ブログの設定で指定した時間帯 (タイムゾーン) を表示します。協定世界時 (UTC、世界標準時) からの時差が表示されます。値に 1 を指定すると、コロン（:）を除いて表示します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/blogtimezone.html
       */
      ["mt:BlogTimezone"]: {
        /**
         * 値に 1 を指定すると、コロン（:）を除いて表示します。初期値は 0 です。
         */
        no_colon?: string;
      } & GlobalModifier;

      /**
       * ブログの絶対 URL を表示します。ブログの ID を指定します。このモディファイアを指定した場合、指定した ID のブログの絶対 URL を出力します。次のサンプルは、ID が 10 のブログの絶対 URL を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/blogurl.html
       */
      ["mt:BlogURL"]: {
        /**
         * ブログの ID を指定します。このモディファイアを指定した場合、指定した ID のブログの絶対 URL を出力します。次のサンプルは、ID が 10 のブログの絶対 URL を出力します。
         */
        id?: string;
      } & GlobalModifier;

      /**
       * ファイルの出力元となるテンプレートの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/buildtemplateid.html
       */
      ["mt:BuildTemplateID"]: {} & GlobalModifier;

      /**
       * 一ケ月分のカレンダーを表示するためのブロックタグです。month モディファイアを使用して表示する月を指定できます。指定したカテゴリ名のカレンダーを作ります。指定した月のカレンダーを表示します。4 桁の年と 2 桁の月 (例 201501) で年月を指定してください。記事アーカイブと記事リストアーカイブ（月別、週別、日別）では、当月のカレンダーを表示する this を利用できます。先月のカレンダーを表示するときは last を指定してください。
       * @see https://movabletype.jp/documentation/appendices/tags/calendar.html
       */
      ["mt:Calendar"]: {
        /**
         * 指定したカテゴリ名のカレンダーを作ります。
         */
        category?: string;

        /**
         * 指定した月のカレンダーを表示します。4 桁の年と 2 桁の月 (例 201501) で年月を指定してください。記事アーカイブと記事リストアーカイブ（月別、週別、日別）では、当月のカレンダーを表示する this を利用できます。先月のカレンダーを表示するときは last を指定してください。
         */
        month?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * カレンダーにおけるセルの番号を表示します。この番号は、カレンダーの左上のセルを基点に 1 から始まり、水平に右に移動するごとに増加します。たとえば、土曜日から始まる月の場合、初日のセルの番号は 7 で始まります。
       * @see https://movabletype.jp/documentation/appendices/tags/calendarcellnumber.html
       */
      ["mt:CalendarCellNumber"]: {} & GlobalModifier;

      /**
       * カレンダーの日付だけでなく、時間も表示するタグです。format モディファイアで表示をカスタマイズできます。日付だけを表示したいときは、MTCalendarDay タグをお使いください。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/calendardate.html
       */
      ["mt:CalendarDate"]: {} & GlobalModifier;

      /**
       * カレンダーの日付を表示します。MTCalendarIfEntries タグ、MTCalendarIfNoEntries タグの中で利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/calendarday.html
       */
      ["mt:CalendarDay"]: {} & GlobalModifier;

      /**
       * カレンダーのセルが空白のとき (セル番号が設定されない場合) に実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/calendarifblank.html
       */
      ["mt:CalendarIfBlank"]: {} & GlobalModifier & BlockElement;

      /**
       * MTContentCalendarブロック内で、現在のコンテクストで処理されている日付にマッチするコンテンツデータが存在するときに実行される条件タグです。日付のフィールドは、MTContentCalendarタグの指定によります。
       * @see https://movabletype.jp/documentation/appendices/tags/calendarifcontents.html
       */
      ["mt:CalendarIfContents"]: {} & GlobalModifier & BlockElement;

      /**
       * 記事が投稿された日でのみ実行する条件タグです。カレンダーを表組みで表示するときに、記事が投稿された日のみに、日付アーカイブのリンクを付加したい場合などに利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/calendarifentries.html
       */
      ["mt:CalendarIfEntries"]: {} & GlobalModifier & BlockElement;

      /**
       * MTContentCalendarブロック内で、現在のコンテクストで処理されている日付にマッチするコンテンツデータが存在しないときに実行される条件タグです。日付のフィールドは、MTContentCalendarタグの指定によります。
       * @see https://movabletype.jp/documentation/appendices/tags/calendarifnocontents.html
       */
      ["mt:CalendarIfNoContents"]: {} & GlobalModifier & BlockElement;

      /**
       * 記事が投稿されてない日でのみ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/calendarifnoentries.html
       */
      ["mt:CalendarIfNoEntries"]: {} & GlobalModifier & BlockElement;

      /**
       * MTCalendar タグ内で、今日の日付でのみ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/calendariftoday.html
       */
      ["mt:CalendarIfToday"]: {} & GlobalModifier & BlockElement;

      /**
       * 週の終わりのときに実行する条件タグです。カレンダーを表組みにするとき、</tr> タグの出力などに利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/calendarweekfooter.html
       */
      ["mt:CalendarWeekFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * 週の始まりのときに実行する条件タグです。カレンダーを表組みにするとき、<tr> タグの出力などに利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/calendarweekheader.html
       */
      ["mt:CalendarWeekHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * インデックステンプレート、およびアーカイブテンプレート内で現在のぺージのリンク付き URL を出力します。このタグは、すべての種類のアーカイブで利用可能です。インデックステンプレート内では、ブログ URL を出力します。
アーカイブテンプレート内では、処理中のページの URL を出力します。
URL のみを出力する場合には MTCanonicalURL タグをお使いください。このタグは Movable Type 5.2.4 から導入されました。1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。1 の値を設定した場合、現在のコンテキストで出力される URL を出力します。1 以外の値が設定されており、テンプレートに複数のアーカイブマッピングが設定されている場合、優先順位の高いマッピングの URL を出力します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/canonicallink.html
       */
      ["mt:CanonicalLink"]: {
        /**
         * 1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
         */
        with_index?: string;

        /**
         * 1 の値を設定した場合、現在のコンテキストで出力される URL を出力します。1 以外の値が設定されており、テンプレートに複数のアーカイブマッピングが設定されている場合、優先順位の高いマッピングの URL を出力します。初期値は 0 です。
         */
        current_mapping?: string;
      } & GlobalModifier;

      /**
       * インデックステンプレート、およびアーカイブテンプレート内で現在のぺージの URL を出力します。このタグは、すべての種類のアーカイブで利用可能です。インデックステンプレート内では、ブログ URL を出力します。
アーカイブテンプレート内では、処理中のページの URL を出力します。MTCanonicalLink タグがリンクを出力するのに対し、このタグは URL のみを出力します。このタグは Movable Type 5.2.4 から導入されました。1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。1 の値を設定した場合、現在のコンテキストで出力される URL を出力します。1 以外の値が設定されており、テンプレートに複数のアーカイブマッピングが設定されている場合、優先順位の高いマッピングの URL を出力します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/canonicalurl.html
       */
      ["mt:CanonicalURL"]: {
        /**
         * 1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
         */
        with_index?: string;

        /**
         * 1 の値を設定した場合、現在のコンテキストで出力される URL を出力します。1 以外の値が設定されており、テンプレートに複数のアーカイブマッピングが設定されている場合、優先順位の高いマッピングの URL を出力します。初期値は 0 です。
         */
        current_mapping?: string;
      } & GlobalModifier;

      /**
       * CAPTCHA 認証を利用するよう設定している場合、認証用の画像とインプットフィールドを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/captchafields.html
       */
      ["mt:CaptchaFields"]: {} & GlobalModifier;

      /**
       * カテゴリの一覧を表示するためのブロックタグです。このタグはメインカテゴリもサブカテゴリも区別せずに表示します。
また、カテゴリはカテゴリ名を基準に文字コード順（昇順）で表示されます。表示順は固定で、変更することはできません。
階層的に表示したい場合や、表示順を変更したい場合は、MTSubCategories タグを利用します。複数のカテゴリを並べて表示するときの、区切り文字を設定します。指定した数のカテゴリを表示します。N は 0 より大きな数値にしてください。記事が登録されていないカテゴリも表示します。初期値は 0 です。対象サイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/categories.html
       */
      ["mt:Categories"]: {
        /**
         * 複数のカテゴリを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;

        /**
         * 指定した数のカテゴリを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 記事が登録されていないカテゴリも表示します。初期値は 0 です。
         */
        show_empty?: string;

        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 対象サイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * カテゴリアーカイブの URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/categoryarchivelink.html
       */
      ["mt:CategoryArchiveLink"]: {} & GlobalModifier;

      /**
       * カテゴリの編集画面の『出力ファイル/フォルダ名』に設定された値（ベースネーム）を表示します。カテゴリのコンテキスト外で使用した場合の出力内容を指定します。MTCategoryBasename タグはカテゴリのコンテキスト内で使用します。そのため、コンテキスト外でタグが使用された場合は、通常、再構築時にエラーが発生しますが、このモディファイアを指定すると再構築エラーにはなりません。ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorybasename.html
       */
      ["mt:CategoryBasename"]: {
        /**
         * カテゴリのコンテキスト外で使用した場合の出力内容を指定します。MTCategoryBasename タグはカテゴリのコンテキスト内で使用します。そのため、コンテキスト外でタグが使用された場合は、通常、再構築時にエラーが発生しますが、このモディファイアを指定すると再構築エラーにはなりません。
         */
        default?: string;

        /**
         * ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
         */
        separator?: string;
      } & GlobalModifier;

      /**
       * 特定のカテゴリに含まれる記事に投稿されたコメントの総数を表示します。指定した数のコメントを表示します。N は 0 より大きな数値にしてください。lastn モディファイアを指定しない場合、すべてのコメントが表示されます。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/categorycommentcount.html
       */
      ["mt:CategoryCommentCount"]: {
        /**
         * 指定した数のコメントを表示します。N は 0 より大きな数値にしてください。lastn モディファイアを指定しない場合、すべてのコメントが表示されます。
         */
        lastn?: number;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
         */
        sort_order?: "ascend" | "descend";

        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;

        /**
         *
         */
        top?: string;
      } & GlobalModifier;

      /**
       * カテゴリに含まれる記事の件数を表示します。未公開の記事は含みません。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。コンテンツデータをカウントしたいカテゴリコンテンツフィールドが含まれるコンテンツタイプを指定します。Movable Type 7 以降で使用可能です。コンテンツデータをカウントしたいカテゴリコンテンツフィールドを指定します。コンテンツタイプ内に複数のカテゴリコンテンツフィールドが存在する場合に使用します。Movable Type 7 以降で使用可能です。
       * @see https://movabletype.jp/documentation/appendices/tags/categorycount.html
       */
      ["mt:CategoryCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;

        /**
         * コンテンツデータをカウントしたいカテゴリコンテンツフィールドが含まれるコンテンツタイプを指定します。Movable Type 7 以降で使用可能です。
         */
        content_type?: string;

        /**
         * コンテンツデータをカウントしたいカテゴリコンテンツフィールドを指定します。コンテンツタイプ内に複数のカテゴリコンテンツフィールドが存在する場合に使用します。Movable Type 7 以降で使用可能です。
         */
        content_field?: string;
      } & GlobalModifier;

      /**
       * カテゴリの編集画面に追加されたカスタムフィールドの『説明』を表示するファンクションタグです。このタグは MTCategoryCustomFields タグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorycustomfielddescription.html
       */
      ["mt:CategoryCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * カテゴリの編集画面に追加されたカスタムフィールドの『名前』を表示するファンクションタグです。このタグは MTCategoryCustomFields タグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorycustomfieldname.html
       */
      ["mt:CategoryCustomFieldName"]: {} & GlobalModifier;

      /**
       * カテゴリに関するカスタムフィールドの情報を表示するためのブロックタグです。カテゴリの編集画面に追加されたすべてのカスタムフィールドの情報を表示します。include モディファイアを使用すると、名前を指定したカスタムフィールドのみを対象にできます。exclude モディファイアに名前を指定したカスタムフィールドは対象から除外されます。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorycustomfields.html
       */
      ["mt:CategoryCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * カテゴリの編集画面に追加されたフィールドの値を表示するファンクションタグです。このタグは MTCategoryCustomFields タグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorycustomfieldvalue.html
       */
      ["mt:CategoryCustomFieldValue"]: {} & GlobalModifier;

      /**
       * カテゴリの編集画面で入力した『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorydescription.html
       */
      ["mt:CategoryDescription"]: {} & GlobalModifier;

      /**
       * カテゴリの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/categoryid.html
       */
      ["mt:CategoryID"]: {} & GlobalModifier;

      /**
       * カテゴリへのトラックバックを受け付ける設定のときに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/categoryifallowpings.html
       */
      ["mt:CategoryIfAllowPings"]: {} & GlobalModifier & BlockElement;

      /**
       * カテゴリ名を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorylabel.html
       */
      ["mt:CategoryLabel"]: {} & GlobalModifier;

      /**
       * 現在のカテゴリの次のカテゴリの内容を表示するためのブロックタグです。このタグの中の MTCategoryLabel タグは、次のカテゴリのタイトルを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorynext.html
       */
      ["mt:CategoryNext"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のカテゴリの前のカテゴリの内容を表示するためのブロックタグです。このタグの中の MTCategoryLabel は、前のカテゴリのタイトルを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/categoryprevious.html
       */
      ["mt:CategoryPrevious"]: {} & GlobalModifier & BlockElement;

      /**
       * カテゴリセットの名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorysetname.html
       */
      ["mt:CategorySetName"]: {} & GlobalModifier;

      /**
       * ブロック内にMTCategories、MTSubCategories、MTTopLevelCategoriesが記述されている場合、現在のコンテクストから category_set_id が自動で適用されます。ブロック内では以下の変数が利用できます。複数のカテゴリセットを表示するときの区切り文字を指定します。次のサンプルでは、カテゴリセットの名前を列挙し、それぞれをカンマで区切って出力します。サンプルの出力結果はつぎのとおりです。
       * @see https://movabletype.jp/documentation/appendices/tags/categorysets.html
       */
      ["mt:CategorySets"]: {
        /**
         *
         */
        id?: string;

        /**
         *
         */
        blog_id?: string;

        /**
         *
         */
        name?: string;

        /**
         *
         */
        content_type?: string;

        /**
         * 複数のカテゴリセットを表示するときの区切り文字を指定します。次のサンプルでは、カテゴリセットの名前を列挙し、それぞれをカンマで区切って出力します。サンプルの出力結果はつぎのとおりです。
         */
        glue?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * カテゴリで受け付けたトラックバックの数を表示します。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorytrackbackcount.html
       */
      ["mt:CategoryTrackbackCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * カテゴリについてトラックバックを受け付ける設定になっているとき、そのカテゴリへのトラックバック URL を表示します。このタグは、カテゴリアーカイブか MTCategories タグの中で利用できます。また、モディファイア category を指定すると、どこでも利用できます。トラックバック URL を表示するカテゴリを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/categorytrackbacklink.html
       */
      ["mt:CategoryTrackbackLink"]: {
        /**
         * トラックバック URL を表示するカテゴリを指定します。
         */
        category?: string;
      } & GlobalModifier;

      /**
       * 選択したクリエイティブ・コモンズ・ライセンスにあわせた RDF を出力します。記事に適用したときには、RDF にその記事についての情報を追加します。他はブログの設定に基づきます。1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/cclicenserdf.html
       */
      ["mt:CCLicenseRDF"]: {
        /**
         * 1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
         */
        with_index?: string;
      } & GlobalModifier;

      /**
       * Movable Type をインストールしたホスト名 (ドメイン) を表示します。ホスト名にポート番号を使用している場合、1 の値を設定することでポート番号を除外して表示します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/cgihost.html
       */
      ["mt:CGIHost"]: {
        /**
         * ホスト名にポート番号を使用している場合、1 の値を設定することでポート番号を除外して表示します。初期値は 0 です。
         */
        exclude_port?: string;
      } & GlobalModifier;

      /**
       * 環境設定ファイル (mt-config.cgi) の CGIPath の設定値をもとに、Movable Type の CGI スクリプトが設置されたディレクトリへの絶対 URL を表示します。末尾には必ずスラッシュがつきます。相対 URL で出力する場合は MTCGIRelativeURL タグをお使いください。管理画面用 CGI プログラムの URL を表示する場合は MTAdminCGIPath タグをお使いください。
       * @see https://movabletype.jp/documentation/appendices/tags/cgipath.html
       */
      ["mt:CGIPath"]: {} & GlobalModifier;

      /**
       * 環境設定ファイル (mt-config.cgi) の CGIPath の設定値をもとに、Movable Type の CGI スクリプトが設置されたディレクトリへの相対 URL を表示します。末尾には必ずスラッシュがつきます。例えば CGIPath が http://www.example.com/cgi-bin/mt/ の場合、/cgi-bin/mt/ を表示します。絶対 URL で出力する場合は MTCGIPath タグをお使いください。管理画面用 CGI プログラムの URL を表示する場合は MTAdminCGIPath タグをお使いください。
       * @see https://movabletype.jp/documentation/appendices/tags/cgirelativeurl.html
       */
      ["mt:CGIRelativeURL"]: {} & GlobalModifier;

      /**
       * Movable Type をインストールしたパス名を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/cgiserverpath.html
       */
      ["mt:CGIServerPath"]: {} & GlobalModifier;

      /**
       * 子サイトの一覧を表示するためのブロックタグです。親サイトを出力する場合は MTSites タグをご利用ください。MTBlogs と互換があります。mode モディファイアを指定しないか、 loop を指定した場合は、ブロック内で以下の変数が利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/childsites.html
       */
      ["mt:ChildSites"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントの投稿時に入力されたコメント投稿者の名前を表示します。default モディファイアを指定することで、無記名のときに表示する名前を指定できます。無記名のときに表示する名前を設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentauthor.html
       */
      ["mt:CommentAuthor"]: {
        /**
         * 無記名のときに表示する名前を設定します。
         */
        default?: string;
      } & GlobalModifier;

      /**
       * コメント認証してコメント投稿をおこなったユーザーのプロフィール画像を表示します。サービスに登録しているプロフィールページへのリンクを表示します。認証サービスでユーザーのプロフィールページがある場合は、アイコン画像にそのページの URL がリンクされます。
       * @see https://movabletype.jp/documentation/appendices/tags/commentauthoridentity.html
       */
      ["mt:CommentAuthorIdentity"]: {} & GlobalModifier;

      /**
       * コメントの投稿時に入力されたコメント投稿者の名前をリンク付きで表示します。モディファイア default_name で、無記名のときに表示する名前を指定できます。コメント投稿時に URL が入力されていれば URL へのリンクが付加されます。URL が入力されていない場合、リンクは付加されません。もし、URL が入力されておらず、且つ、メールアドレスが入力されている場合は、show_email モディファイアを 1 に設定することでメールアドレスへのリンクが付加されます。両方とも入力されていないときは、リンクは付加されません。投稿されたコメントに投稿者名が入力されていない場合に表示する投稿者名を設定します。初期値は 匿名 です。コメント投稿者が URL を入力している場合に、その URL へのリンクを生成します。初期値は 1 です。コメント投稿者が URL を入力しておらず、且つ、メールアドレスを指定している場合、本モディファイアの値を 1 に設定することで、そのメールアドレスへのリンクを生成します。初期値は 0 です。値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。Movable Type のリダイレクト機能を有効にして、リンク先が直接表示されないようにします。初期値は 0 です。リンクに rel="nofollow" 属性を追加します。初期値は 1 です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentauthorlink.html
       */
      ["mt:CommentAuthorLink"]: {
        /**
         * 投稿されたコメントに投稿者名が入力されていない場合に表示する投稿者名を設定します。初期値は 匿名 です。
         */
        default_name?: string;

        /**
         * コメント投稿者が URL を入力している場合に、その URL へのリンクを生成します。初期値は 1 です。
         */
        show_url?: string;

        /**
         * コメント投稿者が URL を入力しておらず、且つ、メールアドレスを指定している場合、本モディファイアの値を 1 に設定することで、そのメールアドレスへのリンクを生成します。初期値は 0 です。
         */
        show_email?: string;

        /**
         * 値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。
         */
        new_window?: string;

        /**
         * メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;

        /**
         * Movable Type のリダイレクト機能を有効にして、リンク先が直接表示されないようにします。初期値は 0 です。
         */
        no_redirect?: string;

        /**
         * リンクに rel="nofollow" 属性を追加します。初期値は 1 です。
         */
        nofollowfy?: string;
      } & GlobalModifier;

      /**
       * コメントが投稿されたブログの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentblogid.html
       */
      ["mt:CommentBlogID"]: {} & GlobalModifier;

      /**
       * 投稿されたコメントの内容を表示します。本文内の URL を自動的にリンクに変換する場合は 1 を設定します。この設定は、ブログ管理画面での設定よりも優先されます。ブログの設定に関わりなく、改行の変換を設定します。0 では改行が無視され、1 では自動的に改行に変換されます。コメント本文の長さを指定した文字数に制限します。ただし、words モディファイアを指定した場合は、autolink と convert_breaks モディファイアの指定は無視されます。
       * @see https://movabletype.jp/documentation/appendices/tags/commentbody.html
       */
      ["mt:CommentBody"]: {
        /**
         * 本文内の URL を自動的にリンクに変換する場合は 1 を設定します。この設定は、ブログ管理画面での設定よりも優先されます。
         */
        autolink?: string;

        /**
         * ブログの設定に関わりなく、改行の変換を設定します。0 では改行が無視され、1 では自動的に改行に変換されます。
         */
        convert_breaks?: string;

        /**
         * コメント本文の長さを指定した文字数に制限します。ただし、words モディファイアを指定した場合は、autolink と convert_breaks モディファイアの指定は無視されます。
         */
        words?: string;
      } & GlobalModifier;

      /**
       * 「コメント」システムオブジェクトで作成したカスタムフィールドの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentcustomfielddescription.html
       */
      ["mt:CommentCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 「コメント」システムオブジェクトで作成したカスタムフィールドの『名前』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentcustomfieldname.html
       */
      ["mt:CommentCustomFieldName"]: {} & GlobalModifier;

      /**
       * 「コメント」システムオブジェクトで作成したカスタムフィールドを一覧で表示するブロックタグです。追加したすべてのカスタムフィールドを表示します。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。include モディファイアでは、名前を指定したカスタムフィールドを表示します。exclude モディファイアでは、名前を指定したカスタムフィールドを表示対象から除外します。追加したカスタムフィールドを使用してコメントを受け付けるためには、ブログのコメントフォームに入力欄を追加する必要があります。以下のタグを、コメント投稿フォーム（<form></form>）内に記述することで、カスタムフィールド用の入力欄が出力されます。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を表示対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentcustomfields.html
       */
      ["mt:CommentCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を表示対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 「コメント」システムオブジェクトで作成したカスタムフィールドの値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentcustomfieldvalue.html
       */
      ["mt:CommentCustomFieldValue"]: {} & GlobalModifier;

      /**
       * コメントが投稿された日時を表示します。モディファイア format と language を指定して、日時の表示方法を変更できます。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/commentdate.html
       */
      ["mt:CommentDate"]: {} & GlobalModifier;

      /**
       * コメントの投稿時に入力されたコメント投稿者のメールアドレスを表示します。spam_protect モディファイアを指定することでスパムボット対策ができます。メールアドレス部分を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentemail.html
       */
      ["mt:CommentEmail"]: {
        /**
         * メールアドレス部分を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       * コメント元の記事の内容を表示するためのブロックタグです。この中では記事関連のテンプレートタグを使うことができます。例えば、このタグで囲まれた MTEntryTitle タグは、コメント元の記事のタイトルを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commententry.html
       */
      ["mt:CommentEntry"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントを受け付けた記事の ID 番号を表示します。MTComments タグと一緒に、記事へのリンクを付加するためなどに使います。桁数が足りないとき、0 で埋めて表示します。ID が 8 なら 0 を 5 つ追加し、000008 と表示されます。
       * @see https://movabletype.jp/documentation/appendices/tags/commententryid.html
       */
      ["mt:CommentEntryID"]: {
        /**
         * 桁数が足りないとき、0 で埋めて表示します。ID が 8 なら 0 を 5 つ追加し、000008 と表示されます。
         */
        pad?: string;
      } & GlobalModifier;

      /**
       * コメントしたユーザーがどのサービスのアカウントでサインインしてコメントしたのかを示すアイコンの絶対 URL を表示します。例えば LiveJournal のアカウントでサインインしてコメントした場合、 のような画像の絶対 URL が表示されます。
       * @see https://movabletype.jp/documentation/appendices/tags/commenterauthiconurl.html
       */
      ["mt:CommenterAuthIconURL"]: {} & GlobalModifier;

      /**
       * コメント投稿に使用したユーザーアカウントの作成元サービスの名前を表示します。例えば、Movable Type アカウントの場合は MT、LiveJournal のアカウントの場合は LiveJournal と表示されます。
       * @see https://movabletype.jp/documentation/appendices/tags/commenterauthtype.html
       */
      ["mt:CommenterAuthType"]: {} & GlobalModifier;

      /**
       * コメント投稿者のメールアドレスを表示します。spam_protect グローバルモディファイアを指定することで、メールアドレス部分を数値文字参照の形式にエンコードして、メールアドレス収集ロボット（スパムボット）対策も可能です。
       * @see https://movabletype.jp/documentation/appendices/tags/commenteremail.html
       */
      ["mt:CommenterEmail"]: {} & GlobalModifier;

      /**
       * コメントしたユーザーのユーザー ID を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commenterid.html
       */
      ["mt:CommenterID"]: {} & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTIfCommenterTrusted タグを使用してください。コメント投稿者が Movable Type に登録済みの場合にのみ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/commenteriftrusted.html
       */
      ["mt:CommenterIfTrusted"]: {} & GlobalModifier & BlockElement;

      /**
       * コメント投稿者名を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentername.html
       */
      ["mt:CommenterName"]: {} & GlobalModifier;

      /**
       * このタグは Movable Type 5 で廃止されました。MTUserSessionState タグを使用してください。コメント投稿者名を JavaScript の変数として設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/commenternamethunk.html
       */
      ["mt:CommenterNameThunk"]: {} & GlobalModifier;

      /**
       * コメントしたユーザーが Movable Type に登録済みの場合、ユーザー情報の編集画面の『ウェブサイト URL』、もしくは、サインインしたアカウントのページ URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commenterurl.html
       */
      ["mt:CommenterURL"]: {} & GlobalModifier;

      /**
       * コメントしたユーザーの名前を表示します。ユーザー名が設定されていない場合は何も表示されません。
       * @see https://movabletype.jp/documentation/appendices/tags/commenterusername.html
       */
      ["mt:CommenterUsername"]: {} & GlobalModifier;

      /**
       * コメントを投稿した登録ユーザーのプロフィール画像を表示するための img 要素を表示します。出力のサンプルは以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/commenteruserpic.html
       */
      ["mt:CommenterUserpic"]: {} & GlobalModifier;

      /**
       * コメントした登録ユーザーのプロフィール画像の情報を表示するためのブロックタグです。このブロックタグの中では、アイテム関連のテンプレートタグを利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/commenteruserpicasset.html
       */
      ["mt:CommenterUserpicAsset"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントを投稿した登録ユーザーのプロフィール画像の URL アドレスを出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/commenteruserpicurl.html
       */
      ["mt:CommenterUserpicURL"]: {} & GlobalModifier;

      /**
       * コメントの ID 番号を表示します。おもに、コメントへのアンカーリンクを作るときに使います。桁数が足りないとき、0 で埋めて表示します。ID が 8 なら 0 を 5 つ追加し、000008 と表示されます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentid.html
       */
      ["mt:CommentID"]: {
        /**
         * 桁数が足りないとき、0 で埋めて表示します。ID が 8 なら 0 を 5 つ追加し、000008 と表示されます。初期値は 0 です。
         */
        pad?: string;
      } & GlobalModifier;

      /**
       * 対象のコメントが『保留中』の場合に真となる条件ブロックタグです。管理画面やメールテンプレートなど、実際にはコメントが公開されていない場面で利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentifmoderated.html
       */
      ["mt:CommentIfModerated"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントを投稿したホストの IP アドレスを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentip.html
       */
      ["mt:CommentIP"]: {} & GlobalModifier;

      /**
       * 投稿されたコメントへのパーマリンク URL を表示します。記事アーカイブや MTEntries ブロックタグ内の場合、以下のテンプレートの出力結果と同じ結果になります。
       * @see https://movabletype.jp/documentation/appendices/tags/commentlink.html
       */
      ["mt:CommentLink"]: {} & GlobalModifier;

      /**
       * このタグは現在、非推奨です。Movable Type 3.2 以降では、MTCommentAuthor タグの利用を推奨しています。コメント投稿時に入力された名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentname.html
       */
      ["mt:CommentName"]: {} & GlobalModifier;

      /**
       * コメント一覧の中で順番の数字を表示します。数字は 1 から始まり、表示順に連番が振られます。例えば、N 番目のコメントです。 というように、順番を表示したい場合に利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/commentordernumber.html
       */
      ["mt:CommentOrderNumber"]: {} & GlobalModifier;

      /**
       * コメントに親コメントがある場合に、親となるコメントの情報を出力するためのブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/commentparent.html
       */
      ["mt:CommentParent"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントに親コメントがある場合、親コメントの ID を表示します。もしコメントに親コメントがない場合は 0 を表示します。桁数が足りないとき、0 で埋めて表示します。ID が 8 なら 0 を 5 つ追加し、000008 と表示されます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentparentid.html
       */
      ["mt:CommentParentID"]: {
        /**
         * 桁数が足りないとき、0 で埋めて表示します。ID が 8 なら 0 を 5 つ追加し、000008 と表示されます。初期値は 0 です。
         */
        pad?: string;
      } & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTCommentAuthor タグを使用してください。コメントのプレビュー画面で、コメント投稿者の名前を表示します。無記名のときに表示する名前を設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentpreviewauthor.html
       */
      ["mt:CommentPreviewAuthor"]: {
        /**
         * 無記名のときに表示する名前を設定します。
         */
        default?: string;
      } & GlobalModifier;

      /**
       * コメントのプレビュー画面で、コメント投稿者の名前をリンク付きで表示します。このタグは現在、非推奨です。MTCommentAuthorLink タグを使用してください。コメント名前を入力せず投稿された場合、表示する投稿者名を設定します。コメント投稿者が URL を指定しており、かつ本モディファイアの値が 1 のときに、その URL へのリンクを生成します。初期値は 1 です。コメント投稿者がメールアドレスを指定しており、かつ本モディファイアの値が 1 のときに、そのメールアドレスへのリンクを生成します。初期値は 0 です。メールアドレス部分を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策を行います。Movable Type のリダイレクト機能を有効にして、リンク先が直接表示されないようにします。show_urlとshow_emailは同時に利用できません。
spam_protectはshow_emailの時にのみ有効です。
no_redirectはshow_urlの時にのみ有効です
       * @see https://movabletype.jp/documentation/appendices/tags/commentpreviewauthorlink.html
       */
      ["mt:CommentPreviewAuthorLink"]: {
        /**
         * コメント名前を入力せず投稿された場合、表示する投稿者名を設定します。
         */
        default_name?: string;

        /**
         * コメント投稿者が URL を指定しており、かつ本モディファイアの値が 1 のときに、その URL へのリンクを生成します。初期値は 1 です。
         */
        show_url?: string;

        /**
         * コメント投稿者がメールアドレスを指定しており、かつ本モディファイアの値が 1 のときに、そのメールアドレスへのリンクを生成します。初期値は 0 です。
         */
        show_email?: string;

        /**
         * メールアドレス部分を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策を行います。
         */
        spam_protect?: string;

        /**
         * Movable Type のリダイレクト機能を有効にして、リンク先が直接表示されないようにします。
         */
        no_redirect?: string;
      } & GlobalModifier;

      /**
       * コメントのプレビュー画面で、コメントの内容を表示します。このタグは現在、非推奨です。MTCommentBody を使用してください。
       * @see https://movabletype.jp/documentation/appendices/tags/commentpreviewbody.html
       */
      ["mt:CommentPreviewBody"]: {} & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTCommentDate タグを使用してください。コメントのプレビュー画面で、コメントが投稿された日時を表示します。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/commentpreviewdate.html
       */
      ["mt:CommentPreviewDate"]: {} & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTCommentEmail タグを使用してください。コメントのプレビュー画面で、コメント投稿者のメールアドレスを表示します。メールアドレス部分を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentpreviewemail.html
       */
      ["mt:CommentPreviewEmail"]: {
        /**
         * メールアドレス部分を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTCommentIP タグを使用してください。コメントのプレビュー画面で、コメントを投稿したホストの IP アドレスを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentpreviewip.html
       */
      ["mt:CommentPreviewIP"]: {} & GlobalModifier;

      /**
       * システムが参照する特殊なタグです。コメント投稿後に表示するページ情報をシステムに渡すために使います。コメントプレビュー、コメントエラーのテンプレートの HTML フォームの type が hidden の input 要素の中に埋め込んで利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentpreviewisstatic.html
       */
      ["mt:CommentPreviewIsStatic"]: {} & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTCommentURL タグを使用してください。コメントのプレビュー画面で、コメント投稿時に入力された URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentpreviewurl.html
       */
      ["mt:CommentPreviewURL"]: {} & GlobalModifier;

      /**
       * コメントに付けられたスコアを一定の範囲内でランク付けします。数値が小さい方が頻度が高くなります。スコアを付けるには別途プラグインなどが必要です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentrank.html
       */
      ["mt:CommentRank"]: {} & GlobalModifier;

      /**
       * コメントが親コメントである場合、子 (返信) コメントの情報を表示するためのブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/commentreplies.html
       */
      ["mt:CommentReplies"]: {} & GlobalModifier & BlockElement;

      /**
       * MTCommentReplies ブロックタグの内容を再帰的に表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentrepliesrecurse.html
       */
      ["mt:CommentRepliesRecurse"]: {} & GlobalModifier;

      /**
       * コメント返信機能で特定のコメントに返信するためのリンクを出力します。単体で使用するものではなく、Movable Type の標準テーマに含まれる JavaScript テンプレートとあわせて使用します。
値を返信リンクのテキストとして使用します。省略した場合は 返信 というテキストでリンクを出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentreplylink.html
       */
      ["mt:CommentReplyToLink"]: {
        /**
         * 値を返信リンクのテキストとして使用します。省略した場合は 返信 というテキストでリンクを出力します。
         */
        text?: string;
      } & GlobalModifier;

      /**
       * コメント一覧を表示するためのブロックタグです。MTEntries タグや MTPages タグの内側で利用した場合、記事またはウェブページごとに投稿されたコメントを表示します。単独で使用した場合は、ブログで管理しているすべてのコメントを表示します。指定した数のコメントを表示します。N は 0 より大きな数値にしてください。lastn モディファイアを指定しない場合、すべてのコメントが表示されます。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/comments.html
       */
      ["mt:Comments"]: {
        /**
         * 指定した数のコメントを表示します。N は 0 より大きな数値にしてください。lastn モディファイアを指定しない場合、すべてのコメントが表示されます。
         */
        lastn?: number;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
         */
        sort_order?: "ascend" | "descend";

        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;

        /**
         *
         */
        top?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * コメントに付けられたスコアの合計を表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentscore.html
       */
      ["mt:CommentScore"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * コメントに付けられたスコアの平均スコアを表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentscoreavg.html
       */
      ["mt:CommentScoreAvg"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * コメントに付けられたスコア合計回数を表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/commentscorecount.html
       */
      ["mt:CommentScoreCount"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * コメントに付けられたスコアの中で一番高いスコアを表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentscorehigh.html
       */
      ["mt:CommentScoreHigh"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * コメントに付けられたスコアの中で一番低いスコアを表示します。スコアを付けるには別途プラグインなどが必要です。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/commentscorelow.html
       */
      ["mt:CommentScoreLow"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * コメントを処理する CGI プログラムのファイル名を表示します。MTCGIPath タグと組み合わせることで、プログラムへの URL を生成できます。
       * @see https://movabletype.jp/documentation/appendices/tags/commentscript.html
       */
      ["mt:CommentScript"]: {} & GlobalModifier;

      /**
       * コメントの一覧で最後のときだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/commentsfooter.html
       */
      ["mt:CommentsFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントの一覧で最初のときだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/commentsheader.html
       */
      ["mt:CommentsHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントが投稿されたサイトの ID 番号を表示します。MTCommentBlogID と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/commentsiteid.html
       */
      ["mt:CommentSiteID"]: {} & GlobalModifier;

      /**
       * コメントの投稿時に入力された URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/commenturl.html
       */
      ["mt:CommentURL"]: {} & GlobalModifier;

      /**
       * コミュニティスクリプト (mt-cp.cgi) への URL を出力するファンクションタグです。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/communityscript.html
       */
      ["mt:CommunityScript"]: {} & GlobalModifier;

      /**
       * 環境設定ファイル (mt-config.cgi) のサーバー上のパスを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/configfile.html
       */
      ["mt:ConfigFile"]: {} & GlobalModifier;

      /**
       *
       * @see https://movabletype.jp/documentation/appendices/tags/contentauthordisplayname.html
       */
      ["mt:ContentAuthorDisplayName"]: {} & GlobalModifier;

      /**
       * コンテンツデータを作成したユーザーのメールアドレスを表示します。Movable Type のユーザーのメールアドレスをブログに表示することは、スパムの温床になるため推奨しません。
       * @see https://movabletype.jp/documentation/appendices/tags/contentauthoremail.html
       */
      ["mt:ContentAuthorEmail"]: {
        /**
         *
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       * コンテンツデータを作成したユーザーのIDを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentauthorid.html
       */
      ["mt:ContentAuthorID"]: {} & GlobalModifier;

      /**
       * コンテンツデータを作成したユーザーの『表示名』をリンク付きで表示します。ユーザー情報の編集画面の『ウェブサイト URL』が入力されている場合、『ウェブサイト URL』へのリンクが付加されます。『ウェブサイト URL』が入力されていない場合、リンクは付加されません。もし、『ウェブサイト URL』が入力されておらず、且つ、『電子メール』が入力されている場合は、show_email モディファイアを 1 に設定することでメールアドレスへのリンクが付加されます。両方とも入力されていないときは、リンクは付加されません。本来は、コンテンツタイプのユーザー別アーカイブへのリンクが生成されますが、記事のユーザー別アーカイブがリンクされています。将来的に修正予定です。以下の例のように、リンクの種類を識別するための class 属性をリンクに付加します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/contentauthorlink.html
       */
      ["mt:ContentAuthorLink"]: {
        /**
         *
         */
        show_url?: string;

        /**
         *
         */
        show_email?: string;

        /**
         *
         */
        new_window?: string;

        /**
         *
         */
        spam_protect?: string;

        /**
         * 本来は、コンテンツタイプのユーザー別アーカイブへのリンクが生成されますが、記事のユーザー別アーカイブがリンクされています。将来的に修正予定です。
         */
        type?: string;

        /**
         * 以下の例のように、リンクの種類を識別するための class 属性をリンクに付加します。初期値は 0 です。
         */
        show_hcard?: string;
      } & GlobalModifier;

      /**
       * コンテンツデータを作成したユーザーの『ウェブサイト URL』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentauthorurl.html
       */
      ["mt:ContentAuthorURL"]: {} & GlobalModifier;

      /**
       * コンテンツデータを作成したユーザーの『ユーザー名』を表示します。ユーザー名は、管理画面へのサインインに利用されるため、MTAuthorContentDisplayNameを推奨しています。
       * @see https://movabletype.jp/documentation/appendices/tags/contentauthorusername.html
       */
      ["mt:ContentAuthorUsername"]: {} & GlobalModifier;

      /**
       *
       * @see https://movabletype.jp/documentation/appendices/tags/contentauthoruserpic.html
       */
      ["mt:ContentAuthorUserpic"]: {} & GlobalModifier;

      /**
       * コンテンツデータを作成したユーザーのプロフィール画像に関する情報を取得するためのブロックタグです。このタグの中では、アセット関連のテンプレートタグを利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/contentauthoruserpicasset.html
       */
      ["mt:ContentAuthorUserpicAsset"]: {} & GlobalModifier & BlockElement;

      /**
       * コンテンツデータを作成したユーザーのプロフィール画像の URL アドレスを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentauthoruserpicurl.html
       */
      ["mt:ContentAuthorUserpicURL"]: {} & GlobalModifier;

      /**
       * 一ケ月分のカレンダーを表示するためのブロックタグです。month モディファイアを使用して表示する月を指定できます。MTCalendarは、記事を対象としますが、このタグはコンテンツデータを対象とします。週の開始曜日を 0 - 6 の間で指定します。指定がない場合は、0 が利用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/contentcalendar.html
       */
      ["mt:ContentCalendar"]: {
        /**
         *
         */
        content_type?: string;

        /**
         *
         */
        date_field?: string;

        /**
         *
         */
        month?: string;

        /**
         *
         */
        category_set?: string;

        /**
         *
         */
        category?: string;

        /**
         * 週の開始曜日を 0 - 6 の間で指定します。指定がない場合は、0 が利用されます。
         */
        weeks_start_with?: "0" | "6" | "5" | "4" | "3" | "2" | "1" | string;
      } & GlobalModifier &
        BlockElement;

      /**
       * コンテンツデータの作成日時を表示します。作成日時は公開日時ではなく、実際にコンテンツデータを作成した日時です。モディファイア format と language を指定して、日時の表示方法を変更できます。利用可能なモディファイアは、日付に関するテンプレートタグで利用できるモディファイア をご参照ください。
       * @see https://movabletype.jp/documentation/appendices/tags/contentcreateddate.html
       */
      ["mt:ContentCreatedDate"]: {} & GlobalModifier;

      /**
       * コンテンツデータ検索用 CGI スクリプトのファイル名を表示します。MTCGIPath タグと組み合わせることで、スクリプトにアクセスする URL を生成できます。出力される内容は、ContentDataSearchScript 環境変数の設定値です。未設定時のデフォルト値は mt-cdsearch.cgi です。
       * @see https://movabletype.jp/documentation/appendices/tags/contentdatasearchscript.html
       */
      ["mt:ContentDataSearchScript"]: {} & GlobalModifier;

      /**
       * コンテンツデータの公開日を表示します。モディファイア format と language を指定して、日時の表示方法を変更できます。利用可能なモディファイアは、日付に関するテンプレートタグで利用できるモディファイアをご参照ください。
       * @see https://movabletype.jp/documentation/appendices/tags/contentdate.html
       */
      ["mt:ContentDate"]: {} & GlobalModifier;

      /**
       * コンテンツデータの各フィールドの値を表示するためのブロックタグです。このタグだけでは値を表示することはできませんので、ブロック内で MTContentFieldValue などのタグを利用します。コンテンツフィールドの種類によっては、ブロック内で以下の変数が利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/contentfield.html
       */
      ["mt:ContentField"]: {
        /**
         *
         */
        content_field?: string;

        /**
         *
         */
        glue?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * コンテンツタイプに含まれる全てのコンテンツフィールドを取得するためのブロックタグです。各コンテンツフィールドの処理は、ブロック内に記述された MTContentFieldタグの中で行ないます。ブロック内では以下の変数が利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/contentfields.html
       */
      ["mt:ContentFields"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のコンテクストにおけるコンテンツフィールドの値を表示するファンクションタグです。コンテンツフィールドの種類によって適切な値が表示されます。リンクされているコンテンツデータの IDコンテンツデータの内容を表示したい場合は、 MTContentField ブロック内で、各種コンテンツタイプのタグを利用してください。入力された内容入力された内容words、convert_breaksモディファイアが利用できます。入力された内容入力された内容入力された内容。日付のフォーマットを指定しない場合は、サイトの [日付の言語] の設定に応じて整形されます。日付に関するテンプレートタグで利用できるモディファイアによる整形ができます。入力された内容。日付のフォーマットを指定しない場合は、サイトの [日付の言語] の設定に応じて整形されます。デフォルトのフォーマットは'%x'です。日付に関するテンプレートタグで利用できるモディファイアによる整形ができます。入力された内容。日付のフォーマットを指定しない場合は、サイトの [日付の言語] の設定に応じて整形されます。デフォルトのフォーマットは'%X'です。日付に関するテンプレートタグで利用できるモディファイアによる整形ができます。選択された値の羅列選択された値選択された値の羅列リンクされているアセットのIDアセットを表示したり、リンクを作成する場合は、 MTContentField ブロック内で、アセット関連のタグを利用してください。リンクされているアセットのIDアセットを表示したり、リンクを作成する場合は、 MTContentField ブロック内で、アセット関連のタグを利用してください。リンクされているアセットのIDアセットを表示したり、リンクを作成する場合は、 MTContentField ブロック内で、アセット関連のタグを利用してください。リンクされているアセットのIDアセットを表示したり、リンクを作成する場合は、 MTContentField ブロック内で、アセット関連のタグを利用してください。入力された内容選択されているカテゴリのIDカテゴリのラベルを表示する場合は、 MTContentField ブロック内で、カテゴリ関連のタグを利用してください。入力されたタグのIDタグのラベルを表示する場合は、 MTContentField ブロック内で、タグ関連のタグを利用してください。入力された値の羅列入力された内容に基づくテーブルタグ
       * @see https://movabletype.jp/documentation/appendices/tags/contentfieldvalue.html
       */
      ["mt:ContentFieldValue"]: {
        /**
         *
         */
        convert_breaks?: string;

        /**
         *
         */
        words?: string;
      } & GlobalModifier;

      /**
       * コンテンツデータの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentid.html
       */
      ["mt:ContentID"]: {
        /**
         *
         */
        pad?: string;
      } & GlobalModifier;

      /**
       * コンテンツデータの『出力ファイル名』（ベースネーム）を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentidentifier.html
       */
      ["mt:ContentIdentifier"]: {
        /**
         *
         */
        separator?: string;
      } & GlobalModifier;

      /**
       * コンテンツデータのデータ識別ラベルの内容を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentlabel.html
       */
      ["mt:ContentLabel"]: {} & GlobalModifier;

      /**
       *
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifiedauthordisplay.html
       */
      ["mt:ContentModifiedAuthorDisplayName"]: {} & GlobalModifier;

      /**
       * コンテンツデータを最終更新したユーザーのメールアドレスを表示します。Movable Type のユーザーのメールアドレスをブログに表示することは、スパムの温床になるため推奨しません。
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifiedauthoremail.html
       */
      ["mt:ContentModifiedAuthorEmail"]: {
        /**
         *
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       *
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifiedauthorid.html
       */
      ["mt:ContentModifiedAuthorID"]: {} & GlobalModifier;

      /**
       * コンテンツデータを最終更新したユーザーの『表示名』をリンク付きで表示します。ユーザー情報の編集画面の『ウェブサイト URL』が入力されている場合、『ウェブサイト URL』へのリンクが付加されます。『ウェブサイト URL』が入力されていない場合、リンクは付加されません。もし、『ウェブサイト URL』が入力されておらず、且つ、『電子メール』が入力されている場合は、show_email モディファイアを 1 に設定することでメールアドレスへのリンクが付加されます。両方とも入力されていないときは、リンクは付加されません。本来は、コンテンツタイプのユーザー別アーカイブへのリンクが生成されますが、記事のユーザー別アーカイブがリンクされています。将来的に修正予定です。以下の例のように、リンクの種類を識別するための class 属性をリンクに付加します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifiedauthorlink.html
       */
      ["mt:ContentModifiedAuthorLink"]: {
        /**
         *
         */
        show_url?: string;

        /**
         *
         */
        show_email?: string;

        /**
         *
         */
        new_window?: string;

        /**
         *
         */
        spam_protect?: string;

        /**
         * 本来は、コンテンツタイプのユーザー別アーカイブへのリンクが生成されますが、記事のユーザー別アーカイブがリンクされています。将来的に修正予定です。
         */
        type?: string;

        /**
         * 以下の例のように、リンクの種類を識別するための class 属性をリンクに付加します。初期値は 0 です。
         */
        show_hcard?: string;
      } & GlobalModifier;

      /**
       * コンテンツデータを最終更新したユーザーの『ウェブサイト URL』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifiedauthorurl.html
       */
      ["mt:ContentModifiedAuthorURL"]: {} & GlobalModifier;

      /**
       * コンテンツデータを最終更新したユーザーの『ユーザー名』を表示します。ユーザー名は、管理画面へのサインインに利用されるため、MTContentModifiedAuthorDisplayNameを推奨しています。
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifiedauthorusername.html
       */
      ["mt:ContentModifiedAuthorUsername"]: {} & GlobalModifier;

      /**
       * コンテンツデータを最終更新したユーザーのプロフィール画像を表示するための img 要素を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifiedauthoruserpic.html
       */
      ["mt:ContentModifiedAuthorUserpic"]: {} & GlobalModifier;

      /**
       * コンテンツデータを最終更新したユーザーのプロフィール画像を表示するための img 要素を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifiedauthoruserpic.html
       */
      ["mt:ContentModifiedAuthorUserpic"]: {} & GlobalModifier;

      /**
       * コンテンツデータを最終更新したユーザーのプロフィール画像を表示するための img 要素を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifiedauthoruserpic.html
       */
      ["mt:ContentModifiedAuthorUserpic"]: {} & GlobalModifier;

      /**
       * コンテンツデータの更新日時を表示します。更新日時は再構築を実行した日時ではなく、コンテンツデータを保存した日時です。モディファイア format と language を指定して、日時の表示方法を変更できます。利用可能なモディファイアは、日付に関するテンプレートタグで利用できるモディファイア をご参照ください。
       * @see https://movabletype.jp/documentation/appendices/tags/contentmodifieddate.html
       */
      ["mt:ContentModifiedDate"]: {} & GlobalModifier;

      /**
       *
       * @see https://movabletype.jp/documentation/appendices/tags/contentnext.html
       */
      ["mt:ContentNext"]: {
        /**
         *
         */
        by_author?: string;

        /**
         *
         */
        category_field?: string;

        /**
         *
         */
        date_field?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * コンテンツデータが公開されている URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentpermalink.html
       */
      ["mt:ContentPermalink"]: {} & GlobalModifier;

      /**
       *
       * @see https://movabletype.jp/documentation/appendices/tags/contentprevious.html
       */
      ["mt:ContentPrevious"]: {
        /**
         *
         */
        by_author?: string;

        /**
         *
         */
        category_field?: string;

        /**
         *
         */
        date_field?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * コンテンツデータを一覧するためのブロックタグです。コンテンツタイプ個別アーカイブ以外のテンプレートでコンテンツデータの一覧を表示するときにこのタグを使います。モディファイアを指定することで条件に合致したコンテンツデータだけを抜き出したり、並び順を指定できます。ブロック内では以下の特別な変数が利用できます。コンテンツタイプのユニークID、IDまたは名前を指定します。コンテンツタイプが含まれているサイトのIDをカンマ区切りで指定します。site_id が同時に指定されている場合、site_id は無視されます。詳しくは、マルチサイト機能が利用できるテンプレートタグとモディファイアを参照してください。Movable Type r.4502 以降のバージョンではこのモディファイアは使えません。site_id (blog_id) のみ利用可能です。include_sites モディファイアで複数のサイトを対象としたとき、除外するサイトのIDをカンマ区切りで指定します。site_id が同時に指定されている場合、site_id は無視されます。詳しくは、マルチサイト機能が利用できるテンプレートタグとモディファイアを参照してください。Movable Type r.4502 以降のバージョンではこのモディファイアは使えません。site_id (blog_id) のみ利用可能です。sort_by、sort_order で指定された順序に並び替えを行ったのちに取得する件数を指定します。初期値は 10 です。sort_by、sort_order で指定された順序に並び替えを行ったのちに指定された件数のコンテンツデータを除外します。limit モディファイアが指定されている場合、除外されたのちに limit で指定された件数を取得します。初期値は 0 です。特定のユーザーが作成したコンテンツデータを取得するときに指定します。指定するのは、サインインに使用されるアカウント名 (ユーザー名)です。取得した結果の並び替えに使用するフィールドを指定します。コンテンツタイプ型のコンテンツフィールドを指定することはできません。並べる順序を指定します。ascend を指定すると昇順、descend は降順です。初期値は descend です。指定されたコンテンツフィールドの値が foo であるコンテンツデータを抽出します。日本語や半角空白が含まれるコンテンツフィールドの場合は、field: の後ろに指定することはできませんのでユニーク ID を代わりに指定します。
また、コンテンツフィールドがコンテツタイプの場合は、指定されているコンテンツタイプのフィールドを指定することはできません。（例：Jungfrau の利用を前提とした例となりますが、「セミナー」コンテンツタイプの「登壇講師」フィールドが、「講師」コンテンツタイプの場合、content_type に セミナー を指定している場合は、講師コンテンツタイプのコンテンツフィールドで値を絞り込むことができません）コンテンツフィールドがカテゴリセットである場合、カテゴリ名を値として指定することで、指定されたカテゴリセットのカテゴリのコンテンツデータを抽出します。次のサンプルコードでは、catset1 カテゴリセットで Featured カテゴリが指定されたコンテンツデータだけが抽出されます。指定したカテゴリが、カテゴリの他の階層に存在する場合は、親カテゴリといっしょに指定します。名前に半角スラッシュ / が含まれているカテゴリを指定する場合は [] で囲みます。複数のカテゴリを組み合わせ、AND, OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets カテゴリと、Featured カテゴリに含まれるコンテンツデータをフィルタリングします。また、次のサンプルは、Family カテゴリ以外のカテゴリに含まれるコンテンツデータ (どのカテゴリにも含まれないコンテンツデータも含む) にフィルタリングします。タグ型のコンテンツフィールドでは、タグ名を指定します。また、カテゴリセットと同様に AND / OR / NOT が利用できます。AND / OR / NOT が利用できるのはタグ型とカテゴリ型のコンテンツフィールドのみとなります。それ以外のコンテンツフィールドで使用した場合、値の一部として扱われます。単一の特定コンテンツデータを抽出するときに指定します。id モディファイアでは、コンテンツデータの ID フィールドの値を指定します。単一の特定コンテンツデータを抽出するときに指定します。unique_id モディファイアでは、コンテンツデータのユニーク ID の値を指定します。date_field モディファイアで指定された日付が指定された日数以内のコンテンツデータを抽出します。'modified_on', 'authored_on', 'created_on' または 日付/時刻型のフィールドの ID, ユニークID, またはラベルを指定する。days モディファイアが指定されていないときは無効です。デフォルトは 'authored_on' です。unique モディファイアが付与された mt:Contents ブロックでは、同じテンプレート内でこれまでに出現したコンテンツデータを除いた結果が抽出されます。初期値は 0 です。次のサンプルでは、ひとつめの mt:Contents ブロックで @featured シークレットタグが付けられた最新 3 件のコンテンツデータが抽出されます。ふたつめの mt:Contents ブロックでは、最新 7 件のコンテンツデータのうち、ひとつめの mt:Contents ブロックで出力されたコンテンツデータは含まれません。複数のコンテンツデータを並べて表示するときの、区切り文字を設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/contents.html
       */
      ["mt:Contents"]: {
        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順です。初期値は descend です。
         */
        sort_order?: "ascend" | "descend";

        /**
           * 指定されたコンテンツフィールドの値が foo であるコンテンツデータを抽出します。日本語や半角空白が含まれるコンテンツフィールドの場合は、field: の後ろに指定することはできませんのでユニーク ID を代わりに指定します。
また、コンテンツフィールドがコンテツタイプの場合は、指定されているコンテンツタイプのフィールドを指定することはできません。（例：Jungfrau の利用を前提とした例となりますが、「セミナー」コンテンツタイプの「登壇講師」フィールドが、「講師」コンテンツタイプの場合、content_type に セミナー を指定している場合は、講師コンテンツタイプのコンテンツフィールドで値を絞り込むことができません）コンテンツフィールドがカテゴリセットである場合、カテゴリ名を値として指定することで、指定されたカテゴリセットのカテゴリのコンテンツデータを抽出します。次のサンプルコードでは、catset1 カテゴリセットで Featured カテゴリが指定されたコンテンツデータだけが抽出されます。指定したカテゴリが、カテゴリの他の階層に存在する場合は、親カテゴリといっしょに指定します。名前に半角スラッシュ / が含まれているカテゴリを指定する場合は [] で囲みます。複数のカテゴリを組み合わせ、AND, OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets カテゴリと、Featured カテゴリに含まれるコンテンツデータをフィルタリングします。また、次のサンプルは、Family カテゴリ以外のカテゴリに含まれるコンテンツデータ (どのカテゴリにも含まれないコンテンツデータも含む) にフィルタリングします。タグ型のコンテンツフィールドでは、タグ名を指定します。また、カテゴリセットと同様に AND / OR / NOT が利用できます。AND / OR / NOT が利用できるのはタグ型とカテゴリ型のコンテンツフィールドのみとなります。それ以外のコンテンツフィールドで使用した場合、値の一部として扱われます。
           */
        ID?: string;

        /**
         * 単一の特定コンテンツデータを抽出するときに指定します。id モディファイアでは、コンテンツデータの ID フィールドの値を指定します。
         */
        id?: string;

        /**
         * 単一の特定コンテンツデータを抽出するときに指定します。unique_id モディファイアでは、コンテンツデータのユニーク ID の値を指定します。
         */
        unique_id?: string;

        /**
         * date_field モディファイアで指定された日付が指定された日数以内のコンテンツデータを抽出します。
         */
        days?: string;

        /**
         * 'modified_on', 'authored_on', 'created_on' または 日付/時刻型のフィールドの ID, ユニークID, またはラベルを指定する。days モディファイアが指定されていないときは無効です。デフォルトは 'authored_on' です。
         */
        date_field?: string;

        /**
         * unique モディファイアが付与された mt:Contents ブロックでは、同じテンプレート内でこれまでに出現したコンテンツデータを除いた結果が抽出されます。初期値は 0 です。次のサンプルでは、ひとつめの mt:Contents ブロックで @featured シークレットタグが付けられた最新 3 件のコンテンツデータが抽出されます。ふたつめの mt:Contents ブロックでは、最新 7 件のコンテンツデータのうち、ひとつめの mt:Contents ブロックで出力されたコンテンツデータは含まれません。
         */
        unique?: string;

        /**
         * 複数のコンテンツデータを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 現在のコンテクストの中で出力されるコンテンツデータの数を出力します。mt:Contents ブロック内、アーカイブリスト以外で利用する場合は、content_type モディファイアが必要です。
       * @see https://movabletype.jp/documentation/appendices/tags/contentscount.html
       */
      ["mt:ContentsCount"]: {
        /**
         *
         */
        singular?: string;

        /**
         *
         */
        plural?: string;

        /**
         *
         */
        none?: string;
      } & GlobalModifier;

      /**
       * MTContents ブロック内で最後のコンテンツデータのときにだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/contentsfooter.html
       */
      ["mt:ContentsFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * MTContents ブロック内で最初のコンテンツデータのときにだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/contentsheader.html
       */
      ["mt:ContentsHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * コンテンツデータが属するサイトの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentsitedescription.html
       */
      ["mt:ContentSiteDescription"]: {} & GlobalModifier;

      /**
       * コンテンツデータが属するサイトの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentsiteid.html
       */
      ["mt:ContentSiteID"]: {
        /**
         *
         */
        pad?: string;
      } & GlobalModifier;

      /**
       * コンテンツデータが属するサイトの名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentsitename.html
       */
      ["mt:ContentSiteName"]: {} & GlobalModifier;

      /**
       * コンテンツデータが属するサイトのサイト URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentsiteurl.html
       */
      ["mt:ContentSiteURL"]: {} & GlobalModifier;

      /**
       * コンテンツデータの状態について、Publish (公開)、Draft (未公開/下書き)、Future（指定日公開）、Unpublish（公開終了）のいずれかの値を表示します。通常は、Publish が表示されます。
       * @see https://movabletype.jp/documentation/appendices/tags/contentstatus.html
       */
      ["mt:ContentStatus"]: {} & GlobalModifier;

      /**
       * コンテンツタイプの『説明』を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/contenttypedescription.html
       */
      ["mt:ContentTypeDescription"]: {} & GlobalModifier;

      /**
       * コンテンツタイプの『ID 番号』を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/contenttypeid.html
       */
      ["mt:ContentTypeID"]: {
        /**
         *
         */
        pad?: string;
      } & GlobalModifier;

      /**
       * コンテンツタイプの『名前』を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/contenttypename.html
       */
      ["mt:ContentTypeName"]: {} & GlobalModifier;

      /**
       * コンテンツタイプの『ユニーク ID 』を出力します。ID 番号は、インポートを行なったときに新しく採番されますが、ユニーク ID は、変更されずに同じ値が保証されます。
       * @see https://movabletype.jp/documentation/appendices/tags/contenttypeuniqueid.html
       */
      ["mt:ContentTypeUniqueId"]: {} & GlobalModifier;

      /**
       * コンテンツデータの『ユニーク ID 』を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/contentuniqueid.html
       */
      ["mt:ContentUniqueID"]: {} & GlobalModifier;

      /**
       * コンテンツデータの非公開日時を表示します。非公開日時は、コンテンツデータのステータスを非公開に変更した日時ではなく、コンテンツデータに指定された非公開日時です。モディファイア format と language を指定して、日時の表示方法を変更できます。利用可能なモディファイアは、日付に関するテンプレートタグで利用できるモディファイア をご参照ください。
       * @see https://movabletype.jp/documentation/appendices/tags/contentunpublisheddate.html
       */
      ["mt:ContentUnpublishedDate"]: {} & GlobalModifier;

      /**
       * 現在表示中のページが、検索結果の総ページの何番目にあたるかを出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/currentpage.html
       */
      ["mt:CurrentPage"]: {} & GlobalModifier;

      /**
       * カスタムフィールドの値をアイテムとして処理するためのタグです。このブロックタグの中では、アイテム関連の MT タグを利用することができます。カスタムフィールドの種類がアイテム型（画像、オーディオ、ビデオ、ファイル）の場合のみ有効です。
       * @see https://movabletype.jp/documentation/appendices/tags/mtcustomfieldasset.html
       */
      ["mt:CustomFieldAsset"]: {} & GlobalModifier & BlockElement;

      /**
       * 追加したカスタムフィールドのベースネームを表示するファンクションタグです。記述箇所のコンテキストにより対象となるカスタムフィールドが異なります。例えば MTEntryCustomFields タグのコンテキストで使用すると、システムオブジェクトが『記事』のカスタムフィールドのベースネームを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/customfieldbasename.html
       */
      ["mt:CustomFieldBasename"]: {} & GlobalModifier;

      /**
       * カスタムフィールドの作成画面で『説明』に入力した内容を表示するファンクションタグです。記述箇所のコンテキストにより対象となるカスタムフィールドが異なります。例えば MTEntryCustomFields タグのコンテキストで使用すると、システムオブジェクトが『記事』のカスタムフィールドの説明を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/customfielddescription.html
       */
      ["mt:CustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 追加したフィールドの入力フォームを表示するファンクションタグです。記述箇所のコンテキストにより対象となるカスタムフィールドが異なります。例えば MTEntryCustomFields タグのコンテキストで使用すると、システムオブジェクトが『記事』のカスタムフィールドの入力フォームを表示します。出力内容は以下のように input タグが使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/customfieldhtml.html
       */
      ["mt:CustomFieldHTML"]: {} & GlobalModifier;

      /**
       * カスタムフィールドへの入力が必須の場合に true (真) となり、囲んだ内容を処理します。
       * @see https://movabletype.jp/documentation/appendices/tags/customfieldisrequired.html
       */
      ["mt:CustomFieldIsRequired"]: {} & GlobalModifier & BlockElement;

      /**
       * 追加したカスタムフィールドの名前を表示するファンクションタグです。記述箇所のコンテキストにより対象となるカスタムフィールドが異なります。例えば MTEntryCustomFields タグのコンテキストで使用すると、システムオブジェクトが『記事』のカスタムフィールドの名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/customfieldname.html
       */
      ["mt:CustomFieldName"]: {} & GlobalModifier;

      /**
       * 追加したカスタムフィールドに入力された値を表示するファンクションタグです。記述箇所のコンテキストにより対象となるカスタムフィールドが異なります。例えば MTEntryCustomFields タグのコンテキストで使用すると、システムオブジェクトが『記事』のカスタムフィールドに入力された値を表示します。追加したカスタムフィールドからアップロードした画像などのアイテムを表示するには、専用のテンプレートタグとあわせて追加される Asset タグを使用します。詳しくはドキュメントを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/customfieldvalue.html
       */
      ["mt:CustomFieldValue"]: {} & GlobalModifier;

      /**
       * Data API の CGI スクリプトの名前を出力します。CGI スクリプトの名前は、DataAPIScript 環境変数で設定できます。
          
       * @see https://movabletype.jp/documentation/appendices/tags/dataapiscript.html
       */
      ["mt:DataAPIScript"]: {} & GlobalModifier;

      /**
       * 現在の Data API のバージョン番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/dataapiversion.html
       */
      ["mt:DataAPIVersion"]: {} & GlobalModifier;

      /**
       * 再構築した日時を表示します。更新日時を表示したいときなどに利用します。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/date.html
       */
      ["mt:Date"]: {} & GlobalModifier;

      /**
       * 記事一覧の中で、前の記事と比較して日付が変わったときにのみ、最後に実行するブロックタグです。このタグは MTEntries ブロックタグの中で利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/datefooter.html
       */
      ["mt:DateFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * 記事一覧の中で、前の記事と比較して日付が変わったときにのみ、最初に実行するブロックタグです。このタグは MTEntries ブロックタグの中で利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/dateheader.html
       */
      ["mt:DateHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * Movable Type の言語名を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/defaultlanguage.html
       */
      ["mt:DefaultLanguage"]: {} & GlobalModifier;

      /**
       * 指定した条件に合致しなかったときに実行するブロックタグです。終了タグ </MTElse> は省略することができます。name や eq などのモディファイアを指定して、MTElseIf タグと同じ使い方も可能です。条件文の対象となる変数の名前 (MTSetVar ファンクションタグなどで設定した name モディファイアの値) を設定します。このモディファイアの値をもとに条件分岐がおこなわれます。省略した場合、ひとつ前の分岐（MTElseIf タグもしくは MTIf タグ）で使用した変数を参照します。name 以外にモディファイアを指定しない場合は、指定した変数の値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。Movable Type のテンプレートタグを指定します。指定したテンプレートタグの出力値をもとに条件分岐がおこなわれます。接頭辞の MT は省略できます。name モディファイアとの併用はできません。併用した場合は name モディファイアが優先されます。tag 以外にモディファイアを指定しない場合は、指定したテンプレートタグの値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。さらにモディファイアを指定して条件を細かく設定できます。何も指定しない場合は、name もしくは tag モディファイアに指定した変数に 0 以外の値がある場合にのみ実行します。指定した変数の値に foo が含まれる場合にのみ実行します。like モディファイアでは Perl の正規表現を利用できます。指定した変数の値が foo と一致する場合にのみ実行します。指定した変数の値が foo と一致しない場合にのみ実行します。指定した変数の値が foo よりも小さい場合にのみ実行します。指定した変数の値が foo よりも大きい場合にのみ実行します。指定した変数の値が foo 以下の場合にのみ実行します。指定した変数の値が foo 以上の場合にのみ実行します。op モディファイアに関しては、ドキュメント: テンプレートタグで利用できる演算関数を参照ください。配列のインデックス (添え字) を指定して、配列の変数から値を取り出します。このタグは以下のようにも書くことができます。名前[添え字] という記述が index モディファイアの代わりです。ハッシュのキーを指定して、ハッシュの変数から値を取り出します。このタグは以下のようにも書くことができます。名前{キー} という記述が key モディファイアの代わりです。Perl の式を記述することができ、結果を利用して条件分岐をおこないます。
       * @see https://movabletype.jp/documentation/appendices/tags/else.html
       */
      ["mt:Else"]: {
        /**
         * 条件文の対象となる変数の名前 (MTSetVar ファンクションタグなどで設定した name モディファイアの値) を設定します。このモディファイアの値をもとに条件分岐がおこなわれます。省略した場合、ひとつ前の分岐（MTElseIf タグもしくは MTIf タグ）で使用した変数を参照します。name 以外にモディファイアを指定しない場合は、指定した変数の値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。
         */
        name?: string;

        /**
         * Movable Type のテンプレートタグを指定します。指定したテンプレートタグの出力値をもとに条件分岐がおこなわれます。接頭辞の MT は省略できます。name モディファイアとの併用はできません。併用した場合は name モディファイアが優先されます。tag 以外にモディファイアを指定しない場合は、指定したテンプレートタグの値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。
         */
        tag?: string;

        /**
         * 指定した変数の値に foo が含まれる場合にのみ実行します。like モディファイアでは Perl の正規表現を利用できます。
         */
        like?: string;

        /**
         * 指定した変数の値が foo と一致する場合にのみ実行します。
         */
        eq?: string;

        /**
         * 指定した変数の値が foo と一致しない場合にのみ実行します。
         */
        ne?: string;

        /**
         * 指定した変数の値が foo よりも小さい場合にのみ実行します。
         */
        lt?: string;

        /**
         * 指定した変数の値が foo よりも大きい場合にのみ実行します。
         */
        gt?: string;

        /**
         * 指定した変数の値が foo 以下の場合にのみ実行します。
         */
        le?: string;

        /**
         * 指定した変数の値が foo 以上の場合にのみ実行します。
         */
        ge?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 条件に合致しなかったときに、さらに条件式を追加するブロックタグです。ひとつ前の分岐（MTElseIf タグもしくは MTIf タグ）で使用した変数を参照する場合は、name モディファイアを省略できます。条件文の対象となる変数の名前 (MTSetVar ファンクションタグなどで設定した name モディファイアの値) を設定します。このモディファイアの値をもとに条件分岐がおこなわれます。省略した場合、ひとつ前の分岐（MTElseIf タグもしくは MTIf タグ）で使用した変数を参照します。name 以外にモディファイアを指定しない場合は、指定した変数の値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。Movable Type のテンプレートタグを指定します。指定したテンプレートタグの出力値をもとに条件分岐がおこなわれます。接頭辞の MT は省略できます。name モディファイアとの併用はできません。併用した場合は name モディファイアが優先されます。tag 以外にモディファイアを指定しない場合は、指定したテンプレートタグの値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。さらにモディファイアを指定して条件を細かく設定できます。何も指定しない場合は、name もしくは tag モディファイアに指定した変数に 0 以外の値がある場合にのみ実行します。指定した変数の値に foo が含まれる場合にのみ実行します。like モディファイアでは Perl の正規表現を利用できます。指定した変数の値が foo と一致する場合にのみ実行します。指定した変数の値が foo と一致しない場合にのみ実行します。指定した変数の値が foo よりも小さい場合にのみ実行します。指定した変数の値が foo よりも大きい場合にのみ実行します。指定した変数の値が foo 以下の場合にのみ実行します。指定した変数の値が foo 以上の場合にのみ実行します。op モディファイアに関しては、ドキュメント: テンプレートタグで利用できる演算関数を参照ください。配列のインデックス (添え字) を指定して、配列の変数から値を取り出します。このタグは以下のようにも書くことができます。名前[添え字] という記述が index モディファイアの代わりです。ハッシュのキーを指定して、ハッシュの変数から値を取り出します。このタグは以下のようにも書くことができます。名前{キー} という記述が key モディファイアの代わりです。Perl の式を記述することができ、結果を利用して条件分岐をおこないます。
       * @see https://movabletype.jp/documentation/appendices/tags/elseif.html
       */
      ["mt:ElseIf"]: {
        /**
         * 条件文の対象となる変数の名前 (MTSetVar ファンクションタグなどで設定した name モディファイアの値) を設定します。このモディファイアの値をもとに条件分岐がおこなわれます。省略した場合、ひとつ前の分岐（MTElseIf タグもしくは MTIf タグ）で使用した変数を参照します。name 以外にモディファイアを指定しない場合は、指定した変数の値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。
         */
        name?: string;

        /**
         * Movable Type のテンプレートタグを指定します。指定したテンプレートタグの出力値をもとに条件分岐がおこなわれます。接頭辞の MT は省略できます。name モディファイアとの併用はできません。併用した場合は name モディファイアが優先されます。tag 以外にモディファイアを指定しない場合は、指定したテンプレートタグの値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。
         */
        tag?: string;

        /**
         * 指定した変数の値に foo が含まれる場合にのみ実行します。like モディファイアでは Perl の正規表現を利用できます。
         */
        like?: string;

        /**
         * 指定した変数の値が foo と一致する場合にのみ実行します。
         */
        eq?: string;

        /**
         * 指定した変数の値が foo と一致しない場合にのみ実行します。
         */
        ne?: string;

        /**
         * 指定した変数の値が foo よりも小さい場合にのみ実行します。
         */
        lt?: string;

        /**
         * 指定した変数の値が foo よりも大きい場合にのみ実行します。
         */
        gt?: string;

        /**
         * 指定した変数の値が foo 以下の場合にのみ実行します。
         */
        le?: string;

        /**
         * 指定した変数の値が foo 以上の場合にのみ実行します。
         */
        ge?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 記事を一覧するためのブロックタグです。記事アーカイブ以外のテンプレートで記事一覧を表示するときにこのタグを使います。モディファイアを指定することで、特定のカテゴリの記事だけを抜き出したり、指定した数の記事を日付順で一覧することなどができます。指定した数の記事を表示します。N は 0 より大きな数値にしてください。lastn モディファイアが記事の公開日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数だけ表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。値に auto を指定した場合、Movable Type の管理画面内で設定した表示件数、または、日数分で出力します。記事を並び替える対象を指定します。rate, score を指定するときは、namespace モディファイアで対象の名前空間を設定する必要があります。カスタムフィールドの値を利用してソートできます。モディファイアの値を field:customfieldbasename のように設定します。customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。カスタムフィールドの値 foo を利用して出力する記事をフィルタリングできます。モディファイアの customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。例えば表示する記事を、値が 2 だけのものにしたいときは次サンプルのようにします。また、次のサンプルは、special というベースネームのカスタムフィールド (チェックボックスとする) がチェックされている記事を新規作成順に並べ、その先頭から 5 件を表示します。このモディファイアでは、カスタムフィールドに入力した複数の値を組み合わせたフィルタリング (AND, OR, NOT) を利用できません。スコアでソート (sort_by="score") するとき、どのスコア名前空間を使用するかを設定します。お気に入り登録 の登録数でソートしたいときは、community_pack_recommend を設定します。community_pack_recommend 以外の名前空間を指定する場合は、独自にプラグインなどでの拡張が必要になります。出力対象を指定します。初期値は entry で、記事を出力します。page を指定した場合、出力対象がウェブページになります。これは MTPages タグと同じ働きをします。指定した数の記事を除外して表示します。値に 5 を指定すると、最新 5 件の記事を除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。このモディファイアでは、記事を特定のカテゴリに属するものだけにフィルタリングできます。記事に設定したサブカテゴリもフィルタリングの対象になります。指定する値はカテゴリ名です。（カテゴリのベースネームではありません。）category="category_foo"、および categories="category_foo" のどちらも、挙動は同じです。1 つのカテゴリをフィルタリングする際に categories="category_foo" と記述が可能ですし、複数カテゴリのフィルタリングをする際に category="category_foo という記述が可能です。 次のサンプルは、ひとつのカテゴリ (サンプルでは Featured カテゴリ)に含まれる記事だけにフィルタリングします。もし、指定したいカテゴリが、別の親カテゴリに含まれる同じ名前の子カテゴリなら、親カテゴリといっしょに指定します。または名前に半角スラッシュ / が含まれているカテゴリを指定する場合は [] で囲みます。複数のカテゴリを組み合わせ、AND, OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets カテゴリと、Featured カテゴリに含まれる (複数のカテゴリに含まれる) 記事にフィルタリングします。また、次のサンプルは、Family カテゴリ以外のカテゴリに含まれる記事 (どのカテゴリにも含まれない記事も含む) にフィルタリングします。もし、category または categories モディファイアで設定したカテゴリの、すべての子カテゴリに含まれる記事にフィルタリングしたいときは、値に 1 を設定します。初期値は 0 です。このモディファイアは、対象が記事に設定するタグという点以外は category, categories モディファイアと同じ働きをします。AND や OR, NOT などの演算子にも使えるので、複雑なフィルタリングにも対応します。記事を特定のユーザーが投稿したものにフィルタリングします。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーが投稿した記事にフィルタリングします。このモディファイアは、単一の記事にフィルタリングしたいときに使用します。対象の記事がほかのサイトにある場合は include_blogs などのモディファイアで該当サイトの ID も併用して指定します。次のサンプルは、ID が 10 の記事のみにフィルタリングします。記事に付けられたスコアに基づいた、記事のフィルタリング (score, rate, count) をおこないます。各々は namespace モディファイアが必要です。特定のユーザーがスコアを付けた記事だけにフィルタリングできます。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。現在の日に基いて、記事を指定日数内に投稿されたものに限定して出力します。次のサンプルは、現在の日に基いて、10 日以内に投稿されたの記事のみにフィルタリングします。最近コメント投稿された記事のリストの出力に使用します。指定するのは件数で、最近コメント投稿された N 件の記事のみにフィルタリングします。次のサンプルは、最近コメント投稿された 10 件の記事のみにフィルタリングします。このモディファイアを付与すると、その MTEntries ブロックタグは、同じテンプレート内で使用した MTEntries ブロックタグで出力した記事を除いて出力します。初期値は 0 です。次のサンプルは、ひとつめの MTEntries で @featured シークレットタグが付けられた記事の最新 3 件にフィルタリングを、ふたつめの MTEntries ブロックでは、最新 7 件の記事にフィルタリングするようにしています。ふたつめの MTEntries ブロックには unique モディファイアが付与されていますので、出力する最新 7 件の記事の中には、ひとつめの MTEntries ブロックで出力した @featured シークレットタグの付いた、最新 3 件の記事は含まれません。複数の記事に関する情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、記事の ID を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果はつぎのとおりです。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/entries.html
       */
      ["mt:Entries"]: {
        /**
         * 指定した数の記事を表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * lastn モディファイアが記事の公開日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数だけ表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。値に auto を指定した場合、Movable Type の管理画面内で設定した表示件数、または、日数分で出力します。
         */
        limit?: number;

        /**
         * 記事を並び替える対象を指定します。rate, score を指定するときは、namespace モディファイアで対象の名前空間を設定する必要があります。カスタムフィールドの値を利用してソートできます。モディファイアの値を field:customfieldbasename のように設定します。customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。
         */
        sort_by?:
          | "authored_on"
          | "author_id"
          | "basename"
          | "comment_count"
          | "created_on"
          | "excerpt"
          | "modified_on"
          | "ping_count"
          | "text"
          | "text_more"
          | "title"
          | "rate"
          | "score"
          | "field:customfieldbasename"
          | "カスタムフィールドの値で並べ替えやフィルタリングする"
          | string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。
         */
        sort_order?: "ascend" | "descend";

        /**
         * カスタムフィールドの値 foo を利用して出力する記事をフィルタリングできます。モディファイアの customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。例えば表示する記事を、値が 2 だけのものにしたいときは次サンプルのようにします。また、次のサンプルは、special というベースネームのカスタムフィールド (チェックボックスとする) がチェックされている記事を新規作成順に並べ、その先頭から 5 件を表示します。このモディファイアでは、カスタムフィールドに入力した複数の値を組み合わせたフィルタリング (AND, OR, NOT) を利用できません。
         */
        customfieldbasename?: string;

        /**
         * スコアでソート (sort_by="score") するとき、どのスコア名前空間を使用するかを設定します。お気に入り登録 の登録数でソートしたいときは、community_pack_recommend を設定します。community_pack_recommend 以外の名前空間を指定する場合は、独自にプラグインなどでの拡張が必要になります。
         */
        namespace?: string;

        /**
         * 出力対象を指定します。初期値は entry で、記事を出力します。page を指定した場合、出力対象がウェブページになります。これは MTPages タグと同じ働きをします。
         */
        class_type?: string;

        /**
         * 指定した数の記事を除外して表示します。値に 5 を指定すると、最新 5 件の記事を除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。
         */
        offset?: number;

        /**
         * このモディファイアでは、記事を特定のカテゴリに属するものだけにフィルタリングできます。記事に設定したサブカテゴリもフィルタリングの対象になります。指定する値はカテゴリ名です。（カテゴリのベースネームではありません。）category="category_foo"、および categories="category_foo" のどちらも、挙動は同じです。1 つのカテゴリをフィルタリングする際に categories="category_foo" と記述が可能ですし、複数カテゴリのフィルタリングをする際に category="category_foo という記述が可能です。 次のサンプルは、ひとつのカテゴリ (サンプルでは Featured カテゴリ)に含まれる記事だけにフィルタリングします。もし、指定したいカテゴリが、別の親カテゴリに含まれる同じ名前の子カテゴリなら、親カテゴリといっしょに指定します。または名前に半角スラッシュ / が含まれているカテゴリを指定する場合は [] で囲みます。複数のカテゴリを組み合わせ、AND, OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets カテゴリと、Featured カテゴリに含まれる (複数のカテゴリに含まれる) 記事にフィルタリングします。また、次のサンプルは、Family カテゴリ以外のカテゴリに含まれる記事 (どのカテゴリにも含まれない記事も含む) にフィルタリングします。
         */
        category?: string;

        /**
         * このモディファイアでは、記事を特定のカテゴリに属するものだけにフィルタリングできます。記事に設定したサブカテゴリもフィルタリングの対象になります。指定する値はカテゴリ名です。（カテゴリのベースネームではありません。）category="category_foo"、および categories="category_foo" のどちらも、挙動は同じです。1 つのカテゴリをフィルタリングする際に categories="category_foo" と記述が可能ですし、複数カテゴリのフィルタリングをする際に category="category_foo という記述が可能です。 次のサンプルは、ひとつのカテゴリ (サンプルでは Featured カテゴリ)に含まれる記事だけにフィルタリングします。もし、指定したいカテゴリが、別の親カテゴリに含まれる同じ名前の子カテゴリなら、親カテゴリといっしょに指定します。または名前に半角スラッシュ / が含まれているカテゴリを指定する場合は [] で囲みます。複数のカテゴリを組み合わせ、AND, OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets カテゴリと、Featured カテゴリに含まれる (複数のカテゴリに含まれる) 記事にフィルタリングします。また、次のサンプルは、Family カテゴリ以外のカテゴリに含まれる記事 (どのカテゴリにも含まれない記事も含む) にフィルタリングします。
         */
        categories?: string;

        /**
         * もし、category または categories モディファイアで設定したカテゴリの、すべての子カテゴリに含まれる記事にフィルタリングしたいときは、値に 1 を設定します。初期値は 0 です。
         */
        include_subcategories?: string;

        /**
         * このモディファイアは、対象が記事に設定するタグという点以外は category, categories モディファイアと同じ働きをします。AND や OR, NOT などの演算子にも使えるので、複雑なフィルタリングにも対応します。
         */
        tag?: string;

        /**
         * このモディファイアは、対象が記事に設定するタグという点以外は category, categories モディファイアと同じ働きをします。AND や OR, NOT などの演算子にも使えるので、複雑なフィルタリングにも対応します。
         */
        tags?: string;

        /**
         * 記事を特定のユーザーが投稿したものにフィルタリングします。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーが投稿した記事にフィルタリングします。
         */
        author?: string;

        /**
         * このモディファイアは、単一の記事にフィルタリングしたいときに使用します。対象の記事がほかのサイトにある場合は include_blogs などのモディファイアで該当サイトの ID も併用して指定します。次のサンプルは、ID が 10 の記事のみにフィルタリングします。
         */
        id?: string;

        /**
         *
         */
        min_score?: string;

        /**
         *
         */
        max_score?: string;

        /**
         *
         */
        min_rate?: string;

        /**
         *
         */
        max_rate?: string;

        /**
         *
         */
        min_count?: string;

        /**
         * 記事に付けられたスコアに基づいた、記事のフィルタリング (score, rate, count) をおこないます。各々は namespace モディファイアが必要です。
         */
        max_count?: string;

        /**
         * 特定のユーザーがスコアを付けた記事だけにフィルタリングできます。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。
         */
        scored_by?: string;

        /**
         * 現在の日に基いて、記事を指定日数内に投稿されたものに限定して出力します。次のサンプルは、現在の日に基いて、10 日以内に投稿されたの記事のみにフィルタリングします。
         */
        days?: string;

        /**
         * 最近コメント投稿された記事のリストの出力に使用します。指定するのは件数で、最近コメント投稿された N 件の記事のみにフィルタリングします。次のサンプルは、最近コメント投稿された 10 件の記事のみにフィルタリングします。
         */
        recently_commented_on?: string;

        /**
         * このモディファイアを付与すると、その MTEntries ブロックタグは、同じテンプレート内で使用した MTEntries ブロックタグで出力した記事を除いて出力します。初期値は 0 です。次のサンプルは、ひとつめの MTEntries で @featured シークレットタグが付けられた記事の最新 3 件にフィルタリングを、ふたつめの MTEntries ブロックでは、最新 7 件の記事にフィルタリングするようにしています。ふたつめの MTEntries ブロックには unique モディファイアが付与されていますので、出力する最新 7 件の記事の中には、ひとつめの MTEntries ブロックで出力した @featured シークレットタグの付いた、最新 3 件の記事は含まれません。
         */
        unique?: string;

        /**
         * 複数の記事に関する情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、記事の ID を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果はつぎのとおりです。
         */
        glue?: string;

        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 特定のコンテキストの中で、出力される記事の件数を表示します。例えば、elephant というタグのついた記事のリストを出力する際に、その対象となる記事の件数を出力するのに使います。ブログ以下の特定のコンテキストに含まれない場所 (メインページテンプレートにこのタグだけを書くなど) で使用した場合は、そのブログの管理画面で設定した表示記事件数分まで表示します。カウントが 1 件のときに表示するメッセージを指定します。0 件のときにはなにも表示されません。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。0 件のときにはなにも表示されません。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/entriescount.html
       */
      ["mt:EntriesCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。0 件のときにはなにも表示されません。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。0 件のときにはなにも表示されません。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * MTEntries ブロックタグの中で、最後の記事のときだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/entriesfooter.html
       */
      ["mt:EntriesFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * MTEntries ブロックタグの中で、最初の記事のときだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/entriesheader.html
       */
      ["mt:EntriesHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * 記事を一覧するためのブロックタグです。MTEntries ブロックタグで include_subcategories="1" を指定した場合と同じ動作になります。
MTEntries ブロックタグでカテゴリを指定した場合、そのカテゴリに属する記事のみが対象になるのに対し、このタグでカテゴリを指定した場合は、指定したカテゴリとすべての子カテゴリに属する記事が対象になります。指定した数の記事を表示します。N は 0 より大きな数値にしてください。lastn モディファイアが記事の公開日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数だけ表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。値に auto を指定した場合、Movable Type の管理画面内で設定した表示件数、または、日数分で出力します。記事を並び替える対象を指定します。rate, score を指定するときは、namespace モディファイアで対象の名前空間を設定する必要があります。カスタムフィールドの値を利用してソートできます。モディファイアの値を field:customfieldbasename のように設定します。customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。カスタムフィールドの値 foo を利用して出力する記事をフィルタリングできます。モディファイアの customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。例えば表示する記事を、値が 2 だけのものにしたいときは次サンプルのようにします。また、次のサンプルは、special というベースネームのカスタムフィールド (チェックボックスとする) がチェックされている記事を新規作成順に並べ、その先頭から 5 件を表示します。このモディファイアでは、カスタムフィールドに入力した複数の値を組み合わせたフィルタリング (AND, OR, NOT) を利用できません。スコアでソート (sort_by="score") するとき、どのスコア名前空間を使用するかを設定します。お気に入り登録 の登録数でソートしたいときは、community_pack_recommend を設定します。community_pack_recommend 以外の名前空間を指定する場合は、独自にプラグインなどでの拡張が必要になります。指定した数の記事を除外して表示します。値に 5 を指定すると、最新 5 件の記事を除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。このモディファイアでは、記事を特定のカテゴリに属するものだけにフィルタリングできます。記事に設定したサブカテゴリもフィルタリングの対象になります。category="category_foo"、および categories="category_foo" のどちらも、挙動は同じです。1 つのカテゴリをフィルタリングする際に categories="category_foo" と記述が可能ですし、複数カテゴリのフィルタリングをする際に category="category_foo という記述が可能です。 次のサンプルは、ひとつのカテゴリ (サンプルでは Featured カテゴリ)に含まれる記事だけにフィルタリングします。もし、指定したいカテゴリが、別の親カテゴリに含まれる同じ名前の子カテゴリなら、親カテゴリといっしょに指定します。または名前に半角スラッシュ / が含まれているカテゴリを指定する場合は [] で囲みます。複数のカテゴリを組み合わせ、AND, OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets カテゴリと、Featured カテゴリに含まれる (複数のカテゴリに含まれる) 記事にフィルタリングします。また、次のサンプルは、Family カテゴリ以外のカテゴリに含まれる記事 (どのカテゴリにも含まれない記事も含む) にフィルタリングします。このモディファイアは、対象が記事に設定するタグという点以外は category, categories モディファイアと同じ働きをします。AND や OR, NOT などの演算子にも使えるので、複雑なフィルタリングにも対応します。記事を特定のユーザーが投稿したものにフィルタリングします。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーが投稿した記事にフィルタリングします。このモディファイアは、単一の記事にフィルタリングしたいときに使用します。次のサンプルは、entry id が 10 の記事のみにフィルタリングします。記事に付けられたスコアに基づいた、記事のフィルタリング (score, rate, count) をおこないます。各々は namespace モディファイアが必要です。特定のユーザーがスコアを付けた記事だけにフィルタリングできます。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。現在の日に基いて、記事を指定日数内に投稿されたものに限定して出力します。次のサンプルは、現在の日に基いて、10 日以内に投稿されたの記事のみにフィルタリングします。最近コメント投稿された記事のリストの出力に使用します。指定するのは件数で、最近コメント投稿された N 件の記事のみにフィルタリングします。次のサンプルは、最近コメント投稿された 10 件の記事のみにフィルタリングします。このモディファイアを付与すると、その EntriesWithSubCategories ブロックタグは、同じテンプレート内で使用した EntriesWithSubCategories ブロックタグで出力した記事を除いて出力します。初期値は 0 です。次のサンプルは、ひとつめの EntriesWithSubCategories で @featured シークレットタグが付けられた記事の最新 3 件にフィルタリングを、ふたつめの EntriesWithSubCategories ブロックでは、最新 7 件の記事にフィルタリングするようにしています。ふたつめの EntriesWithSubCategories ブロックには unique モディファイアが付与されていますので、出力する最新 7 件の記事の中には、ひとつめの EntriesWithSubCategories ブロックで出力した @featured シークレットタグの付いた、最新 3 件の記事は含まれません。複数の記事に関する情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、記事の ID を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果はつぎのとおりです。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/entrieswithsubcategories.html
       */
      ["mt:EntriesWithSubCategories"]: {
        /**
         * 指定した数の記事を表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * lastn モディファイアが記事の公開日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数だけ表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。値に auto を指定した場合、Movable Type の管理画面内で設定した表示件数、または、日数分で出力します。
         */
        limit?: number;

        /**
         * 記事を並び替える対象を指定します。rate, score を指定するときは、namespace モディファイアで対象の名前空間を設定する必要があります。カスタムフィールドの値を利用してソートできます。モディファイアの値を field:customfieldbasename のように設定します。customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。
         */
        sort_by?:
          | "authored_on"
          | "author_id"
          | "basename"
          | "created_on"
          | "excerpt"
          | "title"
          | "comment_count"
          | "ping_count"
          | "text"
          | "text_more"
          | "title"
          | "modified_on"
          | "rate"
          | "score"
          | "field:customfieldbasename"
          | "カスタムフィールドの値で並べ替えやフィルタリングする"
          | string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。
         */
        sort_order?: "ascend" | "descend";

        /**
         * カスタムフィールドの値 foo を利用して出力する記事をフィルタリングできます。モディファイアの customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。例えば表示する記事を、値が 2 だけのものにしたいときは次サンプルのようにします。また、次のサンプルは、special というベースネームのカスタムフィールド (チェックボックスとする) がチェックされている記事を新規作成順に並べ、その先頭から 5 件を表示します。このモディファイアでは、カスタムフィールドに入力した複数の値を組み合わせたフィルタリング (AND, OR, NOT) を利用できません。
         */
        customfieldbasename?: string;

        /**
         * スコアでソート (sort_by="score") するとき、どのスコア名前空間を使用するかを設定します。お気に入り登録 の登録数でソートしたいときは、community_pack_recommend を設定します。community_pack_recommend 以外の名前空間を指定する場合は、独自にプラグインなどでの拡張が必要になります。
         */
        namespace?: string;

        /**
         * 指定した数の記事を除外して表示します。値に 5 を指定すると、最新 5 件の記事を除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。
         */
        offset?: number;

        /**
         * このモディファイアでは、記事を特定のカテゴリに属するものだけにフィルタリングできます。記事に設定したサブカテゴリもフィルタリングの対象になります。category="category_foo"、および categories="category_foo" のどちらも、挙動は同じです。1 つのカテゴリをフィルタリングする際に categories="category_foo" と記述が可能ですし、複数カテゴリのフィルタリングをする際に category="category_foo という記述が可能です。 次のサンプルは、ひとつのカテゴリ (サンプルでは Featured カテゴリ)に含まれる記事だけにフィルタリングします。もし、指定したいカテゴリが、別の親カテゴリに含まれる同じ名前の子カテゴリなら、親カテゴリといっしょに指定します。または名前に半角スラッシュ / が含まれているカテゴリを指定する場合は [] で囲みます。複数のカテゴリを組み合わせ、AND, OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets カテゴリと、Featured カテゴリに含まれる (複数のカテゴリに含まれる) 記事にフィルタリングします。また、次のサンプルは、Family カテゴリ以外のカテゴリに含まれる記事 (どのカテゴリにも含まれない記事も含む) にフィルタリングします。
         */
        category?: string;

        /**
         * このモディファイアでは、記事を特定のカテゴリに属するものだけにフィルタリングできます。記事に設定したサブカテゴリもフィルタリングの対象になります。category="category_foo"、および categories="category_foo" のどちらも、挙動は同じです。1 つのカテゴリをフィルタリングする際に categories="category_foo" と記述が可能ですし、複数カテゴリのフィルタリングをする際に category="category_foo という記述が可能です。 次のサンプルは、ひとつのカテゴリ (サンプルでは Featured カテゴリ)に含まれる記事だけにフィルタリングします。もし、指定したいカテゴリが、別の親カテゴリに含まれる同じ名前の子カテゴリなら、親カテゴリといっしょに指定します。または名前に半角スラッシュ / が含まれているカテゴリを指定する場合は [] で囲みます。複数のカテゴリを組み合わせ、AND, OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets カテゴリと、Featured カテゴリに含まれる (複数のカテゴリに含まれる) 記事にフィルタリングします。また、次のサンプルは、Family カテゴリ以外のカテゴリに含まれる記事 (どのカテゴリにも含まれない記事も含む) にフィルタリングします。
         */
        categories?: string;

        /**
         * このモディファイアは、対象が記事に設定するタグという点以外は category, categories モディファイアと同じ働きをします。AND や OR, NOT などの演算子にも使えるので、複雑なフィルタリングにも対応します。
         */
        tag?: string;

        /**
         * このモディファイアは、対象が記事に設定するタグという点以外は category, categories モディファイアと同じ働きをします。AND や OR, NOT などの演算子にも使えるので、複雑なフィルタリングにも対応します。
         */
        tags?: string;

        /**
         * 記事を特定のユーザーが投稿したものにフィルタリングします。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーが投稿した記事にフィルタリングします。
         */
        author?: string;

        /**
         * このモディファイアは、単一の記事にフィルタリングしたいときに使用します。次のサンプルは、entry id が 10 の記事のみにフィルタリングします。
         */
        id?: string;

        /**
         *
         */
        min_score?: string;

        /**
         *
         */
        max_score?: string;

        /**
         *
         */
        min_rate?: string;

        /**
         *
         */
        max_rate?: string;

        /**
         *
         */
        min_count?: string;

        /**
         * 記事に付けられたスコアに基づいた、記事のフィルタリング (score, rate, count) をおこないます。各々は namespace モディファイアが必要です。
         */
        max_count?: string;

        /**
         * 特定のユーザーがスコアを付けた記事だけにフィルタリングできます。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。
         */
        scored_by?: string;

        /**
         * 現在の日に基いて、記事を指定日数内に投稿されたものに限定して出力します。次のサンプルは、現在の日に基いて、10 日以内に投稿されたの記事のみにフィルタリングします。
         */
        days?: string;

        /**
         * 最近コメント投稿された記事のリストの出力に使用します。指定するのは件数で、最近コメント投稿された N 件の記事のみにフィルタリングします。次のサンプルは、最近コメント投稿された 10 件の記事のみにフィルタリングします。
         */
        recently_commented_on?: string;

        /**
         * このモディファイアを付与すると、その EntriesWithSubCategories ブロックタグは、同じテンプレート内で使用した EntriesWithSubCategories ブロックタグで出力した記事を除いて出力します。初期値は 0 です。次のサンプルは、ひとつめの EntriesWithSubCategories で @featured シークレットタグが付けられた記事の最新 3 件にフィルタリングを、ふたつめの EntriesWithSubCategories ブロックでは、最新 7 件の記事にフィルタリングするようにしています。ふたつめの EntriesWithSubCategories ブロックには unique モディファイアが付与されていますので、出力する最新 7 件の記事の中には、ひとつめの EntriesWithSubCategories ブロックで出力した @featured シークレットタグの付いた、最新 3 件の記事は含まれません。
         */
        unique?: string;

        /**
         * 複数の記事に関する情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、記事の ID を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果はつぎのとおりです。
         */
        glue?: string;

        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 記事に指定したカテゴリの一覧のためのブロックタグです。この一覧には、メインカテゴリは含みません。また、このブロックタグの中では <$MTCategory...$> タグを利用できます。モディファイア glue を使うと、カテゴリの区切り文字を指定できます。複数のカテゴリを並べて表示するときの、区切り文字を設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryadditionalcategories.html
       */
      ["mt:EntryAdditionalCategories"]: {
        /**
         * 複数のカテゴリを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 特定の記事で利用しているアイテムの一覧を表示するためのブロックタグです。記事アーカイブか、MTEntries ブロックタグの中で利用できます。指定した数のアイテムを表示します。N は 0 より大きな数値にしてください。指定した数のアイテムを除外して表示します。値に 5 を指定すると、最新 5 件のアイテムを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。sort_by モディファイアでフィルタリングされたアイテムを、指定数表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。指定したタグが設定されたアイテムをすべて表示します。アイテムの数を指定するときは lastn を併用してください。複数のタグを指定するときは AND か OR を使います。特定のタグ以外を指定するときは NOT を使います。また、() でくくることで、条件判断の優先順位を指定できます。指定したユーザーがアップロードしたアイテムのみ表示します。アイテム数を指定するときは lastn を併用してください。表示したいアイテムをアイテムの種類で絞り込むことができます。表示したいアイテムが image でも audio でも video でもない場合は、file という値を設定します。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。記事を並び替える対象を指定します。MTAssetIsFirstInRow, MTAssetIsLastInRow タグを使用して、画像の一覧を作成する際に、一行に表示するアイテム数 N 件を設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryassets.html
       */
      ["mt:EntryAssets"]: {
        /**
         * 指定した数のアイテムを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 指定した数のアイテムを除外して表示します。値に 5 を指定すると、最新 5 件のアイテムを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。
         */
        offset?: number;

        /**
         * sort_by モディファイアでフィルタリングされたアイテムを、指定数表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。
         */
        limit?: number;

        /**
         * 指定したタグが設定されたアイテムをすべて表示します。アイテムの数を指定するときは lastn を併用してください。複数のタグを指定するときは AND か OR を使います。特定のタグ以外を指定するときは NOT を使います。また、() でくくることで、条件判断の優先順位を指定できます。
         */
        tags?: string;

        /**
         * 指定したユーザーがアップロードしたアイテムのみ表示します。アイテム数を指定するときは lastn を併用してください。
         */
        author?: string;

        /**
         * 表示したいアイテムをアイテムの種類で絞り込むことができます。表示したいアイテムが image でも audio でも video でもない場合は、file という値を設定します。
         */
        type?: string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
         */
        sort_order?: "ascend" | "descend";

        /**
         * 記事を並び替える対象を指定します。
         */
        sort_by?: "file_name" | "created_by" | "created_on" | string;

        /**
         * MTAssetIsFirstInRow, MTAssetIsLastInRow タグを使用して、画像の一覧を作成する際に、一行に表示するアイテム数 N 件を設定します。
         */
        assets_per_row?: string;
        file_ext?: ("jpg" | "jpeg" | "gif" | "png" | string)[] | string;
      } & GlobalModifier &
        BlockElement;

      /**
       * Atom フィードの ID 要素で使用される文字列を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryatomid.html
       */
      ["mt:EntryAtomID"]: {} & GlobalModifier;

      /**
       * 記事投稿者のユーザー名を表示します。ユーザー名は管理画面へのサインインに使用されるため、ブログ上での表示用途には推奨していません。ブログ上での表示には MTEntryAuthorDisplayName タグの利用を推奨しています。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthor.html
       */
      ["mt:EntryAuthor"]: {} & GlobalModifier;

      /**
       * 記事を作成したユーザーの『表示名』を表示します。セキュリティ上の理由により、ユーザー設定で『表示名』の設定が無い場合、何も表示されません。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthordisplayname.html
       */
      ["mt:EntryAuthorDisplayName"]: {} & GlobalModifier;

      /**
       * 記事を作成したユーザーのメールアドレスを表示します。Movable Type のユーザーのメールアドレスをブログに表示することは、スパムの温床になるため推奨しません。メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthoremail.html
       */
      ["mt:EntryAuthorEmail"]: {
        /**
         * メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       * 記事またはウェブページを作成したユーザーの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthorid.html
       */
      ["mt:EntryAuthorID"]: {} & GlobalModifier;

      /**
       * 記事を作成したユーザーの『表示名』をリンク付きで表示します。ユーザー情報の編集画面の『ウェブサイト URL』が入力されていれば URL へのリンクが付加されます。『ウェブサイト URL』が入力されていない場合、リンクは付加されません。もし、『ウェブサイト URL』が入力されておらず、且つ、『電子メール』が入力されている場合は、show_email モディファイアを 1 に設定することでメールアドレスへのリンクが付加されます。両方とも入力されていないときは、リンクは付加されません。ユーザー情報の編集画面の『ウェブサイト URL』に入力されている URL へのリンクを生成します。初期値は 1 です。ユーザーに『ウェブサイト URL』が設定されていない場合、本モディファイアの値を 1 に設定することで、ユーザー情報の編集画面の『電子メール』に入力されているメールアドレスへのリンクを生成します。初期値は 0 です。値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。リンクの種類を任意に指定します。初期値はありません。指定した種類のユーザー情報が入力されていない場合、リンクは付加されません。値に archive を指定した場合はユーザーアーカイブのリンクを生成するため、あらかじめテンプレートと「ユーザー」アーカイブマッピングの設定が必要です。以下の例のように、リンクの種類を識別するための class 属性をリンクに付加します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthorlink.html
       */
      ["mt:EntryAuthorLink"]: {
        /**
         * ユーザー情報の編集画面の『ウェブサイト URL』に入力されている URL へのリンクを生成します。初期値は 1 です。
         */
        show_url?: string;

        /**
         * ユーザーに『ウェブサイト URL』が設定されていない場合、本モディファイアの値を 1 に設定することで、ユーザー情報の編集画面の『電子メール』に入力されているメールアドレスへのリンクを生成します。初期値は 0 です。
         */
        show_email?: string;

        /**
         * 値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。
         */
        new_window?: string;

        /**
         * メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;

        /**
         * リンクの種類を任意に指定します。初期値はありません。指定した種類のユーザー情報が入力されていない場合、リンクは付加されません。値に archive を指定した場合はユーザーアーカイブのリンクを生成するため、あらかじめテンプレートと「ユーザー」アーカイブマッピングの設定が必要です。
         */
        type?: string;

        /**
         * 以下の例のように、リンクの種類を識別するための class 属性をリンクに付加します。初期値は 0 です。
         */
        show_hcard?: string;
      } & GlobalModifier;

      /**
       * このタグは現在、非推奨です。Movable Type 3.2 以降では、MTEntryAuthorDisplayName タグの利用を推奨しています。記事を作成したユーザーの『表示名』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthornickname.html
       */
      ["mt:EntryAuthorNickname"]: {} & GlobalModifier;

      /**
       * 記事を作成したユーザーの『ウェブサイト URL』を表示します。『ウェブサイト URL』はユーザー作成時やユーザー情報の編集画面で設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthorurl.html
       */
      ["mt:EntryAuthorURL"]: {} & GlobalModifier;

      /**
       * 記事を作成したユーザーの名前 (ユーザー情報の編集画面の『ユーザー名』) を表示します。ユーザー名は管理画面へのサインインに使用されるため、ブログ上での表示には MTEntryAuthorDisplayName ファンクションタグの利用を推奨しています。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthorusername.html
       */
      ["mt:EntryAuthorUsername"]: {} & GlobalModifier;

      /**
       * 記事を作成したユーザーのプロフィール画像を表示するための img 要素を表示します。出力のサンプルは以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthoruserpic.html
       */
      ["mt:EntryAuthorUserpic"]: {} & GlobalModifier;

      /**
       * 記事を作成したユーザーのプロフィール画像に関する情報を取得するためのブロックタグです。このタグの中では、アイテム関連のテンプレートタグを利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthoruserpicasset.html
       */
      ["mt:EntryAuthorUserpicAsset"]: {} & GlobalModifier & BlockElement;

      /**
       * 記事を作成したユーザーのプロフィール画像の URL アドレスを出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryauthoruserpicurl.html
       */
      ["mt:EntryAuthorUserpicURL"]: {} & GlobalModifier;

      /**
       * 記事の『出力ファイル名』（ベースネーム）を表示します。ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrybasename.html
       */
      ["mt:EntryBasename"]: {
        /**
         * ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
         */
        separator?: string;
      } & GlobalModifier;

      /**
       * 記事が属するブログの『説明』を表示します。複数のブログを対象にした記事一覧を出力する際に使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryblogdescription.html
       */
      ["mt:EntryBlogDescription"]: {} & GlobalModifier;

      /**
       * 記事が属するブログの ID 番号を表示します。複数のブログを対象にした記事一覧を出力する際に使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryblogid.html
       */
      ["mt:EntryBlogID"]: {} & GlobalModifier;

      /**
       * 記事が属するブログの名前を表示します。複数のブログを対象にした記事一覧を出力する際に使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryblogname.html
       */
      ["mt:EntryBlogName"]: {} & GlobalModifier;

      /**
       * 記事が属するブログの URL を表示します。複数のブログを対象にした記事一覧を出力する際に使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryblogurl.html
       */
      ["mt:EntryBlogURL"]: {} & GlobalModifier;

      /**
       * 記事の本文を表示します。記事に指定されているフォーマットを適用するか指定します。0 ではフォーマットを適用せず、入力された内容がそのまま出力されます。1 ではフォーマットが適用されます。言語設定を日本語にしているときは、記事の本文から、指定した N 文字分だけ抜き出します。もし、言語設定を英語にしているなら、記事の本文から N 語 (単語) 分だけ抜き出します。初期値はありません。注意点は、言語設定を日本語にしている環境で、本文に英語の文章を含むときです。この場合、本文から N 語分抜き出すのではなく、N 文字分抜き出します。どちらの場合も、テキストに含まれている html は除去されたうえで処理されます。
       * @see https://movabletype.jp/documentation/appendices/tags/entrybody.html
       */
      ["mt:EntryBody"]: {
        /**
         * 記事に指定されているフォーマットを適用するか指定します。0 ではフォーマットを適用せず、入力された内容がそのまま出力されます。1 ではフォーマットが適用されます。
         */
        convert_breaks?: string;

        /**
         * 言語設定を日本語にしているときは、記事の本文から、指定した N 文字分だけ抜き出します。もし、言語設定を英語にしているなら、記事の本文から N 語 (単語) 分だけ抜き出します。初期値はありません。注意点は、言語設定を日本語にしている環境で、本文に英語の文章を含むときです。この場合、本文から N 語分抜き出すのではなく、N 文字分抜き出します。どちらの場合も、テキストに含まれている html は除去されたうえで処理されます。
         */
        words?: string;
      } & GlobalModifier;

      /**
       * 記事に指定したカテゴリの一覧のためのブロックタグです。この一覧にはメインカテゴリも含みます。また、このブロックタグの中では <$MTCategory...$> ファンクションタグを利用できます。glue モディファイアを使うと、カテゴリの区切り文字を指定できます。複数のカテゴリを並べて表示するときの、区切り文字を設定します。プライマリカテゴリ（メインカテゴリ）のみを表示します。MTEntryPrimaryCategory ブロックタグと同じ働きをします。
       * @see https://movabletype.jp/documentation/appendices/tags/entrycategories.html
       */
      ["mt:EntryCategories"]: {
        /**
         * 複数のカテゴリを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;

        /**
         * プライマリカテゴリ（メインカテゴリ）のみを表示します。MTEntryPrimaryCategory ブロックタグと同じ働きをします。
         */
        type?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 記事に指定したメインカテゴリを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrycategory.html
       */
      ["mt:EntryCategory"]: {} & GlobalModifier;

      /**
       * コンテンツが記事かウェブページかを表示します。MTEntryClassLabel タグと異なり、ユーザーの使用言語設定にかかわらず、entry もしくは page と表示されます。例えば MTComments ブロックタグを単独で利用する場合、記事とウェブページ両方のコメントを表示するので、どちらに投稿されたコメントなのかを判断することができます。
       * @see https://movabletype.jp/documentation/appendices/tags/entryclass.html
       */
      ["mt:EntryClass"]: {} & GlobalModifier;

      /**
       * コンテンツが、記事かウェブページかを表示します。検索結果などのページで、記事とウェブページを別のデザインで表示させる場合などに使用します。MTEntryClass タグとの違いは、再構築したユーザーの使用言語によって翻訳されて表示される点です。例えば、使用言語が English の場合は、Entry もしくは Page、日本語の場合は記事もしくはウェブページと表示されます。使い方の例では、MTSetVarBlock ブロックタグ、MTIf コンディショナルタグと組み合わせて条件分岐をおこなうことで、出力内容を変更しています。
       * @see https://movabletype.jp/documentation/appendices/tags/entryclasslabel.html
       */
      ["mt:EntryClassLabel"]: {} & GlobalModifier;

      /**
       * 特定の記事で受け付けたコメントの数を表示します。ブログ全体のコメント数を表示するときには、MTBlogCommentCount ファンクションタグを使います。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrycommentcount.html
       */
      ["mt:EntryCommentCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;

        /**
         *
         */
        top?: string;
      } & GlobalModifier;

      /**
       * 記事の作成日時を表示します。作成日時は公開日時ではなく、実際に記事を作成した日時です。モディファイア format と language を指定して、日時の表示方法を変更できます。更新保存された日時を表示する場合は MTEntryModifiedDate ファンクションタグを利用します。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/entrycreateddate.html
       */
      ["mt:EntryCreatedDate"]: {} & GlobalModifier;

      /**
       * 記事作成画面に追加されたカスタムフィールドの『説明』を表示するファンクションタグです。このタグは MTEntryCustomFields ブロックタグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrycustomfielddescription.html
       */
      ["mt:EntryCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 記事作成画面に追加されたカスタムフィールドの『名前』を表示するファンクションタグです。このタグは MTEntryCustomFields ブロックタグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrycustomfieldname.html
       */
      ["mt:EntryCustomFieldName"]: {} & GlobalModifier;

      /**
       * 記事に関するカスタムフィールドの情報を表示するためのブロックタグです。記事作成画面に追加されたすべてのカスタムフィールドの情報を表示します。include モディファイアでは、指定したカスタムフィールドのみを表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrycustomfields.html
       */
      ["mt:EntryCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 記事作成画面に追加されたカスタムフィールドに入力された値を表示するファンクションタグです。このタグは MTEntryCustomFields ブロックタグのコンテキストで使用します。カスタムフィールドで追加した項目からアップロードした画像などのアイテムを表示するには、専用のタグと合わせて追加される Asset タグを使用します。詳しくはドキュメントを参照ください。
       * @see https://movabletype.jp/documentation/appendices/tags/entrycustomfieldvalue.html
       */
      ["mt:EntryCustomFieldValue"]: {} & GlobalModifier;

      /**
       * 記事の公開日を表示します。モディファイア format と language を指定して、日時の表示方法を変更できます。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/entrydate.html
       */
      ["mt:EntryDate"]: {} & GlobalModifier;

      /**
       * このタグは Movable Type 5 で廃止されました。必要な場合は、以下のようなタグで編集リンクを表示できます。ただし、ブラウザのログインセッションを確認するなどのセキュリティ対策を推奨します。ブログ内検索で検索結果に表示された記事を編集するためのリンクを表示します。検索したユーザーが、すでに Movable Type にサインインしていて、かつ記事を編集できる権限を持っているときにリンクを表示します。生成されるリンクを表示する文字列を指定します。初期値は編集です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryeditlink.html
       */
      ["mt:EntryEditLink"]: {
        /**
         * 生成されるリンクを表示する文字列を指定します。初期値は編集です。
         */
        text?: string;
      } & GlobalModifier;

      /**
       * 記事の『概要』に入力した内容を表示します。概要に記述がないときは、管理画面の設定で指定した文字数だけ記事の本文を先頭から表示します。
その場合、本来の記事本文の内容から HTML タグが取り除かれ、最後に「...」が付加されます。改行の変換を設定します。管理画面の設定より優先されます。初期値は 0 です。0 では改行が無視され、1 では自動的に改行に変換されます。ただし、自動生成された概要では、指定に関わらず改行が無視されます。1 を指定すると、概要が入力されていない場合に、本文から自動で概要を生成せずに、空で出力します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryexcerpt.html
       */
      ["mt:EntryExcerpt"]: {
        /**
         * 改行の変換を設定します。管理画面の設定より優先されます。初期値は 0 です。0 では改行が無視され、1 では自動的に改行に変換されます。ただし、自動生成された概要では、指定に関わらず改行が無視されます。
         */
        convert_breaks?: string;

        /**
         * 1 を指定すると、概要が入力されていない場合に、本文から自動で概要を生成せずに、空で出力します。初期値は 0 です。
         */
        no_generate?: string;

        /**
         *
         */
        words?: string;
      } & GlobalModifier;

      /**
       * flag モディファイアで指定した記事のフィールドの状態を、0 か 1 で表示します。このモディファイアは必須です。allow_comments はコメントの受け付けの状態を表示し、許可されている場合は 1 になります。allow_pings はトラックバックの受け付けの状態を表示し、許可されている場合は 1 になります。convert_breaks は記事のテキストフォーマットを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryflag.html
       */
      ["mt:EntryFlag"]: {
        /**
         * このモディファイアは必須です。allow_comments はコメントの受け付けの状態を表示し、許可されている場合は 1 になります。allow_pings はトラックバックの受け付けの状態を表示し、許可されている場合は 1 になります。convert_breaks は記事のテキストフォーマットを表示します。
         */
        flag?: string;
      } & GlobalModifier;

      /**
       * 記事の ID 番号を表示します。月別アーカイブやカテゴリアーカイブなどで、記事にアンカーを埋め込むときに利用します。モディファイア pad を指定すると、常に 6 桁で出力します。桁数が足りないとき、0 で埋めて表示します。ID が 8 なら 0 を 5 つ追加し、000008 と表示されます。
       * @see https://movabletype.jp/documentation/appendices/tags/entryid.html
       */
      ["mt:EntryID"]: {
        /**
         * 桁数が足りないとき、0 で埋めて表示します。ID が 8 なら 0 を 5 つ追加し、000008 と表示されます。
         */
        pad?: string;
      } & GlobalModifier;

      /**
       * このタグは現在、非推奨です。Movable Type 3.2 以降では、MTIfCommentsAccepted ブロックタグの利用を推奨しています。システム全体とブログの両方の設定でコメントが許可されている場合に実行します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryifallowcomments.html
       */
      ["mt:EntryIfAllowComments"]: {} & GlobalModifier & BlockElement;

      /**
       * このタグは現在、非推奨です。Movable Type 3.2 以降では、MTIfPingsAccepted ブロックタグの利用を推奨しています。トラックバックが許可されているときに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/entryifallowpings.html
       */
      ["mt:EntryIfAllowPings"]: {} & GlobalModifier & BlockElement;

      /**
       * このタグは現在、非推奨です。MTIfCategory タグを使用してください。対象となる記事が、指定したカテゴリに属している場合に有効になる条件タグです。カテゴリ名を指定します。このモディファイアを設定しない場合は、記事に何らかのカテゴリが設定されている場合に true (真) となります。name または label で指定したカテゴリ名を探す範囲を選択します。primary はメインカテゴリ、secondary はサブカテゴリです。メインカテゴリとは、その記事に複数設定したカテゴリの中で最初に選択したカテゴリを指します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryifcategory.html
       */
      ["mt:EntryIfCategory"]: {
        /**
         *
         */
        name?: string;

        /**
         * カテゴリ名を指定します。このモディファイアを設定しない場合は、記事に何らかのカテゴリが設定されている場合に true (真) となります。
         */
        label?: string;

        /**
         * name または label で指定したカテゴリ名を探す範囲を選択します。primary はメインカテゴリ、secondary はサブカテゴリです。メインカテゴリとは、その記事に複数設定したカテゴリの中で最初に選択したカテゴリを指します。
         */
        type?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * このタグは現在、非推奨です。Movable Type 3.2 以降では、MTIfCommentsActive ブロックタグの利用を推奨しています。管理画面上の設定（ブログと記事の両方）でコメントを受け付ける状態になっている、もしくは、すでにコメントを受け付けていたときに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/entryifcommentsopen.html
       */
      ["mt:EntryIfCommentsOpen"]: {} & GlobalModifier & BlockElement;

      /**
       * 記事の続きが入力されているときに実行する条件タグです。Movable Type 3.3 以降では、MTIf ブロックタグを利用した方法を推奨しています。
       * @see https://movabletype.jp/documentation/appendices/tags/entryifextended.html
       */
      ["mt:EntryIfExtended"]: {} & GlobalModifier & BlockElement;

      /**
       * タグが記事に設定されているときに囲まれた内容を処理するブロックタグです。tag または name モディファイアでタグ名を指定できます。指定したタグのみを対象とします。このモディファイアを使用しない場合は、記事に 1 つ以上のタグが設定されているときに実行します。値を 1 に設定した場合、プライベートタグ（@ で始まるタグ）を対象に含めます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryiftagged.html
       */
      ["mt:EntryIfTagged"]: {
        /**
         *
         */
        tag?: string;

        /**
         * 指定したタグのみを対象とします。このモディファイアを使用しない場合は、記事に 1 つ以上のタグが設定されているときに実行します。
         */
        name?: string;

        /**
         * 値を 1 に設定した場合、プライベートタグ（@ で始まるタグ）を対象に含めます。初期値は 0 です。
         */
        include_private?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 記事の『キーワード』フィールドに入力した内容を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrykeywords.html
       */
      ["mt:EntryKeywords"]: {} & GlobalModifier;

      /**
       * アーカイブの絶対 URL を表示します。特に指定がなければ、記事アーカイブの絶対 URL を表示します。アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/entrylink.html
       */
      ["mt:EntryLink"]: {
        /**
         *
         */
        archive_type?: string;

        /**
         * アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
         */
        type?:
          | "Individual"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | string;
      } & GlobalModifier;

      /**
       * 記事を最終更新したユーザーの『表示名』を表示します。ユーザー設定で『表示名』の設定が無い場合、何も表示されません。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifiedauthordisplayname.html
       */
      ["mt:EntryModifiedAuthorDisplayName"]: {} & GlobalModifier;

      /**
       * 記事を最終更新したユーザーのメールアドレスを表示します。Movable Type のユーザーのメールアドレスをブログに表示することは、スパムの温床になるため推奨しません。メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifiedauthoremail.html
       */
      ["mt:EntryModifiedAuthorEmail"]: {
        /**
         * メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       * 記事またはウェブページを最終更新したユーザーの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifiedauthorid.html
       */
      ["mt:EntryModifiedAuthorID"]: {} & GlobalModifier;

      /**
       * 記事を最終更新したユーザーの『表示名』をリンク付きで表示します。ユーザー情報の編集画面の『ウェブサイト URL』が入力されていれば URL へのリンクが付加されます。『ウェブサイト URL』が入力されていない場合、リンクは付加されません。もし、『ウェブサイト URL』が入力されておらず、且つ、『電子メール』が入力されている場合は、show_email モディファイアを 1 に設定することでメールアドレスへのリンクが付加されます。両方とも入力されていないときは、リンクは付加されません。ユーザー情報の編集画面の『ウェブサイト URL』に入力されている URL へのリンクを生成します。初期値は 1 です。ユーザーに『ウェブサイト URL』が設定されていない場合、本モディファイアの値を 1 に設定することで、ユーザー情報の編集画面の『電子メール』に入力されているメールアドレスへのリンクを生成します。初期値は 0 です。値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。リンクの種類を任意に指定します。初期値はありません。指定した種類のユーザー情報が入力されていない場合、リンクは付加されません。値に archive を指定した場合はユーザーアーカイブのリンクを生成するため、あらかじめテンプレートと「ユーザー」アーカイブマッピングの設定が必要です。以下の例のように、リンクの種類を識別するための class 属性をリンクに付加します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifiedauthorlink.html
       */
      ["mt:EntryModifiedAuthorLink"]: {
        /**
         * ユーザー情報の編集画面の『ウェブサイト URL』に入力されている URL へのリンクを生成します。初期値は 1 です。
         */
        show_url?: string;

        /**
         * ユーザーに『ウェブサイト URL』が設定されていない場合、本モディファイアの値を 1 に設定することで、ユーザー情報の編集画面の『電子メール』に入力されているメールアドレスへのリンクを生成します。初期値は 0 です。
         */
        show_email?: string;

        /**
         * 値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。
         */
        new_window?: string;

        /**
         * メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;

        /**
         * リンクの種類を任意に指定します。初期値はありません。指定した種類のユーザー情報が入力されていない場合、リンクは付加されません。値に archive を指定した場合はユーザーアーカイブのリンクを生成するため、あらかじめテンプレートと「ユーザー」アーカイブマッピングの設定が必要です。
         */
        type?: string;

        /**
         * 以下の例のように、リンクの種類を識別するための class 属性をリンクに付加します。初期値は 0 です。
         */
        show_hcard?: string;
      } & GlobalModifier;

      /**
       * 記事を最終更新したユーザーの『ウェブサイト URL』を表示します。『ウェブサイト URL』はユーザー作成時やユーザー情報の編集画面で設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifiedauthorurl.html
       */
      ["mt:EntryModifiedAuthorURL"]: {} & GlobalModifier;

      /**
       * 記事を最終更新したユーザーの名前 (ユーザー情報の編集画面の『ユーザー名』) を表示します。ユーザー名は管理画面へのサインインに使用されるため、サイト上での表示には MTEntryModifiedAuthorDisplayName ファンクションタグの利用を推奨しています。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifiedauthorusername.html
       */
      ["mt:EntryModifiedAuthorUsername"]: {} & GlobalModifier;

      /**
       * 記事を最終更新したユーザーのプロフィール画像を表示するための img 要素を表示します。出力のサンプルは以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifiedauthoruserpic.html
       */
      ["mt:EntryModifiedAuthorUserpic"]: {} & GlobalModifier;

      /**
       * 記事を最終更新したユーザーのプロフィール画像に関する情報を取得するためのブロックタグです。このタグの中では、アイテム関連のテンプレートタグを利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifiedauthoruserpicas.html
       */
      ["mt:EntryModifiedAuthorUserpicAsset"]: {} & GlobalModifier;

      /**
       * 記事を最終更新したユーザーのプロフィール画像の URL アドレスを出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifiedauthoruserpicurl.html
       */
      ["mt:EntryModifiedAuthorUserpicURL"]: {} & GlobalModifier;

      /**
       * 記事の更新日時を表示します。更新日時は再構築した日時ではなく、記事を再度保存した日時です。モディファイア format と language を指定して、日時の表示方法を変更できます。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymodifieddate.html
       */
      ["mt:EntryModifiedDate"]: {} & GlobalModifier;

      /**
       * 記事の『続き』フィールドに入力した内容を表示します。記事に指定されているフォーマットを適用するか指定します。0 ではフォーマットを適用せず、入力された内容がそのまま出力されます。1 ではフォーマットが適用されます。言語設定を日本語にしているときは、記事の続きから、指定した N 文字分だけ抜き出します。もし、言語設定を英語にしているなら、記事の続きから N 語 (単語) 分だけ抜き出します。注意点は、言語設定を日本語にしている環境で、続きの内容に英語の文章を含むときです。この場合、続きから N 語分抜き出すのではなく、N 文字分抜き出します。どちらの場合も、テキストに含まれている html は除去されたうえで処理されます。
       * @see https://movabletype.jp/documentation/appendices/tags/entrymore.html
       */
      ["mt:EntryMore"]: {
        /**
         * 記事に指定されているフォーマットを適用するか指定します。0 ではフォーマットを適用せず、入力された内容がそのまま出力されます。1 ではフォーマットが適用されます。
         */
        convert_breaks?: string;

        /**
         * 言語設定を日本語にしているときは、記事の続きから、指定した N 文字分だけ抜き出します。もし、言語設定を英語にしているなら、記事の続きから N 語 (単語) 分だけ抜き出します。注意点は、言語設定を日本語にしている環境で、続きの内容に英語の文章を含むときです。この場合、続きから N 語分抜き出すのではなく、N 文字分抜き出します。どちらの場合も、テキストに含まれている html は除去されたうえで処理されます。
         */
        words?: string;
      } & GlobalModifier;

      /**
       * 現在の記事の次の記事の内容を表示するためのブロックタグです。例えば、このタグの中の MTEntryTitle ファンクションタグは、次の記事のタイトルを表示します。1 を指定すると、現在の記事の作者が書いた次の記事を呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。1 を指定すると、現在の記事のプライマリカテゴリ（メインカテゴリ）に属する次の記事を呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/entrynext.html
       */
      ["mt:EntryNext"]: {
        /**
         * 1 を指定すると、現在の記事の作者が書いた次の記事を呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
         */
        by_author?: string;

        /**
         * 1 を指定すると、現在の記事のプライマリカテゴリ（メインカテゴリ）に属する次の記事を呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
         */
        by_category?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 記事を含むアーカイブの絶対 URL を表示します。MTEntryLink ファンクションタグとの違いは、記事へのアンカーが付加される点です。カテゴリアーカイブのように複数の記事が掲載されるページでも、目的の記事にリンクできます。アーカイブの種類を選択します。アーカイブの種類は以下のとおりです。archive_type または type モディファイアで、Individual 以外を指定したり、パーマリンクの設定がカテゴリアーカイブや日付アーカイブの場合、複数の記事が 1 ページに掲載されます。このモディファイアは、このように複数の記事が 1 ページに掲載される場合に、目的の記事へのアンカーを設定するために使います。初期値は 0 です。値を 1 に設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/entrypermalink.html
       */
      ["mt:EntryPermalink"]: {
        /**
         *
         */
        archive_type?: string;

        /**
         * アーカイブの種類を選択します。アーカイブの種類は以下のとおりです。
         */
        type?:
          | "Individual"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | string;

        /**
         * archive_type または type モディファイアで、Individual 以外を指定したり、パーマリンクの設定がカテゴリアーカイブや日付アーカイブの場合、複数の記事が 1 ページに掲載されます。このモディファイアは、このように複数の記事が 1 ページに掲載される場合に、目的の記事へのアンカーを設定するために使います。初期値は 0 です。
         */
        valid_html?: string;

        /**
         * 値を 1 に設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
         */
        with_index?: string;
      } & GlobalModifier;

      /**
       * 現在の記事の前の記事の内容を表示するためのブロックタグです。例えば、このタグの中の MTEntryTitle ファンクションタグは、前の記事のタイトルを表示します。1 を指定すると、現在の記事の作者が書いた前の記事を呼び出します。初期値は 0 です。このモディファイアは Movable Type 6.0.2 で追加されました。1 を指定すると、現在の記事のプライマリカテゴリ（メインカテゴリ）に属する前の記事を呼び出します。初期値は 0 です。このモディファイアは Movable Type 6.0.2 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/entryprevious.html
       */
      ["mt:EntryPrevious"]: {
        /**
         * 1 を指定すると、現在の記事の作者が書いた前の記事を呼び出します。初期値は 0 です。このモディファイアは Movable Type 6.0.2 で追加されました。
         */
        by_author?: string;

        /**
         * 1 を指定すると、現在の記事のプライマリカテゴリ（メインカテゴリ）に属する前の記事を呼び出します。初期値は 0 です。このモディファイアは Movable Type 6.0.2 で追加されました。
         */
        by_category?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * プライマリカテゴリ（メインカテゴリ）の情報を取得するためのブロックタグです。MTEntryCategories タグに type="primary" を指定した場合と同じ働きをします。
       * @see https://movabletype.jp/documentation/appendices/tags/entryprimarycategory.html
       */
      ["mt:EntryPrimaryCategory"]: {} & GlobalModifier & BlockElement;

      /**
       * 記事に付けられたスコアを一定の範囲内でランク付けします。数値が小さい方が頻度が高くなります。スコアを付けるには別途プラグインなどが必要です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryrank.html
       */
      ["mt:EntryRank"]: {} & GlobalModifier;

      /**
       * 特定の記事・トピックに投票された総数を出力するファンクションタグです。次のような HTML を出力します。ID 属性の値 cp_total_45 の 45 は対象の記事の ID です。ページがロードされたとき、カウントが挿入されます。このタグは MTIfEntryRecommended タグのコンテキスト内で使用します。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/entryrecommendedtotal.html
       */
      ["mt:EntryRecommendedTotal"]: {} & GlobalModifier;

      /**
       * 特定の記事・トピックに対し、サインイン中のユーザーがまだ投票していないときに、投票用のリンクを表示します。投票用のリンクは次のような内容で出力します。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。出力する HTML 要素に付与するクラス属性の値を入力します。投票用のリンクテキストを設定できます。何も設定しないときは クリックして投票 と出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryrecommendvotelink.html
       */
      ["mt:EntryRecommendVoteLink"]: {
        /**
         * 出力する HTML 要素に付与するクラス属性の値を入力します。
         */
        class?: string;

        /**
         * 投票用のリンクテキストを設定できます。何も設定しないときは クリックして投票 と出力します。
         */
        text?: string;
      } & GlobalModifier;

      /**
       * 記事に付けられたスコアの合計を表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryscore.html
       */
      ["mt:EntryScore"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * 記事に付けられたスコアの平均スコアを表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryscoreavg.html
       */
      ["mt:EntryScoreAvg"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * 記事に付けられたスコアの合計回数を表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/entryscorecount.html
       */
      ["mt:EntryScoreCount"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 記事に付けられたスコアの中で一番高いスコアを表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryscorehigh.html
       */
      ["mt:EntryScoreHigh"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * 記事に付けられたスコアの中で一番低いスコアを表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/entryscorelow.html
       */
      ["mt:EntryScoreLow"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * 記事が属するサイトの『説明』を表示します。MTEntryBlogDescription と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/entrysitedescription.html
       */
      ["mt:EntrySiteDescription"]: {} & GlobalModifier;

      /**
       * 記事が属するサイトの ID 番号を表示します。MTEntryBlogID と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/entrysiteid.html
       */
      ["mt:EntrySiteID"]: {} & GlobalModifier;

      /**
       * 記事が属するサイトの名前を表示します。MTEntryBlogName と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/entrysitename.html
       */
      ["mt:EntrySiteName"]: {} & GlobalModifier;

      /**
       * 記事が属するサイトの URL を表示します。MTEntryBlogURL と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/entrysiteurl.html
       */
      ["mt:EntrySiteURL"]: {} & GlobalModifier;

      /**
       * 記事の状態について、Publish (公開)、Draft (未公開/下書き)、Future（指定日公開）のいずれかの値を表示します。記事のインポートファイルをテンプレートで作成するときなどに使用します。Movable Type 6.0 以降では、上記に加えて、指定日非公開機能で非公開になった記事のとき、Unpublish（公開終了）が表示されます。
       * @see https://movabletype.jp/documentation/appendices/tags/entrystatus.html
       */
      ["mt:EntryStatus"]: {} & GlobalModifier;

      /**
       * 特定の記事に設定されたタグ一覧のためのブロックタグです。記事作成画面の『タグ』フィールドに入力したタグを表示します。モディファイア glue を使うと、タグの区切り文字を指定できます。複数のタグを並べて表示するときの、区切り文字を設定します。値に 1 を指定するとプライベートタグ（@ で始まるタグ）を対象に含めます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/entrytags.html
       */
      ["mt:EntryTags"]: {
        /**
         * 複数のタグを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;

        /**
         * 値に 1 を指定するとプライベートタグ（@ で始まるタグ）を対象に含めます。初期値は 0 です。
         */
        include_private?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       *
       * @see https://movabletype.jp/documentation/appendices/tags/entrytitle.html
       */
      ["mt:EntryTitle"]: {} & GlobalModifier;

      /**
       * 特定の記事で受け付けたトラックバックの数を表示します。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/entrytrackbackcount.html
       */
      ["mt:EntryTrackbackCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * トラックバック自動検知用のメタデータを RDF 形式で出力し、Bookmarklet が利用します。この出力内容はウェブブラウザ上では表示されません。以下、出力内容のサンプルです。トラックバック用データの RDF の出力の際に、コメントアウトするかどうかを指定します。初期値は 1 で、通常はコメントアウトされます。コメントアウトしないようにするには、comment_wrap="0" と設定します。1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/entrytrackbackdata.html
       */
      ["mt:EntryTrackbackData"]: {
        /**
         * トラックバック用データの RDF の出力の際に、コメントアウトするかどうかを指定します。初期値は 1 で、通常はコメントアウトされます。コメントアウトしないようにするには、comment_wrap="0" と設定します。
         */
        comment_wrap?: string;

        /**
         * 1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。1 以外の値を設定した場合は、インデックスファイル名は付与されません。初期値は 0 です。
         */
        with_index?: string;
      } & GlobalModifier;

      /**
       * 記事がトラックバックを受け付ける設定になっているとき、記事に対応したトラックバック通知（更新 ping）のための ID 番号を表示します。記事がトラックバックを受け付けない設定のときは、何も表示されません。
       * @see https://movabletype.jp/documentation/appendices/tags/entrytrackbackid.html
       */
      ["mt:EntryTrackbackID"]: {} & GlobalModifier;

      /**
       * 記事がトラックバックを受け付ける設定になっているとき、この記事にトラックバックを送るための URL を表示します。トラックバックを受け付ける設定になっていないときには、何も表示しません。
       * @see https://movabletype.jp/documentation/appendices/tags/entrytrackbacklink.html
       */
      ["mt:EntryTrackbackLink"]: {} & GlobalModifier;

      /**
       * コメント投稿エラーの際、エラーの内容に応じたメッセージを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/errormessage.html
       */
      ["mt:ErrorMessage"]: {} & GlobalModifier;

      /**
       * uri モディファイアで指定したフィードの内容を表示するためのブロックタグです。このタグは標準プラグイン Feeds.App Lite で提供されます。Feeds.App Lite で提供されるタグはダイナミックパブリッシングには対応していません。データを表示させる RSS フィードの URL を入力します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/feed.html
       */
      ["mt:Feed"]: {
        /**
         * データを表示させる RSS フィードの URL を入力します。このモディファイアは必須です。
         */
        uri?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 迷惑コメント/トラックバックを判断するための評価の値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/feedbackscore.html
       */
      ["mt:FeedbackScore"]: {} & GlobalModifier;

      /**
       * MTFeed ブロックタグで指定したフィードの内容を表示するためのブロックタグです。モディファイアで表示件数を指定できます。このタグは標準プラグイン Feeds.App Lite で提供されます。Feeds.App Lite で提供されるタグはダイナミックパブリッシングには対応していません。指定した数のフィードを表示します。N は 0 より大きな数値にしてください。指定した数のフィードを除外して表示します。値に 5 を指定すると、最新 5 件のフィードを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。
       * @see https://movabletype.jp/documentation/appendices/tags/feedentries.html
       */
      ["mt:FeedEntries"]: {
        /**
         * 指定した数のフィードを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 指定した数のフィードを除外して表示します。値に 5 を指定すると、最新 5 件のフィードを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。
         */
        offset?: number;
      } & GlobalModifier &
        BlockElement;

      /**
       * 読み込んだ RSS フィードにある個別ページの URL を表示します。このタグは標準プラグイン Feeds.App Lite で提供されます。Feeds.App Lite で提供されるタグはダイナミックパブリッシングには対応していません。
       * @see https://movabletype.jp/documentation/appendices/tags/feedentrylink.html
       */
      ["mt:FeedEntryLink"]: {} & GlobalModifier;

      /**
       * 読み込んだ RSS フィードにある個別ページのタイトルを表示します。このタグは標準プラグイン Feeds.App Lite で提供されます。Feeds.App Lite で提供されるタグはダイナミックパブリッシングには対応していません。
       * @see https://movabletype.jp/documentation/appendices/tags/feedentrytitle.html
       */
      ["mt:FeedEntryTitle"]: {} & GlobalModifier;

      /**
       * uri モディファイアで指定した RSS フィードを、あらかじめ決まったフォーマットで表示するためのファンクションタグです。出力フォーマットがあらかじめ決められているため、フィード URL を指定するだけで簡単に表示できます。出力フォーマットは ul タグを使用するリスト形式で、以下のテンプレートを記述した場合と同じ内容が出力されます。lastn  モディファイアを利用すれば、出力件数を制御できます。出力形式をカスタマイズしたい場合は、feeds app lite タグが設定されたテンプレートタグ一覧で表示されるテンプレートタグを使用してください。このタグは標準プラグイン Feeds.App Lite で提供されます。Feeds.App Lite で提供されるタグはダイナミックパブリッシングには対応していません。データを表示させる RSS フィードの URL を入力します。このモディファイアは必須です。指定した数のフィードを表示します。N は 0 より大きな数値にしてください。
       * @see https://movabletype.jp/documentation/appendices/tags/feedinclude.html
       */
      ["mt:FeedInclude"]: {
        /**
         * データを表示させる RSS フィードの URL を入力します。このモディファイアは必須です。
         */
        uri?: string;

        /**
         * 指定した数のフィードを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;
      } & GlobalModifier;

      /**
       * 読み込んだ RSS フィードを持つサイトの URL を表示します。このタグは標準プラグイン Feeds.App Lite で提供されます。Feeds.App Lite で提供されるタグはダイナミックパブリッシングには対応していません。
       * @see https://movabletype.jp/documentation/appendices/tags/feedlink.html
       */
      ["mt:FeedLink"]: {} & GlobalModifier;

      /**
       * 読み込んだ RSS フィードを持つサイトの名前を表示します。このタグは標準プラグイン Feeds.App Lite で提供されます。Feeds.App Lite で提供されるタグはダイナミックパブリッシングには対応していません。
       * @see https://movabletype.jp/documentation/appendices/tags/feedtitle.html
       */
      ["mt:FeedTitle"]: {} & GlobalModifier;

      /**
       * 「アイテム」システムオブジェクトで作成したカスタムフィールドの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/filecustomfielddescription.html
       */
      ["mt:FileCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 「アイテム」システムオブジェクトで作成したカスタムフィールドの『名前』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/filecustomfieldname.html
       */
      ["mt:FileCustomFieldName"]: {} & GlobalModifier;

      /**
       * 「アイテム」システムオブジェクトで作成したカスタムフィールドを一覧で表示するブロックタグです。作成したすべてのカスタムフィールドを表示します。include モディファイアでは、指定したカスタムフィールドのみを表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/filecustomfields.html
       */
      ["mt:FileCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 「アイテム」システムオブジェクトで作成したカスタムフィールドに入力した値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/filecustomfieldvalue.html
       */
      ["mt:FileCustomFieldValue"]: {} & GlobalModifier;

      /**
       * ブログディレクトリ配下のアーカイブページのパスを、アーカイブマッピングで指定しているルールに従い表示します。このタグは MTArchiveList ブロックタグなどの中で利用します。アーカイブページの出力フォーマットです。format に利用される値はアーカイブマッピングで利用するアーカイブファイル名の定義をご覧ください。
    ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
       * @see https://movabletype.jp/documentation/appendices/tags/filetemplate.html
       */
      ["mt:FileTemplate"]: {
        /**
           * アーカイブページの出力フォーマットです。format に利用される値はアーカイブマッピングで利用するアーカイブファイル名の定義をご覧ください。
    
           */
        format?: string;

        /**
         * ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
         */
        separator?: string;
      } & GlobalModifier;

      /**
       * フォルダの編集画面の『パス』に設定された値（ベースネーム）を表示します。フォルダのコンテキスト外で使用した場合の出力内容を指定します。MTFolderBasename タグはフォルダのコンテキスト内で使用します。そのため、コンテキスト外でタグが使用された場合は、通常、再構築時にエラーが発生しますが、このモディファイアを指定すると再構築エラーにはなりません。ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
       * @see https://movabletype.jp/documentation/appendices/tags/folderbasename.html
       */
      ["mt:FolderBasename"]: {
        /**
         * フォルダのコンテキスト外で使用した場合の出力内容を指定します。MTFolderBasename タグはフォルダのコンテキスト内で使用します。そのため、コンテキスト外でタグが使用された場合は、通常、再構築時にエラーが発生しますが、このモディファイアを指定すると再構築エラーにはなりません。
         */
        default?: string;

        /**
         * ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
         */
        separator?: string;
      } & GlobalModifier;

      /**
       * フォルダ内に作成されたウェブページ数を表示します。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/foldercount.html
       */
      ["mt:FolderCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * フォルダ編集画面に追加されたカスタムフィールドの『説明』を表示するファンクションタグです。このタグは MTFolderCustomFields ブロックタグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/foldercustomfielddescription.html
       */
      ["mt:FolderCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * フォルダ編集画面に追加されたカスタムフィールドの『名前』を表示するファンクションタグです。このタグは MTFolderCustomFields ブロックタグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/foldercustomfieldname.html
       */
      ["mt:FolderCustomFieldName"]: {} & GlobalModifier;

      /**
       * フォルダに関するカスタムフィールドの情報を表示するためのブロックタグです。フォルダの編集画面に追加された\すべてのカスタムフィールドの情報を表示します。include モディファイアを使用すると、名前を指定したカスタムフィールドのみを対象にできます。exclude モディファイアに名前を指定したカスタムフィールドは対象から除外されます。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/foldercustomfields.html
       */
      ["mt:FolderCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * フォルダ編集画面に追加されたカスタムフィールドに入力された値を表示するファンクションタグです。このタグは MTFolderCustomFields ブロックタグのコンテキストで使用します。カスタムフィールドで追加した項目からアップロードした画像などのアイテムを表示するには、専用のタグと合わせて追加される Asset タグを使用します。詳しくはドキュメントを参照ください。
       * @see https://movabletype.jp/documentation/appendices/tags/foldercustomfieldvalue.html
       */
      ["mt:FolderCustomFieldValue"]: {} & GlobalModifier;

      /**
       * フォルダの編集画面で入力したフォルダの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/folderdescription.html
       */
      ["mt:FolderDescription"]: {} & GlobalModifier;

      /**
       * MTFolders ブロックタグの中で、最後に一度だけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/folderfooter.html
       */
      ["mt:FolderFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * MTFolders ブロックタグの中で、最初に一度だけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/folderheader.html
       */
      ["mt:FolderHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * フォルダの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/folderid.html
       */
      ["mt:FolderID"]: {} & GlobalModifier;

      /**
       * フォルダの名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/folderlabel.html
       */
      ["mt:FolderLabel"]: {} & GlobalModifier;

      /**
       * 現在のフォルダの次のフォルダの内容を表示するためのブロックタグです。例えば、このタグの中の MTFolderLabel ファンクションタグでは、次のフォルダの名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/foldernext.html
       */
      ["mt:FolderNext"]: {} & GlobalModifier & BlockElement;

      /**
       * トップレベルフォルダから現在のフォルダまでのディレクトリパスを表示します。例えば、ベースネームが foo のフォルダ配下に、ベースネームが bar のフォルダを作成したとき、bar フォルダに対する MTFolderPath タグの出力値は foo/bar です。ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
       * @see https://movabletype.jp/documentation/appendices/tags/folderpath.html
       */
      ["mt:FolderPath"]: {
        /**
         * ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
         */
        separator?: string;
      } & GlobalModifier;

      /**
       * 現在のフォルダの前のフォルダの内容を表示するためのブロックタグです。例えば、このタグの中の MTFolderLabel ファンクションタグでは、前のフォルダの名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/folderprevious.html
       */
      ["mt:FolderPrevious"]: {} & GlobalModifier & BlockElement;

      /**
       * フォルダの一覧を表示するためのブロックタグです。このタグはメインフォルダもサブフォルダも区別せずに表示します。
また、フォルダはフォルダ名を基準に文字コード順（昇順）で表示されます。表示順は固定で、変更することはできません。
階層的に表示したい場合や、表示順を変更したい場合は、MTSubFolders タグを利用します。ウェブページが登録されていないフォルダでも表示します。初期値は 0 です。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/folders.html
       */
      ["mt:Folders"]: {
        /**
         * ウェブページが登録されていないフォルダでも表示します。初期値は 0 です。
         */
        show_empty?: string;

        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 様々なプログラミング言語にある for ループをおこなうためのブロックタグです。指定された値の間、囲まれたコンテンツを繰り返し処理します。ループ開始時の値を設定します。初期値は 0 です。設定した値を越えた場合、ループは停止します。このモディファイアは必須です。1 回のループで増加する値を指定します。何も指定しない場合は、1 ずつ増加します。例えば、from に 0、to に 10 と設定し、increment を 2 に設定した場合、0, 2, 4, 6, 8, 10 と増加します。ループの各ブロックの間に表示する区切り文字を設定します。インデックスの値（__index__）を格納する変数名を指定します。MTFor ブロックタグによるループの中では以下の特別な変数が利用できます。ループ出力の最初である場合 true (1) となります。ループ出力の最後である場合 ture (1) となります。ループ出力の奇数回目の場合 ture (1) となります。ループ出力の偶数回目の場合 ture (1) となります。ループのインデックスを格納します。ループした回数を格納します。__index__ と __counter__ 変数の違いは以下のサンプルで確認することができます。__counter__ 変数は、ループした回数だけ 1 ずつ増えていきますが、__index__ 変数の値は、MTFor ブロックタグに設定した変数 test と同じループのインデックスを表示します。サンプルの出力例は以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/for.html
       */
      ["mt:For"]: {
        /**
         * ループの各ブロックの間に表示する区切り文字を設定します。
         */
        glue?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * このタグは現在、非推奨です。MTVar タグを使用してください。定義した変数から値を呼び出します。変数の名前を指定します。このモディファイアは必須です。変数の値を指定します。このモディファイアを指定した場合は、MTSetVar ファンクションタグと同じ働きになります。値を設定する場合は MTSetVar ファンクションタグを使用してください。op モディファイアに関しては、テンプレートタグで利用できる演算関数を参照ください。value モディファイアを指定していても、op モディファイアを併せて指定した場合は MTSetVar ファンクションタグではなく、本来の MTGetVar ファンクションタグの動作をします。配列のインデックス (添え字) を指定します。配列変数が存在しない場合や指定されたインデックスの値が存在しないときは空の文字列を返します。このタグは以下のようにも書くことができます。名前[添え字] という記述が index モディファイアの代わりです。ハッシュのキーを指定します。ハッシュ変数が存在しない場合や指定されたキーが存在しないときは空の文字列を返します。このタグは以下のようにも書くことができます。名前{キー} という記述が key モディファイアの代わりです。配列やハッシュ変数に値を設定するときに実行する関数の名前を指定します。利用できる名前は以下のとおりです。このタグは以下のようにも書くことができます。関数名(名前) という記述が function モディファイアの代わりです。
       * @see https://movabletype.jp/documentation/appendices/tags/getvar.html
       */
      ["mt:GetVar"]: {
        /**
         *
         */
        name?: string;

        /**
         * 変数の名前を指定します。このモディファイアは必須です。
         */
        var?: string;

        /**
         * 変数の値を指定します。このモディファイアを指定した場合は、MTSetVar ファンクションタグと同じ働きになります。値を設定する場合は MTSetVar ファンクションタグを使用してください。
         */
        value?: string;
      } & GlobalModifier;

      /**
       * 現在のカテゴリに親カテゴリが存在しないときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/hasnoparentcategory.html
       */
      ["mt:HasNoParentCategory"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のフォルダに親フォルダが存在しないときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/hasnoparentfolder.html
       */
      ["mt:HasNoParentFolder"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のカテゴリに子カテゴリが存在しないときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/hasnosubcategories.html
       */
      ["mt:HasNoSubCategories"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のフォルダに子フォルダが存在しないときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/hasnosubfolders.html
       */
      ["mt:HasNoSubFolders"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のカテゴリに親カテゴリが存在しているときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/hasparentcategory.html
       */
      ["mt:HasParentCategory"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のフォルダに親フォルダが存在するときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/hasparentfolder.html
       */
      ["mt:HasParentFolder"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のカテゴリにサブカテゴリが存在しているときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/hassubcategories.html
       */
      ["mt:HasSubCategories"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のフォルダに子フォルダ存在するときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/hassubfolders.html
       */
      ["mt:HasSubFolders"]: {} & GlobalModifier & BlockElement;

      /**
       * ダイナミックパブリッシングおよび検索結果のテンプレートを実行するときに、HTTP ヘッダーの Content-Type の値になる文字列を設定します。type モディファイアに適切な Content-Type の値を設定します。スタティックに生成されるテンプレートに指定しても何もおこないません。出力する Content-Type の値を設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/httpcontenttype.html
       */
      ["mt:HTTPContentType"]: {
        /**
         * 出力する Content-Type の値を設定します。
         */
        type?: string;
      } & GlobalModifier;

      /**
       * 設定した条件により実行内容を分けるためのブロックタグです。MTSetVar ファンクションタグや、MTSetVarBlock, MTSetVarTemplate ブロックタグで定義した変数を用いて条件文を作成します。このタグは条件を満たした場合に実行します。条件を満たさない場合に実行する場合は、MTUnless ブロックタグを使用するか、MTIf ブロックタグの中で MTElse, MTElseIf ブロックタグを使用します。条件文の対象となる変数の名前 (MTSetVar ファンクションタグなどで設定した name モディファイアの値) を設定します。このモディファイアの値をもとに条件分岐がおこなわれます。MTIf タグの使用には、このモディファイアもしくは tag モディファイアのいずれかが必須です。もしいずれのモディファイアも指定していない場合は、必ず false (偽) を返します。name 以外にモディファイアを指定しない場合は、指定した変数の値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。Movable Type のテンプレートタグを指定します。指定したテンプレートタグの出力値をもとに条件分岐がおこなわれます。接頭辞の MT は省略できます。name モディファイアとの併用はできません。併用した場合は name モディファイアが優先されます。tag 以外にモディファイアを指定しない場合は、指定したテンプレートタグの値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。さらにモディファイアを指定して条件を細かく設定できます。何も指定しない場合は、name もしくは tag モディファイアに指定した変数に 0 以外の値がある場合にのみ実行します。指定した変数の値に foo が含まれる場合にのみ実行します。like モディファイアでは Perl の正規表現を利用できます。以下の例では name モディファイアに指定した変数の値が bar か baz で始まる場合にのみ実行します。指定した変数の値が foo と一致する場合にのみ実行します。指定した変数の値が foo と一致しない場合にのみ実行します。指定した変数の値が foo よりも小さい場合にのみ実行します。指定した変数の値が foo よりも大きい場合にのみ実行します。指定した変数の値が foo 以下の場合にのみ実行します。指定した変数の値が foo 以上の場合にのみ実行します。op モディファイアに関しては、ドキュメント: テンプレートタグで利用できる演算関数を参照ください。配列のインデックス (添え字) を指定して、配列の変数から値を取り出します。このタグは以下のようにも書くことができます。名前[添え字] という記述が index モディファイアの代わりです。ハッシュのキーを指定して、ハッシュの変数から値を取り出します。このタグは以下のようにも書くことができます。名前{キー} という記述が key モディファイアの代わりです。Perl の式を記述することができ、結果を利用して条件分岐をおこないます。
       * @see https://movabletype.jp/documentation/appendices/tags/if.html
       */
      ["mt:If"]: {
        /**
         * 条件文の対象となる変数の名前 (MTSetVar ファンクションタグなどで設定した name モディファイアの値) を設定します。このモディファイアの値をもとに条件分岐がおこなわれます。MTIf タグの使用には、このモディファイアもしくは tag モディファイアのいずれかが必須です。もしいずれのモディファイアも指定していない場合は、必ず false (偽) を返します。name 以外にモディファイアを指定しない場合は、指定した変数の値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。
         */
        name?: string;

        /**
         * Movable Type のテンプレートタグを指定します。指定したテンプレートタグの出力値をもとに条件分岐がおこなわれます。接頭辞の MT は省略できます。name モディファイアとの併用はできません。併用した場合は name モディファイアが優先されます。tag 以外にモディファイアを指定しない場合は、指定したテンプレートタグの値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は true (真)、0 もしくは値が無い場合は false (偽) を返します。
         */
        tag?: string;

        /**
         * 指定した変数の値に foo が含まれる場合にのみ実行します。like モディファイアでは Perl の正規表現を利用できます。以下の例では name モディファイアに指定した変数の値が bar か baz で始まる場合にのみ実行します。
         */
        like?: string;

        /**
         * 指定した変数の値が foo と一致する場合にのみ実行します。
         */
        eq?: string;

        /**
         * 指定した変数の値が foo と一致しない場合にのみ実行します。
         */
        ne?: string;

        /**
         * 指定した変数の値が foo よりも小さい場合にのみ実行します。
         */
        lt?: string;

        /**
         * 指定した変数の値が foo よりも大きい場合にのみ実行します。
         */
        gt?: string;

        /**
         * 指定した変数の値が foo 以下の場合にのみ実行します。
         */
        le?: string;

        /**
         * 指定した変数の値が foo 以上の場合にのみ実行します。
         */
        ge?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * コメントの内容について、ブログのコメントポリシーの設定で一部の HTML タグの利用を許可している場合にのみ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifallowcommenthtml.html
       */
      ["mt:IfAllowCommentHTML"]: {} & GlobalModifier & BlockElement;

      /**
       * 匿名 (サインインしていない、またはアカウントを持っていない) ユーザーに、投票 (お気に入り投稿) を許可しているか判別します。匿名ユーザーによる投票の許可/拒否は、ブログの「コミュニティの設定」画面で設定できます。ただし、匿名ユーザーの投票を許可しても、同一 IP アドレスからの複数回投票はおこなえません。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/ifanonymousrecommendallowed.html
       */
      ["mt:IfAnonymousRecommendAllowed"]: {} & GlobalModifier & BlockElement;

      /**
       * 指定したアーカイブの種類でテンプレートが出力される場合にのみ実行する条件タグです。モディファイア archive_type もしくは type を指定することで、アーカイブの種類を指定できます。アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/ifarchivetype.html
       */
      ["mt:IfArchiveType"]: {
        /**
         *
         */
        archive_type?: string;

        /**
         * アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
         */
        type?:
          | "Individual"
          | "Page"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 指定したアーカイブの種類を利用しているときに実行する条件タグです。モディファイア archive_type もしくは type を指定することで、アーカイブの種類を指定できます。アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
       * @see https://movabletype.jp/documentation/appendices/tags/ifarchivetypeenabled.html
       */
      ["mt:IfArchiveTypeEnabled"]: {
        /**
         *
         */
        archive_type?: string;

        /**
         * アーカイブの種類を選択します。アーカイブの種類は以下のようになります。
         */
        type?:
          | "Individual"
          | "Page"
          | "Daily"
          | "Weekly"
          | "Monthly"
          | "Yearly"
          | "Author"
          | "Author-Daily"
          | "Author-Weekly"
          | "Author-Monthly"
          | "Author-Yearly"
          | "Category"
          | "Category-Daily"
          | "Category-Weekly"
          | "Category-Monthly"
          | "Category-Yearly"
          | string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ブログのコンテキストにあるときに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifblog.html
       */
      ["mt:IfBlog"]: {} & GlobalModifier & BlockElement;

      /**
       * コンテキスト内に指定されたカテゴリが含まれる、または、対象となる記事が指定されたカテゴリに属している場合に実行する条件タグです。カテゴリを指定します。このモディファイアを設定しない場合は、現在のループにカテゴリのコンテキストが含まれるか判別します。カテゴリのコンテキストが存在する場合は true (真)、存在しない場合は false (偽) を返します。name または label で指定したカテゴリ名を探す範囲を選択します。primary はメインカテゴリ、secondary はサブカテゴリです。メインカテゴリとは、その記事に複数設定したカテゴリの中で最初に登録したカテゴリを指します。このモディファイアは記事のコンテキスト内で使用します。この場合、MTEntryIfCategory タグと同じ働きをします。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcategory.html
       */
      ["mt:IfCategory"]: {
        /**
         *
         */
        name?: string;

        /**
         * カテゴリを指定します。このモディファイアを設定しない場合は、現在のループにカテゴリのコンテキストが含まれるか判別します。カテゴリのコンテキストが存在する場合は true (真)、存在しない場合は false (偽) を返します。
         */
        label?: string;

        /**
         * name または label で指定したカテゴリ名を探す範囲を選択します。primary はメインカテゴリ、secondary はサブカテゴリです。メインカテゴリとは、その記事に複数設定したカテゴリの中で最初に登録したカテゴリを指します。このモディファイアは記事のコンテキスト内で使用します。この場合、MTEntryIfCategory タグと同じ働きをします。
         */
        type?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * コメントしたユーザーが、Movable Type に登録されているユーザーの場合にのみ実行します。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcommenterisauthor.html
       */
      ["mt:IfCommenterIsAuthor"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントの投稿者が、コメント先の記事の作成者の場合にのみに実行される条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcommenterisentryauthor.html
       */
      ["mt:IfCommenterIsEntryAuthor"]: {} & GlobalModifier & BlockElement;

      /**
       * コメント投稿者が Movable Type に登録済みの場合にのみ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcommentertrusted.html
       */
      ["mt:IfCommenterTrusted"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントに親コメントがある場合にのみ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcommentparent.html
       */
      ["mt:IfCommentParent"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントに返信がある場合にのみ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcommentreplies.html
       */
      ["mt:IfCommentReplies"]: {} & GlobalModifier & BlockElement;

      /**
       * ブログと記事の両方の設定でコメントを受け付ける設定になっている場合に表示する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcommentsaccepted.html
       */
      ["mt:IfCommentsAccepted"]: {} & GlobalModifier & BlockElement;

      /**
       * 管理画面上の設定（ブログと記事の両方）でコメントを受け付ける状態になっている、もしくは、すでにコメントを受け付けていたときに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcommentsactive.html
       */
      ["mt:IfCommentsActive"]: {} & GlobalModifier & BlockElement;

      /**
       * ブログの設定でコメントを受け付ける設定をしているときに実行する条件タグです。このタグは、個々の記事のコメント受け付けの設定を無視します。記事のコメント受け付け設定の判別には MTIfCommentsAccepted ブロックタグをお使いください。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcommentsallowed.html
       */
      ["mt:IfCommentsAllowed"]: {} & GlobalModifier & BlockElement;

      /**
       * 受け付けたコメントについて、即時に公開しない場合に実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcommentsmoderated.html
       */
      ["mt:IfCommentsModerated"]: {} & GlobalModifier & BlockElement;

      /**
       * MTPagerBlock ブロックタグを利用して作成したページ分割の中で、何番目のページを表示中かを判別します。
       * @see https://movabletype.jp/documentation/appendices/tags/ifcurrentpage.html
       */
      ["mt:IfCurrentPage"]: {} & GlobalModifier & BlockElement;

      /**
       * テンプレートがダイナミックパブリッシングで公開する設定になっている場合に実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifdynamic.html
       */
      ["mt:IfDynamic"]: {} & GlobalModifier & BlockElement;

      /**
       * このタグは現在、非推奨です。このタグの利用に必要な JavaScript を実行すると、Web ページの表示速度が著しく低下する恐れがあります。記事、または、トピックに投票 (お気に入り登録) がある場合に ture (真) となり、HTML (div タグ) とそれらを扱うための JavaScript を出力します。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。上記のサンプルの場合、以下の HTML と JavaScript を出力します。MTIfEntryRecommended タグを正しく動作させるためには、出力されるページのテンプレートに以下の JavaScript を記述する必要があります。
       * @see https://movabletype.jp/documentation/appendices/tags/ifentryrecommended.html
       */
      ["mt:IfEntryRecommended"]: {} & GlobalModifier;

      /**
       *
       * @see https://movabletype.jp/documentation/appendices/tags/mtifexternalusermanagement.html
       */
      ["mt:IfExternalUserManagement"]: {} & GlobalModifier & BlockElement;

      /**
       * コンテキスト内に指定されたフォルダが含まれる場合に有効になる条件タグです。フォルダ名を指定します。name モディファイアを設定しない場合は、現在のループにフォルダのコンテキストが存在するか判別します。フォルダのコンテキストが存在する場合は true (真)、存在しない場合は false (偽) を返します。
       * @see https://movabletype.jp/documentation/appendices/tags/iffolder.html
       */
      ["mt:IfFolder"]: {
        /**
         * フォルダ名を指定します。name モディファイアを設定しない場合は、現在のループにフォルダのコンテキストが存在するか判別します。フォルダのコンテキストが存在する場合は true (真)、存在しない場合は false (偽) を返します。
         */
        name?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * プロフィール画像などのアイテムのサムネイル作成に必要な画像処理ライブラリがサーバーにインストールされている場合に実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifimagesupport.html
       */
      ["mt:IfImageSupport"]: {} & GlobalModifier & BlockElement;

      /**
       * child モディファイアで指定したカテゴリが、現在のカテゴリの子（子孫）カテゴリにあたる場合に実行する条件タグです。判定する子（子孫）カテゴリの名前を指定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/ifisancestor.html
       */
      ["mt:IfIsAncestor"]: {
        /**
         * 判定する子（子孫）カテゴリの名前を指定します。このモディファイアは必須です。
         */
        child?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * parent モディファイアで指定したカテゴリが、現在のカテゴリの親（祖先）カテゴリにあたる場合に実行する条件タグです。判定する親（祖先）カテゴリの名前を指定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/ifisdescendant.html
       */
      ["mt:IfIsDescendant"]: {
        /**
         * 判定する親（祖先）カテゴリの名前を指定します。このモディファイアは必須です。
         */
        parent?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ユーザーのサインイン状態によって表示内容を分けるための条件タグです。実際には、element_id モディファイアで指定した id をもとに div タグが生成され、script モディファイアで指定する JavaScript によって表示と非表示を制御します。script モディファイアで指定する JavaScript はあらかじめ用意しておく必要があります。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。script モディファイアで設定した JavaScript で利用する id 要素を指定します。呼び出す JavaScript のファンクション（関数）名を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/ifloggedin.html
       */
      ["mt:IfLoggedIn"]: {
        /**
         * script モディファイアで設定した JavaScript で利用する id 要素を指定します。
         */
        element_id?: string;

        /**
         * 呼び出す JavaScript のファンクション（関数）名を指定します。
         */
        script?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * このタグは Movable Type 4.2 よりも前のバージョンでのみ利用できます。検索結果が複数ページにわたる場合、最後の検索結果が、環境設定ファイル (mt-config.cgi) で設定されている MaxResults の値を超えている場合にのみ実行される条件タグです。このタグは MTSearchResults ブロックタグ内で使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/ifmaxresultscutoff.html
       */
      ["mt:IfMaxResultsCutoff"]: {} & GlobalModifier & BlockElement;

      /**
       * 検索結果が設定した 1 ページに表示する件数より多いの場合に真となり、囲んだ内容を処理します。例えば 1 ページに表示する検索結果の件数と 20 件としている場合、21 件以上の検索結果のとき、囲んだ内容を処理します。
       * @see https://movabletype.jp/documentation/appendices/tags/ifmoreresults.html
       */
      ["mt:IfMoreResults"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントの投稿時に電子メールアドレスの入力を必須とした場合のみに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifneedemail.html
       */
      ["mt:IfNeedEmail"]: {} & GlobalModifier & BlockElement;

      /**
       * このタグは現在、非推奨です。MTIf タグを利用してください。以下はどちらも同じ動作になります。指定したテンプレートタグもしくは変数の値が空でないか判定する条件タグです。tag もしくは name（または var）のいずれかのモディファイアの指定は必須です。例えば、記事の『続き』フィールドの内容が空でないか判別する場合は、<mt:IfNonEmpty tag="EntryMore"> と記述します。値が空でないか判定するテンプレートタグの名前を指定します。値が空でないか判定する変数の名前を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/ifnonempty.html
       */
      ["mt:IfNonEmpty"]: {
        /**
         * 値が空でないか判定するテンプレートタグの名前を指定します。
         */
        tag?: string;

        /**
         *
         */
        name?: string;

        /**
         * 値が空でないか判定する変数の名前を指定します。
         */
        var?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * このタグは現在、非推奨です。MTIf タグを利用してください。以下はどちらも同じ動作になります。指定したテンプレートタグもしくは変数の値が 0（ゼロ）でないときに実行する条件タグです。値が 0（ゼロ）でないか判定するテンプレートタグの名前を指定します。値が 0（ゼロ）でないか判定する変数の名前を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/ifnonzero.html
       */
      ["mt:IfNonZero"]: {
        /**
         * 値が 0（ゼロ）でないか判定するテンプレートタグの名前を指定します。
         */
        tag?: string;

        /**
         *
         */
        name?: string;

        /**
         * 値が 0（ゼロ）でないか判定する変数の名前を指定します。
         */
        var?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ブログと記事の両方の設定でトラックバックを受け付ける設定になっている場合に表示する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifpingsaccepted.html
       */
      ["mt:IfPingsAccepted"]: {} & GlobalModifier & BlockElement;

      /**
       * トラックバックが許可されているか、すでにトラックバックを受け付けているときに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifpingsactive.html
       */
      ["mt:IfPingsActive"]: {} & GlobalModifier & BlockElement;

      /**
       * ブログの設定でトラックバックを受け付ける設定をしているときに実行する条件タグです。このタグは、個々の記事のトラックバック受け付けの設定を無視します。記事のトラックバック受け付け設定の判別には MTIfPingsAccepted ブロックタグをお使いください。
       * @see https://movabletype.jp/documentation/appendices/tags/ifpingsallowed.html
       */
      ["mt:IfPingsAllowed"]: {} & GlobalModifier & BlockElement;

      /**
       * 受け付けたトラックバックについて、即時に公開しない場合に実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifpingsmoderated.html
       */
      ["mt:IfPingsModerated"]: {} & GlobalModifier & BlockElement;

      /**
       * 検索結果が複数ページにわたっている状態で、現在表示中の検索結果ページにひとつ前のページが存在する場合に実行します。例えば、1 ページに表示する検索結果の件数と 20 件としているとき、検索した結果の件数が 21 件以上だと表示中のページは 2 ページ目に分割されます。その分割されたページの 2 ページ目を表示している場合に真となり、囲んだ内容を処理します。
       * @see https://movabletype.jp/documentation/appendices/tags/ifpreviousresults.html
       */
      ["mt:IfPreviousResults"]: {} & GlobalModifier & BlockElement;

      /**
       * ブログの設定で選択した認証方式でブログ上からサインインするとき、Movable Type へのユーザー登録を許可している場合に実行する条件タグです。このモディファイアで指定した認証方式を許可しているか判別できます。
       * @see https://movabletype.jp/documentation/appendices/tags/ifregistrationallowed.html
       */
      ["mt:IfRegistrationAllowed"]: {
        /**
         * このモディファイアで指定した認証方式を許可しているか判別できます。
         */
        type?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 認証なしユーザーまたは匿名ユーザーからのコメントを許可している場合のみに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifregistrationnotrequired.html
       */
      ["mt:IfRegistrationNotRequired"]: {} & GlobalModifier & BlockElement;

      /**
       * コメント投稿時に、コメント認証を必要とする場合にのみ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifregistrationrequired.html
       */
      ["mt:IfRegistrationRequired"]: {} & GlobalModifier & BlockElement;

      /**
       * コメントの投稿時に電子メールアドレスの入力を必須とした場合のみに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifrequirecommentemails.html
       */
      ["mt:IfRequireCommentEmails"]: {} & GlobalModifier & BlockElement;

      /**
       * テンプレートがスタティックパブリッシングで公開する設定になっている場合に実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifstatic.html
       */
      ["mt:IfStatic"]: {} & GlobalModifier & BlockElement;

      /**
       * 実行した検索が、記事やウェブページを対象としたキーワード検索の場合に実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifstraightsearch.html
       */
      ["mt:IfStraightSearch"]: {} & GlobalModifier & BlockElement;

      /**
       * 実行した検索が、記事やウェブページに設定されたタグを対象とした検索の場合に実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/iftagsearch.html
       */
      ["mt:IfTagSearch"]: {} & GlobalModifier & BlockElement;

      /**
       * TypeKey（TypePad Connect）はサービスを終了しました。このタグは現在、非推奨です。ブログの設定で TypeKey トークンが登録されているときに実行する条件タグです。MTIfRegistrationAllowed ブロックタグと異なり、ダイナミックパブリッシングでは利用できません。
       * @see https://movabletype.jp/documentation/appendices/tags/iftypekeytoken.html
       */
      ["mt:IfTypeKeyToken"]: {} & GlobalModifier & BlockElement;

      /**
       * ウェブサイトのコンテキストにあるときに実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/ifwebsite.html
       */
      ["mt:IfWebsite"]: {} & GlobalModifier & BlockElement;

      /**
       * このタグで囲んだ内容を無視するブロックタグです。このタグで囲んだ中にテンプレートタグや HTML などを記述しても処理されず、ブログにも出力されません。テンプレートの処理内容を注釈としてメモしておく場合などに使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/ignore.html
       */
      ["mt:Ignore"]: {} & GlobalModifier & BlockElement;

      /**
       * 「画像」システムオブジェクトで作成したカスタムフィールドの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/imagecustomfielddescription.html
       */
      ["mt:ImageCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 「画像」システムオブジェクトで作成したカスタムフィールドの『名前』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/imagecustomfieldname.html
       */
      ["mt:ImageCustomFieldName"]: {} & GlobalModifier;

      /**
       * 「画像」システムオブジェクトで作成したカスタムフィールドを一覧で表示するブロックタグです。作成したすべてのカスタムフィールドを表示します。include モディファイアでは、指定したカスタムフィールドのみを表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/imagecustomfields.html
       */
      ["mt:ImageCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 「画像」システムオブジェクトで作成したカスタムフィールドに入力した値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/imagecustomfieldvalue.html
       */
      ["mt:ImageCustomFieldValue"]: {} & GlobalModifier;

      /**
       * アップロードした画像の高さを表示します。画像のポップアップウィンドウのテンプレートなどで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/imageheight.html
       */
      ["mt:ImageHeight"]: {} & GlobalModifier;

      /**
       * アップロードした画像の URL を表示します。画像のポップアップウィンドウのテンプレートなどで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/imageurl.html
       */
      ["mt:ImageURL"]: {} & GlobalModifier;

      /**
       * アップロードした画像の幅を表示します。画像のポップアップウィンドウのテンプレートなどで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/imagewidth.html
       */
      ["mt:ImageWidth"]: {} & GlobalModifier;

      /**
       * テンプレートモジュールや外部ファイルを読み込むときに使うファンクションタグです。モディファイア module や file などにより、読み込む対象を指定します。widget モディファイアを利用すれば、ウィジェット単体の読み込みもおこなえます。外部ファイルを読み込む場合、外部ファイルの内容を更新しても、再構築をしない限りブログには反映されません。再構築せずに更新を反映するためには、ダイナミックパブリッシングを利用するか、SSI (サーバーサイドインクルード) や PHP のインクルードを利用します。指定したテンプレートモジュールが自ブログにない場合、親ウェブサイトのテンプレートモジュールを参照します。親ウェブサイトにもない場合は、グローバルテンプレートモジュールを参照します。指定した外部ファイルを読み込みます。注意:  Movable Type 5.13、5.07、および 4.38 以降のバージョンでは、 file モディファイアが初期状態で無効化されています。これはセキュリティ対策の一環です。テンプレート編集の権限だけをもつユーザーが、ファイルシステム上の任意のファイルを読み出せるのは問題であるためです。以前のバージョンと同様にこのモディファイアを使うためには、AllowFileInclude 環境変数 を mt-config.cgi に指定してください。テンプレートモジュールを読み込みます。ウィジェット単体を読み込みます。インデックステンプレートの [テンプレートの種類] 項目で設定する、テンプレートの識別名を指定すると、そのテンプレートを展開します。インデックステンプレートの主な識別名は以下です。Movable Type が管理画面の表示に使用するテンプレートファイル（tmpl/cms ディレクトリ配下のファイル）を指定します。主に管理画面側で使用するモディファイアで、ブログでは通常使用しません。module モディファイアを指定してテンプレートモジュールを読み込む場合、自ブログ以外のブログからモジュールを読み込むことが可能です。他のブログから読み込む場合に、テンプレートモジュールが含まれているブログの ID を指定します。読み込むテンプレートモジュールで参照可能な変数を設定します。例えば以下のサンプルでは、「フォームフィールド」テンプレート内で id、class、label が定義済みの変数として使用できます。id 変数の値には entry-body、class 変数の値は空、label 変数の値には 本文 が格納されます。値に 1 を指定すると、グローバルテンプレートにあるテンプレートモジュールをインクルードします。初期値は 0 です。値に 1 を指定すると、ブログの親ウェブサイトにあるテンプレートモジュールをインクルードします。親ウェブサイトにモジュールが無い場合は、何もしません（グローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。初期状態では、指定したテンプレートモジュールが自ブログにない場合、親ウェブサイト、システムレベル（グローバルテンプレート）の順にテンプレートモジュールを探します。このモディファイアの値に 1 を指定すると、明示的に自ブログのテンプレートモジュールをインクルードします。つまり、自ブログにテンプレートモジュールが無い場合は、何もしません（親ウェブサイトやグローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。読み込むテンプレートモジュールの内容をキャッシュしたいときは、値に 1 を設定します。cache モディファイアのみを付与した場合は、キャッシュのキーは自動発行され、キャッシュの生存時間は 60 分に設定されます。キーや生存時間を別途設定したい場合は、key モディファイアか ttl モディファイアと併用します。初期値は 0 です。キャッシュのキーを設定します。このモディファイアは ttl または cache モディファイアが付与されていれば省略可能です。省略されたときは、自動的にキーが発行されます。キャッシュの生存時間 (単位は秒) を設定します。このモディファイアは key または cache モディファイアが設定されていれば省略可能です。省略されたときは、初期値の 60 分が設定されます。永久にキャッシュを保持したいときは、値に 0 と設定します。永久にキャッシュを保持する設定は、テンプレートタグで ttl モディファイアを使用した場合に設定できます。値に 1 を設定すると、読み込むテンプレートモジュール、ウィジェットを SSI (サーバーサイドインクルード) を利用して構築します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/include.html
       */
      ["mt:Include"]: {
        /**
         * 指定した外部ファイルを読み込みます。注意:  Movable Type 5.13、5.07、および 4.38 以降のバージョンでは、 file モディファイアが初期状態で無効化されています。これはセキュリティ対策の一環です。テンプレート編集の権限だけをもつユーザーが、ファイルシステム上の任意のファイルを読み出せるのは問題であるためです。以前のバージョンと同様にこのモディファイアを使うためには、AllowFileInclude 環境変数 を mt-config.cgi に指定してください。
         */
        file?: string;

        /**
         * テンプレートモジュールを読み込みます。
         */
        module?: string;

        /**
         * ウィジェット単体を読み込みます。
         */
        widget?: string;

        /**
         * インデックステンプレートの [テンプレートの種類] 項目で設定する、テンプレートの識別名を指定すると、そのテンプレートを展開します。インデックステンプレートの主な識別名は以下です。
         */
        identifier?: string;

        /**
         * Movable Type が管理画面の表示に使用するテンプレートファイル（tmpl/cms ディレクトリ配下のファイル）を指定します。主に管理画面側で使用するモディファイアで、ブログでは通常使用しません。
         */
        name?: string;

        /**
         * module モディファイアを指定してテンプレートモジュールを読み込む場合、自ブログ以外のブログからモジュールを読み込むことが可能です。他のブログから読み込む場合に、テンプレートモジュールが含まれているブログの ID を指定します。
         */
        blog_id?: string;

        /**
         * 読み込むテンプレートモジュールで参照可能な変数を設定します。例えば以下のサンプルでは、「フォームフィールド」テンプレート内で id、class、label が定義済みの変数として使用できます。id 変数の値には entry-body、class 変数の値は空、label 変数の値には 本文 が格納されます。
         */
        variable_foo?: string;

        /**
         * 値に 1 を指定すると、グローバルテンプレートにあるテンプレートモジュールをインクルードします。初期値は 0 です。
         */
        global?: string;

        /**
         * 値に 1 を指定すると、ブログの親ウェブサイトにあるテンプレートモジュールをインクルードします。親ウェブサイトにモジュールが無い場合は、何もしません（グローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。
         */
        parent?: string;

        /**
         * 初期状態では、指定したテンプレートモジュールが自ブログにない場合、親ウェブサイト、システムレベル（グローバルテンプレート）の順にテンプレートモジュールを探します。このモディファイアの値に 1 を指定すると、明示的に自ブログのテンプレートモジュールをインクルードします。つまり、自ブログにテンプレートモジュールが無い場合は、何もしません（親ウェブサイトやグローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。
         */
        local?: string;

        /**
         * 読み込むテンプレートモジュールの内容をキャッシュしたいときは、値に 1 を設定します。cache モディファイアのみを付与した場合は、キャッシュのキーは自動発行され、キャッシュの生存時間は 60 分に設定されます。キーや生存時間を別途設定したい場合は、key モディファイアか ttl モディファイアと併用します。初期値は 0 です。
         */
        cache?: string;

        /**
         *
         */
        cache_key?: string;

        /**
         * キャッシュのキーを設定します。このモディファイアは ttl または cache モディファイアが付与されていれば省略可能です。省略されたときは、自動的にキーが発行されます。
         */
        key?: string;

        /**
         * キャッシュの生存時間 (単位は秒) を設定します。このモディファイアは key または cache モディファイアが設定されていれば省略可能です。省略されたときは、初期値の 60 分が設定されます。永久にキャッシュを保持したいときは、値に 0 と設定します。永久にキャッシュを保持する設定は、テンプレートタグで ttl モディファイアを使用した場合に設定できます。
         */
        ttl?: string;

        /**
         * 値に 1 を設定すると、読み込むテンプレートモジュール、ウィジェットを SSI (サーバーサイドインクルード) を利用して構築します。初期値は 0 です。
         */
        ssi?: string;
      } & GlobalModifier;

      /**
       * MTInclude ファンクションタグと同じくテンプレートモジュールを読み込みます。違いは、読み込んだテンプレートモジュール内の所定の箇所に、MTIncludeBlock ブロックタグで囲んだ内容を差し込める点です。テンプレートモジュールを読み込む際に、そのテンプレートモジュール内の一部の内容だけ読み込み元で指定したい場合に使用します。上記の MTIncludeBlock ブロックタグで読み込む banner テンプレートモジュールの内容を下記とします。MTIncludeBlock ブロックタグで囲んだ内容は、contents 変数に格納されます。読み込まれた banner テンプレートモジュールの中に記述された <$mt:Var name="contents"$> には、contents 変数の内容が展開されます。ここでは、<$mt:Var name="contents"$> の部分に、Movable Type へようこそ！ が差し込まれるため、最終的な出力内容は以下になります。MTInclude ファンクションタグでも同様の記述が可能です。
以下は、どちらも同じ結果になります。初期状態では、MTIncludeBlock ブロックタグで囲んだ内容は、contents 変数に格納されます。この変数名は var モディファイアで変更できます。MTIncludeBlock ブロックタグ内にテンプレートタグを記述することもできますが、インクルードするテンプレートモジュール内で実際に変数が利用されるまで、テンプレートタグは評価されません。MTIncludeBlock ブロックタグで囲んだ内容を、指定した名前の変数に代入します。変数は読み込むテンプレートモジュールで参照できます。指定しない場合の初期変数名は contents です。MTInclude ファンクションタグで以下のように記述した場合と同じ動作をします。指定した外部ファイルを読み込みます。注意:  Movable Type 5.13、5.07、および 4.38 以降のバージョンでは、 file モディファイアが初期状態で無効化されています。これはセキュリティ対策の一環です。テンプレート編集の権限だけをもつユーザーが、ファイルシステム上の任意のファイルを読み出せるのは問題であるためです。以前のバージョンと同様にこのモディファイアを使うためには、AllowFileInclude 環境変数 を mt-config.cgi に指定してください。テンプレートモジュールを読み込みます。ウィジェット単体を読み込みます。インデックステンプレートの [テンプレートの種類] 項目で設定する、テンプレートの識別名を指定すると、そのテンプレートを展開します。インデックステンプレートの主な識別名は以下です。Movable Type が管理画面の表示に使用するテンプレートファイル（tmpl/cms ディレクトリ配下のファイル）を指定します。主に管理画面側で使用するモディファイアで、ブログでは通常使用しません。module モディファイアを指定してテンプレートモジュールを読み込む場合、自ブログ以外のブログからモジュールを読み込むことが可能です。他のブログから読み込む場合に、テンプレートモジュールが含まれているブログの ID を指定します。読み込むテンプレートモジュールで参照可能な変数を設定します。例えば以下のサンプルでは、「フォームフィールド」テンプレート内で id、class、label が定義済みの変数として使用できます。id 変数の値には entry-body、class 変数の値は空、label 変数の値には 本文 が格納されます。値に 1 を指定すると、グローバルテンプレートにあるテンプレートモジュールをインクルードします。初期値は 0 です。値に 1 を指定すると、ブログの親ウェブサイトにあるテンプレートモジュールをインクルードします。親ウェブサイトにモジュールが無い場合は、何もしません（グローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。初期状態では、指定したテンプレートモジュールが自ブログにない場合、親ウェブサイト、システムレベル（グローバルテンプレート）の順にテンプレートモジュールを探します。このモディファイアの値に 1 を指定すると、明示的に自ブログのテンプレートモジュールをインクルードします。つまり、自ブログにテンプレートモジュールが無い場合は、何もしません（親ウェブサイトやグローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。読み込むテンプレートモジュールの内容をキャッシュしたいときは、値に 1 を設定します。cache モディファイアのみを付与した場合は、キャッシュのキーは自動発行され、キャッシュの生存時間は 60 分に設定されます。キーや生存時間を別途設定したい場合は、key モディファイアか ttl モディファイアと併用します。初期値は 0 です。キャッシュのキーを設定します。このモディファイアは ttl または cache モディファイアが付与されていれば省略可能です。省略されたときは、自動的にキーが発行されます。キャッシュの生存時間 (単位は秒) を設定します。このモディファイアは key または cache モディファイアが設定されていれば省略可能です。省略されたときは、初期値の 60 分が設定されます。永久にキャッシュを保持したいときは、値に 0 と設定します。永久にキャッシュを保持する設定は、テンプレートタグで ttl モディファイアを使用した場合に設定できます。値に 1 を設定すると、読み込むテンプレートモジュール、ウィジェットを SSI (サーバーサイドインクルード) を利用して構築します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/includeblock.html
       */
      ["mt:IncludeBlock"]: {
        /**
         * MTIncludeBlock ブロックタグで囲んだ内容を、指定した名前の変数に代入します。変数は読み込むテンプレートモジュールで参照できます。指定しない場合の初期変数名は contents です。MTInclude ファンクションタグで以下のように記述した場合と同じ動作をします。
         */
        var?: string;

        /**
         * 指定した外部ファイルを読み込みます。注意:  Movable Type 5.13、5.07、および 4.38 以降のバージョンでは、 file モディファイアが初期状態で無効化されています。これはセキュリティ対策の一環です。テンプレート編集の権限だけをもつユーザーが、ファイルシステム上の任意のファイルを読み出せるのは問題であるためです。以前のバージョンと同様にこのモディファイアを使うためには、AllowFileInclude 環境変数 を mt-config.cgi に指定してください。
         */
        file?: string;

        /**
         * テンプレートモジュールを読み込みます。
         */
        module?: string;

        /**
         * ウィジェット単体を読み込みます。
         */
        widget?: string;

        /**
         * インデックステンプレートの [テンプレートの種類] 項目で設定する、テンプレートの識別名を指定すると、そのテンプレートを展開します。インデックステンプレートの主な識別名は以下です。
         */
        identifier?: string;

        /**
         * Movable Type が管理画面の表示に使用するテンプレートファイル（tmpl/cms ディレクトリ配下のファイル）を指定します。主に管理画面側で使用するモディファイアで、ブログでは通常使用しません。
         */
        name?: string;

        /**
         * module モディファイアを指定してテンプレートモジュールを読み込む場合、自ブログ以外のブログからモジュールを読み込むことが可能です。他のブログから読み込む場合に、テンプレートモジュールが含まれているブログの ID を指定します。
         */
        blog_id?: string;

        /**
         * 読み込むテンプレートモジュールで参照可能な変数を設定します。例えば以下のサンプルでは、「フォームフィールド」テンプレート内で id、class、label が定義済みの変数として使用できます。id 変数の値には entry-body、class 変数の値は空、label 変数の値には 本文 が格納されます。
         */
        variable_foo?: string;

        /**
         * 値に 1 を指定すると、グローバルテンプレートにあるテンプレートモジュールをインクルードします。初期値は 0 です。
         */
        global?: string;

        /**
         * 値に 1 を指定すると、ブログの親ウェブサイトにあるテンプレートモジュールをインクルードします。親ウェブサイトにモジュールが無い場合は、何もしません（グローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。
         */
        parent?: string;

        /**
         * 初期状態では、指定したテンプレートモジュールが自ブログにない場合、親ウェブサイト、システムレベル（グローバルテンプレート）の順にテンプレートモジュールを探します。このモディファイアの値に 1 を指定すると、明示的に自ブログのテンプレートモジュールをインクルードします。つまり、自ブログにテンプレートモジュールが無い場合は、何もしません（親ウェブサイトやグローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。
         */
        local?: string;

        /**
         * 読み込むテンプレートモジュールの内容をキャッシュしたいときは、値に 1 を設定します。cache モディファイアのみを付与した場合は、キャッシュのキーは自動発行され、キャッシュの生存時間は 60 分に設定されます。キーや生存時間を別途設定したい場合は、key モディファイアか ttl モディファイアと併用します。初期値は 0 です。
         */
        cache?: string;

        /**
         *
         */
        cache_key?: string;

        /**
         * キャッシュのキーを設定します。このモディファイアは ttl または cache モディファイアが付与されていれば省略可能です。省略されたときは、自動的にキーが発行されます。
         */
        key?: string;

        /**
         * キャッシュの生存時間 (単位は秒) を設定します。このモディファイアは key または cache モディファイアが設定されていれば省略可能です。省略されたときは、初期値の 60 分が設定されます。永久にキャッシュを保持したいときは、値に 0 と設定します。永久にキャッシュを保持する設定は、テンプレートタグで ttl モディファイアを使用した場合に設定できます。
         */
        ttl?: string;

        /**
         * 値に 1 を設定すると、読み込むテンプレートモジュール、ウィジェットを SSI (サーバーサイドインクルード) を利用して構築します。初期値は 0 です。
         */
        ssi?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 環境変数 IndexBasename で設定したファイル名を表示します。環境変数を設定していない場合は、初期値の index が表示されます。extension モディファイアを指定することで、ブログのアーカイブ設定で指定したファイルの拡張子を付加した状態で表示します。拡張子の付加に関するスイッチです。extension="1" と設定すると、拡張子を付加します。初期値は拡張子を付加しない 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/indexbasename.html
       */
      ["mt:IndexBasename"]: {
        /**
         * 拡張子の付加に関するスイッチです。extension="1" と設定すると、拡張子を付加します。初期値は拡張子を付加しない 0 です。
         */
        extension?: string;
      } & GlobalModifier;

      /**
       * インデックステンプレートで出力した各種インデックスファイルへの絶対 URL を表示します。MTIndexList ブロックタグの中で利用できます。1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/indexlink.html
       */
      ["mt:IndexLink"]: {
        /**
         * 1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。初期値は 0 です。
         */
        with_index?: string;
      } & GlobalModifier;

      /**
       * ブログに作成したインデックステンプレートで出力したページを一覧するためのブロックタグです。このタグの中では MTIndexLink タグと MTIndexName タグを利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/indexlist.html
       */
      ["mt:IndexList"]: {} & GlobalModifier & BlockElement;

      /**
       * ブログに作成したインデックステンプレートの名前を表示します。MTIndexList ブロックタグの中で利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/indexname.html
       */
      ["mt:IndexName"]: {} & GlobalModifier;

      /**
       * インデックステンプレートで出力されるファイル、もしくは、特定の記事の URL を表示します。モディファイア template や entry_id で、URL を表示する対象を指定します。template と entry_id は併用できません。テンプレートの種類を指定し、対象のテンプレートで出力されるファイルへの URL を表示します。（カスタムインデックステンプレートを除く）例えば、テンプレートの種類が「メインページ (main_index)」の場合は、template="main_index" と指定します。詳しくは、アーカイブテンプレートに設定される予約変数を参照してください。記事の ID を指定し、対象の記事の URL を表示します。指定したブログのテンプレートを表示します。template モディファイアと組み合わせて使ってください。1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/link.html
       */
      ["mt:Link"]: {
        /**
         * テンプレートの種類を指定し、対象のテンプレートで出力されるファイルへの URL を表示します。（カスタムインデックステンプレートを除く）例えば、テンプレートの種類が「メインページ (main_index)」の場合は、template="main_index" と指定します。詳しくは、アーカイブテンプレートに設定される予約変数を参照してください。
         */
        template?: string;

        /**
         * 記事の ID を指定し、対象の記事の URL を表示します。
         */
        entry_id?: string;

        /**
         * 指定したブログのテンプレートを表示します。template モディファイアと組み合わせて使ってください。
         */
        blog_id?: string;

        /**
         * 1 の値を設定した場合、出力された URL にインデックスファイル名 (通常 index.html) を付与します。初期値は 0 です。
         */
        with_index?: string;
      } & GlobalModifier;

      /**
       * ハッシュ（配列）変数をモディファイア name または var で指定すると、指定されたハッシュ（配列）の内容に応じてタグで囲まれた内容を繰り返し処理します。対象となるハッシュ変数を指定します。値に key を指定するとハッシュのキーの文字列順で並べ替えます。value を指定するとハッシュの値の順で並べ替えます。key, value には reverse を併用できます。reverse サブモディファイアは名前の通り、順序を逆にします。value には numeric を併用できます。numeric は名前の通り、文字列ではなく数値比較をおこないます。ループの各ブロックの間に表示する区切り文字を設定します。MTLoop タグによるループの中では以下の特別な変数が利用できます。ループ出力の最初である場合 true (1) となります。ループ出力の最後である場合 ture (1) となります。ループ出力の奇数回目の場合 ture (1) となります。ループ出力の偶数回目の場合 ture (1) となります。ループ出力の中で現在割り当てられているキーの名前を表示します。ループ出力の中で現在割り当てられているキーに設定された値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/loop.html
       */
      ["mt:Loop"]: {
        /**
         *
         */
        name?: string;

        /**
         * 対象となるハッシュ変数を指定します。
         */
        var?: string;

        /**
         * 値に key を指定するとハッシュのキーの文字列順で並べ替えます。value を指定するとハッシュの値の順で並べ替えます。key, value には reverse を併用できます。reverse サブモディファイアは名前の通り、順序を逆にします。value には numeric を併用できます。numeric は名前の通り、文字列ではなく数値比較をおこないます。
         */
        sort_by?: string;

        /**
         * ループの各ブロックの間に表示する区切り文字を設定します。
         */
        glue?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * Markdown フォーマットは通常 XHTML に変換されます。この変換結果を HTML フォーマットや、入力した Markdown フォーマットのまま表示させたい場合は、output モディファイアを利用して希望の出力フォーマットを指定します。例えば html4 と指定した場合、<br /> は <br> となります。変換結果を HTML フォーマットにしたい場合は、html4 を、入力した Markdown フォーマットのまま出力したい場合は raw を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/markdownoptions.html
       */
      ["mt:MarkdownOptions"]: {
        /**
         * 変換結果を HTML フォーマットにしたい場合は、html4 を、入力した Markdown フォーマットのまま出力したい場合は raw を指定します。
         */
        output?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 環境設定ファイル (mt-config.cgi) で設定されている MaxResults の値を表示します。Movable Type 4.2x 以降のバージョンでは、MTSearchMaxResults を使用してください。
       * @see https://movabletype.jp/documentation/appendices/tags/maxresults.html
       */
      ["mt:MaxResults"]: {} & GlobalModifier;

      /**
       * Movable Type で管理している複数のブログの情報を表示します。モディファイアを利用して対象のブログを選択したり、表示の方法を設定できます。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。複数のブログの情報を、表示する方法を設定します。複数のブログの情報を、ブログ単位にまとめて表示します。複数のブログの情報を、全体でソートして表示します。通常、アーカイブテンプレートの中でブロックタグを用いる場合、自動的に現在のアーカイブの条件によるフィルターが掛かります。（ブログ ID、カテゴリや読み込まれている記事のリストなど）ignore_archive_context モディファイアに "1" を指定すると、アーカイブコンテキストによる自動フィルターをおこなわないでデータをロードさせることができます。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/multiblog.html
       */
      ["mt:MultiBlog"]: {
        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;

        /**
         * 複数のブログの情報を、表示する方法を設定します。複数のブログの情報を、ブログ単位にまとめて表示します。複数のブログの情報を、全体でソートして表示します。
         */
        mode?: string;

        /**
         * 通常、アーカイブテンプレートの中でブロックタグを用いる場合、自動的に現在のアーカイブの条件によるフィルターが掛かります。（ブログ ID、カテゴリや読み込まれている記事のリストなど）ignore_archive_context モディファイアに "1" を指定すると、アーカイブコンテキストによる自動フィルターをおこなわないでデータをロードさせることができます。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
         */
        ignore_archive_context?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * MTMultiBlog ブロックタグで定義している中で、ローカルブログ (MTMultiBlog ブロックタグを利用して他のブログの内容を表示させたいブログ) の内容の場合にのみ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/multiblogiflocalblog.html
       */
      ["mt:MultiBlogIfLocalBlog"]: {} & GlobalModifier & BlockElement;

      /**
       * MTMultiBlog ブロックタグで定義している中で、一時的にローカルブログ (MTMultiBlog ブロックタグを利用して他のブログの内容を表示させたいブログ) の内容を表示したい場合に利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/multibloglocalblog.html
       */
      ["mt:MultiBlogLocalBlog"]: {} & GlobalModifier & BlockElement;

      /**
       * 検索結果が複数ページになるとき、現在表示しているページの次の検索結果ページの URL を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/nextlink.html
       */
      ["mt:NextLink"]: {} & GlobalModifier;

      /**
       * 何もキーワードを入力せずに検索したとき (直接 mt-search.cgi にアクセスした場合) に真を返し、囲んだ内容を処理します。特定のキーワードで検索し、検索結果が無い場合に特定の内容を表示したいときは、MTNoSearchResults ブロックタグを利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/nosearch.html
       */
      ["mt:NoSearch"]: {} & GlobalModifier & BlockElement;

      /**
       * 検索条件に合致した結果が得られなかったときに表示するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/nosearchresults.html
       */
      ["mt:NoSearchResults"]: {} & GlobalModifier & BlockElement;

      /**
       * mt-add-notify.cgi が Movable Type 5.11 で廃止されたことに伴い、このタグは非推奨となりました。通知を処理する CGI プログラムのファイル名を表示します。MTCGIPath と組み合わせることで、プログラムへの URL を生成できます。
       * @see https://movabletype.jp/documentation/appendices/tags/notifyscript.html
       */
      ["mt:NotifyScript"]: {} & GlobalModifier;

      /**
       * 特定のブログコンテキストを作成します。囲まれた内容は、blog_id モディファイアで設定したブログ ID のコンテンツを扱うことができます。MTMultiBlog タグと同じモディファイアを利用可能です。詳しくは MTMultiBlog タグのドキュメントご参照ください。
       * @see https://movabletype.jp/documentation/appendices/tags/otherblog.html
       */
      ["mt:OtherBlog"]: {} & GlobalModifier & BlockElement;

      /**
       * Movable Type に登録した利用サービスの一覧を出力するためのブロックタグです。出力する利用サービスを特定種類のサービスに限定したい場合に利用します。contact タイプの利用サービスプロフィールのみを出力したい場合は、次のようにします。また、contact タイプの利用サービス以外のプロフィールを出力したい場合は、次のようにします。出力するプロフィールを特定のユーザーのものにフィルタリングします。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーのプロフィールのみにフィルタリングします。複数のユーザーを対象にしたい場合は、アカウント名をカンマ , で区切ります。出力するプロフィールを特定のユーザーのものにフィルタリングします。設定するのは、ユーザーの「表示名」です。次のサンプルは、表示名が『メロディ』のユーザーのプロフィールのみにフィルタリングします。複数のユーザーを対象にしたい場合は、表示名をカンマ , で区切ります。
       * @see https://movabletype.jp/documentation/appendices/tags/otherprofiles.html
       */
      ["mt:OtherProfiles"]: {
        /**
         * 出力するプロフィールを特定のユーザーのものにフィルタリングします。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーのプロフィールのみにフィルタリングします。複数のユーザーを対象にしたい場合は、アカウント名をカンマ , で区切ります。
         */
        author?: string;

        /**
         * 出力するプロフィールを特定のユーザーのものにフィルタリングします。設定するのは、ユーザーの「表示名」です。次のサンプルは、表示名が『メロディ』のユーザーのプロフィールのみにフィルタリングします。複数のユーザーを対象にしたい場合は、表示名をカンマ , で区切ります。
         */
        display_name?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * パラメータを指定して各利用サービスに関連した値を参照できます。プラグインによる対応サービスの拡張時に、title や url 以外の内容を出力したい場合などにも利用できます。出力したいパラメータの種類を指定します。このモディファイアは必須です。例えば、利用サービス名を出力する場合は name="label" を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/otherprofilevar.html
       */
      ["mt:OtherProfileVar"]: {} & GlobalModifier;

      /**
       * 特定のウェブページで利用しているアイテムの一覧を表示するためのブロックタグです。ウェブページアーカイブか、MTPages ブロックタグの中で利用できます。指定した数のアイテムを表示します。N は 0 より大きな数値にしてください。指定した数のアイテムを除外して表示します。値に 5 を指定すると、最新 5 件のアイテムを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。sort_by モディファイアでフィルタリングされたアイテムを、指定数表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。指定したタグが設定されたアイテムをすべて表示します。アイテムの数を指定するときは lastn を併用してください。複数のタグを指定するときは AND か OR を使います。特定のタグ以外を指定するときは NOT を使います。また、() でくくることで、条件判断の優先順位を指定できます。指定したユーザーがアップロードしたアイテムのみ表示します。アイテム数を指定するときは lastn を併用してください。表示したいアイテムをアイテムの種類で絞り込むことができます。表示したいアイテムが image でも audio でも video でもない場合は、file という値を設定します。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。ウェブページを並び替える対象を指定します。MTAssetIsFirstInRow, MTAssetIsLastInRow タグを使用して、画像の一覧を作成する際に、一行に表示するアイテム数 N 件を設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/pageassets.html
       */
      ["mt:PageAssets"]: {
        /**
         * 指定した数のアイテムを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 指定した数のアイテムを除外して表示します。値に 5 を指定すると、最新 5 件のアイテムを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。
         */
        offset?: number;

        /**
         * sort_by モディファイアでフィルタリングされたアイテムを、指定数表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。
         */
        limit?: number;

        /**
         * 指定したタグが設定されたアイテムをすべて表示します。アイテムの数を指定するときは lastn を併用してください。複数のタグを指定するときは AND か OR を使います。特定のタグ以外を指定するときは NOT を使います。また、() でくくることで、条件判断の優先順位を指定できます。
         */
        tags?: string;

        /**
         * 指定したユーザーがアップロードしたアイテムのみ表示します。アイテム数を指定するときは lastn を併用してください。
         */
        author?: string;

        /**
         * 表示したいアイテムをアイテムの種類で絞り込むことができます。表示したいアイテムが image でも audio でも video でもない場合は、file という値を設定します。
         */
        type?: string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。
         */
        sort_order?: "ascend" | "descend";

        /**
         * ウェブページを並び替える対象を指定します。
         */
        sort_by?: "file_name" | "created_by" | "created_on" | string;

        /**
         * MTAssetIsFirstInRow, MTAssetIsLastInRow タグを使用して、画像の一覧を作成する際に、一行に表示するアイテム数 N 件を設定します。
         */
        assets_per_row?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ウェブページを作成したユーザーの『表示名』を表示します。セキュリティ上の理由により、ユーザー設定で『表示名』の設定が無い場合、何も表示されません。
       * @see https://movabletype.jp/documentation/appendices/tags/pageauthordisplayname.html
       */
      ["mt:PageAuthorDisplayName"]: {} & GlobalModifier;

      /**
       * ウェブページを作成したユーザーのメールアドレスを表示します。Movable Type のユーザーのメールアドレスをブログに表示することは、スパムの温床になるため推奨しません。メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/pageauthoremail.html
       */
      ["mt:PageAuthorEmail"]: {
        /**
         * メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       * ウェブページを作成したユーザーの『表示名』をリンク付きで表示します。ユーザー情報の編集画面の『ウェブサイト URL』が入力されていれば URL へのリンクが付加されます。『ウェブサイト URL』が入力されていない場合、リンクは付加されません。もし、『ウェブサイト URL』が入力されておらず、且つ、『電子メール』が入力されている場合は、show_email モディファイアを 1 に設定することでメールアドレスへのリンクが付加されます。両方とも入力されていないときは、リンクは付加されません。ユーザー情報の編集画面の『ウェブサイト URL』に入力されている URL へのリンクを生成します。初期値は 1 です。ユーザーに『ウェブサイト URL』が設定されていない場合、本モディファイアの値を 1 に設定することで、ユーザー情報の編集画面の『電子メール』に入力されているメールアドレスへのリンクを生成します。初期値は 0 です。値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/pageauthorlink.html
       */
      ["mt:PageAuthorLink"]: {
        /**
         * ユーザー情報の編集画面の『ウェブサイト URL』に入力されている URL へのリンクを生成します。初期値は 1 です。
         */
        show_url?: string;

        /**
         * ユーザーに『ウェブサイト URL』が設定されていない場合、本モディファイアの値を 1 に設定することで、ユーザー情報の編集画面の『電子メール』に入力されているメールアドレスへのリンクを生成します。初期値は 0 です。
         */
        show_email?: string;

        /**
         * 値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。
         */
        new_window?: string;

        /**
         * メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       * ウェブページを作成したユーザーの『ウェブサイト URL』を表示します。『ウェブサイト URL』はユーザー作成時やユーザー情報の編集画面で設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/pageauthorurl.html
       */
      ["mt:PageAuthorURL"]: {} & GlobalModifier;

      /**
       * ウェブページの『出力ファイル名』（ベースネーム）を表示します。ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagebasename.html
       */
      ["mt:PageBasename"]: {
        /**
         * ハイフン - を指定すると、出力ファイル名に含まれるアンダースコアをハイフンに変換して表示します。アンダースコア _ を指定すると、出力ファイル名に含まれるハイフンをアンダースコアに変換します。
         */
        separator?: string;
      } & GlobalModifier;

      /**
       * ウェブページの本文を表示します。ページに指定されているフォーマットを適用するか指定します。0 ではフォーマットを適用せず、入力された内容がそのまま出力されます。1 ではフォーマットが適用されます。言語設定を日本語にしているときは、ウェブページの本文から、指定した N 文字分だけ抜き出します。もし、言語設定を英語にしているなら、ウェブページの本文から N 語 (単語) 分だけ抜き出します。初期値はありません。注意点は、言語設定を日本語にしている環境で、本文に英語の文章を含むときです。この場合、本文から N 語分抜き出すのではなく、N 文字分抜き出します。どちらの場合も、テキストに含まれている html は除去されたうえで処理されます。
       * @see https://movabletype.jp/documentation/appendices/tags/pagebody.html
       */
      ["mt:PageBody"]: {
        /**
         * ページに指定されているフォーマットを適用するか指定します。0 ではフォーマットを適用せず、入力された内容がそのまま出力されます。1 ではフォーマットが適用されます。
         */
        convert_breaks?: string;

        /**
         * 言語設定を日本語にしているときは、ウェブページの本文から、指定した N 文字分だけ抜き出します。もし、言語設定を英語にしているなら、ウェブページの本文から N 語 (単語) 分だけ抜き出します。初期値はありません。注意点は、言語設定を日本語にしている環境で、本文に英語の文章を含むときです。この場合、本文から N 語分抜き出すのではなく、N 文字分抜き出します。どちらの場合も、テキストに含まれている html は除去されたうえで処理されます。
         */
        words?: string;
      } & GlobalModifier;

      /**
       * ウェブページ作成画面に追加されたカスタムフィールドの『説明』を表示するファンクションタグです。このタグは MTPageCustomFields ブロックタグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagecustomfielddescription.html
       */
      ["mt:PageCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * ウェブページ作成画面に追加されたカスタムフィールドの『名前』を表示するファンクションタグです。このタグは MTPageCustomFields ブロックタグのコンテキストで使用します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagecustomfieldname.html
       */
      ["mt:PageCustomFieldName"]: {} & GlobalModifier;

      /**
       * ウェブページに関するカスタムフィールドの情報を表示するためのブロックタグです。ウェブページ作成画面に追加されたすべてのカスタムフィールドの情報を表示します。include モディファイアでは、指定したカスタムフィールドのみを表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagecustomfields.html
       */
      ["mt:PageCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ウェブページ作成画面に追加されたカスタムフィールドに入力した値を表示するファンクションタグです。このタグは MTPageCustomFields ブロックタグのコンテキストで使用します。カスタムフィールドで追加した項目からアップロードした画像などのアイテムを表示するには、専用のタグと合わせて追加される Asset タグを使用します。詳しくはドキュメントを参照ください。
       * @see https://movabletype.jp/documentation/appendices/tags/pagecustomfieldvalue.html
       */
      ["mt:PageCustomFieldValue"]: {} & GlobalModifier;

      /**
       * ウェブページの公開日を表示します。日付に関係するフォーマットや言語に関するモディファイアを指定して表示をカスタマイズできます。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/pagedate.html
       */
      ["mt:PageDate"]: {} & GlobalModifier;

      /**
       * ウェブページの『概要』に入力した内容を表示します。概要に記述がないときは、管理画面で指定した文字数だけウェブページの本文を先頭から表示します。改行の変換を設定します。管理画面の設定より優先されます。初期値は 0 です。0 では改行が無視され、1 では自動的に改行に変換されます。ただし、自動生成された概要では、指定に関わらず改行が無視されます。1 を指定すると、概要が入力されていない場合に、本文から自動で概要を生成せずに、空で出力します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/pageexcerpt.html
       */
      ["mt:PageExcerpt"]: {
        /**
         * 改行の変換を設定します。管理画面の設定より優先されます。初期値は 0 です。0 では改行が無視され、1 では自動的に改行に変換されます。ただし、自動生成された概要では、指定に関わらず改行が無視されます。
         */
        convert_breaks?: string;

        /**
         * 1 を指定すると、概要が入力されていない場合に、本文から自動で概要を生成せずに、空で出力します。初期値は 0 です。
         */
        no_generate?: string;

        /**
         *
         */
        words?: string;
      } & GlobalModifier;

      /**
       * ウェブページが属するフォルダに関する情報を取得するためのブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/pagefolder.html
       */
      ["mt:PageFolder"]: {} & GlobalModifier & BlockElement;

      /**
       * ウェブページの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pageid.html
       */
      ["mt:PageID"]: {} & GlobalModifier;

      /**
       * タグがウェブページに設定されているときに囲まれた内容を処理するブロックタグです。tag または name モディファイアでタグ名を指定できます。指定したタグのみを対象とします。このモディファイアを使用しない場合は、ウェブページに 1 つ以上のタグが設定されているときに実行します。値を 1 に設定した場合、プライベートタグ（@ で始まるタグ）を対象に含めます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/pageiftagged.html
       */
      ["mt:PageIfTagged"]: {
        /**
         *
         */
        tag?: string;

        /**
         * 指定したタグのみを対象とします。このモディファイアを使用しない場合は、ウェブページに 1 つ以上のタグが設定されているときに実行します。
         */
        name?: string;

        /**
         * 値を 1 に設定した場合、プライベートタグ（@ で始まるタグ）を対象に含めます。初期値は 0 です。
         */
        include_private?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ウェブページの『キーワード』フィールドに入力した内容を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagekeywords.html
       */
      ["mt:PageKeywords"]: {} & GlobalModifier;

      /**
       * ウェブページを最終更新したユーザーの『表示名』を表示します。ユーザー設定で『表示名』の設定が無い場合、何も表示されません。
       * @see https://movabletype.jp/documentation/appendices/tags/pagemodifiedauthordisplayname.html
       */
      ["mt:PageModifiedAuthorDisplayName"]: {} & GlobalModifier;

      /**
       * ウェブページを最終更新したユーザーのメールアドレスを表示します。Movable Type のユーザーのメールアドレスをブログに表示することは、スパムの温床になるため推奨しません。メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/pagemodifiedauthoremail.html
       */
      ["mt:PageModifiedAuthorEmail"]: {
        /**
         * メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       * ウェブページを最終更新したユーザーの『表示名』をリンク付きで表示します。ユーザー情報の編集画面の『ウェブサイト URL』が入力されていれば URL へのリンクが付加されます。『ウェブサイト URL』が入力されていない場合、リンクは付加されません。もし、『ウェブサイト URL』が入力されておらず、且つ、『電子メール』が入力されている場合は、show_email モディファイアを 1 に設定することでメールアドレスへのリンクが付加されます。両方とも入力されていないときは、リンクは付加されません。ユーザー情報の編集画面の『ウェブサイト URL』に入力されている URL へのリンクを生成します。初期値は 1 です。ユーザーに『ウェブサイト URL』が設定されていない場合、本モディファイアの値を 1 に設定することで、ユーザー情報の編集画面の『電子メール』に入力されているメールアドレスへのリンクを生成します。初期値は 0 です。値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/pagemodifiedauthorlink.html
       */
      ["mt:PageModifiedAuthorLink"]: {
        /**
         * ユーザー情報の編集画面の『ウェブサイト URL』に入力されている URL へのリンクを生成します。初期値は 1 です。
         */
        show_url?: string;

        /**
         * ユーザーに『ウェブサイト URL』が設定されていない場合、本モディファイアの値を 1 に設定することで、ユーザー情報の編集画面の『電子メール』に入力されているメールアドレスへのリンクを生成します。初期値は 0 です。
         */
        show_email?: string;

        /**
         * 値が 1 のときに、リンク先を別ウィンドウで表示するよう target="_blank" を付加します。初期値は 0 です。
         */
        new_window?: string;

        /**
         * メールアドレス部分（:, @, .）を数値文字参照の形式にエンコードして、メールアドレス収集ロボット対策をおこないます。初期値は 0 です。
         */
        spam_protect?: string;
      } & GlobalModifier;

      /**
       * ウェブページを最終更新したユーザーの『ウェブサイト URL』を表示します。『ウェブサイト URL』はユーザー作成時やユーザー情報の編集画面で設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagemodifiedauthorurl.html
       */
      ["mt:PageModifiedAuthorURL"]: {} & GlobalModifier;

      /**
       * ウェブページの最終更新日時を表示します。日付に関係するフォーマットや言語に関するモディファイアを指定して表示をカスタマイズできます。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/pagemodifieddate.html
       */
      ["mt:PageModifiedDate"]: {} & GlobalModifier;

      /**
       * ウェブページの『続き』フィールドに入力した内容を表示します。ページに指定されているフォーマットを適用するか指定します。0 ではフォーマットを適用せず、入力された内容がそのまま出力されます。1 ではフォーマットが適用されます。言語設定を日本語にしているときは、ウェブページの続きから、指定した N 文字分だけ抜き出します。もし、言語設定を英語にしているなら、ウェブページの続きから N 語 (単語) 分だけ抜き出します。注意点は、言語設定を日本語にしている環境で、続きの内容に英語の文章を含むときです。この場合、続きから N 語分抜き出すのではなく、N 文字分抜き出します。どちらの場合も、テキストに含まれている html は除去されたうえで処理されます。
       * @see https://movabletype.jp/documentation/appendices/tags/pagemore.html
       */
      ["mt:PageMore"]: {
        /**
         * ページに指定されているフォーマットを適用するか指定します。0 ではフォーマットを適用せず、入力された内容がそのまま出力されます。1 ではフォーマットが適用されます。
         */
        convert_breaks?: string;

        /**
         * 言語設定を日本語にしているときは、ウェブページの続きから、指定した N 文字分だけ抜き出します。もし、言語設定を英語にしているなら、ウェブページの続きから N 語 (単語) 分だけ抜き出します。注意点は、言語設定を日本語にしている環境で、続きの内容に英語の文章を含むときです。この場合、続きから N 語分抜き出すのではなく、N 文字分抜き出します。どちらの場合も、テキストに含まれている html は除去されたうえで処理されます。
         */
        words?: string;
      } & GlobalModifier;

      /**
       * 次のウェブページの内容を表示するためのブロックタグです。1 を指定すると、現在のウェブページの作者が書いた次のウェブページを呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。1 を指定すると、現在のウェブページが属しているフォルダに含まれる、次のウェブページを呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/pagenext.html
       */
      ["mt:PageNext"]: {
        /**
         * 1 を指定すると、現在のウェブページの作者が書いた次のウェブページを呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
         */
        by_author?: string;

        /**
         * 1 を指定すると、現在のウェブページが属しているフォルダに含まれる、次のウェブページを呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
         */
        by_folder?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 現在のウェブページのアーカイブへの絶対 URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagepermalink.html
       */
      ["mt:PagePermalink"]: {} & GlobalModifier;

      /**
       * ひとつ前のウェブページの内容を表示するためのブロックタグです。1 を指定すると、現在のウェブページの作者が書いた前のウェブページを呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。1 を指定すると、現在のウェブページが属しているフォルダに含まれる、1つ前のウェブページを呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/pageprevious.html
       */
      ["mt:PagePrevious"]: {
        /**
         * 1 を指定すると、現在のウェブページの作者が書いた前のウェブページを呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
         */
        by_author?: string;

        /**
         * 1 を指定すると、現在のウェブページが属しているフォルダに含まれる、1つ前のウェブページを呼び出します。初期値は 0 です。このモディファイアは、Movable Type 6.0.2 で追加されました。
         */
        by_folder?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 検索結果ページの総ページ数だけ繰り返し処理をおこないます。例えば、1 ページに表示する検索結果の件数を 10 件と設定したとき、75 件の検索結果なら 10 件表示するページは 7 ページ、5 件表示するページは 1 ページの合計 8 ページに分割されます。結果、MTPagerBlock ブロックタグで囲まれた内容は、8 回繰り返し処理されることになります。MTPagerBlock タグによるループの中では、以下の特別な変数が利用できます。ループ出力の最初であるとき、真 (1) となります。ループ出力の最後であるとき、真 (1) となります。ループ出力の奇数回目のとき、真 (1) となります。ループ出力の偶数回目のとき、真 (1) となります。ループした回数を格納します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagerblock.html
       */
      ["mt:PagerBlock"]: {} & GlobalModifier & BlockElement;

      /**
       * MTPagerBlock ブロックタグの中で使用し、各検索結果ページへの URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagerlink.html
       */
      ["mt:PagerLink"]: {} & GlobalModifier;

      /**
       * ウェブページの一覧を表示するためのブロックタグです。指定した数のウェブページを表示します。N は 0 より大きな数値にしてください。lastn モディファイアがウェブページの公開日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数だけ表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。値に auto を指定した場合、Movable Type の管理画面内で設定した表示件数、または、日数分で出力します。ウェブページを並び替える対象を指定します。rate, score を指定するときは、namespace モディファイアで対象の名前空間を設定する必要があります。カスタムフィールドの値を利用してソートできます。モディファイアの値を field:customfieldbasename のように設定します。customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。カスタムフィールドの値 foo を利用して出力するウェブページをフィルタリングできます。モディファイアの customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。例えば表示するウェブページを、値が 2 だけのものにしたいときは次サンプルのようにします。また、次のサンプルは、special というベースネームのカスタムフィールド (チェックボックスとする) がチェックされているウェブページを新規作成順に並べ、その先頭から 5 件を表示します。このモディファイアでは、カスタムフィールドに入力した複数の値を組み合わせたフィルタリング (AND, OR, NOT) を利用できません。スコアでソート (sort_by="score") するとき、どのスコア名前空間を使用するかを設定します。お気に入り登録 の登録数でソートしたいときは、community_pack_recommend を設定します。community_pack_recommend 以外の名前空間を指定する場合は、独自にプラグインなどでの拡張が必要になります。指定した数のウェブページを除外して表示します。値に 5 を指定すると、最新 5 件のウェブページを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。このモディファイアでは、ウェブページを特定のフォルダに属するものだけにフィルタリングできます。ウェブページに設定したサブフォルダもフィルタリングの対象になります。指定する値はフォルダ名です。（フォルダのベースネームではありません。）folder="folder_foo"、および folders="folder_foo" のどちらも、挙動は同じです。1 つのフォルダをフィルタリングする際に folders="folder_foo" と記述が可能ですし、複数フォルダのフィルタリングをする際に folder="folder_foo という記述が可能です。 次のサンプルは、ひとつのフォルダ (サンプルでは Featured フォルダ)に含まれるウェブページだけにフィルタリングします。もし、指定したいフォルダが、別の親フォルダに含まれる同じ名前の子フォルダなら、親フォルダといっしょに指定します。または名前に半角スラッシュ / が含まれているフォルダを指定する場合は [] で囲みます。複数のフォルダを組み合わせ、OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets フォルダに含まれるウェブページをフィルタリングします。また、次のサンプルは、Family フォルダ以外のフォルダに含まれるウェブページ (どのフォルダにも含まれないウェブページも含む) にフィルタリングします。値が 1 の場合はフォルダに属さない、トップレベルに作成されたウェブページのみを表示します。値が 0 の場合は no_folder モディファイアを設定しないのと同じです。初期値は 0 です。もし、folder または folders モディファイアで設定したフォルダの、すべての子フォルダに含まれるウェブページにフィルタリングしたいときは、値に 1 を設定します。初期値は 0 です。このモディファイアは、対象がウェブページに設定するタグという点以外は folder, folders モディファイアと同じ働きをします。AND や OR, NOT などの演算子にも使えるので、複雑なフィルタリングにも対応します。ウェブページを特定のユーザーが投稿したものにフィルタリングします。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーが投稿したウェブページにフィルタリングします。このモディファイアは、単一のウェブページにフィルタリングしたいときに使用します。次のサンプルは、ID が 10 のウェブページのみにフィルタリングします。ウェブページに付けられたスコアに基づいた、ウェブページのフィルタリング (score, rate, count) をおこないます。各々は namespace モディファイアが必要です。特定のユーザーがスコアを付けたウェブページだけにフィルタリングできます。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。現在の日に基いて、ウェブページを指定日数内に投稿されたものに限定して出力します。次のサンプルは、現在の日に基いて、10 日以内に投稿されたのウェブページのみにフィルタリングします。最近コメント投稿されたウェブページのリストの出力に使用します。指定するのは件数で、最近コメント投稿された N 件のウェブページのみにフィルタリングします。次のサンプルは、最近コメント投稿された 10 件のウェブページのみにフィルタリングします。このモディファイアを付与すると、その MTPages ブロックタグは、同じテンプレート内で使用した MTPages ブロックタグで出力したウェブページを除いて出力します。初期値は 0 です。次のサンプルは、ひとつめの MTPages で @featured シークレットタグが付けられたウェブページの最新 3 件にフィルタリングを、ふたつめの MTPages ブロックでは、最新 7 件のウェブページにフィルタリングするようにしています。ふたつめの MTPages ブロックには unique モディファイアが付与されていますので、出力する最新 7 件のウェブページの中には、ひとつめの MTPages ブロックで出力した @featured シークレットタグの付いた、最新 3 件のウェブページは含まれません。複数のページに関する情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、ウェブページの ID を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果はつぎのとおりです。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/pages.html
       */
      ["mt:Pages"]: {
        /**
         * 指定した数のウェブページを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * lastn モディファイアがウェブページの公開日順に指定件数表示するのに対し、limit モディファイアは、指定された条件でフィルタリングした結果を指定数だけ表示します。詳しくは、lastn モディファイアと limit モディファイアの違いを参照してください。値に auto を指定した場合、Movable Type の管理画面内で設定した表示件数、または、日数分で出力します。
         */
        limit?: number;

        /**
         * ウェブページを並び替える対象を指定します。rate, score を指定するときは、namespace モディファイアで対象の名前空間を設定する必要があります。カスタムフィールドの値を利用してソートできます。モディファイアの値を field:customfieldbasename のように設定します。customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。
         */
        sort_by?:
          | "authored_on"
          | "author_id"
          | "basename"
          | "created_on"
          | "excerpt"
          | "title"
          | "comment_count"
          | "ping_count"
          | "text"
          | "text_more"
          | "title"
          | "modified_on"
          | "rate"
          | "score"
          | "field:customfieldbasename"
          | "カスタムフィールドの値で並べ替えやフィルタリングする"
          | string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順 (新しいものが下)、descend は降順 (新しいものが上) です。初期値は descend です。
         */
        sort_order?: "ascend" | "descend";

        /**
         * カスタムフィールドの値 foo を利用して出力するウェブページをフィルタリングできます。モディファイアの customfieldbasename には、カスタムフィールド作成時に設定した [ベースネーム] を指定します。例えば表示するウェブページを、値が 2 だけのものにしたいときは次サンプルのようにします。また、次のサンプルは、special というベースネームのカスタムフィールド (チェックボックスとする) がチェックされているウェブページを新規作成順に並べ、その先頭から 5 件を表示します。このモディファイアでは、カスタムフィールドに入力した複数の値を組み合わせたフィルタリング (AND, OR, NOT) を利用できません。
         */
        customfieldbasename?: string;

        /**
         * スコアでソート (sort_by="score") するとき、どのスコア名前空間を使用するかを設定します。お気に入り登録 の登録数でソートしたいときは、community_pack_recommend を設定します。community_pack_recommend 以外の名前空間を指定する場合は、独自にプラグインなどでの拡張が必要になります。
         */
        namespace?: string;

        /**
         * 指定した数のウェブページを除外して表示します。値に 5 を指定すると、最新 5 件のウェブページを除外してリスト表示します。lastn モディファイアと組み合わせて使ってください。
         */
        offset?: number;

        /**
         * このモディファイアでは、ウェブページを特定のフォルダに属するものだけにフィルタリングできます。ウェブページに設定したサブフォルダもフィルタリングの対象になります。指定する値はフォルダ名です。（フォルダのベースネームではありません。）folder="folder_foo"、および folders="folder_foo" のどちらも、挙動は同じです。1 つのフォルダをフィルタリングする際に folders="folder_foo" と記述が可能ですし、複数フォルダのフィルタリングをする際に folder="folder_foo という記述が可能です。 次のサンプルは、ひとつのフォルダ (サンプルでは Featured フォルダ)に含まれるウェブページだけにフィルタリングします。もし、指定したいフォルダが、別の親フォルダに含まれる同じ名前の子フォルダなら、親フォルダといっしょに指定します。または名前に半角スラッシュ / が含まれているフォルダを指定する場合は [] で囲みます。複数のフォルダを組み合わせ、OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets フォルダに含まれるウェブページをフィルタリングします。また、次のサンプルは、Family フォルダ以外のフォルダに含まれるウェブページ (どのフォルダにも含まれないウェブページも含む) にフィルタリングします。
         */
        folder?: string;

        /**
         * このモディファイアでは、ウェブページを特定のフォルダに属するものだけにフィルタリングできます。ウェブページに設定したサブフォルダもフィルタリングの対象になります。指定する値はフォルダ名です。（フォルダのベースネームではありません。）folder="folder_foo"、および folders="folder_foo" のどちらも、挙動は同じです。1 つのフォルダをフィルタリングする際に folders="folder_foo" と記述が可能ですし、複数フォルダのフィルタリングをする際に folder="folder_foo という記述が可能です。 次のサンプルは、ひとつのフォルダ (サンプルでは Featured フォルダ)に含まれるウェブページだけにフィルタリングします。もし、指定したいフォルダが、別の親フォルダに含まれる同じ名前の子フォルダなら、親フォルダといっしょに指定します。または名前に半角スラッシュ / が含まれているフォルダを指定する場合は [] で囲みます。複数のフォルダを組み合わせ、OR, NOT などを使った複雑なフィルタリングもできます。次のサンプルは、Family または Pets フォルダに含まれるウェブページをフィルタリングします。また、次のサンプルは、Family フォルダ以外のフォルダに含まれるウェブページ (どのフォルダにも含まれないウェブページも含む) にフィルタリングします。
         */
        folders?: string;

        /**
         * 値が 1 の場合はフォルダに属さない、トップレベルに作成されたウェブページのみを表示します。値が 0 の場合は no_folder モディファイアを設定しないのと同じです。初期値は 0 です。
         */
        no_folder?: string;

        /**
         * もし、folder または folders モディファイアで設定したフォルダの、すべての子フォルダに含まれるウェブページにフィルタリングしたいときは、値に 1 を設定します。初期値は 0 です。
         */
        include_subfolders?: string;

        /**
         * このモディファイアは、対象がウェブページに設定するタグという点以外は folder, folders モディファイアと同じ働きをします。AND や OR, NOT などの演算子にも使えるので、複雑なフィルタリングにも対応します。
         */
        tag?: string;

        /**
         * このモディファイアは、対象がウェブページに設定するタグという点以外は folder, folders モディファイアと同じ働きをします。AND や OR, NOT などの演算子にも使えるので、複雑なフィルタリングにも対応します。
         */
        tags?: string;

        /**
         * ウェブページを特定のユーザーが投稿したものにフィルタリングします。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。次のサンプルは、ユーザー名が Melody のユーザーが投稿したウェブページにフィルタリングします。
         */
        author?: string;

        /**
         * このモディファイアは、単一のウェブページにフィルタリングしたいときに使用します。次のサンプルは、ID が 10 のウェブページのみにフィルタリングします。
         */
        id?: string;

        /**
         *
         */
        min_score?: string;

        /**
         *
         */
        max_score?: string;

        /**
         *
         */
        min_rate?: string;

        /**
         *
         */
        max_rate?: string;

        /**
         *
         */
        min_count?: string;

        /**
         * ウェブページに付けられたスコアに基づいた、ウェブページのフィルタリング (score, rate, count) をおこないます。各々は namespace モディファイアが必要です。
         */
        max_count?: string;

        /**
         * 特定のユーザーがスコアを付けたウェブページだけにフィルタリングできます。設定するのは、ユーザーのサインインに使用されるアカウント名 (ユーザー名)です。
         */
        scored_by?: string;

        /**
         * 現在の日に基いて、ウェブページを指定日数内に投稿されたものに限定して出力します。次のサンプルは、現在の日に基いて、10 日以内に投稿されたのウェブページのみにフィルタリングします。
         */
        days?: string;

        /**
         * 最近コメント投稿されたウェブページのリストの出力に使用します。指定するのは件数で、最近コメント投稿された N 件のウェブページのみにフィルタリングします。次のサンプルは、最近コメント投稿された 10 件のウェブページのみにフィルタリングします。
         */
        recently_commented_on?: string;

        /**
         * このモディファイアを付与すると、その MTPages ブロックタグは、同じテンプレート内で使用した MTPages ブロックタグで出力したウェブページを除いて出力します。初期値は 0 です。次のサンプルは、ひとつめの MTPages で @featured シークレットタグが付けられたウェブページの最新 3 件にフィルタリングを、ふたつめの MTPages ブロックでは、最新 7 件のウェブページにフィルタリングするようにしています。ふたつめの MTPages ブロックには unique モディファイアが付与されていますので、出力する最新 7 件のウェブページの中には、ひとつめの MTPages ブロックで出力した @featured シークレットタグの付いた、最新 3 件のウェブページは含まれません。
         */
        unique?: string;

        /**
         * 複数のページに関する情報を並べて表示するときの、区切り文字を設定します。次のサンプルでは、ウェブページの ID を出力し、各々を , (カンマ) で区切ります。サンプルの出力結果はつぎのとおりです。
         */
        glue?: string;

        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * MTPages ブロックタグの中で、最後のページのときだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/pagesfooter.html
       */
      ["mt:PagesFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * MTPages ブロックタグの中で、最初のウェブページのときだけ実行するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/pagesheader.html
       */
      ["mt:PagesHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * 特定のウェブページに設定されたタグ一覧のためのブロックタグです。ウェブページ作成画面の『タグ』フィールドに入力したタグを表示します。モディファイア glue を使うと、タグの区切り文字を指定できます。複数のタグを並べて表示するときの、区切り文字を設定します。値に 1 を指定するとプライベートタグ（@ で始まるタグ）を対象に含めます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/pagetags.html
       */
      ["mt:PageTags"]: {
        /**
         * 複数のタグを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;

        /**
         * 値に 1 を指定するとプライベートタグ（@ で始まるタグ）を対象に含めます。初期値は 0 です。
         */
        include_private?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ウェブページのタイトルを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pagetitle.html
       */
      ["mt:PageTitle"]: {} & GlobalModifier;

      /**
       * 最上位のカテゴリから現在のカテゴリまでを繰り返して表示するブロックタグです。glue モディファイアにより、カテゴリをつなげる文字を指定できます。また、exclude_current モディファイアを指定することで、現在のカテゴリを除外できます。複数のカテゴリを並べて表示するときの、区切り文字を設定します。1 を設定すると、カテゴリ一覧から現在のカテゴリを除きます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/parentcategories.html
       */
      ["mt:ParentCategories"]: {
        /**
         * 複数のカテゴリを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;

        /**
         * 1 を設定すると、カテゴリ一覧から現在のカテゴリを除きます。初期値は 0 です。
         */
        exclude_current?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 現在のカテゴリの親カテゴリを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/parentcategory.html
       */
      ["mt:ParentCategory"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のフォルダの親フォルダを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/parentfolder.html
       */
      ["mt:ParentFolder"]: {} & GlobalModifier & BlockElement;

      /**
       * 最上位のフォルダから現在のフォルダまでを繰り返して表示するブロックタグです。glue モディファイアにより、フォルダをつなげる文字を指定できます。また、exclude_current モディファイアを指定することで、現在のフォルダを除外できます。複数のフォルダを並べて表示するときの、区切り文字を設定します。1 を設定すると、フォルダ一覧から現在のフォルダを除きます。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/parentfolders.html
       */
      ["mt:ParentFolders"]: {
        /**
         * 複数のフォルダを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;

        /**
         * 1 を設定すると、フォルダ一覧から現在のフォルダを除きます。初期値は 0 です。
         */
        exclude_current?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 子サイトのコンテクストにおいて、親サイトを取得するブロックタグです。MTBlogParentWebsite と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/parentsite.html
       */
      ["mt:ParentSite"]: {} & GlobalModifier & BlockElement;

      /**
       * Movable Type 5.13 で追加されたパスワードの検証に必要な JavaScript を出力します。例えば以下のようにテンプレートタグを記述した場合、以下の JavaScript が出力されます。検証する <form> の name 属性を指定します。必須です。検証するパスワードの <input> フィールドの name 属性を指定します。必須です。ユーザー名の <input> フィールドの name 属性を指定します。任意です。
       * @see https://movabletype.jp/documentation/appendices/tags/passwordvalidation.html
       */
      ["mt:PasswordValidation"]: {
        /**
         * 検証する <form> の name 属性を指定します。必須です。
         */
        form?: string;

        /**
         * 検証するパスワードの <input> フィールドの name 属性を指定します。必須です。
         */
        password?: string;

        /**
         * ユーザー名の <input> フィールドの name 属性を指定します。任意です。
         */
        username?: string;
      } & GlobalModifier;

      /**
       * Movable Type 5.13 で追加されたパスワードの検証のルールを表示します。例えば、パスワードの最低文字数の設定が 8（初期値）の場合、MTPasswordValidationRule タグの出力内容は 8文字以上 となります。
       * @see https://movabletype.jp/documentation/appendices/tags/passwordvalidationrule.html
       */
      ["mt:PasswordValidationRule"]: {} & GlobalModifier;

      /**
       * トラックバック送信元のブログの名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pingblogname.html
       */
      ["mt:PingBlogName"]: {} & GlobalModifier;

      /**
       * トラックバックを受け付けた日時を表示します。日付に関係するフォーマットや言語に関するモディファイアを指定して表示をカスタマイズできます。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/pingdate.html
       */
      ["mt:PingDate"]: {} & GlobalModifier;

      /**
       * トラックバックを受信した記事の内容を表示するためのブロックタグです。この中では記事に関係するタグを使うことができます。たとえば MTPingEntry ブロックタグで囲まれた MTEntryTitle ファンクションタグは、トラックバックを受信した記事のタイトルを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pingentry.html
       */
      ["mt:PingEntry"]: {} & GlobalModifier & BlockElement;

      /**
       * 受け付けたトラックバックの概要を表示します。通常は送信元の記事やウェブページの『概要』を表示します。『概要』に何も入力されていない場合には、『本文』の内容を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pingexcerpt.html
       */
      ["mt:PingExcerpt"]: {} & GlobalModifier;

      /**
       * トラックバックの ID 番号を表示します。トラックバック ID は、受け付けたトラックバックに自動的に割り振られる ID 番号です。
       * @see https://movabletype.jp/documentation/appendices/tags/pingid.html
       */
      ["mt:PingID"]: {} & GlobalModifier;

      /**
       * トラックバック送信元ホストの IP アドレスを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pingip.html
       */
      ["mt:PingIP"]: {} & GlobalModifier;

      /**
       * トラックバックに付けられたスコアを一定の範囲内でランク付けします。数値が小さい方が頻度が高くなります。スコアを付けるには別途プラグインなどが必要です。
       * @see https://movabletype.jp/documentation/appendices/tags/pingrank.html
       */
      ["mt:PingRank"]: {} & GlobalModifier;

      /**
       * トラックバックの一覧を表示するためのブロックタグです。記事アーカイブで利用すると、その記事に限定したトラックバックの一覧を表示することができます。指定したカテゴリのトラックバックリストを作ります。指定した数のトラックバックを表示します。N は 0 より大きな数値にしてください。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。
       * @see https://movabletype.jp/documentation/appendices/tags/pings.html
       */
      ["mt:Pings"]: {
        /**
         * 指定したカテゴリのトラックバックリストを作ります。
         */
        category?: string;

        /**
         * 指定した数のトラックバックを表示します。N は 0 より大きな数値にしてください。
         */
        lastn?: number;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。
         */
        sort_order?: "ascend" | "descend";
      } & GlobalModifier &
        BlockElement;

      /**
       * トラックバックに付けられたスコアの合計を表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/pingscore.html
       */
      ["mt:PingScore"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * トラックバックに付けられたスコアの平均スコアを表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/pingscoreavg.html
       */
      ["mt:PingScoreAvg"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * トラックバックに付けられたスコア合計回数を表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/pingscorecount.html
       */
      ["mt:PingScoreCount"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * トラックバックに付けられたスコアの中で一番高いスコアを表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/pingscorehigh.html
       */
      ["mt:PingScoreHigh"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * トラックバックに付けられたスコアの中で一番低いスコアを表示します。スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/pingscorelow.html
       */
      ["mt:PingScoreLow"]: {
        /**
         * スコアを追加する仕組みで決められた名前空間を設定します。このモディファイアは必須です。
         */
        namespace?: string;
      } & GlobalModifier;

      /**
       * トラックバックの一覧で最後のときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/pingsfooter.html
       */
      ["mt:PingsFooter"]: {} & GlobalModifier & BlockElement;

      /**
       * トラックバックの一覧で最初のときだけ実行する条件タグです。
       * @see https://movabletype.jp/documentation/appendices/tags/pingsheader.html
       */
      ["mt:PingsHeader"]: {} & GlobalModifier & BlockElement;

      /**
       * 送信したトラックバックの一覧を表示するためのブロックタグです。このタグは、MTEntries ブロックの内側か、記事アーカイブで使います。
       * @see https://movabletype.jp/documentation/appendices/tags/pingssent.html
       */
      ["mt:PingsSent"]: {} & GlobalModifier & BlockElement;

      /**
       * 送信したトラックバックの URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pingssenturl.html
       */
      ["mt:PingsSentURL"]: {} & GlobalModifier;

      /**
       * トラックバック送信元ページのタイトルを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pingtitle.html
       */
      ["mt:PingTitle"]: {} & GlobalModifier;

      /**
       * トラックバック送信元ページの URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/pingurl.html
       */
      ["mt:PingURL"]: {} & GlobalModifier;

      /**
       * 検索結果が複数ページになるとき、現在表示しているページのひとつ前の検索結果ページの URL を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/previouslink.html
       */
      ["mt:PreviousLink"]: {} & GlobalModifier;

      /**
       * Movable Type の製品名を表示します。値が 1 のとき、Movable Type のバージョンを表示します。初期値は 0 です。※ v6.8.6 、v7.9.3 より、環境変数 hideVersion によって強制的に非表示とするようになりました。 version="1" を使用する場合は、合わせて環境変数 hideVersion に 0 を設定してください。
       * @see https://movabletype.jp/documentation/appendices/tags/productname.html
       */
      ["mt:ProductName"]: {
        /**
         * 値が 1 のとき、Movable Type のバージョンを表示します。初期値は 0 です。※ v6.8.6 、v7.9.3 より、環境変数 hideVersion によって強制的に非表示とするようになりました。 version="1" を使用する場合は、合わせて環境変数 hideVersion に 0 を設定してください。
         */
        version?: string;
      } & GlobalModifier;

      /**
       * 登録できるサービス一覧を出力するためのブロックタグです。MTProfileServices ブロックタグの中では、次の変数を利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/profileservice.html
       */
      ["mt:ProfileServices"]: {} & GlobalModifier & BlockElement;

      /**
       * 環境設定ファイル (mt-config.cgi) の PublishCharset に設定した値を表示します。PublishCharset を設定していない場合の初期値は UTF-8 です。
       * @see https://movabletype.jp/documentation/appendices/tags/publishcharset.html
       */
      ["mt:PublishCharset"]: {} & GlobalModifier;

      /**
       * このタグは現在、非推奨です。SignInLink タグを使用してください。コメント投稿者の認証のために、認証をおこなうアカウントを利用するサービスにサインインするためのリンクを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/remotesigninlink.html
       */
      ["mt:RemoteSignInLink"]: {} & GlobalModifier;

      /**
       * このタグは現在、非推奨です。SignOutLink タグを使用してください。コメント認証をおこなうアカウントを利用するサービスからサインアウトするためのリンクを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/remotesignoutlink.html
       */
      ["mt:RemoteSignOutLink"]: {} & GlobalModifier;

      /**
       * スコアが付けられた日付を表示します。Movable Type 7 では、コミュニティ機能が同梱されていないため利用できません。以下のページを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/mtscoredate.html
       */
      ["mt:ScoreDate"]: {} & GlobalModifier;

      /**
       * 検索対象のブログの ID をカンマ区切りで表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/searchincludeblogs.html
       */
      ["mt:SearchIncludeBlogs"]: {} & GlobalModifier;

      /**
       * 環境設定ファイル (mt-config.cgi) で設定されている環境変数 SearchMaxResults の値を出力します。
Movable Type 4.2 よりも前のバージョンでは、MTMaxResults を使用してください。
       * @see https://movabletype.jp/documentation/appendices/tags/searchmaxresults.html
       */
      ["mt:SearchMaxResults"]: {} & GlobalModifier;

      /**
       * 検索の条件に合致した結果の件数を表示します。複数のブログを対象に検索した場合は、対象ブログの検索結果の合計数を表示します。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/searchresultcount.html
       */
      ["mt:SearchResultCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 実行した検索の結果を表示するブロックタグです。このあタグの内側では、記事に関するファンクションタグ MTEntry... を使うことができます。また、MTBlog... を使って、検索された記事が投稿されているブログに関する情報を表示できます。検索フォームで IncludeBlogs=N のようにブログの ID が指定されている場合、指定された ID のブログが検索対象になります。指定されていない場合は Movable Type で管理しているすべてのブログが対象になります。検索フォームで対象ブログを指定していない場合の動作は、環境変数 IncludeBlogs, ExcludeBlogs で設定できます。
       * @see https://movabletype.jp/documentation/appendices/tags/searchresults.html
       */
      ["mt:SearchResults"]: {} & GlobalModifier & BlockElement;

      /**
       * 検索結果の表示に利用します。検索結果のページ内で、リストの一番最後の結果を表示するときに、フッター要素としてブロックタグ内のコンテンツを出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/searchresultsfooter.html
       */
      ["mt:SearchResultsFooter"]: {} & GlobalModifier;

      /**
       * 検索結果の表示に利用します。検索結果のページ内で、リストの一番最初の結果を表示するときに、ヘッダー要素としてブロックタグ内のコンテンツを出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/searchresultsheader.html
       */
      ["mt:SearchResultsHeader"]: {} & GlobalModifier;

      /**
       * ブログの検索用 CGI スクリプトのファイル名を表示します。MTCGIPath タグと組み合わせることで、スクリプトにアクセスする URL を生成できます。
       * @see https://movabletype.jp/documentation/appendices/tags/searchscript.html
       */
      ["mt:SearchScript"]: {} & GlobalModifier;

      /**
       * 検索時に入力したキーワード (文字列) を検索結果画面で表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/searchstring.html
       */
      ["mt:SearchString"]: {} & GlobalModifier;

      /**
       * 検索結果の表示に使用されたテンプレートが登録されたブログの ID を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/searchtemplateblogid.html
       */
      ["mt:SearchTemplateBlogID"]: {} & GlobalModifier;

      /**
       * 公開しているブログの検索で利用したテンプレートの種類（識別子）を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/searchtemplateid.html
       */
      ["mt:SearchTemplateID"]: {} & GlobalModifier;

      /**
       * 挟み込んだブロックの内容をキャッシュします。このブロックタグは管理画面で使用されます。キャッシュのキー名を設定します。キャッシュする期間を設定します (秒単位) 。以下のモディファイアは主に管理画面で使用します。1 を設定すると、キャッシュの有効範囲をブログ単位にします。1 を設定すると、キャッシュの有効範囲をユーザー単位にします。キャッシュ値を HTML で囲みたい場合に使用します。このモディファイアを設定した場合、あわせて id モディファイアも設定することができます (省略可)。id モディファイアには、html_tag モディファイアで設定した HTML の要素に付与する id 属性の値を設定します。html_tag モディファイアで設定した HTML の要素に付与する id 属性の値を設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/section.html
       */
      ["mt:Section"]: {
        /**
         * キャッシュのキー名を設定します。
         */
        cache_prefix?: string;

        /**
         * キャッシュする期間を設定します (秒単位) 。
         */
        period?: string;

        /**
         * 1 を設定すると、キャッシュの有効範囲をブログ単位にします。
         */
        by_blog?: string;

        /**
         * 1 を設定すると、キャッシュの有効範囲をユーザー単位にします。
         */
        by_user?: string;

        /**
         * キャッシュ値を HTML で囲みたい場合に使用します。このモディファイアを設定した場合、あわせて id モディファイアも設定することができます (省略可)。id モディファイアには、html_tag モディファイアで設定した HTML の要素に付与する id 属性の値を設定します。
         */
        html_tag?: string;

        /**
         * html_tag モディファイアで設定した HTML の要素に付与する id 属性の値を設定します。
         */
        id?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * キー（変数名）と値のペアをまとめてハッシュ変数に設定するためのブロックタグです。ハッシュ変数の名前を設定します。このモディファイアは必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/sethashvar.html
       */
      ["mt:SetHashVar"]: {
        /**
         *
         */
        name?: string;

        /**
         * ハッシュ変数の名前を設定します。このモディファイアは必須です。
         */
        var?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 変数を定義して値を設定します。変数を呼び出すときは、MTGetVar, MTVar ファンクションタグを利用します。また設定した値は $name_foo として、モディファイアの値としても利用することができます。変数の名前に、ハイフンを利用すると、$name-foo のような $ を利用したモディファイアを正常に評価できません。このため、ハイフンの利用はお控えください。変数の名前を指定します。このモディファイアは必須です。変数の値を指定します。値に 1 を設定すると、変数に代入されている値の後に、値を連結します。初期値は 0 です。値に 1 を設定すると、変数に代入されている値の前に、値を連結します。初期値は 0 です。op モディファイアに関しては、テンプレートタグで利用できる演算関数を参照ください。配列のインデックス (添え字) を指定します。配列変数が存在しない場合は指定された名前の配列変数を新しく作成します。このとき index に 0 以外を指定すると、sparse array を作成します。このタグは以下のようにも書くことができます。名前[添え字] という記述が index モディファイアの代わりです。ハッシュのキーを指定します。ハッシュ変数が存在しない場合は指定された名前のハッシュ変数を新しく作成して、キーと値のペアを設定します。このタグは以下のようにも書くことができます。名前{キー} という記述が key モディファイアの代わりです。配列やハッシュ変数に値を設定するときに実行する関数の名前を指定します。利用できる名前は以下のとおりです。このタグは以下のようにも書くことができます。関数名(名前) という記述が function モディファイアの代わりです。
       * @see https://movabletype.jp/documentation/appendices/tags/setvar.html
       */
      ["mt:SetVar"]: {
        /**
         * 変数の名前を指定します。このモディファイアは必須です。
         */
        name?: string;

        /**
         * 変数の値を指定します。
         */
        value?: string;

        /**
         * 値に 1 を設定すると、変数に代入されている値の後に、値を連結します。初期値は 0 です。
         */
        append?: string;

        /**
         * 値に 1 を設定すると、変数に代入されている値の前に、値を連結します。初期値は 0 です。
         */
        prepend?: string;
      } & GlobalModifier;

      /**
       * このブロックタグで囲んだ内容を値にした変数を設定します。このタグの中ではテンプレートタグが利用できます。変数を呼び出すときは、MTGetVar, MTVar ファンクションタグを使います。MTSetVarTemplate ブロックタグとの違いは、囲んだ内容が処理された結果が値となるか、囲んだ内容が処理されずテンプレートのまま値となるかです。MTSetVarBlock ブロックタグでは囲んだ内容が処理された結果が値となります。設定した値は $name_foo として、モディファイアの値としても利用することができます。変数の名前にハイフンを利用すると、$name-foo のような $ を利用したモディファイアを正常に評価できません。このため、ハイフンの利用はお控えください。値を代入する変数の名前を指定します。このモディファイアは必須です。値に 1 を設定すると、変数に代入されている値の後に、値を連結します。値に 1 を設定すると、変数に代入されている値の前に、値を連結します。op モディファイアに関しては、ドキュメント: テンプレートタグで利用できる演算関数を参照ください。配列のインデックス(添え字)を指定します。配列変数が存在しない場合は指定された名前の配列変数を新しく作成します。このとき index に 0 以外を指定すると、sparse array を作成します。このタグは以下のようにも書くことができます。配列変数名[添え字] という記述が index モディファイアの代わりです。ハッシュのキーを指定します。ハッシュ変数が存在しない場合は指定された名前のハッシュ変数を新しく作成して、キーと値のペアを設定します。このタグは以下のようにも書くことができます。ハッシュ変数名{キー} という記述が key モディファイアの代わりです。配列やハッシュ変数に値を設定するときに実行する関数の名前を指定します。利用できる名前は以下のとおりです。このタグは以下のようにも書くことができます。関数名(配列変数名) という記述が function モディファイアの代わりです。
       * @see https://movabletype.jp/documentation/appendices/tags/setvarblock.html
       */
      ["mt:SetVarBlock"]: {
        /**
         *
         */
        name?: string;

        /**
         * 値を代入する変数の名前を指定します。このモディファイアは必須です。
         */
        var?: string;

        /**
         * 値に 1 を設定すると、変数に代入されている値の後に、値を連結します。
         */
        append?: string;

        /**
         * 値に 1 を設定すると、変数に代入されている値の前に、値を連結します。
         */
        prepend?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 変数の名前とその値をまとめて設定できるブロックタグです。MTSetVar ファンクションタグでは、name モディファイアに変数の名前を、value モディファイアに変数に設定する値を入力します。MTSetVars タグではひとつの変数の設定を、変数の名前=変数に設定する値 というフォーマットでおこないます。また、MTSetVarBlock ブロックタグのように、テンプレートタグを使用することができます。変数の名前にハイフンを利用すると、$name-foo のような $ を利用したモディファイアを正常に評価できません。このため、ハイフンの利用はお控えください。
       * @see https://movabletype.jp/documentation/appendices/tags/setvars.html
       */
      ["mt:SetVars"]: {} & GlobalModifier & BlockElement;

      /**
       * このブロックタグで囲んだ内容を値にした変数を設定します。変数を呼び出すときは、MTGetVar, MTVar ファンクションタグを使います。MTSetVarBlock ブロックタグとの違いは、囲んだ内容が処理された結果が値となるか、囲んだ内容が処理されずテンプレートのまま値となるかです。MTSetVarTemplate ブロックタグでは囲んだ内容が処理されずテンプレートがそのまま値となり、MTGetVar, MTVar ファンクションタグで呼び出されたテンプレートで処理をおこないます。このテンプレートタグは主に管理画面で利用されます。設定した値は $name_foo として、モディファイアの値としても利用することができます。変数の名前にハイフンを利用すると、$name-foo のような $ を利用したモディファイアを正常に評価できません。このため、ハイフンの利用はお控えください。値を代入する変数の名前を指定します。このモディファイアは必須です。値に 1 を設定すると、変数に代入されている値の後に、値を連結します。値に 1 を設定すると、変数に代入されている値の前に、値を連結します。配列のインデックス(添え字)を指定します。配列変数が存在しない場合は指定された名前の配列変数を新しく作成します。このとき index に 0 以外を指定すると、sparse array を作成します。このタグは以下のようにも書くことができます。配列変数名[添え字] という記述が index モディファイアの代わりです。ハッシュのキーを指定します。ハッシュ変数が存在しない場合は指定された名前のハッシュ変数を新しく作成して、キーと値のペアを設定します。このタグは以下のようにも書くことができます。ハッシュ変数名{キー} という記述が key モディファイアの代わりです。配列やハッシュ変数に値を設定するときに実行する関数の名前を指定します。利用できる名前は以下のとおりです。このタグは以下のようにも書くことができます。関数名(配列変数名) という記述が function モディファイアの代わりです。
       * @see https://movabletype.jp/documentation/appendices/tags/setvartemplate.html
       */
      ["mt:SetVarTemplate"]: {
        /**
         *
         */
        name?: string;

        /**
         * 値を代入する変数の名前を指定します。このモディファイアは必須です。
         */
        var?: string;

        /**
         * 値に 1 を設定すると、変数に代入されている値の後に、値を連結します。
         */
        append?: string;

        /**
         * 値に 1 を設定すると、変数に代入されている値の前に、値を連結します。
         */
        prepend?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * コメント投稿者の認証をおこなうために、サインイン用のリンクを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/signinlink.html
       */
      ["mt:SigninLink"]: {} & GlobalModifier;

      /**
       * TypeKey（TypePad Connect）のサービス終了にともない、現在このタグは利用できません。コメント認証に使用するサービスにサインインするための URL を表示します。環境設定ファイル (mt-config.cgi) の環境変数 SignOnURL に設定した値が表示されます。未設定の場合は、初期値の https://www.typekey.com/t/typekey/login? が使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/signonurl.html
       */
      ["mt:SignOnURL"]: {} & GlobalModifier;

      /**
       * コメント投稿者がサインアウトするためのリンクを表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/signoutlink.html
       */
      ["mt:SignOutLink"]: {} & GlobalModifier;

      /**
       * サイトに設定した『アーカイブ URL』を表示します。『アーカイブ URL』を設定していない場合は『サイト URL』を表示します。URL の末尾には必ず / がつきます。MTBlogArchiveURL と互換があります。サイトの ID を指定します。このモディファイアを指定した場合、指定した ID のサイトのアーカイブ URL を出力します。次のサンプルは、ID が 10 のサイトのアーカイブ URL を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/sitearchiveurl.html
       */
      ["mt:SiteArchiveURL"]: {
        /**
         * サイトの ID を指定します。このモディファイアを指定した場合、指定した ID のサイトのアーカイブ URL を出力します。次のサンプルは、ID が 10 のサイトのアーカイブ URL を出力します。
         */
        id?: string;
      } & GlobalModifier;

      /**
       * サイトの総カテゴリ数を表示します。カテゴリセット内のカテゴリは数えません。MTBlogCategoryCount と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitecategorycount.html
       */
      ["mt:SiteCategoryCount"]: {
        /**
         *
         */
        singular?: string;

        /**
         *
         */
        plural?: string;

        /**
         *
         */
        none?: string;
      } & GlobalModifier;

      /**
       * サイトの設定で選択したクリエイティブ・コモンズ・ライセンスのバナー画像の URL を表示します。MTBlogCCLicenseImage と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitecclicenseimage.html
       */
      ["mt:SiteCCLicenseImage"]: {} & GlobalModifier;

      /**
       * サイトの設定で選択したクリエイティブ・コモンズ・ライセンスに関する内容が書かれているサイトの URL を表示します。MTBlogCCLicenseURL と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitecclicenseurl.html
       */
      ["mt:SiteCCLicenseURL"]: {} & GlobalModifier;

      /**
       * サイトの総コメント数を表示します。MTBlogCommentCount と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitecommentcount.html
       */
      ["mt:SiteCommentCount"]: {
        /**
         *
         */
        singular?: string;

        /**
         *
         */
        plural?: string;

        /**
         *
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 特定のサイトで公開されているコンテンツデータの数を出力します。content_type モディファイアの指定が必須です。
       * @see https://movabletype.jp/documentation/appendices/tags/sitecontentcount.html
       */
      ["mt:SiteContentCount"]: {
        /**
         *
         */
        singular?: string;

        /**
         *
         */
        plural?: string;

        /**
         *
         */
        none?: string;
      } & GlobalModifier;

      /**
       * サイトの「日付の言語」で設定した言語名を表示します。MTBlogDateLanguage と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitedatelanguage.html
       */
      ["mt:SiteDateLanguage"]: {
        /**
         *
         */
        locale?: string;

        /**
         *
         */
        ietf?: string;
      } & GlobalModifier;

      /**
       * サイトに設定した『説明』の内容を表示します。MTBlogDescription と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitedescription.html
       */
      ["mt:SiteDescription"]: {} & GlobalModifier;

      /**
       * サイトで公開されている記事数を表示します。MTBlogEntryCount と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/siteentrycount.html
       */
      ["mt:SiteEntryCount"]: {
        /**
         *
         */
        singular?: string;

        /**
         *
         */
        plural?: string;

        /**
         *
         */
        none?: string;
      } & GlobalModifier;

      /**
       * サイトの設定で指定したアーカイブの拡張子をピリオドを付けて表示します。MTBlogFileExtension と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitefileextension.html
       */
      ["mt:SiteFileExtension"]: {} & GlobalModifier;

      /**
       * 親サイトのコンテキストの中で、そのサイトの配下に子サイトを持っているかを判別します。サイトがひとつ以上の子サイトを持っているときは true (真) となり、囲んだ内容を処理します。ひとつも子サイトを持っていないときは false (偽) となります。このタグの中では MTElse ブロックタグを使用できます。MTWebsiteHasBlog と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitehaschildsite.html
       */
      ["mt:SiteHasChildSite"]: {} & GlobalModifier & BlockElement;

      /**
       * サイトのサイト URL からホスト名を取得し表示します。 MTBlogHost と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitehost.html
       */
      ["mt:SiteHost"]: {} & GlobalModifier;

      /**
       * サイトの ID 番号を表示します。MTBlogID と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/siteid.html
       */
      ["mt:SiteID"]: {} & GlobalModifier;

      /**
       * サイトでコメントを受け付けるよう設定していて、認証方式の設定において匿名ユーザーからコメントを受け付けるよう設定している場合に、このタグで囲んだ部分を実行します。MTBlogIfCommentsOpen と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/siteifcommentsopen.html
       */
      ["mt:SiteIfCommentsOpen"]: {} & GlobalModifier & BlockElement;

      /**
       * サイトに設定した「使用言語」を表示します。MTBlogLanguage と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitelanguage.html
       */
      ["mt:SiteLanguage"]: {
        /**
         *
         */
        locale?: string;

        /**
         *
         */
        ietf?: string;
      } & GlobalModifier;

      /**
       * サイトの名前を表示します。MTBlogName と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitename.html
       */
      ["mt:SiteName"]: {} & GlobalModifier;

      /**
       * サイトで公開されているウェブページ数を表示します。MTBlogPageCount と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitepagecount.html
       */
      ["mt:SitePageCount"]: {
        /**
         *
         */
        singular?: string;

        /**
         *
         */
        plural?: string;

        /**
         *
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 子サイトのコンテクストにおいて、親サイトを取得するブロックタグです。MTBlogParentWebsite と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/siteparentsite.html
       */
      ["mt:SiteParentSite"]: {} & GlobalModifier;

      /**
       * サイトの管理画面で設定した『サイトパス』の内容を表示します。サイトパスは、ウェブブラウザで表示する サイト URL ではなくサーバールートからウェブサイトディレクトリまでのパスを表示します。パスの末尾には必ずスラッシュ (/) がつきます。MTBlogSitePath と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitepath.html
       */
      ["mt:SitePath"]: {} & GlobalModifier;

      /**
       * 特定のサイトで公開されているトラックバック数を表示します。迷惑トラックバックや未公開のトラックバックの数は含まれません。MTBlogPingCount と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitepingcount.html
       */
      ["mt:SitePingCount"]: {
        /**
         *
         */
        singular?: string;

        /**
         *
         */
        plural?: string;

        /**
         *
         */
        none?: string;
      } & GlobalModifier;

      /**
       * サイトの URL を相対 URL で表示します。例えば、URL が http://example.com/news/ の場合は /news/ を表示します。MTBlogRelativeURL と互換があります。サイトの ID を指定します。このモディファイアを指定した場合、指定した ID のサイトの相対 URL を出力します。次のサンプルは、ID が 10 のサイトの相対 URL を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/siterelativeurl.html
       */
      ["mt:SiteRelativeURL"]: {
        /**
         * サイトの ID を指定します。このモディファイアを指定した場合、指定した ID のサイトの相対 URL を出力します。次のサンプルは、ID が 10 のサイトの相対 URL を出力します。
         */
        id?: string;
      } & GlobalModifier;

      /**
       * サイトの一覧を表示するためのブロックタグです。出力には子サイトは含まれません。子サイトを出力する場合は MTChildSites タグをご利用ください。MTWebsites と互換があります。mode モディファイアを指定しないか、 loop を指定した場合は、ブロック内で以下の変数が利用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/sites.html
       */
      ["mt:Sites"]: {} & GlobalModifier & BlockElement;

      /**
       * MTSites ブロックタグの中で、現在のサイトが再構築を行なっているサイトと同一である場合にのみ、ブロックの中が処理されます。MTMultiBlogIfLocalBlog と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitesiflocalsite.html
       */
      ["mt:SitesIfLocalSite"]: {} & GlobalModifier & BlockElement;

      /**
       * MTSites ブロックタグで定義している中で、一時的に再構築を行なっているサイトの内容を表示したい場合に利用します。MTMultiBlogLocalBlog と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/siteslocalsite.html
       */
      ["mt:SitesLocalSite"]: {} & GlobalModifier & BlockElement;

      /**
       * サイトに適用されているテーマの識別子を表示します。識別子にアンダースコアが含まれる場合はハイフンに置換されます。例えば、「クラシックウェブサイト」テーマ (classic_website) を適用している場合は classic-website が表示されます。MTBlogThemeID と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitethemeid.html
       */
      ["mt:SiteThemeID"]: {} & GlobalModifier;

      /**
       * サイトの設定で指定した時間帯 (タイムゾーン) を表示します。協定世界時 (UTC、世界標準時) からの時差が表示されます。MTBlogTimezone と互換があります。
       * @see https://movabletype.jp/documentation/appendices/tags/sitetimezone.html
       */
      ["mt:SiteTimezone"]: {
        /**
         *
         */
        no_colon?: string;
      } & GlobalModifier;

      /**
       * サイトの URL を絶対 URL で表示します。MTBlogURL と互換があります。サイトの ID を指定します。このモディファイアを指定した場合、指定した ID のサイトの絶対 URL を出力します。次のサンプルは、ID が 10 のサイトの絶対 URL を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/siteurl.html
       */
      ["mt:SiteURL"]: {
        /**
         * サイトの ID を指定します。このモディファイアを指定した場合、指定した ID のサイトの絶対 URL を出力します。次のサンプルは、ID が 10 のサイトの絶対 URL を出力します。
         */
        id?: string;
      } & GlobalModifier;

      /**
       * Movable Type の標準プラグイン Markdown (+ Smarty Pants) のバージョンナンバーを表示します。引用符 ("sample": ダブルクォート, 'sample': シングルクォート) をカーリークォート (“sample”: ダブルクォート, ‘sample’: シングルクォート) に変換し、数値文字参照で出力します。連続したバッククォート (``) をカーリークォート (“) に変換し、数値文字参照で出力します。ダッシュ (-) を 2 度連続した場合は en ダッシュ (–)に、3 度連続した場合は em ダッシュ (—) に変換し、数値文字参照で出力します。3 度続けたピリオド (...: 3 度続く) を 省略記号 (…) に変換し、数値文字参照で出力します。変換される文字列が HTML の script, pre, code, kbd 要素の中にある場合、変換処理はおこなわれません。
       * @see https://movabletype.jp/documentation/appendices/tags/smartypantsversion.html
       */
      ["mt:SmartyPantsVersion"]: {} & GlobalModifier;

      /**
       * mt-static (管理画面用の CSS ファイルなどの静的ファイルが格納されているディレクトリ) の場所を絶対パスで表示します。環境設定ファイル (mt-config.cgi) の環境変数 StaticFilePath の値が表示されます。
       * @see https://movabletype.jp/documentation/appendices/tags/staticfilepath.html
       */
      ["mt:StaticFilePath"]: {} & GlobalModifier;

      /**
       * mt-static (管理画面用の CSS ファイルなどの静的ファイルが格納されているディレクトリ) の場所を絶対 URL で表示します。環境設定ファイル (mt-config.cgi) の環境変数 StaticWebPath の値が表示されます。
       * @see https://movabletype.jp/documentation/appendices/tags/staticwebpath.html
       */
      ["mt:StaticWebPath"]: {} & GlobalModifier;

      /**
       * ウェブサイトやブログの管理画面で設定したアクセス解析用のトラッキングコードを生成します。初期状態では Google Analytics のトラッキングコードを出力します。もしアクセス解析の連携がおこなわれていない場合は何も出力しません。出力するトラッキングコードの形式を gtag.js に変更します。Movable Type 7 r.4706 / Movable Type 6.7.6 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/statssnippet.html
       */
      ["mt:StatsSnippet"]: {
        /**
         * 出力するトラッキングコードの形式を gtag.js に変更します。Movable Type 7 r.4706 / Movable Type 6.7.6 で追加されました。
         */
        gtag?: string;
      } & GlobalModifier;

      /**
       * 現在のカテゴリの子カテゴリを階層化して一覧表示するためのブロックタグです。MTSubCatsRecurse ファンクションタグと組み合わせることで子孫カテゴリを表示します。値に 1 を指定すると、現在のカテゴリを含めて表示します。初期値は 0 です。値に 1 を指定すると、最上位のトップレベルカテゴリの一覧を表示します。MTTopLevelCategories ブロックタグと同様の挙動となります。初期値は 0 です。特定のカテゴリの子カテゴリを表示したいときに使用します。同じ名前のカテゴリが別の階層にある場合は、親カテゴリ/子カテゴリと記述して、異なるカテゴリを指定します。カテゴリ名のなかに / が含まれる場合は、[] で囲みます。Movable Type 5.1 で追加されました。管理画面で並び替えた順番でカテゴリの一覧を出力します。初期値は user_custom です。user_custom 以外にも、次の値を指定することができます。この場合、管理画面で設定した並び順を無視し、指定した値で並び替えます。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。このブロックタグ内で、MTCategoryPrevious タグ、および MTCategoryNext タグを利用した場合は、sort_by モディファイアで指定した順番で、前と次のカテゴリを表示します。Perl のメソッド名を使って並び替えます。
       * @see https://movabletype.jp/documentation/appendices/tags/subcategories.html
       */
      ["mt:SubCategories"]: {
        /**
         * 値に 1 を指定すると、現在のカテゴリを含めて表示します。初期値は 0 です。
         */
        include_current?: string;

        /**
         * 値に 1 を指定すると、最上位のトップレベルカテゴリの一覧を表示します。MTTopLevelCategories ブロックタグと同様の挙動となります。初期値は 0 です。
         */
        top?: string;

        /**
         * 特定のカテゴリの子カテゴリを表示したいときに使用します。同じ名前のカテゴリが別の階層にある場合は、親カテゴリ/子カテゴリと記述して、異なるカテゴリを指定します。カテゴリ名のなかに / が含まれる場合は、[] で囲みます。
         */
        category?: string;

        /**
         * Movable Type 5.1 で追加されました。管理画面で並び替えた順番でカテゴリの一覧を出力します。初期値は user_custom です。user_custom 以外にも、次の値を指定することができます。この場合、管理画面で設定した並び順を無視し、指定した値で並び替えます。
         */
        sort_by?:
          | "label"
          | "description"
          | "basename"
          | "created_on"
          | "modified_on"
          | "user_custom"
          | string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。このブロックタグ内で、MTCategoryPrevious タグ、および MTCategoryNext タグを利用した場合は、sort_by モディファイアで指定した順番で、前と次のカテゴリを表示します。
         */
        sort_order?: "ascend" | "descend";

        /**
         * Perl のメソッド名を使って並び替えます。
         */
        sort_method?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 最上位のトップレベルカテゴリから現在のカテゴリまでのディレクトリパスを表示します。パスは各カテゴリの『出力ファイル/フォルダ名』（ベースネーム）をもとに生成されます。例えば、foo というカテゴリに bar という子カテゴリがある場合は foo/bar と表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/subcategorypath.html
       */
      ["mt:SubCategoryPath"]: {} & GlobalModifier;

      /**
       * カテゴリ一覧を出力するループの中で最初のときだけ実行する条件タグです。サブカテゴリを含む一覧を <ul> タグで階層化するときなどに、MTSubCatIsLast タグと組み合わせて利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/subcatisfirst.html
       */
      ["mt:SubCatIsFirst"]: {} & GlobalModifier & BlockElement;

      /**
       * カテゴリ一覧を出力するループの中で最後のときだけ実行する条件タグです。サブカテゴリを含む一覧を <ul> タグで階層化するときなどに、MTSubCatIsFirst タグと組み合わせて利用します。
       * @see https://movabletype.jp/documentation/appendices/tags/subcatislast.html
       */
      ["mt:SubCatIsLast"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のカテゴリに属するカテゴリの MTSubCategories ブロックを再帰的に表示します。max_depth モディファイアで再帰的に表示する深さを指定できます。max_depth="1" と指定すると、現在のカテゴリの直下の子カテゴリまでを表示します。展開する繰り返し数を指定します。現在のカテゴリからどの階層までを対象とするか制限できます。例えば、直下の子カテゴリのみ展開するときは max_depth="1"、孫カテゴリまで展開するときは max_depth="2" を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/subcatsrecurse.html
       */
      ["mt:SubCatsRecurse"]: {
        /**
         * 展開する繰り返し数を指定します。現在のカテゴリからどの階層までを対象とするか制限できます。例えば、直下の子カテゴリのみ展開するときは max_depth="1"、孫カテゴリまで展開するときは max_depth="2" を指定します。
         */
        max_depth?: string;
      } & GlobalModifier;

      /**
       * 現在のフォルダに属する子フォルダの MTSubFolders ブロックを再帰的に表示します。max_depth モディファイアで再帰的に表示する深さを指定できます。max_depth="1" と指定すると現在のフォルダの直下の子フォルダまでを表示します。展開する繰り返し数を指定します。現在のフォルダからどの階層までを対象とするか制限できます。例えば、直下のサブフォルダのみ展開するときは max_depth="1"、孫フォルダまで展開するときは max_depth="2" を指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/subfolderrecurse.html
       */
      ["mt:SubFolderRecurse"]: {
        /**
         * 展開する繰り返し数を指定します。現在のフォルダからどの階層までを対象とするか制限できます。例えば、直下のサブフォルダのみ展開するときは max_depth="1"、孫フォルダまで展開するときは max_depth="2" を指定します。
         */
        max_depth?: string;
      } & GlobalModifier;

      /**
       * 現在のフォルダの子フォルダを階層化して一覧表示するブロックタグです。MTSubFolderRecurse ファンクションタグと組み合わせることで子孫フォルダを表示します。値を 1 に指定すると、現在のフォルダを含めて表示します。初期値は 0 です。値に 1 を指定すると、最上位のトップレベルフォルダの一覧を表示します。MTTopLevelFolders ブロックタグと同様の挙動となります。初期値は 0 です。Movable Type 5.1 で追加されました。初期値は user_custom です。管理画面で並び替えた順番で、フォルダの一覧を出力します。例えば、以下のコードはフォルダを並び順で階層表示し、各フォルダのウェブページを一覧表示します。user_custom 以外にも次の値を指定することができます。この場合、管理画面で設定した並び順を無視し、指定した値で並び替えます。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。このブロックタグ内で、MTFolderNext タグ、および MTFolderPrevious タグを利用した場合は、sort_by で指定した順番で、前と次のフォルダを表示します。Perl のメソッド名を使って並び替えます。
       * @see https://movabletype.jp/documentation/appendices/tags/subfolders.html
       */
      ["mt:SubFolders"]: {
        /**
         * 値を 1 に指定すると、現在のフォルダを含めて表示します。初期値は 0 です。
         */
        include_current?: string;

        /**
         * 値に 1 を指定すると、最上位のトップレベルフォルダの一覧を表示します。MTTopLevelFolders ブロックタグと同様の挙動となります。初期値は 0 です。
         */
        top?: string;

        /**
         * Movable Type 5.1 で追加されました。初期値は user_custom です。管理画面で並び替えた順番で、フォルダの一覧を出力します。例えば、以下のコードはフォルダを並び順で階層表示し、各フォルダのウェブページを一覧表示します。user_custom 以外にも次の値を指定することができます。この場合、管理画面で設定した並び順を無視し、指定した値で並び替えます。
         */
        sort_by?:
          | "label"
          | "description"
          | "basename"
          | "created_on"
          | "modified_on"
          | "user_custom"
          | string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。このブロックタグ内で、MTFolderNext タグ、および MTFolderPrevious タグを利用した場合は、sort_by で指定した順番で、前と次のフォルダを表示します。
         */
        sort_order?: "ascend" | "descend";

        /**
         * Perl のメソッド名を使って並び替えます。
         */
        sort_method?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 環境変数 SupportDirectoryURL で指定された、サポートディレクトリの URL を表示します。サポートディレクトリには、Movable Type ユーザーのプロフィール画像やブログのテーマで使用している画像などのファイルが保存されます。SupportDirectoryURL の指定が無い場合は、環境変数 StaticWebPath （初期値は 環境変数 CGIPath に /mt_static/ を付与した値）に /support/ を付与した値を表示します。with_domain="1" を指定すると、http(s):// から始まる URL を出力します。初期状態は "0" です。Movable Type 6.0 以降から利用可能です。
       * @see https://movabletype.jp/documentation/appendices/tags/supportdirectoryurl.html
       */
      ["mt:SupportDirectoryURL"]: {
        /**
         * with_domain="1" を指定すると、http(s):// から始まる URL を出力します。初期状態は "0" です。Movable Type 6.0 以降から利用可能です。
         */
        with_domain?: string;
      } & GlobalModifier;

      /**
       * 特定のブログ内で、指定したタグが設定された記事・ウェブページの数を表示します。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/tagcount.html
       */
      ["mt:TagCount"]: {
        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * 記事・ウェブページに設定したタグの ID 番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/tagid.html
       */
      ["mt:TagID"]: {} & GlobalModifier;

      /**
       * 特定のタグの名前を表示します。機能は MTTagName と同じです (エイリアス)。タグに半角空白が含まれる場合、タグの名前の前後にダブルクォーテーションを付加します。初期値は 0 です。タグの名前から、記号等を削除します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/taglabel.html
       */
      ["mt:TagLabel"]: {
        /**
         * タグに半角空白が含まれる場合、タグの名前の前後にダブルクォーテーションを付加します。初期値は 0 です。
         */
        quote?: string;

        /**
         * タグの名前から、記号等を削除します。初期値は 0 です。
         */
        normalize?: string;
      } & GlobalModifier;

      /**
       * 特定のタグの名前を表示します。タグに半角空白が含まれる場合、タグの名前の前後にダブルクォーテーションを付加します。初期値は 0 です。タグの名前から、記号等を削除します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/tagname.html
       */
      ["mt:TagName"]: {
        /**
         * タグに半角空白が含まれる場合、タグの名前の前後にダブルクォーテーションを付加します。初期値は 0 です。
         */
        quote?: string;

        /**
         * タグの名前から、記号等を削除します。初期値は 0 です。
         */
        normalize?: string;
      } & GlobalModifier;

      /**
       * 特定のタグの利用頻度を表示します。数値が小さい方が頻度が高くなります。このファンクションタグは、タグクラウドを表示する際に利用します。頻度の基準値を設定します。初期値は 6 です。
       * @see https://movabletype.jp/documentation/appendices/tags/tagrank.html
       */
      ["mt:TagRank"]: {
        /**
         * 頻度の基準値を設定します。初期値は 6 です。
         */
        max?: string;
      } & GlobalModifier;

      /**
       * 記事・ウェブページ・コンテンツタイプに設定されたタグを一覧表示するためのブロックタグです。
          どのオブジェクトのタグを参照するかを設定できます。何も指定しない場合は、entry (記事) に付けられたタグを参照します。コンテンツタイプの ID、ユニーク ID、コンテンツタイプ名のいずれかを指定します。type モディファイアの値に content_type を指定したうえで、特定のコンテンツタイプのタグのみ一覧表示する場合に使用します。このモディファイアを指定しない場合は、サイトに作成されているすべてのコンテンツタイプのタグが対象になります。また、type モディファイアが未指定か、type モディファイアの値が content_type 以外の値を設定した状態でこのモディファイアを指定すると再構築エラーになります。複数のタグを並べて表示するときの、区切り文字を設定します。タグを並び替える対象を指定します。rank は利用頻度（記事などのデータに設定された数）、name は名前順です。初期値は name です。並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。表示させるタグの上限数を指定します。正の整数を指定できます。デフォルト値はありません。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。よく付けられているタグを N 件分表示します。top モディファイアの値を 20 と設定した場合、以下の設定と同じ働きをします。
       * @see https://movabletype.jp/documentation/appendices/tags/tags.html
       */
      ["mt:Tags"]: {
        /**
         * どのオブジェクトのタグを参照するかを設定できます。何も指定しない場合は、entry (記事) に付けられたタグを参照します。
         */
        type?: "entry" | "page" | "asset" | "content_type" | string;

        /**
         * コンテンツタイプの ID、ユニーク ID、コンテンツタイプ名のいずれかを指定します。type モディファイアの値に content_type を指定したうえで、特定のコンテンツタイプのタグのみ一覧表示する場合に使用します。このモディファイアを指定しない場合は、サイトに作成されているすべてのコンテンツタイプのタグが対象になります。また、type モディファイアが未指定か、type モディファイアの値が content_type 以外の値を設定した状態でこのモディファイアを指定すると再構築エラーになります。
         */
        content_type?: string;

        /**
         * 複数のタグを並べて表示するときの、区切り文字を設定します。
         */
        glue?: string;

        /**
         * タグを並び替える対象を指定します。rank は利用頻度（記事などのデータに設定された数）、name は名前順です。初期値は name です。
         */
        sort_by?: "id" | "name" | "rank" | "count" | string;

        /**
         * 並べる順序を指定します。ascend を指定すると昇順、descend は降順になります。初期値は ascend です。
         */
        sort_order?: "ascend" | "descend";

        /**
         * 表示させるタグの上限数を指定します。正の整数を指定できます。デフォルト値はありません。
         */
        limit?: number;

        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         * 詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_blogs?: string;

        /**
         * よく付けられているタグを N 件分表示します。top モディファイアの値を 20 と設定した場合、以下の設定と同じ働きをします。
         */
        top?: string;

        /**
         *
         */
        include_private?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 特定のタグが設定された記事やウェブページを検索する URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/tagsearchlink.html
       */
      ["mt:TagSearchLink"]: {} & GlobalModifier;

      /**
       * テンプレートを作成した日時を出力するファンクションタグです。日時書式について、各国語の代表的な書式を指定します。詳しくは、日付に関するテンプレートタグのモディファイアリファレンスを参照ください。出力する日時のフォーマットを選択できます。詳しくは、日付に関するテンプレートタグのモディファイアリファレンスを参照ください。あらかじめ定義された日付のフォーマットを利用することができます。詳しくは、日付に関するテンプレートタグのモディファイアリファレンスを参照ください。出力する日付を協定世界時にします。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/templatecreatedon.html
       */
      ["mt:TemplateCreatedOn"]: {
        /**
         * 日時書式について、各国語の代表的な書式を指定します。詳しくは、日付に関するテンプレートタグのモディファイアリファレンスを参照ください。
         */
        language?: string;

        /**
         * 出力する日時のフォーマットを選択できます。詳しくは、日付に関するテンプレートタグのモディファイアリファレンスを参照ください。
         */
        format?: string;

        /**
         * あらかじめ定義された日付のフォーマットを利用することができます。詳しくは、日付に関するテンプレートタグのモディファイアリファレンスを参照ください。
         */
        format_name?: string;

        /**
         * 出力する日付を協定世界時にします。初期値は 0 です。
         */
        utc?: string;
      } & GlobalModifier;

      /**
       * 「テンプレート」システムオブジェクトで作成したカスタムフィールドの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/templatecustomfielddescription.html
       */
      ["mt:TemplateCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 「テンプレート」システムオブジェクトで作成したカスタムフィールドの『名前』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/templatecustomfieldname.html
       */
      ["mt:TemplateCustomFieldName"]: {} & GlobalModifier;

      /**
       * 「テンプレート」システムオブジェクトで作成したカスタムフィールドを一覧で表示するブロックタグです。作成したすべてのカスタムフィールドを表示します。include モディファイアでは、指定したカスタムフィールドのみを表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/templatecustomfields.html
       */
      ["mt:TemplateCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 「テンプレート」システムオブジェクトで作成したカスタムフィールドに入力した値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/templatecustomfieldvalue.html
       */
      ["mt:TemplateCustomFieldValue"]: {} & GlobalModifier;

      /**
       * このタグは、モディファイアに設定した内容を無視します。モディファイアに指定した値はテンプレート内のコメントとして利用します。MTIgnore タグはブロックタグで、改行やテンプレートタグを含めて囲んだ内容を無視するのに対し、MTTemplateNote タグはファンクションタグで、一行で書くコメント専用である点が異なります。コメントの内容を設定します。
       * @see https://movabletype.jp/documentation/appendices/tags/templatenote.html
       */
      ["mt:TemplateNote"]: {
        /**
         * コメントの内容を設定します。
         */
        value?: string;
      } & GlobalModifier;

      /**
       * 記事やコンテンツデータの複数行テキストに指定されているテキストフォーマットを取得できるタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/text-format.html
       */
      ["mt:TextFormat"]: {} & GlobalModifier;

      /**
       * 囲んだ内容を Textile フォーマットで処理します。設定した N 分、文書中の見出しレベルを下げて出力します。値に 1 を設定すると、2つ続く半角スペースを em スペース (&#8195;) に変換して出力します。初期値は 0 です。値に 1 を設定すると、行の最後にある半角スペースを削除して出力します。初期値は 0 です。出力する HTML の形式を設定します。初期値は xhtml1 です。
       * @see https://movabletype.jp/documentation/appendices/tags/textile.html
       */
      ["mt:Textile"]: {
        /**
         * 設定した N 分、文書中の見出しレベルを下げて出力します。
         */
        head_offset?: string;

        /**
         * 値に 1 を設定すると、2つ続く半角スペースを em スペース (&#8195;) に変換して出力します。初期値は 0 です。
         */
        preserve_spaces?: string;

        /**
         * 値に 1 を設定すると、行の最後にある半角スペースを削除して出力します。初期値は 0 です。
         */
        trim_spaces?: string;

        /**
         * 出力する HTML の形式を設定します。初期値は xhtml1 です。
         */
        flavor?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * start モディファイアで設定した N 分見出しレベルを下げて出力します。見出しレベルを調整する数を設定します。値に 2 と設定した場合、h1. と書きだした部分は <h3>...</h3> として出力されます。
       * @see https://movabletype.jp/documentation/appendices/tags/textileheadoffset.html
       */
      ["mt:TextileHeadOffset"]: {
        /**
         * 見出しレベルを調整する数を設定します。値に 2 と設定した場合、h1. と書きだした部分は <h3>...</h3> として出力されます。
         */
        start?: string;
      } & GlobalModifier;

      /**
       * Textile テキストフォーマットの出力を制御するためのオプションを設定します。このタグはテンプレートの最初に記述します。オプションは複数設定可能です。設定した N 分、文書中の見出しレベルを下げて出力します。値に 1 を設定すると、2 つ続く半角スペースを em スペース (&#8195;) に変換して出力します。初期値は 0 です。値に 1 を設定すると、行の最後にある半角スペースを削除して出力します。初期値は 0 です。出力する HTML の形式を設定します。初期値は xhtml1 です。
       * @see https://movabletype.jp/documentation/appendices/tags/textileoptions.html
       */
      ["mt:TextileOptions"]: {
        /**
         * 設定した N 分、文書中の見出しレベルを下げて出力します。
         */
        head_offset?: string;

        /**
         * 値に 1 を設定すると、2 つ続く半角スペースを em スペース (&#8195;) に変換して出力します。初期値は 0 です。
         */
        preserve_spaces?: string;

        /**
         * 値に 1 を設定すると、行の最後にある半角スペースを削除して出力します。初期値は 0 です。
         */
        trim_spaces?: string;

        /**
         * 出力する HTML の形式を設定します。初期値は xhtml1 です。
         */
        flavor?: string;
      } & GlobalModifier;

      /**
       * 現在のカテゴリに関わりなく、最上位のカテゴリを一覧するためのブロックタグです。<mt:SubCategories top="1"> と記述することと同じ動作になります。詳しくは MTSubCategories タグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/toplevelcategories.html
       */
      ["mt:TopLevelCategories"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のフォルダの最上位フォルダを表示するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/toplevelfolder.html
       */
      ["mt:TopLevelFolder"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のフォルダに関わりなく、最上位のフォルダを一覧するためのブロックタグです。<mt:SubFolders top="1"> と記述することと同じ動作になります。詳しくは MTSubFolders タグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/toplevelfolders.html
       */
      ["mt:TopLevelFolders"]: {} & GlobalModifier & BlockElement;

      /**
       * 現在のカテゴリの最上位カテゴリを表示するブロックタグです。
       * @see https://movabletype.jp/documentation/appendices/tags/toplevelparent.html
       */
      ["mt:TopLevelParent"]: {} & GlobalModifier & BlockElement;

      /**
       * 検索結果の総ページ数を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/totalpages.html
       */
      ["mt:TotalPages"]: {} & GlobalModifier;

      /**
       * トラックバックを処理するCGIプログラムのファイル名を表示します。MTCGIPathと組み合わせることで、プログラムへのパスを生成できます。
       * @see https://movabletype.jp/documentation/appendices/tags/trackbackscript.html
       */
      ["mt:TrackbackScript"]: {} & GlobalModifier;

      /**
       * TypeKey（TypePad Connect）はサービスを終了しました。このタグは現在、非推奨です。ブログの設定で、TypeKey 認証用トークンが登録されているときに、そのトークンの値を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/typekeytoken.html
       */
      ["mt:TypeKeyToken"]: {} & GlobalModifier;

      /**
       * 設定した条件により実行内容を分けるためのブロックタグです。MTSetVar ファンクションタグや、MTSetVarBlock, MTSetVarTemplate ブロックタグで定義した変数を用いて条件文を作成します。このタグは条件を満たさなかった場合に実行します。条件を満たした場合に実行する場合は、MTIf ブロックタグを使用するか、MTUnless ブロックタグの中で MTElse ブロックタグを使用します。条件文の対象となる変数の名前 (MTSetVar ファンクションタグなどで設定した name モディファイアの値) を設定します。このモディファイアの値をもとに条件分岐がおこなわれます。MTIf タグの使用には、このモディファイアもしくは tag モディファイアのいずれかが必須です。もしいずれのモディファイアも指定していない場合は、必ず true (真) を返します。name 以外にモディファイアを指定しない場合は、指定した変数の値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は false (偽)、0 もしくは値が無い場合は true (真) を返します。Movable Type のテンプレートタグを指定します。指定したテンプレートタグの出力値をもとに条件分岐がおこなわれます。接頭辞の MT は省略できます。name モディファイアとの併用はできません。併用した場合は name モディファイアが優先されます。tag 以外にモディファイアを指定しない場合は、指定したテンプレートタグの値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は false (偽)、0 もしくは値が無い場合は true (真) を返します。さらにモディファイアを指定して条件を細かく設定できます。何も指定しない場合は、name もしくは tag モディファイアに指定した変数に 0 以外の値がある場合にのみ実行します。指定した変数の値に foo が含まれない場合にのみ実行します。like モディファイアでは Perl の正規表現を利用できます。以下の例では name モディファイアに指定した変数の値が bar か baz で始まらない場合にのみ実行します。指定した変数の値が foo と一致しない場合にのみ実行します。指定した変数の値が foo と一致する場合にのみ実行します。指定した変数の値が foo よりも大きい場合にのみ実行します。指定した変数の値が foo よりも小さい場合にのみ実行します。指定した変数の値が foo 以上の場合にのみ実行します。指定した変数の値が foo 以下の場合にのみ実行します。op モディファイアに関しては、ドキュメント: テンプレートタグで利用できる演算関数を参照ください。配列のインデックス (添え字) を指定して、配列の変数から値を取り出します。このタグは以下のようにも書くことができます。名前[添え字] という記述が index モディファイアの代わりです。ハッシュのキーを指定して、ハッシュの変数から値を取り出します。このタグは以下のようにも書くことができます。名前{キー} という記述が key モディファイアの代わりです。Perl の式を記述することができ、結果を利用して条件分岐をおこないます。
       * @see https://movabletype.jp/documentation/appendices/tags/unless.html
       */
      ["mt:Unless"]: {
        /**
         * 条件文の対象となる変数の名前 (MTSetVar ファンクションタグなどで設定した name モディファイアの値) を設定します。このモディファイアの値をもとに条件分岐がおこなわれます。MTIf タグの使用には、このモディファイアもしくは tag モディファイアのいずれかが必須です。もしいずれのモディファイアも指定していない場合は、必ず true (真) を返します。name 以外にモディファイアを指定しない場合は、指定した変数の値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は false (偽)、0 もしくは値が無い場合は true (真) を返します。
         */
        name?: string;

        /**
         * Movable Type のテンプレートタグを指定します。指定したテンプレートタグの出力値をもとに条件分岐がおこなわれます。接頭辞の MT は省略できます。name モディファイアとの併用はできません。併用した場合は name モディファイアが優先されます。tag 以外にモディファイアを指定しない場合は、指定したテンプレートタグの値の有無で判定します。指定したテンプレートタグに 0 以外の値がある場合は false (偽)、0 もしくは値が無い場合は true (真) を返します。
         */
        tag?: string;

        /**
         * 指定した変数の値に foo が含まれない場合にのみ実行します。like モディファイアでは Perl の正規表現を利用できます。以下の例では name モディファイアに指定した変数の値が bar か baz で始まらない場合にのみ実行します。
         */
        like?: string;

        /**
         * 指定した変数の値が foo と一致しない場合にのみ実行します。
         */
        eq?: string;

        /**
         * 指定した変数の値が foo と一致する場合にのみ実行します。
         */
        ne?: string;

        /**
         * 指定した変数の値が foo よりも大きい場合にのみ実行します。
         */
        lt?: string;

        /**
         * 指定した変数の値が foo よりも小さい場合にのみ実行します。
         */
        gt?: string;

        /**
         * 指定した変数の値が foo 以上の場合にのみ実行します。
         */
        le?: string;

        /**
         * 指定した変数の値が foo 以下の場合にのみ実行します。
         */
        ge?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 現在ログインしているユーザーを表すJSON形式のデータ構造体を返します。このタグは通常、システムテンプレートのコンテキストでのみ使用されます。
       * @see https://movabletype.jp/documentation/appendices/tags/usersessionstate.html
       */
      ["mt:UserSessionState"]: {} & GlobalModifier;

      /**
       * 定義した変数から値を呼び出します。このテンプレートタグは MTGetVar ファンクションタグと同じ働きをします。 (エイリアス)ただし、value モディファイアを使用した場合は MTSetVar ファンクションタグと同じ働きになります。変数の名前を指定します。このモディファイアは必須です。変数の値を指定します。このモディファイアを指定した場合は、MTSetVar ファンクションタグと同じ働きになります。op モディファイアに関しては、テンプレートタグで利用できる演算関数を参照ください。value モディファイアを指定していても、op モディファイアを併せて指定した場合は MTGetVar ファンクションタグと同じ働きをします。配列のインデックス (添え字) を指定します。配列変数が存在しない場合や指定されたインデックスの値が存在しないときは空の文字列を返します。このタグは以下のようにも書くことができます。名前[添え字] という記述が index モディファイアの代わりです。ハッシュのキーを指定します。ハッシュ変数が存在しない場合や指定されたキーが存在しないときは空の文字列を返します。このタグは以下のようにも書くことができます。名前{キー} という記述が key モディファイアの代わりです。配列やハッシュ変数に値を設定するときに実行する関数の名前を指定します。利用できる名前は以下のとおりです。このタグは以下のようにも書くことができます。関数名(名前) という記述が function モディファイアの代わりです。
       * @see https://movabletype.jp/documentation/appendices/tags/var.html
       */
      ["mt:Var"]: {
        /**
         *
         */
        name?: string;

        /**
         * 変数の名前を指定します。このモディファイアは必須です。
         */
        var?: string;

        /**
         * 変数の値を指定します。このモディファイアを指定した場合は、MTSetVar ファンクションタグと同じ働きになります。
         */
        value?: string;
      } & GlobalModifier;

      /**
       * 使用している Movable Type のバージョン番号を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/version.html
       */
      ["mt:Version"]: {} & GlobalModifier;

      /**
       * 「ビデオ」システムオブジェクトで作成したカスタムフィールドの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/videocustomfielddescription.html
       */
      ["mt:VideoCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 「ビデオ」システムオブジェクトで作成したカスタムフィールドの『名前』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/videocustomfieldname.html
       */
      ["mt:VideoCustomFieldName"]: {} & GlobalModifier;

      /**
       * 「ビデオ」システムオブジェクトで作成したカスタムフィールドを一覧で表示するブロックタグです。作成したすべてのカスタムフィールドを表示します。include モディファイアでは、指定したカスタムフィールドのみを表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/videocustomfields.html
       */
      ["mt:VideoCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 「ビデオ」システムオブジェクトで作成したカスタムフィールドに入力した値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/videocustomfieldvalue.html
       */
      ["mt:VideoCustomFieldValue"]: {} & GlobalModifier;

      /**
       * ウェブサイトの設定で選択したクリエイティブ・コモンズ・ライセンスのバナー画像の URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitecclicenseimage.html
       */
      ["mt:WebsiteCCLicenseImage"]: {} & GlobalModifier;

      /**
       * ウェブサイトの設定で選択したクリエイティブ・コモンズ・ライセンスにあわせた内容が書かれている URL を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitecclicenseurl.html
       */
      ["mt:WebsiteCCLicenseURL"]: {} & GlobalModifier;

      /**
       * ウェブサイトの総コメント数を表示します。配下のブログが持つコメントは含みません。モディファイアを指定すると、複数のウェブサイトのコメントの合計数を表示します。対象のウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitecommentcount.html
       */
      ["mt:WebsiteCommentCount"]: {
        /**
         *
         */
        site_ids?: string;

        /**
         *
         */
        include_websites?: string;

        /**
         * 対象のウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_websites?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;

        /**
         *
         */
        top?: string;
      } & GlobalModifier;

      /**
       * 「ウェブサイト」システムオブジェクトで作成したカスタムフィールドの『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitecustomfielddescription.html
       */
      ["mt:WebsiteCustomFieldDescription"]: {} & GlobalModifier;

      /**
       * 「ウェブサイト」システムオブジェクトで作成したカスタムフィールドの『名前』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitecustomfieldname.html
       */
      ["mt:WebsiteCustomFieldName"]: {} & GlobalModifier;

      /**
       * 「ウェブサイト」システムオブジェクトで作成したカスタムフィールドを一覧で表示するブロックタグです。作成したすべてのカスタムフィールドを表示します。include モディファイアでは、指定したカスタムフィールドのみを表示します。exclude モディファイアに名前を指定したカスタムフィールドは表示しません。特定のカスタムフィールドだけを表示したいときは、個別のテンプレートタグを使用してください。指定した名前のカスタムフィールドの情報を表示します。指定した名前のカスタムフィールドの情報を対象から除外します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitecustomfields.html
       */
      ["mt:WebsiteCustomFields"]: {
        /**
         * 指定した名前のカスタムフィールドの情報を表示します。
         */
        include?: string;

        /**
         * 指定した名前のカスタムフィールドの情報を対象から除外します。
         */
        exclude?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * 「ウェブサイト」システムオブジェクトで作成したカスタムフィールドに入力した値を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitecustomfieldvalue.html
       */
      ["mt:WebsiteCustomFieldValue"]: {} & GlobalModifier;

      /**
       * ウェブサイトの「日付の言語」で設定した言語名を表示します。このタグは Movable Type 5.2.5 から導入されました。値に 1 を設定した場合、言語名をロケール形式 ("en_US", "de_DE"など) で表示します。初期値は 0 です。値に 1 を設定した場合、RFC3066 の仕様にもとづき、下位言語コードをつなぐアンダースコア'_' をハイフン '-' に変換して表示します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/websitedatelanguage.html
       */
      ["mt:WebsiteDateLanguage"]: {
        /**
         * 値に 1 を設定した場合、言語名をロケール形式 ("en_US", "de_DE"など) で表示します。初期値は 0 です。
         */
        locale?: string;

        /**
         * 値に 1 を設定した場合、RFC3066 の仕様にもとづき、下位言語コードをつなぐアンダースコア'_' をハイフン '-' に変換して表示します。初期値は 0 です。
         */
        ietf?: string;
      } & GlobalModifier;

      /**
       * ウェブサイトの設定画面で入力した『説明』を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitedescription.html
       */
      ["mt:WebsiteDescription"]: {} & GlobalModifier;

      /**
       * ウェブサイトで公開されている記事数を表示します。配下のブログの記事数は含みませんが、下記のモディファイアを指定すると、配下のブログの記事数を含むことが出来ます。対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/websiteentrycount.html
       */
      ["mt:WebsiteEntryCount"]: {
        /**
         *
         */
        blog_ids?: string;

        /**
         *
         */
        include_blogs?: string;

        /**
         *
         */
        include_with_website?: string;

        /**
         *
         */
        exclude_blogs?: string;

        /**
         *
         */
        include_websites?: string;

        /**
         * 対象のブログを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_websites?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * ウェブサイトの設定で指定したアーカイブの拡張子をピリオドを付けて表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitefileextension.html
       */
      ["mt:WebsiteFileExtension"]: {} & GlobalModifier;

      /**
       * ウェブサイトのコンテキストの中で、そのウェブサイトの配下にブログを持っているかを判別します。ウェブサイトがひとつ以上のブログを持っているときは true (真) となり、囲んだ内容を処理します。ひとつもブログを持っていないときは false (偽) となります。このタグの中では MTElse ブロックタグを使用できます。
       * @see https://movabletype.jp/documentation/appendices/tags/websitehasblog.html
       */
      ["mt:WebsiteHasBlog"]: {} & GlobalModifier & BlockElement;

      /**
       * ウェブサイトのホスト名を表示します。たとえば、ウェブサイトの URL が、http://www.example.com/first-website/ の場合、www.example.com を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitehost.html
       */
      ["mt:WebsiteHost"]: {} & GlobalModifier;

      /**
       * ウェブサイトの ID 番号を表示します。ウェブサイトには 1, 2, 3... といった正の整数の ID 番号が割り当てられます (必ずしも 1 から始まる連番になるわけではありません)。
       * @see https://movabletype.jp/documentation/appendices/tags/websiteid.html
       */
      ["mt:WebsiteID"]: {} & GlobalModifier;

      /**
       * クリエイティブ・コモンズ・ライセンスを選択しているときに実行する条件タグです。クリエイティブ・コモンズ・ライセンスを選択していないときは実行されません。
       * @see https://movabletype.jp/documentation/appendices/tags/websiteifcclicense.html
       */
      ["mt:WebsiteIfCCLicense"]: {} & GlobalModifier & BlockElement;

      /**
       * ウェブサイトでコメントを受け付けるよう設定していて、且つ、認証方式の設定において匿名ユーザーからコメントを受け付けるよう設定している場合に、このタグで囲んだ部分を実行します。
       * @see https://movabletype.jp/documentation/appendices/tags/websiteifcommentsopen.html
       */
      ["mt:WebsiteIfCommentsOpen"]: {} & GlobalModifier & BlockElement;

      /**
       * ウェブサイトに設定した「使用言語」を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitelanguage.html
       */
      ["mt:WebsiteLanguage"]: {} & GlobalModifier;

      /**
       * ウェブサイトの名前を表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitename.html
       */
      ["mt:WebsiteName"]: {} & GlobalModifier;

      /**
       * ウェブサイトで公開しているウェブページの総数を表示します。配下のブログのウェブページは含みません。複数のウェブサイトを運用しているとき、モディファイアを指定すると、複数のウェブサイトのウェブページの合計数を表示します。対象のウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitepagecount.html
       */
      ["mt:WebsitePageCount"]: {
        /**
         *
         */
        site_ids?: string;

        /**
         *
         */
        include_websites?: string;

        /**
         * 対象のウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_websites?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * ウェブサイトの管理画面で設定した『ウェブサイトパス』の内容を表示します。ウェブブラウザで表示する URL ではなく、サーバールートからウェブサイトディレクトリまでの絶対パスを表示します。パスの末尾には必ずスラッシュ (/) がつきます。
       * @see https://movabletype.jp/documentation/appendices/tags/websitepath.html
       */
      ["mt:WebsitePath"]: {} & GlobalModifier;

      /**
       * 特定のウェブサイトの総トラックバック数（公開済み）を表示します。迷惑トラックバックや未公開のトラックバックの数は含まれません。また、複数のウェブサイトを運用しているとき、下記のモディファイアを指定すると、複数のウェブサイトのトラックバック数を表示します。 対象のウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。カウントが 1 件のときに表示するメッセージを指定します。カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。カウントが 0 件のときに表示するメッセージを指定します。
       * @see https://movabletype.jp/documentation/appendices/tags/websitepingcount.html
       */
      ["mt:WebsitePingCount"]: {
        /**
         *
         */
        site_ids?: string;

        /**
         *
         */
        include_websites?: string;

        /**
         * 対象のウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_websites?: string;

        /**
         * カウントが 1 件のときに表示するメッセージを指定します。
         */
        singular?: string;

        /**
         * カウントが 2 件以上のときに表示するメッセージを指定します。メッセージに # を含むと、# が実際の件数に変換されます。
         */
        plural?: string;

        /**
         * カウントが 0 件のときに表示するメッセージを指定します。
         */
        none?: string;
      } & GlobalModifier;

      /**
       * ウェブサイトの URL を、ホストからの相対 URL で表示します。たとえば、ウェブサイトのサイトURL が http://www.example.com/first-website/ の場合、/first-weblog/ を表示します。ウェブサイトの ID を指定します。このモディファイアを指定した場合、指定した ID のウェブサイトの相対 URL を出力します。次のサンプルは、ID が 10 のウェブサイトの相対 URL を出力します。
       * @see https://movabletype.jp/documentation/appendices/tags/websiterelativeurl.html
       */
      ["mt:WebsiteRelativeURL"]: {
        /**
         * ウェブサイトの ID を指定します。このモディファイアを指定した場合、指定した ID のウェブサイトの相対 URL を出力します。次のサンプルは、ID が 10 のウェブサイトの相対 URL を出力します。
         */
        id?: string;
      } & GlobalModifier;

      /**
       * システムに登録されているウェブサイトの一覧を表示するためのブロックタグです。対象のウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
       * @see https://movabletype.jp/documentation/appendices/tags/websites.html
       */
      ["mt:Websites"]: {
        /**
         *
         */
        site_ids?: string;

        /**
         *
         */
        include_websites?: string;

        /**
         * 対象のウェブサイトを指定します。詳しくは、マルチブログ機能が利用できるテンプレートタグを参照してください。
         */
        exclude_websites?: string;
      } & GlobalModifier &
        BlockElement;

      /**
       * ウェブサイトに適用されているテーマの識別子を表示します。表示される識別子は、数値ではなく文字列になります。また、識別子にアンダースコアが含まれる場合はハイフンに置換されます。例えば、「クラシックウェブサイト」テーマ (classic_website) を適用している場合は classic-website が表示されます。アンダースコアのまま出力したい場合は 1 を設定します。このモディファイアは Movable Type 6.0.4 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/websitethemeid.html
       */
      ["mt:WebsiteThemeID"]: {
        /**
         * アンダースコアのまま出力したい場合は 1 を設定します。このモディファイアは Movable Type 6.0.4 で追加されました。
         */
        raw?: string;
      } & GlobalModifier;

      /**
       * ウェブサイトの設定で指定した時間帯 (タイムゾーン) を表示します。協定世界時 (UTC、世界標準時) からの時差が表示されます。値に 1 を指定すると、コロン（:）を除いて表示します。初期値は 0 です。
       * @see https://movabletype.jp/documentation/appendices/tags/websitetimezone.html
       */
      ["mt:WebsiteTimezone"]: {
        /**
         * 値に 1 を指定すると、コロン（:）を除いて表示します。初期値は 0 です。
         */
        no_colon?: string;
      } & GlobalModifier;

      /**
       * ウェブサイトの URL を絶対 URL で表示します。
       * @see https://movabletype.jp/documentation/appendices/tags/websiteurl.html
       */
      ["mt:WebsiteURL"]: {} & GlobalModifier;

      /**
       * このタグは現在、非推奨です。MTWidgetSet タグを使用してください。name モディファイアで指定したウィジェットセットを表示します。このテンプレートタグは MTWidgetSet ファンクションタグと同じ機能を持ちます (エイリアス)。利用するウィジェットセットを指定します。このモディファイアは必須です。ウィジェットセットの読み込先のブログの ID を指定します。ただし、読み込まれるのはウィジェットセットのテンプレートのみで、コンテキストは現在のブログのものになります。値に 1 を指定すると、ブログの親ウェブサイトにあるウィジェットセットをインクルードします。親ウェブサイトに該当するウィジェットセットが無い場合は、何もしません（グローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。このモディファイアは、Movable Type 6.0.4 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/widgetmanager.html
       */
      ["mt:WidgetManager"]: {
        /**
         * 利用するウィジェットセットを指定します。このモディファイアは必須です。
         */
        name?: string;

        /**
         * ウィジェットセットの読み込先のブログの ID を指定します。ただし、読み込まれるのはウィジェットセットのテンプレートのみで、コンテキストは現在のブログのものになります。
         */
        blog_id?: string;

        /**
         * 値に 1 を指定すると、ブログの親ウェブサイトにあるウィジェットセットをインクルードします。親ウェブサイトに該当するウィジェットセットが無い場合は、何もしません（グローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。このモディファイアは、Movable Type 6.0.4 で追加されました。
         */
        parent?: string;
      } & GlobalModifier;

      /**
       * name モディファイアで指定したウィジェットセットを表示します。利用するウィジェットセットを指定します。このモディファイアは必須です。ウィジェットセットの読み込先のブログの ID を指定します。ただし、読み込まれるのはウィジェットセットのテンプレートのみで、コンテキストは現在のブログのものになります。値に 1 を指定すると、ブログの親ウェブサイトにあるウィジェットセットをインクルードします。親ウェブサイトに該当するウィジェットセットが無い場合は、何もしません（グローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。このモディファイアは、Movable Type 6.0.4 で追加されました。
       * @see https://movabletype.jp/documentation/appendices/tags/widgetset.html
       */
      ["mt:WidgetSet"]: {
        /**
         * 利用するウィジェットセットを指定します。このモディファイアは必須です。
         */
        name?: string;

        /**
         * ウィジェットセットの読み込先のブログの ID を指定します。ただし、読み込まれるのはウィジェットセットのテンプレートのみで、コンテキストは現在のブログのものになります。
         */
        blog_id?: string;

        /**
         * 値に 1 を指定すると、ブログの親ウェブサイトにあるウィジェットセットをインクルードします。親ウェブサイトに該当するウィジェットセットが無い場合は、何もしません（グローバルテンプレートのモジュールはインクルードしません）。初期値は 0 です。このモディファイアは、Movable Type 6.0.4 で追加されました。
         */
        parent?: string;
      } & GlobalModifier;

      /**
       * XML-RPC API をサポートする CGI プログラムのファイル名を表示します。MTCGIPath タグと組み合わせることで、プログラムへのパスを生成できます。
       * @see https://movabletype.jp/documentation/appendices/tags/xmlrpcscript.html
       */
      ["mt:XMLRPCScript"]: {} & GlobalModifier;
    }
  }
}

export interface MTTags extends MTJSXTemplate.MTTags {}
