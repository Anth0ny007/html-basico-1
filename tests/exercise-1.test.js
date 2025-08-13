// tests/exercise-1.test.js

const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 1: Estructura Básica de HTML', () => {
    const htmlFilePath = path.join(__dirname, '../exercise-1/index.html');
    const cssFilePath = path.join(__dirname, '../exercise-1/styles.css');
    let htmlContent;
    let dom;
    let document;

    beforeAll(() => {
        const htmlPath = path.join(__dirname, '..', 'exercise-1', 'index.html');
        htmlContent = fs.readFileSync(htmlPath, 'utf8');
        dom = new JSDOM(htmlContent);
        document = dom.window.document;
    });

    test('index.html should exist', () => {
        expect(fs.existsSync(htmlFilePath)).toBe(true);
    });
  
    test('index.html should contain a header', () => {
        expect(document.querySelector('h1')).toBeTruthy();
    });

    test('index.html should contain a paragraph', (done) => {
        fs.readFile(htmlFilePath, 'utf8', (err, data) => {
            if (err) throw err;
            expect(data).toMatch(/<p>/);
            done();
        });
    });

    test('index.html should contain an unordered list', (done) => {
        fs.readFile(htmlFilePath, 'utf8', (err, data) => {
            if (err) throw err;
            expect(data).toMatch(/<ul>/);
            done();
        });
    });   

    });