import {Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'cat-description',
    templateUrl: './description.component.html'
})

export class DescriptionComponent implements OnChanges {
    @Input() cat: {name:'', description: ''}
    ngOnChanges(){
        //Called after the constructor, intitializing input propoerties
        //Add 'implements OnInit' to the class.
        console.log(this.cat);
    }
}