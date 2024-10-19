import { Component,OnInit,ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { AuthDialogComponent } from './features/auth-dialog/auth-dialog.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,TabMenuModule, AuthDialogComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'front-etude-psy';
  items: MenuItem[] = [];
   
  @ViewChild(AuthDialogComponent) authDialog!: AuthDialogComponent;

  ngOnInit() {
    this.items = [
      // { label: 'Login', icon: 'pi pi-fw pi-user' , command: () => this.authDialog.showDialog() },
      { label: 'Étude', icon: 'pi pi-fw pi-book' },
      { label: 'Question', icon: 'pi pi-fw pi-question-circle' },
    ];
  }
}
