import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StudyProgramDisplayComponent} from "./study-program-display/study-program-display.component";
import {FormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import { ReviewDisplayComponent } from './review-display/review-display.component';
import {AppRoutingModule} from "./app.routing-module";
import { ReviewInputFormComponent } from './review-input-form/review-input-form.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatToolbarModule} from "@angular/material/toolbar";
import { LoginFormComponent } from './login-form/login-form.component';
import {MatIconModule} from "@angular/material/icon";
import { ContactSupportComponent } from './contact-support/contact-support.component';
import { DialogContactSupportComponent } from './dialog-contact-support/dialog-contact-support.component';
import {MatSelectModule} from "@angular/material/select";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {fakeBackendProvider} from "./services/fake-backend-interceptor.service";
import {IonicStorageModule} from "@ionic/storage-angular";
import { AddStudyProgramComponent } from './add-study-program/add-study-program.component';
import { EditStudyProgramComponent } from './edit-study-program/edit-study-program.component';

@NgModule({
  declarations: [
    AppComponent,
    StudyProgramDisplayComponent,
    ReviewDisplayComponent,
    ReviewInputFormComponent,
    ReviewDisplayComponent,
    LoginFormComponent,
    ContactSupportComponent,
    DialogContactSupportComponent,
    AddStudyProgramComponent,
    EditStudyProgramComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    MatExpansionModule,
    MatCardModule,
    MatButtonModule,
    MatListModule,
    MatDialogModule,
    AppRoutingModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatIconModule,
    MatSelectModule,
    HttpClientModule,
    IonicStorageModule.forRoot()
  ],
  providers: [

    // fake backend. Remove this if using real one
    fakeBackendProvider,
    EditStudyProgramComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
