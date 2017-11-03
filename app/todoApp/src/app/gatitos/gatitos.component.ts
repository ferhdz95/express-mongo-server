import { Component, OnInit } from '@angular/core';
import {ICat} from './cat';
import {CatService} from './gatitos.service';

@Component({
  selector: 'app-gatitos',
  templateUrl: './gatitos.component.html',
  styleUrls: ['./gatitos.component.css']
})
export class GatitosComponent implements OnInit {
  photos: any[];
  cats : ICat[] = [];
  errorMessage: string;
  newcat: ICat[] = [{_id: '', name: '', race: '', description:'', img: ''}];
  currentCat: any;
  constructor(private _catService: CatService) {

   }

  ngOnInit() {
    this._catService.getCats().subscribe(
      photos => this.photos = photos,
      error => this.errorMessage = <any>error, () => {for(var i in this.photos){
        this.cats.push({_id: this.photos[i]._id,name:this.photos[i].name, race: this.photos[i].race, description: this.photos[i].description, img : this.photos[i].img});
      }});
      //this.cats.push({_id: '4',name:'Sol', race: 'alguna', description: 'Gato bien feo :v', img : 'https://www.anipedia.net/imagenes/donde-viven-los-gatos.jpg'});
      //var photos =JSON.parse(JSON.stringify(this.photos));
      
      
  }
  
  
  /*cats : ICat[] = [
    {_id: '1',name:'Sol', race: 'alguna', description: 'Gato bien feo :v', img : 'https://www.anipedia.net/imagenes/donde-viven-los-gatos.jpg'},
    {_id: '3',name:'Luna', race: 'alguna', description: 'Gato mas o menos feo', img: 'https://www.anipedia.net/imagenes/gatos-ragdoll.jpg'},
    {_id: '2',name:'Luna Copy', race: 'alguna', description: 'Gato mas o menos feo', img: 'https://www.anipedia.net/imagenes/gatos-ragdoll.jpg'}
  ]*/

  removeCat(cat):void{
    this.cats = this.cats.filter( (x) => {
      return x.name != cat.name
    });
    /*for (var i = 0; i < this.cats.length; i++){
      if(this.cats[i].name == cat.name){
        this.cats.splice(i,1);
      }
    }*/
  }

  addCat():void{
    this._catService.addCat(this.newcat).subscribe(
      data =>{
        let cat = JSON.parse(JSON.stringify(data));
        this.cats.push({_id: cat._id,name:cat.name, race: cat.race, description: cat.description, img : cat.img});  
      },
      error => this.errorMessage = <any>error, 
      () => this.newcat = [{
        _id: '', name: '', race: '', description:'', img: ''
      }]);
    
  }

  deleteCat(gato : ICat):void{
    this._catService.deleteCat(gato).subscribe(
      data =>{
        //let cat = JSON.parse(JSON.stringify(data));
        this.cats = this.cats.filter( (x) => {
          return x._id != gato._id
        }); 
      },
      error => this.errorMessage = <any>error);
  }

  updateCat(gato : ICat):void{
    this._catService.updateCat(gato).subscribe(error => this.errorMessage = <any>error);
    
  }

  setCurrentCat(cat):void{
    this.currentCat = cat;
  }

  

}
