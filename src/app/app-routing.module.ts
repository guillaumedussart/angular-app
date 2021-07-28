import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HistoComponent} from "./components/histo/histo.component";
import {CardComponent} from "./components/card/card.component";

const routes: Routes = [
  {path: '', component: CardComponent},
  {path: 'votes', component: HistoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
