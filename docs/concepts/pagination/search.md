---
title: Search
id: search
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ProgrammingLanguages from '../../shared/programming-languages-guides.md'

The `search` <!--TODO: Add link--> endpoint supports the following parameters that allow you to control pagination behavior:
- The identifier of the page: You can append to the URL the identifier of the page you want to retrieve. If not specified, the API returns the first page.
- `page_limit`: Specifies the number of items on each page. The default value is `10` and the maximum value is `100`. Note that the `page_limit` parameter is set in the request body.

When making the initial request, you set a `page_limit` value of `X` and do not specify the identifier of the page you want to retrieve. The response will contain the first page of results, the identifier of the next page, and the time when the page expires. To retrieve the rest of the pages, append the identifier of the page you want to retrieve to the URL, while the `page_limit`  parameter remains the same. The subsequent responses will contain the results on that page, the identifiers of the next and previous pages, and the time when the page expires. When the API does not return the identifier of the previous page, then this is the first page. When the API does not return the identifier of the next page, you've reached the end of the dataset.

:::info **NOTES**
- For a description of each field in the response, see the **Search** <!--TODO: Add link--> page.
- The identifiers of the next and previous pages can become invalid when the page expires or items are added or removed. Do not store them in your application. Using an expired or invalid page identifier returns an **HTTP 400 token expired or invalid token** error.
:::

## Examples

The examples in this section are specific to using the `indexes/tasks` endpoint. However, the principles demonstrated are similar when using the `indexes` and `indexes/videos` endpoints.

The examples in this section assume you're familiar with the concepts that are described in the [Quickstart](/docs/quickstart.md) section.

<ProgrammingLanguages />

## Retrieve the First Page of Results

The following example code retrieves the first page of results by calling the **POST** method of the `search` endpoint with no parameters:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search/"
data = {
    "query": "bear",
    "index_id": INDEX_ID,
    "search_options": ["visual"],
}
response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search`
data = JSON.stringify(
  {
  'query': 'bear',
  'index_id': INDEX_ID,
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

```output showLineNumbers {63-64}
Status code: 200
{'data': [{'confidence': 'high',
           'end': 380,
           'metadata': [{'type': 'visual'}],
           'score': 87.76,
           'start': 376,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'high',
           'end': 8,
           'metadata': [{'type': 'visual'}],
           'score': 84.82,
           'start': 2,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'high',
           'end': 416,
           'metadata': [{'type': 'visual'}],
           'score': 84.4,
           'start': 408,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 808,
           'metadata': [{'type': 'visual'}],
           'score': 82.4,
           'start': 798,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 958,
           'metadata': [{'type': 'visual'}],
           'score': 82,
           'start': 954,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 436,
           'metadata': [{'type': 'visual'}],
           'score': 81.72,
           'start': 432,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 392,
           'metadata': [{'type': 'visual'}],
           'score': 81.41,
           'start': 386,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 362,
           'metadata': [{'type': 'visual'}],
           'score': 80.94,
           'start': 354,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 372,
           'metadata': [{'type': 'visual'}],
           'score': 80.75,
           'start': 366,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 604,
           'metadata': [{'type': 'visual'}],
           'score': 80.35,
           'start': 584,
           'video_id': '6283ab63ba9f116e5ea92a87'}],
 'page_info': {'limit_per_page': 10,
               'next_page_id': '1ca2c58f-150d-41cb-a2b8-feb6341e76cc-1',
               'page_expired_at': '2022-05-21T17:00:34Z',
               'total_results': 122},
 'query': 'bear',
 'search_options': ['visual'],
 'search_pool': {'index_id': '6283aa51f18e21febd160bc0',
                 'total_count': 3,
                 'total_duration': 2198},
 'type': 'search_create'}
```

Note the following about this example output:
- The API does not return the identifier of the previous page, meaning that this is the first page.
- Line 63 shows the identifier of the next page - `1ca2c58f-150d-41cb-a2b8-feb6341e76cc-1`.
- Line 64 shows the time when the page expires.

## Retrieve a Specific Page

The following example code retrieves a specific page by appending the identifier of the page to the URL:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search/ed2428f0-475a-4f38-9909-6b281cef674b-1"
data = {
    "query": "bear",
    "index_id": INDEX_ID,
    "search_options": ["visual"],
}
response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search/ed2428f0-475a-4f38-9909-6b281cef674b-1`
data = JSON.stringify(
  {
  'query': 'bear',
  'index_id': INDEX_ID,
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

```output showLineNumbers {63-65}
Status code: 200
{'data': [{'confidence': 'mid',
           'end': 332,
           'metadata': [{'type': 'visual'}],
           'score': 80.09,
           'start': 326,
           'video_id': '6283ab25ba9f116e5ea92a86'},
          {'confidence': 'mid',
           'end': 350,
           'metadata': [{'type': 'visual'}],
           'score': 79.92,
           'start': 338,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 14,
           'metadata': [{'type': 'visual'}],
           'score': 79.86,
           'start': 8,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 942,
           'metadata': [{'type': 'visual'}],
           'score': 79.71,
           'start': 936,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 30,
           'metadata': [{'type': 'visual'}],
           'score': 79.69,
           'start': 26,
           'video_id': '6283ab25ba9f116e5ea92a86'},
          {'confidence': 'mid',
           'end': 924,
           'metadata': [{'type': 'visual'}],
           'score': 79.59,
           'start': 912,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 2,
           'metadata': [{'type': 'visual'}],
           'score': 79.32,
           'start': 0,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 376,
           'metadata': [{'type': 'visual'}],
           'score': 79.26,
           'start': 374,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 228,
           'metadata': [{'type': 'visual'}],
           'score': 79.04,
           'start': 222,
           'video_id': '6283aab3ba9f116e5ea92a85'},
          {'confidence': 'mid',
           'end': 572,
           'metadata': [{'type': 'visual'}],
           'score': 79,
           'start': 566,
           'video_id': '6283ab63ba9f116e5ea92a87'}],
 'page_info': {'limit_per_page': 10,
               'next_page_id': 'ed2428f0-475a-4f38-9909-6b281cef674b-2',
               'page_expired_at': '2022-05-21T17:07:23Z',
               'prev_page_id': 'ed2428f0-475a-4f38-9909-6b281cef674b-0',
               'total_results': 122},
 'query': 'bear',
 'search_options': ['visual'],
 'search_pool': {'index_id': '6283aa51f18e21febd160bc0',
                 'total_count': 3,
                 'total_duration': 2198},
 'type': 'search_create_token'}
```

Note the following about this example output:
- Line 63 shows the identifier of the next page - `ed2428f0-475a-4f38-9909-6b281cef674b-2`
- Line 64 shows the time when the page expires.
- Line 65 shows the identifier of the previous page - `ed2428f0-475a-4f38-9909-6b281cef674b-2`.

## Limits
The following example code specifies a limit of 5 items on each page using the `page_limit` parameter:

<Tabs>
<TabItem value="py" label="Python">

```python
SEARCH_URL = f"{API_URL}/search/"
data = {
    "query": "bear",
    "index_id": INDEX_ID,
    "search_options": ["visual"],
    "page_limit": 5
}
response = requests.post(SEARCH_URL, headers=headers, json=data)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const SEARCH_URL = `${API_URL}/search`
data = JSON.stringify(
  {
  'query': 'bear',
  'index_id': INDEX_ID,
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

```output showLineNumbers {32}
Status code: 200
{'data': [{'confidence': 'high',
           'end': 380,
           'metadata': [{'type': 'visual'}],
           'score': 87.76,
           'start': 376,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'high',
           'end': 8,
           'metadata': [{'type': 'visual'}],
           'score': 84.82,
           'start': 2,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'high',
           'end': 416,
           'metadata': [{'type': 'visual'}],
           'score': 84.4,
           'start': 408,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 808,
           'metadata': [{'type': 'visual'}],
           'score': 82.4,
           'start': 798,
           'video_id': '6283ab63ba9f116e5ea92a87'},
          {'confidence': 'mid',
           'end': 958,
           'metadata': [{'type': 'visual'}],
           'score': 82,
           'start': 954,
           'video_id': '6283ab63ba9f116e5ea92a87'}],
 'page_info': {'limit_per_page': 5,
               'next_page_id': '7da30b71-e898-4b84-8200-818bdff47aa7-1',
               'page_expired_at': '2022-05-21T17:21:04Z',
               'total_results': 122},
 'query': 'bear',
 'search_options': ['visual'],
 'search_pool': {'index_id': '6283aa51f18e21febd160bc0',
                 'total_count': 3,
                 'total_duration': 2198},
 'type': 'search_create'}
```

Note the following about this example output:
- Line 32 shows that the API returns 5 items per page.
