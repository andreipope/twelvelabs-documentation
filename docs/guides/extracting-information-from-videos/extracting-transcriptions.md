---
title: Extracting Transcriptions
id: transcriptions
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ProgrammingLanguages from '../../shared/programming-languages-guides.md'
import Understand from '../../shared/prerequisites-understand-page.md'

At a high level, extracting a transcription from a video involves the following steps:

- Upload and index a video. When you upload a video by calling the `indexes/tasks` <!--TODO: add link--> endpoint, the API service creates a video indexing task and returns its unique identifier. 
- Retrieve the unique identifier of your video vector. Once the API service finishes indexing your video, it stores all the information it needs to perform searches as video vectors. You can retrieve the unique identifier of the video vector by calling the `/indexes/tasks/:task-id` <!--TODO: Add link--> endpoint and passing it the unique identifier of your video indexing task.
- Retrieve the transcription. Use the `indexes/:index-id/videos/:video-id/transcription` <!--TODO: Add link--> endpoint passing it the unique identifiers of your index and video vector.

<ProgrammingLanguages />

## Prerequisites

- <Understand />
- You've already uploaded a video. The unique identifiers of your index and video indexing task are stored in two variables named `INDEX_ID` and `TASK_ID`. For instructions, see the **Uploading Videos** <!--TODO: Add link--> page.

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

## Extract Your Transcription

1. Construct the URL for extracting the transcription based on the `INDEX_ID` and `VIDEO_ID` variables:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  TRANSCRIPTIONS_URL = f"{API_URL}/indexes/{INDEX_ID}/videos/{VIDEO_ID}/transcription"
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const TRANSCRIPTIONS_URL = `${API_URL}/indexes/${INDEX_ID}/videos/${VIDEO_ID}/transcription`
  ```
  </TabItem>
  </Tabs>

2. Retrieve the transcription and print it out to the console:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  response = requests.get(TRANSCRIPTIONS_URL, headers=headers)
  print (f"Status code: {response.status_code}")
  pprint (response.json())
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  config = {
    method: 'get',
    url: TRANSCRIPTIONS_URL, 
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
  {'_id': '62aff6da154f59c87660ce9a',
  'data': [{'end': 71.08,
            'start': 2.64,
            'value': 'mhm Oh no no no no no no oh my God Mhm Get out he sees '
                      'it,'},
            {'end': 71.78, 'start': 71.09, 'value': ' he sees it,'},
            {'end': 77.46,
            'start': 71.79,
            'value': ' look at him oh my God did you get that on video?'},
            {'end': 80.15, 'start': 77.94, 'value': ' Yeah,'},
            {'end': 101.22, 'start': 95.14, 'value': ' I how are you?'},
            {'end': 104.65, 'start': 101.23, 'value': ' Here we go on two,'},
            {'end': 111.3,
            'start': 105.44,
            'value': ' three jesus christ almighty snakes,'},
            {'end': 116.81,
            'start': 111.31,
            'value': ' jesus christ I think we got a gar fish dude.'},
            {'end': 121.45, 'start': 119.54, 'value': ' Be careful what?'},
            {'end': 124.85, 'start': 123.04, 'value': ' Oh my God,'},
            {'end': 126.52,
            'start': 124.86,
            'value': " that's a big gator buddy,"},
            {'end': 129.76, 'start': 127.87, 'value': ' that is a big gator.'},
            {'end': 149.16, 'start': 141.74, 'value': ' Yeah who did you?'},
            {'end': 186.66, 'start': 177.74, 'value': ' Oh jesus christ,'},
            {'end': 188.66, 'start': 187.64, 'value': ' gotta be careful here.'},
            {'end': 211.56,
            'start': 201.74,
            'value': ' Yeah well that puts an end to my tarpon fishing.'},
            {'end': 279.86,
            'start': 215.64,
            'value': " Get back now when you're playing with lions it's "
                      'important to never show fear chuck.'},
            {'end': 287.05,
            'start': 280.94,
            'value': " Oh I'm so glad I was recording it."},
            {'end': 295.66,
            'start': 287.44,
            'value': ' Ah ha ha ha got like a big stick or something.'},
            {'end': 299.85, 'start': 299.04, 'value': ' Big stick,'},
            {'end': 302.81,
            'start': 301.54,
            'value': " it's heavy whatever it is."},
            {'end': 309.11, 'start': 306.55, 'value': ' Ah that is not a stick.'},
            {'end': 313.86,
            'start': 309.12,
            'value': " Oh my God that's not a stick at all."},
            {'end': 322.83, 'start': 316.34, 'value': ' Holy holy oh my Lord.'},
            {'end': 334.96,
            'start': 322.83,
            'value': ' Holy holy moly um well that changes things right?'},
            {'end': 339.15, 'start': 338.64, 'value': ' Hey,'},
            {'end': 349.05, 'start': 348.64, 'value': ' hey,'},
            {'end': 354.35, 'start': 349.44, 'value': " okay it's right."},
            {'end': 383.55,
            'start': 357.74,
            'value': ' An octopus dad Holy okay,'},
            {'end': 385.15, 'start': 384.04, 'value': " I'm not gonna bug you,"},
            {'end': 386.55, 'start': 385.74, 'value': " I'm going away,"},
            {'end': 388.92, 'start': 388.34, 'value': ' I promise,'},
            {'end': 389.86, 'start': 388.92, 'value': " I'm not gonna bug you,"},
            {'end': 391.44, 'start': 390.44, 'value': " I'm not gonna bug you,"},
            {'end': 392.25, 'start': 391.44, 'value': " I'm going away,"},
            {'end': 393.36, 'start': 392.45, 'value': " I'm going away,"},
            {'end': 394.46, 'start': 393.61, 'value': " I'm going away,"},
            {'end': 395.95, 'start': 395.14, 'value': " I'm going away,"},
            {'end': 397.66, 'start': 396.64, 'value': " I'm not gonna bug you,"},
            {'end': 400.6,
            'start': 398.24,
            'value': " I promise I'm going away,"},
            {'end': 401.56, 'start': 400.76, 'value': " I'm going away,"},
            {'end': 403.66, 'start': 402.77, 'value': " I'm going away,"},
            {'end': 405.53, 'start': 404.45, 'value': " I'm not gonna bug you,"},
            {'end': 415.17,
            'start': 405.74,
            'value': " I'm going away know what he could,"},
            {'end': 416.64,
            'start': 415.27,
            'value': ' he could bring her into that glass.'},
            {'end': 417.6, 'start': 416.65, 'value': ' Leave it alone,'},
            {'end': 418.66, 'start': 417.61, 'value': ' I have a gun,'},
            {'end': 425.96,
            'start': 423.3,
            'value': " I'm walking backwards on the trail back to the camp,"},
            {'end': 433.43,
            'start': 426.34,
            'value': " I'm walking down the trail and mom and two cubs so I'm "
                      'continually to walk backwards.'},
            {'end': 444.56,
            'start': 436.84,
            'value': ' The mom and the cubs keep following me and are walking '
                      'at least as fast as I am.'},
            {'end': 446.48, 'start': 445.71, 'value': ' People get it.'},
            {'end': 476.56, 'start': 476.14, 'value': ' Oh,'},
            {'end': 478.25, 'start': 477.74, 'value': ' oh,'},
            {'end': 483.06, 'start': 478.64, 'value': ' Oh you you you Oh,'},
            {'end': 490.25, 'start': 484.34, 'value': ' oh no,'},
            {'end': 491.66, 'start': 490.64, 'value': ' get the away,'},
            {'end': 492.75, 'start': 492.24, 'value': ' go away.'},
            {'end': 494.56, 'start': 493.94, 'value': ' Go away.'},
            {'end': 496.56, 'start': 495.94, 'value': ' No.'},
            {'end': 498.46, 'start': 498.14, 'value': ' Mhm.'},
            {'end': 501.26, 'start': 500.34, 'value': ' No,'},
            {'end': 503.76, 'start': 502.84, 'value': ' you dude.'},
            {'end': 505.55, 'start': 504.74, 'value': ' Holy,'},
            {'end': 508.16, 'start': 507.84, 'value': ' thank you.'},
            {'end': 510.14, 'start': 509.84, 'value': ' Yeah,'},
  'index_id': '629deb409ea24f052b971993',
  'type': 'video_index_meta_transcription'} 
  ```

  Note that you can use the `start` and `end` query parameters to specify the time range for which you want to retrieve the transcription. The following example URL retrieves the transcription for the first 10 seconds of the video:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  TRANSCRIPTIONS_URL = f"{API_URL}/indexes/{INDEX_ID}/videos/{VIDEO_ID}/transcription?start=300&end=320"
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const TRANSCRIPTIONS_URL = `${API_URL}/indexes/${INDEX_ID}/videos/${VIDEO_ID}/transcription?start=300&end=320`
  ```
  </TabItem>
  </Tabs>

## Related Topics

- Uploading Videos
- Indexes/Tasks
- Indexes/Videos

<!--TODO: Add links-->