import { Injectable } from '@angular/core';
import { Observable, of, map, catchError, throwError, finalize, tap, BehaviorSubject } from 'rxjs';
import { Apollo, gql  } from 'apollo-angular';
import  { Player }  from "./../../../utils/types/Player";
import { Match } from 'src/utils/types/Match';
import { LocalStorageService } from '../localStorage/local-storage.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  modal={
    isModalOn: false,
    title: "",
    info: "",
    buttonText: "Close",
    buttonActionNegative: async()=>{},
    buttonActionPositive: async()=>{ this.modal.isModalOn=false; },
    matchId: 1
  }
  isLoading = false;
  errorMessage: string="";
  public isLoggedIn$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
 
  constructor(private apollo: Apollo, private localStorage: LocalStorageService, public router: Router) {}

  signup(user: {
      email: string,
      username: string,
      password: string
    }): void {
    this.isLoading = true;

    const mutation = gql`
        mutation signup($user: SignUpInput!) {
          signup(signUpInput: $user) {
                accessToken,
                player{
                  id,
                  username
                }
            }
        }
    `;

    this.apollo
        .mutate<any>({
            mutation,
            variables: { user }
        })
        .pipe(
            catchError((error) => {
                console.error('An error occurred:', error);
                this.modal.title="Whoops!";
                this.modal.info=`Something went wrong could not register, verify your info please`;
                this.modal.isModalOn=true;
                this.isLoading = false;
                return throwError(error);
            })
        )
        .subscribe((response) => {
            console.log(response);
            this.localStorage.setItem("token", response?.data?.signup?.accessToken);
            this.localStorage.setItem("id", response?.data?.signup?.player?.id);
            this.isLoading = false;
            this.isLoggedIn$.next(true);
        });
  }

  login(user: { password: string, username: string }): void {
    this.isLoading = true;

    const query = gql`
        query login($user: LoginInput!) {
          login(loginInput: $user) {
                accessToken,
                player{
                  id,
                  username
                }
            }
        }
    `;

    this.apollo
        .query<any>({
            query,
            variables: { user }
        })
        .pipe(
            catchError((error) => {
                console.error('An error occurred:', error);
                this.modal.title="Whoops!";
                this.modal.info=`Something went wrong could login, verify your info please`;
                this.modal.isModalOn=true;
                this.isLoading = false;
                return throwError(error);
            })
        )
        .subscribe((response) => {
            console.log(response);
            this.localStorage.setItem("token", response?.data?.signup?.accessToken);
            this.localStorage.setItem("id", response?.data?.signup?.player?.id);
            this.isLoggedIn$.next(true);
            this.isLoading = false;
        });
  }


  getLoading(): boolean{
    return this.isLoading;
  }

  getError(): string{
    return this.errorMessage;
  }
}
