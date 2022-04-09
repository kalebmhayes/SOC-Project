import { ImplicitReceiver } from "@angular/compiler";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'filter-textbox',
    template: `Filter: <input matInput type="text"  [(ngModel)]="searchword" (input)='searchThis()' />`
})

export class FilterTextboxComponent implements OnInit {
    searchword: string
    // private _filter: string;
    // @Input() get filter(){
    //     return this._filter
    // }

    // set filter(val: string){
    //     this._filter = val
    //     this.changed.emit(this.filter)
    // }

    // @Output() input: EventEmitter<string> = new EventEmitter<string>()

    @Output() searchCriteria = new EventEmitter<String>()

    searchThis(){
        this.searchCriteria.emit(this.searchword)
    }

    constructor(){}

    ngOnInit(){
        
    }
}