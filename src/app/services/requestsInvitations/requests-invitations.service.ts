import { Injectable } from '@angular/core';
import { Observable, of, map, catchError, throwError, BehaviorSubject } from 'rxjs';
import { Apollo, gql  } from 'apollo-angular';
import { Notification } from 'src/utils/types/Notification';
import { ApolloError } from '@apollo/client/errors';

@Injectable({
  providedIn: 'root'
})
export class RequestsInvitationsService {
  isLoading = false;
  errorMessage: string="";
  acceptedOrRefusedInvitationsIds$ = new BehaviorSubject<Array<number>>([]);
  removedInvitationsIds$ = new BehaviorSubject<Array<number>>([]);

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
    invitationId: 1
  }

  constructor(private apollo: Apollo) {}

  acceptInvitation(id: number): void {
    this.isLoading = true;

    const mutation = gql`
        mutation acceptInvitation($id: Int!) {
          acceptInvitation(id: $id) {
                id
            }
        }
    `;

    this.apollo
        .mutate<any>({
            mutation,
            variables: { id }
        })
        .pipe(
          catchError((error) => {
              console.error('An error occurred:', error);
              this.modal.title="Whoops!";
              if (error instanceof ApolloError && error.graphQLErrors.length > 0) {
                this.modal.info = error.graphQLErrors[0].message;
              }else{
                this.modal.info=`Something went wrong could not accept the invitation, make sure you are connected`;
              }
              this.modal.isModalOn=true;
              this.isLoading = false;
              return throwError(error);
          })
      )
      .subscribe((response) => {
          console.log(response);
          this.modal.title="";
          this.modal.info=`The invitation has been accepted successfully`;
          this.modal.isModalOn=true;
          this.acceptedOrRefusedInvitationsIds$.next(this.acceptedOrRefusedInvitationsIds$.getValue().concat([id]));
          this.isLoading = false;
      });
  }

  refuseInvitation(id: number): void {
    this.isLoading = true;

    const mutation = gql`
        mutation refuseInvitation($id: Int!) {
          refuseInvitation(id: $id) {
                id
            }
        }
    `;

    this.apollo
        .mutate<any>({
            mutation,
            variables: { id }
        })
        .pipe(
          catchError((error) => {
              console.error('An error occurred:', error);
              this.modal.title="Whoops!";
              if (error instanceof ApolloError && error.graphQLErrors.length > 0) {
                this.modal.info = error.graphQLErrors[0].message;
              }else{
                this.modal.info=`Something went wrong could not refuse the invitation, make sure you are connected`;
              }
              this.modal.isModalOn=true;
              this.isLoading = false;
              return throwError(error);
          })
      )
      .subscribe((response) => {
          console.log(response);
          this.modal.title="";
          this.modal.info=`The invitation has been refused`;
          this.modal.isModalOn=true;
          this.acceptedOrRefusedInvitationsIds$.next(this.acceptedOrRefusedInvitationsIds$.getValue().concat([id]));
          this.isLoading = false;
      });
  }

  deleteInvitation(id: number): void {
    this.isLoading = true;

    const mutation = gql`
        mutation removeInvitation($id: Int!) {
          removeInvitation(id: $id) {
                id
            }
        }
    `;

    this.apollo
        .mutate<any>({
            mutation,
            variables: { id }
        })
        .pipe(
          catchError((error) => {
            console.error('An error occurred:', error);
            this.modal.title="Whoops!";
            if (error instanceof ApolloError && error.graphQLErrors.length > 0) {
              this.modal.info = error.graphQLErrors[0].message;
            }else{
              this.modal.info=`Something went wrong could not delete this invitation, make sure you are connected`;
            }
            this.modal.isModalOn=true;
            this.isLoading = false;
            return throwError(error);
          })
      )
      .subscribe((response) => {
        console.log(response);
        this.modal.title="";
        this.modal.info=`The invitation has been deleted successfully`;
        this.modal.isModalOn=true;
        this.removedInvitationsIds$.next(this.removedInvitationsIds$.getValue().concat([id]));
        this.isLoading = false;
      });
  }

  getLoading(): boolean{
    return this.isLoading;
  }

  getError(): string{
    return this.errorMessage;
  }

  getAcceptedOrRefusedInvitationsIds(): Observable<Array<number>>{
    return this.acceptedOrRefusedInvitationsIds$.asObservable();
  }

  getRemovedInvitationsIds(): Observable<Array<number>>{
    return this.removedInvitationsIds$.asObservable();
  }

}
