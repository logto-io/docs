---
sidebar_label: Connector file structure
sidebar_position: 1
---

# Connector file structure

Attached is a file tree to demonstrate how are connectors' files organized.

Files whose name ends up with `^` refer to an optional file, otherwise are required.

```
ConnectorRootDir/
├── package.json
├── tsconfig.*.json
├── README.md
├── logo.svg
├── logo-dark.svg^
├── docs/
│   └── configTemplate.json
└── src/
    ├── index.ts
    ├── index.test.ts
    ├── types.ts
    ├── constant.ts
    ├── mock.ts^
    ├── utils.ts^
    ├── utils.test.ts^
    └── ...
```

Based on the connector file structure, let's go through each file and figure out how they work together as a whole system.

## package.json

_package.json_ contains configurations of this connector repo.

## tsconfig.\*.json

_tsconfig.\*.json_ refers to a bundle of compiler config files.

:::tip
To correctly complete _package.json_ and _tsconfig.\*.json_, you may check other connectors for reference.
:::

## README.md

_README.md_ is an elaborated guide for setting up the connector's config.

## logo.svg

_logo.svg_ is a file that stores the connector's logo in vector image format.

## logo-dark.svg

_logo-dark.svg_ file contains vector graphic of connector's dark mode logo.

:::note
See (TODO: link to connector reference logo part) to know more about the relationship between _logo.svg_ and _logo-dark.svg_.
:::

## configTemplate.json

_configTemplate.json_ gives an example of connector config.

## index.ts

_index.ts_ is the file for connector class implementation.

## index.test.ts

_index.test.ts_ is a file containing corresponding unit tests (UTs) for implementations in _index.ts_.

## types.ts

_types.ts_ is where you should define variables' types.

## constant.ts

_constant.ts_ is where you should put constants related to the connector, including endpoints, connector metadata, etc.

## mock.ts

_mock.ts_ is the file you may put mocked values for testing purposes.

## utils.ts

_utils.ts_ is the file where developers put utility functions, and _utils.test.ts_ should contain relating UTs.
