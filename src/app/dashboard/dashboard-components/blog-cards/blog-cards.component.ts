import { Component, OnInit, TemplateRef } from '@angular/core';
import {blogcard,blogcards} from './blog-cards-data';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-blog-cards',
  templateUrl: './blog-cards.component.html'
})
export class BlogCardsComponent implements OnInit {

  blogcards:blogcard[];
  modalRef?: BsModalRef;
  NameProducto?: string;
  DesProducto?: string;
  Calorias?: number;
  Grasas?: number;
  Carbohidratos?: number;

  constructor(private modalService: BsModalService) {
    this.blogcards=blogcards;
  }
  
  openModal(template: TemplateRef<void>, producto: string, descripcion: string, calorias: number, grasas: number, carbohidratos: number) {
    this.NameProducto = producto;
    this.DesProducto = descripcion;
    this.Calorias = calorias;
    this.Grasas = grasas;
    this.Carbohidratos = carbohidratos;
    this.modalRef = this.modalService.show(template);
  }

  ngOnInit(): void {
  }
  
  // openModal(template: TemplateRef<void>, producto : string, descripcion: string) {
  //   this.NameProducto = producto;
  //   this.DesProducto = descripcion;
  //   this.modalRef = this.modalService.show(template);
  // }

}
