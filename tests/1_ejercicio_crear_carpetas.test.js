const fs = require('fs');
const path = require('path');

describe('Ejercicio 1: Crear carpetas', () => {
  const rootPath = path.join(__dirname, '..');
  
  test('La carpeta src debe existir', () => {
    const srcPath = path.join(rootPath, 'src');
    
    expect(fs.existsSync(srcPath)).toBe(true);
    
    const stats = fs.statSync(srcPath);
    expect(stats.isDirectory()).toBe(true);
  });
  
  test('La carpeta src/data debe existir', () => {
    const dataPath = path.join(rootPath, 'src', 'data');
    
    expect(fs.existsSync(dataPath)).toBe(true);
    
    const stats = fs.statSync(dataPath);
    expect(stats.isDirectory()).toBe(true);
  });

  test('La carpeta src/ejercicio1 debe existir', () => {
    const ejercicio1Path = path.join(rootPath, 'src', 'ejercicio1');

    expect(fs.existsSync(ejercicio1Path)).toBe(true);

    const stats = fs.statSync(ejercicio1Path);
    expect(stats.isDirectory()).toBe(true);
   });

    test('El archivo src/ejercicio1/index.html debe existir', () => {
      const indexPath = path.join(rootPath, 'src', 'ejercicio1', 'index.html');

       expect(fs.existsSync(indexPath)).toBe(true);
        
        const stats = fs.statSync(indexPath);
        expect(stats.isFile()).toBe(true);
      });

      test('El archivo index.html debe tener estructura HTML básica', () => {
        const indexPath = path.join(rootPath, 'src', 'ejercicio1', 'index.html');
        
        if (fs.existsSync(indexPath)) {
          const content = fs.readFileSync(indexPath, 'utf8');
          
          expect(content).toMatch(/<!DOCTYPE\s+html>/i);
          expect(content).toMatch(/<html[^>]*>/i);
          expect(content).toMatch(/<head[^>]*>/i);
          expect(content).toMatch(/<\/head>/i);
          expect(content).toMatch(/<body[^>]*>/i);
          expect(content).toMatch(/<\/body>/i);
          expect(content).toMatch(/<\/html>/i);
        }
      });

      test('El archivo index.html debe tener título', () => {
        const indexPath = path.join(rootPath, 'src', 'ejercicio1', 'index.html');
        
        if (fs.existsSync(indexPath)) {
          const content = fs.readFileSync(indexPath, 'utf8');
          expect(content).toMatch(/<title[^>]*>.*<\/title>/i);
        }
      });
    });
