---
title: Frequently Asked Questions
id: faq
---

## Can I Add More Than One Video to an Index?

Yes. Indexes provide a mechanism for grouping related videos. For example, if you want to upload multiple video fragments from a car race, Twelve Labs recommends you create a single index for that race. Then, to find a specific moment in the race, you invoke the `search` endpoint only once instead of once for each index.

When you perform a search on an index that has more than one video, the `video_id field` (lines 13, 25, 27, 49, 61, and 74 in the example output below) shows the unique identifier of the matching video and the `total_count` field (line 75) shows the number of videos in your index (2):

```output showLineNumbers {12,24,36,48,60,74,75}
{
  "data": [
    {
      "score": 75.03,
      "start": 22,
      "end": 28,
      "metadata": [
        {
          "type": "visual"
        }
      ],
      "video_id": "627df188ba9f116e5ea92a75",
      "confidence": "mid"
    },
    {
      "score": 74.06,
      "start": 278,
      "end": 284,
      "metadata": [
        {
          "type": "visual"
        }
      ],
      "video_id": "627df188ba9f116e5ea92a75",
      "confidence": "mid"
    },
    {
      "score": 71.31,
      "start": 224,
      "end": 228,
      "metadata": [
        {
          "type": "visual"
        }
      ],
      "video_id": "627df188ba9f116e5ea92a75",
      "confidence": "low"
    },
    {
      "score": 69.32,
      "start": 158,
      "end": 164,
      "metadata": [
        {
          "type": "visual"
        }
      ],
      "video_id": "627de9b2ba9f116e5ea92a74",
      "confidence": "low"
    },
    {
      "score": 66.66,
      "start": 28,
      "end": 30,
      "metadata": [
        {
          "type": "visual"
        }
      ],
      "video_id": "627de9b2ba9f116e5ea92a74",
      "confidence": "low"
    }
  ],
  "page_info": {
    "limit_per_page": 10,
    "page_expired_at": "2022-05-16T05:14:54Z",
    "total_results": 5
  },
  "query": "car turning upside down",
  "search_options": [
    "visual"
  ],
  "search_pool": {
    "index_id": "627de802f18e21febd160ba9",
    "total_count": 2,
    "total_duration": 582
  },
  "type": "search_create"
}
```

### List All the Videos in an Index

To list all the videos in an index, call the **GET** method of the `indexes/videos` endpoint, replacing `<YOUR_INDEX_ID>` with the unique identifier of your index:

<Tabs>
<TabItem value="py" label="Python">

```python
INDEX_ID = "<YOUR_INDEX_ID>"
INDEXES_VIDEOS_URL = f"{API_URL}/indexes/{INDEX_ID}/videos"
response = requests.get(INDEXES_VIDEOS_URL, headers=headers)
print (f'Status code: {response.status_code}')
pprint (response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
const INDEX_ID = 'YOUR_INDEX_ID'
const INDEXES_VIDEOS_URL = `${API_URL}/indexes/${INDEX_ID}/videos`
const config = {
    method: 'get',
    url: INDEXES_VIDEOS_URL,
    headers: headers,
}
const resp = await axios(config)
const response = await resp.data
console.log(`Status code:  ${resp.status)`)
console.log(JSON.stringify(response, null, 2))
```
</TabItem>
</Tabs>

The output should look similar to the following one. Note that, in the example output below, two videos named `01.mp4` and `02.mp4` are being stored in the index:

```output showLineNumbers {6,16}
Status code: 200
{'data': [{'_id': '627df188ba9f116e5ea92a75',
           'created_at': '2022-05-13T05:50:00Z',
           'indexed_at': '2022-05-13T06:02:06Z',
           'metadata': {'duration': 552.92,
                        'filename': '01.mp4',
                        'fps': 25,
                        'height': 720,
                        'size': 148108668,
                        'width': 1280},
           'updated_at': '2022-05-13T05:50:00Z'},
          {'_id': '627de9b2ba9f116e5ea92a74',
           'created_at': '2022-05-13T05:16:34Z',
           'indexed_at': '2022-05-13T05:31:05Z',
           'metadata': {'duration': 30.033333,
                        'filename': '02.mp4',
                        'fps': 30,
                        'height': 270,
                        'size': 1570024,
                        'width': 480},
           'updated_at': '2022-05-13T05:16:34Z'}],
 'page_info': {'limit_per_page': 10,
               'page': 0,
               'total_page': 0,
               'total_results': 2},
 'type': 'video_index_list'}
```

## Related Topics
- [Make a Search Request](/api-reference/search#make-a-search-request)
- [List Video Vectors]


## How Do Multiple Search Options Work?

You can specify multiple search options in conjunction with the `operator` parameter to broaden or narrow your search. For details and examples, see the [Multiple Search Options](/guides/performing-searches/multiple-search-options) page.
