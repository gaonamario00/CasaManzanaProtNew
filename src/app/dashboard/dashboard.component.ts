import { Component, AfterViewInit, TemplateRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements AfterViewInit {
  subtitle: string;
  modalRef?: BsModalRef;
  NameProducto?:string;
  DesProducto?:string;

  constructor(private modalService: BsModalService) {
    this.subtitle = 'This is some text within a card block.';
  }
  
  openModal(template: TemplateRef<void>, producto : string, descripcion: string) {
    this.NameProducto = producto;
    this.DesProducto = descripcion;
    this.modalRef = this.modalService.show(template);
  }

  ngAfterViewInit() { }
}
