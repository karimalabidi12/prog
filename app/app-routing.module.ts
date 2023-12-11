import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProduitComponent } from './produit/produit.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { SignupComponent } from './signup/signup.component';
import { PanierComponent } from './panier/panier.component'; 
import { HeaderComponent } from './header/header.component'; 

const routes: Routes = [

  { path: 'header', component: HeaderComponent },
  { path: 'produit', component: ProduitComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'connexion', component: ConnexionComponent },
   { path: 'signup', component: SignupComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
