Alternativ kannst du das `AuthorizeView`-Komponente verwenden, um Inhalte basierend auf dem Authentifizierungsstatus des Benutzers bedingt anzuzeigen. Diese Komponente ist nützlich, wenn du unterschiedlichen Inhalt für authentifizierte und nicht authentifizierte Benutzer anzeigen möchtest.

Füge in deiner Razor-Komponente den folgenden Code hinzu:

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>Name: @User?.Identity?.Name</p>
        @* Inhalt für authentifizierte Benutzer *@
    </Authorized>
    <NotAuthorized>
        @* Inhalt für nicht authentifizierte Benutzer *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

Die `AuthorizeView`-Komponente erfordert einen kaskadierenden Parameter vom Typ `Task<AuthenticationState>`. Eine direkte Möglichkeit, diesen Parameter zu erhalten, besteht darin, die `<CascadingAuthenticationState>`-Komponente hinzuzufügen. Aufgrund der Natur von Blazor Server können wir die Komponente jedoch nicht einfach zum Layout oder zur Root-Komponente hinzufügen (es könnte nicht wie erwartet funktionieren). Stattdessen können wir den folgenden Code zum Builder (`Program.cs` oder `Startup.cs`) hinzufügen, um den kaskadierenden Parameter bereitzustellen:

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

Dann kannst du die `AuthorizeView`-Komponente in jeder Komponente verwenden, die sie benötigt.
