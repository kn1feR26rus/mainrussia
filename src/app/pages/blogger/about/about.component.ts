import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/shared/services/data.service';

interface IBlogger {
  id: number;
  name: string;
  img: string;
  youtube: string;
  vk: string;
  insta: string;
  info: string;
};

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {

  blogger: IBlogger;
  private _userData;
  public bloggers

  constructor(
    private userData: DataService,
    private route: ActivatedRoute,

  ) {this._userData = userData}

  ngOnInit() {
    const bloggerId = +this.route.snapshot.params.id;
    this.blogger = this.userData.getBlogger(bloggerId);
    this.bloggers = this._userData.getAll();
  }
}
