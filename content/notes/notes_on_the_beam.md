---
title: "Notes on the BEAM"
author: ["Darrell Banks"]
date: 2025-06-06T00:00:00-06:00
lastmod: 2025-11-26T00:00:00-07:00
tags: ["notes"]
draft: false
---

**Connections**: [Software Engineering]({{< relref "../categories/software_engineering.md" >}}) [Erlang]({{< relref "../categories/erlang.md" >}})


## The BEAM Book {#the-beam-book}


### Chapter 1: Understanding ERTS {#chapter-1-understanding-erts}


#### The Compiler {#the-compiler}

<!--list-separator-->

-  can be called directly via erlc &lt;filename&gt;

<!--list-separator-->

-  can be run from within erl via **c(&lt;filename&gt;)**

    <!--list-separator-->

    -  or compile:file(&lt;filename&gt;)

<!--list-separator-->

-  normally outputs a .beam file

<!--list-separator-->

-  can alternatively output at different intermediate steps ie binary, **to_core**, 'P',

    <!--list-separator-->

    -  binary

        <!--list-separator-->

        -  returns the intermediate format as a term instead of writing it to a file

    <!--list-separator-->

    -  **to_core**?

        <!--list-separator-->

        -  outputs &lt;filename&gt;.core

    <!--list-separator-->

    -  'P' is preprocessed, after all includes, macros, and conditionals have been evaluated

        <!--list-separator-->

        -  oupupts &lt;filename&gt;.P

<!--list-separator-->

-  can pick up the compilation from a later stage, for example from a core file

    <!--list-separator-->

    -  erlc foo.core

<!--list-separator-->

-  Has tools like **yeek** and **Yecc** are available when you want to compile your own language to the EVM


#### Processes {#processes}

<!--list-separator-->

-  A process is an isolated entity where code execution occurs.

    <!--list-separator-->

    -  has its own address space

    <!--list-separator-->

    -  can communicate with other processes through signals and messages

    <!--list-separator-->

    -  execution is controlled by a preemptive scheduler

    <!--list-separator-->

    -  has a default starting heap size of 233 words

<!--list-separator-->

-  Observer

    <!--list-separator-->

    -  Obsever is a graphical interface for inspecting processes in Erlang

    <!--list-separator-->

    -  Can be started with observer:start()

    <!--list-separator-->

    -  Is essentially four blocks of memory

        <!--list-separator-->

        -  a stack

        <!--list-separator-->

        -  a heap

        <!--list-separator-->

        -  a message area

        <!--list-separator-->

        -  the Process Control Block (PCB)
