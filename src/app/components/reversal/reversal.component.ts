import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TheGreatService } from '../../services/thegreat.service';

@Component({
  selector: 'app-reversal',
  templateUrl: './reversal.component.html',
  styleUrls: ['./reversal.component.css'],
  providers: [TheGreatService]
})
export class ReversalComponent implements OnInit {

  constructor(private service: TheGreatService) { }

  ngOnInit() {
  }

clickMessage = '';
text = '';



    onClickMe() {

    this.text = (<HTMLInputElement>document.getElementById("txtin1")).value;
    this.clickMessage = "my hero!  you pressed the button";
    this.service.postGame();
//     service.postGame();
    }

//     getbobo(): void {
//     this.appService.postedGeneral();
//     }


};
