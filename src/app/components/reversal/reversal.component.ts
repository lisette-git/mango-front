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


text = '';
result = '';


    onClickMe() {

    this.text = (<HTMLInputElement>document.getElementById("txtin1")).value;

      this.service.reversalString(this.text)
      .subscribe((response: string) =>  this.result = response);

      
    }
 
      


};
