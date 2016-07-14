import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {GoogleAPI} from 'gapi.auth2';

bootstrap(AppComponent, [GoogleAPI])
    .catch(err => console.log(err));
