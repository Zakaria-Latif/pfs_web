import { Injectable } from '@angular/core';
import { Observable, of, map, catchError, throwError, finalize, tap, BehaviorSubject } from 'rxjs';
import { Apollo, gql  } from 'apollo-angular';
import  { Player }  from "./../../../utils/types/Player";
import { Match } from 'src/utils/types/Match';
import { ApolloError } from '@apollo/client/errors';

@Injectable({
  providedIn: 'root'
})
export class MatchesService {
  modal={
    isModalOn: false,
    title: "",
    info: "",
    buttonText: "Okay",
    buttonActionNegative: async()=>{},
    buttonActionPositive: async()=>{ 
      this.modal.isModalOn=false;
      this.modal.title=""; 
      this.modal.info=""; 
    },
    matchId: 1
  }

  members$: Observable<any[]> = of([]);
  currentSentInvitationMatchId$=new BehaviorSubject<number>(-1);
  myMatches$: Observable<Match[]> = of([]);
  isLoading = false;
  errorMessage: string="";
 
  constructor(private apollo: Apollo) {}

  fetchMyMatches(): Observable<Array<Match>> {
    this.isLoading=true;
    this.myMatches$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query myMatches {
            myMatches(paginationInput:{skip: 1, take:100}){
              id,
              creatorId,
              name,
              location,
              duration,
              time,
              creator{
                username
              }
            }
          }
        `,
      })
      .valueChanges
      .pipe(
        map((result) => {
          // this.isLoading = result.loading;
          console.log(result);
          this.isLoading=false;
          return result.data?.myMatches;
        })
      );
    this.isLoading=false;
    return this.myMatches$;
  }
 
  fetchMembers(matchId: number): Observable<Array<any>> {
    
    this.isLoading=true;
    this.members$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query match($matchId: Int!) { 
            match(id: $matchId){
              players{
                id,
                rate,
                position,
                player{
                  username,
                  location,
                  description,
                  createdAt,
                  playerStatistics{
                    matchesNumber
                  }
                }
              }
            }
          }
        `,
        variables: {matchId}
      })
      .valueChanges
      .pipe(
        map((result) => {
          // this.isLoading = result.loading;
          console.log(result);
          this.isLoading=false;
          return result.data?.match?.players;
        })
      );
    this.isLoading=false;
    return this.members$;
  }

  addMatch(match: {
    name: string,
    location: string,
    time: string,
    duration: number,
    playersNumber: number,
    prize: string
    }): void {
    this.isLoading = true;

    const mutation = gql`
        mutation CreateMatch($match: CreateMatchInput!) {
            createMatch(createMatchInput: $match) {
                name
            }
        }
    `;

    this.apollo
        .mutate<any>({
            mutation,
            variables: { match }
        })
        .pipe(
            catchError((error) => {
                console.error('An error occurred:', error);
                this.modal.title="Whoops!";
                if (error instanceof ApolloError && error.graphQLErrors.length > 0) {
                  this.modal.info = error.graphQLErrors[0].message;
                }else{
                  this.modal.info=`Something went wrong could not add this match, make sure you are connected`;
                }
                this.modal.isModalOn=true;
                this.isLoading = false;
                return throwError(error);
            })
        )
        .subscribe((response) => {
            console.log(response);
            this.modal.title="Congraaaats!";
            this.modal.info=`The match ${response.data?.createMatch?.name} has been created successfully`;
            this.modal.isModalOn=true;
            this.isLoading = false;
        });
  }

  joinMatch(matchId: number): void {
    this.isLoading = true;
    console.log(matchId);
    const mutation = gql`
        mutation createInvitation($matchId: Int!) {
          createInvitation(matchId: $matchId) {
                id,
                match{
                  name
                }
            }
        }
    `;

    this.apollo
        .mutate<any>({
            mutation,
            variables: { matchId }
        })
        .pipe(
            catchError((error) => {
                // console.error('An error occurred:', error);
                if (error instanceof ApolloError && error.graphQLErrors.length > 0) {
                  this.modal.info = error.graphQLErrors[0].message;
                  console.log(error.graphQLErrors[0].message);
                }else if (error instanceof ApolloError) {
                  this.modal.info = error.message;
                } else{
                  this.modal.info=`Something went wrong could not join this match, make sure you are connected`;
                }
                this.modal.title="Whoops!";
                this.modal.isModalOn=true;
                this.isLoading = false;
                return throwError(error);
            })
        )
        .subscribe((response) => {
            console.log(response);
            this.currentSentInvitationMatchId$.next(matchId);
            this.modal.title="Congraaaats!";
            this.modal.info=`Your invitation to join ${response.data?.createInvitation?.match?.name} has been sent successfully`;
            this.modal.isModalOn=true;
            this.isLoading = false;
        });
  }

  getLoading(): boolean{
    return this.isLoading;
  }

  getError(): string{
    return this.errorMessage;
  }

  getMembers(): Observable<Array<any>>{
    return this.members$;
  }

  getMyMatches(): Observable<Array<Match>>{
    return this.myMatches$;
  }
  getCurrentSentInvitationMatchId(): Observable<number>{
    return this.currentSentInvitationMatchId$.asObservable();
  }
}
