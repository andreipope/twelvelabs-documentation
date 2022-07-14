import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const IndexesCreatePlugin =
  (system) => ({
    statePlugins: {
      spec: {
        wrapSelectors: {
          taggedOperations:  (oriSelector) => (state, ...args) => {
            const config = system.getSystem().getConfigs()
            const taggedOperations = oriSelector(state, ...args)
            config.method = "post"
            config.path = "/indexes"
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

export default class IndexesCreate extends React.Component {
  render() {
    return (
      <SwaggerUI
        url={"http://localhost:3000/specs/openapi.yaml"}
        plugins={[IndexesCreatePlugin]}
      />
    );
  }
}