---
title: Indexes/Tasks
id: indexes-tasks
---

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import DisplayMethod from "../../src/components/DisplayMethod"

A task represents a request to upload and index a video. A task starts when you begin uploading your video by calling the **POST** method of the [indexes/tasks](/api-reference/indexes-tasks) endpoint, and it can have one of the following statuses:
- **Validating**: Your video has finished uploading, and the API service is validating it by performing the following checks:
  - Resolution must be greater or equal than 360p and less than 1080p (FHD).
  - Duration must be between 15 seconds and 2 hours (7,200s).
  - Your video must contain an audio track.
  - Your video must not have missing frames.
- **Pending**: The API is spawning a new worker server to process your video.
- **Indexing**: The API is transforming the video you uploaded into vectors. A vector is like a compressed version of the video and contains all the information that Twelve Labs' deep-learning models need to perform fast, semantic, accurate, and scalable searches.
- **Ready**: Your video is ready to be searched.
Additionally, you may receive one of the following error messages:
- **Broken Video File**: Your video has broken frame(s) or does not contain an audio track.
- **Failed**: The API service encountered an internal error, and the video indexing task failed.

The `task` object has the following elements:
- `_id`: A string representing the unique identifier of the task. It is assigned by the API service when a new task is created.
- `created_at`: A string indicating the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the task was created.
- `estimated_time`: A string indicating the estimated date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the video is ready to be searched.
- `index_id`: A string pointing to the index to which the video is assigned.
- `metadata`: An object that contains the following information about the video:
  - duration
  - filename
  - height
  - width
- `status`: A string indicating the status of the video indexing task.
- `updated_at`: A string indicating the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the task object was last updated. The API service updates this field every time the video indexing task transitions to a different state.

## Create a New Video Indexing Task

Create a new video indexing task to upload a video to the API service and make it searchable. Note the following about creating a new video indexing task:
- To upload a file that resides on the local file system, pass the `video_file` parameter. It must be a stream of bytes encoded as `multipart/form-data`.
- To upload a file from a publicly accessible URL, pass the `video_url` parameter with the URL of your video. It must be a string.
- You must specify at least one of the `video_file` and `video_url` parameters. If you specify both the `video_url` and `video_file` parameters in the same request, the `video_url` parameter takes precedence over `video_file`.
- To provide a transcription file, you must set the `provide_transcription` parameter to `true` and specify at least one of the `transcription_file` and `transcription_url` parameters:
  - Use the `transcription_file` parameter to provide a transcription from the local file system. It must be a stream of bytes encoded as `multipart/form-data`.
  - Use the `transcription_url` parameter to provide a transcription file from a publicly accessible URL. It must be a string.

<DisplayMethod path="/indexes/tasks" method="post"/>

## List Video Indexing Tasks

<DisplayMethod path="/indexes/tasks" method="get"/>

## Retrieve a Video Indexing Task

<DisplayMethod path="/indexes/tasks/{task-id}" method="get"/>

## Retrieve a Video Vector ID Based on a Task ID

<DisplayMethod path="/indexes/tasks/{task-id}/video-id" method="get"/>

### Response Schema

The response is in JSON format. 

On success, it contains the following fields:
- `_id`: A string representing the ID of the video index. The API returns this field only when the value of the status field is ready.
- `exist`: A boolean specifying whether the video is ready to be searched. The API service returns `true` when the value of the `status` field is `ready` and `false` otherwise.
- `type`: Describes the type of operation (`index_task_video_id`).
​
On failure, it contains the following fields:
- `error_code`: Represents the code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.
- `message`: A human-readable string describing the error.

