import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModal, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ToastComponent } from './components/toast/toast.component';
import { ToastService } from './services/toast.service';



@NgModule({
  declarations: [
    ToastComponent,
  ],
  imports: [
    CommonModule,
    NgbModule
  ],
  exports: [
    ToastComponent
  ]
})
export class SharedModule { }
