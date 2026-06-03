# 𓆣 KEMIT v4.0 — Lengua de los Antiguos

**Lenguaje de programación con escritura jeroglífica de 4 civilizaciones antiguas**

Cada tecla que presionas se convierte automáticamente en un glifo de una civilización antigua:

- **🏺 Egipcio** (A-V): Comandos principales
  - `𓂀` PRINT, `𓃭` VAR, `𓉐` FUNC, `𓊪` IF, `𓌀` FOR, `𓍯` WHILE, `𓎛` RETURN
  
- **𒀀 Sumerio** (W-Z, %): Operadores
  - `𒀭` ==, `𒁹` !=, `𒂗` >, `𒁺` <, `𒀝` AND, `𒌋` OR, `𒀸` +, `𒁻` -, `𒅗` *, `𒁾` /
  
- **𝋀 Maya** (0-9): Dígitos
  - `𝋀` 0, `𝋁` 1, `𝋂` 2, ... `𝋉` 9
  
- **𐤀 Fenicio** ((),{},[],.,:): Delimitadores
  - Paréntesis, bloques, listas y strings
  
- **𐌀 Ibérico** (a-z): Identificadores
  - Nombres de variables y funciones

## Instalación

```bash
git clone https://github.com/Dynamic-Universe/Kemit-.git
cd Kemit-
npm install
```

## Uso Rápido

### Crear archivo KEMIT
```kemit
𓃭 nombre ← "KEMIT"
𓂀 nombre
```

### Ejecutar archivo
```bash
node src/kemit.js archivo.kmt
```

### REPL Interactivo
```bash
node src/kemit.js --repl
```

## Ejemplos

### Variables y Print
```kemit
𓃭 x ← 42
𓃭 y ← "Hola Mundo"
𓂀 x
𓂀 y
```

### Funciones
```kemit
𓉐 suma(a, b) {
  𓎛 a + b
}

𓂀 suma(10, 20)
```

### Condicionales
```kemit
𓃭 edad ← 25
𓊪 edad 𒂗 18 {
  𓂀 "Mayor de edad"
} 𓋴 {
  𓂀 "Menor de edad"
}
```

### Bucles
```kemit
𓌀 𓆣 i 𓄿 10 {
  𓂀 i
}
```

## Características

✅ Transpilador teclado → glifos
✅ Intérprete completo
✅ REPL interactivo
✅ Soporte VS Code
✅ 2 temas de color
✅ Documentación en español

## Autor

**Carlos Espejo** — Junio 2026

---

🏺 **Que Ra ilumine tu camino**
