var CURRENT_COUNTRY;

var giveaways = {
    "portugal":"pt",
    "portugues":"pt",
    "portuguesa":"pt",
    "lisboa":"pt",
    "brasil":"br",
    "brasileiro":"br",
    "brasileira":"br",
    "rio de janeiro":"br",
    "sao paulo":"br",
    "brasilia":"br",
    "angola":"ao",
    "angolano":"ao",
    "angolana":"ao",
    "luanda":"ao",
    "franca":"fr",
    "frances":"fr",
    "francesa":"fr"
}

var articles = {
}

var pendingFeeds=0;

function plog(object){
    console.log(object);
}

function updateFeedCount(){
    var countryCodes = Object.keys(sources);
    for(var i=0; i<countryCodes.length; ++i){
        var countryCode = countryCodes[i];
        for(var j=0;j<sources[countryCode].length;++j){
            var sourceCountry = sources[countryCode][j];
            for(var k=0;k<sourceCountry.feeds.length;++k) {
                pendingFeeds++;
            }
        }
    }
}

function loadFeeds(){
    updateFeedCount();
    var countryCodes = Object.keys(sources);
    for(var i=0; i<countryCodes.length; ++i){
        var countryCode = countryCodes[i];
        for(var j=0;j<sources[countryCode].length;++j){
            var sourceCountry = sources[countryCode][j];
            for(var k=0;k<sourceCountry.feeds.length;++k) {
                var sourceUrl = sourceCountry.feeds[k];
                loadArticles(sourceCountry.name,countryCode, sourceUrl);
            }
        }
    }
}

function loadArticles(sourceName,countryCode,feedUrl){
    var feed = new google.feeds.Feed(feedUrl);
    feed.setNumEntries(1000);
    feed.load(function(result) {
        if (!result.error) {
            for (var i = 0; i < result.feed.entries.length; i++) {
                var entry = result.feed.entries[i];
                var article = {
                    tld:countryCode,
                    url:entry.link,title:entry.title,domain:sourceName,lead:entry.contentSnippet,date:entry.publishedDate,body:entry.content};
                if(!articles[countryCode]){
                    articles[countryCode]=[];
                }
                articles[countryCode].push(article);
            }
        } else {
            plog(result);
        }
        pendingFeeds--;
        if(pendingFeeds==0){
            autoUpdateCountry();
        }
    });
}

function go(){
    loadFeeds();
}

function initGiveaways(){
    var countryCodes = Object.keys(countries);
    countryCodes.forEach(function(countryCode){
        var country = countries[countryCode];
        if(country.giveaways){
            country.giveaways.forEach(function (ga){
                giveaways[ga]=country.code;
            });
        }
    });
}

function init(){
    initCountryPicker('countryList');
    initGiveaways();
    google.load("feeds", "1", {"callback" : go});
}

function articleToText(article){
    return article.title + " " + (article.lead?article.lead:"") + " " + (article.body?article.body:"");
}

function guessCountriesOnText(text){
    var result = [];
    text = removeDiacritics(text.toLowerCase());
    var hints = Object.keys(giveaways);
    for(var i=0;i<hints.length;++i){
        var hint = hints[i];
        if(text.indexOf(hint)>=0){
            var countryCode=giveaways[hint];
            if(result.indexOf(countryCode)<0){
                result.push(countryCode);
            }
        }
    }
    return result;
}

function guessCountries(article){
    return guessCountriesOnText(articleToText(article));
}

function getNewsInCountry(who){
    var result = {};
    if(articles[who]) {
        for (var i = 0; i < articles[who].length; ++i) {
            var got = guessCountries(articles[who][i]);
            for (var j = 0; j < got.length; ++j) {
                if (got[j] != who) {
                    if(!result[got[j]]){
                        result[got[j]]=[];
                    }
                    result[got[j]].push(articles[who][i]);
                }
            }
        }
    }
    return result;
}

function getNewsAboutCountry(who){
    var result = [];
    var countryCodes = Object.keys(articles);
    for(var i=0;i<countryCodes.length;++i) {
        var countryCode = countryCodes[i];
        if (countryCode != who) {
            var got = getNewsInCountry(countryCode);
            got=got[who];
            if(got) {
                result=got;
                //got = flatOut(got);
                //got = sort(got);
            }
        }
    }
    return result;
}

function renderArticle(article){
    var result = "<article><row>";
    result += "<a target=\"_blank\" class=\"list-group-item\" href=\"" + article.url + "\">";
    if(article.title){
        result += "<h2 class=\"list-group-item-heading\">" + article.title + "</h2>";
    }
    if(article.lead){
        result += "<p class=\"list-group-item-text\">" + article.lead + "</p>";
    }
    if(article.tld){
        result += "Fonte: ";
        if(article.domain){
            result+= article.domain;
        } else {
            result += "N/A";
        }
        result += " (" + renderCountry(countries[article.tld]) + ")";
    }
    result += "</a>";
    result+="<span class=\"glyphicon glyphicon-share\" aria-hidden=\"true\"></span>"
    result += "</row></article>";
    return result;
}

function printArticlesOn(arts,id){
    var element = document.getElementById(id);
    var html = "";
    var countryCodes = Object.keys(arts);
    for(var i=0;i<arts.length;++i){
        html += renderArticle(arts[i]);
    }
    element.innerHTML=html;
}

function renderSource(sauce){
    var result = "<li>";
    result += "<a target=\"_blank\" class=\"list-group-item\" href=\"" + sauce.url + "\">";
    if(sauce.image){
        result += "<img class=\"list-group-item-text source-logo\" src=\"" + sauce.image + "\"</img>";
    }
    if(sauce.name){
        result += "<span class=\"list-group-item-heading\">" + sauce.name + "</span>";
    }
    result += "</a>";
    result += "</li>";
    return result;
}

function printSourcesOn(srcs,id){
    var element = document.getElementById(id);
    var html = "";
    if(srcs){
        srcs.forEach(function (sauce){
            html += renderSource(sauce);
        });
    }
    element.innerHTML=html;
}

function refresh(){
    var got = getNewsAboutCountry(getCurrentCountry());
    printArticlesOn(got,'allContents');
    printSourcesOn(sources[getCurrentCountry()],'allSources');
}

function getCurrentCountry(){
    return CURRENT_COUNTRY;
}

function renderCountry(country){
    return "<img class=\"flag-icon\" src='img/flag/" + country.code + ".gif'/>" + country.name;
}

function renderCountryItem(country){
    var html = "<li> <a onclick=\"setCountry('"+country.code+"')\">"
            + renderCountry(country) + "</a></li>";
    return html;
}

function initCountryPicker(elementId){
    var countryCodes=Object.keys(countries);
    var html = "";
    countryCodes.forEach(function(countryCode){
        html+=renderCountryItem(countries[countryCode]);
    });
    document.getElementById(elementId).innerHTML=html;
}

function setCountry(wut){
    if(wut&&countries[wut]) {
        document.getElementById('myLocation').innerHTML=renderCountry(countries[wut]);
        CURRENT_COUNTRY = wut;
        refresh();
    }
}

function popupError(message){

}

function errorDetectingCountry(){
    popupError("Não foi possível detectar a sua localização de forma automática.")
    if(CURRENT_COUNTRY&&CURRENT_COUNTRY!=null){
        setCountry(CURRENT_COUNTRY);
    } else {
        document.getElementById("myLocation").innerHTML="Escolher";
    }
}

function autoUpdateCountry(){
    var overrideCountry=getParameterByName('overrideCountry');
    if(overrideCountry){
        CURRENT_COUNTRY=overrideCountry.toLowerCase();
        refresh();
    } else {
        var options = {
            enableHighAccuracy: false,
            timeout: 5000,
            maximumAge: 0
        };

        function success(pos) {
            var crd = pos.coords;
            findCountry(crd.latitude,crd.longitude);
        };

        function error(err) {
            errorDetectingCountry();
            console.warn('ERROR(' + err.code + '): ' + err.message);
        };

        navigator.geolocation.getCurrentPosition(success, error, options);
    }
}

function findCountry(latitude,longitude){
    jQuery.getJSON("http://maps.googleapis.com/maps/api/geocode/json?latlng="+latitude+","+longitude+"&sensor=true",
    function (jsonGot){
        if(jsonGot&&jsonGot.results){
            for(var i=0;i<jsonGot.results.length;++i){
                if(jsonGot.results[i]){
                    var addComponents = jsonGot.results[i].address_components;
                    if(addComponents){
                        for(var j=0;j<addComponents.length;++j){
                            var addComponent = addComponents[j];
                            if(addComponent&&addComponent.types&&addComponent.short_name){
                                if(addComponent.types.indexOf("country")>=0){
                                    setCountry(addComponent.short_name.toLowerCase());
                                    return;
                                }
                            }
                        }
                    }
                }
            }
        }
        errorDetectingCountry();
    });
}


