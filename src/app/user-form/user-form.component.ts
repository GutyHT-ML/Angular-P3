import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl('')
  })
  constructor(private router: Router) { }
  onSubmit(){
    let name = this.profileForm.get('firstName').value
    console.log(name)
    this.router.navigate(['welcome-page', this.profileForm.get('firstName').value])
  }
  ngOnInit(): void {
  }

}
