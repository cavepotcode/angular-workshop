import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    LoginComponent
  ]
})
export class UserModule { }
