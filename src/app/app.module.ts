import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from "./components/header/header.component";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdModalBasic} from "./components/modal/modal.component";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {OpinionComponent} from './components/opinion/opinion.component';
import {CardComponent} from './components/card/card.component';
import {HistoComponent} from './components/histo/histo.component';
import {AvisComponent} from './components/avis/avis.component';
import {ListAvisComponent} from './components/list-avis/list-avis.component';
import {Ng2SearchPipeModule} from "ng2-search-filter";
import {MatFormFieldModule} from "@angular/material/form-field";
import {SearchBarComponent} from './components/search-bar/search-bar.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UserDetailComponent } from './components/user-detail/user-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NgbdModalBasic,
    OpinionComponent,
    CardComponent,
    HistoComponent,
    AvisComponent,
    ListAvisComponent,
    SearchBarComponent,
    PageNotFoundComponent,
    UserDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    MatFormFieldModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {
}
