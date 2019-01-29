import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @ViewChild('form') form: NgForm;
  defaultQuestion = 'pet';
  answer = '';

  genders = ['male', 'female'];

  user = {
    username: '',
    email: '',
    secret: '',
    answer: '',
    gender: ''
  };

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.form.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: '',
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.form.form.patchValue({
      userData: {
        username: suggestedName
      }
    });
  }

  // onSubmit(form: NgForm) {
  //   console.log(form);
  // }

  onSubmit() {
    this.submitted = true;
    console.log(this.form.value);
    this.user.username = this.form.value.userData.username;
    this.user.email = this.form.value.userData.email;
    this.user.gender = this.form.value.gender;
    this.user.secret = this.form.value.secret;
    this.user.answer = this.form.value.answer;

    this.form.reset();
  }

}
