import { Component } from '@angular/core';
import { DataService } from 'src/app/shared/services/data.service';

@Component({
  selector: 'app-blogger',
  templateUrl: './blogger.component.html',
  styleUrls: ['./blogger.component.scss']
})

export class BloggerComponent {

  public bloggers;
  private _userData;

  constructor(userData: DataService) {
    this._userData = userData;
  }

  ngOnInit() {
    this.bloggers = this._userData.getAll();
  }
}
