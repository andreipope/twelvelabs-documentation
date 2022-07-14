---
title: Single Search Option
id: single-search-option
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ProgrammingLanguages from '../../shared/programming-languages-guides.md'

This section shows how to perform searches by specifying a single search option.

<ProgrammingLanguages />

:::info **NOTE**
For a description of each field in the response, see the Search page.
:::

## Visual

The API service allows you to search by objects, actions, sound, movements, places, situational events, and a complex audio-visual text description. The following example searches for car accidents:

<Tabs>
<TabItem value="py" label="Python">

```py
SEARCH_URL = f"{API_URL}/search"
data = {
    "query": "car accident",
    "index_id": "<YOUR_INDEX_ID>",
    "search_options": ["visual"],
}
response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint (response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search`
const data = JSON.stringify(
    {
    'query': 'car accident',
    'index_id': '<YOUR_INDEX_ID>'
    'search_options': ['visual'],
})
const config = {
    method: 'post',
    url: SEARCH_URL,
    headers: headers,
    data: data
}
const resp = await axios(config)
const response = await resp.data
console.log(`Status code: ${resp.status}`)
console.log(response)  
```
</TabItem>
</Tabs>

The output should look similar to the following one:

```output
Status code: 200
{'data': [{'confidence': 'high',
           'end': 492,
           'metadata': [{'type': 'visual'}],
           'score': 91.02,
           'start': 486,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': 'medium',
           'end': 216,
           'metadata': [{'type': 'visual'}],
           'score': 75.88,
           'start': 210,
           'video_id': '626a3de4ba9f116e5ea92a38'},
 'page_info': {'limit_per_page': 10,
               'next_page_id': '8fda6c80-3132-4f3c-8d57-cd314823d429-1',
               'page_expired_at': '2022-04-28T07:28:38Z',
               'total_results': 14},
 'query': 'car accident',
 'search_options': ['visual'],
 'search_pool': {'index_id': '626a273122c7851fcbe5c842',
                 'total_count': 2,
                 'total_duration': 582},
 'type': 'search_create'}
 ```

## Conversation

The API service extracts a transcript from the video and performs an NLP analysis on the transcript. This allows you to find the exact point in your video where the specified word or phrase is mentioned. Note that you can perform both semantic searches (the API service assesses the meaning and context) and exact searches (the API service searches for exact matches of your search terms). To specify the type of search you want to perform, you can use the conversation_option parameter. If not specified, the default value is semantic. The following example performs a semantic search and returns the matches for your search term - "car accidents."

<Tabs>
<TabItem value="py" label="Python">

```py
SEARCH_URL = f"{API_URL}/search"
data = {
    "query": "car accidents",
    "index_id": "<YOUR_INDEX_ID>",
    "search_options": ["conversation"],
    "conversation_option": "semantic",
}
response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint (response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search`
const data = JSON.stringify(
    {
    'query': 'car accidents',
    'index_id': '<YOUR_INDEX_ID>'
    'search_options': ['conversation'],
    'conversation_option': 'semantic',
})
const config = {
    method: 'post',
    url: SEARCH_URL,
    headers: headers,
    data: data
}
const resp = await axios(config)
const response = await resp.data
console.log(`Status code: ${resp.status}`)
console.log(response) 
```
</TabItem>
</Tabs>


The output should look similar to the following one:


```output
Status code: 200
{'conversation_option': 'semantic',
 'data': [{'confidence': '',
           'end': 16.34,
           'metadata': [{'text': '. I think that is Lance stroll the safety '
                                 "car now comes out, That's a high speed "
                                 'crash.',
                         'type': 'conversation'}],
           'score': 87.68,
           'start': 8.09,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': '',
           'end': 386.06,
           'metadata': [{'text': "Let's show the class and that is a very big "
                                 'accident. A huge accident at the parabolic '
                                 'to Are you okay?',
                         'type': 'conversation'}],
           'score': 86.05,
           'start': 377.54,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': '',
           'end': 426.43,
           'metadata': [{'text': 'The safety car has gone, the lights gone '
                                 "green and there's a big crash at the back "
                                 'and that is the Alfa Romeo.',
                         'type': 'conversation'}],
           'score': 85.84,
           'start': 420.74,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': '',
           'end': 38.85,
           'metadata': [{'text': "That's a big impact Both ends of the car "
                                 "felt that one. I don't know if it was a "
                                 'puncture or a suspension failure.',
                         'type': 'conversation'}],
           'score': 83.87,
           'start': 31.23,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': '',
           'end': 360.79,
           'metadata': [{'text': 'Yeah, Joven Nazi just drops on the exit of '
                                 'the corner is kind of spinning off and I '
                                 'think Russell actually collects a bit of '
                                 'debris attire ripped the front end of the '
                                 'car and has to kind of park in the barrier '
                                 'frustrating wrong place wrong time.',
                         'type': 'conversation'}],
           'score': 83.13,
           'start': 348.94,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': '',
           'end': 214.13,
           'metadata': [{'text': '. He had no chance of getting out of that '
                                 "Vettel's got a broken front wing as well, at "
                                 'least half a dozen cars involved in this '
                                 "three, it's four indeed and the red Bull of "
                                 'the staff and definitely took a big hit in '
                                 'the gearbox and sent him into the gravel '
                                 "trap max Verstappen who's been showered with "
                                 'stones and he tries to get out of that '
                                 'gravel trap you get into this situation '
                                 'where you are in the middle of the pack and '
                                 "it's quite easy to get involved in the "
                                 'crash.',
                         'type': 'conversation'}],
           'score': 79.35,
           'start': 185.91,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': '',
           'end': 290.25,
           'metadata': [{'text': '. But yeah, I mean, it was just one of those '
                                 'things, someone had a very very big crash '
                                 "and it's Danic fiat in the Alpha, Towery and "
                                 "I hope he's okay because once again we see "
                                 'wheels coming loose.',
                         'type': 'conversation'}],
           'score': 76.65,
           'start': 273.15,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': '',
           'end': 121.45,
           'metadata': [{'text': 'Large stroll out of the race and upside '
                                 "down, it's going to be tired face to tire "
                                 'face coming out of the corner, relatively '
                                 'slow speed and the rollover hoops are pretty '
                                 'capable of sorting all that out.',
                         'type': 'conversation'}],
           'score': 74.76,
           'start': 109.74,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': '',
           'end': 81.06,
           'metadata': [{'text': 'Obviously the car slowed down a bit, but not '
                                 "by much because that's that's quite a hefty "
                                 'sideways whack into the Armco there and '
                                 'front and back.',
                         'type': 'conversation'}],
           'score': 74.43,
           'start': 72.84,
           'video_id': '626a3de4ba9f116e5ea92a38'},
          {'confidence': '',
           'end': 413.28,
           'metadata': [{'text': "Okay. He's lost the back end of the car "
                                 'under acceleration. The back end got away '
                                 'from him and he counter stared into the '
                                 'slide. I just loved the car.',
                         'type': 'conversation'}],
           'score': 72.92,
           'start': 403.34,
           'video_id': '626a3de4ba9f116e5ea92a38'}],
 'page_info': {'limit_per_page': 10,
               'next_page_id': 'c08e69fa-790e-46f7-bbd6-f391d625c20d-1',
               'page_expired_at': '2022-05-02T05:48:06Z',
               'total_results': 24},
 'query': 'car accident',
 'search_options': ['conversation'],
 'search_pool': {'index_id': '626a273122c7851fcbe5c842',
                 'total_count': 21,
                 'total_duration': 1153},
 'type': 'search_create'}
 ```

 ## Text in Video

 The API service performs a text recognition (OCR) of each frame. This allows you to search for text that appears in the video. The following example searches for text that matches "Alex Albon".

<Tabs>
<TabItem value="py" label="Python">

```py
SEARCH_URL = f"{API_URL}/search"
data = {
    "query": "Alex Albon",
    "index_id": "<YOUR_INDEX_ID>",
    "search_options": ["text_in_video"],
}
response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint (response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search`
const data = JSON.stringify(
    {
    'query': 'Alex Albon',
    'index_id': '<YOUR_INDEX_ID>'
    'search_options': ['text_in_video'],
})
const config = {
    method: 'post',
    url: SEARCH_URL,
    headers: headers,
    data: data
}
const resp = await axios(config)
const response = await resp.data
console.log(`Status code: ${resp.status}`)
console.log(response)
```
</TabItem>
</Tabs>


The output should look similar to the following one:

```output
Status code: 200
{'data': [{'confidence': 'high',
           'end': 238,
           'metadata': [{'text': 'ALEX ALBON', 'type': 'text_in_video'}],
           'score': 92.28,
           'start': 233,
           'video_id': '626a3de4ba9f116e5ea92a38'}],
 'page_info': {'limit_per_page': 10,
               'page_expired_at': '2022-04-29T06:03:34Z',
               'total_results': 1},
 'query': 'Alex Albon',
 'search_options': ['text_in_video'],
 'search_pool': {'index_id': '626a273122c7851fcbe5c842',
                 'total_count': 3,
                 'total_duration': 612},
 'type': 'search_create'}
 ```