import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  isToggled: boolean = true;
  constructor() { }
  toggleMenu(){
    this.isToggled = !this.isToggled
  }
  ngOnInit(): void {
  }

}
