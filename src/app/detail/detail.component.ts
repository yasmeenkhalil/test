import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {

  constructor() { }
  panelOpenState = false;
  ngOnInit(): void {
  }
  hidden = false;

  toggleBadgeVisibility() {
    this.hidden = !this.hidden;
  }
}
