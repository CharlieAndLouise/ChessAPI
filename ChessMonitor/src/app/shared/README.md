# Shared Module

This module contains shared components, directives, pipes, and services that can be used across the application.

## Structure

```
shared/
├── index.ts                 # Main export file
├── shared.module.ts         # Shared module definition
├── components/              # Shared components
│   └── index.ts
├── directives/              # Shared directives
│   └── index.ts
├── pipes/                   # Shared pipes
│   └── index.ts
└── services/                # Shared services
    └── index.ts
```

## Usage

To use the shared module in your feature modules:

```typescript
import { SharedModule } from '@app/shared';

@NgModule({
  imports: [
    SharedModule,
    // other imports...
  ],
  // ...
})
export class YourFeatureModule { }
```

## Adding New Shared Items

### Components
1. Create your component in `shared/components/`
2. Export it from `shared/components/index.ts`
3. Add it to the `declarations` and `exports` arrays in `shared.module.ts`

### Directives
1. Create your directive in `shared/directives/`
2. Export it from `shared/directives/index.ts`
3. Add it to the `declarations` and `exports` arrays in `shared.module.ts`

### Pipes
1. Create your pipe in `shared/pipes/`
2. Export it from `shared/pipes/index.ts`
3. Add it to the `declarations` and `exports` arrays in `shared.module.ts`

### Services
1. Create your service in `shared/services/`
2. Export it from `shared/services/index.ts`
3. Services are automatically available when the module is imported

## Pre-included Modules

The SharedModule already imports and exports:
- `CommonModule` - Common Angular directives like ngIf, ngFor
- `FormsModule` - Template-driven forms
- `ReactiveFormsModule` - Reactive forms