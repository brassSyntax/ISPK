import { Injectable } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, map, Observable, throwError} from "rxjs";
import {User} from "../user";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  private userSubject: BehaviorSubject<User | null> | null;
  public user: Observable<User | null>;

  constructor(private router: Router, private http: HttpClient ) {
    const temp = localStorage.getItem('user');

    if(temp) {
      this.userSubject = new BehaviorSubject<User | null>(JSON.parse(temp));
      this.user = this.userSubject.asObservable();
    }
    else {
      throwError({error: 'Error: No value under key "user"'})
      this.userSubject = new BehaviorSubject<any>({});
      this.user = this.userSubject.asObservable();
    }
  }

  public get userValue(): User | null {
    return (this.userSubject ? this.userSubject.value : null);
  }

  public login(username: string, password: string) {
    return this.http.post<User>(`${environment.apiUrl}/users/authenticate`, {username, password})
      .pipe(map(user => {
        localStorage.setItem('user', JSON.stringify(user));
        this.userSubject ? this.userSubject.next(user) : null;
        return user;
      }));
  }

  public logout() {
    localStorage.removeItem('user');
    this.userSubject ? this.userSubject.next(null) : null;
    //uncomment this when routing is set
    //this.router.navigate(['account/login']);
  }

  public getAll() {
    return this.http.get<User[]>(`${environment.apiUrl}/users`);
  }

  public getById(id: string) {
    return this.http.get<User>(`${environment.apiUrl}/users/${id}`);
  }
}
