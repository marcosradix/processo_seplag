import { Component, OnInit } from '@angular/core';
import { MediaObserver } from '@angular/flex-layout';

@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.scss']
})
export class DefaultComponent implements OnInit {
sidebarOpen: boolean = true;
 constructor(public media: MediaObserver) {}


  showSidebar(event){
    this.sidebarOpen = !this.sidebarOpen;
  }
  ngOnInit(): void {
      if(this.media.isActive('xs')){
      this.sidebarOpen = false;


    }
  }

}
