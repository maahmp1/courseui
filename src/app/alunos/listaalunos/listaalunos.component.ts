import { Component, OnInit } from '@angular/core';
import { Aluno } from 'src/app/core/model';

@Component({
  selector: 'app-listaalunos',
  templateUrl: './listaalunos.component.html',
  styleUrls: ['./listaalunos.component.scss'],
})
export class ListaalunosComponent implements OnInit {
  alunos: Aluno[] = [
    {id:1, nome:'ana'},
    {id:2, nome:'pedro'},
    {id:3, nome:'cola'},
    {id:4, nome:'vitao'},
    {id:5, nome:'barbara'},
    {id:6, nome:'carol'},
    {id:7, nome:'ana laura'},


  ];

  constructor() {

  }
  displayedColumns = ['id', 'nome']
  ngOnInit(): void {}
}
