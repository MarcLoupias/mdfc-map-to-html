# mdfc-map-to-html

[![Build Status](https://travis-ci.org/MarcLoupias/mdfc-map-to-html.svg?branch=master)](https://travis-ci.org/MarcLoupias/mdfc-map-to-html)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/mdfc-map-to-html.svg)](http://badge.fury.io/js/mdfc-map-to-html)

An implementation package for [md-file-converter](https://www.npmjs.com/package/md-file-converter).

This implementation output super basic `.html` files.

Internals links insides markdown files should point to `.md` files. This impl handle the change to `.html`.

## installation

In the repository containing your news markdown documents, add this package to devDependencies :

```bash
npm i --D mdfc-map-to-html
```

## usage

Invoke the CLI with the following :

```bash
node ./node_modules/.bin/mdfc convert 'mdfc-map-to-html' '<markdown-files-path>'
```

`html` files will be created in the same directory as the markdown files.

If you want to create them in another directory you can add a --dest option with the destination path, for example :

```bash
node ./node_modules/.bin/mdfc convert 'mdfc-map-to-html' 'tests/actual-files/faq/**/*.md' --dest 'html-output/'
```

but the markdown structure will not be preserved, so be careful of `.md` file naming, each filename must be unique.
