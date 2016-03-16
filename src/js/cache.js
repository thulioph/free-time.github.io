var _initCache = function() {
    var appCache, that;

    that = this;
    appCache = window.applicationCache;

    appCache.addEventListener('cached', handleCachedEvent, false);
    appCache.addEventListener('checking', handleCacheChecking, false);
    appCache.addEventListener('downloading', handleCacheDownloading, false);
    appCache.addEventListener('error', handleCacheError, false);
    appCache.addEventListener('noupdate', handleCacheNoupdate, false);
    appCache.addEventListener('obsolete', handleCacheObsolete, false);
    appCache.addEventListener('progress', handleCacheProgress, false);
    appCache.addEventListener('updateready', handleCacheUpdateready, false);
};

_initCache();

var handleCachedEvent = function() {
    console.log(event)
};

var handleCacheChecking = function() {
    console.log(event)
};

var handleCacheDownloading = function() {
    console.log(event)

    new Notification('Download', {
        body: 'Realizando o download de novos conteúdos.',
        icon: 'assets/image/icon.png'
    });
};

var handleCacheError = function() {
    console.log(event)
};

var handleCacheNoupdate = function() {
    console.log(event)
};

var handleCacheObsolete = function() {
    console.log(event)
};

var handleCacheProgress = function() {
    console.log(event)
};

var handleCacheUpdateready = function() {
    var appCache;

    appCache.swapCache();

    new Notification('Novidades!', {
        body: 'Um novo vídeo foi adicionado, atualize a página para visualiza-lo :)',
        icon: 'assets/image/icon.png'
    });
};
