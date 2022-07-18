---
title: Indexes
id: indexes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The **GET** `indexes`, **GET** `indexes/tasks`, and **GET** `indexes/videos` endpoints support the following query parameters that allow you to control pagination behavior:

- `page`: A number that identifies the page you want to retrieve. The default value is `1`.
- `page_limit`: Specifies the maximum number of items on each page. The default value is `10`.

To separate the endpoint and the query parameters, you must use a `?` symbol. If you add multiple query parameters, you must separate them using the & symbol as shown in this example: `page=2&page_limit=5`.

To paginate through results, begin with a page value of `1` and a `page_limit` value of `X`. To retrieve the next page, set the `page` parameter to `2`, while the `page_limit`  parameter remains the same. The retrieve the rest of the pages, you must subsequently increment the value of the `page` parameter by `1`.

Each response contains the items on the page you requested, the page you retrieved, and the total number of pages. When the page you've retrieved is equal to the total number of pages, you've reached the end of the dataset.

:::info **NOTES**: 
For a description of each field in the response, see the **Indexes** <!--TODO: Add link--> section.
:::

## Examples

The following example code retrieves the first page of results using the default value for the page andpage_limit parameters by calling the **GET** method of the `indexes/tasks` <!--TODO: Add link--> endpoint with no parameters:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEX_TASK_URL = f"{API_URL}/indexes/tasks"
response = requests.get(INDEX_TASK_URL, headers=headers)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEX_TASK_URL = `${API_URL}/indexes/tasks`
const config = {
  method: 'get',
  url: INDEX_TASK_URL,
  headers: headers,
}
const resp = await axios(config)
const response = await resp.data
console.log(`Status code: ${resp.status}`)
console.log(response)
```
</TabItem>
</Tabs>

The output should look similar to the following one:

```output showLineNumbers {102-105}
Status code: 200
{'data': [{'_id': '6283ab5ef18e21febd160bc3',
           'created_at': '2022-05-17T14:04:14.001Z',
           'estimated_time': '2022-05-17T14:15:14.667Z',
           'index_id': '6283aa51f18e21febd160bc0',
           'metadata': {'duration': 966.598967,
                        'filename': '01.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T14:16:44.857Z'},
          {'_id': '6283ab20f18e21febd160bc2',
           'created_at': '2022-05-17T14:03:12.704Z',
           'estimated_time': '2022-05-17T14:14:05.405Z',
           'index_id': '6283aa51f18e21febd160bc0',
           'metadata': {'duration': 700.24,
                        'filename': '02.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T14:16:01.554Z'},
          {'_id': '6283aaaff18e21febd160bc1',
           'created_at': '2022-05-17T14:01:19.319Z',
           'estimated_time': '2022-05-17T14:13:21.652Z',
           'index_id': '6283aa51f18e21febd160bc0',
           'metadata': {'duration': 531.998133,
                        'filename': '03.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T14:15:13.087Z'},
          {'_id': '6283a0a8f18e21febd160bbf',
           'created_at': '2022-05-17T13:18:32.388Z',
           'estimated_time': '2022-05-17T13:31:26.808Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 966.598967,
                        'filename': '04.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:31:28.316Z'},
          {'_id': '6283a07ef18e21febd160bbe',
           'created_at': '2022-05-17T13:17:50.564Z',
           'estimated_time': '2022-05-17T13:28:55.578Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 700.24,
                        'filename': '05.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:30:54.078Z'},
          {'_id': '6283a059f18e21febd160bbd',
           'created_at': '2022-05-17T13:17:13.524Z',
           'estimated_time': '2022-05-17T13:28:55.569Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 700.24,
                        'filename': '06.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:30:41.95Z'},
          {'_id': '6283a00df18e21febd160bbc',
           'created_at': '2022-05-17T13:15:57.053Z',
           'estimated_time': '2022-05-17T13:28:11.817Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 531.998133,
                        'filename': '07.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:29:56.485Z'},
          {'_id': '62823d4df18e21febd160bb5',
           'created_at': '2022-05-16T12:02:20.977Z',
           'estimated_time': '2022-05-16T12:14:32.26Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 810.84,
                        'filename': '08.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-16T12:14:34.824Z'},
          {'_id': '627df17ff18e21febd160bab',
           'created_at': '2022-05-13T05:49:51.616Z',
           'estimated_time': '2022-05-13T06:02:06.09Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 552.92,
                        'filename': '09.mp4',
                        'height': 720,
                        'width': 1280},
           'status': 'ready',
           'updated_at': '2022-05-13T06:02:06.327Z'},
          {'_id': '627de9b1f18e21febd160baa',
           'created_at': '2022-05-13T05:16:33.803Z',
           'estimated_time': '2022-05-13T05:29:18.548Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 30.033333,
                        'filename': '10.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-05-13T05:31:05.562Z'}],
 'page_info': {'limit_per_page': 10,
               'page': 1,
               'total_page': 5,
               'total_results': 43},
 'type': 'index_task_list'}
 ```

Note the following about this example output:
- Line 102 shows that the number of items per page is `10`.
- Line 103 shows that you've retrieved the first page.
- Line 104 shows the total number of pages - `5`.
- Line 105 shows the total number of results - `43`.

## Retrieve a Specific Page

The following example code uses the page query parameter to retrieve a specific page (`2`):

<Tabs>
<TabItem value="py" label="Python">

```python
INDEX_TASK_URL = f"{API_URL}/indexes/tasks?page=2"
response = requests.get(INDEX_TASK_URL, headers=headers)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEX_TASK_URL = `${API_URL}/indexes/tasks?page=2`
const config = {
  method: 'get',
  url: INDEX_TASK_URL,
  headers: headers,
}
const resp = await axios(config)
const response = await resp.data
console.log(`Status code: ${resp.status}`)
console.log(response)
```
</TabItem>
</Tabs>

The output should look similar to the following one:

```output showLineNumbers {103}
Status code: 200
{'data': [{'_id': '6272b337f18e21febd160b7c',
           'created_at': '2022-05-04T17:09:11.799Z',
           'estimated_time': '2022-05-04T17:19:59.401Z',
           'index_id': '6272b335f18e21febd160b7b',
           'metadata': {'duration': 30.033333,
                        'filename': '11.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-05-04T17:21:31.28Z'},
          {'_id': '62726262f18e21febd160b7a',
           'created_at': '2022-05-04T11:24:18.896Z',
           'estimated_time': '2022-05-04T11:32:16.178Z',
           'index_id': '62726260f18e21febd160b79',
           'metadata': {'duration': 30.033333,
                        'filename': '12.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-05-04T11:34:01.786Z'},
          {'_id': '62726247f18e21febd160b78',
           'created_at': '2022-05-04T11:23:51.768Z',
           'estimated_time': '2022-05-04T11:32:16.17Z',
           'index_id': '62726245f18e21febd160b77',
           'metadata': {'duration': 30.033333,
                        'filename': '13.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-05-04T11:34:01.772Z'},
          {'_id': '6272619cf18e21febd160b76',
           'created_at': '2022-05-04T11:21:00.293Z',
           'estimated_time': '2022-05-04T11:32:16.162Z',
           'index_id': '6272619af18e21febd160b75',
           'metadata': {'duration': 30.033333,
                        'filename': '14.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-05-04T11:34:01.754Z'},
          {'_id': '626e288222c7851fcbe5c89a',
           'created_at': '2022-05-01T06:28:18.476Z',
           'estimated_time': '2022-05-01T06:37:55.689Z',
           'index_id': '626e287d22c7851fcbe5c899',
           'metadata': {'duration': 30.033333,
                        'filename': '15.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-05-01T06:39:19.52Z'},
          {'_id': '626e240922c7851fcbe5c896',
           'created_at': '2022-05-01T06:09:13.37Z',
           'estimated_time': '2022-05-01T06:18:08.073Z',
           'index_id': '626e240022c7851fcbe5c895',
           'metadata': {'duration': 30.033333,
                        'filename': '16.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-05-01T06:19:43.137Z'},
          {'_id': '626e239722c7851fcbe5c894',
           'created_at': '2022-05-01T06:07:19.194Z',
           'estimated_time': '2022-05-01T06:18:08.065Z',
           'index_id': '626e239122c7851fcbe5c893',
           'metadata': {'duration': 30.033333,
                        'filename': '17.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-05-01T06:19:37.087Z'},
          {'_id': '626cd2ba22c7851fcbe5c892',
           'created_at': '2022-04-30T06:10:02.442Z',
           'estimated_time': '2022-04-30T06:19:28.159Z',
           'index_id': '626cd2b522c7851fcbe5c891',
           'metadata': {'duration': 30.033333,
                        'filename': '18.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-30T06:20:53.974Z'},
          {'_id': '626cc89c22c7851fcbe5c890',
           'created_at': '2022-04-30T05:26:52.714Z',
           'estimated_time': '2022-04-30T05:35:30.718Z',
           'index_id': '626a273122c7851fcbe5c842',
           'metadata': {'duration': 30.033333,
                        'filename': '19.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-30T05:36:47.563Z'},
          {'_id': '626cc87f22c7851fcbe5c88f',
           'created_at': '2022-04-30T05:26:23.629Z',
           'estimated_time': '2022-04-30T05:32:38.085Z',
           'index_id': '626a273122c7851fcbe5c842',
           'metadata': {'duration': 30.033333,
                        'filename': '20.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-30T05:33:55.348Z'}],
 'page_info': {'limit_per_page': 10,
               'page': 2,
               'total_page': 5,
               'total_results': 43},
 'type': 'index_task_list'}
 ```

Note the following about this example output:
- Line 103 shows that you've retrieved the second page.

## Limits

The following example code uses the `page_limit` query parameter to specify a limit of 5 items on each page:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEX_TASK_URL = f"{API_URL}/indexes/tasks/?page=2&page_limit=5"
response = requests.get(INDEX_TASK_URL, headers=headers)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEX_TASK_URL = `${API_URL}/indexes/tasks/?page=2&page_limit=5`
const config = {
  method: 'get',
  url: INDEX_TASK_URL,
  headers: headers,
}
const resp = await axios(config)
const response = await resp.data
console.log(`Status code: ${resp.status}`)
console.log(response)
```
</TabItem>
</Tabs>

The output should look similar to the following one:

```output showLineNumbers {52}
Status code: 200
{'data': [{'_id': '6283a059f18e21febd160bbd',
           'created_at': '2022-05-17T13:17:13.524Z',
           'estimated_time': '2022-05-17T13:28:55.569Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 700.24,
                        'filename': '06.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:30:41.95Z'},
          {'_id': '6283a00df18e21febd160bbc',
           'created_at': '2022-05-17T13:15:57.053Z',
           'estimated_time': '2022-05-17T13:28:11.817Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 531.998133,
                        'filename': '07.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:29:56.485Z'},
          {'_id': '62823d4df18e21febd160bb5',
           'created_at': '2022-05-16T12:02:20.977Z',
           'estimated_time': '2022-05-16T12:14:32.26Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 810.84,
                        'filename': '08.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-16T12:14:34.824Z'},
          {'_id': '627df17ff18e21febd160bab',
           'created_at': '2022-05-13T05:49:51.616Z',
           'estimated_time': '2022-05-13T06:02:06.09Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 552.92,
                        'filename': '09.mp4',
                        'height': 720,
                        'width': 1280},
           'status': 'ready',
           'updated_at': '2022-05-13T06:02:06.327Z'},
          {'_id': '627de9b1f18e21febd160baa',
           'created_at': '2022-05-13T05:16:33.803Z',
           'estimated_time': '2022-05-13T05:29:18.548Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 30.033333,
                        'filename': '10.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-05-13T05:31:05.562Z'}],
 'page_info': {'limit_per_page': 5,
               'page': 2,
               'total_page': 9,
               'total_results': 43},
 'type': 'index_task_list'}
```
Note the following about this example output:
- Line 52 shows that the API returns 5 items per page.