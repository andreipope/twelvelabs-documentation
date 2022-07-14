import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const EnginesGetEnginePlugin =
  (system) => ({
    statePlugins: {
      spec: {
        wrapSelectors: {
          taggedOperations:  (oriSelector) => (state, ...args) => {
            const config = system.getSystem().getConfigs()
            const taggedOperations = oriSelector(state, ...args)
            config.method = "get"
            config.path = "/engines/{engine-id}"
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

export default class EnginesGetEngine extends React.Component {
  render() {
    return (
      <SwaggerUI
        url={"https://raw.githubusercontent.com/andreipope/twelvelabs-documentation/main/static/specs/openapi.yaml"}
        plugins={[EnginesGetEnginePlugin]}
      />
    );
  }
}
