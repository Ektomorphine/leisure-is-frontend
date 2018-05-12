import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatToolbarModule } from '@angular/material/toolbar';

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    MatToolbarModule,
  ],
})
export class MaterialModule { }
