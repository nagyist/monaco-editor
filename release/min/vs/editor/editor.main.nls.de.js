/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.5.3(843f28241b6ffacbd2acc8882acc1ce3a74247c2)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.de",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (erneut aufgetreten)"],"vs/base/browser/ui/findinput/findInput":["Regulären Ausdruck verwenden","Nur ganzes Wort suchen","Groß-/Kleinschreibung beachten","Eingabe"],"vs/base/browser/ui/inputbox/inputBox":["Fehler: {0}","Warnung: {0}","Info: {0}"],"vs/base/common/errors":["{0}. Fehlercode: {1}","Berechtigung verweigert (HTTP {0})","Berechtigung verweigert","{0} (HTTP {1}: {2})","{0} (HTTP {1})","Unbekannter Verbindungsfehler ({0})","Es ist ein unbekannter Verbindungsfehler aufgetreten. Entweder besteht keine Internetverbindung mehr, oder der verbundene Server ist offline.","{0}: {1}","Ein unbekannter Fehler ist aufgetreten. Weitere Details dazu finden Sie im Protokoll.","Systemfehler ({0})","Ein unbekannter Fehler ist aufgetreten. Weitere Details dazu finden Sie im Protokoll.","{0} ({1} Fehler gesamt)","Ein unbekannter Fehler ist aufgetreten. Weitere Details dazu finden Sie im Protokoll.","Nicht implementiert","ungültiges Argument: {0}","ungültiges Argument","ungültiger Status: {0}","ungültiger Status","Eine erforderliche Datei konnte nicht geladen werden. Entweder sind Sie nicht mehr mit dem Internet verbunden oder der verbundene Server ist offline. Aktualisieren Sie den Browser, und wiederholen Sie den Vorgang.","Fehler beim Laden einer erforderlichen Datei. Bitte starten Sie die Anwendung neu, und versuchen Sie es dann erneut. Details: {0}"],"vs/base/common/json":["Ungültiges Symbol","Ungültiges Zahlenformat.","Ein Eigenschaftenname wurde erwartet.","Ein Wert wurde erwartet.","Ein Doppelpunkt wurde erwartet.","Ein Komma wurde erwartet.","Eine schließende geschweifte Klammer wurde erwartet.","Eine schließende Klammer wurde erwartet.","Das Dateiende wurde erwartet."],"vs/base/common/keyCodes":["Windows","Steuerelement","Umschalttaste","Alt","Befehl","Windows","Strg","Umschalttaste","Alt","Befehl","Windows"],"vs/base/common/severity":["Fehler","Warnung","Info"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, Auswahl","Auswahl"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Schnellauswahl. Nehmen Sie eine Eingabe vor, um die Ergebnisse einzugrenzen.","Schnellauswahl"],"vs/base/parts/tree/browser/treeDefaults":["Zuklappen"],"vs/editor/browser/standalone/standaloneSchemas":["JSON schema for ASP.NET project.json files","Compilation options that are passed through to Roslyn","The version of the dependency.","The type of the dependency. 'build' dependencies only exist at build time","The dependencies of the application. Each entry specifes the name and the version of a Nuget package.","A command line script or scripts.\r\rAvailable variables:\r%project:Directory% - The project directory\r%project:Name% - The project name\r%project:Version% - The project version","The author of the application","List of files to exclude from publish output (kpm bundle).","Glob pattern to specify all the code files that needs to be compiled. (data type: string or array with glob pattern(s)). Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","Commands that are available for this application","Configurations are named groups of compilation settings. There are 2 defaults built into the runtime namely 'Debug' and 'Release'.","The description of the application","Glob pattern to indicate all the code files to be excluded from compilation. (data type: string or array with glob pattern(s)).","Target frameworks that will be built, and dependencies that are specific to the configuration.","Glob pattern to indicate all the code files to be preprocessed. (data type: string with glob pattern).","Glob pattern to indicate all the files that need to be compiled as resources.","Scripts to execute during the various stages.","Glob pattern to specify the code files to share with dependent projects. Example: [ 'Folder1\\*.cs', 'Folder2\\*.cs' ]","The version of the application. Example: 1.2.0.0","Specifying the webroot property in the project.json file specifies the web server root (aka public folder). In visual studio, this folder will be used to root IIS. Static files should be put in here.","JSON schema for Bower configuration files","Any property starting with _ is valid.","The name of your package.","Help users identify and search for your package with a brief description.","A semantic version number.","The primary acting files necessary to use your package.","SPDX license identifier or path/url to a license.","A list of files for Bower to ignore when installing your package.","Used for search by keyword. Helps make your package easier to discover without people needing to know its name.","A list of people that authored the contents of the package.","URL to learn more about the package. Falls back to GitHub project if not specified and it's a GitHub endpoint.","The repository in which the source code can be found.","Dependencies are specified with a simple hash of package name to a semver compatible identifier or URL.","Dependencies that are only needed for development of the package, e.g., test framework or building documentation.","Dependency versions to automatically resolve with if conflicts occur between packages.","If you set it to  true  it will refuse to publish it. This is a way to prevent accidental publication of private repositories.","Used by grunt-bower-task to specify custom install locations.","The types of modules this package exposes","NPM configuration for this package.","A person who has been involved in creating or maintaining this package","Dependencies are specified with a simple hash of package name to version range. The version range is a string which has one or more space-separated descriptors. Dependencies can also be identified with a tarball or git URL.","Any property starting with _ is valid.","The name of the package.","Version must be parseable by node-semver, which is bundled with npm as a dependency.","This helps people discover your package, as it's listed in 'npm search'.","The relative path to the icon of the package.","This helps people discover your package as it's listed in 'npm search'.","The url to the project homepage.","The url to your project's issue tracker and / or the email address to which issues should be reported. These are helpful for people who encounter issues with your package.","The url to your project's issue tracker.","The email address to which issues should be reported.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","You should specify a license for your package so that people know how they are permitted to use it, and any restrictions you're placing on it.","A list of people who contributed to this package.","A list of people who maintains this package.","The 'files' field is an array of files to include in your project. If you name a folder in the array, then it will also include the files inside that folder.","The main field is a module ID that is the primary entry point to your program.","Specify either a single file or an array of filenames to put in place for the man program to find.","If you specify a 'bin' directory, then all the files in that folder will be used as the 'bin' hash.","Put markdown files in here. Eventually, these will be displayed nicely, maybe, someday.","Put example scripts in here. Someday, it might be exposed in some clever way.","Tell people where the bulk of your library is. Nothing special is done with the lib folder in any way, but it's useful meta info.","A folder that is full of man pages. Sugar to generate a 'man' array by walking the folder.","Specify the place where your code lives. This is helpful for people who want to contribute.","The 'scripts' member is an object hash of script commands that are run at various times in the lifecycle of your package. The key is the lifecycle event, and the value is the command to run at that point.","A 'config' hash can be used to set configuration parameters used in package scripts that persist across upgrades.","Array of package names that will be bundled when publishing the package.","Array of package names that will be bundled when publishing the package.","If your package is primarily a command-line application that should be installed globally, then set this value to true to provide a warning if it is installed locally.","If set to true, then npm will refuse to publish it.","JSON schema for the ASP.NET global configuration files","A list of project folders relative to this file.","A list of source folders relative to this file.","The runtime to use.","The runtime version to use.","The runtime to use, e.g. coreclr","The runtime architecture to use, e.g. x64.","JSON schema for the TypeScript compiler's configuration file","Instructs the TypeScript compiler how to compile .ts files","The character set of the input files","Generates corresponding d.ts files.","Show diagnostic information.","Emit a UTF-8 Byte Order Mark (BOM) in the beginning of output files.","Emit a single file with source maps instead of having a separate file.","Emit the source alongside the sourcemaps within a single file; requires --inlineSourceMap to be set.","Print names of files part of the compilation.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Specify module code generation: 'CommonJS', 'Amd', 'System', or 'UMD'.","Specifies the end of line sequence to be used when emitting files: 'CRLF' (dos) or 'LF' (unix).)","Do not emit output.","Do not emit outputs if any type checking errors were reported.","Do not generate custom helper functions like __extends in compiled output.","Warn on expressions and declarations with an implied 'any' type.","Do not include the default library file (lib.d.ts).","Do not add triple-slash references or module import targets to the list of compiled files.","Concatenate and emit output to single file.","Redirect output structure to the directory.","Do not erase const enum declarations in generated code.","Do not emit comments to output.","Specifies the root directory of input files. Use to control the output directory structure with --outDir.","Generates corresponding '.map' file.","Specifies the location where debugger should locate TypeScript files instead of source locations.","Suppress noImplicitAny errors for indexing objects lacking index signatures.","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Watch input files.","Enable the JSX option (requires TypeScript 1.6):  'preserve', 'react'.","Emits meta data.for ES7 decorators.","Supports transpiling single TS files into JS files.","Enables experimental support for ES7 decorators.","Enables experimental support for async functions (requires TypeScript 1.6).","If no 'files' property is present in a tsconfig.json, the compiler defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","JSON schema for the JavaScript configuration file","Instructs the JavaScript language service how to validate .js files","The character set of the input files","Show diagnostic information.","The locale to use to show error messages, e.g. en-us.","Specifies the location where debugger should locate map files instead of generated locations","Module code generation to resolve against: 'commonjs', 'amd', 'system', or 'umd'.","Do not include the default library file (lib.d.ts).","Specify ECMAScript target version:  'ES3' (default), 'ES5', or 'ES6' (experimental).","Enables experimental support for ES7 decorators.","If no 'files' property is present in a jsconfig.json, the language service defaults to including all files the containing directory and subdirectories. When a 'files' property is specified, only those files are included.","List files and folders that should not be included. This property is not honored when the 'files' property is present."],"vs/editor/common/config/commonEditorConfig":["Editor","Steuert die Schriftfamilie.","Steuert den Schriftgrad.","Steuert die Zeilenhöhe.","Steuert die Sichtbarkeit der Zeilennummern.","Steuert die Sichtbarkeit des Glyphenrands.","Spalten, an denen vertikale Lineale angezeigt werden sollen","Zeichen, die als Worttrennzeichen verwendet werden, wenn wortbezogene Navigationen oder Vorgänge ausgeführt werden.","Die Anzahl der Leerzeichen, denen ein Tabstopp entspricht.",'"number" wurde erwartet. Beachten Sie, dass der Wert "auto" durch die Einstellung "editor.detectIndentation" ersetzt wurde.',"Fügt beim Drücken der TAB-TASTE Leerzeichen ein.",'"boolean" wurde erwartet. Beachten Sie, dass der Wert "auto" durch die Einstellung "editor.detectIndentation" ersetzt wurde.','Beim Öffnen einer Datei werden "editor.tabSize" und "editor.insertSpaces" basierend auf den Dateiinhalten erkannt.',"Steuert, ob die Auswahl runde Ecken aufweist.","Legt fest, ob der Editor Bildläufe über die letzte Zeile hinaus ausführt.","Steuert, nach wie vielen Zeichen der Editor einen Umbruch in die nächste Zeile ausführt. Durch das Festlegen auf 0 wird der Umbruch auf Viewportbreite aktiviert (Zeilenumbruch). Wenn diese Einstellung auf -1 festgelegt wird, führt der Editor nie einen Umbruch aus.",'Steuert den Einzug der umbrochenen Zeilen. Der Wert kann "none", "same" oder "indent" sein.','Ein Multiplikator, der für die Mausrad-Bildlaufereignisse "deltaX" und "deltaY" verwendet werden soll.',"Steuert, ob Schnellvorschläge während der Eingabe angezeigt werden.","Steuert die Verzögerung in ms für die Anzeige der Schnellvorschläge.","Aktiviert Parameterhinweise.","Steuert, ob der Editor Klammern automatisch nach dem Öffnen schließt.","Steuert, ob der Editor Zeilen automatisch nach der Eingabe formatiert.","Steuert, ob Vorschläge automatisch bei der Eingabe von Triggerzeichen angezeigt werden.","Steuert, ob Vorschläge über die EINGABETASTE (zusätzlich zur TAB-TASTE) angenommen werden sollen. Vermeidet Mehrdeutigkeit zwischen dem Einfügen neuer Zeilen oder dem Annehmen von Vorschlägen.","Controls whether snippets are shown with other suggestions and how they are sorted.","Enable word based suggestions.","Insert snippets when their prefix matches. Works best when 'quickSuggestions' aren't enabled.","Steuert, ob der Editor der Auswahl ähnelnde Übereinstimmungen hervorheben soll.","Steuert die Anzahl von Dekorationen, die an derselben Position im Übersichtslineal angezeigt werden.",'Steuert den Cursoranimationsstil. Gültige Werte sind "blink", "smooth", "phase", "expand" und "solid".',"Schriftart des Editors vergrößern, wenn das Mausrad verwendet und die STRG-TASTE gedrückt wird",'Steuert den Cursorstil. Gültige Werte sind "block", "line" und "underline".',"Aktiviert Schriftartligaturen.","Steuert die Sichtbarkeit des Cursors im Übersichtslineal.","Steuert, ob der Editor Leerzeichen rendert.","Steuert, ob der Editor Steuerzeichen rendern soll.","Steuert, ob der Editor Einzugsführungslinien rendern soll.","Steuert, ob der Editor Verweisinformationen zu den Modi anzeigt, die dies unterstützen.","Steuert, ob für den Editor Codefaltung aktiviert ist.","Das Einfügen und Löschen von Leerzeichen folgt auf Tabstopps.","Nachfolgendes automatisch eingefügtes Leerzeichen entfernen","Vorschau-Editoren geöffnet lassen, auch wenn auf ihren Inhalt doppelgeklickt oder die ESC-TASTE gedrückt wird.","Steuert, ob der Diff-Editor das Diff nebeneinander oder inline anzeigt.","Steuert, ob der Diff-Editor Änderungen in führenden oder nachgestellten Leerzeichen als Diffs anzeigt.","Steuert, ob die primäre Linux-Zwischenablage unterstützt werden soll."],"vs/editor/common/config/defaultConfig":["Editor-Inhalt"],"vs/editor/common/controller/cursor":["Unerwartete Ausnahme beim Ausführen des Befehls."],"vs/editor/common/editorCommon":["Move cursor to a logical position in the view","Cursor move argument","Argument containing mandatory 'to' value and an optional 'inSelectionMode' value. Value of 'to' has to be a defined value in `CursorMoveViewPosition`."],"vs/editor/common/model/textModelWithTokens":["Fehler des Modus bei der Tokenumwandlung der Eingabe."],"vs/editor/common/modes/modesRegistry":["Nur-Text"],"vs/editor/common/services/bulkEdit":["Die folgenden Dateien wurden in der Zwischenzeit geändert: {0}"],"vs/editor/common/services/modeServiceImpl":["Contributes-Sprachdeklarationen","Die ID der Sprache.","Namealiase für die Sprache.","Dateierweiterungen, die der Sprache zugeordnet sind.","Dateinamen, die der Sprache zugeordnet sind.","Dateinamen-Globmuster, die Sprache zugeordnet sind.","MIME-Typen, die der Sprache zugeordnet sind.","Ein regulärer Ausdruck, der mit der ersten Zeile einer Datei der Sprache übereinstimmt.","Ein relativer Pfad zu einer Datei mit Konfigurationsoptionen für die Sprache.",'Leerer Wert für "contributes.{0}".','Die Eigenschaft "{0}" ist erforderlich. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" kann ausgelassen werden. Sie muss vom Typ "string[]" sein.','Die Eigenschaft "{0}" kann ausgelassen werden. Sie muss vom Typ "string[]" sein.','Die Eigenschaft "{0}" kann ausgelassen werden. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" kann ausgelassen werden. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" kann ausgelassen werden. Sie muss vom Typ "string[]" sein.','Die Eigenschaft "{0}" kann ausgelassen werden. Sie muss vom Typ "string[]" sein.','Ungültige Angabe "contributes.{0}". Es wurde ein Array erwartet.'],"vs/editor/common/services/modelServiceImpl":['Bitte aktualisieren Sie Ihre Einstellungen: "editor.detectIndentation" ersetzt "editor.tabSize": "auto" oder "editor.insertSpaces": "auto"'],"vs/editor/contrib/accessibility/browser/accessibility":["Hilfe zur Barrierefreiheit anzeigen","Vielen Dank, dass Sie die experimentellen Optionen für Barrierefreiheit von VS Code testen.","Status:","Durch Drücken der TAB-TASTE in diesem Editor wird der Fokus in das nächste Element verschoben, das den Fokus erhalten kann. Schalten Sie dieses Verhalten um, indem Sie {0} drücken.","Durch Drücken der TAB-TASTE in diesem Editor wird der Fokus in das nächste Element verschoben, das den Fokus erhalten kann. Der Befehl {0} kann zurzeit nicht durch eine Tastenbindung ausgelöst werden.","Durch Drücken der TAB-TASTE in diesem Editor wird das Tabstoppzeichen eingefügt. Schalten Sie dieses Verhalten um, indem Sie {0} drücken.","Durch Drücken der TAB-TASTE in diesem Editor wird der Fokus in das nächste Element verschoben, das den Fokus erhalten kann. Der Befehl {0} kann zurzeit nicht durch eine Tastenbindung ausgelöst werden.","Sie können diese QuickInfo schließen und durch Drücken von ESC zum Editor zurückkehren."],"vs/editor/contrib/carretOperations/common/carretOperations":["Verschiebt das Caretzeichen nach links.","Verschiebt das Caretzeichen nach rechts."],"vs/editor/contrib/clipboard/browser/clipboard":["Ausschneiden","Kopieren","Einfügen"],"vs/editor/contrib/comment/common/comment":["Zeilenkommentar umschalten","Zeilenkommentar hinzufügen","Zeilenkommentar entfernen","Blockkommentar umschalten"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Editor-Kontextmenü anzeigen"],"vs/editor/contrib/defineKeybinding/browser/defineKeybinding":["Tastenbindung definieren","Drücken Sie die gewünschte Tastenkombination und die EINGABETASTE.","Tastenbindung definieren","Drücken Sie für Ihr aktuelles Tastaturlayout ","Sie können diese Tastenkombination mit Ihrem aktuellen Tastaturlayout nicht generieren."],"vs/editor/contrib/find/browser/findWidget":["Suchen","Suchen","Vorherige Übereinstimmung","Nächste Übereinstimmung","In Auswahl suchen","Schließen","Ersetzen","Ersetzen","Ersetzen","Alle ersetzen","Ersetzen-Modus wechseln","Nur die ersten 999 Ergebnisse werden hervorgehoben, alle Suchvorgänge beziehen sich aber auf den gesamten Text.","{0} von {1}","Keine Ergebnisse"],"vs/editor/contrib/find/common/findController":["Alle Vorkommen auswählen und Übereinstimmung suchen","Alle Vorkommen ändern","Suchen","Nächstes Element suchen","Vorheriges Element suchen","Nächste Auswahl suchen","Vorherige Auswahl suchen","Ersetzen","Letzte Auswahl in nächste Übereinstimmungssuche verschieben","Letzte Auswahl in vorherige Übereinstimmungssuche verschieben","Auswahl zur nächsten Übereinstimmungssuche hinzufügen","Letzte Auswahl zu vorheriger Übereinstimmungssuche hinzufügen"],"vs/editor/contrib/folding/browser/folding":["Auffalten","Faltung rekursiv aufheben","Falten","Rekursiv falten","Alle falten","Alle auffalten","Faltebene 1","Faltebene 2","Faltebene 3","Faltebene 4","Faltebene 5"],"vs/editor/contrib/format/common/formatActions":["Code formatieren"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" – {0} Definitionen","Klicken Sie, um die gefundenen {0}-Definitionen anzuzeigen.","Peek-Definition","Gehe zu Definition","Definition an der Seite öffnen"],"vs/editor/contrib/gotoError/browser/gotoError":["Empfohlene Fehlerbehebungen: ","Empfohlene Fehlerbehebung: ","({0}/{1}) [{2}]","({0}/{1})","Gehe zum nächsten Fehler oder zur nächsten Warnung","Gehe zum vorherigen Fehler oder zur vorherigen Warnung"],"vs/editor/contrib/hover/browser/hover":["Hovern anzeigen"],"vs/editor/contrib/hover/browser/modesContentHover":["Wird geladen ..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Durch vorherigen Wert ersetzen","Durch nächsten Wert ersetzen"],"vs/editor/contrib/indentation/common/indentation":["Konfigurierte Tabulatorgröße","Tabulatorgröße für aktuelle Datei auswählen","Einzug in Leerzeichen konvertieren","Einzug in Tabstopps konvertieren","Einzug mithilfe von Leerzeichen","Einzug mithilfe von Tabstopps","Einzug aus Inhalt erkennen","Rendern von Leerzeichen umschalten","Steuerzeichen umschalten"],"vs/editor/contrib/linesOperations/common/linesOperations":["Zeile löschen","Zeilen aufsteigend sortieren","Zeilen absteigend sortieren","Nachgestelltes Leerzeichen kürzen","Zeile nach unten verschieben","Zeile nach oben verschieben","Zeile nach unten kopieren","Zeile nach oben kopieren","Zeileneinzug","Zeile ausrücken","Zeile oben einfügen","Zeile unten einfügen"],"vs/editor/contrib/links/browser/links":["BEFEHLSTASTE + Mausklick zum Aufrufen des Links","STRG + Mausklick zum Aufrufen des Links","Ungültiger URI: {0} kann nicht geöffnet werden.","Link öffnen"],"vs/editor/contrib/multicursor/common/multicursor":["Cursor oberhalb hinzufügen","Cursor unterhalb hinzufügen","Mehrere Cursor aus ausgewählten Zeilen erstellen"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Parameterhinweise auslösen"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, Hinweis"],"vs/editor/contrib/quickFix/browser/quickFix":["Schnelle Problembehebung"],"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget":["{0}, Vorschlag für Quick Fix","Wird geladen...","Keine Problembehebungsvorschläge.","Schneller Fix","{0}, angenommen"],"vs/editor/contrib/quickOpen/browser/gotoLine":["Gehe zur Zeile {0} und Spalte {1}","Gehe zu Zeile {0}","Zeilennummer zwischen 1 und {0} eingeben, zu der navigiert werden soll","Geben Sie eine Spaltennummer zwischen 1 und {0} ein, zu der navigiert werden soll","Go to line {0}","Gehe zu Zeile...","Geben Sie eine Zeilennummer ein, gefolgt von einem optionalen Doppelpunkt und einer Spaltennummer, zu der Sie navigieren möchten"],"vs/editor/contrib/quickOpen/browser/gotoLine.contribution":["Gehe zu Zeile..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","Befehlspalette","Name der zu ausführenden Aktion eingeben"],"vs/editor/contrib/quickOpen/browser/quickCommand.contribution":["Befehlspalette"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","Gehe zu Symbol...","Name des Bezeichners eingeben, zu dem navigiert werden soll","Symbole ({0})","Module ({0})","Klassen ({0})","Schnittstellen ({0})","Methoden ({0})","Funktionen ({0})","Eigenschaften ({0})","Variablen ({0})","Variablen ({0})","Konstruktoren ({0})","Aufrufe ({0})"],"vs/editor/contrib/quickOpen/browser/quickOutline.contribution":["Gehe zu Symbol..."],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" – {0} Verweise","Alle Verweise suchen","Alle Verweise suchen"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Wird geladen..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Fehler beim Auflösen der Datei.","{0} Verweise","{0} Verweis","Keine Vorschau verfügbar.","Verweise","Keine Ergebnisse","Verweise"],"vs/editor/contrib/rename/browser/rename":["Sorry, rename failed to execute.","Symbol umbenennen"],"vs/editor/contrib/rename/browser/renameInputField":["Benennen Sie die Eingabe um. Geben Sie einen neuen Namen ein, und drücken Sie die EINGABETASTE, um den Commit auszuführen."],"vs/editor/contrib/rename/common/rename":["Kein Ergebnis."],"vs/editor/contrib/smartSelect/common/jumpToBracket":["Gehe zu Klammer"],"vs/editor/contrib/smartSelect/common/smartSelect":["Auswahl erweitern","Auswahl verkleinern"],"vs/editor/contrib/suggest/browser/suggest":["Vorschlag auslösen"],"vs/editor/contrib/suggest/browser/suggestWidget":["Mehr anzeigen...{0}","{0}, Vorschlag, hat Details","{0}, Vorschlag","Zurück","Wird geladen...","Keine Vorschläge.","{0}, angenommen","{0}, Vorschlag, hat Details","{0}, Vorschlag"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Verwendung der TAB-Taste zum Einstellen des Fokus wechseln"],"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap":["Ansicht: Zeilenumbruch umschalten"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Schließen"],"vs/languages/html/common/html.contribution":["HTML","Die maximale Anzahl von Zeichen pro Zeile (0 = deaktiviert).",'Die Liste der Tags (durch Kommas getrennt), die nicht erneut formatiert werden sollen. "null" bezieht sich standardmäßig auf alle Tags, die unter https://www.w3.org/TR/html5/dom.html#phrasing-content aufgeführt werden.',"Nimmt einen Einzug für <head>- und <body>-Abschnitte vor.","Gibt an, ob vorhandene Zeilenumbrüche vor Elemente beibehalten werden sollen. Funktioniert nur vor Elementen, nicht in Tags oder für Text.",'Die maximale Anzahl von Zeilenumbrüchen, die in einem Block beibehalten werden soll. Verwenden Sie "null" für eine unbegrenzte Anzahl.',"Formatiert {{#foo}} und {{/foo}} und nimmt einen Einzug vor.","Endet mit einer neuen Zeile.",'Die Liste der Tags (durch Kommas getrennt), vor denen eine zusätzliche neue Zeile eingefügt werden soll. "null" verwendet standardmäßig "head, body, /HTML".'],"vs/platform/configuration/common/configurationRegistry":["Trägt Konfigurationseigenschaften bei.","Eine Zusammenfassung der Einstellungen. Diese Bezeichnung wird in der Einstellungsdatei als trennender Kommentar verwendet.","Die Beschreibung der Konfigurationseigenschaften.",'Wenn eine Festlegung erfolgt, muss "configuration.type" auf "object" festgelegt werden.',"configuration.title muss eine Zeichenfolge sein.",'"configuration.properties" muss ein Objekt sein.'],"vs/platform/extensions/common/abstractExtensionService":['Fehler beim Aktivieren der Extension "{1}". Ursache: unbekannte Abhängigkeit "{0}".','Fehler beim Aktivieren der Extension "{1}". Ursache: Fehler beim Aktivieren der Extension "{0}".','Fehler beim Aktivieren der Extension "{0}". Ursache: mehr als 10 Ebenen von Abhängigkeiten (wahrscheinlich eine Abhängigkeitsschleife).','Fehler beim Aktivieren der Extension "{0}": {1}.'],"vs/platform/extensions/common/extensionsRegistry":["Es wurde eine leere Extensionbeschreibung abgerufen.",'Die Eigenschaft "{0}" ist erforderlich. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" ist erforderlich. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" ist erforderlich. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" ist erforderlich und muss vom Typ "object" sein.','Die Eigenschaft "{0}" ist erforderlich. Sie muss vom Typ "string" sein.','Die Eigenschaft "{0}" kann ausgelassen werden oder muss vom Typ "string[]" sein.','Die Eigenschaft "{0}" kann ausgelassen werden oder muss vom Typ "string[]" sein.','Die Eigenschaften "{0}" und "{1}" müssen beide angegeben oder beide ausgelassen werden.','Die Eigenschaft "{0}" kann ausgelassen werden oder muss vom Typ "string" sein.','Es wurde erwartet, dass "main" ({0}) im Ordner ({1}) der Extension enthalten ist. Dies führt ggf. dazu, dass die Extension nicht portierbar ist.','Die Eigenschaften "{0}" und "{1}" müssen beide angegeben oder beide ausgelassen werden.',"Der Anzeigename für die Extension, der im VS Code-Katalog verwendet wird.","Die vom VS Code-Katalog zum Kategorisieren der Extension verwendeten Kategorien.","Das in VS Code Marketplace verwendete Banner.","Die Bannerfarbe für die Kopfzeile der VS Code Marketplace-Seite.","Das Farbdesign für die Schriftart, die im Banner verwendet wird.","Der Herausgeber der VS Code-Extension.","Aktivierungsereignisse für die VS Code-Extension.",'Abhängigkeiten von anderen Erweiterungen. Der Bezeichner einer Erweiterung ist immer ${publisher}.${name}, beispielsweise "vscode.csharp".',"Ein Skript, das ausgeführt wird, bevor das Paket als VS Code-Extension veröffentlicht wird.","Alle Beiträge der VS Code-Extension, die durch dieses Paket dargestellt werden."],"vs/platform/keybinding/browser/keybindingServiceImpl":["Die folgenden weiteren Befehle sind verfügbar: ","({0}) wurde gedrückt. Es wird auf die zweite Taste der Kombination gewartet...","Die Tastenkombination ({0}, {1}) ist kein Befehl."],"vs/platform/message/common/message":["Schließen","Later","Abbrechen"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.de.js.map