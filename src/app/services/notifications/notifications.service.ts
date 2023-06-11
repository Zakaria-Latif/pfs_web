import { Injectable } from '@angular/core';
import { Observable, of, map } from 'rxjs';
import { Apollo, gql  } from 'apollo-angular';
import { Notification } from 'src/utils/types/Notification';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {
  myNotifications$: Observable<Notification[]> = of([]);
  isLoading = false;
  errorMessage: string="";
  
 
  constructor(private apollo: Apollo) {}
 
  fetchMyNotifications(): Observable<Array<Notification>> {
    this.isLoading=true;
    this.myNotifications$ = this.apollo
      .watchQuery<any>({
        query: gql`
          query getMyNotifications {
            getMyNotifications{
              id,
              type,
              title,
              message,
              recipientId,
              isRead,
              entityId
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
          return result.data?.getMyNotifications;
        })
      );
    this.isLoading=false;
    return this.myNotifications$;
  }

  getLoading(): boolean{
    return this.isLoading;
  }

  getError(): string{
    return this.errorMessage;
  }

  getMyNotifications(): Observable<Array<Notification>>{
    return this.myNotifications$;
  }
}
