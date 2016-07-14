import { USER } from '../components/mock-user';
import { Injectable } from '@angular/core';
import { GoogleAPI } from 'gapi.auth2';
// import {User} from "../entities/user";

@Injectable()
export class AuthService {

    constructor(private loggedIn, private gAPI: GoogleAPI) {
        this.loggedIn = !!localStorage.getItem('auth_token');
        this.gAPI.doSomethingGoogley().then(() => {
            console.log('ta da');
        });
    }

    getUser() {
        // if (this.loggedIn) {
        //     return Promise.resolve(USER);
        // }

        // return {};
        return USER;
    }

    login() {
        localStorage.setItem('auth_token', 'sometoken');
        this.loggedIn = true;
    }
    logout() {
        localStorage.removeItem('auth_token');
        this.loggedIn = false;
    }
    isLoggedIn() {
        return this.loggedIn;
    }
}