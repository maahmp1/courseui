import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss']
})
export class ListacursosComponent implements OnInit {
  cursos: Curso[] = []
  displayedColumns = ['id', 'nomecurso']

  constructor() { }

  ngOnInit(): void {
  }

}
