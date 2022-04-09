import { Component, OnInit, Input  } from "@angular/core";
import { Injectable } from "@angular/core";
import { Person } from "../shared/interfaces";
import { DataService } from "../core/data.services";
import {AngularFireDatabase} from '@angular/fire/compat/database'
import { PeopleService } from "../Services/people.services";


@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls:['./people.component.css']
})



export class People {
    items: Person[]
    filteredCustomers: any[]
    db : AngularFireDatabase
    
    // constructor( db: AngularFireDatabase){
    //    db.list('/People').valueChanges().subscribe(items =>{
    //        this.items = items
         
    //        })
    //    }
    
    constructor(private peopleService: PeopleService){ }

    showInfoBox(item){
        item.hidden = false
        console.log(item.hidden)
    }

    hideInfoBox(item){
        item.hidden = true
    }

    searchThis(data) {
      if (data) {
        this.filteredCustomers = this.items.map((item) =>{
            return({
                ...item,
                hidden: true
            })
        }).filter( (ele) => {
        return ele.name.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               ele.address.toLowerCase().indexOf(data.toLowerCase()) > -1 || 
               ele.email.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               ele.experience.toLowerCase().indexOf(data.toLowerCase()) > -1 ||
               ele.employmentHistory.toLowerCase().indexOf(data.toLowerCase()) > -1
        })
      } else {
        this.filteredCustomers = this.items.map((item) =>{
            return({
                ...item,
                hidden: true
            })
        })
      }
    }

    

    ngOnInit(){
        this.peopleService.getPeople().subscribe(person =>{
            this.items = person
            this.filteredCustomers = this.items.map((item) =>{
                return({
                    ...item,
                    hidden: true
                })
            })
        })
    }
  }

