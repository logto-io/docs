---
sidebar_label: Connector file structure
sidebar_position: 2
---

# Connector file structure

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

## logo.svg

_logo.svg_ stores connector's logo.

## logo-dark.svg

_logo-dark.svg_ contains connector's dark mode logo.

:::note
See (TODO: link to connector reference logo part) to know more about the relationship between _logo.svg_ and _logo-dark.svg_.
:::

## README.md

_README.md_ is an elaborated guide for setting up the connector's config.

## configTemplate.json

_configTemplate.json_ gives an example of connector config.

## index.ts

_index.ts_ is the file for connector class implementation.

## index.test.ts

_index.test.ts_ is a file containing corresponding unit tests (UTs) for implementations in index.ts.

## types.ts

_types.ts_ is where you should define all variables' types.

## constant.ts

_constant.ts_ is where you should put all constants related to the connector, including _endpoints_, _metadata_, and so on.

## mock.ts

_mock.ts_ is the file you may put mocked values used for testing.

## utils.ts

_utils.ts_ is the file where developers sometimes put utility functions, and utils.test.ts should contain relating UTs.

## package.json

_package.json_ contains configurations of this connector repo.

## tsconfig.\*.json

_tsconfig.\*.json_ refers to a bundle of files with Typescript (TS) compiler configs.

:::tip
To correctly complete _package.json_ and _tsconfig.\*.json_, you can check these files of other connectors.
:::
