---
title: Sorting
id: sorting
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ProgrammingLanguages from '../shared/programming-languages-guides.md'

Sorting allows you to arrange returned data in a chosen order. The **GET** `indexes`, **GET** `indexes/tasks`, and **GET** `indexes/videos` endpoints support sorting.

You can sort the results of an API query by specifying the sorting criteria and direction as query parameters. To separate the endpoint and the query parameters, you must use the `?` symbol. If you add both sorting criteria and direction, you must separate them using the` &` symbol.

## Sorting Criteria

Use the `sort_by` parameter to specify the field you want to sort on. The following options are available:
- `updated_at`: Sorts by the date and time when the item was updated.
- `created_at`: Sorts by the date and time when the item was created.

## 
Sorting Direction
Use the `sort_option` parameter to specify the sorting direction. The following options are available:
- `asc`: For ascending order.
- `desc`: For descending order. This is the default value.

## Examples

Although the examples in this section are specific to using the `indexes/tasks` endpoint, the principles demonstrated are similar when using the `indexes` and `indexes/videos` endpoints.

The examples in this section assume you're familiar with the concepts that are described in the [Quickstart](/docs/quickstart.md) section.

<ProgrammingLanguages />

## Sort by Creation Date

The following example code sorts items by creation date, using the `sort_by` query parameter:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEXES_TASKS_URL = f"{API_URL}/indexes/tasks?sort_by=created_at"
response = requests.get(INDEXES_TASKS_URL, headers=headers)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEXES_TASKS_URL = `${API_URL}/indexes/tasks?sort_by=created_at`
const config = {
  method: 'get',
  url: INDEXES_TASKS_URL,
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

```output
Status code: 200
{'data': [{'_id': '6283ab5ef18e21febd160bc3',
           'created_at': '2022-05-17T14:04:14.001Z',
           'estimated_time': '2022-05-17T14:15:14.667Z',
           'index_id': '6283aa51f18e21febd160bc0',
           'metadata': {'duration': 966.598967,
                        'filename': 'animal-encounters-07.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T14:16:44.857Z'},
          {'_id': '6283ab20f18e21febd160bc2',
           'created_at': '2022-05-17T14:03:12.704Z',
           'estimated_time': '2022-05-17T14:14:05.405Z',
           'index_id': '6283aa51f18e21febd160bc0',
           'metadata': {'duration': 700.24,
                        'filename': 'animal-encounters-06.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T14:16:01.554Z'},
          {'_id': '6283aaaff18e21febd160bc1',
           'created_at': '2022-05-17T14:01:19.319Z',
           'estimated_time': '2022-05-17T14:13:21.652Z',
           'index_id': '6283aa51f18e21febd160bc0',
           'metadata': {'duration': 531.998133,
                        'filename': 'animal-encounters-05.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T14:15:13.087Z'},
          {'_id': '6283a0a8f18e21febd160bbf',
           'created_at': '2022-05-17T13:18:32.388Z',
           'estimated_time': '2022-05-17T13:31:26.808Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 966.598967,
                        'filename': 'animal-encounters-04mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:31:28.316Z'},
          {'_id': '6283a07ef18e21febd160bbe',
           'created_at': '2022-05-17T13:17:50.564Z',
           'estimated_time': '2022-05-17T13:28:55.578Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 700.24,
                        'filename': 'animal-encounters-03.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:30:54.078Z'},
          {'_id': '6283a059f18e21febd160bbd',
           'created_at': '2022-05-17T13:17:13.524Z',
           'estimated_time': '2022-05-17T13:28:55.569Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 700.24,
                        'filename': 'animal-encounters-02.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:30:41.95Z'},
          {'_id': '6283a00df18e21febd160bbc',
           'created_at': '2022-05-17T13:15:57.053Z',
           'estimated_time': '2022-05-17T13:28:11.817Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 531.998133,
                        'filename': 'animal-encounters-01.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:29:56.485Z'},
          {'_id': '62823d4df18e21febd160bb5',
           'created_at': '2022-05-16T12:02:20.977Z',
           'estimated_time': '2022-05-16T12:14:32.26Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 810.84,
                        'filename': 'best-racing-moments-01.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-16T12:14:34.824Z'},
          {'_id': '627df17ff18e21febd160bab',
           'created_at': '2022-05-13T05:49:51.616Z',
           'estimated_time': '2022-05-13T06:02:06.09Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 552.92,
                        'filename': 'car-accidents-01.mp4',
                        'height': 720,
                        'width': 1280},
           'status': 'ready',
           'updated_at': '2022-05-13T06:02:06.327Z'},
          {'_id': '627de9b1f18e21febd160baa',
           'created_at': '2022-05-13T05:16:33.803Z',
           'estimated_time': '2022-05-13T05:29:18.548Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 30.033333,
                        'filename': 'car-accidents-02.mp4',
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
- The default sort order is descending. The most recent items are displayed first at the top of the list.

## Specify Sort Order

The following example code sort items by creation date and reverses the sorting order:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEXES_TASKS_URL = f"{API_URL}/indexes/tasks?sort_by=created_at&sort_option=asc"
response = requests.get(INDEXES_TASKS_URL, headers=headers)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEXES_TASKS_URL = `${API_URL}/indexes/tasks?sort_by=created_at&sort_option=asc`
const config = {
  method: 'get',
  url: INDEXES_TASKS_URL,
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

```output
Status code: 200
{'data': [{'_id': '626a229622c7851fcbe5c83b',
           'created_at': '2022-04-28T05:13:58.128Z',
           'estimated_time': '2022-04-28T05:24:25.718Z',
           'index_id': '626a228822c7851fcbe5c83a',
           'metadata': {'duration': 30.033333,
                        'filename': 'animal-encounters-10.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-28T05:26:02.849Z'},
          {'_id': '626a24dd22c7851fcbe5c83d',
           'created_at': '2022-04-28T05:23:40.911Z',
           'estimated_time': '2022-04-28T05:24:25.729Z',
           'index_id': '626a24d622c7851fcbe5c83c',
           'metadata': {'duration': 30.033333,
                        'filename': 'test.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-28T05:26:02.861Z'},
          {'_id': '626a263122c7851fcbe5c83f',
           'created_at': '2022-04-28T05:29:20.992Z',
           'estimated_time': '2022-04-28T05:38:08.588Z',
           'index_id': '626a262222c7851fcbe5c83e',
           'metadata': {'duration': 30.033333,
                        'filename': 'animal-encounters-09.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-28T05:39:30.733Z'},
          {'_id': '626a270422c7851fcbe5c841',
           'created_at': '2022-04-28T05:32:52.41Z',
           'estimated_time': '2022-04-28T05:38:08.597Z',
           'index_id': '626a26f922c7851fcbe5c840',
           'metadata': {'duration': 30.033333,
                        'filename': 'animal-encounters-08.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-28T05:39:24.672Z'},
          {'_id': '626a273b22c7851fcbe5c843',
           'created_at': '2022-04-28T05:33:47.776Z',
           'estimated_time': '2022-04-28T05:38:08.605Z',
           'index_id': '626a273122c7851fcbe5c842',
           'metadata': {'duration': 30.033333,
                        'filename': 'test.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-28T05:39:30.749Z'},
          {'_id': '626a3ddc22c7851fcbe5c844',
           'created_at': '2022-04-28T07:10:20.453Z',
           'estimated_time': '2022-04-28T07:22:08.885Z',
           'index_id': '626a273122c7851fcbe5c842',
           'metadata': {'duration': 552.92,
                        'filename': 'car-accidents-10.mp4',
                        'height': 720,
                        'width': 1280},
           'status': 'ready',
           'updated_at': '2022-04-28T07:22:09.16Z'},
          {'_id': '626aaa7a22c7851fcbe5c845',
           'created_at': '2022-04-28T14:53:46.741Z',
           'estimated_time': '2022-04-28T15:03:03.305Z',
           'index_id': '626a273122c7851fcbe5c842',
           'metadata': {'duration': 30.033333,
                        'filename': 'car-accidents-09.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-28T15:04:28.108Z'},
          {'_id': '626b7ca922c7851fcbe5c846',
           'created_at': '2022-04-29T05:50:33.203Z',
           'estimated_time': '2022-04-29T05:59:22.88Z',
           'index_id': '626a273122c7851fcbe5c842',
           'metadata': {'duration': 30.033333,
                        'filename': 'car-accidents-08.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-29T06:00:46.678Z'},
          {'_id': '626b9ff322c7851fcbe5c847',
           'created_at': '2022-04-29T08:21:07.838Z',
           'estimated_time': '2022-04-29T08:30:07.048Z',
           'index_id': '626a273122c7851fcbe5c842',
           'metadata': {'duration': 30.033333,
                        'filename': 'car-accidents-07.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-29T08:31:36.104Z'},
          {'_id': '626ba02022c7851fcbe5c848',
           'created_at': '2022-04-29T08:21:52.696Z',
           'estimated_time': '2022-04-29T08:30:07.057Z',
           'index_id': '626a273122c7851fcbe5c842',
           'metadata': {'duration': 30.033333,
                        'filename': 'car-accidents-06.mp4',
                        'height': 270,
                        'width': 480},
           'status': 'ready',
           'updated_at': '2022-04-29T08:31:30.053Z'}],
 'page_info': {'limit_per_page': 10,
               'page': 1,
               'total_page': 5,
               'total_results': 43},
 'type': 'index_task_list'}
```

## Combine Sorting and Pagination

The following example code sorts items by creation date and specifies that each page should contain 5 items:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEXES_TASKS_URL = f"{API_URL}/indexes/tasks?sort_by=created_at&page_limit=5"
response = requests.get(INDEXES_TASKS_URL, headers=headers)
print (f"Status code: {response.status_code}")
pprint(response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEXES_TASKS_URL = `${API_URL}/indexes/tasks?sort_by=created_at&page_limit=5`
const config = {
  method: 'get',
  url: INDEXES_TASKS_URL,
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

```output
Status code: 200
{'data': [{'_id': '6283ab5ef18e21febd160bc3',
           'created_at': '2022-05-17T14:04:14.001Z',
           'estimated_time': '2022-05-17T14:15:14.667Z',
           'index_id': '6283aa51f18e21febd160bc0',
           'metadata': {'duration': 966.598967,
                        'filename': 'animal-encounters-03.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T14:16:44.857Z'},
          {'_id': '6283ab20f18e21febd160bc2',
           'created_at': '2022-05-17T14:03:12.704Z',
           'estimated_time': '2022-05-17T14:14:05.405Z',
           'index_id': '6283aa51f18e21febd160bc0',
           'metadata': {'duration': 700.24,
                        'filename': 'animal-encounters-02.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T14:16:01.554Z'},
          {'_id': '6283aaaff18e21febd160bc1',
           'created_at': '2022-05-17T14:01:19.319Z',
           'estimated_time': '2022-05-17T14:13:21.652Z',
           'index_id': '6283aa51f18e21febd160bc0',
           'metadata': {'duration': 531.998133,
                        'filename': 'animal-encounters-01.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T14:15:13.087Z'},
          {'_id': '6283a0a8f18e21febd160bbf',
           'created_at': '2022-05-17T13:18:32.388Z',
           'estimated_time': '2022-05-17T13:31:26.808Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 966.598967,
                        'filename': 'animal-encounters-03.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:31:28.316Z'},
          {'_id': '6283a07ef18e21febd160bbe',
           'created_at': '2022-05-17T13:17:50.564Z',
           'estimated_time': '2022-05-17T13:28:55.578Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 700.24,
                        'filename': 'animal-encounters-02.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:30:54.078Z'}],
 'page_info': {'limit_per_page': 5,
               'page': 1,
               'total_page': 9,
               'total_results': 43},
 'type': 'index_task_list'}
```

