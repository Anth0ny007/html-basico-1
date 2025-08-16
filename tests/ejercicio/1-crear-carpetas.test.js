const fs = require('fs');
const path = require('path');

describe('Ejercicio 1: Crear carpetas', () => {
  const rootPath = path.join(__dirname, '../../');
  
  test('La carpeta docs debe existir', () => {
    const docsPath = path.join(rootPath, 'docs');
    
    expect(fs.existsSync(docsPath)).toBe(true);
    
    const stats = fs.statSync(docsPath);
    expect(stats.isDirectory()).toBe(true);
  });
  
  test('La carpeta docs/data debe existir', () => {
    const dataPath = path.join(rootPath, 'docs', 'data');
    
    expect(fs.existsSync(dataPath)).toBe(true);
    
    const stats = fs.statSync(dataPath);
    expect(stats.isDirectory()).toBe(true);
  });

  test('La carpeta docs/ejercicio-1 debe existir', () => {
    const ejercicio1Path = path.join(rootPath, 'docs', 'ejercicio-1');

    expect(fs.existsSync(ejercicio1Path)).toBe(true);

    const stats = fs.statSync(ejercicio1Path);
    expect(stats.isDirectory()).toBe(true);
   });
  
 });
