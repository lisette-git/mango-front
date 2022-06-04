import { Component, OnInit } from '@angular/core';
import { TheGreatService } from '../../services/thegreat.service';

@Component({
  selector: 'app-primenumber',
  templateUrl: './primenumber.component.html',
  styleUrls: ['./primenumber.component.css'],
  providers: [TheGreatService]
})
export class PrimenumberComponent implements OnInit {

  constructor(private service: TheGreatService) { }

  ngOnInit() {
  }

  input;
  numb: number;
  primeresult = '';


    clickPrimeCheck() {

    this.input = (<HTMLInputElement>document.getElementById("numin")).value;

    
  if(Number(this.input)){
      this.numb = this.input

      this.service.primecheck(this.numb)
      .subscribe((response: any) =>  this.primeresult = response.toString());
    
  } else {
    this.primeresult = '';
  }

      
    }

}
