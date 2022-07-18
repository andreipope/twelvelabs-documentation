---
title: Filter Search Results Based on Metadata
id: metadata
slug: /concepts/filtering/metadata
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ProgrammingLanguages from '../../shared/programming-languages-guides.md'

When you perform a search, the API service returns all the relevant matches. Filtering narrows the scope of your query. To filter your search results, add the `filter` parameter to the body of your request.

The filter parameter contains the following fields:
- `id`: An array of strings that restricts your search results based on the specified video IDs.
- `duration`: A numeric field that restricts your search results based on duration, expressed in seconds.
-`width`: A numeric field that restricts your search results based on width.
- `height`: A numeric field that restricts your search results based on height.
- `size`: A numeric field that restricts your search results based on size, expressed in bytes.

To indicate the relationship between a field and its value, you can use the exact match or comparison operators.

## Exact Match Operator

The exact match operator matches only the results that equal the value you specify. The syntax is as follows: `<field>: <value>`.

## Comparison Operators

Use the comparison operators (`lte` and `gte`) to match based on the arithmetic comparison. The syntax is as follows: `<field>:{"gte": <value>, "lte": <value}`.

## Filter Composition

You can filter on multiple fields by adding the fields you want to filter on to the filter query parameter as shown in the [Filter on Size, Width, and Height](#filter-on-size-width-and-height) section below.

## Examples

The examples in this section assume you're familiar with the concepts that are described in the [Quickstart](/docs/quickstart.md) section.

<ProgrammingLanguages />

### Filter on a Specific Video ID

The following example code uses the `id` field of the `filter` query parameter to filter on a specific video ID:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search/"

data = {
  "query": "bear",
  "index_id": INDEX_ID,
  "search_options": ["conversation"],
  "filter": {
    "id": ["629deb6ff05c91527bc5c1c9"]
  }
}

response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search/`

const data = JSON.stringify(
    {
    'query': 'bear',
    'index_id': INDEX_ID,
    'search_options': ['conversation'],
    'filter': {
    'id': ['629deb6ff05c91527bc5c1c9']
    }
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
 'data': [{'confidence': 'low',
           'end': 433.42,
           'metadata': [{'text': "Leave it alone, I have a gun, I'm walking "
                                 "backwards on the trail back to the camp, I'm "
                                 'walking down the trail and mom and two cubs '
                                 'so I am continually to walk backwards.',
                         'type': 'conversation'}],
           'score': 72.95,
           'start': 416.65,
           'video_id': '629deb6ff05c91527bc5c1c9'},
          {'confidence': 'low',
           'end': 188.66,
           'metadata': [{'text': "Oh my God, that's a big gator buddy. That is "
                                 'a big gator. Yeah, who did you? Oh, oh, '
                                 'jesus christ, You gotta be careful here.',
                         'type': 'conversation'}],
           'score': 69.96,
           'start': 123.04,
           'video_id': '629deb6ff05c91527bc5c1c9'},
          {'confidence': 'low',
           'end': 334.96,
           'metadata': [{'text': " Oh, I'm so glad I was recording it. Ah ha "
                                 'ha ha ha got like a big stick or something, '
                                 "big stick, it's heavy, whatever it is. Ah "
                                 "that is not a stick. Oh, oh my God, that's "
                                 'not a stick at all. Holy holy oh my Lord. '
                                 'Holy, holy moly um well that changes things. '
                                 'Right?',
                         'type': 'conversation'}],
           'score': 69.48,
           'start': 280.94,
           'video_id': '629deb6ff05c91527bc5c1c9'},
          {'confidence': 'low',
           'end': 279.86,
           'metadata': [{'text': 'Mhm Well that puts an end to my tarpon '
                                 "fishing, get back now when you're playing "
                                 "with lions, it's important to never show "
                                 'fear chuck.',
                         'type': 'conversation'}],
           'score': 68.81,
           'start': 201.74,
           'video_id': '629deb6ff05c91527bc5c1c9'},
          {'confidence': 'low',
           'end': 490.25,
           'metadata': [{'text': 'The mom and the cubs keep following me and '
                                 'or walking at least as fast as I am. People '
                                 'get it. Oh, you, you, you, oh, oh no!',
                         'type': 'conversation'}],
           'score': 68.74,
           'start': 436.88,
           'video_id': '629deb6ff05c91527bc5c1c9'}],
 'page_info': {'limit_per_page': 10,
               'page_expired_at': '2022-06-07T04:14:51Z',
               'total_results': 5},
 'query': 'bear',
 'search_options': ['conversation'],
 'search_pool': {'index_id': '629deb409ea24f052b971993',
                 'total_count': 3,
                 'total_duration': 2198},
 'type': 'search_create'}
```

Note that this query returns only the results found in the specified video ID.

## Filter on Multiple Video IDs

The following example code uses the `id` field of the `filter` query parameter to filter on multiple video IDs:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search/"

data = {
  "query": "bear",
  "index_id": INDEX_ID,
  "search_options": ["conversation"],
  "filter": {
    "id": ["629deb6ff05c91527bc5c1c9" , "629deb9df05c91527bc5c1cb"]
  }
}

response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search/`

const data = JSON.stringify(
    {
    'query': 'bear',
    'index_id': INDEX_ID,
    'search_options': ['conversation'],
    'filter': {
      'id': ['629deb6ff05c91527bc5c1c9', '629deb9df05c91527bc5c1cb']
    }
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
           'end': 937.75,
           'metadata': [{'text': 'Bear encounters can be scary, exciting. And '
                                 'even funny. It all really depends on the '
                                 "circumstances you're in.",
                         'type': 'conversation'}],
           'score': 88.4,
           'start': 930.44,
           'video_id': '629deb9df05c91527bc5c1cb'},
          {'confidence': 'high',
           'end': 370.13,
           'metadata': [{'text': 'most nerve wracking part is when the bear '
                                 'puts his nose right up to the hunter to get '
                                 'a sniff while bears are typically pretty '
                                 'calm creatures, there is no doubt that fear '
                                 "was running through that man's veins.",
                         'type': 'conversation'}],
           'score': 88.39,
           'start': 356.05,
           'video_id': '629deb9df05c91527bc5c1cb'},
          {'confidence': 'high',
           'end': 618.76,
           'metadata': [{'text': 'bear in this next video took things a step '
                                 "further by actually breaking into a person's "
                                 'home in pursuit of none other than some '
                                 'leftover pizza. Okay.',
                         'type': 'conversation'}],
           'score': 87.82,
           'start': 605.34,
           'video_id': '629deb9df05c91527bc5c1cb'},
          {'confidence': 'high',
           'end': 6.08,
           'metadata': [{'text': 'encountering a bear in the wilderness is '
                                 "probably one of the last things you'd want "
                                 'to experience.',
                         'type': 'conversation'}],
           'score': 87.45,
           'start': 0.04,
           'video_id': '629deb9df05c91527bc5c1cb'},
          {'confidence': 'high',
           'end': 602.85,
           'metadata': [{'text': "It's a telltale sign that a bear was in the "
                                 'area scrummaging through the trash, looking '
                                 'for something to eat to have this happen.',
                         'type': 'conversation'}],
           'score': 87.39,
           'start': 595.06,
           'video_id': '629deb9df05c91527bc5c1cb'},
          {'confidence': 'high',
           'end': 345.47,
           'metadata': [{'text': 'Mhm. From the looks of the video, the man '
                                 'and the bear must not have been more than 5" '
                                 'apart.',
                         'type': 'conversation'}],
           'score': 85.93,
           'start': 307.94,
           'video_id': '629deb9df05c91527bc5c1cb'},
          {'confidence': 'high',
           'end': 86.69,
           'metadata': [{'text': 'To make matters worse it was a mama bear and '
                                 "her two cubs. I'm walking backwards on the "
                                 "trail back to the camp. I'm walking",
                         'type': 'conversation'}],
           'score': 85.46,
           'start': 78.04,
           'video_id': '629deb9df05c91527bc5c1cb'},
          {'confidence': 'high',
           'end': 947.56,
           'metadata': [{'text': "While bears aren't necessarily always "
                                 "aggressive creatures, it's probably best to "
                                 'keep your distance. Should you ever run into '
                                 'one in the wild?',
                         'type': 'conversation'}],
           'score': 84.74,
           'start': 937.79,
           'video_id': '629deb9df05c91527bc5c1cb'},
          {'confidence': 'high',
           'end': 391.05,
           'metadata': [{'text': 'Okay, Everybody knows that if you ever '
                                 'encounter a mama bear with her cubs, you do '
                                 'everything you can to avoid going near them.',
                         'type': 'conversation'}],
           'score': 84.73,
           'start': 379.04,
           'video_id': '629deb9df05c91527bc5c1cb'},
          {'confidence': 'high',
           'end': 805.3,
           'metadata': [{'text': ' If you were driving through the forest and '
                                 'saw a bear up ahead, what would you do? '
                                 "Surely you'd feel pretty safe knowing you "
                                 'were inside your car. But what if that bear '
                                 'came up to you and began peeking through '
                                 "your window. That's exactly the situation.",
                         'type': 'conversation'}],
           'score': 84.73,
           'start': 788.34,
           'video_id': '629deb9df05c91527bc5c1cb'}],
 'page_info': {'limit_per_page': 10,
               'next_page_id': '48b13711-21e2-4651-8890-52f26a4769ea-1',
               'page_expired_at': '2022-06-07T04:46:19Z',
               'total_results': 40},
 'query': 'bear',
 'search_options': ['conversation'],
 'search_pool': {'index_id': '629deb409ea24f052b971993',
                 'total_count': 3,
                 'total_duration': 2198},
 'type': 'search_create'}
```

Note that this query returns the results found in both video IDs.

### Filter on Duration

The example code below uses the `duration` field of the `filter` query parameter to return only the matches found in videos that are longer than or equal to 700 seconds `AND` shorter than or equal to 750 seconds:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search/"

data = {
  "query": "bear",
  "index_id": INDEX_ID,
  "search_options": ["conversation"],
  "filter": {
    "duration": {
        "gte" : 700, "lte": 750
      }
  }
}

response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search/`

const data = JSON.stringify(
    {
    'query': 'bear',
    'index_id': INDEX_ID,
    'search_options': ['conversation'],
    'filter': {
      'duration': {
        'gte' : 700, 'lte': 750
      }
    }
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
           'end': 480.35,
           'metadata': [{'text': 'Who? A couple of big bears. Hey bear! Hey '
                                 "bear, go away bear. I don't live there. "
                                 "Don't jump at me bear. I want no trouble.",
                         'type': 'conversation'}],
           'score': 92.28,
           'start': 452.14,
           'video_id': '629deb89f05c91527bc5c1ca'},
          {'confidence': 'mid',
           'end': 521.16,
           'metadata': [{'text': "You got nothing to hump at me for they won't "
                                 'let me bring my bear mace on the plane. '
                                 "You're all good. Keep going there. Cool. "
                                 "That's a lot.",
                         'type': 'conversation'}],
           'score': 80.41,
           'start': 482.54,
           'video_id': '629deb89f05c91527bc5c1ca'}],
 'page_info': {'limit_per_page': 10,
               'page_expired_at': '2022-06-07T05:01:01Z',
               'total_results': 2},
 'query': 'bear',
 'search_options': ['conversation'],
 'search_pool': {'index_id': '629deb409ea24f052b971993',
                 'total_count': 3,
                 'total_duration': 2198},
 'type': 'search_create'}
```

### Filter on Size, Width, and Height

The example code below uses the `size`, `width`, and `height` fields of the `filter` query parameter to return only the matches found in videos that meet all the following criteria:
- Size is greater than or equal to 50000000 bytes and less and equal to 53000000.
- Width is greater than or equal to 850.
- Height is greater than or equal to 400 and less and equal to 500.

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search/"

data = {
  "query": "bear",
  "index_id": INDEX_ID,
  "search_options": ["conversation"],
  "filter": {
    "size": {
      "gte": 50000000, "lte": 53000000
    },
    "width":
      {
        "gte": 850
      },
    "height":
      {
        "gte": 400, "lte": 500
      }
  }
}

response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search/`

const data = JSON.stringify(
    {
    'query': 'bear',
    'index_id': INDEX_ID,
    'search_options': ['conversation'],
    'filter': {
      'size': {
        'gte': 50000000, 'lte': 53000000
      },
      'width':
        {
          "gte": 850
        },
      'height':
        {
          'gte': 400, 'lte': 500
        }
    }
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
{
  "conversation_option": "semantic",
  "data": [
    {
      "score": 88.4,
      "start": 930.44,
      "end": 937.75,
      "metadata": [
        {
          "type": "conversation",
          "text": "Bear encounters can be scary, exciting. And even funny. It all really depends on the circumstances you're in."
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    },
    {
      "score": 88.39,
      "start": 356.05,
      "end": 370.13,
      "metadata": [
        {
          "type": "conversation",
          "text": "most nerve wracking part is when the bear puts his nose right up to the hunter to get a sniff while bears are typically pretty calm creatures, there is no doubt that fear was running through that man's veins."
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    },
    {
      "score": 87.82,
      "start": 605.34,
      "end": 618.76,
      "metadata": [
        {
          "type": "conversation",
          "text": "bear in this next video took things a step further by actually breaking into a person's home in pursuit of none other than some leftover pizza. Okay."
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    },
    {
      "score": 87.45,
      "start": 0.04,
      "end": 6.08,
      "metadata": [
        {
          "type": "conversation",
          "text": "encountering a bear in the wilderness is probably one of the last things you'd want to experience."
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    },
    {
      "score": 87.39,
      "start": 595.06,
      "end": 602.85,
      "metadata": [
        {
          "type": "conversation",
          "text": "It's a telltale sign that a bear was in the area scrummaging through the trash, looking for something to eat to have this happen."
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    },
    {
      "score": 85.93,
      "start": 307.94,
      "end": 345.47,
      "metadata": [
        {
          "type": "conversation",
          "text": "Mhm. From the looks of the video, the man and the bear must not have been more than 5\" apart."
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    },
    {
      "score": 85.46,
      "start": 78.04,
      "end": 86.69,
      "metadata": [
        {
          "type": "conversation",
          "text": "To make matters worse it was a mama bear and her two cubs. I'm walking backwards on the trail back to the camp. I'm walking"
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    },
    {
      "score": 84.74,
      "start": 937.79,
      "end": 947.56,
      "metadata": [
        {
          "type": "conversation",
          "text": "While bears aren't necessarily always aggressive creatures, it's probably best to keep your distance. Should you ever run into one in the wild?"
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    },
    {
      "score": 84.73,
      "start": 379.04,
      "end": 391.05,
      "metadata": [
        {
          "type": "conversation",
          "text": "Okay, Everybody knows that if you ever encounter a mama bear with her cubs, you do everything you can to avoid going near them."
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    },
    {
      "score": 84.73,
      "start": 788.34,
      "end": 805.3,
      "metadata": [
        {
          "type": "conversation",
          "text": " If you were driving through the forest and saw a bear up ahead, what would you do? Surely you'd feel pretty safe knowing you were inside your car. But what if that bear came up to you and began peeking through your window. That's exactly the situation."
        }
      ],
      "video_id": "629deb9df05c91527bc5c1cb",
      "confidence": "high"
    }
  ],
  "page_info": {
    "limit_per_page": 10,
    "next_page_id": "c1f893d1-0d05-4185-8181-394529c9dca6-1",
    "page_expired_at": "2022-06-07T05:16:05Z",
    "total_results": 35
  },
  "query": "bear",
  "search_options": [
    "conversation"
  ],
  "search_pool": {
    "index_id": "629deb409ea24f052b971993",
    "total_count": 3,
    "total_duration": 2198
  },
  "type": "search_create"
}
```