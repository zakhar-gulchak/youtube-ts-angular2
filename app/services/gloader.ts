const url = 'https://apis.google.com/js/client.js?onload=__onGoogleLoaded';

export class GoogleAPI {
    loadAPI:Promise<any>;

    constructor() {
        this.loadAPI = new Promise((resolve) => {
            window['__onGoogleLoaded'] = (ev) => {
                console.log('gapi loaded');
                resolve(window.gapi);
            };
            this.loadScript();
        });

    }

    doSomethingGoogley() {
        return this.loadAPI.then((gapi) => {
            console.log(gapi);
        });
    }

    loadScript() {
        console.log('loading..');
        let node = document.createElement('script');
        node.src = url;
        node.type = 'text/javascript';
        document.getElementsByTagName('head')[0].appendChild(node);
    }
}
