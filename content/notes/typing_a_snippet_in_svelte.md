+++
title = "Typing A Snippet in Svelte"
author = ["Darrell Banks"]
date = 2025-10-30T00:00:00-06:00
lastmod = 2025-11-26T00:00:00-07:00
tags = ["notes"]
draft = false
+++

**Connections**: [Software Engineering]({{< relref "../categories/software_engineering.md" >}})

\`\`\`
import type { Snippet } from "svelte";

interface Props {
	children?: Snippet;
}
\`\`\`
