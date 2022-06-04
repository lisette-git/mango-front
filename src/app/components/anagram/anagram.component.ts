import { Component, OnInit } from '@angular/core';
import { TheGreatService } from 'src/app/services/thegreat.service';

@Component({
  selector: 'app-anagram',
  templateUrl: './anagram.component.html',
  styleUrls: ['./anagram.component.css'],
  providers: [TheGreatService]
})
export class AnagramComponent implements OnInit {

  constructor(private service: TheGreatService) { }

  ngOnInit() {
  }

  text1 = '';
  text2 = '';
result = '';

  onClickMe() {

    this.text1 = (<HTMLInputElement>document.getElementById("txtin1")).value;
    this.text2 = (<HTMLInputElement>document.getElementById("txtin2")).value;

    if(this.text1 && this.text2){
      this.service.anagramcheck(this.text1,this.text2)
      .subscribe((response) =>  this.result = response?"true":"false");
    } else {
      this.result = '';
    }

      
    }

}
