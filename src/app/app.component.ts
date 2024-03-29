import { Component } from '@angular/core';
import {ReviewInputFormComponent} from "./review-input-form/review-input-form.component";
import {MatDialog} from "@angular/material/dialog";
import {AccountService} from "./services/account.service";
import {map} from "rxjs";
import {FakeBackendInterceptorService} from "./services/fake-backend-interceptor.service";
import {Review} from "./review";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ISPK';
  isUserStudent: boolean = false;
  isUserAdmin: boolean = false;
  reviews?: Review[];
  isLoggedIn: boolean = false;


  constructor(public dialog: MatDialog, public account: AccountService) {
    //this.debugAccountService();

    this.reviews = JSON.parse(localStorage.getItem('reviews') || '{}');

    this.account.user
      .pipe(map(() => {
        this.isUserAdmin = this.account.userValue?.role === 'admin';

        if(this.account.userValue?.role === 'student') {
          this.isUserStudent = true;
          console.log(this.isUserStudent);
        }
        else {
          this.isUserStudent = false;
        }
      }))
      .subscribe();

  }

  // TODO: remove this once not needed
  private debugAccountService() {
    this.account.login('admin', 'admin')
      .subscribe(x => {
        console.log(x);
        console.log('logging in...')

        this.account.logout();
      });
  }

  reviewButtonClick() {
    let dialogRef = this.dialog.open(ReviewInputFormComponent, {
      data: { programName: 'Software Engineering'} // TODO: change to active user's studyProgram
      // height: '400px',
      // width: '640px'
    });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('Review closed');
    // })
  }
}
