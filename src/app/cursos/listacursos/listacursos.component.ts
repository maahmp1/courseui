import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/core/model';

@Component({
  selector: 'app-listacursos',
  templateUrl: './listacursos.component.html',
  styleUrls: ['./listacursos.component.scss'],
})
export class ListacursosComponent implements OnInit {
  cursos: Curso[] = [
    {nome: 'ana', categoria:'edificações'},
    {nome: 'pedro', categoria:'química'},
    {nome: 'cola', categoria:'edificações'},
    {nome: 'vitão', categoria:'português'},
    {nome: 'bárbara', categoria:'arte'},
    {nome: 'carol', categoria:'química'},
    {nome: 'ana laura', categoria:'desenvolvimento de sistemas'}
  ];
  displayedColumns = ['nome', 'categoria'];

  constructor() {
  }

  ngOnInit(): void {}
}
