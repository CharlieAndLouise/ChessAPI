import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SharedModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  title = 'Chess Monitor';
  
  constructor() { }
}