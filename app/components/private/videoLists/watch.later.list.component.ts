import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/components/private/videoLists/video.list.html'
})
export class WatchLaterListComponent {
    title = 'Watch later';
    videos = [];
}
