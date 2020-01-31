import { Component, OnInit, HostBinding } from '@angular/core';
import { FormControl, FormGroup, FormControlName, Validators } from '@angular/forms'

import { TareasService } from "../../services/tareas.service";

@Component({
  selector: 'app-tarea-form',
  templateUrl: './tarea-form.component.html',
  styleUrls: ['./tarea-form.component.scss']
})
export class TareaFormComponent implements OnInit {

  createFormGroup() {
    return new FormGroup({
      nombre: new FormControl('', [Validators.required]),
      cargo: new FormControl('', [Validators.required]),
      descripcion: new FormControl('', [Validators.required, Validators.minLength(10), Validators.maxLength(100)]),
      imagen: new FormControl('', [Validators.required, Validators.minLength(5)]),
    })
  }

  tareaForm: FormGroup;

  @HostBinding('class') classes= 'row';

  constructor(private tareasService: TareasService) { 
    this.tareaForm = this.createFormGroup();
  }

  ngOnInit() {
  }

  onResetForm() {
    this.tareaForm.reset();
  }

  saveNewTarea() {
    if (this.tareaForm.valid) {
      this.tareasService.saveTarea(this.tareaForm.value).subscribe(
        res => {
          console.log(res);
          this.onResetForm();
        },
        err => console.error(err)
      )
    } else {
      console.log('No valid');
    }
  }

}
