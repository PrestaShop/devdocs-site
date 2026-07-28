---
title: "OAuth2 authentication / authorization"
url: "https://devdocs.prestashop-project.org/9/admin-api/oauth/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/admin-api/oauth.md"
---


# Oauth2

The Admin API is based on OAuth2 protocol which is widely used by many web actors.

## Terminology

Here's a bit of generic terminology to help you understand the different components/actors in the OAUth2 protocol and their responsibilities:

| Element                  | Description                                                                                                                              |
|--------------------------|------------------------------------------------------------------------------------------------------------------------------------------|
| **Resource Owner**       | Entity that can grant access to a protected resource (usually the end user).                                                             |
| **Client**               | Application requesting access to a protected resource on behalf of the Resource Owner.                                                   |
| **Access Token**         | A token used to access protected resources                                                                                               |
| **Resource Server**      | Server hosting the protected resources capable of accepting and responding to requests using access tokens.                              |
| **Authorization Server** | A server which issues access tokens after successfully authenticating a client and resource owner, and authorizing the request.          |
| **Scope**                | A permission that grants access to one or several resources.                                                                             |
| **JWT Token**            | Or JSON Web Token  is a method for representing claims securely between two parties.                                                     |
| **Grant Type**           | The protocol has several types or workflow to validate authentication known as grant types (Authorization Code, Client Credentials, ...) |

## Our use case

In the use case of the Admin API, here is how each element can be identified:

- **Resource owner**: The merchant/administrator of the PrestaShop website.
- **Client**: An OMS or a PIM tool that needs to integrate with the PrestaShop website.
- **Resource server**: The PrestaShop website.
- **Authorization Server**: The PrestaShop website (by default, but you can use an external authorization server).

### Grant Type: Client Credentials

For "server-to-server" interactions, the recommended OAuth workflow is the client credentials workflow. The client is provided with a client ID and a client secret. The context of execution of the API is not as a user.

The operations made via this workflow will be associated to an application not a user.

The client is considered trusty so the workflow is simple and require very few steps.

{{% notice note %}}
In the default use case, the website acts both as the [Resource server]({{< relref "./resource_server" >}}) and the [Authorization server]({{< relref "./authorization_server/internal_authorization" >}}). However, you can also use other solutions for your authorization server (see [External Authorization Server]({{< relref "./authorization_server/external_authorization" >}})). The website will always be the Resource Server.
{{% /notice %}}

## Client Credential Workflow

The **client credential** workflow is quite simple, the client only needs to perform one request to the Authorization server, it needs to specify:

- **Client ID**
- **Client secret**
- **Grant type**: `client_credentials`
- **Scopes**: the list of scopes that will be usable via the received access token

{{% notice note %}}
Keep in mind that the first request to get an access token already has to define the scopes (or permissions) that will be granted with the request access token. If you need to perform different API calls with different scopes, you must provide all the required scopes for all the subsequent calls.

It is recommended to use a limited subset of scopes in case your access token is stolen so that it only grants a few permissions.
{{% /notice %}}

<div class="mermaid">
sequenceDiagram
  participant C as Client
  participant RS as Resource Server
  participant AS as Authorization Server
  Note over C,AS: Fetch the access token
  C->>AS: Access Token Request
  activate AS
  AS->>C: Access Token Response (in JWT token format)
  deactivate AS
  Note over C,RS: Request a resource with header<br>Authorization: Bearer access_token
  C->>RS: API Request
  activate RS
  RS-->>AS: Asks if JWT token and the scopes are valid
  activate AS
  AS-->>RS: Valid token
  deactivate AS
  RS->>C: API Response with resource content
  deactivate RS
  Note over C,RS: Request a resource with invalid access token
  C->>RS: API Request (with invalid JWT token)
  activate RS
  RS-->>AS: Asks if JWT token and the scopes are valid
  activate AS
  AS-->>RS: Invalid token
  deactivate AS
  RS-xC: Error API Response
  deactivate RS
</div>

