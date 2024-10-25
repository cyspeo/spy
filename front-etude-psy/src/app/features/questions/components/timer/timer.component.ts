import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-timer',
  standalone: true,
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss']
})
export class TimerComponent implements OnInit {
  @Input() totalTime: number = 60; // Durée totale en secondes (par défaut 60 secondes)
  timeLeft: number = this.totalTime;
  dasharray: string = '100, 100'; // Valeur initiale pour stroke-dasharray
  interval: any;

  ngOnInit() {
    this.startTimer();
  }

  resetTimeLeft(time:number) {
    this.timeLeft = time;
  }

  startTimer() {
    const updateFrequency = 1000; // Mise à jour toutes les secondes (1000 ms)
    this.interval = setInterval(() => {
      if (this.timeLeft > 0) {
        this.timeLeft -= 1;
        this.updateDasharray(); // Mettre à jour stroke-dasharray
      } else {
        clearInterval(this.interval); // Arrêter le timer quand le temps atteint 0
      }
    }, updateFrequency);
  }

  updateDasharray() {
    const circumference = 100; // Circonférence du cercle
    const offset = circumference - (this.timeLeft / this.totalTime) * circumference;
    this.dasharray = `${offset}, 100`;
  }
}
