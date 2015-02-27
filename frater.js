var CURRENT_COUNTRY;

var errorLocating;

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
var totalFeeds=0;

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
                totalFeeds++;
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
            plog("Error loading feed: " + feedUrl);
            plog(result);
        }
        pendingFeeds--;
        updateProgress();
        if(pendingFeeds==0){
            autoUpdateCountry();
        }
    });
}

function updateProgress(){
    var got = document.getElementById("loadingSources");
    var bar = document.getElementById("loadingSourcesBar");
    if(got&&bar){
        var percent = Math.floor(100*(totalFeeds-pendingFeeds)/totalFeeds);
        bar.setAttribute("style","width:"+percent+"%");
        got.innerHTML="("+(totalFeeds-pendingFeeds)+ "/" + totalFeeds + ")";
    }
}

function updateLocationProgress(percent,message){
    var got = document.getElementById("loadingLocation");
    var bar = document.getElementById("loadingLocationBar");
    if(got&&bar){
        bar.setAttribute("style","width:"+percent+"%");
        if(message){
            got.innerHTML=message;
        }
    }
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

    window.fbAsyncInit = function() {
        FB.init({
            appId      : '212529525458803',
            xfbml      : true,
            version    : 'v2.1'
        });
    };

    (function(d, s, id){
        var js, fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {return;}
        js = d.createElement(s); js.id = id;
        js.src = "//connect.facebook.net/pt_PT/sdk.js";
        fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
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
                result=result.concat(got);
            }
        }
    }
    return result;
}

function share(uri){
    FB.ui({
        method: 'share',
        href: uri
    }, function(response){});
}

function renderArticle(article){
    var result = "<div class=\"row frater-article\">";
    result += "<a target=\"_blank\" class=\"col-md-11 list-group-item\" href=\"" + article.url + "\">";
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
    if(article.date){
        // result += " " + article.date;
    }
    result += "</a>";
    result += "<div class=\"col-md-1 share-container\">";
    result += "<button class=\"share-button\" onclick=\"share('"+article.url+"')\">";
    result+="<span class=\"glyphicon glyphicon-share\" aria-hidden=\"true\"></span>"
    result += "</button>";
    result += "</div>";
    result += "</div>";
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

function sortNews(news){
    news.sort(function(left,right){
        if(!left){
            return 1;
        }
        if(!right){
            return -1;
        }
        if(!left.date){
            return 1;
        }
        if(!right.date){
            return -1;
        }
        return dates.compare(left,right);
    });
}

function refresh(){
    var got = getNewsAboutCountry(getCurrentCountry());
    sortNews(got);
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
        document.getElementById('about-local').innerHTML="Sobre " + countries[wut].name;
        CURRENT_COUNTRY = wut;
        refresh();
    }
}

function popupError(message){

}

function errorDetectingCountry(){
    errorLocating=true;
    popupError("Não foi possível detectar a sua localização de forma automática.")
    if(CURRENT_COUNTRY&&CURRENT_COUNTRY!=null){
        setCountry(CURRENT_COUNTRY);
    } else {
        var gotLocation = document.getElementById("myLocation").innerHTML="Escolher";
        var loadingLocation = document.getElementById("loadingLocationError");
        loadingLocation.innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Não foi possível detetar a sua localização. Pode indicá-la manualmente utilizando o menu no topo do ecrã.</div>";
    }
}

function autoUpdateCountry(){
    updateLocationProgress(0,null);
    var overrideCountry=getParameterByName('overrideCountry');
    if(overrideCountry){
        CURRENT_COUNTRY=overrideCountry.toLowerCase();
        updateLocationProgress(100,null);
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
        progressLocation(5);
        navigator.geolocation.getCurrentPosition(success, error, options);
    }
}

function progressLocation(remainingSeconds){
    if(remainingSeconds>=0&&!errorLocating) {
        updateLocationProgress(Math.floor(100 * ((5-remainingSeconds) / 5)), null);
        setTimeout(function (){progressLocation(remainingSeconds-1)},1000);
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


