# Master Page Component

The `MasterPageComponent` is a layout component that provides a structured page layout with four named template slots: banner, left navigation, content, and footer.

## Usage

Import the `MasterPageComponent` and use it with `ng-template` elements that have specific template reference variables.

```typescript
import { Component } from '@angular/core';
import { MasterPageComponent } from './shared/components/master-page/master-page.component';

@Component({
  selector: 'app-my-page',
  standalone: true,
  imports: [MasterPageComponent],
  template: `
    <app-master-page>
      <!-- Banner Template -->
      <ng-template #banner>
        <div>Your banner content here</div>
      </ng-template>

      <!-- Left Navigation Template -->
      <ng-template #leftNavigation>
        <div>Your navigation content here</div>
      </ng-template>

      <!-- Content Template -->
      <ng-template #content>
        <div>Your main content here</div>
      </ng-template>

      <!-- Footer Template -->
      <ng-template #foot>
        <div>Your footer content here</div>
      </ng-template>
    </app-master-page>
  `
})
export class MyPageComponent {}
```

## Template Slots

The component expects four named templates:

1. **`#banner`** - Header/banner area at the top of the page
2. **`#leftNavigation`** - Left sidebar navigation area
3. **`#content`** - Main content area
4. **`#foot`** - Footer area at the bottom of the page

## Layout Structure

The master page uses CSS Flexbox to create a responsive layout:

- **Banner**: Fixed at the top, full width
- **Main Area**: Flexible container that grows to fill available space
  - **Left Navigation**: Fixed width (250px), collapsible on mobile
  - **Content**: Flexible, takes remaining space
- **Footer**: Fixed at the bottom, full width

## Responsive Design

- On screens smaller than 768px, the left navigation is hidden
- The layout automatically adjusts to maintain usability on mobile devices

## Styling

The component includes default styling that provides:
- Clean, professional appearance
- Responsive breakpoints
- Proper spacing and borders
- Scroll handling for overflow content

You can override the default styles by targeting the component's CSS classes in your global styles or component-specific styles.

## Example

See `example-usage.component.ts` for a complete example of how to implement the master page component with sample content for each template slot.