# Wikiploy concepts

## Basic Wikiploy script

### Code to deploy test.js

This could be your `wikiploy.mjs`
```js
import { DeployConfig, Wikiploy } from 'wikiploy';

const ployBot = new Wikiploy();

// run asynchronusly to be able to wait for results
(async () => {
	const configs = [];
	configs.push(new DeployConfig({
		src: 'test.js',
		dst: 'User:Nux/test-wikiploy--test.js',
	}));
	await ployBot.deploy(configs);
})().catch(err => {
	console.error(err);
	process.exit(1);
});
```

Note that `wikiploy.mjs` and `wikiploy-dev.mjs` differ from the basic script above. However, the generic concepts are the same.

### Wikiploy code explained

Let's walk through above code.

This code is just to import classes defined in the Wikiploy.
```js
import { DeployConfig, Wikiploy } from 'wikiploy';
```

This just creates and instance of the `Wikiploy` class. Note that I'm using `const` from new-ish JavaScript (ES6).
```js
const ployBot = new Wikiploy();
```

This is just a bit fancy way to run asynchronously and catch errors. The `process.exit` here might be needed to finish the puppeteer process.
```js
(async () => {
  ...
})().catch(err => {
	console.error(err);
	process.exit(1);
});
```

This adds a single configuration (deployment specification):
```js
	configs.push(new DeployConfig({
		src: 'test.js',
		dst: 'User:Nux/test-jsbot--test.js',
	}));
```
You can have any number of configurations. Seriously, you could deploy a file to 100 destinations. It should just work. Wikiploy has quite robust caching, which should partially work even if you upload to multiple Wikimedia projects. And if you will use `WikiployLite` then it will be even faster.

And finally this runs deployments:
```js
	await ployBot.deploy(configs);
```


## Destination URL

There are various ways you can specify a URL.

### Explicit
You can specify `dst` explicitly. This would deploy in User:Example space:
```js
	configs.push(new DeployConfig({
		src: 'test.js',
		dst: 'User:Example/test.js',
	}));
```

### Logged in user
This would deploy the same as above for user "Example":
```js
	configs.push(new DeployConfig({
		src: 'test.js',
		dst: '~/test.js',
	}));
```

Or the same , but shorter:
```js
	configs.push(new DeployConfig({
		src: 'test.js',
	}));
```
This is recommended for user scripts when source name and destination name is the same. 

### Non-default site

Default site of Wikiploy is "pl.wikipedia.org".

You can change default globally like so:
```js
const ployBot = new Wikiploy();
ployBot.site = "en.wikipedia.org"; 
```

You can also deploy to multiple sites by changing config:
```js
	// to default/global
	configs.push(new DeployConfig({
		src: 'test.js',
	}));
	// to de.wiki
	configs.push(new DeployConfig({
		src: 'test.js',
		site: "de.wikipedia.org",
	}));
```

## See also
- [README: building your project](https://github.com/Eccenux/Wikiploy/blob/main/README.building%20your%20project.md) recommendation on how to build JS and CSS for your gadgets (includes unit testing setup).
