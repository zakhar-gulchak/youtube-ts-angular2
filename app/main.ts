import {bootstrap}    from '@angular/platform-browser-dynamic';
import {AppComponent} from './app.component';
import {GoogleAPI} from './services/gloader';

bootstrap(AppComponent, [GoogleAPI])
    .catch(err => console.log(err));
