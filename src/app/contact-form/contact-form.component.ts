import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';


@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
 

  contactform = this.fb.group({
    fname: ['', Validators.required],
    lname: ['', Validators.required],
    phone: ['', Validators.required],
    email: ['',[Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]],
    message: ['',Validators.required]
  });
 
  
  constructor(private fb: FormBuilder) { 

  }
    
  ngOnInit() {
  
  }
  
  
  onSubmit() {
    // TODO: Use EventEmitter with form value
    console.log(this.contactform.value, this.contactform.status);
    alert("Your request has been submitted successfully");
  } 
  

}
