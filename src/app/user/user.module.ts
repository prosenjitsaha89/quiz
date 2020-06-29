import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatRippleModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';/* Added by Estilo 29/06/2020 */
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';/* Added by Estilo 29/06/2020 */
import { FormsModule, ReactiveFormsModule } from '@angular/forms';/* Added by Estilo 29/06/2020 */

import { UserRoutingModule } from './user-routing.module';
import { UserListComponent } from './components/user-list/user-list.component';
import { UserFormComponent } from './components/user-form/user-form.component';


@NgModule({
  declarations: [
    UserListComponent,
    UserFormComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    MatRippleModule,
    MatRadioModule,
    MatProgressSpinnerModule
  ]
})
export class UserModule { }
