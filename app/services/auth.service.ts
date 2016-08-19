import { USER } from '../components/mock-user';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
    loggedIn = true; // todo: MOVE this to constructor
    constructor() {
        // this.loggedIn = !!localStorage.getItem('auth_token');
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