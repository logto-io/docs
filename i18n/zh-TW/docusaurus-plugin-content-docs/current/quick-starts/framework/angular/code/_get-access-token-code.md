```ts title="app/api-resource.component.ts"
import { Component, inject, signal } from '@angular/core';
import { LogtoService } from '@logto/angular';

@Component({
  selector: 'app-api-resource',
  standalone: true,
  template: `
    @if (logto.error(); as error) {
      <p role="alert">{{ error.message }}</p>
    }
    @if (logto.isAuthenticated()) {
      <button type="button" [disabled]="logto.isLoading()" (click)="loadAccessToken()">
        取得 API 存取權杖 (Access token)
      </button>
      <pre>{{ accessToken() }}</pre>
    }
  `,
})
export class ApiResourceComponent {
  readonly logto = inject(LogtoService);
  readonly accessToken = signal('');

  async loadAccessToken() {
    this.accessToken.set(await this.logto.getAccessToken('https://shopping.your-app.com/api'));
  }
}
```
