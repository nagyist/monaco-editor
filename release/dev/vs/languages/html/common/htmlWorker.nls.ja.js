/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.1(ada2ad77ff51ca8550cd47bdaa4520df66c9519d)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/languages/html/common/htmlWorker.nls.ja", {
	"vs/languages/html/common/htmlTags": [
		"html 要素は HTML ドキュメントのルートを表します。",
		"head 要素はドキュメントのメタデータのコレクションを表します。",
		"title 要素はドキュメントのタイトルまたは名前を表します。作成者は、ドキュメントがコンテキストから切り離して (たとえば、ユーザーの履歴、ブックマーク、検索結果などで) 使用される場合でも、そのドキュメントを識別するタイトルを使用する必要があります。最初の見出しはコンテキストから切り離して引用される場合に独立している必要がないため、ドキュメントのタイトルは多くの場合、その最初の見出しとは異なります。",
		"base 要素を使用すると、作成者は相対 URL の解決を目的としてドキュメントのベース URL を指定するか、ハイパーリンクをフォローするために既定のブラウジング コンテキストの名前を指定できます。この要素は、この情報以上のコンテンツを表しません。",
		"作成者は link 要素を使って文書を他のリソースにリンクさせることができます。",
		"meta 要素は、title、base、link、style、script 要素では表現できないさまざまな種類のメタデータを表します。",
		"style 要素は、作成者がドキュメントにスタイル情報を埋め込めるようにします。style 要素はスタイリング処理モデルへの入力の 1 つです。この要素はユーザーに対するコンテンツは表しません。",
		"body 要素はドキュメントのコンテンツを表します。",
		"article 要素は、ドキュメント、ページ、アプリケーション、またはサイトの完全な、あるいは自己完結した構成を表します。つまり、原則として、シンジケートのように単独で再配布や再利用が可能なものです。これは、フォーラム記事、雑誌や新聞の記事、ブログ記事、ユーザーが送信したコメント、インタラクティブなウィジェットやガジェット、その他、コンテンツの独立した項目である場合があります。各記事は、article 子要素として見出し (h1 から h6 要素) を含むことによって通常識別されます。",
		"section 要素は、ドキュメントやアプリケーションの一般的なセクションを表します。このコンテキストにおけるセクションとは、コンテンツをテーマ別にグループ分けしたものです。各セクションは、通常、section 要素の子として見出し (h1 から h6 要素) が含まれていることで識別されます。",
		"nav 要素は、他のページやページ内の箇所にリンクするページのセクションを表します。つまり、ナビゲーション リンクが付いたセクションを表します。",
		"aside 要素はページのセクションを表しています。ページのセクションは、aside 要素の前後のコンテンツに関連しているコンテンツで構成されていますが、そのコンテンツから分離されたものと見なすことができます。このようなセクションは、印刷物ではよく側面記事として表されるものです。",
		"h1 要素はセクション見出しを表します。",
		"h2 要素はセクション見出しを表します。",
		"h3 要素はセクション見出しを表します。",
		"h4 要素はセクション見出しを表します。",
		"h5 要素はセクション見出しを表します。",
		"h6 要素はセクション見出しを表します。",
		"header 要素は、その最も近い先祖のセクショニング コンテンツまたはセクショニング root 要素の導入部コンテンツを表します。通常、ヘッダーには導入やナビゲーション補助のグループが含まれます。最も近い先祖のセクショニング コンテンツまたはセクショニング root 要素が body 要素である場合、ページ全体に適用されます。",
		"footer 要素は、その最も近い先祖のセクショニング コンテンツまたはセクショニング root 要素のフッターを表します。通常、フッターにはセクションの作成者、関連するドキュメントへのリンク、著作権情報など、そのセクションに関する情報が含まれます。",
		"address 要素は、最も近い article または body 要素の先祖の連絡先情報を表します。body 要素の場合、連絡先情報はドキュメント全体に適用されます。",
		"p 要素は段落を表します。",
		"hr 要素は、段落レベルのテーマの区切り (ストーリーの場面が変わるときや、参考書のセクション内の別のトピックに移るときなど) を表します。",
		"pre 要素は、構造が要素ではなく表記規則で表される、事前に書式設定されたテキストのブロックを表します。",
		"blockquote 要素は、別のソースから引用されるコンテンツを表します。オプションで、footer 要素または cite 要素内になければならない引用や、注釈、省略形などのインライン変更を使用します。",
		"ol 要素は、意図的に順序付けされた項目のリストを表します。この順序を変更するとドキュメントの意味が変わります。",
		"ul 要素は、項目の順序が重要ではない — (つまり、順序を変更しても実質的にドキュメントの意味が変わらない) 項目のリストを表します。",
		"li 要素はリスト項目を表します。その親要素が ol、ul、または menu 要素である場合、li 要素はその親要素に定義されているところにしたがって、親要素のリストの項目となります。それ以外の場合、リスト項目は定義済みのリストに関連する他の li 要素との関係はありません。",
		"dl 要素は、ゼロ個以上の name-value グループで構成される関連リスト (記述リスト) を表します。name-value グループは 1 つ以上の名前 (dt 要素) と、それに続く 1 つ以上の値 (dd 要素) で構成され、dt 要素と dd 要素以外のノードは無視されます。1 つの dl 要素内で、各名前につき複数の dt 要素があってはなりません。",
		"dt 要素は、記述リスト (dl 要素) における用語、あるいは名前、用語の説明グループの部分を表します。",
		"dd 要素は、記述リスト (dl 要素) における説明、定義、あるいは値、用語の説明グループの一部を表します。",
		"figure 要素はいくつかのフロー コンテンツを表します。オプションで、キャプションが付きます。これは (完全な文章のように) 自己完結しており、通常はドキュメントのメイン フローから単体として参照されます。",
		"figcaption 要素は、figcaption 要素の親である figure 要素の残りのコンテンツ (存在する場合) のキャプションや凡例を表します。",
		"main 要素は、ドキュメントやアプリケーションの本体のメイン コンテンツを表します。メイン コンテンツ領域は、ドキュメントの中心的なトピックや、アプリケーションの中心的な機能に直接関係するか、あるいはそれらから発展されるコンテンツで構成されます。",
		"div 要素には特別な意味をまったくありません。これはその子を表します。これを class、lang および title 属性と共に使用して、連続する要素のグループに共通のセマンティクスをマークアップできます。",
		"要素に href 属性がある場合は、そのコンテンツによってラベル付けされるハイパーリンク (ハイパーテキスト アンカー) を表します。",
		"em 要素はそのコンテンツの強調を表します。",
		"strong 要素は、そのコンテンツの強い重要性、重大度、あるいは緊急度を表します。",
		"small 要素は小さい字などの付帯コメントを表します。",
		"s 要素は正確でなくなったか、関連性がなくなったコンテンツを表します。",
		"cite 要素は創造的な作品への参照を表します。これには、作品のタイトル、作成者 (個人、団体、または組織) の名前または URL 参照が含まれます。また、引用メタデータを追加するために使用される規則に従って省略された形式の参照である場合があります。",
		"q 要素は別のソースから引用されるいくつかのフレーズ コンテンツを表します。",
		"dfn 要素は用語の定義インスタンスを表します。dfn 要素の最も近い先祖である段落、記述リスト グループ、またはセクションには、dfn 要素により指定された用語の定義も含まれていなければなりません。",
		"abbr 要素は略称や頭字語を表します。オプションでその正式名称を加えることができます。title 属性を使用して、その略称の正式名称を指定することができます。この属性を指定した場合、略称の正式名称を含めなければなりません。それ以外のものは含めることはできません。",
		"ruby 要素は、フレージング コンテンツの 1 つ以上の範囲を、ルビ注釈でマークアップできるようにします。ルビ注釈とは本文に沿って表示される短いテキストのことで、主に発音のガイドとして東アジアでの活字印刷に使われたり、別の注釈を加えるために使われたりします。日本語では、この文字体裁の形式は \"フリガナ\" とも言います。ルビは本文のどちらか一方、またときには両側に表示されることがあり、位置は CSS を使用して管理することができます。ルビについてさらに詳しくは、「Use Cases & Exploratory Approaches for Ruby Markup (大文字と小文字の使用およびルビ マークアップの探索的アプローチ)」 ドキュメントや、「CSS Ruby Module Level 1 (CSS ルビ モジュール レベル 1)」 をご覧ください。[RUBY-UC] [CSSRUBY]",
		"rb 要素は、ルビ注釈の本文コンポーネントをマークアップします。rb 要素が ruby 要素の子である場合、それ自体では何も表しませんが、親の ruby 要素が rb 要素を使用することで何を表しているのかが決定されます。",
		"rt 要素は、ルビ注釈のルビ テキスト コンポーネントをマークアップします。rt 要素が ruby 要素の子、または ruby 要素の子の rtc 要素の子である場合、この要素自体では何も表しませんが、祖先の ruby 要素が rt 要素使用することで何を表しているのかが決定されます。",
		"rp 要素は、ルビ注釈をサポートしていないユーザー エージェントによって表示されるフォールバック テキストを提供するために使用します。広く使われている規則に、ルビ注釈のルビ テキスト コンポーネントの前後にかっこを加えるものがあります。",
		"time 要素は、内包しているコンテンツを表します。それらのコンテンツのコンピューターが読み取り可能な形式が datetime 属性にあります。コンテンツの種類は、後述されているように、数種の日付、時間、タイムゾーン オフセット、および期間などに限られます。",
		"code 要素はコンピューター コードのフラグメントを表します。これは、コンピューターが認識できる XML 要素名、ファイル名、コンピューター プログラム、またはその他の文字列である場合があります。",
		"var 要素は変数を表します。これは、数式やプログラミング コンテキストの実際の変数、定数を表す識別子、物理量を表す記号、関数パラメーター、または通常の文体で単にプレースホルダーとして使用される用語である場合があります。",
		"samp 要素は別のプログラムやコンピューティング システムからのサンプルまたは引用の出力を表します。",
		"kbd 要素はユーザー入力を表します (通常はキーボード入力ですが、音声コマンドなどの他の入力を表すために使用することもできます)。",
		"sub 要素は下付き文字を表します。",
		"sup 要素は上付き文字を表します。",
		"i 要素は、質の異なるテキストであることを示す形で、代替音声やムードなど、通常の文体から区別されるテキストの範囲を表します。たとえば、欧文においては、分類上の意味、技術用語、別の言語の慣用句、翻字、思考、船名などがあります。",
		"b 要素は、特別な重要性、代替音声、気分などの意味はなく、実用的に注目されるべきテキストの範囲を表します。たとえば、ドキュメントの概要にあるキーワード、レビューの製品名、対話型のテキスト主動ソフトウェアにおける実行可能な単語、記事のリードなどです。",
		"u 要素は、明示的にレンダリングされているものの、伝わりにくい、または本来と異なる注釈を伴うテキストの範囲を表します。たとえば、中国語のテキストで固有名詞であることを示すラベル (中国語固有名詞マーク) をテキストに付ける場合や、スペルミスを示すラベルをテキストに付ける場合などです。",
		"mark 要素は、別のコンテキストにおける関連性のゆえに、参照目的でマーキングまたは強調表示される 1 つのドキュメント内の一連のテキストを表します。引用で使用されるか、通常の文体から参照される他のテキストのブロックで使用される場合、強調表示を示します。これは、もともと存在していなかったが、テキストの一部に読者の注意を向けるために追加されたものです。このテキストの一部とは、ブロックが最初に書き込まれたときに元の作成者が重要であると見なさなかった可能性があるが、現在ではこれまで予期できなかったほど注視されている部分です。ドキュメントの主な文体で使用される場合、ユーザーの現在のアクティビティに関連する可能性が高いために強調表示されたドキュメントの一部を示します。",
		"bdi 要素は、双方向テキスト書式のために、その周囲のものからは分離されるテキストの範囲を表します。[BIDI]",
		"bdo 要素は、その子に対する明示的なテキスト方向の書式設定制御を表します。これにより、作成者は明示的に方向の上書きを指定することで、Unicode 双方向アルゴリズムを上書きできるようになります。[BIDI]",
		"span 要素は、それ自体に意味はありませんが、グローバル属性 (class、lang、dir など) と共に使用する場合に役立ちます。これはその子を表します。",
		"br 要素は改行を表します。",
		"wbr 要素は改行のタイミングを表します。",
		"ins 要素はドキュメントへの追記を表します。",
		"del 要素はドキュメントからの削除を表します。",
		"picture 要素は内包する img 要素に複数のソースを指定するコンテナーです。これにより、作成者は使用するイメージ リソースについて、画面のピクセルの密度、ビューポートのサイズ、イメージの形式などの要因に基づいて、宣言によって制御したりユーザー エージェントにヒントを与えたりできます。自身の子を表します。",
		"img 要素はイメージを表します。",
		"iframe 要素は入れ子になったブラウジング コンテキストを表します。",
		"embed 要素は、外部の (通常は非 HTML) アプリケーションや対話型コンテンツの統合ポイントを提供します。",
		"object 要素は外部リソースを表すことができます。これは、リソースのタイプに応じて、イメージ、入れ子になったブラウジング コンテキスト、プラグインによって処理される外部リソースのいずれかとして扱われます。",
		"param 要素は、object 要素によって呼び出されるプラグインのパラメーターを定義します。これ自体は何も表しません。",
		"video 要素は、ビデオやムービー、およびキャプションを含むオーディオ ファイルを再生するために使用されます。",
		"audio 要素はサウンドやオーディオのストリームを表します。",
		"source 要素は、作成者が media 要素に対して複数の代替メディア リソースを指定できるようにします。これ自体は何も表しません。",
		"作成者は track 要素を使用して、media 要素に対して明示的な外部の同期テキスト トラックを指定できるようにします。これ自体は何も表しません。",
		"map 要素は、img 要素と area 要素の子孫と組み合わせて、イメージ マップを定義します。この要素はその子を表します。",
		"area 要素は、一部のテキストのハイパーリンクとイメージ マップ上に対応する領域があるものと、イメージ マップ上にデッド領域があるものを表します。",
		"table 要素は、表の形式で、複数の次元を持つデータを表します。",
		"caption 要素に親がいて、それが table 要素である場合、caption 要素は、その親である table 要素のタイトルを表します。",
		"colgroup 要素の親が table 要素である場合、親である table の 1 つ以上の列のグループを表します。",
		"col 要素の親が colgroup 要素であり、その親が table 要素である場合、col 要素はその colgroup で表される列グループ内の 1 つ以上の列を表します。",
		"tbody 要素の親が table である場合、tbody 要素はその親の table 要素の一連のデータで構成される行のブロックを表します。",
		"thead 要素の親が table である場合、thead 要素はその親である table 要素の列ラベル (ヘッダー) で構成される行のブロックを表します。",
		"tfoot 要素の親が table である場合、tfoot 要素はその親である table 要素の列の概要 (フッター) で構成される行のブロックを表します。",
		"tr 要素は表内のセルの行を表します。",
		"td 要素は表内のデータ セルを表します。",
		"th 要素は表内のヘッダー セルを表します。",
		"form 要素は、フォーム関連要素のコレクションを表します。これらのいくつかは、処理のためにサーバーに送信できる編集可能な値を表すことができます。",
		"label 要素はユーザー インターフェイスのキャプションを表します。キャプションは、for 属性を使用するか、label 要素内にフォーム コントロールを置くことで、label 要素のラベル付きコントロールとして知られる特定のフォーム コントロールに関連付けることができます",
		"input 要素は、入力されたデータ フィールドを表します。通常、ユーザーがデータを編集できるようにするフォーム コントロールが付いています。",
		"button 要素はそのコンテンツによってラベル付けされるボタンを表します。",
		"select 要素は一連の選択肢の中から選択するためのコントロールを表します。",
		"datalist 要素は、他のコントロールの事前定義オプションを表す一連の option 要素を表します。レンダリングでは、datalist 要素は何も表しません。その子と共に非表示になります。",
		"optgroup 要素は共通のラベルが付いた option 要素のグループを表します。",
		"option 要素は、select 要素の選択肢か、datalist 要素の候補のリストの一部を表します。",
		"textarea 要素は、要素の raw 値に対する複数のプレーン テキスト編集コントロールを表します。コントロールのコンテンツはコントロールの既定値を表します。",
		"output 要素は、アプリケーションにより実行された計算の結果、またはユーザー操作の結果を表します。",
		"progress 要素はタスクが完了するまでの進行状況を表します。これには、進行中ではあるものの、タスクが完了するまでにどれだけの作業が残っているかがはっきりしない (たとえば、タスクがリモート ホストの応答を待機しているため) ものと、進行状況がゼロから最大値までの数値で、これまでに完了した作業の工程を表すものがあります。",
		"meter 要素は、既知の範囲内のスカラー測定値や、小数値を表します。たとえば、ディスク使用量、クエリ結果の関連性、特定の候補者を選定した投票人口の割合などです。",
		"fieldset 要素は、共通の名前の下でオプションでグループ化された一連のフォーム コントロールを表します。",
		"legend 要素は、legend 要素の親である fieldset 要素の残りのコンテンツ (存在する場合) のキャプションを表します。",
		"details 要素は、ユーザーが追加の情報を取得したりコントロールを表示させたりできる開示ウィジェットを表します。",
		"summary 要素は、summary 要素の親である details 要素の残りのコンテンツ (存在する場合) の要約、キャプション、または凡例を表します。",
		"dialog 要素は、ダイアログ ボックス、詳細情報、ウィンドウなど、タスクを実行するためにユーザーが対話するアプリケーションの一部を表します。",
		"script 要素は、作成者がドキュメントに動的スクリプトやデータ ブロックを含められるようにします。この要素はユーザーに対するコンテンツは表しません。",
		"noscript 要素は、スクリプトが有効である場合、何も表しません。スクリプトが無効である場合には、その子を表します。これは、ドキュメントの解析方法を制御することにより、スクリプトをサポートするエージェントとスクリプトをサポートしないエージェントに異なるマークアップを指定するために使用されます。",
		"template 要素は、スクリプトで複製してドキュメントに挿入することができる、HTML のフラグメントを宣言するために使用されます。",
		"canvas 要素は、グラフ、ゲーム グラフィックス、アートやその他の画像イメージを即席でレンダリングするために使用可能な、解像度依存のビットマップ キャンバスをスクリプトに提供します。",
		"このチェックボックスは、スタイル設定の違いを除いて HTML チェックボックスの入力と違いがありません。 このチェックボックスは AngularJS チェックボックのような動作になります。",
		"ionContent ディレクティブは、使いやすいコンテンツ領域を提供します。Ionic のカスタムの Scroll View か、ブラウザーの組み込みのオーバーフロー スクロールを使用するように、この領域を構成できます。",
		"ionItem の子",
		"一部のコンテンツの下に固定のフッター バーを追加します。\"bar-subfooter\" クラスを適用する場合には、サブフッター (上方) にすることもできます。",
		"一部のコンテンツの上に固定のヘッダー バーを追加します。\"bar-subheader\" クラスを適用する場合には、サブヘッダー (下方) にすることもできます。",
		"ionContent または ionScroll の子。ionInfiniteScroll ディレクティブを使用すると、ユーザーがページの一番下かその近くに達した時点でいつでも関数を呼び出せます。",
		"ionInput はテキスト型の入力専用として意図されています。Ionic はコンポーネント内で実際の <input type=\"text\"> HTML 要素を使用し、Ionic の折り返しによりユーザー エクスペリエンスとインタラクティビティの処理を向上させます。",
		"ionList の子。",
		"List は、ほとんどのモバイル アプリで幅広く使用されているインターフェイス要素で、基本テキストからボタン、トグル、アイコン、サムネイルまで幅広い範囲のコンテンツを含めることができます。",
		"Modal は、一時的にユーザーのメイン ビューに影響を与えるコンテンツ ウィンドウです。通常は、アイテムを選択したり編集したりするのに使用します。",
		"ionNavBar の子。ionNavBar 内に [戻る] ボタンを作成します。[戻る] ボタンは、ユーザーが現在のナビゲーション スタック内で戻れる場合に表示されます。",
		"ionNavView ディレクティブがある場合は、<ion-nav-bar> を作成することもできます。これは、アプリケーションの状態が変わるたびに更新される topbar を作成します。",
		"ionNavView の子。ionNavButtons を使用して、ionView 内から ionNavBar 上のボタンを設定します。",
		"ionNavView の子。ionNavTitle ディレクティブは、ionView テンプレート内から ionNavBar タイトル テキストをカスタムの HTML に置き換えます。",
		"ionNavView ディレクティブは、アプリケーション内のテンプレートのレンダリングに使用されます。各テンプレートは、状態の一部になります。状態は、通常 URL にマップされ、angular-ui-router を使用してプログラムで定義されます。",
		"ionItem の子。一覧項目内にオプション ボタンを作成します。ユーザーが項目を左にスワイプすると、このボタンが表示されます。",
		"副作用なくコンテンツを収める単純なコンテナー。\"pane\" クラスを要素に追加します。",
		"Popover は、アプリのコンテンツの上に重なって表示されるビューです。Popover により、ユーザーからの情報を表示したり収集したりしやすくなります。",
		"ラジオ ionRirective は、スタイル設定の違いを除いて HTML ラジオ入力と違いがありません。 ionRadio は AngularJS ラジオ入力のような動作になります。",
		"ionContent または ionScroll の子。pull-to-refresh を scrollView に追加できるようになります。ionContent 要素か ionScroll 要素の最初の子として配置します。",
		"ionItem の子。",
		"内部のコンテンツすべてがスクロール可能なコンテナーを作成します。",
		"ionSideMenus の子。サイド メニューのコンテナーで、ionSideMenuContent ディレクティブの兄弟。",
		"ionSideMenus の子。表示可能なメイン コンテンツのコンテナーで、1 つ以上の ionSideMenu ディレクティブの兄弟。",
		"サイド メニュー (1 つ以上) とメイン コンテンツのコンテナー要素。メイン コンテンツの領域を横に並べてドラッグして、左右のサイド メニューを切り替えられるようにします。",
		"ionSlideBox の子。スライドボックス内にスライドを表示します。",
		"Slide Box は複数ページのコンテナーで、各ページをスワイプしたり、ページ間でドラッグしたりできます。",
		"ionSpinner ディレクティブは、アニメーションで表示される各種スピナーを提供します。",
		"ionTabs の子。タブのコンテンツが含まれます。このコンテンツは、指定されたタブが選択されている間のみ存在します。",
		"複数のタブがあるインターフェイスを提供します。そこには、タブ バーと、タブ移動できる「ページ」のセットがあります。",
		"ion-title は、ionNavbar のタイトルを設定するコンポーネントです。",
		"トグルはアニメーションで表示されるスイッチで、指定されたモーダルを boolean にバインドします。スイッチの小片をドラッグできるようになります。それ以外はトグルは AngularJS チェックボックスのような動作になります。",
		"ionNavView の子。ビューのコンテンツ、ナビゲーション バー、ヘッダー バーの情報のコンテナーです。",
	]
});