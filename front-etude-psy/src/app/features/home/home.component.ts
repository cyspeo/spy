import { Component  } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FloatLabelModule,FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent   {
  email: string = '';
  constructor(private router: Router, private questionServiceDas: FirestoreService) {

  }

  // create participation
  // Get all questions
  
  onDebuter() {
    this.questionServiceDas.questions$.subscribe(qs => {
      this.questionServiceDas.questions = qs;
      this.router.navigate(['/questions']); // Naviguer vers la route /questions
    });   
  }
}

