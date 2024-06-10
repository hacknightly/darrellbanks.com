+++
title = "On CSS Container Queries"
author = ["Darrell Banks"]
draft = true
+++

tags
: [CSS]({{< relref "20230802180753-css.md" >}})

Keeping up with modern CSS can be a challenge. As a CSS practitioner for the better part of a decade,
revisiting the spec to find new and emerging concepts can feel like I've missed a century.

To that end, I'm trying to review one or two new CSS concepts weekly to sharpen up my toolset,
starting with taking a look at the newly introduced \`Container Queries\`.

I'm quite familiar with media queries, which allow you to add specific rules to given elements
based on the viewport size.

Container queries work the same way, only the "viewport" becomes the elements container, rather
than the browser window.

Here's a simple container with a single heading element.

```html
<div class="container">
  <h1>Howdy</h1>
</div>
```

In order for the \`.container\` class to be query-able, it needs to be given a \`container-type\` property in CSS.

The property can be one of the following:

-   \`size\`: The query will be based on the inline and block dimensions of the container.
-   \`inline-size\`: The query will be based on the inline dimensions of the container.
-   \`normal\`: The query will not use size information, but can still use style queries.

For this example, I'm using the \`inline-size\` attribute.

```css
.container {
  container-type: inline-size;
}

.container h1 {
  font-size: 1em;
}
```

Adding an \`@container\` rule allows for specifying CSS styles for children of \`container-type\` elements.

```css
@container (min-width: 700px) {
  .container h1 {
     font-size: 2em;
  }
}
```

Now, no matter where in the viewport it's placed, if \`.container\` is less than 700px, the
text will be smaller.

Neat.

More:

-   [Demo](<https://codepen.io/hacknightly/pen/poQGaLa>)
-   [Container Queries](<https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Container_Queries>)
