---
title: "The Evolution of Frontend Software Engineering"
author: ["Darrell Banks"]
date: 2025-01-02T00:00:00-07:00
lastmod: 2025-01-02T00:00:00-07:00
tags: ["frontend"]
draft: false
---

## In the Beginning {#in-the-beginning}

When I began my journey in web development circa 2010, the "web 2.0"
movement was largely just beginning. Rounded corners were new and exciting,
social media was still in its infancy, and tools like [JQuery](https://jquery.com/) were
considered the gold standard in frontend "frameworks". The main
concern of web engineers at the time was that vanilla JavaScript
was just too cumbersome for the new world we found ourselves in. A
world where [Ajax](https://en.wikipedia.org/wiki/Ajax_(programming)) was the primary mechanism for fetching data, and DOM
manipulation was no longer the exception, but the rule. Gone were
the days of static webpages showcasing sophisticated [&lt;marquee /&gt;](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/marquee)
tags and table-based layouts. We needed accordions. Those accordions
needed to be animated. Those animations needed easing.

As a dynamic DOM and asynchronous data became the norm, the web
development community found itself facing new challenges. DOM
manipulation isn't free, and web page performance was now front and
center. Fetching data with Ajax meant that a user had to wait an
unknown amount of time for parts of the page to render. Loading
spinners were taking over the world. These were truly exciting times
as it meant that a page could do more than just show text and
images. A new class of website was being born; the web application.


## Abstractions All the Way Down {#abstractions-all-the-way-down}

Several new tools began to emerge to help tame the complexities of
building dynamic web applications. [AngularJS](https://angularjs.org/) rose to the top of the heap by
providing several new abstractions over JQuery. The most game-changing
was probably Angular's [two-way data binding](https://en.wikipedia.org/wiki/AngularJS#Two-way_data_binding), which made it so that instead
of manually updating the DOM after new data was fetched, it was always
updated automatically to reflect the new state. These ideas came from the
[MVC](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller) paradigm, where the data model (M) was the source of truth for the
view (V). In hindsight, Angular looks like the catalyst that lead us
to the newer abstractions of today with React and Vue's [Virtual DOM](https://en.wikipedia.org/wiki/Virtual_DOM),
and the binding of data through [props](https://react.dev/learn/passing-props-to-a-component).

The merits of these abstractions continue to be debated to this day,
but one could certainly feel the cognitive load of building a web page
beginning to increase. It's important to remember that with any
abstraction comes a necessary obfuscation of essence, and we were
quickly losing sight of the fundamental tools of web development;
HTML, CSS, and JavaScript. HTML became Angular templates with \`ng\`
attributes and, eventually, JSX. CSS became [SASS](https://sass-lang.com/) and [Less](https://lesscss.org/), before
eventually being hidden nearly entirely with the advent of [Tailwind](https://tailwindcss.com/).
JavaScript became the star of the show with libraries like
[CoffeeScript](https://coffeescript.org/) before eventually glowing up to become [Typescript](https://www.typescriptlang.org/),
possibly the most influential change in web development this decade.
And so we stand on our tower of abstractions, happy with our new
ability to build ever-complicated web applications, but with a sense
that we've strayed far from the foundational technologies that got us
here in the first place.


## Old Man Yells at Clouds {#old-man-yells-at-clouds}

I'm sure at this point I sound like an old man who's salty about how
things have changed and how "back in my day" we were less stressed
out by web tooling hype cycles, but only half of that is true. I am an
old man (38), but I'm not salty about the state of web development
today. I think what it boils down to is that these abstractions have
given us great power, and the great responsibility that comes with it
can **feel** like cognitive burden. Everything is a trade-off, and we've
traded simplicity for power.

Not all of the trade-offs are great for users of the web. We write a
lot more JavaScript today, and it all gets shipped to the user's
computer so that they can experience our creations. The size of
JavaScript files has increased dramatically and, with it, the
responsibility of the web browser in both parsing and running the
files performantly.

However, the ability of today's web engineer to create complex,
dynamic  user interfaces that take into account things like fetching
data, loading states, privacy, security, offline functionality, audio,
video etc. is unparalleled. For new devs, I promise that trying to
handle these concerns 10 years ago felt close to impossible,
whereas today, most frameworks provide some sort of useful abstraction
over these areas. Yes, there's a lot more to think about, but there's
also a lot more that can be done with our tools. The earliest aircraft
had no more than a few levers of control, and today there are hundreds
of different switches and buttons, each with their own
responsibilities and potential misuse. A big difference, of course, is
that today you can fly around the world in a modern aircraft.

Are the pilots under a higher cognitive load than those of the
earlier, more rudimentary planes? Probably. But they're flying higher
and further than ever before.


### Links {#links}

[Engineering]({{< relref "engineering.md" >}})
