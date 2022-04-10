import { Component , OnInit} from "@angular/core";
import { FormControl, Validators } from "@angular/forms";
import { FormGroup } from "@angular/forms";
import { PeopleService } from "../Services/people.services";

@Component({
    selector: 'app-form',
    templateUrl: './form.component.html',
    styleUrls: ['./form.component.css']
})

export class AppForm implements OnInit{

    constructor(private personService: PeopleService){}
    //creates new form group 
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
            //if all fields are filled out, data will submit to the firestore database
            
            this.personService.addItem(this.addUserForm.value)

            //reset all of the form field back to empty strings
            this.addUserForm = new FormGroup({
                name : new FormControl('' , [Validators.required]),
                address : new FormControl('' , [Validators.required]),
                phoneNumber :new FormControl('' , [Validators.required]),
                email: new FormControl('' , [Validators.required]),
                age : new FormControl('' , [Validators.required]),
                experience : new FormControl('' , [Validators.required]),
                employmentHistory: new FormControl('' , [Validators.required])
            })
            } else{ //if all fields are not filled in do this
                alert('please fill in all fields')
                }
        }

    ngOnInit() {
        this.title = 'Form'
    }
}