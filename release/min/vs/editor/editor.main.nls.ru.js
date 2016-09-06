/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.1(ada2ad77ff51ca8550cd47bdaa4520df66c9519d)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/editor/editor.main.nls.ru",{"vs/base/browser/ui/actionbar/actionbar":["{0} ({1})"],"vs/base/browser/ui/aria/aria":["{0} (произошло снова)"],"vs/base/browser/ui/findinput/findInput":["Использовать регулярное выражение","Слово целиком","С учетом регистра","ввод"],"vs/base/browser/ui/inputbox/inputBox":["Ошибка: {0}","Предупреждение: {0}","Сведения: {0}"],"vs/base/common/errors":["{0}. Код ошибки: {1}","Отказано в разрешении (HTTP {0})","Отказано в разрешении","{0} (HTTP {1}: {2})","{0} (HTTP {1})","Неизвестная ошибка подключения ({0})","Произошла неизвестная ошибка подключения. Утеряно подключение к Интернету, либо сервер, к которому вы подключены, перешел в автономный режим.","{0}: {1}","Произошла неизвестная ошибка. Подробные сведения см. в журнале.","Произошла системная ошибка ({0})","Произошла неизвестная ошибка. Подробные сведения см. в журнале.","{0} (всего ошибок: {1})","Произошла неизвестная ошибка. Подробные сведения см. в журнале.","Не реализовано","Недопустимый аргумент: {0}","Недопустимый аргумент","Недопустимое состояние: {0}","Недопустимое состояние","Сбой загрузки требуемого файла. Утеряно подключение к Интернету, либо сервер, к которому вы подключены, перешел в автономный режим. Обновите содержимое браузера, чтобы повторить попытку.","Не удалось загрузить требуемый файл. Перезапустите приложение, чтобы повторить попытку. Дополнительные сведения: {0}."],"vs/base/common/keyCodes":["Windows","Управление","Shift","Alt","COMMAND","Windows","Ctrl","Shift","Alt","COMMAND","Windows"],"vs/base/common/severity":["Ошибка","Предупреждение","Сведения"],"vs/base/parts/quickopen/browser/quickOpenModel":["{0}, средство выбора","средство выбора"],"vs/base/parts/quickopen/browser/quickOpenWidget":["Средство быстрого выбора. Введите, чтобы сузить результаты.","Средство быстрого выбора"],"vs/base/parts/tree/browser/treeDefaults":["Свернуть"],"vs/editor/common/config/commonEditorConfig":["Редактор","Определяет семейство шрифтов.","Управляет насыщенностью шрифта.","Управляет размером шрифта.","Управляет высотой строк. Укажите 0 для вычисления высоты строки по размеру шрифта.","Управляет видимостью номеров строк.","Управляет видимостью полей глифа.","Столбцы, в которых должны отображаться вертикальные линейки","Символы, которые будут использоваться как разделители слов при выполнении навигации или других операций, связанных со словами.",'Число пробелов в табуляции. Эта настройка переопределяется на основании содержимого файла, когда включен параметр "editor.detectIndentation".',"Ожидается число. Обратите внимание, что значение auto заменено параметром editor.detectIndentation.",'Вставлять пробелы при нажатии клавиши TAB. Эта настройка переопределяется на основании содержимого файла, когда включен параметр "editor.detectIndentation".',"Ожидается логическое значение. Обратите внимание, что значение auto заменено параметром editor.detectIndentation.","При открытии файла editor.tabSize и editor.insertSpaces будут определяться на основе содержимого файла.","Определяет, будут ли выделения иметь скругленные углы.","Определяет, будет ли содержимое редактора прокручиваться за последнюю строку.","Определяет число символов, после которых текст будет перенесен на следующую строку. Если этот параметр имеет значение 0, используется перенос по ширине окна просмотра (перенос по словам). Если задать значение –1, то в редакторе не будет выполняться перенос по словам.","Controls if lines should wrap. The lines will wrap at min(editor.wrappingColumn, viewportWidthInColumns).",'Управляет отступом строк с переносом по словам. Допустимые значения: "none", "same" или "indent".',"Множитель, используемый для параметров deltaX и deltaY событий прокрутки колесика мыши.","Определяет, должны ли при вводе текста отображаться краткие предложения.","Управляет длительностью задержки (в мс), перед отображением кратких предложений.","Включение подсказок для параметров","Определяет, должен ли редактор автоматически закрывать скобки после открытия.","Управляет параметром, определяющим, должен ли редактор автоматически форматировать строку после ввода.","Определяет, должны ли при вводе триггерных символов автоматически отображаться предложения.","Определяет, можно ли принимать предложения клавишей ВВОД в дополнение к клавише TAB. Это помогает избежать неоднозначности между вставкой новых строк или принятием предложений.","Управляет отображением фрагментов вместе с другими предложениями и их сортировкой.","Включите предложения на основе слов.",'Вставка фрагментов при совпадении их префиксов. Функция работает оптимально, если параметр "quickSuggestions" отключен.',"Определяет, будет ли редактор выделять фрагменты, совпадающие с выделенным текстом.","Определяет, сколько украшений могут отображаться на одном месте в обзорной линейке.",'Управляет стилем анимации курсора. Допустимые значения: "blink", "smooth", "phase", "expand" и "solid"',"Изменение размера шрифта в редакторе при нажатой клавише CTRL и движении колесика мыши",'Определяет стиль курсора. Допустимые значения: "block", "line" и "underline"',"Включает лигатуры шрифта.","Управляет скрытием курсора в обзорной линейке.","Определяет, должны ли в редакторе отображаться символы-разделители.","Определяет, должны ли в редакторе отображаться управляющие символы.","Определяет, должны ли в редакторе отображаться направляющие отступа.","Controls whether the editor should render the current line highlight","Управляет показом групп связанных элементов кода в редакторе","Определяет, включено ли сворачивание кода в редакторе.","Вставка и удаление пробелов после позиции табуляции","Удалить автоматически вставляемый конечный пробел","Оставлять просматривающие редакторы открытыми, даже если дважды щелкнуто их содержимое или нажата клавиша ESC.","Определяет, как редактор несовпадений отображает отличия: рядом или в тексте.","Определяет, должен ли редактор несовпадений трактовать несовпадения символов-разделителей как различия.","Контролирует, следует ли поддерживать первичный буфер обмена Linux."],"vs/editor/common/config/defaultConfig":["Содержимое редактора"],"vs/editor/common/controller/cursor":["Неожиданное исключение при выполнении команды."],"vs/editor/common/model/textModelWithTokens":["Не удалось разметить входные данные."],"vs/editor/common/modes/modesRegistry":["Обычный текст"],"vs/editor/common/services/bulkEdit":["Следующие файлы были изменены: {0}"],"vs/editor/common/services/modeServiceImpl":["Добавляет объявления языка.","Идентификатор языка.","Псевдонимы имен для языка.","Расширения имен файлов, связанные с языком.","Имена файлов, связанные с языком.","Стандартные маски имен файлов, связанные с языком.","Типы MIME, связанные с языком.","Регулярное выражение, соответствующее первой строке файла языка.","Относительный путь к файлу, содержащему параметры конфигурации для языка.",'Пустое значение "contributes.{0}"','свойство "{0}" является обязательным и должно иметь тип string','свойство "{0}" может быть опущено и должно иметь тип string[]','свойство "{0}" может быть опущено и должно иметь тип string[]','свойство "{0}" может быть опущено и должно иметь тип string','свойство "{0}" может быть опущено и должно иметь тип string','свойство "{0}" может быть опущено и должно иметь тип string[]','свойство "{0}" может быть опущено и должно иметь тип string[]','Недопустимое значение "contributes.{0}". Требуется массив.'],"vs/editor/common/services/modelServiceImpl":["[{0}] {1}","Измените параметры: editor.detectIndentation заменяет editor.tabSize: auto или editor.insertSpaces: auto"],"vs/editor/contrib/carretOperations/common/carretOperations":["Переместить курсор влево","Переместить курсор вправо"],"vs/editor/contrib/clipboard/browser/clipboard":["Вырезать","Копировать","Вставить"],"vs/editor/contrib/comment/common/comment":["Закомментировать или раскомментировать строку","Закомментировать строку","Раскомментировать строку","Закомментировать или раскомментировать блок"],"vs/editor/contrib/contextmenu/browser/contextmenu":["Показать контекстное меню редактора"],"vs/editor/contrib/find/browser/findWidget":["Найти","Найти","Предыдущее соответствие","Следующее соответствие","Найти в выделении","Закрыть","Заменить","Заменить","Заменить","Заменить все",'Режим "Переключение замены"',"Отображаются только первые 999 результатов, но все операции поиска выполняются со всем текстом.","{0} из {1}","Результаты отсутствуют"],"vs/editor/contrib/find/common/findController":["Найти","Найти далее","Найти ранее","Найти следующее выделение","Найти предыдущее выделение","Заменить","Добавить выделение в следующее найденное совпадение","Добавить выделенный фрагмент в предыдущее найденное совпадение","Переместить последнее выделение в следующее найденное совпадение","Переместить последний выделенный фрагмент в предыдущее найденное совпадение","Выбрать все вхождения найденных совпадений","Изменить все вхождения"],"vs/editor/contrib/folding/browser/folding":["Развернуть","Развернуть рекурсивно","Свернуть","Свернуть рекурсивно","Свернуть все","Развернуть все","Уровень сгиба 1","Уровень сгиба 2","Уровень сгиба 3","Уровень сгиба 4","Уровень сгиба 5"],"vs/editor/contrib/format/common/formatActions":["Код формата"],"vs/editor/contrib/goToDeclaration/browser/goToDeclaration":[" — определения {0}","Перейти к определению","Открыть определение сбоку","Показать определение","Щелкните, чтобы отобразить найденные определения ({0})."],"vs/editor/contrib/gotoError/browser/gotoError":["Предложенные исправления: ","Предложенное исправление: ","({0}/{1}) [{2}]","({0}/{1})","Перейти к следующей ошибке или предупреждению","Перейти к предыдущей ошибке или предупреждению"],"vs/editor/contrib/hover/browser/hover":["Показать при наведении"],"vs/editor/contrib/hover/browser/modesContentHover":["Идет загрузка..."],"vs/editor/contrib/inPlaceReplace/common/inPlaceReplace":["Заменить предыдущим значением","Заменить следующим значением"],"vs/editor/contrib/indentation/common/indentation":["Преобразовать отступ в пробелы","Преобразовать отступ в шаги табуляции","Настроенный размер шага табуляции","Выбрать размер шага табуляции для текущего файла","Отступ с использованием табуляции","Отступ с использованием пробелов","Определение отступа от содержимого","Переключение отображения пробелов","Переключить управляющие символы"],"vs/editor/contrib/linesOperations/common/linesOperations":["Копировать строку сверху","Копировать строку снизу","Переместить строку вверх","Переместить строку вниз","Сортировка строк по возрастанию","Сортировка строк по убыванию","Удалить конечные символы-разделители","Удалить строку","Увеличить отступ","Уменьшить отступ","Вставить строку выше","Вставить строку ниже"],"vs/editor/contrib/links/browser/links":["Щелкните с нажатой клавишей Cmd, чтобы перейти по ссылке","Щелкните с нажатой клавишей Ctrl, чтобы перейти по ссылке","Не удалось открыть ссылку, так как она имеет неправильный формат: {0}","Не удалось открыть ссылку, у нее отсутствует целевой объект.","Открыть ссылку"],"vs/editor/contrib/multicursor/common/multicursor":["Добавить курсор выше","Добавить курсор ниже","Создать несколько курсоров на основе выбранных линий"],"vs/editor/contrib/parameterHints/browser/parameterHints":["Переключить подсказки к параметрам"],"vs/editor/contrib/parameterHints/browser/parameterHintsWidget":["{0}, подсказка"],"vs/editor/contrib/quickFix/browser/quickFix":["Быстрое исправление"],"vs/editor/contrib/quickFix/browser/quickFixSelectionWidget":["{0}, предложенное быстрое исправление","Загрузка...","Предложения по исправлениям отсутствуют.","Быстрое исправление","{0}, принято"],"vs/editor/contrib/quickOpen/browser/gotoLine":["Перейти к строке {0} и столбцу {1}","Перейти к строке {0}","Введите номер строки от 1 до {0} для перехода","Введите столбец между 1 и {0} для перехода","Go to line {0}","Введите номер строки, затем двоеточие (необязательно) и номер столбца, для перехода","Перейти к строке..."],"vs/editor/contrib/quickOpen/browser/quickCommand":["{0}, commands","Введите имя действия, которое нужно выполнить","Палитра команд"],"vs/editor/contrib/quickOpen/browser/quickOutline":["{0}, symbols","Введите имя идентификатора, к которому нужно перейти","Перейти к символу...","символы ({0})","модули ({0})","классы ({0})","интерфейсы ({0})","методы ({0})","функции ({0})","свойства ({0})","переменные ({0})","переменные ({0})","конструкторы ({0})","вызовы ({0})"],"vs/editor/contrib/referenceSearch/browser/referenceSearch":[" — ссылки {0}","Найти все ссылки"],"vs/editor/contrib/referenceSearch/browser/referencesController":["Загрузка..."],"vs/editor/contrib/referenceSearch/browser/referencesWidget":["Не удалось разрешить файл.","Ссылок: {0}","{0} ссылка","предварительный просмотр недоступен","Ссылки","Результаты отсутствуют","Ссылки"],"vs/editor/contrib/rename/browser/rename":["Не удалось выполнить переименование.","Переименовать символ"],"vs/editor/contrib/rename/browser/renameInputField":["Введите новое имя для входных данных и нажмите клавишу ВВОД для подтверждения."],"vs/editor/contrib/rename/common/rename":["Результаты отсутствуют."],"vs/editor/contrib/smartSelect/common/jumpToBracket":["Перейти к скобке"],"vs/editor/contrib/smartSelect/common/smartSelect":["Развернуть выделение","Сжать выделение"],"vs/editor/contrib/suggest/browser/suggestController":["Trigger Suggest"],"vs/editor/contrib/suggest/browser/suggestWidget":["Подробнее...{0}","{0}, предложение, содержит данные","{0}, предложение","Вернуться","Загрузка...","Предложения отсутствуют.","{0}, принято","{0}, предложение, содержит данные","{0}, предложение"],"vs/editor/contrib/toggleTabFocusMode/common/toggleTabFocusMode":["Переключение фокуса ввода с помощью клавиши TAB"],"vs/editor/contrib/toggleWordWrap/common/toggleWordWrap":["Вид: переключение режима переноса по словам"],"vs/editor/contrib/zoneWidget/browser/peekViewWidget":["Закрыть"],"vs/languages/html/common/html.contribution":["HTML","Максимальное число символов на строку (0 = disable).",'Список тегов, которые не следует повторно форматировать, с разделителями-запятыми. Значение "NULL" по умолчанию означает все теги, перечисленные на странице https://www.w3.org/TR/html5/dom.html#phrasing-content.',"Отступ <head> и разделы <body>.","Следует ли сохранять разрывы строк перед элементами. Работает только перед элементами, а не внутри тегов или для текста.",'Максимальное число разрывов строк для сохранения в блоке. Чтобы указать неограниченное число строк, используйте "null".',"Формат и отступ {{#foo}} и {{/foo}}.","Завершение с помощью новой строки.",'Список тегов с разделителями-запятыми и дополнительными новыми строками между ними. Значение "null" по умолчанию ставится для "head, body, /html".',"Configures if the built-in HTML language support suggests Angular V1 tags and properties.","Configures if the built-in HTML language support suggests Ionic tags, properties and values.","Configures if the built-in HTML language support suggests HTML5 tags, properties and values."],"vs/platform/configuration/common/configurationRegistry":["Добавляет параметры конфигурации.","Краткая сводка параметров. Эта метка будет использоваться в файле параметров в качестве разделяющего комментария.","Описание свойств конфигурации.","Если тип configuration.type задан, то он должен иметь значение object","configuration.title должно быть строкой","configuration.properties должно быть объектом"],"vs/platform/extensions/common/abstractExtensionService":['Не удалось активировать расширение "{1}". Причина: неизвестный зависимый компонент "{0}".','Не удалось активировать расширение "{1}". Причина: ошибка активации зависимого компонента "{0}".','Не удалось активировать расширение "{0}". Причина: более 10 уровней зависимостей (скорее всего, цикл зависимостей).','Ошибка активации расширения "{0}": {1}.'],"vs/platform/extensions/common/extensionsRegistry":["Пустое описание расширения",'свойство "{0}" является обязательным и должно иметь тип string','свойство "{0}" является обязательным и должно иметь тип string','свойство "{0}" является обязательным и должно иметь тип string','свойство "{0}" является обязательным и должно быть типа object','свойство "{0}" является обязательным и должно иметь тип string','свойство "{0}" может быть опущено или должно быть типа "string []"','свойство "{0}" может быть опущено или должно быть типа "string []"','оба свойства, "{0}" и "{1}", должны быть либо указаны, либо опущены','свойство "{0}" может быть опущено или должно иметь тип string',"Ожидается, что функция main ({0}) будет включена в папку расширения ({1}). Из-за этого расширение может стать непереносимым.",'оба свойства, "{0}" и "{1}", должны быть либо указаны, либо опущены',"Отображаемое имя расширения, используемого в коллекции VS Code.","Категории, используемые коллекцией VS Code для классификации расширения.","Баннер, используемый в магазине VS Code.","Цвет баннера в заголовке страницы магазина VS Code.","Цветовая тема для шрифта, используемого в баннере.","Издатель расширения VS Code.","События активации для расширения кода VS Code.","Зависимости от других расширений. Идентификатор расширения — всегда ${publisher}.${name}. Например: vscode.csharp.","Скрипт, выполняемый перед публикацией пакета в качестве расширения VS Code.","Все публикации расширения VS Code, представленные этим пакетом."],"vs/platform/keybinding/browser/keybindingServiceImpl":["Доступные команды: ","Была нажата клавиша ({0}). Ожидание нажатия второй клавиши сочетания...","Сочетание клавиш ({0} и {1}) не является командой."],"vs/platform/message/common/message":["Закрыть","Позже","Отмена"]});
//# sourceMappingURL=../../../min-maps/vs/editor/editor.main.nls.ru.js.map