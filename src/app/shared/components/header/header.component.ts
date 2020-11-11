import { Router } from '@angular/router';
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Output() toggleSidebarForMe: EventEmitter<any> = new EventEmitter();

@Output() titleChange: EventEmitter<String> = new EventEmitter<String>();
  usuarioLogado: String;
  constructor(private route:Router) {

  }

  ngOnInit(): void {
const helper = new JwtHelperService();
const token = localStorage.getItem('ng2_token');
const decodedToken = helper.decodeToken(token);
this.usuarioLogado = decodedToken['sub'];
  }

  toggleSidebar(){
    this.toggleSidebarForMe.emit();
  }

   titleEmit(){
    this.titleChange.emit();
  }

  async sair(){
    console.log("saindo...");
    localStorage.removeItem('ng2_token');
    await this.route.navigate(['/login']);
  }

}
