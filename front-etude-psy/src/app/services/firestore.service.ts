import { inject, Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { collection } from 'firebase/firestore';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import { Question, Reponse } from './../features/questions/model/question';
import { collectionData, Firestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  public questions :Question[];
  currentQuestion = <Question>{};
  private firestore = inject(Firestore);
  public questions$:Observable<Question[]> ;

  constructor() {
    this.questions = new Array<Question>();
    const userProfileCollection = collection(this.firestore, 'questions');
    this.questions$ = collectionData(userProfileCollection) as Observable<Question[]>
  }

  getOptions(parentId: string) {
    const reponsesCollection = collection(this.firestore, 'question/'+parentId+'/reponses');
    return collectionData(reponsesCollection) as Observable<Reponse[]>
  }
}
