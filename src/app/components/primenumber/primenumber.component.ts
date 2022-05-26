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

  numb = '';
  primeresult = '';


    clickPrimeCheck() {

    this.numb = (<HTMLInputElement>document.getElementById("numin")).value;

      const soso = this.service.primecheck(this.numb)
      .subscribe((response: any) =>  this.primeresult = response.toString());
      

      
    }

}
