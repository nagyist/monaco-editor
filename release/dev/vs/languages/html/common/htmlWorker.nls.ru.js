/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.1(ada2ad77ff51ca8550cd47bdaa4520df66c9519d)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/

define("vs/languages/html/common/htmlWorker.nls.ru", {
	"vs/languages/html/common/htmlTags": [
		"Элемент html представляет корень документа HTML.",
		"Элемент head представляет набор метаданных документа.",
		"Элемент title представляет заголовок или название документа. Авторам следует использовать названия, чтобы идентифицировать свои документы даже вне контекста, например в истории посещений, закладках пользователя или результатах поиска. Название документа нередко отличается от его первого заголовка, так как он не используется отдельно от контекста.",
		"Элемент base позволяет авторам указать базовый URL-адрес документа для разрешения относительных URL-адресов и имя контекста просмотра по умолчанию для соответствующих гиперссылок. Элемент не представляет никакого содержимого, кроме этих сведений.",
		"С помощью элемента link авторы могут связать свой документ с другими ресурсами.",
		"Элемент meta представляет разные типы метаданных, которые невозможно выразить с помощью элементов title, base, link, style и script.",
		"С помощью элемента style авторы могут внедрять в свои документы информацию о стиле. Элемент style относится к входным данным модели обработки стилей. Он не представляет содержимое для пользователя.",
		"Элемент body представляет содержимое документа.",
		"Элемент article представляет полную (самодостаточную) композицию в документе, странице, приложении или на сайте. То есть, в принципе, он может распространяться и повторно использоваться независимо, например в синдикации. Это может быть запись на форуме, статья в журнале или газете, запись блога, комментарий пользователя, интерактивное мини-приложение или гаджет, а также любой другой независимый элемент содержимого. Каждая статья должна иметь идентификатор, обычно в виде заголовка  (элемента h1–h6), являющегося дочерним элементом элемента article.",
		"Элемент section представляет универсальный раздел документа или приложения. В данном контексте раздел — это тематическая группа содержимого. Тема каждого раздела должна быть определена как дочерний элемент элемента section. Обычно для этого добавляется заголовок (элемент h1-h6).",
		"Элемент nav представляет раздел страницы, который связан с другими страницами или частями текущей страницы: раздел с ссылками для перехода.",
		"Элемент aside представляет раздел страницы с содержимым, косвенно связанным с содержимым рядом с элементом aside, которое можно считать отдельным содержимым. Такие разделы часто имеют вид боковых примечаний в типографской разметке.",
		"Элемент h1 представляет заголовок раздела.",
		"Элемент h2 представляет заголовок раздела.",
		"Элемент h3 представляет заголовок раздела.",
		"Элемент h4 представляет заголовок раздела.",
		"Элемент h5 представляет заголовок раздела.",
		"Элемент h6 представляет заголовок раздела.",
		"Элемент header представляет поясняющее содержимое для ближайшего к нему элемента-предка, секционирующего содержимое, или корневого секционирующего элемента. Обычно элемент header содержит группу поясняющих или навигационных подсказок. Если ближайший элемент-предок, секционирующий содержимое, или корневой секционирующий элемент является элементом body, то он относится ко всей странице.",
		"Элемент footer представляет нижний колонтитул для ближайшего к нему элемента-предка, секционирующего содержимое, или корневого секционирующего элемента. Обычно элемент footer содержит информацию об авторе раздела, ссылки на связанные документы, информацию об авторском праве и т. п.",
		"Элемент address представляет контактную информацию для ближайшего элемента-предка article или body. Если это элемент body, то контактная информация относится ко всему документу.",
		"Элемент p представляет абзац.",
		"Элемент hr представляет тематический разрыв абзаца. Это может быть смена сюжета рассказа или переход к другому подразделу в разделе справочника.",
		"Элемент pre представляет блок предварительно отформатированного текста, структура которого представлена типографскими обозначениями, а не элементами.",
		"Элемент blockquote представляет содержимое, являющееся цитатой из другой источника, возможно, включающее упоминание этого источника, которое должно быть размещено внутри элементов footer или cite, и, возможно, содержащее примечания и аббревиатуры.",
		"Элемент ol представляет список намеренно упорядоченных элементов, изменение порядка которых меняет смысл документа.",
		"Элемент ul представляет список элементов, порядок которых не важен (то есть изменение которого не меняет смысла документа).",
		"Элемент li представляет элемент списка. Если его родительским элементом является ol, ul или элемент меню, то этот элемент входит в список родительского элемента согласно его определению. В противном случае у элемента списка нет определенной связи с каким-либо другим элементом li через список.",
		"Элемент dl представляет список ассоциаций, состоящий из нуля или более групп \"имя-значение\" (список описаний). Группа \"имя-значение\" состоит из одного или нескольких имен (элементов dt) и одного или нескольких значений (элементов dd). При этом игнорируются все узлы, кроме элементов dt и dd. В одном элементе dl для каждого имени должно быть не больше одного элемента dt.",
		"Элемент dt представляет термин или имя, являющееся частью группы \"термин-описание\" в списке описаний (элементе dl).",
		"Элемент dd представляет описание, определение или значение, являющееся частью группы \"термин-описание\" в списке описаний (элементе dl).",
		"Элемент figure представляет плавающее содержимое, возможно с подписью, которое самодостаточно (как полное предложение) и в рамках основного содержимого документа является обычно одним элементом.",
		"Элемент figcaption представляет подпись или легенду для остального содержимого своего родительского элемента figure, если он существует.",
		"Элемент main представляет основное содержимое документа или приложения. Область основного содержимого состоит из содержимого, которое непосредственно связано (либо дополняет) с главным разделом документа или главными функциональными возможностями приложения.",
		"У элемента div нет специального назначения. Он представляет свои дочерние элементы. Его можно использовать вместе с атрибутами class, lang и title, чтобы обозначить семантику, общую для группы последовательных элементов.",
		"Если в элементе a есть атрибут href, то он представляет гиперссылку (гипертекстовую привязку), подписанную своим содержимым.",
		"Элемент em служит для акцентирования его содержимого.",
		"Элемент strong представляет высокую важность, серьезность или срочность его содержимого.",
		"Элемент small представляет второстепенные примечания, например текст мелким шрифтом.",
		"Элемент s представляет содержимое, которое больше не является точным или релевантным.",
		"Элемент cite представляет ссылку на другой материал. Он должен содержать название материала или имя автора (человека, группы соавторов или организации) либо справочный URL-адрес, который может быть указан в сокращенной форме, соответствующей соглашениям о добавлении метаданных цитат.",
		"Элемент q представляет некоторые выражения, цитируемые из другого источника.",
		"Элемент dfn представляет определяющий экземпляр термина. Абзац, группа списков описаний или раздел, который является ближайшим предком элемента dfn, также должны содержать определение термина, заданного элементом dfn.",
		"Элемент abbr представляет аббревиатуру или акроним, возможно с расшифровкой. С ним можно использовать атрибут title, чтобы указать расшифровку аббревиатуры. Этот атрибут должен содержать только расшифровку аббревиатуры.",
		"Элемент Ruby позволяет пометить один или несколько периодов содержимого выражений с помощью аннотаций Ruby. Аннотации Ruby — это короткие части текста, представленные вместе с базовым текстом, которые в первую очередь используются в восточно-азиатской типографике в качестве руководства по произношению или для включения других аннотаций. В японском языке такая форма типографской разметки также известна как фуригана. Текст Ruby может находиться с любой стороны, а иногда и по обеим сторонам базового текста, а его положение можно контролировать с помощью CSS. Более полную информацию о Ruby можно найти в документе \"Случаи использования разметки Ruby и экспериментальные подходы\", а также в спецификации \"Модуль Ruby CSS, уровень 1\". [RUBY-UC] [CSSRUBY]",
		"Элемент rb помечает базовый компонент текста  аннотации Ruby. Если это дочерний элемент Ruby, он не представляет ничего сам по себе, но его родительский элемент Ruby использует его в рамках определения того, что он представляет.",
		"Элемент rt помечает компонент текста Ruby аннотации Ruby. Если это дочерний элемент Ruby или элемент rtc, который сам является дочерним элементом Ruby, он не представляет ничего сам по себе, но его предок-элемент Ruby использует его в рамках определения того, что он представляет.",
		"Элемент rp используется для отображения резервного текста пользовательскими агентами, которые не поддерживают аннотации Ruby. Распространенное соглашение — заключать текстовый компонент Ruby аннотации Ruby в скобки.",
		"Элемент time представляет свое содержимое и машиночитаемую форму этого содержимого в атрибуте datetime. Допустимые типы содержимого: дата, время, сдвиг часового пояса и длительность, как описано ниже.",
		"Элемент code представляет фрагмент программного кода. Это может быть имя элемента XML, имя файла, компьютерная программа или любая другая строка, которую может распознать компьютер.",
		"Элемент var представляет переменную. Это может быть действительная переменная в математическом выражении или программном контексте, идентификатор, представляющий константу, символ физической величины, параметр функции или просто какой-либо термин, выполняющий роль заполнителя в тексте.",
		"Элемент samp представляет образец или выходные данные программы или вычислительной системы.",
		"Элемент kbd представляет ввод пользователя (обычно это клавиатурный ввод, хотя может быть представлен и другой тип ввода, например голосовые команды).",
		"Элемент sub представляет подстрочный текст.",
		"Элемент sup представляет надстрочный текст.",
		"Элемент i представляет фрагмент текста, отличающийся по тону или модальности, либо какое-либо другое отступление от обычного стиля, указывающее на иное качество текста. Это может быть классификационное обозначение, технический термин, идиоматическое выражение на другом языке, транслитерация, мнение или название судна в западных текстах.",
		"Элемент b представляет фрагмент текста, привлекающий внимание с практической целью, но не подразумевающий повышенную важность и поэтому не имеющий иной тон либо модальность. Это могут быть ключевые слова в аннотации к документу, названия продуктов в обзоре, обрабатываемые слова в интерактивной текстовой программе или первый абзац статьи.",
		"Элемент u представляет фрагмент текста с непроизносимой, но явно указанной нетекстовой меткой. Это может быть обозначение имен собственных в тексте на китайском языке (метки китайских имен собственных) или выделение текста с орфографическими ошибками.",
		"Элемент mark представляет полосу, выделяющую в документе текст, важный в определенном контексте. Если этот элемент используется для цитирования или на него ссылается другой блок текста, то элемент указывает важные моменты, которых не было в тексте изначально. Они могли быть добавлены, чтобы привлечь внимание читателя к фрагменту текста, который автор не посчитал важным при первоначальном написании блока, но который теперь должен быть тщательно изучен. Если этот элемент используется в основном тексте документа, то он указывает часть документа, которая была выделена, так как связана с текущими действиями пользователя.",
		"Элемент bdi представляет фрагмент текста, который должен быть изолирован от остального текста, чтобы обеспечить двунаправленное форматирование. [BIDI]",
		"Элемент bdo представляет форматирующий элемент управления, явно задающий направление вывода текста для своих дочерних элементов. С его помощью авторы могут переопределить алгоритм Юникода двунаправленного вывода, явно указав другое направление. [BIDI]",
		"Элемент span сам по себе ничего не значит, но может быть полезен, если использовать его с глобальными атрибутами, например class, lang или dir. Он представляет свои дочерние элементы.",
		"Элемент br представляет разрыв строки.",
		"Элемент wbr указывает возможность разрыва строки.",
		"Элемент ins представляет добавление в документ.",
		"Элемент del представляет удаленный из документа фрагмент.",
		"Элемент picture — это контейнер, предоставляющий несколько источников для содержащегося в нем элемента img. Это позволяет авторам применять декларативное управление или давать подсказки агенту пользователя о том, какой ресурс изображения использовать в зависимости от плотности пикселей на экране, размера окна просмотра, формата изображения и других факторов. Он представляет свои дочерние элементы.",
		"Элемент img представляет изображение.",
		"Элемент iframe представляет вложенное содержимое для просмотра.",
		"Элемент embed предоставляет точку интеграции для внешнего (обычно не на основе HTML) приложения или интерактивного содержимого.",
		"Элемент object может представлять внешний ресурс, который в зависимости от типа будет рассматриваться как изображение, вложенное содержимое для просмотра или внешний ресурс, обрабатываемый подключаемым модулем.",
		"Элемент param определяет параметры для подключаемых модулей, вызываемых элементами object. Сам по себе он ничего не представляет.",
		"Элемент video используется для воспроизведения видео или фильмов, а также звуковых файлов с титрами.",
		"Элемент audio представляет звук или звуковой поток.",
		"Элемент source дает авторам возможность указать несколько альтернативных ресурсов мультимедиа для элементов media. Сам по себе он ничего не представляет.",
		"Элемент track дает авторам возможность указать явные внешние хронометрированные текстовые каналы для элементов media. Сам по себе он ничего не представляет.",
		"Элемент map вместе с элементом img и любыми потомками элемента area определяет гиперкарту. Элемент представляет дочерние элементы.",
		"Элемент area представляет либо гиперссылку с каким-либо текстом и соответствующей областью на гиперкарте, либо слепую зону на гиперкарте.",
		"Элемент table представляет данные с несколькими размерностями в виде таблицы.",
		"Элемент caption представляет заголовок родительской таблицы, если у него есть родительский элемент table.",
		"Элемент colgroup представляет группу из одного или нескольких столбцов родительской таблицы, если у него есть родительский элемент table.",
		"Если у элемента col есть родительский элемент colgroup, у которого, в свою очередь, есть родительский элемент table, то элемент col представляет один или несколько столбцов в группе столбцов, представленной этим элементом colgroup.",
		"Элемент tbody представляет блок строк, состоящий из основного содержания данных родительского элемента table, если у элемента tbody есть родительский элемент table.",
		"Элемент thead представляет блок строк, состоящий из подписей столбцов (заголовков) родительского элемента table, если у элемента thead есть родительский элемент table.",
		"Элемент tfoot представляет блок строк, состоящий из сводок столбцов (нижних колонтитулов) родительского элемента table, если у элемента tfoot есть родительский элемент table.",
		"Элемент tr представляет строку ячеек в таблице.",
		"Элемент td представляет ячейку данных в таблице.",
		"Элемент th представляет ячейку заголовка в таблице.",
		"Элемент form представляет коллекцию элементов, связанных с формой, некоторые из которых могут представлять редактируемые значения, которые можно отправить на сервер для обработки.",
		"Элемент label представляет подпись в интерфейсе пользователя. Подпись может быть связана с определенным элементом управления формы, который называется подписанным элементом управления элемента label. Для этого либо используется атрибут for, либо элемент управления формы помещается в элемент label.",
		"Элемент input представляет поле для ввода данных, обычно с элементом управления формы, дающим пользователю возможность редактировать данные.",
		"Элемент button представляет кнопку, подписанную ее содержимым.",
		"Элемент select представляет элемент управления для выбора из набора пунктов.",
		"Элемент datalist представляет набор элементов option, представляющих предварительно определенные параметры других элементов управления. При отрисовке элемент datalist ничего не представляет и должен быть скрыт вместе со своими дочерними элементами.",
		"Элемент optgroup представляет группу элементов option с общей подписью.",
		"Элемент option представляет пункт в элементе select либо часть списка предложений в элементе datalist.",
		"Элемент textarea представляет элемент управления \"Поле ввода\" многострочного обычного текста для необработанного значения элемента. Содержимое элемента управления представляет его значение по умолчанию.",
		"Элемент output представляет результат вычисления, выполненного приложением, или действия пользователя.",
		"Элемент progress представляет ход выполнения задачи. Ход выполнения может быть неопределенным. Это значит, что задача выполняется, но не ясно, сколько работы осталось до ее завершения (например, когда задача ожидает ответа удаленного узла). Либо ход выполнения может быть числом от нуля до максимального значения, выражая часть уже выполненной работы.",
		"Элемент meter представляет скалярное измерение в известном диапазоне либо дробную величину. Например, это может быть использование дискового пространства, релевантность результата запроса или часть избирателей, выбравших определенного кандидата.",
		"Элемент fieldset представляет набор элементов управления формы, которые могут быть сгруппированы под общим именем.",
		"Элемент legend представляет подпись для остального содержимого родительского элемента fieldset элемента legend, если он существует.",
		"Элемент details представляет информационное мини-приложение, в котором пользователю может быть предоставлена дополнительная информация или элементы управления.",
		"Элемент summary представляет сводку, подпись или условные обозначения для остальной части содержимого родительского элемента details данного элемента summary, если она существует.",
		"Элемент dialog представляет часть приложения, с которой взаимодействует пользователь, чтобы выполнить какую-либо задачу. Это может быть диалоговое окно, инспектор или окно.",
		"Элемент script дает авторам возможность добавлять в документы динамические блоки сценариев и данных. Он не представляет содержимое для пользователя.",
		"Элемент noscript не представляет ничего, если сценарии включены, и представляет свои дочерние элементы, если сценарии отключены. Влияя с его помощью на разбор документа, можно представить разную разметку для агентов пользователя, которые поддерживают сценарии, и агентов пользователя, которые их не поддерживают.",
		"Элемент template используется для объявления фрагментов HTML, которые можно копировать и вставлять в документ сценарием.",
		"Элемент canvas предоставляет сценарии с зависимыми от разрешения растровыми холстами, которые можно использовать для динамической отрисовки графиков, игровой графики, картинок и других визуальных изображений.",
		"Флажок ничем не отличается от флажка HTML, но использует другой стиль. Флажок ведет себя как любой флажок AngularJS.",
		"Директива ionContent предоставляет простую в использовании область содержимого, которую можно настроить для применения настраиваемых представлений прокрутки Ionic или встроенной прокрутки переполнения браузера.",
		"Дочерний элемент ionItem",
		"Добавляет фиксированную панель нижнего колонтитула под содержимым. Также это может быть дополнительный нижний колонтитул, если применяется класс bar-subfooter.",
		"Добавляет фиксированную панель верхнего колонтитула над содержимым. Также это может быть дополнительный верхний колонтитул, если применяется класс bar-subheader.",
		"Дочерний элемент ionContent или ionScroll. Директива ionInfiniteScroll позволяет вызывать функцию всякий раз, когда пользователь добирается до нижней части страницы или области возле нижней части страницы.",
		"ionInput предназначен только для ввода текста. Ionic использует фактический HTML-элемент <input type=\"text\"> внутри компонента с упаковкой Ionic для улучшения обработки взаимодействия с пользователем и интерактивных операций.",
		"Дочерний элемент ionList.",
		"List — это широко используемый элемент практически любого мобильного приложения. Он может содержать практические любые элементы — от простого текста до кнопок, переключателей, значков и эскизов.",
		"Modal — это область содержимого, которая может временно отображаться поверх основного представления пользователя. Обычно используется для выбора или редактирования элемента.",
		"Дочерний элемент ionNavBar. Создает кнопку \"Назад\" в ionNavBar, которая отображается, если пользователь может вернуться назад в текущем стеке навигации.",
		"Если вы используете директиву ionNavView, также можно создать элемент <ion-nav-bar>, который создаст верхнюю панель, обновляющуюся при изменении состояния приложения.",
		"Дочерний элемент ionNavView. Используйте элементы ionNavButton для размещения кнопок на элементах ionNavBar в ionView.",
		"Дочерний элемент ionNavView. Директива ionNavTitle заменяет текст заголовка ionNavBar на пользовательский HTML из шаблона ionView.",
		"Директива ionNavView используется для визуализации шаблонов в приложении. Каждый шаблон представляет часть состояния. Состояния обычно сопоставляются с URL-адресом и определяются программно с помощью angular-ui-router.",
		"Дочерний элемент ionItem. Создает переключатель внутри элемента списка, который отображается, когда пользователь проводит пальцем влево по элементу.",
		"Простой контейнер, в который помещается содержимое без побочных эффектов. Добавляет класс pane в элемент.",
		"Popover — это представление, которое расположено поверх содержимого приложения. Элементы Popover позволяют легко отображать или получать данные от пользователя.",
		"Переключатель ionRirective ничем не отличается от переключателя HTML, но использует другой стиль. Элемент ionRadio ведет себя как любой переключатель AngularJS.",
		"Дочерний элемент ionContent или ionScroll. Позволяет добавить запрос на обновление в scrollView. Поместите его в качестве первого дочернего элемента ionContent или ionScroll.",
		"Дочерний элемент ionItem.",
		"Создание прокручиваемого контейнера, все содержимое которого находится внутри него.",
		"Дочерний элемент ionSideMenus. Контейнер для бокового меню, элемент одного уровня с директивой ionSideMenuContent.",
		"Дочерний элемент ionSideMenus. Контейнер для основного видимого содержимого, элемент одного уровня с одной директивой ionSideMenu или несколькими.",
		"Элемент контейнера для боковых меню и основного содержимого. Позволяет переключаться между левым и правым меню, перетаскивая область основного содержимого из стороны в сторону.",
		"Дочерний элемент ionSlideBox. Отображает слайд внутри элемента slidebox.",
		"Элемент SlideBox — это многостраничный контейнер, в котором для перехода со страницы на страницу можно использовать проведение по экрану или перетаскивание.",
		"Директива ionSpinner предоставляет широкий набор анимированных счетчиков.",
		"Дочерний элемент ionTabs. Включает в себя содержимое вкладки. Содержимое существует, только когда выбрана данная вкладка.",
		"Реализует интерфейс с несколькими вкладками из панели вкладок и набора \"страниц\", между которыми можно переключаться.",
		"ion-title — это компонент, который задает заголовок ionNavbar",
		"Переключатель — это анимированный переключатель, который привязывает заданную модель к логическому значению. Позволяет перетаскивать утолщение переключателя. В других ситуациях этот элемент действует как любой флажок AngularJS.",
		"Дочерний элемент ionNavView. Контейнер для просмотра содержимого и любой информации о навигации и панели верхнего колонтитула.",
	]
});