
import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = [
      { label: 'Login', icon: 'pi pi-fw pi-user' },
      { label: 'Étude', icon: 'pi pi-fw pi-book' },
      { label: 'Question', icon: 'pi pi-fw pi-question-circle' },
    ];
  }
}
