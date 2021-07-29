import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HistoComponent} from "./components/histo/histo.component";
import {CardComponent} from "./components/card/card.component";
import {ListAvisComponent} from "./components/list-avis/list-avis.component";

const routes: Routes = [
  {path: '', component: CardComponent},
  {path: 'votes', component: HistoComponent},
  {path: 'list-votes', component: ListAvisComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
