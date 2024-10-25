import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TimerComponent } from '../../components/timer/timer.component';
import { Router } from '@angular/router';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreService } from './../../../../services/firestore.service';
import { Question } from './../../model/question';

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
  public timeLeft: number = 60;
  interval: any;
  questionIndex = 0;
  questionData: any;
 
 
  constructor(private router: Router, public questionServiceDas: FirestoreService) {
    
  }
@ViewChild(TimerComponent) timer!:TimerComponent;
  ngOnInit() {
    this.getNextQuestion();
  }



  goNext() {
    console.log('Bouton Suivant cliqué !');
    // Ajouter ici la logique pour passer à l'écran suivant ou une autre action
    if (this.questionIndex < this.questionServiceDas.questions.length) {
      this.questionIndex++;
      this.getNextQuestion();

    } else {
      this.EndOfExercise();
    }
    
  }

  EndOfExercise() {
    this.router.navigate(['/end']); // Naviguer vers la route /questions
  }

  getOptions(parentId:string) {
    console.log("parentId="+parentId);
    this.questionServiceDas.getOptions(parentId).subscribe(opts => {
      this.options = opts.map(op => op.texte);
    });
  }

  getNextQuestion() {
    this.selectedOptions = {};
    this.questionServiceDas.currentQuestion = this.questionServiceDas.questions[this.questionIndex];
    this.getOptions(this.questionServiceDas.currentQuestion.id);
    this.timer.resetTimeLeft(this.questionServiceDas.currentQuestion.duree);
  }
}
