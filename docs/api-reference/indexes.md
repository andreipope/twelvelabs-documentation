---
id: indexes 
title: Indexes 
---

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import IndexesCreate from "../../src/components/IndexesCreate"


An index groups one or more videos stored as vectors and is the most granular level at which you can perform a search. The index object has the following elements:
- `_id`: A string representing the unique identifier of the index. It is assigned by the API when an index is created.
- `index_name`: A string representing the name of the index.
- `index_options`: An array of strings that determines how the engine processes your videos. Twelve Labs currently offers three different indexing options: visual, conversation, text_in_video. For more details, see the **Indexing Options** <!--TODO: Add link--> page.
- `created_at`: A string representing the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the index was created.
- `updated_at`: A string representing the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the index was updated.
- `engine_id`: A string representing the unique identifier of the engine that the API will use to index the videos in this index.
- `video_count`: An integer representing the number of video vectors in the index.
- `total_duration`: An integer representing the total duration of the videos in the index.

## Create an Index

<IndexesCreate />

