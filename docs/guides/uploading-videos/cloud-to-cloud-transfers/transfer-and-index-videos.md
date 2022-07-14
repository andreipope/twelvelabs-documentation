---
title: 3. Transfer and Index Videos 
id: transfer-and-index-videos 
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

import VideoRequirements from '../../../shared/video-requirements.md'
import Upload360pVideos from '../../../shared/upload-360p-videos.md'

This guide shows how to transfer the files from your AWS S3 bucket to Twelve Labs and index them.

:::info **NOTE**
The API service checks for duplicate files using hashes and will not upload the same video to the same index twice.
:::


## Prerequisites

- You already downloaded the list of files in your AWS S3 bucket.
- <VideoRequirements />


## Recommendations

- <Upload360pVideos />


## Procedure

1. Declare the `indexes/tasks/transfers` <!--TODO: Add link--> endpoint:

  <Tabs>
  <TabItem value="py" label="Python">

  ```python
  INDEXES_TASKS_TRANSFERS_URL = f"{API_URL}/indexes/tasks/transfers"
  ```
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```bash
  const INDEXES_TASKS_TRANSFERS_URL = `${API_URL}/indexes/tasks/transfers`
  ```
  </TabItem>
  </Tabs>

2. Read your JSON file. Open a stream making sure to replace the placeholders surrounded by `<>` with your values:


