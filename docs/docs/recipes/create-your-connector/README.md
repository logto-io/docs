---
sidebar_position: 4
---

# 🧑‍🔬 Create your connector

Currently, Logto has provided many widely used social sign-in connectors such as WeChat, Alipay, Google, Facebook, etc., and SMS/Email connectors such as AliCloud, SendGrid, and Twilio.

They should be able to satisfy most users' needs at this stage, but _Logto will keep making progress_ :fire:

We will provide more connectors in the future, and you can also develop your connectors, and we encourage you to share your connectors with the whole community.

Let's see how to become an honorable contributor to Logto Project by starting with building a connector :coffee:

## Connector file structure

Attached is a file tree to demonstrate the composition of each connector.

Files whose name ends up with "^" refer to **optional** files, otherwise are required.

```
ConnectorRootDir/
├── logo.svg
├── logo-dark.svg^
├── README.md
├── docs/
│   └── configTemplate.json
├── src/
│   ├── index.ts
│   ├── index.test.ts
│   ├── types.ts
│   ├── constant.ts
│   ├── mock.ts^
│   ├── utils.ts^
│   ├── utils.test.ts^
│   └── ...
├── package.json
└── tsconfig.*.json
```

Based on this connector file structure, let's go through each file and figure out how they work as a whole part.

### logo.svg

_logo.svg_ stores connector's logo.

### logo-dark.svg

_logo-dark.svg_ contains connector's dark mode logo.

:::note
See (TODO: link to connector reference logo part) to know more about the relationship between _logo.svg_ and _logo-dark.svg_.
:::

### README.md

_README.md_ is an elaborated guide for setting up the connector's config.

### configTemplate.json

_configTemplate.json_ gives an example of connector config.

### index.ts

_index.ts_ is the file for connector class implementation.

### index.test.ts

_index.test.ts_ is a file containing corresponding unit tests (UTs) for implementations in index.ts.

### types.ts

_types.ts_ is where you should define all variables' types.

### constant.ts

_constant.ts_ is where you should put all constants related to the connector, including _endpoints_, _metadata_, and so on.

### mock.ts

_mock.ts_ is the file you may put mocked values used for testing.

### utils.ts

_utils.ts_ is the file where developers sometimes put utility functions and utils.test.ts should contain relating UTs.

### package.json

_package.json_ contains configurations of this connector repo.

### tsconfig.\*.json

_tsconfig.\*.json_ refers to a bundle of files with Typescript (TS) compiler configs.

:::tip
To correctly complete _package.json_ and _tsconfig.\*.json_, you can check these files of other connectors.
:::

## Guidelines to implement connector

After taking a look at connector's file structure, let's talk about the implementation and main idea of developing a connector.

### Create a new account on the connector's website

Looking at the website and its console is always the first step in building a connector. You can find out some basic information about the connector provider.

### Search for the document which illustrates the functionality and workflow

We should search for documents with different topics as connectors vary by type: _Social Connector_ is used to guide end-users through OAuth 2.0 authorization sign-in flow, and _SMS/Email Connector_ is designed to call message sender APIs.

:::tip
_Social Connector_ keyword(s): "authorization flow", "OAuth 2.0" and "obtaining user profile".<br/>
_SMS/EMail Connector_ keyword: "integrate SMS/Email sender API".
:::

### Organize key information from documents (Implementation)

#### constant.ts

import ContentsInConstant from './fragments/\_constant_contents.md';

<ContentsInConstant />

#### types.ts

import ContentsInTypes from './fragments/\_types_contents.md';

<ContentsInTypes />

#### utils.ts^

import ContentsInUtils from './fragments/\_utils_contents.md';

<ContentsInUtils />

#### index.ts

import ContentsInIndex from './fragments/\_index_contents.md';

<ContentsInIndex />

_**Congratulations! Your connector should be ready for work after going through this guide, try it out!**_ :rocket::rocket::rocket:
