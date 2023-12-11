import { Component } from '@angular/core';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent {
  user = { username: '', password: '' };

  onSubmit() {
    // Ajoutez ici la logique de connexion
    console.log('Formulaire soumis', this.user);
  }
}
