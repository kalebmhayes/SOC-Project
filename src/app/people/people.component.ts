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
    items: Person[] //original array recieved from firestore
    filteredPeople: any[] //array that is maintained and updated in the application
    db : AngularFireDatabase

    constructor(private peopleService: PeopleService){ }

    showInfoBox(item){
        //shows popup dialogue box
        item.hidden = false
    }

    hideInfoBox(item){
        //hides popup dialogue box
        item.hidden = true
    }

    searchThis(data) {
      if (data) {
        this.filteredPeople = this.items.map((item) =>{
            return({
                ...item,
                hidden: true
            })
        }).filter( (ele) => {
            //filters the items array with a filter
        return ele.name.toLowerCase().indexOf(data.toLowerCase()) > -1 || //searches by name
               ele.address.toLowerCase().indexOf(data.toLowerCase()) > -1 || //searches by address
               ele.email.toLowerCase().indexOf(data.toLowerCase()) > -1 || //searches by email
               ele.experience.toLowerCase().indexOf(data.toLowerCase()) > -1 || ///searches by experience keywords
               ele.employmentHistory.toLowerCase().indexOf(data.toLowerCase()) > -1 //searches by employment history keywords
        })
      } else {
          //if filter text box is empty, it returns the orignal filterd people array
        this.filteredPeople = this.items.map((item) =>{
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
            this.filteredPeople = this.items.map((item) =>{
                return({
                    ...item,
                    hidden: true
                     //maps all properties of items array to each object in the filtered people array, 
                //and adds a hidden property to set the style of the popup box
                })
            })
        })
    }
  }

