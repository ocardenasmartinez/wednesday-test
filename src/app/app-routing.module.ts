import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewchildTestComponent } from './viewchild-test/viewchild-test.component';

const routes: Routes = [
	{ path: 'user', component: ViewchildTestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
