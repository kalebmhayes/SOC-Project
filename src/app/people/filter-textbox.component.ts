import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'filter-textbox',
    template: `<div>Filter: <input matInput type="text"  [(ngModel)]="searchword" (input)='searchThis()' />`,
    styleUrls: ['./filter-textbox.component.css']
})

export class FilterTextboxComponent implements OnInit {
    searchword: string
    @Output() searchCriteria = new EventEmitter<String>()

    searchThis(){
        this.searchCriteria.emit(this.searchword)
    }

    constructor(){}

    ngOnInit(){
        
    }
}