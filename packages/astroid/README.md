# Astroid 🚀☄️

Extend Astro Routing

```shell
# npm
npm i astroid --save-dev

# yarn
yarn add -D astroid

# pnpm
pnpm i astroid --save-dev
```
## Link

```
---
import { Link } from 'astroid'
---

<Link to="/somewhere" query={{ name: 'Ali', number: '6' }} prefetch={true}>Link name</Link>


```

Note that prefetching is disabled by default, to enable it use ```prefetch={true}``` on the Link component.

## router

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
