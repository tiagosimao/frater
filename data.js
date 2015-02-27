var countries = {
    "ao":{code:"ao",name:"Angola",giveaways:["angola","angolano","angolana","luanda"]},
    "br":{code:"br",name:"Brasil",giveaways:["brasil","brasileiro","brasileira","rio de janeiro","sao paulo","brasilia"]},
    "cv":{code:"cv",name:"Cabo Verde",giveaways:["cabo-verde", "cabo-verdiano", "cabo-verdiana"]},
    "mz":{code:"mz",name:"Moçambique",giveaways:["mocambique","mocambicano","mocambicana","maputo"]},
    "pt":{code:"pt",name:"Portugal",giveaways:["portugal","portugues","portuguesa","lisboa"]},
    "gw":{code:"gw",name:"Guiné-Bissau",giveaways:["guine-bissau", "guineense"]},
    "st":{code:"st",name:"São Tomé e Príncipe",giveaways:["sao tome e principe"]},
    "tl":{code:"tl",name:"Timor-Leste",giveaways:["tmor leste","timorense"]},
    "mo":{code:"mo",name:"Macau",giveaways:["macau","macaense"]},
    "fr":{code:"fr",name:"França",giveaways:["franca","frances","francesa"]},
    "ch":{code:"ch",name:"Suíça",giveaways:["suica","suico"]},
    "us":{code:"us",name:"Estados Unidos da América",giveaways:["eua","e.u.a.","estados unidos da america","washington","nova iorque"]},
    "ca":{code:"ca",name:"Canadá",giveaways:["canada","canadiano","canadiana"]},
    "es":{code:"es",name:"Espanha",giveaways:["espanha","espanhol","espanhola"]},
    "de":{code:"de",name:"Alemanha",giveaways:["alemanha","alema","alemao"]},
    "uk":{code:"uk",name:"Reino Unido",giveaways:["reino unido","londres","inglaterra","irlanda do norte","pais de gales","escocia"]},
    "lu":{code:"lu",name:"Luxemburgo",giveaways:["luxemburgo","luxemburgues","luxemburguesa"]},
    "za":{code:"za",name:"África do Sul",giveaways:["africa do sul","sul africano","sul africana", "sul-africano","sul-africana"]},
    "ve":{code:"ve",name:"Venezuela",giveaways:["venezuela","venezuelano","venezuelana"]},
    "af":{code:"af",name:"Afeganistão",giveaways:["afeganistao","afegao","afega"]},
    "sa":{code:"sa",name:"Arábia Saudita",giveaways:["arabia saudita"]},
    "ar":{code:"ar",name:"Argentina",giveaways:["argentina","argentino"]},
    "au":{code:"au",name:"Austrália",giveaways:["australia","australiano","australiana"]},
    "at":{code:"at",name:"Áustria",giveaways:["austria","austriaco","austriaca"]},
    "be":{code:"be",name:"Bélgica",giveaways:["belgica","belga"]},
    "bo":{code:"bo",name:"Bolívia",giveaways:["bolivia","boliviano","boliviana"]},
    "cl":{code:"cl",name:"Chile",giveaways:["chile","chileno","chilena"]},
    "cn":{code:"cn",name:"China",giveaways:["china","chines","chinesa","republica popular da china"]},
    "dk":{code:"dk",name:"Dinamarca",giveaways:["dinamarca","dinamarques","dinamarquesa"]},
    "eg":{code:"eg",name:"Egípto",giveaways:["egipto","egipcio","egipcia"]},
    "fi":{code:"fi",name:"Finlândia",giveaways:["finlandia","finlandes","finlandesa"]},
    "gr":{code:"gr",name:"Grécia",giveaways:["grecia","grego","grega"]},
    "in":{code:"in",name:"Índia",giveaways:["india","indiano","indiana"]},
    "id":{code:"id",name:"Indonésia",giveaways:["indonesia","indonesio"]},
    "il":{code:"il",name:"Israel",giveaways:["israel","israelita"]},
    "iq":{code:"iq",name:"Iraque",giveaways:["iraque","iraquiano","iraquiana"]},
    "ir":{code:"ir",name:"Irão",giveaways:["irao","iraniano","iraniana"]},
    "ie":{code:"ie",name:"Irlanda",giveaways:["irlanda","irlandes","irlandesa"]},
    "it":{code:"it",name:"Itália",giveaways:["italia","italiano","italiana"]},
    "jp":{code:"jp",name:"Japão",giveaways:["japao","japones","japonesa"]},
    "ly":{code:"ly",name:"Líbia",giveaways:["libia","libanes","libanesa"]},
    "my":{code:"my",name:"Malásia",giveaways:["malasia","malaio", "malasio", "malasiano", "malaico"]},
    "ma":{code:"ma",name:"Marrocos",giveaways:["marrocos","marroquino","marroquina"]},
    "mx":{code:"mx",name:"México",giveaways:["mexico","mexicano","mexicana"]},
    "ng":{code:"ng",name:"Nigéria",giveaways:["nigeria","nigeriano","nigeriana"]},
    "no":{code:"no",name:"Noruega",giveaways:["noruega","noruegues","norueguesa"]},
    "nl":{code:"nl",name:"Países Baixos",giveaways:["holanda","holandes","holandesa","paises baixos"]},
    "ru":{code:"ru",name:"Rússia",giveaways:["russia","russo","russa","sovietico","sovietica"]},
    "sy":{code:"sy",name:"Síria",giveaways:["siria","siriaco","sirio"]},
    "so":{code:"so",name:"Somália",giveaways:["somalia","somali","somaliano","somaliense"]},
    "se":{code:"se",name:"Suécia",giveaways:["suecia","sueco","sueca"]}

}

var sources = {
    pt:[
        {
            name:"TSF",
            image:"http://www.tsf.pt/favicon.ico",
            url:"http://www.tsf.pt/",
            feeds:["http://feeds.tsf.pt/TSF-Ultimas","http://feeds.tsf.pt/TSF-Portugal","http://feeds.tsf.pt/TSF-Internacional"]
        },{
            name:"Jornal de Negócios",
            image:"http://www.jornaldenegocios.pt/favicon.ico",
            url:"http://www.jornaldenegocios.pt/",
            feeds:["http://www.jornaldenegocios.pt/funcionalidades/Rss.aspx"]
        },{
            name:"Diário Digital",
            image:"http://diariodigital.sapo.pt/favicon.ico",
            url:"http://diariodigital.sapo.pt/",
            feeds:["http://feeds.feedburner.com/ddUltimas","http://feeds.feedburner.com/ddMundo","http://feeds.feedburner.com/ddSociedade","http://feeds.feedburner.com/ddCultura"]
        },{
            name:"Jornal i",
            image:"http://www.ionline.pt/favicon.ico",
            url:"http://www.ionline.pt/",
            feeds:["http://feeds.feedburner.com/jornali"]
        },{
            name:"Correio da Manhã",
            image:"http://www.cmjornal.xl.pt/favicon.ico",
            url:"http://www.cmjornal.xl.pt/",
            feeds:["http://www.cmjornal.xl.pt/rss.aspx"]
        },{
            name:"Sol",
            image:"http://www.sol.pt/favicon.ico",
            url:"http://www.sol.pt/",
            feeds:["http://www.sol.pt/RSS/"]
        },{
            name:"Rádio Renascença",
            image:"http://rr.sapo.pt/favicon.ico",
            url:"http://rr.sapo.pt/",
            feeds:["http://rr.sapo.pt/rssFeed.aspx?cid=1","http://rr.sapo.pt/rssFeed.aspx?fid=26"]
        },{
            name:"Económico",
            image:"http://economico.sapo.pt/favicon.ico",
            url:"http://economico.sapo.pt/",
            feeds:["http://economico.sapo.pt/rss/ultimas"]
        },{
            name:"Público",
            image:"http://publico.pt/favicon.ico",
            url:"http://publico.pt",
            feeds:["http://feeds.feedburner.com/PublicoRSS?format=xml"]
        },{
            name:"Expresso",
            image:"http://expresso.pt/favicon.ico",
            url:"http://expresso.pt",
            feeds:["http://expresso.sapo.pt/static/rss/atualidade--arquivo_23412.xml"]
        },{
            name:"Observador",
            image:"http://cdn.obsnocookie.com/wp-content/themes/observador/assets/build/img/favicon.ico",
            url:"http://observador.pt",
            feeds:["http://observador.pt/feed/"]
        },
        {
            name:"Jornal de Negócios",
            image:"http://www.jornaldenegocios.pt/favicon.ico",
            url:"http://www.jornaldenegocios.pt/",
            feeds:["http://www.jornaldenegocios.pt/funcionalidades/Rss.aspx"]
        },{
            name:"Jornal de Notícias",
            image:"http://www.jn.pt/favicon.ico",
            url:"http://www.jn.pt/",
            feeds:["http://feeds.jn.pt/JN-MUNDO","http://feeds.jn.pt/JN-ULTIMAS","http://feeds.jn.pt/JN-SOCIEDADE"]
        },{
            name:"SIC Notícias",
            image:"http://sicnoticias.sapo.pt/theme-sicnot-1.0-SNAPSHOT/images/favicon.ico",
            url:"http://sicnoticias.sapo.pt/",
            feeds:["http://rss.impresa.pt/sicnot/ece_frontpage","http://rss.impresa.pt/sicnot/mundo"]
        }
    ],
    br:[
        {
            name:"Jornal do Brasil",
            image:"http://www.jb.com.br/media/img/favicon.ico",
            url:"http://www.jb.com.br/",
            feeds:["http://www.jb.com.br/noticias/rss.xml"]
        },{
            name:"A Folha de São Paulo",
            image:"http://f.i.uol.com.br/favicon.ico",
            url:"http://www.folha.uol.com.br/",
            feeds:["http://feeds.folha.uol.com.br/emcimadahora/rss091.xml"]
        },{
            name:"O Globo",
            image:"http://oglobo.globo.com/favicon.ico",
            url:"http://oglobo.globo.com/",
            feeds:["http://oglobo.globo.com/rss.xml?secao=mundo","http://oglobo.globo.com/rss.xml?secao=ece_frontpage"]
        },{
            name:"Correio do Brasil",
            image:"http://correiodobrasil.com.br/wp-content/themes/Advanced-Newspaper1392/favicon.ico",
            url:"http://correiodobrasil.com.br/",
            feeds:["http://correiodobrasil.com.br/feed/"]
        }
    ],
    tl:[
        {
            name:"Timor Digital",
            image:"http://timordigital.com/favicon.ico",
            url:"http://timordigital.com/",
            feeds:["http://timordigital.com/feed.php"]
        }
    ],
    mz:[
        {
            name:"Notícias de Maputo",
            image:"http://www.jornalnoticias.co.mz/templates/jnoticias/favicon.ico",
            url:"http://www.jornalnoticias.co.mz/",
            feeds:["http://www.jornalnoticias.co.mz/index.php?format=feed&type=rss"]
        },{
            name:"O País",
            url:"http://opais.sapo.mz/",
            image:"http://opais.sapo.mz/templates/opais/favicon.ico",
            feeds:["http://opais.sapo.mz/index.php?format=feed&type=rss"]
        },{
            name:"Zambézia Online",
            url:"http://www.zambezia.co.mz/",
            feeds:["http://www.zambezia.co.mz/?format=feed&type=rss"]
        }
    ],
    st:[
        {
            name:"Jornal de São Tomé",
            image:"http://jornal.st/favicon.ico",
            url:"http://jornal.st/",
            feeds:["http://jornal.st/feed.php"]
        },{
            name:"Notícias de São Tomé e Príncipe",
            image:"http://www.telanon.info/wp-content/uploads/2014/04/favicon.png",
            url:"http://www.telanon.info/",
            feeds:["http://www.telanon.info/feed/"]
        }
    ],
    gw:[
        {
            name:"Bissau Digital",
            image:"http://www.bissaudigital.com/favicon.ico",
            url:"http://www.bissaudigital.com/",
            feeds:["http://bissaudigital.com/feed.php"]
        },{
            name:"Televisão da Guiné-Bissau",
            image:"http://www.guine-bissau.tv/favicon.ico",
            url:"http://www.guine-bissau.tv/",
            feeds:["https://www.blogger.com/feeds/3712802682635219909/posts/default"]
        }
    ],
    ca:[
        {
            name:"TV Portuguesa de Montreal",
            url:"http://montrealmagazine.tv/",
            feeds:["http://montrealmagazine.tv/feed/"]
        }
    ],
    us:[
        {
            name:"Luso Americano",
            image:"http://www.lusoamericano.com/wp-content/themes/themerush/img/favicon.png",
            url:"http://www.lusoamericano.com/",
            feeds:["http://www.lusoamericano.com/?feed=rss2"]
        }
    ],
    mo:[
        {
            name:"Hoje Macau",
            image:"http://hojemacau.com.mo/favicon.ico",
            url:"http://hojemacau.com.mo/",
            feeds:["http://hojemacau.com.mo/?feed=rss2"]
        },{
            name:"Ponto Final",
            image:"https://s2.wp.com/i/favicon.ico",
            url:"https://pontofinalmacau.wordpress.com/",
            feeds:["https://pontofinalmacau.wordpress.com/feed/"]
        }
    ],
    de:[
        {
            name:"Portugal Post",
            image:"http://u.jimdo.com/www65/o/sc0fcfedba234c51b/img/favicon.png?t=1380742907",
            url:"http://www.portugalpost.de/",
            feeds:["http://www.portugalpost.de/rss/blog"]
        }
    ],
    ch:[
        {
            name:"Gazeta Lusófona",
            image:"http://www.gazetalusofona.ch/wp-content/uploads/favicon1.png",
            url:"http://www.gazetalusofona.ch/",
            feeds:["http://www.gazetalusofona.ch/?feed=rss2"]
        }
    ],
    cv:[
        {
            name:"A Semana",
            image:"http://www.asemana.publ.cv/mes_squelettes/img/favicon.png",
            url:"http://www.asemana.publ.cv/",
            feeds:["http://www.asemana.publ.cv/spip.php?page=backend&id_mot=1&ak=1","http://www.asemana.publ.cv/spip.php?page=backend&id_rubrique=19&ak=1"]
        },{
            name:"A Nação",
            image:"http://anacao.cv/wp-content/uploads/2014/10/Logo-A-Na%C3%A7%C3%A3o-Icon-300x274.png",
            url:"http://anacao.cv/",
            feeds:["http://anacao.cv/feed/"]
        }
    ],
    ao:[
        {
            name:"Novo Jornal",
            image:"http://www.novojornal.co.ao/favicon.ico",
            url:"http://www.novojornal.co.ao/",
            feeds:["http://www.novojornal.co.ao/RSS"]
        },{
            name:"Jornal de Angola",
            url:"http://jornaldeangola.sapo.ao/",
            feeds:["http://jornaldeangola.sapo.ao/feeds/articles/?section=13","http://jornaldeangola.sapo.ao/feeds/articles/"]
        }
    ]
};