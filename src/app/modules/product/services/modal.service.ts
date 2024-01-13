import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalSubjects: { [key: string]: Subject<boolean> } = {};
  private openModals: { [key: string]: boolean } = {};

  success$ = (modalName: string) => {
    if (!this.modalSubjects[modalName]) {
      this.modalSubjects[modalName] = new Subject<boolean>();
    }
    return this.modalSubjects[modalName].asObservable();
  };

  notifySuccess(modalName: string) {
    if (this.modalSubjects[modalName]) {
      this.modalSubjects[modalName].next(true);
    }
  }

  openModal(modalName: string) {
    this.openModals[modalName] = true;
  }

  closeModal(modalName: string) {
    this.openModals[modalName] = false;
  }

  isModalOpen(modalName: string) {
    return this.openModals[modalName] || false;
  }
}
