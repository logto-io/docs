---
sidebar_label: Guide to implement connectors
sidebar_position: 2
---

# Guide to implementing connectors

After looking at the connector's file structure, let's discuss the implementation and main idea of developing a connector.

## Create a new account on the connector's website

Looking at the website and its console is always the first step in building a connector. You can find out some basic information about the connector provider.

## Search for the document which illustrates the functionality and workflow

We should search for documents with different topics as connectors vary by type: _Social Connector_ is used to guide end-users through OAuth 2.0 authorization sign-in flow, and _SMS/Email Connector_ is designed to call message sender APIs.

:::tip
_Social Connector_ doc keyword(s): authorization flow, OAuth 2.0 and obtaining user profile.<br/>
_SMS/Email Connector_ doc keyword: integrate SMS/Email sender API.
:::

## Implementation and critical information composition

### constant.ts

import ContentsInConstant from './fragments/\_constant_contents.md';

<ContentsInConstant />

### types.ts

import ContentsInTypes from './fragments/\_types_contents.md';

<ContentsInTypes />

### utils.ts^

import ContentsInUtils from './fragments/\_utils_contents.md';

<ContentsInUtils />

### index.ts

import ContentsInIndex from './fragments/\_index_contents.md';

<ContentsInIndex />

Congratulations! Your connector should be ready for work after going through this guide. Try it out! :rocket: :rocket: :rocket:
