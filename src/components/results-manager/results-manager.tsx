import { Component, h } from "@stencil/core";
import template1 from "./template-1.html";
import template2 from "./template-2.html";

/**
 * Component used to manage results & result templates.
 * See https://docs.coveo.com/en/atomic/latest/usage/create-a-result-list/
 */
@Component({
  tag: "results-manager",
  shadow: false,
})
export class ResultsManager {
  public render() {
    return (
      <atomic-result-list
        fields-to-include="ytviewcount,date,date,source,author,sourcetype,language,filetype,ytcategory,ytvideotags"
        display="grid"
        density="comfortable"
      >
        <atomic-result-template must-match-source="Coveo Samples - Youtube BBC News">
          <template innerHTML={template1}></template>
        </atomic-result-template>
        <atomic-result-template>
          <template innerHTML={template2}></template>
        </atomic-result-template>
      </atomic-result-list>
    );
  }
}
