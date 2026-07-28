---
title: "Authorization Server"
url: "https://devdocs.prestashop-project.org/9/admin-api/authorization_server/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/admin-api/authorization_server/_index.md"
---


# Authorization Server

The Admin API is based on the OAuth2 protocol. PrestaShop is always the resource server in charge of providing access to the resources.

However, it can interact with either an external authorization server or act as the authorization server itself (you can even combine both features if you need to).

### Multiple authorization servers

To handle multiple authorization servers we provide an interface `PrestaShop\PrestaShop\Core\Security\OAuth2\AuthorisationServerInterface`:

```php
namespace PrestaShop\PrestaShop\Core\Security\OAuth2;

use Symfony\Component\HttpFoundation\Request;

/**
 * To integrate an authorization server you must implement this interface, the methods are bridges that call the authorization server
 * to ensure the access token is valid, if so it can return a representation of the user using the JwtTokenUser DTO.
 */
interface AuthorisationServerInterface
{
    /**
     * For each request received, the resource server loops through all the available servers implementing this interface
     * and uses this method to detect which one matches with the provided access token. Your implementation of each authorization
     * server must be able to recognize an access token it created, usually relying on the issuer saved in the metadata included
     * in the JWT token (no convention is forced, each authorization server may store this info differently as long as it can
     * recognize itself).
     *
     * @param Request $request
     * @return bool
     */
    public function isTokenValid(Request $request): bool;

    /**
     * If the token is valid, the authorization server must return a representation of the user using the
     * JwtTokenUser DTO that contains:
     *  - userId: Usually, the Client ID
     *  - scopes: List of scopes authorized in the access token
     *  - issuer: An identifier for the authorization server that issued the token:
     *    - for external authorization servers: usually the address of the server
     *    - for our internal authorization server: null (it is the only allowed to use null as an issuer)
     *
     * @param Request $request
     * @return JwtTokenUser|null
     */
    public function getJwtTokenUser(Request $request): ?JwtTokenUser;
}
```

Internally we have a service `PrestaShopBundle\Security\OAuth2\PrestashopAuthorisationServer` that implements this interface relying on the data in database, but you can add other implementations for external authorization servers in modules.

The Admin API is protected by the `PrestaShop\PrestaShop\Core\Security\OAuth2\TokenAuthenticator`, each request to the API goes through this authenticator service that loops through all the detected implementation of authorization servers, it uses the `isTokenValid` method to detect which one matches with the provided access token, when it finds one it then uses `getJwtTokenUser` which represents the "logged" API client.

Every API client using the API are stored in database:
- for internal clients, they are already in the database and their external issuer is `null`
- external clients can be added based on the `JwtTokenUser` DTO, even if their Client ID may be duplicated with an internal one their external issuer must be defined, so we can always differentiate the clients

## Possible authorization servers

{{% children /%}}

