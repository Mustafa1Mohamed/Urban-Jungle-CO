if(navigator.serviceWorker){
    navigator.serviceWorker.register('./sw.js').then(res => {
        console.log('service worker registered',res);
    })
}

self.addEventListener('install', e => {
    console.log("installing", e);
    e.waitUntil()
})

self.addEventListener('activate', e => {
    console.log("activating", e);
    e.waitUntil()
})

self.addEventListener('fetch', e => {
    console.log("fetching", e);
    e.waitUntil()
})