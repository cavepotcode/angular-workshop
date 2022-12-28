import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { constants } from '../constants';
import { ModalInfo } from '../models/modal-info.model';

@Component({
	selector: 'generic-modal',
	standalone: true,
	templateUrl: './confirmation-modal.component.html',
})
export class ConfirmationModal {
	@Input() info?: ModalInfo;
	@Output() action: EventEmitter<constants> = new EventEmitter()
	constructor(public activeModal: NgbActiveModal) {}

	close() {
		this.action.emit(constants.DISSMISS_MODAL);
		this.activeModal.close();
	}

	confirm() {
		this.info.action();
		this.action.emit(constants.CONFIRM_MODAL);
		this.activeModal.close();
	}
}

