---
description: Используйте Management API для доступа к бэкенд-сервисам Logto, масштабируя вашу CIAM-систему с помощью управления пользователями, настройками учетных записей, проверки идентификации и многопользовательской архитектуры.
sidebar_position: 5
---

import logtoManagementApiResourceSrc from './assets/logto-management-api-resource.webp';
import logtoManagementApiDetailsSrc from './assets/logto-management-api-details.webp';

import BasicsAboutAccessTokenRequest from '../../quick-starts/generic/machine-to-machine/fragments/\_basics-about-access-token-request.mdx';
import FetchAccessTokenForLogtoManagementApi from '../../quick-starts/generic/machine-to-machine/fragments/\_fetch-access-token-for-logto-management-api.mdx';
import AccessTokenUsage from '../../quick-starts/generic/machine-to-machine/fragments/\_access-token-usage.mdx';
import AccessLogtoManagementApiUsingAccessToken from '../../quick-starts/generic/machine-to-machine/fragments/\_access-logto-management-api-using-access-token.mdx';
import M2mAccessTokenNote from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-access-token-sub-note.mdx';
import M2mRoleAssignment from '../../quick-starts/generic/machine-to-machine/fragments/\_m2m-role-assignment.mdx';

# Взаимодействие с Management API

## Что такое Logto Management API? {#what-is-logto-management-api}

Logto Management API — это обширный набор API, который предоставляет разработчикам полный контроль над их реализацией, чтобы она соответствовала потребностям их продукта и технологическому стеку. Он предустановлен, указан в <CloudLink to="/api-resources">Консоль > Ресурсы API > Logto Management API</CloudLink> и не может быть удален или изменен.

Его идентификатор имеет формат `https://[tenant-id].logto.app/api`

<img alt="Ресурс Logto Management API" src={logtoManagementApiResourceSrc} />

<img alt="Детали Logto Management API" src={logtoManagementApiDetailsSrc} />

С помощью Logto Management API вы можете получить доступ к мощным бэкенд-сервисам Logto, которые обладают высокой масштабируемостью и могут быть использованы в различных сценариях. Это выходит за рамки возможностей, предоставляемых низкокодовыми возможностями Admin Console.

Некоторые часто используемые API перечислены ниже:

- [User](https://openapi.logto.io/operation/operation-getuser)
- [Application](https://openapi.logto.io/operation/operation-listapplications)
- [Audit logs](https://openapi.logto.io/operation/operation-listlogs)
- [Roles](https://openapi.logto.io/operation/operation-listroles)
- [Resources](https://openapi.logto.io/operation/operation-listresources)
- [Connectors](https://openapi.logto.io/operation/operation-listconnectors)
- [Organizations](https://openapi.logto.io/operation/operation-listorganizations)

Чтобы узнать больше о доступных API, посетите https://openapi.logto.io/.

## Как получить доступ к Logto Management API {#how-to-access-logto-management-api}

### Создание M2M приложения {#create-an-m2m-app}

:::note
Если вы не знакомы с потоком аутентификации M2M (машина-машина), мы рекомендуем сначала прочитать [Понимание потока аутентификации](/integrate-logto/integrate-logto-into-your-application/understand-authentication-flow/#machine-to-machine-authentication-flow), чтобы понять основные концепции.
:::

Перейдите в <CloudLink to="/applications">Консоль > Приложения</CloudLink>, выберите тип приложения "Machine-to-machine" и начните процесс создания.

<M2mRoleAssignment />

В модуле назначения ролей вы можете увидеть все M2M роли, и роли, обозначенные иконкой Logto, означают, что эти роли включают разрешения Logto Management API.

Теперь назначьте M2M роли, включающие разрешения Logto Management API для вашего M2M приложения.

### Получение токена доступа {#fetch-an-access-token}

#### Основы запроса токена доступа {#basics-about-access-token-request}

<BasicsAboutAccessTokenRequest />

#### Получение токена доступа для Logto Management API {#fetch-access-token-for-logto-management-api}

<FetchAccessTokenForLogtoManagementApi />

#### Ответ на запрос токена доступа {#access-token-response}

Успешный ответ на запрос токена будет выглядеть следующим образом:

```json
{
  "access_token": "eyJhbG...2g", // Используйте этот токен для доступа к Logto Management API
  "expires_in": 3600, // Время истечения токена в секундах
  "token_type": "Bearer", // Тип аутентификации для вашего запроса при использовании токена доступа
  "scope": "all" // область действия `all` для Logto Management API
}
```

<M2mAccessTokenNote />

### Доступ к Logto Management API с использованием токена доступа {#access-logto-management-api-using-access-token}

<AccessTokenUsage />

<AccessLogtoManagementApiUsingAccessToken />

## Типичные сценарии использования Logto Management API {#typical-scenarios-for-using-logto-management-api}

Наши разработчики реализовали множество дополнительных функций с использованием Logto Management API. Мы считаем, что наш API обладает высокой масштабируемостью и может поддерживать широкий спектр ваших потребностей. Вот несколько примеров сценариев, которые невозможно реализовать с помощью Logto Admin Console, но которые можно достичь через Logto Management API.

### Реализация пользовательского профиля самостоятельно {#implement-user-profile-on-your-own}

В настоящее время Logto не предоставляет готовое решение для пользовательских профилей. Мы признаем, что пользовательские профили тесно связаны с бизнесом и атрибутами продукта. Пока мы работаем над определением наилучшего подхода, мы предлагаем использовать наши API для создания собственного решения. Например, вы можете использовать наш API взаимодействия, API профиля и API кода проверки для разработки индивидуального решения, соответствующего вашим потребностям.

### Расширенный поиск пользователей {#advanced-user-search}

Logto Admin Console поддерживает базовые функции поиска и фильтрации. Для расширенных опций поиска, таких как нечеткий поиск, точное совпадение и учет регистра, ознакомьтесь с нашими руководствами и инструкциями по [Расширенному поиску пользователей](/user-management/advanced-user-search).

### Реализация управления организациями самостоятельно {#implement-organization-management-on-your-own}

Если вы используете функцию [организаций](/organizations) для создания вашего многопользовательского приложения, вам может понадобиться Logto Management API для таких задач, как приглашения в организацию и управление участниками. Для вашего SaaS-продукта, где у вас есть как администраторы, так и участники в арендаторах, Logto Management API может помочь вам создать индивидуальный портал администратора, адаптированный к вашим бизнес-потребностям. Подробности смотрите [здесь](/end-user-flows/organization-experience/).

## Советы по использованию Logto Management API {#tips-for-using-logto-management-api}

### Управление постраничными ответами API {#managing-paginated-api-responses}

Некоторые ответы API могут включать множество результатов, которые будут разбиты на страницы. Logto предоставляет 2 вида информации о пагинации.

#### Использование заголовков ссылок {#using-link-headers}

Заголовок ответа с пагинацией будет выглядеть следующим образом:

```
Link: <https://logto.dev/users?page=1&page_size=20>; rel="first"
```

Заголовок ссылки предоставляет URL для предыдущей, следующей, первой и последней страницы результатов:

- URL для предыдущей страницы следует за rel="prev".
- URL для следующей страницы следует за rel="next".
- URL для последней страницы следует за rel="last".
- URL для первой страницы следует за rel="first".

#### Использование заголовка total-number {#using-total-number-header}

В дополнение к стандартным заголовкам ссылок, Logto также добавит заголовок `Total-Number`:

```
Total-Number: 216
```

Это будет очень удобно и полезно для отображения номеров страниц.

#### Изменение номера страницы и размера страницы {#changing-page-number-and-page-size}

Существуют 2 необязательных параметра запроса:

- `page`: указывает номер страницы, начиная с 1, значение по умолчанию — 1.
- `page_size`: указывает количество элементов на странице, значение по умолчанию — 20.

### Ограничение скорости {#rate-limit}

:::note
Это только для Logto Cloud.
:::

Чтобы обеспечить надежность и безопасность наших услуг для всех пользователей, мы используем общий брандмауэр, который отслеживает и управляет трафиком на нашем сайте. Хотя мы не применяем строгие ограничения скорости, мы рекомендуем пользователям ограничивать свою активность примерно 200 запросами каждые 10 секунд, чтобы избежать срабатывания наших защитных мер.

## Связанные ресурсы {#related-resources}

<Url href="https://blog.logto.io/management-api">
  Использование Logto Management API: Пошаговое руководство
</Url>

<Url href="https://blog.logto.io/use-postman-to-obtain-m2m-access-token">Получите M2M токены доступа за считанные минуты с помощью Postman</Url>
