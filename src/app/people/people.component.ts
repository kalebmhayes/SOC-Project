import { Component, OnInit, Input  } from "@angular/core";
import { Person } from "../shared/interfaces";
import { DataService } from "../core/data.services";
import {AngularFireDatabase} from '@angular/fire/compat/database'

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls:['./people.component.css']
})

export class People {
    items: any[]
    filteredCustomers: any[]
    db : AngularFireDatabase
    
    constructor( db: AngularFireDatabase){
       db.list('/People').valueChanges().subscribe(items =>{
           this.items = items
           this.filteredCustomers = this.items.map((item) =>{
               return({
                   ...item,
                   hidden: true
               })
           })
           })
       }
    
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
  }

