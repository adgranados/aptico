import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OportunidadesComponent } from './oportunidades.component';
import { OportunidadesRoutingModule } from './oportunidades-routing.module';



@NgModule({
  declarations: [
    OportunidadesComponent
  ],
  imports: [
    CommonModule,
    OportunidadesRoutingModule
  ]
})
export class OportunidadesModule { }
