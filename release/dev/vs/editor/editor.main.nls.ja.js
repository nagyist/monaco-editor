/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.1(ada2ad77ff51ca8550cd47bdaa4520df66c9519d)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/editor/editor.main.nls.ja", {
	"vs/base/browser/ui/actionbar/actionbar": [
		"{0} ({1})",
	],
	"vs/base/browser/ui/aria/aria": [
		"{0} (再発)",
	],
	"vs/base/browser/ui/findinput/findInput": [
		"正規表現を使用する",
		"単語単位で検索する",
		"大文字と小文字を区別する",
		"入力",
	],
	"vs/base/browser/ui/inputbox/inputBox": [
		"エラー: {0}",
		"警告: {0}",
		"情報: {0}",
	],
	"vs/base/common/errors": [
		"{0}。エラー コード: {1}",
		"アクセス許可が拒否されました (HTTP {0})",
		"アクセス許可が拒否されました",
		"{0} (HTTP {1}: {2})",
		"{0} (HTTP {1})",
		"不明な接続エラー ({0})",
		"不明な接続エラーが発生しました。インターネット接続が切れたか、接続先のサーバーがオフラインです。",
		"{0}: {1}",
		"不明なエラーが発生しました。ログで詳細を確認してください。",
		"システム エラーが発生しました ({0})",
		"不明なエラーが発生しました。ログで詳細を確認してください。",
		"{0} (合計 {1} エラー)",
		"不明なエラーが発生しました。ログで詳細を確認してください。",
		"実装されていません",
		"無効な引数: {0}",
		"無効な引数",
		"無効な状態: {0}",
		"無効な状態",
		"必要なファイルを読み込みに失敗しました。インターネット接続が切れたか、接続先のサーバーがオフラインです。ブラウザーを更新して、もう一度やり直してください。",
		"必要なファイルの読み込みに失敗しました。アプリケーションを再起動してもう一度試してください。詳細: {0}",
	],
	"vs/base/common/keyCodes": [
		"Windows",
		"コントロール",
		"Shift",
		"Alt",
		"コマンド",
		"Windows",
		"Ctrl",
		"Shift",
		"Alt",
		"コマンド",
		"Windows",
	],
	"vs/base/common/severity": [
		"エラー",
		"警告",
		"情報",
	],
	"vs/base/parts/quickopen/browser/quickOpenModel": [
		"{0}、選択",
		"選択",
	],
	"vs/base/parts/quickopen/browser/quickOpenWidget": [
		"クイック選択。入力すると結果が絞り込まれます。",
		"クイック選択",
	],
	"vs/base/parts/tree/browser/treeDefaults": [
		"折りたたむ",
	],
	"vs/editor/common/config/commonEditorConfig": [
		"エディター",
		"フォント ファミリを制御します。",
		"フォントの太さを制御します。",
		"フォント サイズを制御します。",
		"行の高さを制御します。fontSize に基づいて lineHeight を計算する場合には、0 を使用します。",
		"行番号の表示を制御します",
		"グリフ余白の表示を制御します",
		"垂直ルーラーを表示する列",
		"単語に関連したナビゲーションまたは操作を実行するときに、単語の区切り文字として使用される文字",
		"1 つのタブに相当するスペースの数。`editor.detectIndentation` がオンの場合、この設定はファイル コンテンツに基づいて上書きされます。",
		"\'number\' が必要です。`editor.detectIndentation` 設定によって値 \"auto\" が置き換えられていることに注意してください。",
		"Tab キーを押すとスペースが挿入されます。`editor.detectIndentation` がオンの場合、この設定はファイル コンテンツに基づいて上書きされます。",
		"\'boolean\' が必要です。`editor.detectIndentation` 設定によって値 \"auto\" が置き換えられていることに注意してください。",
		"ファイルを開くと、そのファイルの内容に基づいて `editor.tabSize` と `editor.insertSpaces` が検出されます。",
		"選択範囲の角を丸くするかどうかを制御します",
		"エディターで最後の行を越えてスクロールするかどうかを制御します",
		"エディターで次の行に折り返される文字数を制御します。これを 0 に設定すると、ビューポートの幅での折り返しがオンになります (ワード ラップ)。これを -1 に設定するとエディターによる折り返しが禁止されます。",
		"Controls if lines should wrap. The lines will wrap at min(editor.wrappingColumn, viewportWidthInColumns).",
		"折り返し行のインデントを制御します。\'none\'、\'same\'、または \'indent\' のいずれかを指定できます。",
		"マウス ホイール スクロール イベントの `deltaX` と `deltaY` で使用される乗数",
		"入力中にクイック候補を表示するかどうかを制御します",
		"クイック候補が表示されるまでの待ち時間 (ミリ秒) を制御します",
		"パラメーター ヒントを有効にする",
		"エディターで左角かっこの後に自動的に右角かっこを挿入するかどうかを制御します",
		"エディターで入力後に自動的に行の書式設定を行うかどうかを制御します",
		"トリガー文字の入力時に候補が自動的に表示されるようにするかどうかを制御します",
		"\'Tab\' キーに加えて \'Enter\' キーで候補を受け入れるかどうかを制御します。改行の挿入や候補の反映の間であいまいさを解消するのに役立ちます。",
		"他の修正候補と一緒にスニペットを表示するかどうか、およびその並び替えの方法を制御します。",
		"単語ベースの修正候補を有効にします。",
		"プレフィックスが一致する場合にスニペットを挿入します。\'quickSuggestions\' が無効な場合に最適です。",
		"エディターで選択範囲に類似する一致箇所を強調表示するかどうかを制御します",
		"概要ルーラーの同じ位置に表示できる装飾の数を制御します",
		"カーソルのアニメーション スタイルを制御します。指定できる値は \'blink\'、\'smooth\'、\'phase\'、\'expand\'、\'solid\' です",
		"Ctrl キーを押しながらマウス ホイールを使用してエディターのフォントをズームします",
		"カーソルのスタイルを制御します。指定できる値は \'block\'、\'line\'、\'underline\' です",
		"フォントの合字を使用します",
		"概要ルーラーでカーソルを非表示にするかどうかを制御します。",
		"エディターで空白文字を表示するかどうかを制御します",
		"エディターで制御文字を表示する必要があるかどうかを制御します",
		"エディターでインデントのガイドを表示する必要があるかどうかを制御します",
		"Controls whether the editor should render the current line highlight",
		"エディターでコード レンズを表示するかをどうかを制御する",
		"エディターでコードの折りたたみを有効にするかどうかを制御します",
		"空白の挿入や削除はタブ位置に従って行われます",
		"自動挿入された末尾の空白を削除する",
		"エディターのコンテンツをダブルクリックするか、Esc キーを押しても、ピーク エディターを開いたままにします。",
		"差分エディターが差分を横に並べて表示するか、行内に表示するかを制御します",
		"差分エディターが、先頭または末尾の空白の変更を差分として表示するかどうかを制御します。",
		"Linux の PRIMARY クリップボードをサポートするかどうかを制御します。",
	],
	"vs/editor/common/config/defaultConfig": [
		"エディターのコンテンツ",
	],
	"vs/editor/common/controller/cursor": [
		"コマンドの実行中に予期しない例外が発生しました。",
	],
	"vs/editor/common/model/textModelWithTokens": [
		"入力のトークン化中にモードが失敗しました。",
	],
	"vs/editor/common/modes/modesRegistry": [
		"プレーンテキスト",
	],
	"vs/editor/common/services/bulkEdit": [
		"この間に次のファイルが変更されました: {0}",
	],
	"vs/editor/common/services/modeServiceImpl": [
		"言語の宣言を提供します。",
		"言語の ID。",
		"言語の名前のエイリアス。",
		"言語に関連付けられているファイルの拡張子。",
		"言語に関連付けられたファイル名。",
		"言語に関連付けられたファイル名の glob パターン。",
		"言語に関連付けられている MIME の種類。",
		"言語のファイルの最初の行に一致する正規表現。",
		"言語の構成オプションを含むファイルへの相対パス。",
		"`contributes.{0}` に対する空の値",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` を省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` を省略するか、型 `string[]` にする必要があります",
		"正しくない `contributes.{0}`。配列が必要です。",
	],
	"vs/editor/common/services/modelServiceImpl": [
		"[{0}] {1}",
		"設定を更新してください: `editor.detectIndentation` は `editor.tabSize`: \"auto\" または `editor.insertSpaces`: \"auto\" を置き換えます",
	],
	"vs/editor/contrib/carretOperations/common/carretOperations": [
		"カレットを左に移動します",
		"カレットを右に移動します",
	],
	"vs/editor/contrib/clipboard/browser/clipboard": [
		"切り取り",
		"コピー",
		"貼り付け",
	],
	"vs/editor/contrib/comment/common/comment": [
		"行コメントの切り替え",
		"行コメントの追加",
		"行コメントの削除",
		"ブロック コメントの切り替え",
	],
	"vs/editor/contrib/contextmenu/browser/contextmenu": [
		"エディターのコンテキスト メニューの表示",
	],
	"vs/editor/contrib/find/browser/findWidget": [
		"検索",
		"検索",
		"前の一致項目",
		"次の一致項目",
		"選択範囲を検索",
		"閉じる",
		"置換",
		"置換",
		"置換",
		"すべて置換",
		"置換モードの切り替え",
		"最初の 999 の結果だけを強調表示しますが、テキスト全体を検索します。",
		"{1} の {0}",
		"結果がありません",
	],
	"vs/editor/contrib/find/common/findController": [
		"検索",
		"次を検索",
		"前を検索",
		"次の選択項目を検索",
		"前の選択項目を検索",
		"置換",
		"選択した項目を次の一致項目に追加",
		"選んだ項目を前の一致項目に追加する",
		"最後に選択した項目を次の一致項目に移動",
		"最後に選んだ項目を前の一致項目に移動する",
		"一致項目のすべての出現個所を選択",
		"すべての出現箇所を変更",
	],
	"vs/editor/contrib/folding/browser/folding": [
		"展開",
		"再帰的に展開する",
		"折りたたみ",
		"再帰的に折りたたむ",
		"すべて折りたたみ",
		"すべて展開",
		"折りたたみレベル 1",
		"折りたたみレベル 2",
		"折りたたみレベル 3",
		"折りたたみレベル 4",
		"折りたたみレベル 5",
	],
	"vs/editor/contrib/format/common/formatActions": [
		"コードのフォーマット",
	],
	"vs/editor/contrib/goToDeclaration/browser/goToDeclaration": [
		" - {0} の定義",
		"定義へ移動",
		"定義を横に開く",
		"ピークの定義",
		"クリックして、見つかった {0} の定義を表示します。",
	],
	"vs/editor/contrib/gotoError/browser/gotoError": [
		"修正候補: ",
		"修正候補: ",
		"({0}/{1}) [{2}]",
		"({0}/{1})",
		"次のエラーまたは警告へ移動",
		"前のエラーまたは警告へ移動",
	],
	"vs/editor/contrib/hover/browser/hover": [
		"ホバーの表示",
	],
	"vs/editor/contrib/hover/browser/modesContentHover": [
		"読み込んでいます...",
	],
	"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace": [
		"前の値に置換",
		"次の値に置換",
	],
	"vs/editor/contrib/indentation/common/indentation": [
		"インデントをスペースに変換",
		"インデントをタブに変換",
		"構成されたタブのサイズ",
		"現在のファイルのタブのサイズを選択",
		"タブによるインデント",
		"スペースによるインデント",
		"内容からインデントを検出",
		"空白文字の表示の切り替え",
		"制御文字の切り替え",
	],
	"vs/editor/contrib/linesOperations/common/linesOperations": [
		"行を上へコピー",
		"行を下へコピー",
		"行を上へ移動",
		"行を下へ移動",
		"行を昇順に並べ替え",
		"行を降順に並べ替え",
		"末尾の空白のトリミング",
		"行の削除",
		"行のインデント",
		"行のインデント解除",
		"行を上に挿入",
		"行を下に挿入",
	],
	"vs/editor/contrib/links/browser/links": [
		"command キーを押しながらクリックしてリンク先を表示",
		"Ctrl キーを押しながらクリックしてリンク先を表示",
		"申し訳ありません。このリンクは形式が正しくないため開くことができませんでした: {0}",
		"申し訳ありません。このリンクはターゲットが存在しないため開くことができませんでした。",
		"リンクを開く",
	],
	"vs/editor/contrib/multicursor/common/multicursor": [
		"カーソルを上に挿入",
		"カーソルを下に挿入",
		"選択した行から複数のカーソルを作成",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHints": [
		"パラメーター ヒントをトリガー",
	],
	"vs/editor/contrib/parameterHints/browser/parameterHintsWidget": [
		"{0}、ヒント",
	],
	"vs/editor/contrib/quickFix/browser/quickFix": [
		"クイック修正",
	],
	"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget": [
		"{0}、クイック修正候補",
		"読み込んでいます...",
		"修正候補はありません。",
		"クイック修正",
		"{0}、受け入れ済み",
	],
	"vs/editor/contrib/quickOpen/browser/gotoLine": [
		"行 {0} 列 {1} へ移動",
		"行 {0} へ移動",
		"移動先の行番号を 1 ～ {0} の範囲で入力してください",
		"移動先の列を 1 ～ {0} の範囲で入力してください",
		"Go to line {0}",
		"オプションのコロンと列番号の前に移動先の行番号を入力してください",
		"指定行へ移動...",
	],
	"vs/editor/contrib/quickOpen/browser/quickCommand": [
		"{0}, commands",
		"実行する操作の名前を入力してください",
		"コマンド パレット",
	],
	"vs/editor/contrib/quickOpen/browser/quickOutline": [
		"{0}, symbols",
		"移動先の識別子の名前を入力してください",
		"シンボルへ移動...",
		"シンボル ({0})",
		"モジュール ({0})",
		"クラス ({0})",
		"インターフェイス ({0})",
		"メソッド ({0})",
		"関数 ({0})",
		"プロパティ ({0})",
		"変数 ({0})",
		"変数 ({0})",
		"コンストラクター ({0})",
		"呼び出し ({0})",
	],
	"vs/editor/contrib/referenceSearch/browser/referenceSearch": [
		" - {0} の参照",
		"すべての参照の検索",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesController": [
		"読み込んでいます...",
	],
	"vs/editor/contrib/referenceSearch/browser/referencesWidget": [
		"ファイルを解決できませんでした。",
		"{0} 個の参照",
		"{0} 個の参照",
		"プレビューを表示できません",
		"参照",
		"結果がありません",
		"参照",
	],
	"vs/editor/contrib/rename/browser/rename": [
		"申し訳ありません。名前の変更を実行できませんでした。",
		"シンボルの名前を変更",
	],
	"vs/editor/contrib/rename/browser/renameInputField": [
		"名前変更入力。新しい名前を入力し、Enter キーを押してコミットしてください。",
	],
	"vs/editor/contrib/rename/common/rename": [
		"結果がありません。",
	],
	"vs/editor/contrib/smartSelect/common/jumpToBracket": [
		"ブラケットへ移動",
	],
	"vs/editor/contrib/smartSelect/common/smartSelect": [
		"選択範囲を拡大",
		"選択範囲を縮小",
	],
	"vs/editor/contrib/suggest/browser/suggestController": [
		"Trigger Suggest",
	],
	"vs/editor/contrib/suggest/browser/suggestWidget": [
		"詳細を表示...{0}",
		"{0}、候補、詳細あり",
		"{0}、候補",
		"戻る",
		"読み込んでいます...",
		"候補はありません。",
		"{0}、受け入れ済み",
		"{0}、候補、詳細あり",
		"{0}、候補",
	],
	"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode": [
		"フォーカスを設定するために Tab キーの使用を切り替える",
	],
	"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap": [
		"表示: [右端で折り返す] の設定/解除",
	],
	"vs/editor/contrib/zoneWidget/browser/peekViewWidget": [
		"閉じる",
	],
	"vs/languages/html/common/html.contribution": [
		"HTML",
		"1 行あたりの最大文字数 (0 = 無効にする)。",
		"再フォーマットしてはならないタグの、コンマ区切りの一覧。\'null\' の場合、既定で https://www.w3.org/TR/html5/dom.html#phrasing-content にリストされているすべてのタグになります。",
		"<head> セクションと <body> セクションをインデントします。",
		"要素の前にある既存の改行を保持するかどうか。要素の前でのみ機能し、タグの内側やテキストに対しては機能しません。",
		"1 つのチャンク内に保持できる改行の最大数。無制限にするには、\'null\' を使います。",
		"書式設定とインデント {{#foo}} および {{/foo}}。",
		"末尾に改行を入れます。",
		"直前に改行を 1 つ入れるタグの、コンマで区切られたリストです。\'null\' は、既定値の \"head, body, /html\" を表します。",
		"Configures if the built-in HTML language support suggests Angular V1 tags and properties.",
		"Configures if the built-in HTML language support suggests Ionic tags, properties and values.",
		"Configures if the built-in HTML language support suggests HTML5 tags, properties and values.",
	],
	"vs/platform/configuration/common/configurationRegistry": [
		"構成の設定を提供します。",
		"設定の概要です。このラベルは、設定ファイルでコメントの区切り文字として使用します。",
		"構成のプロパティの説明です。",
		"設定すると、\'configuration.type\' は \'オブジェクトに設定されなければなりません",
		"\'configuration.title\' は、文字列である必要があります",
		"\'configuration.properties\' は、オブジェクトである必要があります",
	],
	"vs/platform/extensions/common/abstractExtensionService": [
		"拡張機能 `{1}` のアクティブ化に失敗しました。理由: 依存関係 `{0}` が不明です。",
		"拡張機能 `{1}` のアクティブ化に失敗しました。理由: 依存関係 `{0}` のアクティブ化に失敗しました。",
		"拡張機能 `{0}` のアクティブ化に失敗しました。理由: 依存関係のレベルが 10 を超えています (依存関係のループの可能性があります)。",
		"拡張機能 `{0}` のアクティブ化に失敗しました: {1}。",
	],
	"vs/platform/extensions/common/extensionsRegistry": [
		"空の拡張機能の説明を入手しました",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` は必須で、型 `object` でなければなりません",
		"プロパティ `{0}` は必須で、型 `string` でなければなりません",
		"プロパティ `{0}` は省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` は省略するか、型 `string[]` にする必要があります",
		"プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません",
		"プロパティ `{0}` は省略するか、型 `string` にする必要があります",
		"拡張機能のフォルダー ({1}) の中に `main` ({0}) が含まれることが予期されます。これにより拡張機能を移植できなくなる可能性があります。",
		"プロパティ `{0}` と `{1}` は、両方とも指定するか両方とも省略しなければなりません",
		"VS Code ギャラリーで使用される拡張機能の表示名。",
		"VS Code ギャラリーで拡張機能の分類に使用されるカテゴリ。",
		"VS Code マーケットプレースで使用されるバナー。",
		"VS Code マーケットプレース ページ ヘッダー上のバナーの色。",
		"バナーで使用されるフォントの配色テーマ。",
		"VS Code 拡張機能の公開元。",
		"VS Code 拡張機能のアクティブ化イベント。",
		"他の拡張機能に対する依存関係。拡張機能の識別子は常に ${publisher}.${name} です。例: vscode.csharp。",
		"パッケージが VS Code 拡張機能として公開される前に実行されるスクリプト。",
		"このパッケージで表される VS Code 拡張機能のすべてのコントリビューション。",
	],
	"vs/platform/keybinding/browser/keybindingServiceImpl": [
		"他に使用できるコマンドは次のとおりです: ",
		"({0}) が押されました。2 番目のキーを待っています...",
		"キーの組み合わせ ({0}、{1}) はコマンドではありません。",
	],
	"vs/platform/message/common/message": [
		"閉じる",
		"後で",
		"キャンセル",
	]
});