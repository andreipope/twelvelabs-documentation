---
title: Search Engines
id: search-engines
---

An engine indexes your videos and allows you to find specific moments in your video library.
While using the API, you interact with a search engine in the following ways:

- **Creating indexes**: Each engine uses its own family of deep learning models to index videos. When you [create an index](/api-reference/indexes#create-an-index), you assign it to a search engine and specify how it'll process your videos by passing the [index_options](/concepts/indexing-options) parameter in the body of the request. These settings apply to all the videos you upload to your index and cannot be changed.
- **Performing searches**:  When you [perform a search](/guides/performing-searches), you pass the following parameters:
  - `query`: Represents your search query. Note that you can use everyday language. The following examples are valid queries: "birds flying near a castle", "sun shining on water", "chickens on the road", "an officer holding a child's hand.", "crowd cheering in the stadium."
  - `search_options`: Indicate the source of information the search engine uses to perform a search. This parameter can take one or more of the following values: visual, conversation, text_in_video. For details, see the [Search Options](/concepts/search-options) page.
  - `conversation_option`: Indicates whether the search engine should return the results that are semantically similar to your search query or it should return only the exact matches.

    The search engine uses these parameters to find the moments in your videos that match your requirements and returns an array of objects as described in the [Response Schema](/api-reference/search#response-schema) section.

To handle different use cases and to improve the performance of the API service, Twelve Labs has developed the search engines described in the sections below.

## Marengo2

The second version of the Marengo search engine offers performance improvements over the first version. Its state-of-the-art AI technology provides a 70% relative performance increase when performing visual searches compared to the first version.

:::info **NOTE**
Twelve Labs strongly recommends you use `marengo2`.
:::

## Marengo

Marengo is the search engine that was available when the API service launched. It allows you to find the exact moments in your videos by writing semantic queries in everyday language.
​




