---
title: 1. Set Up an Integration
id: set-up-an-integration
---

An integration grants Twelve Labs access to read the files in your S3 bucket. Before you can use the cloud-to-cloud transfer feature, you must set up an integration by following the steps in this guide.


## Prerequisites

- Before starting this procedure, make sure you have the following information available:
  - Your AWS account ID. For instructions, see the [Finding Your AWS Account ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html#FindingYourAWSId) section of the AWS documentation
  - The name of your bucket
- Your bucket must be in the `us-west-2` region.

## Procedure

1. Go to the [Dashboard](https://api.twelvelabs.io/dashboard) page.
2. From the sidebar, choose **Integrations**. Then, select **Add Integration** > **AWS S3**:
  ![Add Integration](/img/add-integration-aws-s3.png)
3. In the **Integrate AWS S3** modal, enter your AWS ID and bucket name. Then, select the **Next** button:
  ![Integrate AWS S3 - Select Next](/img/integrate-aws-s3-select-next-2.png)

### Create an AWS Policy

1. Open the [IAM Dashboard](https://us-east-1.console.aws.amazon.com/iam/home#/home) page.
2. From the sidebar, choose **Policies** . Then, select the **Create Policy** button:
  ![Select Create Policy](/img/iam-console-select-create-policy-2.png)
3. Select the **JSON** tab:
  ![Select JSON tab](/img/create-policy-select-json-tab.png)
4. Move to the **Twelve Labs Dashboard** page, and copy the JSON snippet under **Step 1 : Create Policy:**
  ![Copy JSON](/img/step-1-create-policy-copy-json-2.png)
5. Move to the **IAM Dashboard** page, and replace the content of the **JSON** tab with the snippet you've copied in the previous step. Then, select the **Next: Tags** button:
  ![Select Next Tags](/img/select-next-tags.png)
6. _(Optional)_: On the **Add Tags** page, add any tags you want to associate with the policy. Then, select the **Next: Review** button:
  ![Select Next Review](/img/select-next-review.png)
7. On the **Review Policy** page, set the name of the policy to "TwelvelabsIntegrationPolicy" and enter a brief description. Then, select the **Create Policy** button:
  ![Select Create Policy](/img/select-create-policy.png)
  
  :::info **NOTE**
  Do not change the name of the policy. If you rename the policy, the integration will not work.
  :::

8. On the **Policies** page, make sure that the system displays your new policy:
  ![Make sure the policy is displayed](/img/make-sure-your-policy-is-displayed.png)

  :::info **NOTE**
  If the system does not display your policy, review the steps in this section, making sure all the information you entered is correct. 
  :::


### Create an AWS Role

1. From the sidebar, choose **Roles**. Then, select the **Create Role** button:
  ![Select Create Roles](/img/select-roles-create-role.png)
2. Under **Trusted Entity Type**, select **Custom Trust Policy**:
  ![Select Custom Trust Policy Roles](/img/select-custom-trust-policy.png)
3. Move to the **Twelve Labs Dashboard** page, and copy the JSON snippet under **Step 2 : Create Role**:
  ![Create Role - Copy JSON](/img/step-2-create-role-copy-json.png)
4. Move to the **IAM Dashboard** page, and replace the content of the **Custom trust policy** box with the snippet you've copied in the previous step. Then, select the **Next** button:
  ![Paste trust policy and select Next](/img/paste-trust-policy-and-select-next.png)
5. On the **Add Permissions** page, select the policy you've created in the previous section. Then, select the **Next** button at the bottom-right corner of the page:
  ![Select Twelve Labs integration policy](/img/select-twelve-labs-integration-policy.png)
6. On the **Name, Review, and Create** page, set the name of the role to `TwelvelabsIntegrationRole` and enter a brief description. Then, select the **Create Role** button:
  ![Name review and create](/img/name-review-and-create.png)

  :::info **NOTE**
  Do not change the name of the role. If you rename the role, the integration will not work.
  :::

7. On the **Roles** page, make sure that the system displays your new role:
  ![Make sure your role has been created](/img/make-sure-your-role-has-been-created.png)

  ::: **NOTE**
  If the system does not display your role, review the steps in this section, making sure all the information you entered is correct.
  :::

### Verify Your Integration Configuration

1. Move to the Twelve Labs dashboard. Under **Step 3 : Check Verification**, select the **Verify My Account** button:
  ![Verify my account](/img/select-verify-my-account.png)

  If everything went well, you should see a message saying "Verification successful!":
  ![Verification successful](/img/verification-successful.png)

2. Select the **Done** button:
  ![Select Done](/img/select-done.png)
3. On the **Connected Integrations** page, make sure that the status of your new integration shows as **Active**:
  ![Status shows as Active](/img/status-active.png)

  ::: **NOTE**
  When the status of your integration shows as **Active**, it means that the API service can access the videos in your S3 bucket. If the status does not show as **Active**,  review the steps in this section, making sure all the information you entered is correct.
  :::
