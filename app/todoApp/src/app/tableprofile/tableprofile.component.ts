import { Component } from "@angular/core";

@Component({
    selector : 'tableprofile-component',
    templateUrl:'./tableprofile.component.html'
})

export class TableProfileComponent{
    profiles : any[] = [
        {first_name:'Fernando', last_name: 'Hernandez'},
        {first_name:'Pedro', last_name: 'Lopez'}
    ]
}