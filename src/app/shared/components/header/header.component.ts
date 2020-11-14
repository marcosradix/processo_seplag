import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Location } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

@Output() titleChange: EventEmitter<String> = new EventEmitter<String>();
  usuarioLogado: String;
  constructor(private route:Router, private location: Location) {

  }



  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

   titleEmit(){
    this.titleChange.emit();
  }

  async sair(){
    console.log("saindo...");
    await this.route.navigate(['/login']);
  }
voltar(){
  this.location.back();
}
}
