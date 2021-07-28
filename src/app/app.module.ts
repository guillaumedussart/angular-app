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
import { HistoComponent } from './components/histo/histo.component';
import { AvisComponent } from './components/avis/avis.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NgbdModalBasic,
    OpinionComponent,
    CardComponent,
    HistoComponent,
    AvisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {}
