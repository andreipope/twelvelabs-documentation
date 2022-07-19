---
id: indexes 
title: Indexes 
---

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import DisplayMethod from "../../src/components/DisplayMethod"


An index groups one or more videos stored as vectors and is the most granular level at which you can perform a search. The index object has the following elements:
- `_id`: A string representing the unique identifier of the index. It is assigned by the API when an index is created.
- `index_name`: A string representing the name of the index.
- `index_options`: An array of strings that determines how the engine processes your videos. Twelve Labs currently offers three different indexing options: visual, conversation, text_in_video. For more details, see the [Indexing Options](/concepts/indexing-options) page.
- `created_at`: A string representing the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the index was created.
- `updated_at`: A string representing the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the index was updated.
- `engine_id`: A string representing the unique identifier of the engine that the API will use to index the videos in this index.
- `video_count`: An integer representing the number of video vectors in the index.
- `total_duration`: An integer representing the total duration of the videos in the index.

## Create an Index

<DisplayMethod path="/indexes" method="post"/>

### Response Schema

The response is in JSON format. 
On success, it contains the following fields:
- `_id`: Represents the unique identifier of the `index` object.
- `message`:  A human-readable string describing the result.
- `type`: Describes the type of operation (`index_create`).
On failure, it contains the following fields:
- `error_code`: Represents the code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.
- `message`: A human-readable string describing the error.

## List Indexes

<DisplayMethod path="/indexes" method="get"/>

### Response Schema

The response is in JSON format. 

On success, it contains the following fields:
- `data`: An array that contains up to `page_limit` indexes.
- `page_info`: An object that provides information about pagination. It has the following fields:
  - `limit_per_page`: The maximum number of items on each page.
  - `page`: The page you retrieved.
  - `total_page`: The total number of pages.
  - `total_results`: The total number of results. 
  - `type`: Describes the type of operation (`index_list`). 
On failure, it contains the following fields:
- `error_code`: Represents the code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.
- `message`: A human-readable string describing the error.

## Retrieve an Index

<DisplayMethod path="/indexes/{index-id}" method="get"/>

### Response Schema

The response is in JSON format. 

On success, it contains the following fields:
- `data`: An object that contains an index object.
- `type`: Describes the type of operation (`get_index`).
On failure, it contains the following fields:
- `error_code`: Represents the code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.
- `message`: A human-readable string describing the error.

## Update an index

<DisplayMethod path="/indexes/{index-id}" method="put"/>

### Response Schema

The response is in JSON format.

On success, it contains the following fields:
- `message`: A human-readable string describing the result.
- `type`: Describes the type of operation (`update_index`).
On failure, it contains the following fields:
- `error_code`: The code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.
- `message`: A human-readable string describing the error.

## Delete an Index

<DisplayMethod path="/indexes/{index-id}" method="delete"/>

### Response Schema

The response is in JSON format.

On success, it contains the following fields:
- `message`: A human-readable string describing the result.
- `type`: Describes the type of operation (`index_delete`).
On failure, it contains the following fields:
- `error_code`: The code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.
- `message`: A human-readable string describing the error.