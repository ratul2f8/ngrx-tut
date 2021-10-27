import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { ListDisplayComponent } from './containers/list-display.component';
import { RouterModule, Routes } from '@angular/router';
import { LoadingBarComponent } from './loading-bar/loading-bar.component';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';

const routes: Routes = [
  {
    path: "", component: ListDisplayComponent
  }
]

@NgModule({
  declarations: [
    ListComponent,
    ListDisplayComponent,
    LoadingBarComponent
  ],
  imports: [
    CommonModule,
    NgbProgressbarModule,
    RouterModule.forChild(routes),
  ]
})
export class ProductsModule { }
