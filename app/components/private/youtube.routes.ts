import {Routes} from '@angular/router';

import {YoutubeAppComponent} from '../private/youtube.app.component';
import {UploadComponent} from '../private/videoItem/upload.component';
import {MyvideosComponent} from '../private/videoLists/my.videos.component';
import {VideoDetailComponent} from '../private/videoItem/video.detail.component';
import {WatchLaterListComponent} from '../private/videoLists/watch.later.list.component';

export const YoutubeRoutes: Routes = [
    {
        path: 'home',
        component: YoutubeAppComponent
    },
    {
        path: 'upload',
        component: UploadComponent
    },
    {
        path: 'my-videos',
        component: MyvideosComponent
    },
    {
        path: 'watch-later',
        component: WatchLaterListComponent
    },
    {
        path: 'video/:videoId',
        component: VideoDetailComponent
    }
];
