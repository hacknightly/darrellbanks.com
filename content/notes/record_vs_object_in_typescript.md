---
date: \[2025-01-23 Thu\]
id: C56A301A-1A0E-438B-851D-A35543AF410C
title: Record vs. object in Typescript
---

```{=org}
#+filetags: :notes:
```
```{=org}
#+hugo_section: notes
```
```{=org}
#+hugo_lastmod: [2025-01-23 Thu]
```
```{=org}
#+hugo_tags: frontend 
```
**Link**:[Engineering](id:CC58D5BD-1B6F-4464-AFC2-C805ED1B425D)

Often when defining an object type in Typescript, you might wonder
whether to use \`Record\` or a plain object type. The difference is that
\`Record\` is a utility type that allows you to define an object with
specific types for its keys and values. This could also be accomplished
in-line with a plain object type and dynamic keys, but \`Record\` can
make the intent clearer.
