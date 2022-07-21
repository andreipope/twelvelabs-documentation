---
title: Indexes
id: indexes
slug: /concepts/filtering/indexes
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import ProgrammingLanguages from '../../shared/programming-languages-guides.md'

To filter the results of an API query, you must specify one or more conditions after the endpoint in the URL of the call. To separate the endpoint and the conditions, you must use a `?` symbol. If you add multiple conditions, you must separate them using the `&` symbol.

A condition consists of an expression that specifies:
- The field you want to filter on
- An operator
- The value to compare to
To indicate the relationship between a field and its value, you can use the exact match or comparison operators.

## Exact Match Operator

Use the exact match operator (`=`) to match only the results that equal the value you specify. The syntax is as follows: `<field>=<value>`.

## Comparison Operators

Use the comparison operators (`[lte]=` and `[gte]=`) to match based on the arithmetic comparison. The syntax is as follows `<field>[lte]=<value>` and `<field>[gte]=<value>`.

## Filter Composition

You can add multiple filters to a single query. For example, if you want to filter all the video indexing tasks created on a specific date and whose status is `pending`, you must specify both the `created_at` and `status` fields in the query parameters, as shown in this example: `created_at=2022-05-17&status=pending`.

## Examples

Although the examples in this section are specific to using the `indexes/tasks` endpoint, the principles demonstrated are similar when using the `indexes` and `indexes/videos` endpoints.

The examples in this section assume you're familiar with the concepts that are described in the [Quickstart](/docs/quickstart.md) section.

<ProgrammingLanguages />

:::info **NOTE**
Depending on the endpoint, you can filter on various fields. For details, see the [API Reference](/api-reference) section.
:::

### Filter on a Specific Date
The following example code uses the `created_at` query parameter and the exact match operator to return all the items created on a specific date:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEXES_TASKS_URL = f"{API_URL}/indexes/tasks?created_at=2022-05-17"
response = requests.get(INDEXES_TASKS_URL, headers=headers)
print(response.request.url)
print (f"Status code: {response.status_code}")
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEXES_TASKS_URL = `${API_URL}/indexes/tasks?created_at=2022-05-17`
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
           'updated_at': '2022-05-17T13:30:54.078Z'},
          {'_id': '6283a059f18e21febd160bbd',
           'created_at': '2022-05-17T13:17:13.524Z',
           'estimated_time': '2022-05-17T13:28:55.569Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 700.24,
                        'filename': 'animal-encounters-01.mp4',
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
           'updated_at': '2022-05-17T13:29:56.485Z'}],
 'page_info': {'limit_per_page': 10,
               'page': 1,
               'total_page': 1,
               'total_results': 7},
 'type': 'index_task_list'}
```

### Filter on a Date Range

To display all the items created in a date range, you must combine the `lte` and `gte` operators. The following example code returns all the video indexing tasks created between `2022-05-15` and `2022-05-16`:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEXES_TASKS_URL = f"{API_URL}/indexes/tasks?created_at[gte]=2022-05-15&created_at[lte]=2022-05-16"
response = requests.get(INDEXES_TASKS_URL, headers=headers)
print(response.request.url)
print (f"Status code: {response.status_code}")
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEXES_TASKS_URL = `${API_URL}/indexes/tasks?created_at[gte]=2022-05-15&created_at[lte]=2022-05-16`
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
{'data': [{'_id': '62823d4df18e21febd160bb5',
           'created_at': '2022-05-16T12:02:20.977Z',
           'estimated_time': '2022-05-16T12:14:32.26Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 810.84,
                        'filename': 'best-racing-moments.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-16T12:14:34.824Z'}],
 'page_info': {'limit_per_page': 10,
               'page': 1,
               'total_page': 1,
               'total_results': 1},
 'type': 'index_task_list'}
```

### Filter Based on File Name
To filter based on the filename, use the `filename` query parameter and the exact match operator as shown in the example below:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEXES_TASKS_URL = f"{API_URL}/indexes/tasks?filename=best-racing-moments.mp4"
response = requests.get(INDEXES_TASKS_URL, headers=headers)
print(response.request.url)
print (f"Status code: {response.status_code}")
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEXES_TASKS_URL = `${API_URL}/indexes/tasks?filename=best-racing-moments.mp4`
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

## Filter Based on Duration

To filter based on the duration of the video, use the duration query parameter and either the exact match or the comparison operators.

### Use the Exact Match Operator

The example below uses the exact match operator to display all the videos of a specific duration (810 seconds):

<Tabs>
<TabItem value="py" label="Python">

```python
INDEXES_TASKS_URL = f"{API_URL}/indexes/tasks?duration=810"
response = requests.get(INDEXES_TASKS_URL, headers=headers)
print(response.request.url)
print (f"Status code: {response.status_code}")
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEXES_TASKS_URL = `${API_URL}/indexes/tasks?duration=810`
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
{'data': [{'_id': '62823d4df18e21febd160bb5',
           'created_at': '2022-05-16T12:02:20.977Z',
           'estimated_time': '2022-05-16T12:14:32.26Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 810.84,
                        'filename': 'best-racing-moments.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-16T12:14:34.824Z'}],
 'page_info': {'limit_per_page': 10,
               'page': 1,
               'total_page': 1,
               'total_results': 1},
 'type': 'index_task_list'}
```

:::info **NOTE**
The API rounds down the duration of the videos when using the exact match operator to filter based on duration.
:::

### Use the Comparison Operators

The example below uses the comparison operators to filter videos longer than 600 seconds and shorter than 820 seconds:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEXES_TASKS_URL = f"{API_URL}/indexes/tasks?duration[gte]=600&duration[lte]=820"
response = requests.get(INDEXES_TASKS_URL, headers=headers)
print(response.request.url)
print (f"Status code: {response.status_code}")
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEXES_TASKS_URL = `${API_URL}/indexes/tasks?duration[gte]=600&duration[lte]=820`
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
{'data': [{'_id': '6283a07ef18e21febd160bbe',
           'created_at': '2022-05-17T13:17:50.564Z',
           'estimated_time': '2022-05-17T13:28:55.578Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 700.24,
                        'filename': 'animal-encounters-02.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:30:54.078Z'},
          {'_id': '6283a059f18e21febd160bbd',
           'created_at': '2022-05-17T13:17:13.524Z',
           'estimated_time': '2022-05-17T13:28:55.569Z',
           'index_id': '6283990ff18e21febd160bbb',
           'metadata': {'duration': 700.24,
                        'filename': 'animal-encounters-01.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-17T13:30:41.95Z'},
          {'_id': '62823d4df18e21febd160bb5',
           'created_at': '2022-05-16T12:02:20.977Z',
           'estimated_time': '2022-05-16T12:14:32.26Z',
           'index_id': '627de802f18e21febd160ba9',
           'metadata': {'duration': 810.84,
                        'filename': 'best-racing-moments.mp4',
                        'height': 480,
                        'width': 854},
           'status': 'ready',
           'updated_at': '2022-05-16T12:14:34.824Z'}],
 'page_info': {'limit_per_page': 10,
               'page': 1,
               'total_page': 1,
               'total_results': 3},
 'type': 'index_task_list'}
```