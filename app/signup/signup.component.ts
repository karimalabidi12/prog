import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  userData = { username: '', email: '', password: '' };

  onSubmit() {
    // Logique de gestion de l'inscription ici
    console.log('User Data:', this.userData);
  }

}
