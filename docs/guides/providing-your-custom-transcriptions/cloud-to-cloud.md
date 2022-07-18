---
title: Cloud-to-Cloud Transfers
id: cloud-to-cloud
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import VideoRequirements from '../../shared/video-requirements.md'
import Upload360pVideos from '../../shared/upload-360p-videos.md'
import DeclareTasksEndpoint from '../../shared/declare-tasks-endpoint.md'

Cloud-to-cloud transfers allow you to group multiple video indexing operations in a single API request. For details about this feature, see the **Cloud-to-Cloud Transfers** <!--TODO: Add link--> page. The [Dashboard](https://api.twelvelabs.io/dashboard) page allows you to download the list of videos in your AWS S3 bucket as a JSON, and you can provide transcriptions by editing this file in a plain-text editor.

## Prerequisites

- You already downloaded the list of videos in your AWS S3 bucket.
- Your transcription files reside on an AWS S3 bucket, and they're publicly accessible.
- Your transcription must be in the SRT or VTT format.
- <VideoRequirements />

## Recommendations

- <Upload360pVideos />

## Procedure

1. Open the JSON file containing the videos you want to upload and update the transcription fields by adding the S3 URLs of your transcription files. The following example adds two transcription files: `01.srt` and `02.srt`:

  ```output
  [
    {
      "index_id": "629d807aa9e2a3a33a92c00b1",
      "language": "en",
      "object": "s3://twelve-labs-docs/01.mp4",
      "transcription": "s3://twelve-labs-docs/01.srt"
    },
    {
      "index_id": "629d807aa9e2a3a33a92c00b",
      "language": "en",
      "object": "s3://twelve-labs-docs/02.mp4",
      "transcription": "s3://twelve-labs-docs/02.srt"
    }
  ]
  ```

2. <DeclareTasksEndpoint />
3. Read your JSON file. Open a stream making sure to replace the placeholders surrounded by `<>` with your values:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  file_path = "<YOUR_FILE_PATH>"
  file_name = "<YOUR_FILE_NAME>"
  file_stream = open(file_path, "rb")
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const file_path = '<YOUR_FILE_PATH>'
  const file_stream = fs.createReadStream(file_path)
  ```
  </TabItem>
  </Tabs>

4. If you're using Python, store the file to upload in an array named `file_param` and specify that you want to make a `multipart/form-data` request. If you're using Node.js, store the file to upload in a variable named `formData` of type `FormData`:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  file_param = [
      ("file", (file_name, file_stream, "multipart/form-data")),
  ]
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  let formData = new FormData()
  formData.append('file', file_stream)
  ```
  </TabItem>
  </Tabs>

5. Upload the JSON file. Call the `indexes/tasks/transfers` <!--TODO: Add link--> endpoint, store the result in a variable named `response`, and print the status code and the response:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  requests.post(INDEXES_TASKS_TRANSFER_URL, headers=headers, files=file_param)
  print (f"Status code: {response.status_code}")
  pprint (response.json())
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  let config = {
      method: 'post',
      url: INDEXES_TASKS_TRANSFER_URL,
      headers: headers,
      data : formData,
  };
  resp = await axios(config)
  response = await resp.data
  console.log(`Status code: ${resp.status}`)
  console.log(response)
  ```
  </TabItem>
  </Tabs>

  The output should look similar to the following one:

  ```output
  Status code: 200
  {
      'message': 'Succesfully requested indexing task',
      'type': 'index_task_create'
  }
  ```

## Related Topics

- **Indexes/Tasks/Transfers** <!--TODO: Add link-->


