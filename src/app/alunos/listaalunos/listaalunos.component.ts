import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/core/model';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss'],
})
export class ListaalunosComponent implements OnInit {
  alunos: Aluno[] = [];

  constructor() {
    this.alunos = [];
  }
  displayedColumns = ['id', 'nome']
  ngOnInit(): void {}
}
