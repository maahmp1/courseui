import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlunosRoutingModule } from './alunos-routing.module';
import { ListaalunosComponent } from './listaalunos/listaalunos.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
  declarations: [
    ListaalunosComponent

  ],
  imports: [
    CommonModule,
    AlunosRoutingModule,
    MatTableModule
  ]
})
export class AlunosModule { }
