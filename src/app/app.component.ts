import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'angular-app';
  currentDateTime!: string;

  constructor() { }

  ngOnInit(): void {
    this.updateDateTime();
    setInterval(() => {
      this.updateDateTime();
    }, 1000);
  }

  updateDateTime(): void {
    const currentDate = new Date();
    const formattedDate = currentDate.toLocaleDateString();
    const formattedTime = currentDate.toLocaleTimeString();
    this.currentDateTime = `Current Date: ${formattedDate} | Current Time: ${formattedTime}`;
  }
}
