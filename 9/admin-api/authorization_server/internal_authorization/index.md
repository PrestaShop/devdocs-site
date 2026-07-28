---
title: "Internal authorization server"
url: "https://devdocs.prestashop-project.org/9/admin-api/authorization_server/internal_authorization/"
version: "9"
source: "https://github.com/PrestaShop/docs/blob/9.x/admin-api/authorization_server/internal_authorization.md"
---


# Internal authorization server

PrestaShop can be used as an authorization server, as such it can handle the permissions and authentication to access the resource server.

When PrestaShop is used as the authorization server, it doesn't need to perform an external call to validate the access token since it already has all the required data to do so in its database, but it still performs the same role.

## Create API client

Let's create our first client. You can add as many clients to the API as you want. In the real-world scenario, you probably want to create a separate client for each service you want to integrate. You will probably have clients like "My ERP integration", "Some marketing automation tool client", etc.

To add a new API client, navigate to Advanced Parameters -> Admin API page. Here you can see a list of all API clients, you can add a new one by clicking the "Add new API Client" button.

![PrestaShop 9 API Client](../img/api_add_new_client1.jpeg)

If you want to add a new client, you must provide information about it. In the form below, you must provide all the necessary information about the client. After that, you can click the "Generate client secret and save" button. This will generate a client secret for you and save the client in the database. **It's important to save the client secret because you won't be able to see it again.**

![PrestaShop 9 Form for adding a new API client](../img/api_add_new_client2.jpeg)

* **Client name** - the name of the client: it can be anything you want. It's just for your reference.
* **Client ID** - the ID of the client, which is a unique identifier for the client. It should be written without spaces or special characters.
* **Description** - a description of the client: it can be anything you want. It's just for your reference.
* **Lifetime** - the lifetime of the client. It's the time after which the client access token will expire. In seconds.
* **Enabled** - if the client is enabled or not. If it's not enabled, the client won't be able to use the API.
* **Scopes** - the scopes the client can use. You can enable multiple scopes. Each time you add a new scope, you will have to adjust the client's settings.

{{% notice %}}
As part of API extensibility, you can add new scopes to the API. This will allow you to create more granular permissions for your clients. You can find an [example module here](https://github.com/PrestaShop/example-modules/tree/master/api_module) and in [ps_apiresources](https://github.com/PrestaShop/ps_apiresources) repository.
{{% /notice %}}

Once again: after you save the client, you will see the client secret, but you won't be able to see it again. You can only see it once when you generate it. It's important to save it because you need it to authenticate your client.

{{< figure src="../img/api_add_new_client3.jpeg" title="Remember to copy secret for your API Client" >}}

## Getting an access token

Now that you created your first API client, you can perform connection to the API. You can use Postman or any other tool to make HTTP requests.

The first thing we are going to do is get the access token. You need to send a POST request to the `/admin-api/access_token` endpoint to do that. You need to provide the following parameters:

* **client_id** - the ID of the client you created
* **client_secret** - the secret of the client you created
* **grant_type** - the type of grant you want to use. In this case, it's `client_credentials`
* **scope** - the scopes you want to use. You can provide multiple scopes. In this case, we are going to use `api_client_read`, `api_client_write`, `customer_group_read`, `customer_group_write`.

{{% notice %}}
You have many tools to debug APIs. You can use Postman, [curl](https://curl.se/), or any other tool (like [Insomnia](https://insomnia.rest/)) that allows you to make HTTP requests. In this tutorial, we will use [Postman API client](https://www.postman.com/api-platform/api-client/), so that you can quickly test the API with a user-friendly interface.
{{% /notice %}}

Example request using curl:

```bash
curl --location 'http://yourdomain.test/admin-api/access_token' \
--form 'grant_type="client_credentials"' \
--form 'client_id="your_client_id"' \
--form 'client_secret="your_client_secret"' \
--form 'scope[]="api_client_read"' \
--form 'scope[]="api_client_write"' \
--form 'scope[]="customer_group_read"' \
--form 'scope[]="customer_group_write"'
```

Example request using Postman:

{{< figure src="../img/postman_access_token.png" title="Screenshot from Postman where we retrieve access token for our client" >}}

{{% notice %}}
As you can see in the screenshot, we are using project variables in Postman. This way, you can easily switch between different environments (like development, staging, and production) and don't have to change the request data (URL, client_id, etc.) every time you switch environments. You also won't find Authorization header in the request because it's generated automatically by Postman, thanks to ["Inherit authorization from parent"](https://learning.postman.com/docs/sending-requests/authorization/specifying-authorization-details/#inherit-authorization) option.
{{% /notice %}}

After you send the request, you should receive a response with the access token. If you receive information saying "Use HTTPS response", it means that you need to use HTTPS to connect to the API. As mentioned earlier, you can turn off this check in the PrestaShop back office.

If you still have problems with the connection, make sure that the API is enabled in the PrestaShop back office. You can check this in the Advanced Parameters -> Admin API -> Configuration page.

If everything goes well, the response should look similar to this:

```json
{
    "token_type": "Bearer",
    "expires_in": 3600,
    "access_token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ0ZXN0X2NsaWVudCIsImp0aSI6ImQ5OTQzYWQzNDgwNDA3N2QyZGQ5MTBmM2E3YTVmYTdiZTQ1YmMyNzZmM2VmMjA2MGJmZjg2MzhlMzA4ZWE3OWY1ZWI1NzQ0ZmI0N2Y4MDU2IiwiaWF0IjoxNzE2Mjg2MjE5LjQ2NDA3OCwibmJmIjoxNzE2Mjg2MjE5LjQ2NDA4LCJleHAiOjE3MTYyODk4MTkuNDYzMDEsInN1YiI6IiIsInNjb3BlcyI6WyJpc19hdXRoZW50aWNhdGVkIiwiYXBpX2NsaWVudF9yZWFkIiwiYXBpX2NsaWVudF93cml0ZSIsImN1c3RvbWVyX2dyb3VwX3JlYWQiLCJjdXN0b21lcl9ncm91cF93cml0ZSJdfQ.Q6kK0Pl1HVAVrzn5xUrzRO1VSUaw-ygTn9D_rKlfjW3gllUWJiWRaA_pM53RtLId1LkcAfW8nW27CFhQH7TQqLCn4vUPD2t6_s7-3WX_HIqe6MHExib2mW7u_ZXT3bSOyPUOjWIcZsISQR1-noZfOEYDkvgnKDC250zieVqMELgxclMFXKdiLhn83GJnCW35llB1TwAACxdV1uJ_emZGCR3Tsy2IK1pSKPRAb2h-gBre8hqtCmUZ5pdM_L6D_EuUM-aB6iQENiCD6ECmSvqvsqkd3RB73s7PntwniUUafD2GHap1Ttw8pOF7omtT3X0ZLssSX1eQMPDw6JGLFz9caw"
}
```

You can now use the access token to authenticate your client in the next requests. You can use it by providing the `Authorization` header with the value `Bearer YOUR_ACCESS_TOKEN`.

Remember that the access token is valid for a limited time. After it expires, you need to get a new one. It is also crucial to provide scopes that your client can use. If you don't give the correct scopes, you won't be able to access some endpoints.

Access token is a JWT token. JWT stands for JSON Web Token that contains information about the client and the scopes it can use. It's signed with a secret key, so you can be sure that the token is valid and hasn't been tampered with. You can go to [jwt.io](https://jwt.io/) to see the token's content after you decode it.

