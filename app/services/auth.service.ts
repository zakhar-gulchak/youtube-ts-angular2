import { USER } from '../components/mock-user';
import { Injectable } from '@angular/core';
import {User} from "../entities/user";
// import { LocalStorage } from "angular2-local-storage/local_storage";

@Injectable()
export class AuthService {
    private loggedIn = false;

    constructor() {
        this.loggedIn = !!localStorage.getItem('auth_token');
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