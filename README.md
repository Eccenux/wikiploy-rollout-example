# Wikiploy example

A basic rollout/deployment example.

## Steps to deploy

Create a deployment script from scratch:

1. **Prepare JS and CSS**. This can be just raw, vanilla `test.js` and `test.css` (example in `/dist`).
2. **Install Wikiploy**. Run `npm install wikiploy` (or `npm i ...`). Obviously you'll need [Node.JS](https://nodejs.org/en) for that. Node 12+ should be fine (you can use NVM if you need multiple Node.js versions installed).
3. **Enable import/export modules** (optional). If you want to use newer syntax for importing Node modules remember to add `"type": "module",` in `package.json` (see example `package.json`).
4. **Create deployment script**. You can start with a basic script below or with `wikiploy-test.js`.
5. **Run Chrome with debug**. Run Chrome Canary with debug mode enabled. I recommend using the Canary edition to ensure that you do not use your main Chrome browser for automation.

  - Example command on Windows:
  - "C:\Users\YOUR_USER_NAME\AppData\Local\Google\Chrome SxS\Application\chrome.exe" --remote-debugging-port=9222

## Basic script

### Code to deploy test.js
```js
import {DeployConfig, Wikiploy} from 'wikiploy';

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

### Deployment details

This is just to import classes defined in the Wikiploy.
```js
import {DeployConfig, Wikiploy} from 'wikiploy';
```

This just creates and instance of the `Wikiploy` class. Note that I'm using const from new-ish JavaScript.
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
You can have any number of configurations. Seriously, you could deploy a file to 100 destinations. It should just work. Wikiploy has quite robust caching, which should partially work even if you upload to multiple Wikimedia projects.

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