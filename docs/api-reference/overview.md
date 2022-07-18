---
title: API Reference
id: overview
slug: /api-reference
---

Use the Twelve Labs Video Understanding API to extract information from your videos and make it available to your applications. The API is organized around REST and returns responses in the JSON format. It is compatible with most programming languages, and you can also use Postman or other REST clients to send requests and view responses.

## Call an Endpoint

To call an endpoint, you must construct a URL similar to the following one:

```
{Method} {BaseURL}/{version}/{resource}/{path_parameters}?{query_parameters}
```

The list below describes each component of a request:
- **Method**: The API supports the following methods:
  - `GET`: Reads data.
  - `POST`: Creates a new object or performs an action.
  - `PUT`: Updates an object.
  - `DELETE`: Deletes an object.
  
  Note that the POST and PUT methods require you to pass a request body containing additional parameters.

- **Base URL**: The base URL of the API is `https://api.twelvelabs.io`.
- **Version**: Must be set to `v1`.
- **Resource**: The name of the resource you want to interact with.
- **Path Parameters**: Allow you to indicate a specific object. For example, you can retrieve details about an task or video vector.
- **Query Parameters**: Any parameters that an endpoint accepts. For example, you can filter or sort a response using query parameters.

Note that the API requires you to pass a header parameter containing your API key to authenticate each request. For details, see the [Authentication](/guides/authentication) page.

## Endpoints

The sections below contain reference documentation for the endpoints that constitute the Twelve Labs Video Video Understanding API:

- [Engines](/api-reference/engines)
- [Indexes](/api-reference/indexes)
- [Indexes/Tasks](/api-reference/indexes-tasks)
- [Indexes/Tasks/Transfers](/api-reference/indexes-tasks-transfers)
- [Indexes/Videos](/api-reference/indexes-videos)
- [Search](/api-reference/search)

<!--TODO: Add links-->

## Error Codes
This section contains a list of the error codes that the API returns:

- Error Codes

<!--TODO: Add link-->


