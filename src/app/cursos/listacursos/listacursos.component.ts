import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss'],
})
export class ListacursosComponent implements OnInit {
  cursos: Curso[] = [];
  displayedColumns = ['nome', 'categoria'];

  constructor() {
    this.cursos = [];
  }

  ngOnInit(): void {}
}
