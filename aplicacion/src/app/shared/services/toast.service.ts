import { Injectable } from '@angular/core';
import { ToastInfo } from '../models/toast-info.model';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor() { }

  toasts: ToastInfo[] = [];

  showSuccess(header: string, body: string) {
    this.toasts.push(new ToastInfo(header,body,'bg-success text-light'));
  }
  showInfo(header: string, body: string) {
    this.toasts.push(new ToastInfo(header,body,''));
  }
  showError(header: string, body: string) {
    this.toasts.push(new ToastInfo(header,body,'bg-danger text-light'));
  }
  remove(toast: ToastInfo) {
    this.toasts = this.toasts.filter(t => t != toast);
  }
}
