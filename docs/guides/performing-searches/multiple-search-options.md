---
title: Multiple Search Options
id: multiple-search-options
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ProgrammingLanguages from '../../shared/programming-languages-guides.md'

This section provides examples demonstrating how to perform searches by specifying multiple search options. When you specify multiple search options, you can use the `operator` parameter to broaden or narrow your search. The following logical operators are supported:
- `OR`: The API service returns the results for which any search option matches.
- `AND`: The API service returns only the results for which all search options match.

The diagrams below explain the difference between specifying the `OR` and `AND` logical operators:

- Using a subset of the search options available:

  ![Using a subset of the search options available](/img/search-options-2.png)

- Using all the search options available:

  ![Using all the search options available](/img/search-options-3-v4.png)


:::info **NOTES**
- The `operator` parameter is optional. If omitted, the API service will perform a logical `OR` operation. For clarity, the examples in this section always specify the `operator` parameter.
- For a description of each field in the response, see the **Search** page. <!-- TODO: Add link-->
:::

<ProgrammingLanguages />


## Visual and Conversation


The following example combines `visual` and `conversation`, using the logical `OR` operator to specify that the API should return the results for which any search option matches:

<Tabs>
<TabItem value="py" label="Python">

```py
SEARCH_URL = f"{API_URL}/search"
data = {
    "query": "car accident",
    "index_id": "<YOUR_INDEX_ID>",
    "search_options": ["visual", "conversation"],
    "operator": "or"
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
    'search_options': ['visual', 'conversation'],
    'operator': 'or'
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
 'data': [{'confidence': 'high',
           'end': 492,
           'metadata': [{'type': 'visual'}],
           'score': 88.34,
           'start': 486,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'high',
           'end': 506,
           'metadata': [{'type': 'visual'},
                        {'text': '. And unsurprisingly that is a red flag out '
                                 'of the car, roman Grosjean, which is just '
                                 'the best news that we all want to hear at '
                                 'the moment.',
                         'type': 'conversation'}],
           'score': 84.9,
           'start': 496,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'high',
           'end': 348,
           'metadata': [{'type': 'visual'}],
           'score': 83.24,
           'start': 342,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'mid',
           'end': 361.18,
           'metadata': [{'text': 'Yeah, joven Asi just drops on the exit of '
                                 'the corner is kind of spinning off and I '
                                 'think Russell actually collects a bit of '
                                 'debris attire ripped the front end of the '
                                 'car and has to kind of park in the barrier '
                                 'frustrating wrong place wrong time '
                                 'obviously.',
                         'type': 'conversation'}],
           'score': 81.67,
           'start': 348.85,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'mid',
           'end': 368,
           'metadata': [{'type': 'visual'}],
           'score': 81.06,
           'start': 364,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'mid',
           'end': 426.43,
           'metadata': [{'text': 'The safety car has gone, the lights gone '
                                 "green and there's a big crash at the back "
                                 'and that is the Alfa Romeo.',
                         'type': 'conversation'}],
           'score': 80.42,
           'start': 420.74,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'mid',
           'end': 12.96,
           'metadata': [{'text': "someone's had an off and into the gravel, "
                                 'they go as the dust clears. I think that is '
                                 'Lance stroll the safety car now comes out.',
                         'type': 'conversation'},
                        {'type': 'visual'}],
           'score': 80.31,
           'start': 3.54,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'mid',
           'end': 216,
           'metadata': [{'type': 'visual'}],
           'score': 80.13,
           'start': 210,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'mid',
           'end': 381.83,
           'metadata': [{'text': '. And I went to the left to avoid his car '
                                 'and then the wheel just came from nowhere '
                                 'was pushing just on the limit when you are '
                                 'always on the limit sometimes will happen, '
                                 'show the class and that is a very big '
                                 'accident. A',
                         'type': 'conversation'}],
           'score': 78.96,
           'start': 361.18,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'mid',
           'end': 38.85,
           'metadata': [{'text': "That's a big impact both ends of the car "
                                 "felt that one. I don't know if it was a "
                                 'puncture or a suspension failure.',
                         'type': 'conversation'}],
           'score': 78.95,
           'start': 31.23,
           'video_id': '62b3ed5cd01d61be020682ed'}],
 'page_info': {'limit_per_page': 10,
               'next_page_id': '0efe64b3-a44d-4a9c-97a5-637524d8d9e6-1',
               'page_expired_at': '2022-06-23T04:56:53Z',
               'total_results': 66},
 'query': 'car accident',
 'search_options': ['visual', 'conversation'],
 'search_pool': {'index_id': '62b3ec6c5bf1be7a70989daf',
                 'total_count': 2,
                 'total_duration': 1363},
 'type': 'search_create'}
```


The following example combines visual andconversation, using the logical `AND` operator to specify that the API should return only the results for which all search options match:


<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search"
data = {
    "query": "car accident",
    "index_id": "<YOUR_INDEX_ID>",
    "search_options": ["visual", "conversation"],
    "operator": "and"
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
    'search_options': ['visual', 'conversation'],
    'operator': 'and'
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
 'data': [{'confidence': 'high',
           'end': 506,
           'metadata': [{'type': 'visual'},
                        {'text': '. And unsurprisingly that is a red flag out '
                                 'of the car, roman Grosjean, which is just '
                                 'the best news that we all want to hear at '
                                 'the moment.',
                         'type': 'conversation'}],
           'score': 84.9,
           'start': 496,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'mid',
           'end': 12.96,
           'metadata': [{'text': "someone's had an off and into the gravel, "
                                 'they go as the dust clears. I think that is '
                                 'Lance stroll the safety car now comes out.',
                         'type': 'conversation'},
                        {'type': 'visual'}],
           'score': 80.31,
           'start': 3.54,
           'video_id': '62b3ed5cd01d61be020682ed'},
          {'confidence': 'mid',
           'end': 515.56,
           'metadata': [{'text': 'No wonder the fuel came out of it. I said '
                                 'the fuel was in the middle of the car.',
                         'type': 'conversation'},
                        {'type': 'visual'}],
           'score': 74.87,
           'start': 510.51,
           'video_id': '62b3ed5cd01d61be020682ed'}],
 'page_info': {'limit_per_page': 10,
               'page_expired_at': '2022-06-23T04:57:09Z',
               'total_results': 3},
 'query': 'car accident',
 'search_options': ['visual', 'conversation'],
 'search_pool': {'index_id': '62b3ec6c5bf1be7a70989daf',
                 'total_count': 2,
                 'total_duration': 1363},
 'type': 'search_create'}
 ```

## Conversation and Text in Video

The following example combines `conversation` and `text_in_video`, using the logical `OR` operator to specify that the API should return the results for which any search option matches:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search"
data = {
    "query": "goal",
    "index_id": "<YOUR_INDEX_ID>",
    "search_options": ["conversation", "text_in_video"],
    "operator": "or"
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
    'query': 'goal',
    'index_id': '<YOUR_INDEX_ID>'
    'search_options': ['conversation', 'text_in_video'],
    'operator': 'or'
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
 'data': [{'confidence': 'high',
           'end': 489.06,
           'metadata': [{'text': "We don't care about the goalkeeper who he is "
                                 'away from 234. Wonderful, wonderful, '
                                 'wonderful. How good is he? A near '
                                 'supernatural goal from Lionel messi. He is '
                                 'just brilliant.',
                         'type': 'conversation'},
                        {'text': '22 - WONDER GOAL AGAINST BIGGEST COUNTRY '
                                 'RIVAL',
                         'type': 'text_in_video'}],
           'score': 96.26,
           'start': 469.58,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 67,
           'metadata': [{'text': "Iniesta's winning goal at 2010 World Cup "
                                 'final',
                         'type': 'text_in_video'}],
           'score': 92.28,
           'start': 59,
           'video_id': '62b3ee3ad01d61be020682f0'},
          {'confidence': 'high',
           'end': 79,
           'metadata': [{'text': 'Trezeguet golden goal at 2000 Euro final',
                         'type': 'text_in_video'}],
           'score': 92.28,
           'start': 72,
           'video_id': '62b3ee3ad01d61be020682f0'},
          {'confidence': 'high',
           'end': 195,
           'metadata': [{'text': '11 - GOLDEN TOUCH, GOLDEN GOAL, GOLDEN '
                                 'PLAYER',
                         'type': 'text_in_video'}],
           'score': 92.28,
           'start': 183,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 264,
           'metadata': [{'text': 'Götze scores the winning goal for Germany in '
                                 'the 113th minute in 2014 World Cup final',
                         'type': 'text_in_video'}],
           'score': 92.28,
           'start': 254,
           'video_id': '62b3ee3ad01d61be020682f0'},
          {'confidence': 'high',
           'end': 429,
           'metadata': [{'text': 'Maradona scores the "Goal of the Century" vs '
                                 'England in the 1986 World Cup',
                         'type': 'text_in_video'}],
           'score': 92.28,
           'start': 428,
           'video_id': '62b3ee3ad01d61be020682f0'},
          {'confidence': 'high',
           'end': 433,
           'metadata': [{'text': 'Messi scores a goal similar to the '
                                 'Maradona\'s "Goal of the Century" ( vs '
                                 'Getafe in 2007)',
                         'type': 'text_in_video'}],
           'score': 92.28,
           'start': 430,
           'video_id': '62b3ee3ad01d61be020682f0'},
          {'confidence': 'high',
           'end': 436,
           'metadata': [{'text': 'Maradona scores the "Goal of the Century" vs '
                                 'England in the 1986 World Cup',
                         'type': 'text_in_video'}],
           'score': 92.28,
           'start': 434,
           'video_id': '62b3ee3ad01d61be020682f0'},
          {'confidence': 'high',
           'end': 489,
           'metadata': [{'text': '22 - WONDER GOAL AGAINST BIGGEST COUNTRY '
                                 'RIVAL',
                         'type': 'text_in_video'}],
           'score': 92.28,
           'start': 436,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 447,
           'metadata': [{'text': 'Messi scores a goal similar to the '
                                 'Maradona\'s "Goal of the Century" ( vs '
                                 'Getafe in 2007)',
                         'type': 'text_in_video'}],
           'score': 92.28,
           'start': 437,
           'video_id': '62b3ee3ad01d61be020682f0'}],
 'page_info': {'limit_per_page': 10,
               'next_page_id': '2871fe52-c762-456a-b53a-990982fa7925-1',
               'page_expired_at': '2022-06-23T05:01:15Z',
               'total_results': 26},
 'query': 'goal',
 'search_options': ['conversation', 'text_in_video'],
 'search_pool': {'index_id': '62b3ed745bf1be7a70989db4',
                 'total_count': 6,
                 'total_duration': 3971},
 'type': 'search_create'}
```

The following example combines `conversation` and `text_in_video`, using the logical `AND` operator to specify that the API should return only the results for which all search options match:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search"
data = {
    "query": "goal",
    "index_id": "<YOUR_INDEX_ID>",
    "search_options": ["conversation", "text_in_video"],
    "operator": "and"
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
    'query': 'goal',
    'index_id': '<YOUR_INDEX_ID>'
    'search_options': ['conversation', 'text_in_video'],
    'operator': 'and'
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
 'data': [{'confidence': 'high',
           'end': 489.06,
           'metadata': [{'text': "We don't care about the goalkeeper who he is "
                                 'away from 234. Wonderful, wonderful, '
                                 'wonderful. How good is he? A near '
                                 'supernatural goal from Lionel messi. He is '
                                 'just brilliant.',
                         'type': 'conversation'},
                        {'text': '22 - WONDER GOAL AGAINST BIGGEST COUNTRY '
                                 'RIVAL',
                         'type': 'text_in_video'}],
           'score': 96.26,
           'start': 469.58,
           'video_id': '62b3ee6cd01d61be020682f1'}],
 'page_info': {'limit_per_page': 10,
               'page_expired_at': '2022-06-23T05:01:26Z',
               'total_results': 1},
 'query': 'goal',
 'search_options': ['conversation', 'text_in_video'],
 'search_pool': {'index_id': '62b3ed745bf1be7a70989db4',
                 'total_count': 6,
                 'total_duration': 3971},
 'type': 'search_create'}
```

## Conversation, Text in Video, and Visual

The following example combines `conversation`, `text_in_video`, and `visual`, using the logical `OR` operator to specify that the API should return the results for which any search option matches:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search"
data = {
    "query": "goal",
    "index_id": "<YOUR_INDEX_ID>",
    "search_options": ["conversation", "text_in_video", "visual"],
    "operator": "or"
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
    'query': 'goal',
    'index_id': '<YOUR_INDEX_ID>'
    'search_options': ['conversation', 'text_in_video', 'visual'],
    'operator': 'or'
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
 'data': [{'confidence': 'high',
           'end': 482,
           'metadata': [{'type': 'visual'},
                        {'text': '22 - WONDER GOAL AGAINST BIGGEST COUNTRY '
                                 'RIVAL',
                         'type': 'text_in_video'},
                        {'text': "We don't care about the goalkeeper who he is "
                                 'away from 234. Wonderful, wonderful, '
                                 'wonderful. How good is he? A near '
                                 'supernatural goal from Lionel messi. He is '
                                 'just brilliant.',
                         'type': 'conversation'}],
           'score': 100.46,
           'start': 470,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 490,
           'metadata': [{'type': 'visual'},
                        {'text': '22 - WONDER GOAL AGAINST BIGGEST COUNTRY '
                                 'RIVAL',
                         'type': 'text_in_video'}],
           'score': 96.84,
           'start': 484,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 447,
           'metadata': [{'text': 'Messi scores a goal similar to the '
                                 'Maradona\'s "Goal of the Century" ( vs '
                                 'Getafe in 2007)',
                         'type': 'text_in_video'},
                        {'type': 'visual'}],
           'score': 96.8,
           'start': 437,
           'video_id': '62b3ee3ad01d61be020682f0'},
          {'confidence': 'high',
           'end': 458,
           'metadata': [{'type': 'visual'},
                        {'text': '22 - WONDER GOAL AGAINST BIGGEST COUNTRY '
                                 'RIVAL',
                         'type': 'text_in_video'}],
           'score': 96.79,
           'start': 448,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 595,
           'metadata': [{'text': '29 - JUST ANOTHER WONDER GOAL',
                         'type': 'text_in_video'},
                        {'type': 'visual'}],
           'score': 96.78,
           'start': 586,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 442,
           'metadata': [{'type': 'visual'},
                        {'text': '22 - WONDER GOAL AGAINST BIGGEST COUNTRY '
                                 'RIVAL',
                         'type': 'text_in_video'}],
           'score': 96.76,
           'start': 434,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 470,
           'metadata': [{'type': 'visual'},
                        {'text': '22 - WONDER GOAL AGAINST BIGGEST COUNTRY '
                                 'RIVAL',
                         'type': 'text_in_video'}],
           'score': 96.74,
           'start': 466,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 195,
           'metadata': [{'text': '11 - GOLDEN TOUCH, GOLDEN GOAL, GOLDEN '
                                 'PLAYER',
                         'type': 'text_in_video'},
                        {'type': 'visual'}],
           'score': 96.71,
           'start': 183,
           'video_id': '62b3ee6cd01d61be020682f1'},
          {'confidence': 'high',
           'end': 67,
           'metadata': [{'text': "Iniesta's winning goal at 2010 World Cup "
                                 'final',
                         'type': 'text_in_video'},
                        {'type': 'visual'}],
           'score': 96.7,
           'start': 59,
           'video_id': '62b3ee3ad01d61be020682f0'},
          {'confidence': 'high',
           'end': 258,
           'metadata': [{'type': 'visual'},
                        {'text': 'Götze scores the winning goal for Germany in '
                                 'the 113th minute in 2014 World Cup final',
                         'type': 'text_in_video'}],
           'score': 96.7,
           'start': 252,
           'video_id': '62b3ee3ad01d61be020682f0'}],
 'page_info': {'limit_per_page': 10,
               'next_page_id': 'bfc92129-7ce9-4764-92dc-a8b40b6f2c57-1',
               'page_expired_at': '2022-06-23T05:03:43Z',
               'total_results': 650},
 'query': 'goal',
 'search_options': ['conversation', 'text_in_video', 'visual'],
 'search_pool': {'index_id': '62b3ed745bf1be7a70989db4',
                 'total_count': 6,
                 'total_duration': 3971},
 'type': 'search_create'}
```

The following example combines `conversation`, `text_in_video`, and `visual`, using the logical `AND` operator to specify that the API should return only the results for which all search options match:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search"
data = {
    "query": "goal",
    "index_id": "<YOUR_INDEX_ID>",
    "search_options": ["conversation", "text_in_video", "visual"],
    "operator": "and"
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
    'query': 'goal',
    'index_id': '<YOUR_INDEX_ID>'
    'search_options': ['conversation', 'text_in_video', 'visual'],
    'operator': 'and'
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
200
{'conversation_option': 'semantic',
 'data': [{'confidence': 'high',
           'end': 482,
           'metadata': [{'type': 'visual'},
                        {'text': "We don't care about the goalkeeper who he is "
                                 'away from 234. Wonderful, wonderful, '
                                 'wonderful. How good is he? A near '
                                 'supernatural goal from Lionel messi. He is '
                                 'just brilliant.',
                         'type': 'conversation'},
                        {'text': '22 - WONDER GOAL AGAINST BIGGEST COUNTRY '
                                 'RIVAL',
                         'type': 'text_in_video'}],
           'score': 100.46,
           'start': 470,
           'video_id': '62b3ee6cd01d61be020682f1'}],
 'page_info': {'limit_per_page': 10,
               'page_expired_at': '2022-06-23T05:03:32Z',
               'total_results': 1},
 'query': 'goal',
 'search_options': ['conversation', 'text_in_video', 'visual'],
 'search_pool': {'index_id': '62b3ed745bf1be7a70989db4',
                 'total_count': 6,
                 'total_duration': 3971},
 'type': 'search_create'}
```