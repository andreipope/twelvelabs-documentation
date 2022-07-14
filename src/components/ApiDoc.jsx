import { fromJS } from 'immutable'
import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"


const apiUrl = 'http://localhost:3000/specs/engines.yaml';

class MyTestLayout extends React.Component {
  render() {
    const {
      funcs,
      params
    } = this.props

    const specSelectors = {
      isOAS3() { return true },
      url() { return apiUrl },
      taggedOperations() {
        return fromJS({
          "default": {
            "operations": [
              {
                "path": params.path,
                "method": params.method
              }
            ]
          }
        })
      },
    }

    const Operations = funcs.getComponent("operations", true)

    return (
      <div>
        <Operations specSelectors={specSelectors} />
      </div>
    )
  }
}

// Create the plugin that provides our layout component
const TestPlugin = (props) => {
  return {
    components: {
      TestLayout: (funcs) => <MyTestLayout params={props} funcs={funcs} />
    }
  }
}


export default class ApiDoc extends React.Component {

  render() {
    return (
      <SwaggerUI
        url={apiUrl}
        docExpansion={"full"}
        plugins={[TestPlugin(this.props)]}
        layout={"TestLayout"}
      />
    );
  }
}



