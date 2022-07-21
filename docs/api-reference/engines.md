---
id: engines
title: Engines
---

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"
import DisplayMethod from "../../src/components/DisplayMethod"

Use the engines endpoint to retrieve details about the available search engines.
The engine object has the following elements:
- `_id`: A string representing the identifier of the search engine.
- `allowed_index_options`: An array of strings representing the supported indexing options. For details, see the [Indexing Options](/concepts/indexing-options) page.
- `author`: A string indicating who created the index.
- `created_at`: A string representing the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the engine was created.
- `finetune`: A boolean indicating whether this engine supports fine-tunning. This feature is on the [roadmap](/roadmap).
- `ready`: A boolean specifying whether this engine is ready to be used.
- `updated_at`: A string representing the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the engine was updated.


## List Search Engines

<DisplayMethod path="/engines" method="get"/>

## Retrieve a Search Engine

<DisplayMethod path="/engines/{engine-id}" method="get"/>

## Related Topics

- [Search Engines](/concepts/search-engines)
