import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OpotunidadesComponent } from './opotunidades.component';
import { OpotunidadesRoutingModule } from './opotunidades-routing.module';



@NgModule({
  declarations: [
    OpotunidadesComponent
  ],
  imports: [
    CommonModule,
    OpotunidadesRoutingModule
  ]
})
export class OpotunidadesModule { }
