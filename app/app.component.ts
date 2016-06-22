import { Component, OnInit } from '@angular/core';
import { RouteConfig, Router, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
// import { Location, PathLocationStrategry } from '@angular/router';
import { AuthService } from './services/auth.service';
import { WelcomeComponent } from './components/welcome.component';
import { YoutubeAppComponent } from './components/private/youtube.app.component';
import {UploadComponent} from "./components/private/videoItem/upload.component";
import {MyvideosComponent} from "./components/private/videoLists/my.videos.component";
import {VideoDetailComponent} from "./components/private/videoItem/video.detail.component";
import {WatchLaterListComponent} from "./components/private/videoLists/watch.later.list.component";

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [ROUTER_DIRECTIVES],
    providers: [AuthService, ROUTER_PROVIDERS]
})
@RouteConfig([
    {
        path: '/welcome',
        name: 'Welcome',
        component: WelcomeComponent,
        useAsDefault: true
    },
    // { path: '/**', redirectTo: ['Welcome'] },
    {
        path: '/home',
        name: 'Youtube',
        component: YoutubeAppComponent
    },
    {
        path: '/upload',
        name: 'Upload',
        component: UploadComponent
    },
    {
        path: '/my-videos',
        name: 'Myvideos',
        component: MyvideosComponent
    },
    {
        path: '/watch-later',
        name: 'WatchLaterList',
        component: WatchLaterListComponent
    },
    {
        path: '/video/:videoId',
        name: 'VideoDetail',
        component: VideoDetailComponent
    }
])
export class AppComponent implements OnInit {
    constructor (private _authService: AuthService, private router: Router) {

    }

    title = 'My youtube app'; // todo how to set this title into html
    userInfo = {};

    login(){
        this._authService.login();
    }
    logout() {
        this._authService.logout();
    }
    isLoggedIn() {
        this.userInfo = this.getUser();
        return this._authService.isLoggedIn();
    }
    getUser() {
        this.userInfo = this._authService.getUser();
        return this.userInfo;
    }

    ngOnInit() {
    }
}
