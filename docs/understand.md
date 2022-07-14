---
id: understand
title: Understand
---

Twelve Labs Video Understanding API is a cloud-based, AI-powered video search service offering full natural language-based search. The API is organized around REST, and it allows you to integrate more than twenty state-of-the-art (”SOTA”) deep learning models that extract information from your videos and make it available to your applications. The API is compatible with most programming languages, and you can also use Postman or other REST clients to send requests and view responses.

## Architecture

The following diagram illustrates the architecture of Twelve Labs Video Understanding API:

![Architecture Overview of Twelve Labs Video Understanding API](/img/architecture.png)

The video search service is composed of the following main components:

- **Engines**: An engine indexes your videos and allows you to search for particular information. For now, only a single engine named marengo is available. However, Twelve Labs plans to add more engines in the future versions of the API. Each engine will use its own family of deep learning models to index data and will have a pricing model associated with it. For details about pricing, contact us at sales[at]twelvelabs.io.
- **Video Vectors**: When you upload a video, the engine transforms it into a list of floating numbers that contains multiple features such as time, objects, text in video, conversations, and actions. These lists are named video vectors. A video vector is like a compressed version of the video and contains all the information that Twelve Labs' deep-learning models need to perform fast, semantic, accurate, and scalable searches.
- Indexing options: Indexing options determine how the engine processes your videos and the types of searches you can perform. Twelve Labs currently offers three different indexing options: `visual`, `conversation`, and `text_in_video`. For more details, see the **Indexing Options** page. <!-- TODO: Add link-->
- **Indexes**: An index groups one or more video vectors and is the most granular level at which you can perform a search. When you create an index, you must specify the following properties:
  - Name
  - Engine
  - Indexing options

  :::info **NOTES**
  - you cannot modify the engine or the indexing options once the index has been created.
  - Indexes use a push model, meaning that you can push videos to an index whenever you like. For details, see the **Indexes/Tasks** endpoint. <!-- TODO: Add link-->
  :::

## Workflow

The following diagram illustrates on a high level the workflow of using the API:

![Workflow](/img/workflow.png)

The steps are as follows:
1. **Create an index**, specifying the name, indexing options, and the engine. The API creates a unique identifier for each index.
2. **Upload a video**, specifying the unique identifier of the index with which the video will be associated. The deep learning models will process your video according to the indexing options you’ve specified for the index, and store it as a video vector. The API creates a video indexing task and assigns it a unique identifier.
3. **Perform a search** by providing your search terms and the unique identifier of the index you want to query. For each match found, the search engine will return, among other information,  the unique identifier of the video, and the start and end time of the matching video fragment.
