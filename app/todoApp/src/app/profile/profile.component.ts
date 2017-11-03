import { Component } from "@angular/core";

@Component({
    selector : 'profile-component',
    templateUrl:'./profile.component.html'
})

export class ProfileComponent{
    profiles : any[] = [
        {first_name:'Fernando', last_name: 'Hernandez'},
        {first_name:'Pedro', last_name: 'Lopez'}
    ]
}