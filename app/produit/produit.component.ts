import { Component } from '@angular/core';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent {
  products = [
    { name: 'Smartphone Samsung Galaxy Z Flip 4 ', photo: 'assets/images/e.png', price: 4189.000},
    { name: 'iPhone 15 Pro Max', photo: 'assets/images/3.png', price: 3890 },
    { name: 'Galaxy A04', photo: 'assets/images/4.png', price: 489 },
    { name: 'Galaxy A54', photo: 'assets/images/5.png', price: 1899 },
    { name: 'Samsung Galaxy S23 Ultra', photo: 'assets/images/6.png', price: 5389},
    { name: 'Galaxy Z Fold4', photo: 'assets/images/7.png', price: 7289 },
    { name: 'Galaxy A73 (128 G)', photo: 'assets/images/8.png', price: 2299 },
    { name: 'Galaxy A33', photo: 'assets/images/9.png', price: 1599 },
    { name: 'Galaxy A73 (256 G)', photo: 'assets/images/10.png', price: 2599 },
    { name: 'Galaxy A34', photo: 'assets/images/11.png', price: 1589 },
  ];

  redirigerVersPanier(): void {
    console.log('Redirection vers le panier...');
  }
}
