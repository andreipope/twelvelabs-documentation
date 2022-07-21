---
title: Cloud-to-Cloud Transfers
id: overview
slug: /guides/uploading-videos/cloud-to-cloud-transfers 
---

Cloud-to-cloud transfers allow you to group multiple video indexing operations in a single API request. Initially, this feature is supported for the `us-west-2` region of AWS S3. Later, this feature will be extended to all the regions and other cloud providers. For details, see the [Roadmap](/roadmap) page.

The steps for performing a cloud-to-cloud-transfer are as follows:
1. **Set up an integration**. When you set up an integration, you grant Twelve Labs access to read the files in your S3 bucket. 
2. **Download the list of files in your S3 bucket**. After an integration is set up , you must open the [Integrations](https://api.twelvelabs.io/integrations) page to download the list of videos in your S3 bucket as a JSON file. Optionally, you can edit the file in a plain text editor.
3. **Transfer and index videos**. Invoke the [indexes/tasks/transfers](/api-reference/indexes-tasks-transfers) endpoint to transfer and index your videos.

The topics in this section provide instructions for managing integrations and making cloud-to-cloud transfers.

1. [Set Up an Integration](./set-up-an-integration.md)
2. [Download and Edit the List of Videos](/guides/uploading-videos/cloud-to-cloud-transfers/download-and-edit-the-list-of-videos)
3. [Transfer and Index Videos](/guides/uploading-videos/cloud-to-cloud-transfers/transfer-and-index-videos)
4. [Manage Integrations](/guides/uploading-videos/cloud-to-cloud-transfers/manage-integrations)
