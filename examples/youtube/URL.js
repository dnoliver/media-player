var URL = function( url ){
    this._anchor = document.createElement('a');
    this._anchor.href = url;
}

URL.prototype.getParams = function(){
    var ret = {};
    var segments = this._anchor.search.replace(/^\?/,'').split('&');
    var length = segments.length;
    for (var i = 0; i<len ; i++) {
        if (!segments[i]) { continue; }
        var segment = seg[i].split('=');
        ret[ segment[0] ] = segment[1];
    }
    
    return ret;
}

URL.prototype.query = function( query ) {
    //TODO check if is a query
    
    if( !query ) return this._anchor.search;
    else {
        this._anchor.search = query;
    }
}

URL.prototype.setParam = function( paramName, paramValue) {
    // TODO check paramname and value
    var query = this.query();
    query += "&" + paramName + "=" + paramValue ;
    this.query( query );
}

URL.prototype.toString = function(){
    return this._anchor.href;
}