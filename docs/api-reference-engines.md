---
id: api-reference-engines
title: Engines
---

import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


An engine indexes your videos and allows you to search for particular information. For now, only a single engine named `marengo` is available. However, Twelve Labs plans to add more engines in the future versions of the API. For details, see the **Roadmap** <!--TODO: Add link--> page.

The engine object has the following elements:
- `_id`: A string representing the identifier of the search engine.
- `allowed_index_options`: An array of strings representing the supported indexing options. For details, see the **Indexing Options** page. <!--TODO: Add link-->
- `author`: <!--TODO: Needs description-->
- `created_at`: A string representing the date and time, in the [RFC 3339 format](https://datatracker.ietf.org/doc/html/rfc3339), that the engine was created.
- `finetune`: A boolean indicating whether this engine supports fine-tunning. This feature is on the roadmap.
- `ready`: A boolean specifying whether this engine is ready to be used.
- `updated_at`: A string representing the date and time, in the [RFC 3339](https://datatracker.ietf.org/doc/html/rfc3339) format, that the engine was updated.


<SwaggerUI url="http://localhost:3000/specs/engines.yaml" supportedSubmitMethods="" defaultModelsExpandDepth="-1" />



