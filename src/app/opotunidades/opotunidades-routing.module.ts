import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OpotunidadesComponent } from './opotunidades.component';


const routes: Routes = [
  { path: "", component: OpotunidadesComponent },
];


@NgModule({
  declarations: [],

  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class OpotunidadesRoutingModule { }
