import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-reversal',
  templateUrl: './reversal.component.html',
  styleUrls: ['./reversal.component.css']
})
export class ReversalComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

clickMessage = '';
text = '';



    onClickMe() {

    this.text = (<HTMLInputElement>document.getElementById("txtin1")).value;
    this.clickMessage = "my hero!  you pressed the button"

    }


};
