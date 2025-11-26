---
title: "Record vs. Object"
author: ["Darrell Banks"]
date: 2025-04-25T00:00:00-06:00
lastmod: 2025-05-02T00:00:00-06:00
tags: ["notes", "typescript", "engineering"]
draft: false
---

**Connections**: [Software Engineering]({{< relref "../categories/software_engineering.md" >}}) [Typescript]({{< relref "../categories/typescript.md" >}})


## Defining Objects {#defining-objects}

When defining the types of key value pairs in Typescript, there are two
common ways to go about it.

The most common way is to just use a  combined with the `in`
operator to define the keys. Notably, this construct is only available
with `types` and not `interfaces`

```typescript
type CatName = "fuzzy" | "kitty" | "furball"

type CatAges = {
  [key in CatName]: number;
}
```

This can also be accomplished by using the \`Record\` utility type, and
I think more clearly illustrates the intent

```typescript
type CatName = "garfield" | "eek"

type CatAges = Record<CatName, number>;
```
