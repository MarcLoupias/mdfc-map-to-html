'use strict';

const expect = require('chai').expect;
const fs = require('fs');
const fsp = require('fs').promises;
const { executeCliSync } = require('../test-utils');

describe('command :: "md-file-converter convert \'../../../dist\' \'tests/actual-files/news/test-news.md\'"', function () {
    let result;

    beforeEach(function() {
        result = executeCliSync(['convert', '../../../dist', 'tests/actual-files/news/test-news.md']);
        expect(result.stdout).to.include('tests/actual-files/news/test-news.html');
        expect(result.stdout).to.include('Processing files done.');
    });

    it('should output a final html file with a content equal to tests/expected-files/map-to-html/news/test-news.html content', async () => {
        const results = await Promise.all([
            fsp.readFile('tests/actual-files/news/test-news.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/news/test-news.html', { encoding: 'utf-8' })
        ]);
        expect(results[0]).to.equal(results[1]);
    });

    afterEach(function() {
        fs.unlinkSync('tests/actual-files/news/test-news.html');
    });
});

describe('command :: "md-file-converter convert \'../../../dist\' \'tests/actual-files/faq/**/*.md\'"', function () {
    beforeEach(function() {
        const result = executeCliSync(['convert', '../../../dist', 'tests/actual-files/faq/**/*.md']);
        expect(result.stdout).to.include('Processing files done.');
    });

    it('should output qa and summary files in html format with a content equal to the files located in tests/expected/faq/', async () => {
        const results = await Promise.all([
            fsp.readFile('tests/actual-files/faq/SUMMARY.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/SUMMARY.html', { encoding: 'utf-8' }),

            fsp.readFile('tests/actual-files/faq/section-001/001.q001.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-001/001.q001.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/actual-files/faq/section-001/001.q002.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-001/001.q002.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/actual-files/faq/section-001/001.q003.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-001/001.q003.html', { encoding: 'utf-8' }),

            fsp.readFile('tests/actual-files/faq/section-002/002.q001.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-002/002.q001.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/actual-files/faq/section-002/002.q002.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-002/002.q002.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/actual-files/faq/section-002/002.q003.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-002/002.q003.html', { encoding: 'utf-8' }),

            fsp.readFile('tests/actual-files/faq/section-003/003.q001.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-003/003.q001.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/actual-files/faq/section-003/003.q002.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-003/003.q002.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/actual-files/faq/section-003/003.q003.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-003/003.q003.html', { encoding: 'utf-8' }),

            fsp.readFile('tests/actual-files/faq/section-004/004.q001.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-004/004.q001.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/actual-files/faq/section-004/004.q002.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-004/004.q002.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/actual-files/faq/section-004/004.q003.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/faq/section-004/004.q003.html', { encoding: 'utf-8' })
        ]);
        expect(results[0]).to.equal(results[1]);

        expect(results[2]).to.equal(results[3]);
        expect(results[4]).to.equal(results[5]);
        expect(results[6]).to.equal(results[7]);

        expect(results[8]).to.equal(results[9]);
        expect(results[10]).to.equal(results[11]);
        expect(results[12]).to.equal(results[13]);

        expect(results[14]).to.equal(results[15]);
        expect(results[16]).to.equal(results[17]);
        expect(results[18]).to.equal(results[19]);

        expect(results[20]).to.equal(results[21]);
        expect(results[22]).to.equal(results[23]);
        expect(results[24]).to.equal(results[25]);
    });

    afterEach(function() {
        fs.unlinkSync('tests/actual-files/faq/SUMMARY.html');
        fs.unlinkSync('tests/actual-files/faq/section-001/001.q001.html');
        fs.unlinkSync('tests/actual-files/faq/section-001/001.q002.html');
        fs.unlinkSync('tests/actual-files/faq/section-001/001.q003.html');
        fs.unlinkSync('tests/actual-files/faq/section-002/002.q001.html');
        fs.unlinkSync('tests/actual-files/faq/section-002/002.q002.html');
        fs.unlinkSync('tests/actual-files/faq/section-002/002.q003.html');
        fs.unlinkSync('tests/actual-files/faq/section-003/003.q001.html');
        fs.unlinkSync('tests/actual-files/faq/section-003/003.q002.html');
        fs.unlinkSync('tests/actual-files/faq/section-003/003.q003.html');
        fs.unlinkSync('tests/actual-files/faq/section-004/004.q001.html');
        fs.unlinkSync('tests/actual-files/faq/section-004/004.q002.html');
        fs.unlinkSync('tests/actual-files/faq/section-004/004.q003.html');
    });
});

describe('command :: "md-file-converter convert \'../../../dist\' \'tests/actual-files/doc-w-tables/javascript-overview.md\'"', function () {
    let result;

    beforeEach(function() {
        result = executeCliSync(['convert', '../../../dist', 'tests/actual-files/doc-w-tables/javascript-overview.md']);
        expect(result.stdout).to.include('tests/actual-files/doc-w-tables/javascript-overview.html');
        expect(result.stdout).to.include('Processing files done.');
    });

    it('should output a final html file with a content equal to tests/expected-files/doc-w-tables/javascript-overview.html content', async () => {
        const results = await Promise.all([
            fsp.readFile('tests/actual-files/doc-w-tables/javascript-overview.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/doc-w-tables/javascript-overview.html', { encoding: 'utf-8' })
        ]);
        expect(results[0]).to.equal(results[1]);
    });

    afterEach(function() {
        fs.unlinkSync('tests/actual-files/doc-w-tables/javascript-overview.html');
    });
});

describe('command :: "md-file-converter convert \'../../../dist\' \'tests/actual-files/css-support/test-news-with-css.md\'"', function () {
    let result;

    beforeEach(function() {
        result = executeCliSync(['convert', '../../../dist', 'tests/actual-files/css-support/test-news-with-css.md']);
        expect(result.stdout).to.include('tests/actual-files/css-support/test-news-with-css.html');
        expect(result.stdout).to.include('Processing files done.');
    });

    it('should generate css <link> tags properly', async () => {
        const results = await Promise.all([
            fsp.readFile('tests/actual-files/css-support/test-news-with-css.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/css-support/test-news-with-css.html', { encoding: 'utf-8' })
        ]);
        expect(results[0]).to.equal(results[1]);
    });

    afterEach(function() {
        fs.unlinkSync('tests/actual-files/css-support/test-news-with-css.html');
    });
});

describe('command :: "md-file-converter convert \'../../../dist\' \'tests/actual-files/title-support/test-news-with-title.md\'"', function () {
    let result;

    beforeEach(function() {
        result = executeCliSync(['convert', '../../../dist', 'tests/actual-files/title-support/test-news-with-title.md']);
        expect(result.stdout).to.include('tests/actual-files/title-support/test-news-with-title.html');
        expect(result.stdout).to.include('Processing files done.');
    });

    it('should generate <title> tags properly : if a title is present in front-matter use it, else use the file basename', async () => {
        const results = await Promise.all([
            fsp.readFile('tests/actual-files/title-support/test-news-with-title.html', { encoding: 'utf-8' }),
            fsp.readFile('tests/expected-files/title-support/test-news-with-title.html', { encoding: 'utf-8' })
        ]);
        expect(results[0]).to.equal(results[1]);
    });

    afterEach(function() {
        fs.unlinkSync('tests/actual-files/title-support/test-news-with-title.html');
    });
});
