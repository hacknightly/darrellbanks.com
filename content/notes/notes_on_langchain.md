---
title: "Notes on Langchain"
author: ["Darrell Banks"]
date: 2025-06-12T00:00:00-06:00
lastmod: 2025-11-26T00:00:00-07:00
tags: ["notes"]
draft: false
---

**Connections**:  [Software Engineering]({{< relref "../categories/software_engineering.md" >}})


## What is LangChain? {#what-is-langchain}


### Langchain is a framework for developing applications powered by LLMs {#langchain-is-a-framework-for-developing-applications-powered-by-llms}


### Combines open source components and third-party integrations to assist with development {#combines-open-source-components-and-third-party-integrations-to-assist-with-development}


### Implements a standard interface for large language models and [related technologies](https://python.langchain.com/docs/integrations/providers/) {#implements-a-standard-interface-for-large-language-models-and-related-technologies}

```python
from langchain_core.messages import HumanMessage, SystemMessage

messages = [
  SystemMessage("Translate the following from English into Italian"),
  HumanMessage("hi")
]

model.invoke(messages)
```
