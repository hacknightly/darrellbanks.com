---
title: "Notes on Learning Erlang"
author: ["Darrell Banks"]
date: 2025-06-07T00:00:00-06:00
lastmod: 2025-11-26T00:00:00-07:00
tags: ["notes"]
draft: false
---

**Connections**: [Erlang]({{< relref "../categories/erlang.md" >}})


## Starting Out {#starting-out}


### The Shell {#the-shell}


#### Start with **erl** {#start-with-erl}


#### User switch command is ^G {#user-switch-command-is-g}


### Variables {#variables}


#### Must start with an uppercase (because atoms are lowercase) {#must-start-with-an-uppercase--because-atoms-are-lowercase}


#### Operate on pattern matching under the hood {#operate-on-pattern-matching-under-the-hood}

<!--list-separator-->

-  ie One = 1. One = 2 + 1.

    &gt; exception error: no match of right hand side value 3


### Atoms {#atoms}


#### Must start with a lowercase (because variables are uppercase) {#must-start-with-a-lowercase--because-variables-are-uppercase}


#### Can be enclosed in single quotes if not starting with an uppercase, or if it contains other alphanumeric characters other than _ or @. {#can-be-enclosed-in-single-quotes-if-not-starting-with-an-uppercase-or-if-it-contains-other-alphanumeric-characters-other-than-or-dot}


#### Should never be generated dynamically, as they aren't garbage collected and will pile up in memory. {#should-never-be-generated-dynamically-as-they-aren-t-garbage-collected-and-will-pile-up-in-memory-dot}


### Boolean Algebra and Comparison Operators {#boolean-algebra-and-comparison-operators}


#### true, false, and, or, xor, not {#true-false-and-or-xor-not}


#### 5 **`:`** 5 -&gt; true {#5-5-true}


#### 1 **=**:= 0 -&gt; false {#1-0-false}


#### 1 **`/`** 0 -&gt; true {#1-0-true}


#### 5 **`:`** 5.0 -&gt; false {#5-5-dot-0-false}


#### 5 == 5.0 -&gt; true {#5-5-dot-0-true}


#### 5 /= 5.0 -&gt; false {#5-5-dot-0-false}


### Tuples {#tuples}


#### PreciseTemperature = {celsius, 23.212}. {#precisetemperature-celsius-23-dot-212-dot}


### Lists {#lists}


#### Can store multiple types {#can-store-multiple-types}

<!--list-separator-->

-  [1, 2, 3, {numbers, [4,5,6]}, 5.34, atom].


#### Watch out! Strings are lists of numbers {#watch-out-strings-are-lists-of-numbers}

<!--list-separator-->

-  [97, 98, 99] -&gt; "abc"

<!--list-separator-->

-  Erlang will print lists of numbers as numbers only when at least one of them could not also represent a letter


#### List concatenation is done with **++** {#list-concatenation-is-done-with-plus-plus}

<!--list-separator-->

-  [1,2] ++ [3,4] = [1, 2, 3, 4]


#### List removal is done with **--** {#list-removal-is-done-with}

<!--list-separator-->

-  [1,2,3,4] -- [3,4] -&gt; [1,2]


#### List Comprehension {#list-comprehension}

<!--list-separator-->

-  [2\*N || N &lt;- [1,2,3,4]]


### Modules {#modules}


#### Modules are declared with the **-module(&lt;name&gt;)** syntax {#modules-are-declared-with-the-module--name--syntax}
