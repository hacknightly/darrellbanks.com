---
title: "Record vs. object in Typescript"
author: ["Darrell Banks"]
date: 2025-01-23T00:00:00-07:00
draft: false
---

**Link**:[Engineering]({{< relref "engineering.md" >}})

Often when defining an object type in Typescript, you might wonder
whether to use \`Record\` or a plain object type. The difference is that
\`Record\` is a utility type that allows you to define an object with
specific types for its keys and values. This could also be
accomplished in-line with a plain object type and dynamic keys, but
\`Record\` can make the intent clearer.
