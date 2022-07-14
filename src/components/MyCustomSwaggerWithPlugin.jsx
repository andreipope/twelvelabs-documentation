import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const MySingleOperationPlugin =
  (system) => ({
    statePlugins: {
      spec: {
        wrapSelectors: {
          taggedOperations:  (oriSelector) => (state, ...args) => {
            const config = system.getSystem().getConfigs()
            const taggedOperations = oriSelector(state, ...args)
            // config.method = "get"
            // config.path = "/engines"
            console.log(config)
            if(config.method && config.path) {
              return taggedOperations
                .map((taggedOp) => taggedOp
                  .update("operations", ops => ops
                    .filter(op => op.get("path") === config.path && op.get("method") === config.method)
                  )
                )
                .filter(taggedOp => taggedOp.get("operations").size > 0)
            }
            return taggedOperations
          }
        }
      }
    }
  })

export default class MyCustomSwaggerWithPlugin extends React.Component {
  render() {
    return (
      <SwaggerUI
        url={"http://localhost:3000/specs/engines.yaml"}
        plugins={[MySingleOperationPlugin]}
      />
    );
  }
}