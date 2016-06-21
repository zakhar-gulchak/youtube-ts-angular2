import {Component} from '@angular/core';
import {ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {RouteSegment} from '@angular/router';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/private/video.detail.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [ROUTER_PROVIDERS]
})
export class VideoDetailComponent {
        videoId: string;
        constructor(routeSegment: RouteSegment) {
            this.videoId = routeSegment.getParam('videoId');
        }
}