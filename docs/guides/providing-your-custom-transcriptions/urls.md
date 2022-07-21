---
title: Providing Transcriptions From URLs
id: urls
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ProgrammingLanguages from '../../shared/programming-languages-guides.md'
import VideoRequirements from '../../shared/video-requirements.md'
import Upload360pVideos from '../../shared/upload-360p-videos.md'
import Understand from '../../shared/prerequisites-understand-page.md'
import DeclareTasksEndpoint from '../../shared/declare-tasks-endpoint.md'
import MonitorIndexingProcess from '../../shared/monitor-indexing-process.md' 
import TaskIdStatusCodeResponse from '../../shared/task-id-status-code-response.md'

In this guide you'll learn how to upload a video file and provide a transcription when both files are available from public URLs. The API service will download the files directly from the specified URLs, so your application doesn't have to store them locally and upload the bytes.

<ProgrammingLanguages />

## Prerequisites

- Your transcription must be in the SRT or VTT format.
- <VideoRequirements />
- Ensure that the URL of the video and transcription are publicly accessible.
<Understand />
- You've already created an index. For details, see the [Create an Index](/api-reference/indexes#create-an-index) section.

## Recommendations

- <Upload360pVideos />

## Procedure

1. <DeclareTasksEndpoint />
2. To provide a transcription file, you must set the `provide_transcription` parameter to `true` and specify the index ID, the language of your video, and the URLs of your video and transcription files.

  <Tabs>
  <TabItem value="py" label="Python">

  Declare a dictionary named `data` and use it to store the required parameters:

  ```python
  data = {
          "provide_transcription": True
          "index_id": "<YOUR_INDEX_ID>",
          "language": "en",
          "video_url": "<YOUR_VIDEO_URL>",
          "transcription_url": "<YOUR_TRANSCRIPTION_URL">
  }
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  Declare a variable named `formData` of type `FormData` and use it to store all the required parameters:

  ```js
  let formData = new FormData()
  formData.append('provide_transcription', 'true')
  formData.append('index_id', '<YOUR_INDEX_ID>')
  formData.append('language', 'en')
  formData.append('video_url', '<YOUR_VIDEO_URL>')
  formData.append('transcription_url', '<YOUR_VIDEO_URL>')
  ```
  </TabItem>
  </Tabs>

3. Upload your video. Call the [tasks](/api-reference/indexes-tasks) endpoint and store the result in a variable named `response`:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  response = requests.post(INDEX_TASK_URL, headers=headers, data=data)
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  config = {
      method: 'post',
      url: INDEX_TASK_URL,
      headers: headers,
      data : formData
  }
  resp = await axios(config)
  response = await resp.data
  ```
  </TabItem>
  </Tabs>

4. <MonitorIndexingProcess />

  The output should look similar to the following one:

  ```output
  Status code: 200
  {'_id': '6299f0d815d644f81a22b5e7',
  'created_at': '2022-06-03T11:30:32.876Z',
  'estimated_time': '2022-06-03T11:39:41.62Z',
  'index_id': '6298d673f1090f1100476d4c',
  'metadata': {'duration': 531.998133,
                'filename': '1c20f123-10e8-43f4-b4a8-b08a73a3a32a',
                'height': 480,
                'width': 854},
  'status': 'ready',
  'type': 'index_task_info',
  'updated_at': '2022-06-03T11:40:07.038Z'}
  ```

  :::info **NOTE**
  For details about the possible statuses, see the [Indexes/Tasks](/api-reference/indexes-tasks) page.
  :::