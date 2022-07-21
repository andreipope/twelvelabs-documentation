---
title: Indexes/Videos
id: indexes-videos
---

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import DisplayMethod from "../../src/components/DisplayMethod"

When the API service indexes a video, it doesn't store it. Instead, the API service saves all the required information needed to perform fast, semantic, accurate, and scalable searches as lists of floating numbers. These lists are named video vectors.
The `video_vector` object has the following elements:
- `_id`: A string representing the unique identifier of a video vector. The API service creates a new `video_vector` object and assigns it a unique identifier when the video has successfully been indexed, and it's ready to be searched. Note that video vector IDs are different from task IDs. To map a task ID to a video vector ID, see the [Retrieve a Video Vector ID Based on a Task ID](/api-reference/indexes-tasks#retrieve-a-video-vector-id-based-on-a-task-id) section.
- `created_at`: A string indicating the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the video indexing task was created.
- `indexed_at`: A string indicating the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the video has finished indexing.
- `metadata`: An object that contains the following information about the video:
  - duration
  - filename
  - fps
  - height
  - size
  - width
- `updated_at`: A string indicating the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the video indexing task object was last updated. The API service updates this field every time the video indexing task transitions to a different state.

## List Video Vectors

<DisplayMethod path="/indexes/{index-id}/videos" method="get"/>

### Response Schema

The response is in JSON format. 

On success, it contains the following fields:
- `data`: An array that contains up to `page_limit` video vectors.
- `page_info`: An object that provides information about pagination. It has the following fields:
  - `limit_per_page`: The maximum number of items on each page.
  - `page`: The page you retrieved.
  - `total_page`: The total number of pages.
  - `total_result`: The total number of results.
- `type`: Describes the type of operation (`video_index_list`).

On failure, it contains the following fields:
- `message`: A human-readable string describing the error.
- `error_code`: Represents the code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.

## Retrieve a Video Vector

<DisplayMethod path="/indexes/{index-id}/videos/{video-id}" method="get"/>

### Response Schema

The response is in JSON format. 

On success, it contains the following fields:
- `_id`: The unique identifier of the video vector.
- `created_at`: A string indicating the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the video indexing task was created.
- `indexed_at`: A string indicating the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the video has finished indexing.
metadata: An object that contains the following information about the video:
  - duration
  - filename
  - fps
  - height
  - size
  - width
- `updated_at`: A string indicating the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the corresponding video indexing task was last updated. The API service updates this field every time the corresponding video indexing task transitions to a different state.
- `type`: Describes the type of operation (`video_index_info`).

On failure, it contains the following fields:
- `error_code`: Represents the code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.
- `message`: A human-readable string describing the error.

## Delete a Video Vector

<DisplayMethod path="/indexes/{index-id}/videos/{video-id}" method="delete"/>

### Response Schema

The response is in JSON format.

On success, it contains the following fields:
- `message`: A human-readable string describing the result.
- `type`: Describes the type of operation (`index_delete`).

On failure, it contains the following fields:
- `error_code`: The code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.
- `message`: A human-readable string describing the error.

## Retrieve a Transcription

<DisplayMethod path="/indexes/{index-id}/videos/{video-id}/transcription" method="get"/>

### Response Schema

The response is in JSON format. 

On success, it contains the following fields:
- `_id`: The unique identifier of the video vector.
- `data`: An array of objects that contains the transcription. For each time range for which the API service finds spoken words, it returns an object that contains the fields below:
  - `start`: The start of the time range, expressed in seconds.
  -`end`: The end of the time range, expressed in seconds.
  - `value`: Text representing the spoken words within this time range.
  If the API service doesn't find any spoken words, the data field is set to `None`.
- `index_id`: The unique identifier of the index with which the video is associated.
- `type`: Describes the type of operation (`video_index_meta_transcription`).

On failure, it contains the following fields:
- `message`: A human-readable string describing the error.
- `error_code`: Represents the code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.