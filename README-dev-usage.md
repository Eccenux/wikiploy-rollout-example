# Building and deploying Gadgets

This project in short:

1. Uses Wikiploy for deploying your gadget.
2. Uses Browserify to build JS.
3. Uses LessCSS to build CSS.
4. Uses Mocha/Chai for unit testing.

## Quick testing

1. Download release zip and unpack in some folder.
2. Run `npm i` in the folder to install libraries.
3. Open the folder in [VSCode](https://code.visualstudio.com/).
4. Install recommended extensions.
5. Run test and build commands from the command bar (green buttons, should be on the bottom bar of VSCode).

See more in [README.md#testing-wikiploy](https://github.com/Eccenux/wikiploy-rollout-example/blob/main/README.md#testing-wikiploy)

Note that before running `wikiploy.mjs`, you will have to set up your bot password and bot.config (see *Preparing deployment* below).

## Create a gadget from this repository

To create your own gadget from this repository:

1. If you are using an existing gadget: [Use wiki2git to download existing JS script and CSS](https://github.com/Eccenux/Wikiploy/blob/main/README.building%20your%20project.md#appendix-wiki2git).
2. Copy files from the downloaded wikiploy example to your repo.
3. Commit initial wikiploy files.
4. Fix names:
   - Delete `yourGadgetName.js` and `*.css` from the `dist/` (files you might have from a test build).
   - Replace `yourGadgetName` with your actual gadget name.
   - Replace `wikiploy-rollout-example` with the lowercase version of your gadget name.
   - Check `wikiploy*.mjs` to ensure usages of `addConfig` will deploy to a proper site (proper wiki).
5. Commit the changes.

## Preparing deployment

Step 1: Setup you password on Special:BotPasswords. For Wikimedia wikis you can use:
https://test.wikipedia.org/wiki/Special:BotPasswords

Step 2: Rights you should setup (if you can):
https://github.com/Eccenux/Wikiploy/blob/main/assets/Bot%20passwords%20-%20Test%20Wikipedia.png

Step 3: Create your `bot.config.mjs` and fill username and password:
```
/**
	Bot with edit&create rights.
	
	You can create the bot account on any wiki. E.g. on the test wiki:
	https://test.wikipedia.org/wiki/Special:BotPasswords

	The username will be something like `MyName@Wikiploy` where `Wikiploy` would be a bot name
	(you can choose any bot name but "Wikiploy" would be a good choice to separate it from other things).
	
	The password will be something like `12345abcdefpqrst123456abcdef`.
 */
export const username = '...@...';
export const password = '...';
```
