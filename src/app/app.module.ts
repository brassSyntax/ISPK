import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {StudyProgramDisplayComponent} from "./study-program-display/study-program-display.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";
import {MatListModule} from "@angular/material/list";
import { ReviewDisplayComponent } from './review-display/review-display.component';
import { LoginFormComponent } from './login-form/login-form.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import { ContactSupportComponent } from './contact-support/contact-support.component';
import { DialogContactSupportComponent } from './dialog-contact-support/dialog-contact-support.component';
import {MatDialogModule} from "@angular/material/dialog";
import {MatSelectModule} from "@angular/material/select";

@NgModule({
  declarations: [
    AppComponent,
    StudyProgramDisplayComponent,
    ReviewDisplayComponent,
    LoginFormComponent,
    ContactSupportComponent,
    DialogContactSupportComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        FormsModule,
        MatExpansionModule,
        MatCardModule,
        MatButtonModule,
        MatListModule,
        MatFormFieldModule,
        MatIconModule,
        MatInputModule,
        MatDialogModule,
        MatSelectModule,
        ReactiveFormsModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
