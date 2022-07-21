import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

_(Optional)_ You can use the [tasks/{_id}](/api-reference/indexes-tasks#retrieve-a-video-indexing-task) endpoint to monitor the indexing process. Wait until the status shows as `ready`:

  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  INDEX_TASK_STATUS_URL = f"{API_URL}/indexes/tasks/{TASK_ID}"
  while True:
      response = requests.get(INDEX_TASK_STATUS_URL, headers=headers)
      STATUS = response.json().get("status")
      if STATUS == "ready":
          print (f"Status code: {STATUS}")
          pprint (response.json())
          break
      time.sleep(10)
  ```
  
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const INDEX_TASK_STATUS_URL = `${API_URL}/indexes/tasks/${TASK_ID}`
  config = {
    method: 'get',
    url: INDEX_TASK_STATUS_URL,
    headers: headers,
  }
  let STATUS
  do {
    resp = await axios(config)
    response = await resp.data
    STATUS = response.status
    if (STATUS !== 'ready')
      await new Promise(r => setTimeout(r, 10000));
  } while (STATUS !== 'ready')
  console.log(`Status code: ${STATUS}`)
  console.log(response)
  ```
  </TabItem>
  </Tabs>

