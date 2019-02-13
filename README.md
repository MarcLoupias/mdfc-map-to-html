# dvlp-news-bbcode

[![Build Status](https://travis-ci.org/MarcLoupias/dvlp-news-bbcode.svg?branch=master)](https://travis-ci.org/MarcLoupias/dvlp-news-bbcode)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)
[![npm version](https://badge.fury.io/js/dvlp-news-bbcode.svg)](http://badge.fury.io/js/dvlp-news-bbcode)

An implementation package for [md-file-converter](https://www.npmjs.com/package/md-file-converter).

This implementation output `.bbcode` files in the format expected by [developpez.com website](https://www.developpez.com/) to write news documents.

## installation

In the repository containing your news markdown documents, add this package to devDependencies :

```bash
npm i --save-dev dvlp-news-bbcode
```

## usage

Invoke the CLI with the following :

```bash
node ./node_modules/.bin/mdfc convert 'dvlp-news-bbcode' '<news-markdown-file-path>'
```
