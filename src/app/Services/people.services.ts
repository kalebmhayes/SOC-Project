import { Injectable } from "@angular/core";
import { AngularFirestore , AngularFirestoreCollection , AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import { Observable } from "rxjs";
import { Person } from "../shared/interfaces";

@Injectable()


export class PeopleService {

    people: Observable<Person[]>

    constructor(public afs: AngularFirestore){
        this.people = this.afs.collection('People').valueChanges()
    }

    getPeople(){
        //sets the items array in the people component
        return this.people
    }

    addItem(item){
        //adds items to firestore on valid form submission
        this.afs.collection('People').add(item)
    }
}