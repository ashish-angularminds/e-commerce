import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './dummy/dummy.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dummy',
    pathMatch: 'full'
  },
  {
    path: 'dummy',
    component: DummyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
