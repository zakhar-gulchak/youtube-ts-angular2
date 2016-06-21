import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';

@Component({
    templateUrl: 'app/components/private/youtube.app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
export class YoutubeAppComponent {
    videos = [];/*[
        {
            id: {
                videoId: 1
            },
            snippet: {
                title: 'ololo',
                description: 'desc',
                thumbnails: {
                    'default': {
                        url: 'http://youtube.com/watch?v=dfsfsd'
                    }
                }
            }
        },
        {
            id: {
                videoId: 2
            },
            snippet: {
                title: 'ololo',
                description: 'desc',
                thumbnails: {
                    'default': {
                        url: 'http://youtube.com/watch?v=dfsfsd'
                    }
                }
            }
        },
    ];*/
}
