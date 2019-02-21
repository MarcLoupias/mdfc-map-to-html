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

In the repository containing your markdown documents, add this package to devDependencies :

```bash
npm i -D mdfc-map-to-html
```

## usage

Invoke the CLI with the following :

```bash
node ./node_modules/.bin/mdfc convert 'mdfc-map-to-html' '<markdown-files-path>'
```

`html` files will be created in the same directory as the markdown files.

If you want to create them in another directory you can add a `--dest` option with the destination path, for example :

```bash
node ./node_modules/.bin/mdfc convert 'mdfc-map-to-html' 'tests/actual-files/faq/**/*.md' --dest 'html-output/'
```

but the markdown structure will not be preserved, so be careful of `.md` file naming, each filename must be unique.

### css support

You can define custom css stylesheet injection with [front-matter](https://www.npmjs.com/package/front-matter) in your markdown files. 

See [`tests/actual-files/css-support/test-news-with-css.md`](https://github.com/MarcLoupias/mdfc-map-to-html/blob/master/tests/actual-files/css-support/test-news-with-css.md) for example.

The idea is to define the stylesheet values in the front-matter to add it to the generated html during the mapping phase.

Your yaml could look like this :

```yaml
htmlHead:
    links:
        - href: mobile.css
          rel: stylesheet
          media: all
        - href: print.css
          rel: stylesheet
          media: print
        - href: desktop.css
          rel: stylesheet
          media: 'screen and (min-width: 600px)'
        - href: favicon32.png
          rel: icon
        - href: favicon72.png
          rel: apple-touch-icon-precomposed
          sizes: 72x72
```

You can deal with favicon here also.

An `<article>` tag is added to wrap the generated content inside the document `<body>`.

A class name can be added to the `<article>` tag, just add a `containerClass` property to the `htmlHead` property in the yaml like that :

```yaml
htmlHead:
    containerClass: 'my-class'
    links:
        - href: mobile.css
          rel: stylesheet
          media: all
        - href: print.css
          rel: stylesheet
          media: print
```

### `<title>` support

Like css support, you can define your document `<title>` with [front-matter](https://www.npmjs.com/package/front-matter) in your markdown files.

The html document `<title>` is very important for [SEO](https://en.wikipedia.org/wiki/Search_engine_optimization), choose it carefully.

To specify the `<title>` value, add a title property in the front-matter like this :

```yaml
htmlHead:
    title: 'git-sizer publié par GitHub'
```

If you don't, the `<title>` tag value is set with the markdown file basename.
For example if your markdown file is named `my-article.md`, you will get `<title>my-article</title>`.
