---
id: quickstart
title: Quickstart
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import useBaseUrl from '@docusaurus/useBaseUrl';
import Understand from './shared/prerequisites-understand-page.md'
import ProgrammingLanguages from './shared/programming-languages.md'
import VideoRequirements from './shared/video-requirements.md'
import Upload360pVideos from './shared/upload-360p-videos.md'
import DeclareIndexesEndpoint from './shared/declare-indexes-endpoint.md'
import DeclareTasksEndpoint from './shared/declare-tasks-endpoint.md'
import MonitorIndexingProcess from './shared/monitor-indexing-process.md' 
import TaskIdStatusCodeResponse from './shared/task-id-status-code-response.md'

This guide demonstrates how to build a production-ready search service by using a three-step process:
- [Prerequisites](#prerequisites)
- [Recommendations](#recommendations)
- [Create an Index](#create-an-index)
- [Upload a Video](#upload-a-video)
- [Make a Search Request](#make-a-search-request)
- [Source Code](#source-code)
- [Related Topics](#related-topics)

<!--TODO: Add links-->
Note that each step is composed of a single API call.

<ProgrammingLanguages />

## Prerequisites

- A valid Twelve Labs account. To create an account, go to the [Get Started](https://api.twelvelabs.io/) page, select **Sign Up**, and follow the instructions.
- <Understand />
- <VideoRequirements />

## Recommendations

- <Upload360pVideos /> 
- To make calls to the API, you must include your secret key, and specify the URL of the API.
Twelve Labs recommends you use environment variables to pass configuration to your application. To retrieve your API key, go to the [Dashboard](https://api.twelvelabs.io/dashboard) page and select the copy button unde the **API Key** section:
  ![Dashboard - Select the Copy button](/img/dashboard-select-copy.png)
  Then, enter the following commands, replacing the placeholder surrounded by `<>` with your API key:
  ```bash
  export API_KEY=<YOUR_API_KEY>
  export API_URL=https://api.twelvelabs.io/v1
  ```

## Create an Index

1. In a new directory, install the required packages:

  <Tabs>
  <TabItem value="py" label="Python">

  ```bash
  python -m pip install requests pprint
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```bash
  npm install axios form-data
  ```
  </TabItem>
  </Tabs>

2. In a new source file, add the following statements to import the required packages and retrieve the values of the environment variables you've set in the previous section:
  
  <Tabs>
  <TabItem value="py" label="Python">

  ```py
  import requests
  import glob
  from pprint import pprint
  import os

  API_URL = os.getenv('API_URL')
  assert API_URL
  API_KEY = os.getenv('API_KEY')
  assert API_KEY
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  (async () => {
    const FormData = require('form-data')
    const axios = require('axios');
    const fs = require('fs')
    
    const API_URL = process.env.API_URL
    if (typeof API_URL === 'undefined') {
      console.log('API_URL is not defined.')
      process.exit(1)
    }
    const API_KEY = process.env.API_KEY
    if (typeof API_KEY === 'undefined') {
      console.log('API_KEY is not defined.')
      process.exit(1)
    }
  })()
  ```
  </TabItem>
  </Tabs>

3. Specify the name of your index. Make sure to replace the placeholder surrounded by `<>` with the name you want to use for your index:
 
  <Tabs>
  <TabItem value="py" label="Python">

  ```py
  INDEX_NAME = "<YOUR_INDEX_NAME>" # Use a descriptive name for your index 
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const INDEX_NAME = '<YOUR_INDEX_NAME>' // Use a descriptive name for your index 
  ```
  </TabItem>
  </Tabs>

4. <DeclareIndexesEndpoint />

5. Your API key is passed in the `headers` dictionary and the parameters for creating a new index are passed in the `data` dictionary::

  <Tabs>
  <TabItem value="py" label="Python">

  ```py {6,7} showLineNumbers
  headers = {
    "x-api-key": API_KEY
  }

  data = {
    "engine_id": "marengo",
    "index_options": ["visual", "conversation", "text_in_video"],
    "index_name": INDEX_NAME,
  }
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js {6,7} showLineNumbers
  const headers = {
    'x-api-key': API_KEY,
  }

  let data = JSON.stringify({
    "engine_id": "marengo",
    "index_options": ["visual", "conversation", "text_in_video"],
    "index_name": INDEX_NAME
  })
  ```
  </TabItem>
  </Tabs>

  Note the following about this code:
    - Line 6 specifies that the AI-powered search engine is `marengo`. For details about search engines, see the [Architecture](understand.md#architecture) section.
    - Line 7 specifies the indexing options. An indexing option specifies a source of information that the AI-powered search engine indexes and uses when performing searches. In this example, the API service will index `visual`, `conversation`, and `text_in_video` information. For more details, see the **Indexing Options** page. <!-- TODO: Add link -->

6. Create an index. Call the API by invoking the `indexes` endpoint <!--TODO: Add link --> and store the result in a variable named `response`:

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  response = requests.post(INDEXES_URL, headers=headers, json=data)
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  let config = {
      method: 'post',
      url: INDEXES_URL,
      headers: headers,
      data : data
  }

  let response = await resp.data
  ```
  </TabItem>
  </Tabs>
7. Store the ID of your index in a variable named `INDEX_ID` and print the status code and response:

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  INDEX_ID = response.json().get("_id")
  print (f"Status code: {response.status_code}")
  pprint (response.json())
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const INDEX_ID = response._id
  console.log(`Status code: ${resp.status}`)
  console.log(response)
  ```
  </TabItem>
  </Tabs>

  The output should look similar to the following one:
  ```
  Status code: 200
  {'_id': '626a186f22c7851fcbe5c838',
   'message': "Succesfully created index 'docs-testing' index",
   'type': 'index_create'}
  ```
  
## Upload a Video 

Once you've created an index, you can upload a video. When the video has finished uploading, Twelve Labs' fully-managed video search engine will automatically create a rich set of vectors that you can use to search through your video.

:::info **NOTES**
- Although this section demonstrates how to upload a file from the local file system, note that the API service allows you to upload a file from a URL or group multiple video uploading operations in a single API request using the cloud-to-cloud transfers feature. For instructions, see the Uploading Videos section. <!--TODO: Add link-->
- The API service allows you to provide your own custom transcription file. For instructions, see the Providing Your Custom Transcriptions section. <!--TODO: Add link -->
:::

1. <DeclareTasksEndpoint /> 
2. To read your video file, open a stream making sure to replace the placeholders surrounded by `<>` with your values:

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  file_name = "<FILE_NAME>" #Example: "test.mp4"
  file_path = "<FILE_PATH>" #Example: "/Downloads/test.mp4"
  file_stream = open(file_path,'rb')
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const file_path = '<FILE_PATH>' // Example: "/Downloads/test.mp4"
  const file_stream = fs.createReadStream(file_path)
  ```
  </TabItem>
  </Tabs>

3. If you're using Python, store the index ID and the language of your video in a dictionary named `data` and the file to upload in an array named `file_param`. If you're using Node.js, store the index, the language of the video, and the file to upload, in a variable named `formData` of type `FormData`:

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  data = {
    "index_id": INDEX_ID, 
    "language": "en"
  }
  file_param = [
    ('file', (file_name, file_stream, 'application/octet-stream')),]
  ```
  
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  let formData = new FormData()
  formData.append('INDEX_ID', INDEX_ID)
  formData.append('language', 'en')
  formData.append('file', file_stream)
  ```
  </TabItem>
  </Tabs>

4. Upload your video. Call the `tasks` <!--TODO: Add link--> endpoint and store the result in a variable named response:

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
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

5. <TaskIdStatusCodeResponse /> 

  The output should look similar to the following one:
  
  ```
  Status code: 200
  {'_id': '626a229622c7851fcbe5c83b',
   'message': 'Succesfully requested indexing task',
   'type': 'index_task_create'}
 ```

6. <MonitorIndexingProcess />
  The output should look similar to the following one:
  
  ``` {2,5}
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

  :::info **NOTES**
  Note the following about this example output:
    - Line 2 shows the ID of the indexing task
    - Line 5 shows the ID of your index
  :::

  For details about the possible statuses, see the `Indexes/Tasks` <!--TODO: Add link--> page.


## Make a Search Request

When the API service has finished indexing the video, it can be searched by using the `search` <!-- TODO: Add link--> endpoint.

1. Define the `search` endpoint:

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  SEARCH_URL = f"{API_URL}/search"
  ```
  
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const SEARCH_URL = `${API_URL}/search`
   ```
  </TabItem>
  </Tabs>
  
  
2. The query parameters are passed in the `data` dictionary. The following example searches for car accidents based on visual cues: 

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  data = {
      "query": "car accidents",
      "index_id": INDEX_ID,
      "search_options": ["visual"],
  }
  ```
  
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  data = JSON.stringify({
      "query": "car accidents",
      "index_id": INDEX_ID,
      "search_options": ["visual"],
      "operator": "and"
  })
   ```
  </TabItem>
  </Tabs>

  Note the following about this code:
    - `query`: Represents your search terms.
    - `index_id`: Use this field to specify the unique identifier of your index. Note that a search request retrieves results from all the videos in the specified index.
    - `search_options`: Use this field to specify the source of information that the AI-powered search engine uses when performing the search. The search options must be a subset of the indexing options provided when you created the index.
    
    Examples of using the `search_options` field: 
      - To perform a visual search: `["visual"]`.
      - To perform a conversational-context search based on transcription:`["conversation"]`
      - To search for text that appears on the screen: ``["text_in_video"]`
      - To combine visual and conversation:`["visual", "conversation"]`.
      - To combine visual and conversation: `["visual", "conversation"`].
      
      When you combine multiple search options, you can use the operator parameter to broaden or narrow your search.  For details and examples, see the **Multiple Search Options** <!--TODO: Add link--> page.

3. Call the `search` <!--TODO: Add link--> endpoint, passing it your query parameters:

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  response = requests.post(SEARCH_URL, headers=headers, json=data)
  ```
  
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  config = {
      method: 'post',
      url: SEARCH_URL,
      headers: headers,
      data: data
  }
  resp = await axios(config)
  response = await resp.data 
  ```
  </TabItem>
  </Tabs>

4. Print the status code and search results:

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  print (f"Status code: {response.status_code}")
  pprint (response.json())
  ```
  
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  console.log(`Status code: ${resp.status}`)
  console.log(response)
  ```
  </TabItem>
  </Tabs>

  The output should look similar to the following one:
  
  ```
  Status code: 200
  {'data': [{'confidence': 'high',
             'end': 492,
             'metadata': [{'type': 'visual'}],
             'score': 88.86,
             'start': 486,
             'video_id': '62b3ed5cd01d61be020682ed'},
            {'confidence': 'mid',
             'end': 216,
             'metadata': [{'type': 'visual'}],
             'score': 79.04,
             'start': 210,
             'video_id': '62b3ed5cd01d61be020682ed'},
            {'confidence': 'mid',
             'end': 180,
             'metadata': [{'type': 'visual'}],
             'score': 78.54,
             'start': 176,
             'video_id': '62b3ed5cd01d61be020682ed'},
            {'confidence': 'mid',
             'end': 382,
             'metadata': [{'type': 'visual'}],
             'score': 76.42,
             'start': 376,
             'video_id': '62b3ed5cd01d61be020682ed'},
            {'confidence': 'mid',
             'end': 348,
             'metadata': [{'type': 'visual'}],
             'score': 76.27,
             'start': 342,
             'video_id': '62b3ed5cd01d61be020682ed'},
            {'confidence': 'mid',
             'end': 504,
             'metadata': [{'type': 'visual'}],
             'score': 75.06,
             'start': 498,
             'video_id': '62b3ed5cd01d61be020682ed'},
            {'confidence': 'mid',
             'end': 430,
             'metadata': [{'type': 'visual'}],
             'score': 74.91,
             'start': 424,
             'video_id': '62b3ed5cd01d61be020682ed'},
            {'confidence': 'mid',
             'end': 188,
             'metadata': [{'type': 'visual'}],
             'score': 74.59,
             'start': 182,
             'video_id': '62b3ed5cd01d61be020682ed'},
            {'confidence': 'low',
             'end': 176,
             'metadata': [{'type': 'visual'}],
             'score': 72.72,
             'start': 174,
             'video_id': '62b3ed5cd01d61be020682ed'},
            {'confidence': 'low',
             'end': 218,
             'metadata': [{'type': 'visual'}],
             'score': 72.71,
             'start': 216,
             'video_id': '62b3ed5cd01d61be020682ed'}],
   'page_info': {'limit_per_page': 10,
                 'next_page_id': 'ede1afc7-79c6-4df9-854a-1afe3535ef0d-1',
                 'page_expired_at': '2022-06-24T14:11:22Z',
                 'total_results': 24},
   'query': 'car accidents',
   'search_options': ['visual'],
   'search_pool': {'index_id': '626a186f22c7851fcbe5c838',
                   'total_count': 1,
                   'total_duration': 1363},
   'type': 'search_create'}
  ```
  For more examples, see the **Performing Searches** <!--TODO: Add link--> page.


## Source Code

You can find the source code for this guide in the [twelvelabs-io/examples](https://github.com/twelvelabs-io/examples) GitHub repository.


## Related Topics

- **API Reference** <!-- TODO: Add link-->

