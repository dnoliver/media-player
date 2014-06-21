var YoutubeSearch = function(){
    this._key = "AIzaSyDqPgCsZhpKRMDAUKpcWZc8-FadH_I7xtM";
}

YoutubeSearch.prototype.search = function( text, callback ) {
    var searchURL = "https://www.googleapis.com/youtube/v3/search?type=video&part=snippet";    
    var url = new URL( searchURL );
    var textToSearch = text ;
    url.setParam("q", textToSearch );
    url.setParam("key", this._key );
    $.get( url.toString() , function( data ) {
        callback && callback(data);
    });
}