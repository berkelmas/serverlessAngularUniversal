import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatFormFieldModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatInputModule,
  MatCardModule} from '@angular/material';

@NgModule({
  imports: [MatButtonModule, MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatCardModule],
  exports: [MatButtonModule , MatDatepickerModule, MatFormFieldModule, MatNativeDateModule, MatInputModule, MatCardModule],
})
export class AngularMaterialComponentsModule {}
