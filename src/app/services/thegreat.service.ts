import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaderResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TheGreatService {
constructor(private http: HttpClient){
  
}

reversalString(text): Observable<string> {
return this.http.post("http://localhost:8081/game/reversal/",text,{responseType: 'text'});
};



primecheck(nummie): Observable<Object> {
  // let headers = new HttpHeaders().append('in', nummie);
  // headers.append('responseType','text');
  // const headers= new HttpHeaders()
  // .set('in',nummie.toString());
  return this.http.post("http://localhost:8081/game/prime-number-check/",'',{headers: new HttpHeaders({ 'in2': nummie , 'responseType' : 'text' })});
  };





}
