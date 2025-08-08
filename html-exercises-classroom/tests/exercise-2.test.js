// Este archivo contiene las pruebas automatizadas para el segundo ejercicio. 
// Se verifica que el HTML y CSS cumplen con los requisitos establecidos.

const fs = require('fs');
const path = require('path');

describe('Exercise 2 Tests', () => {
    const htmlFilePath = path.join(__dirname, '../exercise-2/index.html');
    const cssFilePath = path.join(__dirname, '../exercise-2/styles.css');

    test('HTML file should exist', () => {
        expect(fs.existsSync(htmlFilePath)).toBe(true);
    });

    test('CSS file should exist', () => {
        expect(fs.existsSync(cssFilePath)).toBe(true);
    });

    test('HTML should contain a header', (done) => {
        fs.readFile(htmlFilePath, 'utf8', (err, data) => {
            if (err) throw err;
            expect(data).toMatch(/<h[1-6]>.*<\/h[1-6]>/);
            done();
        });
    });

    test('HTML should contain at least one paragraph', (done) => {
        fs.readFile(htmlFilePath, 'utf8', (err, data) => {
            if (err) throw err;
            expect(data).toMatch(/<p>.*<\/p>/);
            done();
        });
    });

    test('CSS should contain styles for body', (done) => {
        fs.readFile(cssFilePath, 'utf8', (err, data) => {
            if (err) throw err;
            expect(data).toMatch(/body\s*{/);
            done();
        });
    });
});