import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getHeroDetails(id){
  return  this.http.get('https://superheroapi.com/api/2302129843386059/'+id)
  }
}
