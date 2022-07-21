---
title: Indexing Options
id: indexing-options
---

Indexing options determine how a search engine processes your videos. You must specify the indexing options when you create a new index, and you cannot modify them once the index has been created. The following indexing options are available: 

- `visual`: The API service performs a multimodal audio-visual analysis of your videos and allows you to search by objects, actions, sound, movements, places, situational events, and complex audio-visual text descriptions. The following examples are valid search terms: "birds flying near a castle", "sun shining on water", "chickens on the road", "an officer holding a child's hand.", "crowd cheering in the stadium."
- `conversation`: The API extracts a description from the video and performs an NLP analysis on the transcript. This allows you to find the exact point in your video where the specified word or phrase is mentioned. Note that you can perform both semantic searches (the API service assesses the meaning and context) and exact searches (the API service searches for exact matches of your search terms). For more details, see the [Search](/api-reference/search) page.
- `text_in_video`: The API service performs a text recognition (OCR) of each frame and allows you to search for text that appears in your videos. Examples: signs, labels, subtitles, logos, presentations, documents.

:::info **NOTE**
The types of searches you can perform must be a subset of the indexing options.
:::