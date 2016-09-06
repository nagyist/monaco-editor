/*!-----------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.6.1(ada2ad77ff51ca8550cd47bdaa4520df66c9519d)
 * Released under the MIT license
 * https://github.com/Microsoft/vscode/blob/master/LICENSE.txt
 *-----------------------------------------------------------*/
define("vs/languages/html/common/htmlWorker.nls.it",{"vs/languages/html/common/htmlTags":["L'elemento html rappresenta la radice di un documento HTML.","L'elemento head rappresenta una raccolta di metadati per il documento.","L'elemento title rappresenta il titolo o il nome del documento. Gli autori devono usare titoli che identifichino i documenti anche quando vengono usati fuori dal contesto specifico, ad esempio nella cronologia o nei segnalibri di un utente o nei risultati della ricerca. Spesso il titolo del documento è diverso dall'intestazione principale, perché quest'ultima non deve essere considerata fuori dal contesto.","L'elemento base consente agli autori di specificare l'URL di base del documento, per risolvere gli URL relativi, e il nome del contesto di esplorazione predefinito, per seguire i collegamenti ipertestuali. Oltre a queste informazioni, l'elemento non rappresenta altro contenuto.","L'elemento link consente agli autori di collegare il documento ad altre risorse.","L'elemento meta rappresenta diversi tipi di metadati che non possono essere espressi con gli elementi title, base, link, style e script.","L'elemento style consente agli autori di incorporare nei documenti informazioni relative allo stile. Questo elemento costituisce uno degli input per il modello di elaborazione dello stile. Non rappresenta contenuto destinato all'utente.","L'elemento body rappresenta il contenuto del documento.","L'elemento article rappresenta una composizione completa e autosufficiente presente in un documento, una pagina, un'applicazione o un sito ed è, in linea di principio, distribuibile o riutilizzabile in modo indipendente, ad esempio in un'agenzia di stampa. Può essere un post di un forum, un articolo di rivista o giornale, una voce di blog, un commento inserito da un utente, un widget o gadget interattivo o qualsiasi altro elemento di contenuto indipendente. Ogni articolo deve essere identificato, in genere includendo un'intestazione (elemento h1–h6) come figlio dell'elemento article.","L'elemento section rappresenta una sezione generica di un documento o di un'applicazione. Una sezione, in questo contesto, è un raggruppamento tematico di contenuti. Ogni sezione deve essere identificata, in genere includendo un'intestazione (elemento h1-h6) come figlio dell'elemento section.","L'elemento nav rappresenta la sezione di una pagina che collega ad altre pagine o parti di una pagina: una sezione con collegamenti di spostamento.","L'elemento aside rappresenta una sezione di una pagina costituita da contenuto tangenzialmente correlato al contenuto intorno all'elemento aside e che può essere considerato separato da tale contenuto. Queste sezioni sono spesso rappresentate come barre laterali nella tipografia stampata.","L'elemento h1 rappresenta un'intestazione di sezione.","L'elemento h2 rappresenta un'intestazione di sezione.","L'elemento h3 rappresenta un'intestazione di sezione.","L'elemento h4 rappresenta un'intestazione di sezione.","L'elemento h5 rappresenta un'intestazione di sezione.","L'elemento h6 rappresenta un'intestazione di sezione.","L'elemento header rappresenta contenuto introduttivo per l'elemento radice della sezione o il contenuto di sezione predecessore più vicino. Un'intestazione contiene in genere un gruppo di sussidi introduttivi o per gli spostamenti. Quando l'elemento radice della sezione o il contenuto di sezione predecessore più vicino è l'elemento body, viene applicato all'intera pagina.","L'elemento footer rappresenta un piè di pagina per l'elemento radice della sezione o il contenuto di sezione predecessore più vicino. Un piè di pagina contiene in genere informazioni sulla sezione quali autore, collegamenti a documenti correlati, dati di copyright e così via.","L'elemento address rappresenta le informazioni di contatto relative all'articolo o all'elemento body predecessore più vicino. In caso di elemento body, le informazioni di contatto si applicano all'intero documento.","L'elemento p rappresenta un paragrafo.","L'elemento hr rappresenta un'interruzione tematica a livello di paragrafo, ad esempio un cambio di scena in una storia o un passaggio a un altro argomento all'interno di una sezione di un libro di riferimento.","L'elemento pre rappresenta un blocco di testo preformattato, in cui la struttura è rappresentata da convenzioni tipografiche anziché da elementi.","L'elemento blockquote rappresenta contenuto tra virgolette citato da un'altra origine. Può includere una citazione riportata nel piè di pagina o in un elemento cite e modifiche inline quali annotazioni e abbreviazioni.","L'elemento ol rappresenta un elenco di elementi ordinati secondo un criterio specifico in modo che una modifica all'ordine comporti la modifica del significato del documento.","L'elemento ul rappresenta un elenco di elementi il cui ordine non è rilevante, ossia la modifica all'ordine non comporta la modifica del significato del documento.","L'elemento li rappresenta una voce di elenco. Se il relativo elemento padre è di tipo ol o ul, l'elemento è una voce dell'elenco dell'elemento padre, in base alla definizione di tali elementi. In caso contrario, la voce di elenco non ha alcuna relazione di elenco determinata con qualsiasi altro elemento li.","L'elemento dl rappresenta un elenco di associazioni costituito da zero o più gruppi nome-valore (un elenco di descrizioni). Un gruppo nome-valore è costituito da uno o più nomi (elementi dt) seguiti da uno o più valori (elementi dd) e ignora eventuali nodi che non siano elementi dt e dd. In un singolo elemento dl non devono essere presenti più elementi dt per ogni nome.","L'elemento dt rappresenta il termine, o nome, che fa parte di un gruppo di descrizioni di termini in un elenco di descrizioni (elemento dl).","L'elemento dd rappresenta la descrizione, la definizione o il valore che fa parte di un gruppo di descrizioni di termini in un elenco di descrizioni (elemento dl).","L'elemento figure rappresenta contenuto di flusso, facoltativamente con una didascalia, autosufficiente (come una frase completa) e a cui in genere viene fatto riferimento come singola unità dal flusso principale del documento.","L'elemento figcaption rappresenta una didascalia o legenda dei restanti contenuti dell'elemento figure padre dell'elemento figcaption, se disponibile.","L'elemento main rappresenta il contenuto principale del corpo di un documento o di un'applicazione. L'area del contenuto principale è costituita da contenuto che è direttamente correlato all'argomento centrale di un documento o di una funzionalità centrale di un'applicazione o che si espande in base a tale argomento.","L'elemento div non ha un significato particolare. Rappresenta i relativi elementi figlio. Può essere usato con gli attributi class, lang e title per eseguire il markup della semantica comune a un gruppo di elementi consecutivi.","Se l'elemento a ha un attributo href, rappresenta un collegamento ipertestuale (ancoraggio ipertestuale) etichettato dal proprio contenuto.","L'elemento em rappresenta un'evidenziazione del relativo contenuto.","L'elemento strong rappresenta la priorità, l'importanza o l'urgenza dei propri contenuti.","L'elemento small rappresenta commenti aggiuntivi, ad esempio annotazioni in caratteri piccoli.","L'elemento s rappresenta contenuti non più accurati o non più rilevanti.","L'elemento cite rappresenta un riferimento a un'opera creativa. Deve includere il titolo dell'opera o il nome dell'autore (individuo, gruppo di individui o organizzazione) oppure un riferimento URL o un riferimento in forma abbreviata in base alle convenzioni usate per l'aggiunta di metadati di citazione.","L'elemento q rappresenta contenuto di enunciazione tra virgolette proveniente da un'altra origine.","L'elemento dfn rappresenta l'istanza di definizione di un termine. Il paragrafo, il gruppo dell'elenco di descrizioni o la sezione che rappresenta il predecessore più vicino all'elemento dfn deve inoltre contenere una o più definizioni del termine specificato dall'elemento dfn.","L'elemento abbr rappresenta un'abbreviazione o un acronimo, facoltativamente con la relativa estensione. Per specificare l'estensione di un'abbreviazione, è necessario usare l'attributo title. L'attributo, se specificato, deve contenere solo un'estensione dell'abbreviazione.","L'elemento ruby consente di contrassegnare una o più sezioni di contenuto di enunciazione con annotazioni ruby. Le annotazioni ruby sono brevi parti di testo presentate insieme al testo di base. In precedenza, venivano usate nella tipografia asiatica come guida per la pronuncia o per l'inserimento di altre annotazioni. In giapponese questa forma di tipografia è nota anche come furigana. Il ruby text può figurare su uno dei lati o talvolta su entrambi i lati del testo di base ed è possibile controllarne la posizione con CSS. Per un'introduzione più completa a ruby, vedere il documento sui casi d'uso e sugli approcci esplorativi per il markup Ruby e al modulo Ruby CSS di livello 1. [RUBY-UC] [CSSRUBY]","L'elemento rb contrassegna il componente di testo di base di un'annotazione ruby. Se è il figlio di un elemento ruby, non ha alcun valore, ma viene usato dal relativo elemento ruby padre per determinare il proprio valore.","L'elemento rt contrassegna il componente di testo ruby di un'annotazione ruby. Se è il figlio di un elemento ruby o di un elemento rtc che è a sua volta figlio di un elemento ruby, non ha alcun valore, ma viene usato dal relativo elemento ruby predecessore per determinare il proprio valore.","L'elemento rp viene usato per specificare testo di fallback che deve essere visualizzato da agenti utente che non supportano le annotazioni ruby. Una convenzione diffusa consiste nello specificare parentesi intorno al componente di testo ruby di un'annotazione ruby.","L'elemento time rappresenta il proprio contenuto, in un formato leggibile al computer, nell'attributo datetime. Il tipo di contenuto è limitato a vari tipi di date, ore, offset di fusi orari e durate, come descritto di seguito.","L'elemento code rappresenta un frammento di codice del computer. Può trattarsi di un nome di elemento XML, un nome file, un programma o qualsiasi altra stringa riconoscibile da un computer.","L'elemento var rappresenta una variabile. Può trattarsi di una variabile effettiva in un'espressione matematica o in un contesto di programmazione, un identificatore che rappresenta una costante, un simbolo che identifica una quantità fisica, un parametro di funzione o un termine usato come segnaposto nella prosa.","L'elemento samp rappresenta output di esempio o tra virgolette di un altro programma o sistema di calcolo.","L'elemento kbd rappresenta l'input dell'utente. In genere, indica input da tastiera, ma può essere usato per indicare altri tipi di input, ad esempio comandi vocali.","L'elemento sub rappresenta un pedice.","L'elemento sup rappresenta un apice.","L'elemento i rappresenta una sezione di testo espressa con una voce o uno stile alternativo, o comunque diverso dalla prosa standard per indicare una qualità differente del testo, ad esempio una designazione tassonomica, un termine tecnico, una frase idiomatica in un'altra lingua, una traslitterazione, un'opinione o un nome di nave.","L'elemento b rappresenta una sezione di testo sulla quale viene posto l'accento per scopi funzionali senza che venga attribuita ulteriore importanza e senza la necessità di usare una voce o uno stile alternativo, ad esempio parole chiave nella sintesi di un documento, nomi di prodotto in un articolo, termini attivabili in un prodotto software interattivo basato su testo o l'incipit di un articolo.","L'elemento u rappresenta una sezione di testo con un'annotazione non testuale non articolata, anche se visualizzabile esplicitamente, ad esempio l'etichettatura del testo per un nome proprio cinese (un contrassegno per un nome proprio cinese) o per un errore ortografico.","L'elemento mark rappresenta una parte di testo in un documento contrassegnata o evidenziata a scopi funzionali per via della sua rilevanza in un altro contesto. Quando viene usato in una citazione o in un altro blocco di testo a cui viene fatto riferimento nella prosa, indica una sottolineatura originariamente non presente ma che è stata aggiunta per portare l'attenzione del lettore a una parte del testo che potrebbe non essere stata considerata importante dall'autore originale al momento della scrittura del blocco, ma che attualmente ha acquisito una rilevanza inaspettata. Quando viene usato nella prosa principale di un documento, indica una parte del documento che è stata sottolineata per la sua rilevanza per l'attività corrente dell'utente.","L'elemento bdi rappresenta una sezione di testo che deve essere isolata dagli elementi circostanti per la formattazione di testo bidirezionale.","L'elemento bdo rappresenta un controllo esplicito di formattazione dell'orientamento del testo per i relativi elementi figlio. Consente agli autori di sostituire l'algoritmo bidirezionale Unicode specificando esplicitamente un cambiamento di direzione. [BIDI]","L'elemento span non ha valore autonomo, ma può essere utile se usato insieme agli attributi globali, ad esempio class, lang o dir. Rappresenta i relativi figli.","L'elemento br rappresenta un'interruzione di riga.","L'elemento wbr rappresenta un'opportunità di interruzione di riga.","L'elemento ins rappresenta un'aggiunta al documento.","L'elemento del rappresenta una rimozione dal documento.","L'elemento picture è un contenitore che offre più origini all'elemento img in esso contenuto per consentire agli autori di controllare in modo dichiarativo o fornire suggerimenti all'agente utente sulla risorsa immagine da usare, in base alla densità dei pixel, alle dimensioni del viewport, al formato dell'immagine e ad altri fattori. Ne rappresenta l'elemento figlio.","Un elemento img rappresenta un'immagine.","L'elemento iframe rappresenta un contesto di esplorazione annidato.","L'elemento embed fornisce un punto di integrazione per un'applicazione esterna (in genere non HTML) o un contenuto interattivo.","L'elemento object può rappresentare una risorsa esterna che, in base al tipo di risorsa, potrà essere gestita come un'immagine, un contesto di esplorazione annidato o una risorsa esterna da elaborare tramite un plugin.","L'elemento param definisce i parametri per i plugin richiamati dagli elementi object. Non ha un valore autonomo.","Un elemento video viene usato per l'esecuzione di video o filmati e file audio con didascalie.","Un elemento audio rappresenta un suono o un flusso audio.","L'elemento source consente agli autori di specificare più risorse multimediali alternative per gli elementi media. Non ha un valore autonomo.","L'elemento track consente agli autori di specificare tracce di testo programmate esterne ed esplicite per gli elementi media. Non ha un valore autonomo.","L'elemento map, insieme a un elemento img ed eventuali discendenti dell'elemento area, definisce una mappa immagine. Rappresenta i relativi figli.","L'elemento area rappresenta un collegamento ipertestuale costituito da testo e un'area corrispondente in una mappa immagine oppure un'area inutilizzata in una mappa immagine.","L'elemento table rappresenta dati con più dimensioni in formato tabella.","L'elemento caption rappresenta il titolo della tabella padre, se tale elemento ha un padre e quest'ultimo è un elemento table.","L'elemento colgroup rappresenta un gruppo di uno o più colonne nella tabella padre, se tale elemento ha un padre e quest'ultimo è un elemento table.","Se un elemento col ha un padre di tipo colgroup che a sua volta ha un padre di tipo table, l'elemento col rappresenta una o più colonne nel gruppo colonne rappresentato da tale elemento colgroup.","L'elemento tbody rappresenta un blocco di righe costituito da un corpo di dati per l'elemento table padre, se l'elemento tbody ha un padre e quest'ultimo è un elemento table.","L'elemento thead rappresenta il blocco di righe costituito dalle etichette della colonna (intestazioni) per l'elemento table padre, se l'elemento thead ha un padre e quest'ultimo è un elemento table.","L'elemento tfoot rappresenta il blocco di righe costituito dai riepiloghi della colonna (piè di pagina) per l'elemento table padre, se l'elemento tfoot ha un padre e quest'ultimo è un elemento table.","L'elemento tr rappresenta una riga di celle in una tabella.","L'elemento td rappresenta una cella dati in una tabella.","L'elemento th rappresenta una cella di intestazione in una tabella.","L'elemento form rappresenta una raccolta di elementi associati a un modulo, alcuni dei quali possono rappresentare valori modificabili che possono essere inviati a un server per l'elaborazione.","L'elemento label rappresenta una didascalia in un'interfaccia utente. La didascalia può essere associata a un controllo di modulo specifico, definito controllo etichettato dell'elemento label, usando l'attributo for o inserendo il controllo di modulo nell'elemento label.","L'elemento input rappresenta un campo di dati tipizzato, in genere con un controllo di modulo, per consentire all'utente di modificare i dati.","L'elemento button rappresenta un pulsante con un'etichetta corrispondente ai relativi contenuti.","L'elemento select rappresenta un controllo per la selezione nell'ambito di un set di opzioni.","L'elemento datalist rappresenta un set di elementi option che indicano opzioni predefinite per altri controlli. Nel rendering l'elemento datalist non ha alcun valore e dovrebbe essere nascosto insieme ai relativi elementi figlio.","L'elemento optgroup rappresenta un gruppo di elementi option con un'etichetta comune.","L'elemento option rappresenta un'opzione in un elemento select o, come parte di un elenco di suggerimenti, in un elemento datalist.","L'elemento textarea rappresenta un controllo di modifica del testo normale su più righe per il valore non elaborato dell'elemento. I contenuti del controllo rappresentano il valore predefinito del controllo.","L'elemento output rappresenta il risultato di un calcolo eseguito dall'applicazione oppure il risultato di un'azione dell'utente.","L'elemento progress rappresenta lo stato di avanzamento di un'attività. L'avanzamento può essere indeterminato, a indicare che l'attività è in corso ma non è chiaro quanto tempo manchi al completamento (ad esempio, perché l'attività è in attesa della risposta di un host remoto) oppure può essere un numero, compreso nell'intervallo tra zero e un numero massimo, in base alla percentuale di lavoro completata fino a quel momento.","L'elemento meter rappresenta una misura scalare in un intervallo noto o un valore frazionario, ad esempio l'utilizzo del disco, la pertinenza di un risultato di query o la frazione di popolazione votante per la scelta di un particolare candidato.","L'elemento fieldset rappresenta un set di controlli di modulo raggruppati facoltativamente in base a un nome comune.","L'elemento legend rappresenta una didascalia del contenuto restante dell'elemento fieldset padre dell'elemento legend, se disponibile.","L'elemento details rappresenta un widget di divulgazione da cui l'utente può ottenere informazioni o controlli aggiuntivi.","L'elemento summary rappresenta un riepilogo, una didascalia o una legenda per i restanti contenuti dell'elemento parent details dell'elemento summary, se disponibile.","L'elemento dialog rappresenta parte di un'applicazione con cui l'utente interagisce per eseguire attività, ad esempio una finestra di dialogo, un controllo o una finestra.","L'elemento script consente agli autori di includere script dinamico e blocchi di dati nei documenti. L'elemento non rappresenta contenuto per l'utente.","L'elemento noscript non ha alcun valore se lo scripting è abilitato e rappresenta il proprio elemento figlio se lo scripting è disabilitato. Viene usato per presentare diversi markup agli agenti utente che supportano lo scripting e a quelli che non lo supportano, con effetto sulla modalità di analisi del documento.","L'elemento template viene usato per dichiarare frammenti di HTML che è possibile clonare e inserire nel documento tramite lo script.","L'elemento canvas fornisce script con un'area di disegno bitmap dipendente dalla risoluzione che può essere usata per il rendering di grafici, grafica di giochi, opere d'arte o altre immagini visuali create al momento.","La casella di controllo è uguale alle caselle di controllo HTML in termini di input, ma lo stile è diverso. Il comportamento della casella di controllo è analogo a quello di qualsiasi altra casella di controllo AngularJS.","Con la direttiva ionContent è disponibile un'area del contenuto di facile utilizzo che può essere configurata per usare la visualizzazione a scorrimento personalizzata di Ionic oppure lo scorrimento predefinito del browser in caso di overflow.","Elemento figlio di ionItem",'Aggiunge una barra fissa per il piè di pagina sotto parte del contenuto. Se viene applicata la classe "bar-subfooter", può essere un piè di pagina secondario (più in alto).',"Aggiunge una barra fissa per l'intestazione sopra parte del contenuto. Se viene applicata la classe \"bar-subheader\", può essere un'intestazione secondaria (più in basso).","Elemento figlio di ionContent o ionScroll. La direttiva ionInfiniteScroll consente di chiamare una funzione ogni volta che l'utente raggiunge o sta per raggiungere la fine della pagina.","ionInput deve essere usato solo per input di tipo testo. Ionic usa un elemento HTML <input type=\"text\"> effettivo all'interno del componente, unitamente al ritorno a capo per gestire al meglio l'esperienza utente e l'interattività.","Elemento figlio di ionList.","List è un elemento dell'interfaccia molto usato in quasi tutte le app per dispositivi mobili e può includere contenuto di vario tipo, da testo semplice a pulsanti, interruttori, icone e miniature.","Modal è un riquadro del contenuto che può occupare temporaneamente lo spazio della visualizzazione principale dell'utente. Viene in genere usato per effettuare una scelta o modificare un elemento.","Elemento figlio di ionNavBar. Consente di creare un pulsante Indietro all'interno di un elemento ionNavBar. Il pulsante Indietro verrà visualizzato quando l'utente può tornare indietro nello stack di navigazione corrente.","Se è presente una direttiva ionNavView, è anche possibile creare un elemento <ion-nav-bar>, per creare una barra superiore che viene aggiornata ogni volta che lo stato dell'applicazione cambia.","Elemento figlio di ionNavView. Consente di usare ionNavButtons per impostare i pulsanti nell'elemento ionNavBar dall'interno di un elemento ionView.","Elemento figlio di ionNavView. La direttiva ionNavTitle sostituisce il testo del titolo di un elemento ionNavBar con codice HTML personalizzato dall'interno di un modello ionView.","La direttiva ionNavView viene usata per il rendering di modelli nell'applicazione. Ogni modello fa parte di uno stato. Gli stati sono in genere associati a un URL e vengono definiti a livello di codice con angular-ui-router.","Elemento figlio di ionItem. Consente di creare un pulsante di opzione all'interno di una voce di elenco che è visibile quando l'utente scorre rapidamente verso sinistra con il dito sull'elemento.",'Semplice contenitore del contenuto senza effetti collaterali. Consente di aggiungere la classe "pane" all\'elemento.',"Popover è una visualizzazione che può essere spostata sul contenuto di un'app. Questi elementi costituiscono il modo più semplice per presentare o raccogliere informazioni dall'utente.","Il pulsante di opzione ionRirective è uguale ai pulsanti di opzione HTML in termini di input, ma lo stile è diverso. Il comportamento di ionRadio è analogo a quello di qualsiasi input di pulsante di opzione di AngularJS.","Elemento figlio di ionContent o ionScroll. Consente di aggiungere la funzionalità che consente di aggiornare un elemento scrollView trascinando verso il basso. Inserirlo come primo elemento figlio dell'elemento ionContent o ionScroll.","Elemento figlio di ionItem.","Crea un contenitore scorrevole per tutto il contenuto presente all'interno.","Elemento figlio di ionSideMenus. È un contenitore per un menu laterale, di pari livello rispetto a una direttiva ionSideMenuContent.","Elemento figlio di ionSideMenus. È un contenitore per il contenuto visibile principale, di pari livello rispetto a una o più direttive ionSideMenu.","Elemento contenitore per il menu laterale e il contenuto principale. Consente di attivare/disattivare il menu laterale a sinistra/destra trascinando lateralmente l'area del contenuto principale.","Elemento figlio di ionSlideBox. Consente di visualizzare una diapositiva in un elemento SlideBox.","SlideBox è un contenitore a più pagine su cui è possibile eseguire operazioni di scorrimento e trascinamento singolarmente.","La direttiva ionSpinner offre numerose caselle di selezione animate.","Elemento figlio di ionTabs. Include il contenuto di una scheda. Il contenuto esiste solo quando si seleziona la scheda specificata.",'Attiva un\'interfaccia a schede con una barra delle schede e un set di "pagine" in cui è possibile spostarsi.',"ion-title è un componente che consente di impostare il titolo dell'elemento ionNavbar","L'interruttore è un interruttore animato che consente di associare un modello specifico a un valore booleano. Consente di spostare il pulsantino dell'interruttore. In caso contrario, il comportamento dell'interruttore è analogo a quello di qualsiasi casella di controllo AngularJS.","Elemento figlio di ionNavView. È un contenitore per il contenuto della visualizzazione ed eventuali informazioni sulla barra dell'intestazione e gli spostamenti."]});
//# sourceMappingURL=../../../../../min-maps/vs/languages/html/common/htmlWorker.nls.it.js.map