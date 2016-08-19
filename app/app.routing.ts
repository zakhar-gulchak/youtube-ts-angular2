import {Routes, RouterModule} from '@angular/router';

import {WelcomeComponent} from './components/welcome.component';
import {YoutubeRoutes}    from './components/private/youtube.routes';

export const appRoutes: Routes = [
    {path: '', redirectTo: '/welcome', pathMatch: 'full'},
    {path: 'welcome', component: WelcomeComponent},
    ...YoutubeRoutes
];

export const routing = RouterModule.forRoot(appRoutes);
