---
sidebar_label: Connector file structure
sidebar_position: 1
---

# Connector file structure

Attached is a file tree to demonstrate how are connectors' files organized as a TypeScript project.

Files whose name ends up with `^` refer to an optional file, otherwise are required.

```
ConnectorRootDir/
├── package.json
├── tsconfig.build.json
├── tsconfig.test.json^
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

`package.json` contains configurations of this connector repo.

## tsconfig.\*.json

`tsconfig.\*.json` refers to compiler configuration files including `tsconfig.build.json` and `tsconfig.test.json`.<br/>
The former `tsconfig.build.json` is usually needed to configure building process while the later `tsconfig.test.json` is required only when testing exists.

:::tip
To correctly complete `package.json` and `tsconfig.\*.json`, you may check other connectors for reference.
:::

## README.md

`README.md` is an elaborated guide for setting up the connector's config.

## logo.svg

`logo.svg` is a file that stores the connector's logo in vector image format.

## logo-dark.svg

`logo-dark.svg` file contains vector graphic of connector's dark mode logo.

:::note
See (TODO: link to connector reference logo part) to know more about the relationship between `logo.svg` and `logo-dark.svg`.
:::

## configTemplate.json

`configTemplate.json` gives an example of connector config.

## index.ts

`index.ts` is the file for connector class implementation.

## index.test.ts

`index.test.ts` is a file containing corresponding unit tests (UTs) for implementations in `index.ts`.

## types.ts

`types.ts` is where you should define variables' types.

## constant.ts

`constant.ts` is where you should put constants related to the connector, including endpoints, connector metadata, etc.

## mock.ts

`mock.ts` is the file you may put mocked values for testing purposes.

## utils.ts

`utils.ts` is the file where developers put utility functions, and `utils.test.ts` should contain relating UTs.
