var countries = {
    "pt":{code:"pt",name:"Portugal",giveaways:["portugal","portugues","portuguesa","lisboa"]},
    "br":{code:"br",name:"Brasil",giveaways:["brasil","brasileiro","brasileira","rio de janeiro","sao paulo","brasilia"]},
    "ao":{code:"ao",name:"Angola",giveaways:["angola","angolano","angolana","luanda"]},


    "mz":{code:"mz",name:"Moçambique",giveaways:["mocambique","mocambicano","mocambicana","maputo"]},
    "mo":{code:"mo",name:"Macau",giveaways:["macau","macaense"]},
    "st":{code:"st",name:"São Tomé e Príncipe",giveaways:["sao tome e principe"]},

    "af":{code:"af",name:"Afeganistão",giveaways:["afeganistao","afegao","afega"]},
    "ar":{code:"ar",name:"Argentina",giveaways:["argentina","argentino"]},
    "at":{code:"at",name:"Áustria",giveaways:["austria","austriaco","austriaca"]},
    "au":{code:"au",name:"Austrália",giveaways:["australia","australiano","australiana"]},
    "be":{code:"be",name:"Bélgica",giveaways:["belgica","belga"]},
    "bo":{code:"bo",name:"Bolívia",giveaways:["bolivia","boliviano","boliviana"]},
    "ca":{code:"ca",name:"Canadá",giveaways:["canada","canadiano","canadiana"]},
    "ch":{code:"ch",name:"Suíça",giveaways:["suica","suico"]},
    "cl":{code:"cl",name:"Chile",giveaways:["chile","chileno","chilena"]},
    "cn":{code:"cn",name:"China",giveaways:["china","chines","chinesa","republica popular da china"]},
    "de":{code:"de",name:"Alemanha",giveaways:["alemanha","alema","alemao"]},
    "dk":{code:"dk",name:"Dinamarca",giveaways:["dinamarca","dinamarques","dinamarquesa"]},
    "eg":{code:"eg",name:"Egípto",giveaways:["egipto","egipcio","egipcia"]},
    "es":{code:"es",name:"Espanha",giveaways:["espanha","espanhol","espanhola"]},
    "fi":{code:"fi",name:"Finlândia",giveaways:["finlandia","finlandes","finlandesa"]},
    "fr":{code:"fr",name:"França",giveaways:["franca","frances","francesa"]},
    "gr":{code:"gr",name:"Grécia",giveaways:["grecia","grego","grega"]},
    "id":{code:"id",name:"Indonésia",giveaways:["indonesia","indonesio"]},
    "ie":{code:"ie",name:"Irlanda",giveaways:["irlanda","irlandes","irlandesa"]},
    "il":{code:"il",name:"Israel",giveaways:["israel","israelita"]},
    "in":{code:"in",name:"Índia",giveaways:["india","indiano","indiana"]},
    "iq":{code:"iq",name:"Iraque",giveaways:["iraque","iraquiano","iraquiana"]},
    "ir":{code:"ir",name:"Irão",giveaways:["irao","iraniano","iraniana"]},
    "it":{code:"it",name:"Itália",giveaways:["italia","italiano","italiana"]},
    "jp":{code:"jp",name:"Japão",giveaways:["japao","japones","japonesa"]},
    "lu":{code:"lu",name:"Luxemburgo",giveaways:["luxemburgo","luxemburgues","luxemburguesa"]},
    "ly":{code:"ly",name:"Líbia",giveaways:["libia","libanes","libanesa"]},
    "ma":{code:"ma",name:"Marrocos",giveaways:["marrocos","marroquino","marroquina"]},

    "mx":{code:"mx",name:"Méximo",giveaways:["mexico","mexicano","mexicana"]},
    "my":{code:"my",name:"Malásia",giveaways:["malasia","malaio", "malasio", "malasiano", "malaico"]},
    "ng":{code:"ng",name:"Nigéria",giveaways:["nigeria","nigeriano","nigeriana"]},
    "nl":{code:"nl",name:"Países Baixos",giveaways:["holanda","holandes","holandesa","paises baixos"]},
    "no":{code:"no",name:"Noruega",giveaways:["noruega","noruegues","norueguesa"]},
    "ru":{code:"ru",name:"Rússia",giveaways:["russia","russo","russa","sovietico","sovietica"]},
    "sa":{code:"sa",name:"Arábia Saudita",giveaways:["arabia saudita"]},
    "se":{code:"se",name:"Suécia",giveaways:["suecia","sueco","sueca"]},
    "so":{code:"so",name:"Somália",giveaways:["somalia","somali","somaliano","somaliense"]},
    "sy":{code:"sy",name:"Síria",giveaways:["siria","siriaco","sirio"]},
    "uk":{code:"uk",name:"Reino Unido",giveaways:["reino unido","londres","inglaterra","irlanda do norte","pais de gales","escocia"]},
    "us":{code:"us",name:"Estados Unidos da América",giveaways:["eua","e.u.a.","estados unidos da america","washington","nova iorque"]}

}

var sources = {
    pt:[
        {
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
            feeds:["http://www.jornaldenegocios.pt/funcionalidades/Rss.aspx"]
        },{
            name:"Jornal de Notícias",
            feeds:["http://feeds.jn.pt/JN-MUNDO","http://feeds.jn.pt/JN-ULTIMAS"]
        }
    ],
    br:[
        {
            name:"O Globo",
            feeds:["http://oglobo.globo.com/rss.xml?secao=mundo"]
        },{
            name:"Correio do Brasil",
            feeds:["http://correiodobrasil.com.br/feed/"]
        }
    ],
    ao:[
        {
            name:"Novo Jornal",
            feeds:["http://www.novojornal.co.ao/RSS"]
        },{
            name:"Jornal de Angola",
            feeds:["http://jornaldeangola.sapo.ao/feeds/articles/?section=13","http://jornaldeangola.sapo.ao/feeds/articles/"]
        }
    ]
};
