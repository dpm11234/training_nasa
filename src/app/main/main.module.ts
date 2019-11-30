import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main.component';
import { NgbDatepickerModule } from '@ng-bootstrap/ng-bootstrap';
import { ImageComponent } from './image/image.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [MainComponent, ImageComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    NgbDatepickerModule,
    FormsModule
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }
