import { Injectable } from '@angular/core';
import {
  HTTP_INTERCEPTORS,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse
} from "@angular/common/http";
import {delay, dematerialize, materialize, mergeMap, Observable, of, throwError} from "rxjs";
import {MOCK_USERS, REVIEWS, STUDY_PROGRAMS} from "../mock-data";

let users: any[] = [];
let study_programs: any[] = [];
let reviews: any[] = [];

@Injectable({
  providedIn: 'root'
})
export class FakeBackendInterceptorService implements HttpInterceptor{

  constructor() {
    let temp = localStorage.getItem('users');
    if(temp) {
      users = JSON.parse(temp);
    }
    else {
      users = MOCK_USERS;
      localStorage.setItem('users', JSON.stringify(users));
    }

    let temp2 = localStorage.getItem('study_programs');
    if(temp2) {
      study_programs = JSON.parse(temp2);
    }
    else {
      study_programs = STUDY_PROGRAMS;
      localStorage.setItem('study_programs', JSON.stringify(study_programs));
    }

    let temp3 = localStorage.getItem('reviews');
    if(temp3) {
      reviews = JSON.parse(temp3);
    }
    else {
      reviews = REVIEWS;
      localStorage.setItem('reviews', JSON.stringify(reviews));
    }
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const {url, method, headers, body} = req;

    return of(null)
      .pipe(mergeMap(handleRoute))
      .pipe(materialize())
      .pipe(delay(500))
      .pipe(dematerialize());

    function handleRoute() {
      switch(true) {
        case url.endsWith('/users/authenticate') && method === 'POST':
          return authenticate();
        case url.endsWith('/users/register') && method === 'POST':
          return register();
        case url.endsWith('/users') && method === 'GET':
          return getUsers();
        case url.match(/\/users\/\d+$/) && method === 'GET':
          return getUserById();
        case url.match(/\/users\/\d+$/) && method === 'PUT':
          return updateUser();
        case url.match(/\/users\/\d+$/) && method === 'DELETE':
          return deleteUser();
        default:
          return next.handle(req);
      }
    }

    function authenticate() {
      const {username, password} = body;
      const user = users.find((x: any) => {
        return x.username === username && x.password === password;
      });

      if(!user) return error('Username or password  is incorrect');

      return ok({
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        role: user.role,
        token: 'fake-jwt-token'
      });
    }

    function register() {
      const user = body;

      if(users.find(x => x.username === user.username)) {
        return error('Username "' + user.username + '" is already taken');
      }

      user.id = users.length ? Math.max(...users.map(x => x.id)) + 1 : 1;
      users.push(user);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
    }

    function getUsers() {
      if(!isLoggedIn()) return unauthorized();
      return ok(users);
    }

    function getUserById() {
      if(!isLoggedIn()) return unauthorized();

      const user = users.find((x: any) => x.id === idFromUrl());
      return ok(user);
    }

    function updateUser() {
      if(!isLoggedIn()) return unauthorized();

      let params = body;
      let user = users.find((x: any) => x.id === idFromUrl());

      // only update password if entered
      if(!params.password) {
        delete params.password;
      }

      // update and save user
      Object.assign(user, params);
      localStorage.setItem('users', JSON.stringify(users));

      return ok();
    }

    function deleteUser() {
      if(!isLoggedIn()) return unauthorized();

      users = users.filter((x: any) => x.id !== idFromUrl());
      localStorage.setItem('users', JSON.stringify(users));
      return ok();
    }

    function ok(body?: any) {
      return of(new HttpResponse({status: 200, body}));
    }

    function error(message: any) {
      return throwError({error: {message}});
    }

    function unauthorized() {
      return throwError({status: 401, error: {message: 'Unauthorised'}});
    }

    function isLoggedIn() {
      return headers.get('Authorization') === 'Bearer fake-jwt-token';
    }

    function idFromUrl() {
      const urlParts = url.split('/');
      return parseInt(urlParts[urlParts.length - 1]);
    }
  }
}

export const fakeBackendProvider = {
  provide: HTTP_INTERCEPTORS,
  useClass: FakeBackendInterceptorService,
  multi: true
};
