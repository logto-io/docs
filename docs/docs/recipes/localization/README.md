---
sidebar_position: 7
---

# 🌐 Localization

:::caution
This page is a temporary solution and greatly simplified since it's not ideal. We're working in progress on an easy way of doing localization for the upcoming version. Stay tuned.
:::

1. Set up a Logto dev environment.
2. Add your language code to `enum Language` in `packages/phrases/src/types.ts`.
3. Create a `.ts` file using your language code in lowercase (`packages/phrases/src/locales/fr.ts`), and mimic the content of `zh-cn.ts`.
4. Add your locale to `const resource` in `packages/phrases/src/index.ts`.
5. Build Logto and try.
