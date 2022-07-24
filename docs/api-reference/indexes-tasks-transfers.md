---
title: Indexes/Tasks/Transfers
id: indexes-tasks-transfers
---

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import DisplayMethod from "../../src/components/DisplayMethod"

Use the `indexes/tasks/transfer` endpoint to perform cloud-to-cloud transfers that allow you to group multiple video indexing operations in a single API request by sending a `multipart/form-data` request. The request body must specify a JSON file that contains an array. Each element of the array represents a file to be uploaded and indexed and has the following fields:
- `index_id`: The unique identifier of the index with which the video file will be associated.
- `language`: The language of your video.
- `object`: The S3 URL of your video.
- `transcription`: The S3 URL of your transcription.

## Make a Cloud-to-Cloud Transfer

<DisplayMethod path="/indexes/tasks/transfers" method="post"/>

## Related Topics

- [Cloud-to-Cloud Video Transfers](/guides/uploading-videos/cloud-to-cloud-transfers)
