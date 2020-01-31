import { Component, OnInit, HostBinding } from '@angular/core';
import { TareasService } from "../../services/tareas.service";

@Component({
  selector: 'app-tarea-list',
  templateUrl: './tarea-list.component.html',
  styleUrls: ['./tarea-list.component.scss']
})
export class TareaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';

  tareas: any = [];

  constructor(private tareasService: TareasService) { }

  ngOnInit() {
    this.tareasService.getTareas().subscribe(
      res => {
        this.tareas = res; 
      },
      err => console.log(err)
    )
  }

}
