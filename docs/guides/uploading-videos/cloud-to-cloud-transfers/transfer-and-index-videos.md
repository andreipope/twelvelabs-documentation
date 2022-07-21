---
title: 3. Transfer and Index Videos 
id: transfer-and-index-videos 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import VideoRequirements from '../../../shared/video-requirements.md'
import Upload360pVideos from '../../../shared/upload-360p-videos.md'

This guide shows how to transfer the files from your AWS S3 bucket to Twelve Labs and index them.

:::info **NOTE**
The API service checks for duplicate files using hashes and will not upload the same video to the same index twice.
:::


## Prerequisites

- You already downloaded the list of files in your AWS S3 bucket.
- <VideoRequirements />


## Recommendations

- <Upload360pVideos />


## Procedure

1. Declare the [indexes/tasks/transfers](/api-reference/indexes-tasks-transfers) endpoint:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  INDEXES_TASKS_TRANSFERS_URL = f"{API_URL}/indexes/tasks/transfers"
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```bash
  const INDEXES_TASKS_TRANSFERS_URL = `${API_URL}/indexes/tasks/transfers`
  ```
  </TabItem>
  </Tabs>

2. Read your JSON file. Open a stream making sure to replace the placeholders surrounded by `<>` with your values:

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

3. If you're using Python, store the file to upload in an array named `file_param` and specify that you want to make a `multipart/form-data` request. If you're using Node.js, store the file to upload in a variable named `formData` of type `FormData`:

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

4. Upload the JSON file. Call the [indexes/tasks/transfers](/api-reference/indexes-tasks-transfers) endpoint, store the result in a variable named `response`, and print the status code and response:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  requests.post(INDEXES_TASKS_TRANSFERS_URL, headers=headers, files=file_param)
  print (f"Status code: {response.status_code}")
  pprint (response.json())
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  let config = {
      method: 'post',
      url: INDEXES_TASKS_TRANSFERS_URL,
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
  
  ```json
  Status code: 200
  {
      'message': 'Succesfully requested indexing task',
      'type': 'index_task_create'
  }
  ```

## Related Topics

- [ndexes/Tasks/Transfers](/api-reference/indexes-tasks-transfers)