```ts title="app/organizations.component.ts"
import { Component, effect, inject, signal } from '@angular/core';
import { LogtoService } from '@logto/angular';

@Component({
  selector: 'app-organizations',
  standalone: true,
  template: `
    @if (logto.error(); as error) {
      <p role="alert">{{ error.message }}</p>
    }
    @if (logto.isAuthenticated()) {
      <ul>
        @for (organizationId of organizationIds(); track organizationId) {
          <li>
            <span>{{ organizationId }}</span>
            <button
              type="button"
              [disabled]="logto.isLoading()"
              (click)="loadOrganizationToken(organizationId)"
            >
              取得組織權杖 (Organization token)
            </button>
          </li>
        }
      </ul>
      <pre>{{ organizationToken() }}</pre>
    }
  `,
})
export class OrganizationsComponent {
  readonly logto = inject(LogtoService);
  readonly organizationIds = signal<string[]>([]);
  readonly organizationToken = signal('');

  constructor() {
    effect(() => {
      if (!this.logto.isAuthenticated()) {
        this.organizationIds.set([]);
        this.organizationToken.set('');
        return;
      }

      void this.logto
        .getIdTokenClaims()
        .then((claims) => {
          this.organizationIds.set(claims.organizations ?? []);
        })
        .catch(() => {
          // SDK 會透過 logto.error() 將錯誤暴露給模板使用。
        });
    });
  }

  async loadOrganizationToken(organizationId: string) {
    this.organizationToken.set(await this.logto.getOrganizationToken(organizationId));
  }
}
```
