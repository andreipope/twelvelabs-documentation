---
title: Upload From the Local File System 
id: upload-from-the-local-file-system 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Understand from '../../shared/prerequisites-understand-page.md'
import ProgrammingLanguages from '../../shared/programming-languages.md'
import VideoRequirements from '../../shared/video-requirements.md'
import Upload360pVideos from '../../shared/upload-360p-videos.md'
import DeclareIndexesEndpoint from '../../shared/declare-indexes-endpoint.md'
import MonitorIndexingProcess from '../../shared/monitor-indexing-process.md' 
import TaskIdStatusCodeResponse from '../../shared/task-id-status-code-response.md'


In this guide you'll learn how to upload a video file from the local file system to the API service.

< ProgrammingLanguages />

## Prerequisites

- <VideoRequirements />
- <Understand />
- You've already created an index. For details, see the Create an Index section. <!-- TODO: Add link -->

## Recommendations

- <Upload360pVideos />

## Procedure

1. < DeclareIndexesEndpoint /> 

2. Read your video file. Open a stream, making sure to replace the placeholders surrounded by `<>` with your values:

  <Tabs>
  <TabItem value="py" label="Python">

  ```
  python -m pip install requests pprint
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```
  npm install axios form-data
  ```
  </TabItem>
  </Tabs>

3. If you're using Python, store the index ID and the language of your video in a dictionary named `dat`a and the file to upload in an array named `file_param`. If you're using Node.js, store the index, the language of the video, and the file to upload in a variable named `formData` of type `FormData`:

  <Tabs>
  <TabItem value="py" label="Python">

  ```
  data = {
      "index_id": <YOUR_INDEX_ID>, 
      "language": "en"
  }
  file_param = [
      ("file", (file_name, file_stream, "application/octet-stream")),]let formData = new FormData()
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```
  let formData = new FormData()
  formData.append('INDEX_ID', <YOUR_INDEX_ID>)
  formData.append('language', 'en')
  formData.append('file', file_stream)
  ```
  </TabItem>
  </Tabs>
.
4. Upload your video. Call the **tasks endpoint** <!--TODO: Add link --> and store the result in a variable named `response`:

  <Tabs>
  <TabItem value="py" label="Python">

  ```
  response = requests.post(INDEXES_TASK_URL, headers=headers, data=data, files=file_param)
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```
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

5. <TaskIdStatusCodeResponse />
 
  The output should look similar to the following one:

  ```output
  Status code: 200
  {'_id': '626a229622c7851fcbe5c83b',
   'message': 'Succesfully requested indexing task',
   'type': 'index_task_create'}
  ```

6. <MonitorIndexingProcess /> 

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
  
  :::info **NOTE**
  For details about the possible statuses, see the **Indexes/Tasks** page. <!--TODO: Add link-->
  :::

## Related Topics

- **Indexes/Tasks** <!--TODO: Add link-->
