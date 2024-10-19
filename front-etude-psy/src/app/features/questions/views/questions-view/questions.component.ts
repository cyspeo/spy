import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from '../../components/timer/timer.component';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { Firestore, collection, collectionData } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Question } from '../../model/question';


@Component({
  selector: 'app-questions',
  standalone: true,
  imports: [TimerComponent, FormsModule, CommonModule, AngularFireModule],
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
  questions$: Observable<Question[]>;
  private firestore = inject(Firestore);
  constructor(private router: Router) {

    const userProfileCollection = collection(this.firestore, 'questions');
    this.questions$ = collectionData(userProfileCollection) as Observable<Question[]>
    this.questions$.subscribe(qs => {
      console.log("questions " + JSON.stringify(qs));
    });
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
    // this.firestoreService.getQuestionWithResponses('Q'+this.questionIndex).subscribe(
    //   data => {
    //     this.questionData = data;
    //     console.log('Question et réponses récupérées :', this.questionData);
    //   },
    //   error => {
    //     console.error('Erreur lors de la récupération des données :', error);
    //   }
    // );
  }
}
