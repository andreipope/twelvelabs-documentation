import React from 'react';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

const DisplayMethodPlugin =
  (system, {method, path}) => ({
    statePlugins: {
      spec: {
        wrapSelectors: {
          taggedOperations:  (oriSelector) => (state, ...args) => {
            // const config = system.getSystem().getConfigs()
            const taggedOperations = oriSelector(state, ...args)
            if(method && path) {
              return taggedOperations
                .map((taggedOp) => taggedOp
                  .update("operations", ops => ops
                    .filter(op => op.get("path") === path && op.get("method") === method)
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

export default class DisplayMethod extends React.Component {
  render() {
    // console.log({method})
    return (
      <SwaggerUI
        // url={this.props.url}
        url = "http://localhost:3000/specs/openapi.yaml"
        plugins={[(system) => DisplayMethodPlugin(system, { path: this.props.path, method: this.props.method})]}
        defaultModelsExpandDepth={-1}
      />
    );
  }
}
