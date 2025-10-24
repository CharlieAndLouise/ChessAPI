import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MasterPageComponent } from './components';

/**
 * SharedModule contains common functionality that can be used across the application.
 * It imports and exports commonly used Angular modules and can include shared components,
 * directives, and pipes.
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
    // Add shared components, directives, and pipes here
    MasterPageComponent
  ],
  exports: [
    // Re-export commonly used modules
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    // Export shared components, directives, and pipes here

    MasterPageComponent

  ]
})
export class SharedModule { }