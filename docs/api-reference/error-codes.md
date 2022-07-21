---
title: Error Codes
id: error-codes
---

## All Endpoints

| Error Codes | Message |
| ----------- | ------- |
| 101         | Unauthorized API key  |
| 102         | Missing required fields |
| 103         | Unrecognized parameters |
| 104         | Invalid parameter values |
| 105         | If page ID is specified, other fields should be empty |

## Endpoints that Use ID Values

- GET/DELETE/PUT engines/{_id}
- GET/DELETE index/{_id}
- GET index/task/{_id}/~
- GET/DELETE index/video/{_id}/~
- GET index, index/video, index/task
- POST search/{_id}

| Error Codes | Message |
| ----------- | ------- |
| 201         | ID does not exist  |

## Create Video Indexing Task

- POST index/task

| Error Codes | Message |
| ----------- | ------- |
| 301         | Failed to upload video |
| 302         | Too small resolution (Min resolution: 300p) |
| 303         | Too large resolution (Max resolution: 1080p) |
| 304         | Too long video (Max video duration: 7,200s-2 hours) |
| 305         | Too short video (Min video duration: 10s) |
| 306         | Audio does not exist. (Currently, only accepts video that has audio file) |

## Get Index Task Info

-  GET index/task/{_id}

| Error Codes | Message |
| ----------- | ------- |
| 401         | Broken video file. (Please check your video file) |

## Create Search Request

- POST search

| Error Codes | Message |
| ----------- | ------- |
| 501         | Unsupported search options for the given index. Allowed search options are the subset of the index options of the given index. |