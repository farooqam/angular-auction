import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'tq-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  public year : number;

  constructor() { 
    this.year = new Date().getFullYear();
  }

  ngOnInit() {
  }

}
