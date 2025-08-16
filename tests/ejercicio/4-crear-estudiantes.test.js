const fs = require('fs');
const path = require('path');
const { JSDOM } = require('jsdom');

describe('Ejercicio 4: Estructura base HTML', () => {
  const rootPath = path.join(__dirname, '../../');
  const filePath = path.join(rootPath, 'docs', 'ejercicio-1', 'estudiantes.html');
  
  test('La carpeta docs/ejercicio-1 debe existir', () => {
    const docsPath = path.join(rootPath, 'docs/ejercicio-1');    
    expect(fs.existsSync(docsPath)).toBe(true);    
    const stats = fs.statSync(docsPath);
    expect(stats.isDirectory()).toBe(true);
  });
  
    test('El archivo docs/ejercicio-1/estudiantes.html debe existir', () => {    
       expect(fs.existsSync(filePath)).toBe(true);        
        const stats = fs.statSync(filePath);
        expect(stats.isFile()).toBe(true);
      });

      test('El archivo estudiantes.html debe tener estructura HTML básica', () => {      
        expect(fs.existsSync(filePath)).toBe(true);     
        const content = fs.readFileSync(filePath, 'utf8');
          
          expect(content).toMatch(/<!DOCTYPE\s+html>/i);
          expect(content).toMatch(/<html[^>]*>/i);
          expect(content).toMatch(/<head[^>]*>/i);
          expect(content).toMatch(/<\/head>/i);
          expect(content).toMatch(/<body[^>]*>/i);
          expect(content).toMatch(/<\/body>/i);
          expect(content).toMatch(/<\/html>/i);
      });

      test('El archivo estudiantes.html debe tener título', () => {
        const content = fs.readFileSync(filePath, 'utf8');
        expect(content).toMatch(/<title[^>]*>.*<\/title>/i);     
      });

       test('estudiantes.html debería contener un encabezado de nivel uno', () => {
              const content = fs.readFileSync(filePath, 'utf8');
              const dom = new JSDOM(content);
              const document = dom.window.document;
              expect(document.querySelector('h1')).toBeTruthy();
          });

          test('estudiantes.html debería contener un encabezado de nivel dos', () => {
              const content = fs.readFileSync(filePath, 'utf8');
              const dom = new JSDOM(content);
              const document = dom.window.document;
              expect(document.querySelector('h2')).toBeTruthy();
          });  

          test('estudiantes.html debería contener un párrafo', () => {
              const content = fs.readFileSync(filePath, 'utf8');
              const dom = new JSDOM(content);
              const document = dom.window.document;
              expect(document.querySelector('p')).toBeTruthy();
          });    

      test('estudiantes.html debería contener una lista ordenada', () => {
          const content = fs.readFileSync(filePath, 'utf8');
          const dom = new JSDOM(content);
          const document = dom.window.document;
          expect(document.querySelector('ol')).toBeTruthy();
      });

       });