import { Routes } from '@angular/router';
import { EndComponent } from './features/end/views/end/end.component';
import { HomeComponent } from './features/home/home.component';
import { QuestionsComponent } from './features/questions/views/questions-view/questions.component';

export const routes: Routes = [

    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'questions',
        component: QuestionsComponent
    },
    {
        path: 'end',
        component: EndComponent
    },
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];
