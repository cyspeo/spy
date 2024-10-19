import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from '../../components/timer/timer.component';
import { Router } from '@angular/router';
import { FirestoreService } from 'src/app/services/firestore.service';

@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [TimerComponent, FormsModule, CommonModule],
templateUrl: './questions.component.html',
  styleUrl: './questions.component.scss'
})
export class QuestionsComponent {
  options: string[] = ['Option 1', 'Option 2', 'Option 3'];
  selectedOptions: { [key: string]: boolean } = {};
  timeLeft: number = 100;
  interval: any;
  questionIndex = 1;
  questionData: any;
  constructor(private router: Router, private firestoreService:FirestoreService) {

  }

  ngOnInit() {
    this.getQuestion();
  }

  goNext() {
    console.log('Bouton Suivant cliqué !');
    // Ajouter ici la logique pour passer à l'écran suivant ou une autre action
    this.EndOfExercise();
  }

  EndOfExercise() {
    this.router.navigate(['/end']); // Naviguer vers la route /questions
  }

  getQuestion() {
    this.firestoreService.getQuestionWithResponses('Q'+this.questionIndex).subscribe(
      data => {
        this.questionData = data;
        console.log('Question et réponses récupérées :', this.questionData);
      },
      error => {
        console.error('Erreur lors de la récupération des données :', error);
      }
    );
  }
}
