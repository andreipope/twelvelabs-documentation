---
title: Search
id: search
---

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

import DisplayMethod from "../../src/components/DisplayMethod"

Use the `/search` endpoint to search for relevant matches in an index. This endpoint supports pagination and filtering.

:::info **NOTE**
When you use pagination, you will not be charged for retrieving subsequent pages of results.
:::

## Make a search request

<DisplayMethod path="/search" method="post"/>

### Response Schema

The response is in JSON format.

On success, it contains the following fields:

- `conversation_option`: Indicates the type of search the API performed (`semantic` or `transcription`
- `data`: An array that contains your search results. For each match found, the search engine returns the following fields:
  -`start` and `end`: Start and end time of the matching video fragment, expressed in seconds.
  - `video_id`: A string representing the unique identifier of the video vector. Once the API service indexes a video, it assigns a unique identifier. Note that this is different from the identifier of the video indexing task. To map the identifier of a video indexing task to the identifier of a video vector, you can use the `/indexes/tasks/:task-id/video-id` endpoint. For details, see the [Retrieve a Video Vector ID Based on a Task ID](/api-reference/indexes-tasks#retrieve-a-video-vector-id-based-on-a-task-id) section.
  - `metadata`: An array that contains details about each result. It has the following fields:
    - `type`: A string that indicates the type of match (visual, conversation, text_in_video).
    - `text`: For conversation and text_in_video, the API returns a transcription of the spoken words or the text that matches your search query.
  - `score`: A quantitative value determined by the AI engine representing the similarity score between your search terms and the matching video fragment.
  - `confidence`: A qualitative indicator measured by the internal QA team based on the value of the score field. This field can take one of the following values:
    - `high`: For scores greater than 90 and less than 100
    - `medium`: For scores greater than 80 and less than 90
    - `low`: For scores greater than 70 and less than 80
    - `extremely low`: for scores greater than 70 and less than 80
- `page_info`: An object that provides information about pagination. It has the following fields:
  - `limit_per_page`: The maximum number of items on each page.
  - `page_expired_at`: A string representing the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the page expires.
  - `total_result`: The total number of results.
- `query`: The search query you specified.
- `search_options`: The search options you used.
- `search_pool`: An array that contains details about the index you queried.

On failure, it contains the following fields:
- `message`: A human-readable string describing the error.
- `error_code`: Represents the code associated with the error. See the [Error Codes](/api-reference/error-codes) page for details.

### Related Topics

- [Performing Searches](/guides/performing-searches)
- [Filter Search Results Based on Metadata](/concepts/filtering/metadata)
