var rsss = ["http://feeds.feedburner.com/PublicoRSS?format=xml","http://oglobo.globo.com/rss.xml?secao=mundo"];

var objects = {};

function plog(object){
    console.log(object);
}

function fetchUrls(){
    for(var i=0;i<rsss.length;++i){
        fetchUrlsFromFeed(rsss[i]);
    }
    fetchSocialData();
}

function fetchUrlsFromFeed(feedUrl){
    var feed = new google.feeds.Feed(feedUrl);
    feed.load(function(result) {
        if (!result.error) {
            for (var i = 0; i < result.feed.entries.length; i++) {
                var entry = result.feed.entries[i];
                objects[entry.link]={url:entry.link,title:entry.title,domain:result.feed.title};
            }
        } else {
            plog(result);
        }
    });
}

function fetchSocialData(){
    var keys = Object.keys(objects);
    for(var i=0;i<keys.length;++i){
        fetchFacebookData(keys[i]);
    }
}

function init(){
    FB.login(function(){}, {scope: 'user_about_me'});
    google.load("feeds", "1");
}

function fetchFacebookData(url){
    FB.api(
        "/?id="+url,
        function (response) {
            if (response) {
                if(response.error){
                    plog(response.error);
                } else {
                    plog(response);
                }
            }
        }
    );
}

function list(){

}

