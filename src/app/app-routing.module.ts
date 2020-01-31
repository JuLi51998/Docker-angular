import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { TareaListComponent } from "./components/tarea-list/tarea-list.component";
import { TareaFormComponent } from "./components/tarea-form/tarea-form.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: '/tareas',
    pathMatch: 'full'
  },
  {
    path: 'tareas',
    component: TareaListComponent
  },
  {
    path: 'tareas/add',
    component: TareaFormComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
