import { Component } from '@angular/core';
//import { AuthService } from '../../services/auth-service';  // Le service d'authentification Firebase
import { MessageService } from 'primeng/api';  // Pour afficher les messages de succès ou d'erreur
import { DialogModule } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports:[DialogModule, InputTextModule, FormsModule ],
templateUrl: './auth-dialog.component.html',
  styleUrls: ['./auth-dialog.component.scss']
})
export class AuthDialogComponent {
  email: string = '';
  password: string = '';
  display: boolean = false;

  constructor(/*private authService: AuthService private messageService: MessageService*/) {}

  // Ouvre la boîte de dialogue
  showDialog() {
    this.display = true;
  }

  // Fonction pour se connecter via Firebase
  // login() {
  //   this.authService.login(this.email, this.password).then(() => {
  //     this.display = false;  // Ferme la boîte de dialogue si connexion réussie
  //     this.messageService.add({ severity: 'success', summary: 'Connexion réussie', detail: 'Vous êtes connecté!' });
  //   }).catch((error) => {
  //     this.messageService.add({ severity: 'error', summary: 'Erreur de connexion', detail: error.message });
  //   });
  // }
}
