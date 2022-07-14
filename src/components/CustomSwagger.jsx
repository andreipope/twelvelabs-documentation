import React from 'react';
import clsx from 'clsx';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import SwaggerUI from "swagger-ui-react"
import "swagger-ui-react/swagger-ui.css"

export default function CustomSwagger({filename}) {
  /*
  const {
    siteConfig: {SPEC_URL},
  } = useDocusaurusContext();
  */ 
  const {siteConfig} = useDocusaurusContext();
  // const SPEC_URL = "http://localhost:3000/specs/engines.yaml";

  // return <SwaggerUI url="http://localhost:3000/specs/engines.yaml" supportedSubmitMethods="" defaultModelsExpandDepth="-1" />;
  // return filename
  const URL = siteConfig.customFields.SPEC_URL + filename
  // return <SwaggerUI url={siteConfig.customFields.SPEC_URL} />;
  return <SwaggerUI url={URL} supportedSubmitMethods=''/>;

}
