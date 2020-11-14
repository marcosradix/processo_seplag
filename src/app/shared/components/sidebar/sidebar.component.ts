import { Component, OnInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { JwtHelperService } from '@auth0/angular-jwt';
import { RoleNames } from 'src/app/enuns/role_names';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  role: any;

  constructor() { }



  expanded = new Array(3).fill(false);
@ViewChild(MatAccordion) accordion: MatAccordion;

  toggle(open: boolean, group: number) {
    if (open) {
      // Collapse everything then open the one we want
      this.expanded = new Array(3).fill(false);
      this.expanded[group] = open;
    } else {
      this.expanded[group] = open;
    }
  }
}
