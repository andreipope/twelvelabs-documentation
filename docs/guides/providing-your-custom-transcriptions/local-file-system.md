---
title: Providing Transcriptions From the Local File System
id: local-file-system
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

In this guide you'll learn how to upload a video and provide a transcription when both files reside on the local file system.

<ProgrammingLanguages />

## Prerequisites

- Your transcription must be in the SRT or VTT format.
- <VideoRequirements />
- <Understand />
- You've already created an index. For details, see the Create an Index section. <!--TODO: Add index.-->

## Recommendations

- <Upload360pVideos />

## Procedure

1. <DeclareTasksEndpoint />

2. Read your video file. Open a stream, making sure to replace the placeholders surrounded by `<>` with your values:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  video_file_path = "<YOUR_VIDEO_FILE_PATH>"
  video_file_name = "<YOUR_VIDEO_FILE_NAME>"
  video_file_stream = open(video_file_path, "rb")
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const video_file_path = '<YOUR_VIDEO_FILE_PATH>'
  const video_file_stream = fs.createReadStream(video_file_path)
  ```
  </TabItem>
  </Tabs>

3. Read your transcription file. Open a stream, making sure to replace the placeholders surrounded by `<>` with your values:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  transcription_file_path = "<YOUR_TRANSCRIPTION_FILE_PATH>"
  transcription_file_name = "<YOUR_TRANSCRIPTION_FILE_NAME>"
  transcription_file_stream = open(transcription_file_path, "rb")
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const transcription_file_path = '<YOUR_TRANSCRIPTION_FILE_PATH>'
  const transcription_file_stream = fs.createReadStream(transcription_file_path)
  ```
  </TabItem>
  </Tabs>

4. To provide a transcription file, you must set the `provide_transcription` parameter to `true` and specify the index ID, the language of your video, and the video and transcription files:

  <Tabs>
  <TabItem value="py" label="Python">
  
  Store the `provide_transcription` parameter, the index ID,  and the language of your video in a dictionary named `data`. Then, store the video and transcription files in an array named `file_param`:

  ```python
  data = {
    "provide_transcription": True
    "index_id": "<YOUR_INDEX_ID>",
    "language": "en",
  }
  file_param = [
      ("video_file", (video_file_name, video_file_stream, "application/octet-stream")),
      ("transcription_file", (transcription_file_name, transcription_file_stream, "application/octet-stream")),
  ]
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">
  
  Store all the required parameters in a variable named `formData` of type `FormData`:
  
  ```js
  let formData = new FormData()
  formData.append('provide_transcription', 'true')
  formData.append('INDEX_ID', '<YOUR_INDEX_ID>')
  formData.append('language', 'en')
  formData.append('video_file', video_file_stream)
  formData.append('transcription_file', transcription_file_stream)
  ```
  </TabItem>
  </Tabs>

5. Upload your video and transcription files. Call the `tasks endpoint` <!--TODO: Add link--> and store the result in a variable named `response`:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  response = requests.post(INDEX_TASK_URL, headers=headers, data=data, files=file_param)
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  config = {
        method: 'post',
        url: INDEX_TASK_URL,
        headers: headers,
        data : formData
  };
  resp = await axios(config)
  response = await resp.data
  ```
  </TabItem>
  </Tabs>

6. <TaskIdStatusCodeResponse />

  The output should look similar to the following one:

  ```output
  Status code: 200
  {'_id': '626a229622c7851fcbe5c83b',
  'message': 'Succesfully requested indexing task',
  'type': 'index_task_create'}
  ```

7. <MonitorIndexingProcess />

  The output should look similar to the following one:

  ```output
  Status code: 200
  {'_id': '626a3ddc22c7851fcbe5c844',
  'created_at': '2022-04-28T07:10:20.453Z',
  'estimated_time': '2022-04-28T07:22:08.885Z',
  'index_id': '626a273122c7851fcbe5c842',
  'metadata': {'duration': 552.92,
                'filename': 'car-accidents.mp4',
                'height': 720,
                'width': 1280},
  'status': 'ready',
  'type': 'index_task_info',
  'updated_at': '2022-04-28T07:22:09.16Z'}
  ```
  
  :::info **NOTE:**
  For details about the possible statuses, see the **Indexes/Tasks** page. <!--TODO: Add link-->
  :::

## Related Topics

- **Indexes/Tasks** <!-- TODO: Add link -->
