import { Component } from '@angular/core';
import { MasterPageComponent } from './shared/components/master-page/master-page.component';
import { SharedModule } from './shared';

@Component({
  selector: 'app-example-usage',
  standalone: true,
  imports: [SharedModule],
  template: `
    <app-master-page>
      <!-- Banner Template -->
      <ng-template #banner>
        <div style="padding: 1rem; text-align: center;">
          <h1>Chess Monitor</h1>
          <nav>
            <a href="#" style="margin: 0 1rem;">Home</a>
            <a href="#" style="margin: 0 1rem;">Games</a>
            <a href="#" style="margin: 0 1rem;">Players</a>
          </nav>
        </div>
      </ng-template>

      <!-- Left Navigation Template -->
      <ng-template #leftNavigation>
        <div style="padding: 1rem;">
          <h3>Navigation</h3>
          <ul style="list-style: none; padding: 0;">
            <li style="margin: 0.5rem 0;"><a href="#">Dashboard</a></li>
            <li style="margin: 0.5rem 0;"><a href="#">Live Games</a></li>
            <li style="margin: 0.5rem 0;"><a href="#">Tournaments</a></li>
            <li style="margin: 0.5rem 0;"><a href="#">Statistics</a></li>
            <li style="margin: 0.5rem 0;"><a href="#">Settings</a></li>
          </ul>
        </div>
      </ng-template>

      <!-- Content Template -->
      <ng-template #content>
        <div style="padding: 2rem;">
          <h2>Welcome to Chess Monitor</h2>
          <p>This is the main content area where your chess monitoring data will be displayed.</p>
          <div style="margin: 1rem 0;">
            <h3>Current Games</h3>
            <p>No active games at the moment.</p>
          </div>
          <div style="margin: 1rem 0;">
            <h3>Recent Activity</h3>
            <p>Check back later for recent game activity.</p>
          </div>
        </div>
      </ng-template>

      <!-- Footer Template -->
      <ng-template #foot>
        <div style="padding: 1rem; text-align: center; color: #666;">
          <p>&copy; 2025 Chess Monitor. All rights reserved.</p>
          <p>
            <a href="#" style="margin: 0 0.5rem; color: #666;">Privacy Policy</a>
            <a href="#" style="margin: 0 0.5rem; color: #666;">Terms of Service</a>
            <a href="#" style="margin: 0 0.5rem; color: #666;">Contact</a>
          </p>
        </div>
      </ng-template>
    </app-master-page>
  `,
  styles: [`
    a {
      text-decoration: none;
      color: #007bff;
    }
    a:hover {
      text-decoration: underline;
    }
  `]
})
export class ExampleUsageComponent {
}