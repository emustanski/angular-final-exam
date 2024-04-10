import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, Observable, Subscription, tap } from 'rxjs';
import { LoginAuthUser, RegisterAuthUser} from '../types/user';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root'
})
export class UserService implements OnDestroy {
  private user$$ = new BehaviorSubject<LoginAuthUser | undefined>(undefined);
  private user$ = this.user$$.asObservable()

  apiUrl = environment.apiUrl;

  USER_KEY = '[user]'
  user: LoginAuthUser | undefined
  userSub: Subscription;
 
  get isLoggedIn(): boolean {
    return !!this.user;
  }

  constructor(private http: HttpClient) { 
    this.userSub = this.user$.subscribe((user) => {
      this.user = user;
    });

    try {
      const localStorageUser = localStorage.getItem(this.USER_KEY) || '';
      this.user = JSON.parse(localStorageUser);
    } catch (error) {
      this.user = undefined;
    }
  }

  login$(email: string, password: string): Observable<any> {
    return this.http.post<LoginAuthUser>(`${this.apiUrl}/users/login`, { email, password})
    .pipe(tap((response) => {
        this.user$$.next(response);
        this.user = response;
        localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    })
    )
  }

  register$(email: string, password: string): Observable<any> {
    return this.http.post<RegisterAuthUser>(`${this.apiUrl}/users/register`, { email, password})
    .pipe(tap((response) => {
      this.user$$.next({
        email: response.email,
        accessToken: response.accessToken,      
        _id: response._id
      });
      this.user = {
        email: response.email,
        accessToken: response.accessToken, 
        _id: response._id,
      };
      localStorage.setItem(this.USER_KEY, JSON.stringify(this.user));
    }))
  }

  logout$() {
      this.user = undefined;
      localStorage.removeItem(this.USER_KEY);

      return this.http.post(`${this.apiUrl}/users/logout`, {})
    }

    getUser(): any {
      return this.http.get(`${this.apiUrl}/me`)
    }
    // getToken(): string {
    //   return this.user?.accessToken || '';
    // }
  

  ngOnDestroy(): void {
    this.userSub.unsubscribe()
  }
}
