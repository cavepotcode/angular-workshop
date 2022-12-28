import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { constants } from 'src/app/shared/constants';
import { ConfirmationModal } from 'src/app/shared/modals/confirmation-modal.component';
import { ModalInfo } from 'src/app/shared/models/modal-info.model';
import { ToastService } from 'src/app/shared/services/toast.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent {

  constructor(private modalService: NgbModal, private toastService:ToastService) {}

	open() {
		const modalRef = this.modalService.open(ConfirmationModal);
    const info = new ModalInfo('este es un titulo', 'este es el texto', 'vas a confirmar', 'vas a cancelar')
    info.action = function() {
      console.log('hola estoy adentro')
    };
		modalRef.componentInstance.info = info;
    modalRef.componentInstance.action.subscribe((res: constants)=> {
      if (constants.CONFIRM_MODAL == res) {
        console.log('confirmo')
      } else if (constants.DISSMISS_MODAL == res) {
        console.log('dissmis');
      } 
    })
 
    
	}
  showSuccess(){
    this.toastService.showSuccess('header','body');
  }

  showInfo(){
    this.toastService.showInfo('header','body');
  }
  showDanger(){
    this.toastService.showError('header','body');
  }


}
