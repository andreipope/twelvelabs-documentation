---
title: 2. Download and Edit the List of Videos 
id: download-and-edit-the-list-of-videos 
---

The [Integrations](https://api.twelvelabs.io/integrations) page allows you to download the list of files in your AWS S3 bucket as a JSON. The structure of the JSON file is described on the Indexes/Tasks/Transfers pagec <!--TODO: Add link-->. Once you've downloaded the JSON file, you can edit the fields in a plain text editor. For example, you can add transcription files or remove the files you don't want to upload and index.

## Prerequisites

- Before you can download the list of files in your AWS S3 bucket, you must [set up an integration](/docs/guides/uploading-videos/cloud-to-cloud-transfers/set-up-an-integration.md).


## Procedure

1. Go to the [Dashboard](https://api.twelvelabs.io/dashboard) page, and select **Integrations**:
  ![Select Integrations](/img/select-integrations.png)
2. Choose an integration, making sure that the status shows as **Active**. Then, to download  the list of files, select the **Get JSON** button:
 ![Select Get JSON](/img/select-get-json.png)

3. From the **Index** dropdown, choose an index to which you want to associate the videos and select the **Download** button. The following example screenshot specifies an index named `my-index`:
  ![Select Download](/img/select-download.png) 

4. _(Optional)_ You can edit your JSON file in a plain-text editor. For example, you can provide your custom transcription files, as shown in the following example:

  ```JSON
  [
    {
      "index_id": "6298d673f1090f1100476d4c",
      "language": "en",
      "object": "s3://twelve-labs-docs/01.mp4",
      "transcription": "s3://twelve-labs-docs/01.srt"
    },
    {
      "index_id": "6298d673f1090f1100476d4c",
      "language": "en",
      "object": "s3://twelve-labs-docs/02.mp4",
      "transcription": "s3://twelve-labs-docs/02.srt"
    }
  ]
  ```
