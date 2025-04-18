<!-- TOC -->

- [Quick start](#quick-start)
- [What's in the example](#whats-in-the-example)
- [Wikiploy 1st-time usage](#wikiploy-1st-time-usage)
- [Preparing deployment](#preparing-deployment)
- [Wikploy concepts](#wikploy-concepts)
- [See also](#see-also)

<!-- /TOC -->

# Gadget example with Wikiploy

This repository is meant to be used as a template of a gadget for Wikimedia projects.

Use this template freely. Consider it to be *free* as in *free-drink* :) aka [CC-0](https://creativecommons.org/publicdomain/zero/1.0/deed.pl).

## Quick start

Note. If this your first time using Wikiploy, you might want to use more detailed instructions: [Wikiploy 1st-time usage](#wikiploy-1st-time-usage).

### Prepare your repository with the tpl:
1. Use one of releases, download zip and and unpack in some folder.
2. Open the folder in [VSCode](https://code.visualstudio.com/).
3. Initialize your repo and commit code (tpl code).
4. Copy your `bot.config.mjs` to the root of your repo.

Note! If you are using an existing gadget: [Use wiki2git to download existing JS script and CSS](https://github.com/Eccenux/Wikiploy/blob/main/README.building%20your%20project.md#appendix-wiki2git).

### Start working on your gadget:
1. Fix names:
   - Replace `yourGadgetName` with your actual gadget name (in whole repo).
   - Replace `wikiploy-rollout-example` with the lowercase version of your gadget name.
2. Check `wikiploy*.mjs` to ensure usages of `addConfig` and `addConfigRelease` will deploy to a proper site (proper wiki).
3. Commit the changes.
4. You might want to create your initial `README.md` and start working on files in `src` directory.
5. Click on "build & deploy-dev" to test on wiki.

## What's in the example

A rollout/deployment example that includes:
- Recommended setup for building scripts: Bundling multiple files into a single JS file (from `src` to `dist`).
- Visual Studio Code setup: Tasks and command bar for a one-click build.
- Deploy scripts: Separate developer and release deployments.
- Example gadget: Gadget with hooks and a link in the toolbar (*Tool* menu of articles).
- Full setup of unit testing: Simple parser class with a test. VSC is set up for test debugging.

## Wikiploy 1st-time usage

As a startup for your project, you can simply download a copy of this repository (treat it as a template). For quick steps see: [README: dev-usage](https://github.com/Eccenux/wikiploy-rollout-example/blob/main/README-dev-usage.md)

Otherwise, you should follow recommendations in the [README: building your project, Wikiploy](https://github.com/Eccenux/Wikiploy/blob/main/README.building%20your%20project.md).

## Preparing deployment

**Step. 1. Create deployment script**. You can start with a basic script below or with `wikiploy.mjs` and `wikiploy-dev.mjs` provided in this repository.

**Step. 2. Prepare bot password and config**.
A bot password is simply a sub-account. This sub-account has a specific name and a separate password. You can also choose specific actions this sub-account is allowed to perform (it can have fewer permissions than your normal account).

* Set up your sub-account on Special:BotPasswords. For Wikimedia wikis, you can use: [test.wikipedia.org/wiki/Special:BotPasswords](https://test.wikipedia.org/wiki/Special:BotPasswords)
* Grant permissions to your sub-account. Here is something you might want to set up for your Wikiploy sub-account: [Wikiploy/assets/Bot passwords - Test Wikipedia.png](https://github.com/Eccenux/Wikiploy/blob/main/assets/Bot%20passwords%20-%20Test%20Wikipedia.png).
* Create your `bot.config.mjs` and fill username and password of your sub-account:
```
/**
	Bot with edit&create rights.
	
	You can create the bot account on any wiki. E.g. on the test wiki:
	https://test.wikipedia.org/wiki/Special:BotPasswords
*/
export const username = '...@...';	// e.g. Nux@Wikiploy
export const password = '...';	// bot pass
```

**Step. 3. Make sure bot.config.mjs is _not_ public**. Never ever push you passwords to repository, even if the repository is "private". Change your password ASAP if you expose your password by accident.

## Wikploy concepts
[README: wikiploy-concepts](https://github.com/Eccenux/wikiploy-rollout-example/blob/main/README-wikiploy-concepts.md)

Contents:
- [Basic Wikiploy script](README-wikiploy-concepts.md#basic-wikiploy-script)
	- [Code to deploy test.js](README-wikiploy-concepts.md#code-to-deploy-testjs)
	- [Wikiploy code explained](README-wikiploy-concepts.md#wikiploy-code-explained)
- [Destination URL](README-wikiploy-concepts.md#destination-url)
	- [Explicit](README-wikiploy-concepts.md#explicit)
	- [Logged in user](README-wikiploy-concepts.md#logged-in-user)
	- [Non-default site](README-wikiploy-concepts.md#non-default-site)

## See also
- [README: building your project](https://github.com/Eccenux/Wikiploy/blob/main/README.building%20your%20project.md) recommendation on how to build JS and CSS for your gadgets (includes unit testing setup). Note, that README describes the same things that are already prepared for you in this template.
