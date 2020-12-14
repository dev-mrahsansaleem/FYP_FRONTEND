import { NgModule } from '@angular/core';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';

const material = [
  MatButtonModule,
  MatToolbarModule,
  MatDialogModule,
  MatTabsModule,
  MatIconModule,
  MatFormFieldModule,
  FormsModule,
  MatInputModule,
  MatCardModule,
  MatTabsModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCheckboxModule,
  MatIconModule,
];

@NgModule({
  imports: [material],
  exports: [material],
})
export class MaterialModule {}
