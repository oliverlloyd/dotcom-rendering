# Detailed setup guide

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
<!-- Automatically created with yarn run createtoc and on push hook -->

- [High level diagram](#high-level-diagram)
- [Developing](#developing)
  - [Setup](#setup)
    - [Node.js](#nodejs)
    - [Yarn](#yarn)
  - [Start](#start)
  - [Previewing article on local](#previewing-article-on-local)
  - [Previewing AMP on local](#previewing-amp-on-local)
  - [Note on rebasing vs merging](#note-on-rebasing-vs-merging)
  - [Debugging tools](#debugging-tools)
  - [Running alongside identity](#running-alongside-identity)
- [Production](#production)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## High level diagram

This high level diagram shows the difference between the data flow when DCR is used in production, driven by the frontend backend, and when DCR is used as a local server. The arrows are labelled in the order they happen. The bold arrow is the JSON data object that DCR uses to generate the HTML document.

![](detailed-setup-guide-pics/high-level-diagram.png)

## Developing

### Setup

The only things you need to make sure you have installed before you get going are Node and yarn.

#### Node.js

We recommend using a tool to help manage multiple versions of Node.js on on machine.
[fnm](https://github.com/Schniz/fnm) is popular in the department at the moment, although
[nvm](https://github.com/creationix/nvm) and [asdf](https://github.com/asdf-vm/asdf) are
sometimes used instead.
If you use nvm, you might find
[this gist](https://gist.github.com/sndrs/5940e9e8a3f506b287233ed65365befb) helpful.

If you prefer to [install Node.js manually](https://nodejs.org),
check the [.nvmrc](https://github.com/guardian/dotcom-rendering/blob/main/.nvmrc) for the current required version.

#### Yarn

Node packages for this project are managed using the 'classic' version of [Yarn](https://classic.yarnpkg.com/).
Currently [the recommended way to install Yarn](https://classic.yarnpkg.com/lang/en/docs/install/)
is with npm, which should be available if you have already installed Node.js. To install Yarn
globally using npm, you can run:

```
npm install --global yarn
```

If you don't want to install it globally, you could add an alias to your shell config which runs
Yarn via [npx](https://www.npmjs.com/package/npx):

```
alias yarn="npx yarn"
```

Once you have installed Yarn, run `yarn` in the repo's root directory to install the npm packages
for this project. Once these are installed, `cd` into the `dotcom-rendering` directory in order to
run the `make` commands described below.

### Start

Start the development server:

```bash
make dev
```

This will start the development server on port 3030: [http://localhost:3030](http://localhost:3030).

> Note: To run the development server with support for legacy browsers, use `make dev-legacy`

### Previewing article on local

You can preview an article from `theguardian.com` by appending the full URL to the path of your localhost article page. For example:

http://localhost:3030/Article/https://www.theguardian.com/world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance

You can use this technique to integrate with a locally running instance of `frontend`. This is especially useful for testing changes to the data model:

http://localhost:3030/Article/http://localhost:9000/world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance

### Previewing AMP on local

You can preview an AMP page similarly to an article, as follows

http://localhost:3030/AMPArticle/https://amp.theguardian.com/world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance

or, connecting to a locally running instance of frontend,

http://localhost:3030/AMPArticle/http://localhost:9000/world/2013/jun/09/edward-snowden-nsa-whistleblower-surveillance

### Note on rebasing vs merging

The dotcom-rendering github account is set up to merge PRs into main instead of rebase. Merge commits are useful to quickly revert things when there is a major incident - whereas with rebase you might have to revert a whole load of commits.

However, if you are working on a feature branch and plan to make a PR, it's still recommended to rebase on `main` to avoid extranous merge commits in branches.

### Debugging tools

For ease of development you may want to install:

-   [React Developer Tools](https://github.com/facebook/react-devtools)

### Running alongside identity

You may want local identity cookies to be available in `dotcom-rendering`. To enable this:

1. run `./scripts/nginx/setup.sh`
1. access `dotcom-rendering` through https://r.thegulocal.com

## Production

-   `make build` creates production-ready bundles.
-   `make start` starts the production server.

You may need to run these with `sudo`

Production environment uses `pm2`. More scripts can be found in the `makefile` [scripts](https://github.com/guardian/dotcom-rendering/blob/e2c020f7e0ed24751ea729eec93f1271d37e3b50/makefile#L31)

The production port default is 9000 for deployment, but to run locally alongside frontend, you will need to manually override. To hit the server, add

```
rendering.endpoint = "http://localhost:${port}/Article"
```

with the overide port number and run frontend locally.
