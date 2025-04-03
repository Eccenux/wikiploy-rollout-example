<!-- TOC -->

- [Basic Wikiploy script](#basic-wikiploy-script)
	- [Code to deploy test.js](#code-to-deploy-testjs)
	- [Wikiploy code explained](#wikiploy-code-explained)
- [Destination URL](#destination-url)
	- [Explicit](#explicit)
	- [Logged in user](#logged-in-user)
	- [Non-default site](#non-default-site)
- [See also](#see-also)

<!-- /TOC -->

# Wikiploy concepts

## Basic Wikiploy script

### Code to deploy test.js

This could be your `wikiploy.mjs`
```js
import { DeployConfig, WikiployLite } from 'wikiploy';

import * as botpass from './bot.config.mjs';
const ployBot = new WikiployLite(botpass);

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
import { DeployConfig, WikiployLite } from 'wikiploy';
```

This imports config to a `botpass` object.
```js
import * as botpass from './bot.config.mjs';
```

This just creates and instance of the `WikiployLite` class. Note that I'm using `const` from new-ish JavaScript (ES6/ES2015).
```js
const ployBot = new WikiployLite(botpass);
```

The next `async` part is just a bit fancy way to run asynchronously and catch errors. The `process.exit` here might be needed to finish wikiploy process (originally important for Puppeteer subprocess).
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
You can have any number of configurations. Seriously, you could deploy your files to 100 destinations. It should just work.

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
