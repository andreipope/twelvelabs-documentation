---
title: API Changelog
id: api-changelog
---

This page lists the changes made to the Twelve Labs Video Understanding API.

## 2022-07-03

- **Search Engines**: Introducing the second version of the Marengo search engine. Its state-of-the-art AI technology provides a 70% relative performance increase when performing visual searches compared to the first version.
- **BREAKING CHANGE**: When you specify multiple search options, you can now use the `operator` parameter to broaden and narrow your search. The default value is `OR`. This is a breaking change as, previously, the API always performed a logical `AND` operation. Therefore, you must update the existing code that uses the `search` endpoint.
For details and examples, see the [Search](/api-reference/search) and [Multiple Search Options](/guides/performing-searches/multiple-search-options) pages.