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

## Retrieve a Video Vector

<DisplayMethod path="/indexes/{index-id}/videos/{video-id}" method="get"/>

## Delete a Video Vector

<DisplayMethod path="/indexes/{index-id}/videos/{video-id}" method="delete"/>

## Retrieve a Transcription

<DisplayMethod path="/indexes/{index-id}/videos/{video-id}/transcription" method="get"/>

## Retrieve Text Recognized in a Video (OCR)

<DisplayMethod path="/indexes/{index-id}/videos/{video-id}/text-in-video" method="get"/>
