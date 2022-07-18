---
title: Extracting Text in Video (OCR)
id: text-in-video
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ProgrammingLanguages from '../../shared/programming-languages-guides.md'
import Understand from '../../shared/prerequisites-understand-page.md'

At a high level, extracting text from a video (OCR) involves the following steps:

- Upload and index a video. When you upload a video by calling the `indexes/tasks` <!--TODO: Add link--> endpoint, the API service creates a video indexing task and returns its unique identifier. 
- Retrieve the unique identifier of your video vector. Once the API service finishes indexing your video, it stores all the information it needs to perform searches as video vectors. You can retrieve the unique identifier of the video vector by calling the `/indexes/tasks/:task-id` <!--TODO: Add link--> endpoint and passing it the unique identifier of your video indexing task.
- Extract the text that appears in your video. Use the `indexes/:index-id/videos/:video-id/text-in-video` <!--TODO: Add link--> endpoint passing it the unique identifiers of your index and video vector.

<ProgrammingLanguages />

## Prerequisites

- <Understand />
- You've already uploaded a video. The unique identifiers of your index and video indexing task are stored in two variables named `INDEX_ID` and `TASK_ID`. For instructions, see the **Uploading Videos** page <!--TODO: Add link-->.

## Retrieve the Unique Identifier of Your Video Vector

1. Construct the URL for retrieving the unique identifier of your video vector based on the `TASK_ID` variable:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  VIDEO_VECTOR_ID_URL = f"{API_URL}/indexes/tasks/{TASK_ID}/video-id"
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const VIDEO_VECTOR_ID_URL = `${API_URL}/indexes/tasks/${TASK_ID}/video-id`
  ```
  </TabItem>
  </Tabs>

2. Retrieve the unique identifier of your video vector and store it in a variable named `VIDEO_ID`:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  response = requests.get(VIDEO_VECTOR_ID_URL, headers=headers)
  VIDEO_ID = response.json().get("_id")
  print (f"Status code: {response.status_code}")
  pprint (response.json())
  print(f"Task ID {TASK_ID} -> Video ID {VIDEO_ID}")
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  let config = {
    method: 'get',
    url: VIDEO_VECTOR_ID_URL,
    headers: headers,
  }
  resp = await axios(config)
  response = await resp.data
  const VIDEO_ID = response._id
  console.log(`Status code: ${resp.status}`)
  console.log(response)
  console.log(`Task ID ${TASK_ID} -> Video ID ${VIDEO_ID}`)
  ```
  </TabItem>
  </Tabs>

## Retrieve Text Recognized in a Video

1. Construct the URL for retrieving the text recognized in your video based on the `INDEX_ID` and `VIDEO_ID` variables:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  TEXT_IN_VIDEO_URL = f"{API_URL}/indexes/{INDEX_ID}/videos/{VIDEO_ID}/text-in-video
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const TEXT_IN_VIDEO_URL = `${API_URL}/indexes/${INDEX_ID}/videos/${VIDEO_ID}/text-in-video
  ```
  </TabItem>
  </Tabs>

2. Retrieve the text and print it out to the console:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  response = requests.get(TEXT_IN_VIDEO_URL, headers=headers)
  print (f"Status code: {response.status_code}")
  pprint (response.json())
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  config = {
    method: 'get',
    url: TEXT_IN_VIDEO_URL, 
    headers: headers,
  }
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
{'_id': '62aeb771154f59c87660ce91',
 'data': [{'end': 44, 'start': 43, 'value': 'THE DUCK GOT IT'},
          {'end': 50, 'start': 49, 'value': 'FA'},
          {'end': 61, 'start': 58, 'value': '*TOURIST WAS UNHARMED'},
          {'end': 65, 'start': 64, 'value': 'ОН NO NO NO NO NO'},
          {'end': 67, 'start': 66, 'value': 'ОН MY GOD'},
          {'end': 70, 'start': 69, 'value': 'GET OUT!'},
          {'end': 72,
           'start': 71,
           'value': 'НЕ SEES IT. НЕ SEES IT. LOOK AT HIM.'},
          {'end': 73, 'start': 72, 'value': '7'},
          {'end': 74, 'start': 73, 'value': 'ОН MY GOD'},
          {'end': 77,
           'start': 76,
           'value': 'ОН MY GOD. DID YOU GET THAT ON VIDEO?'},
          {'end': 79, 'start': 78, 'value': 'YEAH'},
          {'end': 102, 'start': 101, 'value': 'ALRIGHTY HERE WE GO'},
          {'end': 107, 'start': 106, 'value': 'THREE!'},
          {'end': 110, 'start': 109, 'value': 'JESUS CHRIST ALMIGHTY'},
          {'end': 117, 'start': 116, 'value': 'I THINK WE GOT A CRAWFISH DUDE'},
          {'end': 121, 'start': 120, 'value': 'BE CAREFUL EVAN'},
          {'end': 125, 'start': 124, 'value': 'ОН MY GOD'},
          {'end': 126, 'start': 125, 'value': "THAT'S A BIG A** GATOR BUDDY"},
          {'end': 129, 'start': 128, 'value': 'THAT IS A BIG GATOR'},
          {'end': 187, 'start': 186, 'value': 'ОН JESUS CHRIST'},
          {'end': 189, 'start': 188, 'value': 'GOTTA BE CAREFUL HERE'},
          {'end': 212,
           'start': 209,
           'value': 'WELL THAT PUTS AN END TO MY TARPING FISHING'},
          {'end': 217, 'start': 216, 'value': 'GET BACK'},
          {'end': 235, 'start': 234, 'value': 'NOW WHEN YOU PLAY WITH LIONS'},
          {'end': 238,
           'start': 236,
           'value': 'IT IS IMPORTANT TO NEVER SHOW FEAR'},
          {'end': 287,
           'start': 284,
           'value': 'I AM SO GLAD I WAS RECORDING THAT'},
          {'end': 295,
           'start': 294,
           'value': 'GOT LIKE A BIG STICK OR SOMETHING'},
          {'end': 300, 'start': 299, 'value': 'BIG STICK'},
          {'end': 303, 'start': 302, 'value': "IT'S HEAVY WHATEVER IT IS"},
          {'end': 309, 'start': 308, 'value': 'THAT IS NOT A STICK'},
          {'end': 311, 'start': 310, 'value': 'ОН MY GOD'},
          {'end': 314, 'start': 312, 'value': "THAT'S NOT A STICK AT ALL"},
          {'end': 325, 'start': 322, 'value': 'ОН MY LORD. HOLY...HOLY MOLY.'},
          {'end': 331, 'start': 328, 'value': 'UM...WELL THAT CHANGES THINGS'},
 'index_id': '629deb409ea24f052b971993',
 'type': 'video_index_meta_text_in_video'}
  ```

  Note that you can use the start and end query parameters to specify the time range for which you want to retrieve the text. The following example URL retrieves the text for the first 10 seconds of the video:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  TEXT_IN_VIDEO_URL = f"{API_URL}/indexes/{INDEX_ID}/videos/{VIDEO_ID}/text-in-video?start=0&end=10"
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const TEXT_IN_VIDEO_URL = `${API_URL}/indexes/${INDEX_ID}/videos/${VIDEO_ID}/text-in-video?start=0&end=10`
  ```
  </TabItem>
  </Tabs>

## Related Topics

- Uploading Videos
- Indexes/Tasks
- Indexes/Videos

<!--TODO: Add links-->

