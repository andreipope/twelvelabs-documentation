---
title: Authentication
id: authentication
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

The API uses keys for authentication, and your key is similar to a password. Avoid distributing your API key to other users, or hard-coding it. Generate a new key whenever you think your account may have been compromised.

For security reasons, your API key automatically expires every two months. When your key has expired, you must generate a new one to continue using the API.


:::info **NOTES**
- If your policies require you to rotate keys more often, you can always generate a new key.
- If you want to pause using the API without deleting your account, you can revoke your API key.
:::

The process of managing your API key can be divided into the following tasks:
- **Retrieve your API key**: Go to the [Dashboard](https://api.twelvelabs.io/dashboard) page, and select the **Copy** button under the **API Key** section.
- **Generate a new API key**: Go to the [Dashboard](https://api.twelvelabs.io/dashboard) page, choose **Settings** from the sidebar, and then select the **Regenerate Key** button under the **API Key** section.
- **Revoke an API key**: Go to the **Dashboard** page, choose **Settings** from the sidebar, and then select the **Revoke Key** button under the **API Key** section.

## Making Requests to the API

Every time you make a request, you must pass the `x-api-key` header parameter with the value of your API key as shown in the example below:

<Tabs>
<TabItem value="py" label="Python">

```python
# Retrieve your API key from an environment variable named `API_KEY`
API_KEY = os.getenv('API_KEY')
assert API_KEY

# Declare the `headers` dictionary containing your API key
headers = {
    "x-api-key": os.getenv('API_KEY')
}

INDEXES_URL = f"{API_URL}/indexes"
INDEX_NAME = "<YOUR_INDEX_NAME>" 
data = {
    "engine_id": "marengo2",
    "index_options": ["visual", "conversation", "text_in_video"],
    "index_name": INDEX_NAME,
}
# Make a POST request to the `indexes` endpoint, passing the `x-api-key` header parameter
response = requests.post(INDEXES_URL, headers=headers, json=data)
INDEX_ID = response.json().get('_id')
print (f'Status code: {response.status_code}')
pprint (response.json())
```
</TabItem>
<TabItem value="js" label="Node.js">

```js
// Retrieve your API key from an environment variable named `API_KEY`
const API_KEY = process.env.API_KEY
if (typeof API_KEY === 'undefined') {
  console.log('API_KEY is not defined.')
  process.exit(1)
}

// Declare the `headers` object containing your API key
const headers = {
  'x-api-key': process.env.API_KEY
}
  
const INDEXES_URL = `${API_URL}/indexes`
const INDEX_NAME = '<YOUR_INDEX_NAME>' 
let data = JSON.stringify({
  "engine_id": "marengo",
  "index_options": ["visual", "conversation", "text_in_video"],
  "index_name": INDEX_NAME
})
let config = {
  method: 'post',
  url: INDEXES_URL,
  headers: headers,
  data : data
}

// Make a POST request to the `indexes` endpoint, passing the `x-api-key` header parameter
let resp = await axios(config)
let response = await resp.data
const INDEX_ID = response._id
console.log(`Status code: ${resp.status}`)
console.log(response)
```
</TabItem>
</Tabs>

If your key has expired or is invalid, the response should look similar to the following:

```json
{
    "code": 401,
    "error": "token is not valid",
    "message": "Please provide a valid token"
}
```