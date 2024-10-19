import { Component  } from '@angular/core';

import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { FloatLabelModule } from 'primeng/floatlabel';
import { AuthDialogComponent } from '../auth-dialog/auth-dialog.component';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, InputTextModule, FloatLabelModule,FormsModule ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})

export class HomeComponent   {
  email: string = '';
  constructor(private router: Router) {

  }

  // create participation
  // Get all questions
  
  onDebuter() {

    this.router.navigate(['/questions']); // Naviguer vers la route /questions
  }
}

