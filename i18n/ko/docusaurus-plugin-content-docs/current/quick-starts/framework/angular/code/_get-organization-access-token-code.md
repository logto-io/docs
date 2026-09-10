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
              조직 토큰 (Organization token) 가져오기
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
          // SDK는 템플릿에서 logto.error()를 통해 오류를 노출합니다.
        });
    });
  }

  async loadOrganizationToken(organizationId: string) {
    this.organizationToken.set(await this.logto.getOrganizationToken(organizationId));
  }
}
```
