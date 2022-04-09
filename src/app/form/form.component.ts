import { Component , OnInit} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { AngularFireDatabase } from "@angular/fire/compat/database";
import { FormGroup } from "@angular/forms";
import {Person} from '../shared/interfaces'



@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})



export class AppForm implements OnInit{

    constructor(private db: AngularFireDatabase){}


    addUserForm = new FormGroup({
        name : new FormControl('' , [Validators.required]),
        address : new FormControl('' , [Validators.required]),
        phoneNumber :new FormControl('' , [Validators.required]),
        email: new FormControl('' , [Validators.required]),
        age : new FormControl('' , [Validators.required]),
        experience : new FormControl('' , [Validators.required]),
        employmentHistory: new FormControl('' , [Validators.required])
    })

    title: string;

    submitForm(){
        
        if(this.addUserForm.valid){

            this.db.database.ref('/People').push(this.addUserForm.value)
            console.log(this.addUserForm)
            this.addUserForm = new FormGroup({
                name : new FormControl('' , [Validators.required]),
                address : new FormControl('' , [Validators.required]),
                phoneNumber :new FormControl('' , [Validators.required]),
                email: new FormControl('' , [Validators.required]),
                age : new FormControl('' , [Validators.required]),
                experience : new FormControl('' , [Validators.required]),
                employmentHistory: new FormControl('' , [Validators.required])
            })
            
            console.log('data submited')
            
            
        } else{
            alert('please fill in all fields')
            console.log('form invalid')
        }
    }

  
    ngOnInit() {
        this.title = 'Form'
    }
}