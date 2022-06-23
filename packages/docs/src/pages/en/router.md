---
title: Router
description: A javascript function to add functionality on top of the Astro routing system
layout: ../../layouts/MainLayout.astro
---

A javascript function to add functionality on top of the Astro routing system

## Example

```
---
import { Link } from 'astroid'
---
...


<button id="btn">Navigation</button>

<script>
    import { router } from 'astroid'

	const btn = document.getElementById('btn')
		btn.onclick = function () {
			router.push('/there')
		};

</script>

```

Note that the router should be imported in the script tag.

## Params

Returns an object with all params on page

```
router.params()

```

## Push

To navigate to a page.

```
router.push(url)

```

With queries

```
router.push(url, { name: 'someone' })

```

## Back

To go to the previos page.

```
router.back()

```

## Reload

To reload a page.

```
router.reload()

```

## Pathname

Returns the page pathname

```
router.pathname()

```

## Prefetch

To prefetch a page.

```
router.prefetch('/page')

```

With queies do


```
router.prefetch('/page', { using: 'router' })

```
