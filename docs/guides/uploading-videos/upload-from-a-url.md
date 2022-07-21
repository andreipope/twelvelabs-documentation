---
title: Upload From a URL 
id: upload-from-a-url 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Understand from '../../shared/prerequisites-understand-page.md'
import ProgrammingLanguages from '../../shared/programming-languages-guides.md'
import VideoRequirements from '../../shared/video-requirements.md'
import Upload360pVideos from '../../shared/upload-360p-videos.md'
import DeclareIndexesEndpoint from '../../shared/declare-indexes-endpoint.md'
import MonitorIndexingProcess from '../../shared/monitor-indexing-process.md' 
import TaskIdStatusCodeResponse from '../../shared/task-id-status-code-response.md'


In this guide you'll learn how to upload a video file from a publicly accessible URL to the API service. The API service will download the file directly from the specified URL, so your application doesn't have to store the video locally and upload the bytes.

<ProgrammingLanguages />


## Prerequisites

- <VideoRequirements />
- Ensure that the URL of the video is publicly accessible.
- <Understand /> 
- You've already created an index. For details, see the [Create an Index](/api-reference/indexes#create-an-index) section.


## Recommendations

- < Upload360pVideos />

## Procedure

1. <DeclareIndexesEndpoint />

2. If you're using Python, declare a dictionary named `data` and use it to store the index ID, language, and the URL of your video. If you're using Node.js, declare a variable named `formData` of type `FormData` and use it to store the index ID, language, and the URL of your video:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  data = {
          "index_id": <YOUR_INDEX_ID>,
          "language": "en",
          "video_url": <YOUR_VIDEO_URL>,
  }
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  let formData = new FormData()
  formData.append('index_id', <YOUR_INDEX_ID>)
  formData.append('language', 'en')
  formData.append('video_url', <YOUR_VIDEO_URL>)
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

4. <TaskIdStatusCodeResponse /> 

  The output should look similar to the following one:
  ```json
  Status code: 200
  { _id: '6299f0d815d644f81a22b5e7',
    type: 'index_task_create',
    message: 'Succesfully requested indexing task' }
  ```
5. <MonitorIndexingProcess /> 

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

  :::info **NOTES**
  For details about the possible statuses, see the [Indexes/Tasks](/api-reference/indexes-tasks) page.
  :::
