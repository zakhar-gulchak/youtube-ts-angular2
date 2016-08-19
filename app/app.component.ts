import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    providers: [AuthService]
})
export class AppComponent implements OnInit {
    constructor (private _authService: AuthService) {
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
