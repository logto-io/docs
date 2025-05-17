Alternativement, vous pouvez utiliser le composant `AuthorizeView` pour rendre conditionnellement du contenu en fonction de l'état d'authentification de l'utilisateur. Ce composant est utile lorsque vous souhaitez afficher un contenu différent pour les utilisateurs authentifiés et non authentifiés.

Dans votre composant Razor, ajoutez le code suivant :

```cshtml title="Components/Pages/Index.razor"
@using Microsoft.AspNetCore.Components.Authorization

@* ... *@

<AuthorizeView>
    <Authorized>
        <p>Nom : @User?.Identity?.Name</p>
        @* Contenu pour les utilisateurs authentifiés *@
    </Authorized>
    <NotAuthorized>
        @* Contenu pour les utilisateurs non authentifiés *@
    </NotAuthorized>
</AuthorizeView>

@* ... *@
```

Le composant `AuthorizeView` nécessite un paramètre en cascade de type `Task<AuthenticationState>`. Un moyen direct d'obtenir ce paramètre est d'ajouter le composant `<CascadingAuthenticationState>`. Cependant, en raison de la nature de Blazor Server, nous ne pouvons pas simplement ajouter le composant à la mise en page ou au composant racine (cela peut ne pas fonctionner comme prévu). Au lieu de cela, nous pouvons ajouter le code suivant au builder (`Program.cs` ou `Startup.cs`) pour fournir le paramètre en cascade :

```csharp title="Program.cs"
builder.Services.AddCascadingAuthenticationState();
```

Ensuite, vous pouvez utiliser le composant `AuthorizeView` dans chaque composant qui en a besoin.
