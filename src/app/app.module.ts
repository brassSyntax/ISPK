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

@NgModule({
  declarations: [
    AppComponent,
    StudyProgramDisplayComponent,
    ReviewDisplayComponent,
    ReviewInputFormComponent,
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
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
