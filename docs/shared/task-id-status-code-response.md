import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

Store the ID of your task in a variable named `TASK_ID` and print the status code and response:
  <Tabs>
  <TabItem value="py" label="Python">

  ```py 
  TASK_ID = response.json().get("_id")
  print (f"Status code: {response.status_code}")
  pprint (response.json())
  ```
  
  </TabItem>
  <TabItem value="js" label="Node.js">

  ```js
  const TASK_ID = response._id
  console.log(`Status code: ${resp.status}`)
  console.log(response)
  ```
  </TabItem>
  </Tabs>

