import { Component, OnInit } from '@angular/core';
import { DataService} from '../data.service';

@Component({
  selector: 'app-marvel',
  templateUrl: './marvel.component.html',
  styleUrls: ['./marvel.component.scss']
})
export class MarvelComponent implements OnInit {
  users:Object;
  tiles = [];
   usersList =[{
    617:'Spider-Carnage',
    618:'Spider-Girl',
    619:'Spider-Girl',
    620:'Spider-Man',
    621:'Spider-Man',
    622:'Spider-Man'
  }];
  id:number;
  constructor(private data:DataService) { }

  ngOnInit() {
 /*    this.data.getUsers().subscribe(
      data =>{
        this.users = data;
        console.log(this.users);
        
      }
    ); */
 /*    this.data.getHeroDetails(this.id).subscribe(
      data =>{
        this.users = data;
        console.log(data);
        
      }
    ); */
    this.tiles = [{
      name :'Spider Man',
      imageSrc :'../../assets/spider.jpg'      
    },{
      name :'Iron Man',
      imageSrc :'../../assets/stark.jpg'      
    },{
      name :'Thor',
      imageSrc :'../../assets/thor.jpg'      
    },{
      name :'Captain America',
      imageSrc :'../../assets/capitan.jpg'      
    },{
      name :'Hulk',
      imageSrc :'../../assets/hulk.jpg'      
    }];
  }

}
