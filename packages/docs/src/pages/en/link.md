---
title: Link
description: A simple Astro component to ease working with queries and prefetching
layout: ../../layouts/MainLayout.astro

---

A simple Astro component to ease working with queries and prefetching

## Example

```
---
import { Link } from 'astroid'
---

<Link to="/somewhere" query={{ name: 'Ali', number: '6' }} prefetch={true}>Link name</Link>


```

Note that prefetching is disabled by default, to enable it use ```prefetch={true}``` on the Link component.