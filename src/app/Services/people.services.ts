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
        return this.people
    }

    addItem(item){
        // this.peopleCollection.add(item)
        this.afs.collection('People').add(item)
    }
}