import { StudyProgramDisplayComponent} from "./study-program-display/study-program-display.component";
import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {ReviewInputFormComponent} from "./review-input-form/review-input-form.component";

const routes: Routes = [
  { path: 'app-root', component: AppComponent },
  { path: 'app-study-program-display', component: StudyProgramDisplayComponent },
  { path: 'app-review-input-form', component: ReviewInputFormComponent },
  { path: '', redirectTo: 'app-root', pathMatch: 'full' },
  { path: '**', component: AppComponent} // TODO: add 404 component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
