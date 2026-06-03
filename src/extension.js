'use strict';
const vscode = require('vscode');

function activate(context) {
  console.log('𓆣 KEMIT v4.0 Extension Activated');

  // Comando: ejecutar archivo KEMIT
  const runCmd = vscode.commands.registerCommand('kemit.run', () => {
    const ed = vscode.window.activeTextEditor;
    if (!ed) return;
    vscode.window.showInformationMessage('𓆣 KEMIT: Ejecutando ' + ed.document.fileName);
  });

  // Comando: abrir REPL
  const replCmd = vscode.commands.registerCommand('kemit.openRepl', () => {
    vscode.window.showInformationMessage('𓆣 KEMIT REPL — Iniciando intérprete interactivo');
  });

  // Comando: mostrar mapa de teclado
  const mapCmd = vscode.commands.registerCommand('kemit.showKeymap', () => {
    const panel = vscode.window.createWebviewPanel(
      'kemitKeymap',
      '𓆣 KEMIT — Mapa de Teclado',
      vscode.ViewColumn.Beside,
      { enableScripts: false }
    );
    panel.webview.html = getKeymapHTML();
  });

  // Status bar
  const bar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Left, 200);
  bar.command = 'kemit.run';
  bar.tooltip = 'KEMIT: 🏺 Egipcio · 𒀀 Sumerio · 𝋀 Maya · 𐌀 Ibérico · 𐤀 Fenicio';

  function updateBar() {
    const ed = vscode.window.activeTextEditor;
    if (ed && ed.document.languageId === 'kemit') {
      bar.text = '$(symbol-misc) 𓆣 KEMIT v4 — 4 Civilizaciones';
      bar.show();
    } else {
      bar.hide();
    }
  }

  vscode.window.onDidChangeActiveTextEditor(updateBar, null, context.subscriptions);
  updateBar();

  context.subscriptions.push(runCmd, replCmd, mapCmd, bar);
}

function getKeymapHTML() {
  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="UTF-8">
  <style>
    body {
      background: #0d0b06;
      color: #e8d5a3;
      font-family: 'Segoe UI', monospace;
      padding: 2rem;
    }
    h1 {
      color: #f0c040;
      border-bottom: 2px solid #c9a84c;
      padding-bottom: 1rem;
    }
    .section {
      margin: 2rem 0;
    }
    .section-title {
      background: #3a2810;
      color: #f0c040;
      padding: 0.8rem;
      border-radius: 4px;
      font-weight: bold;
      font-size: 1.1rem;
      margin-bottom: 1rem;
    }
    table {
      width: 100%;
      border-collapse: collapse;
    }
    th, td {
      padding: 0.6rem;
      text-align: left;
      border-bottom: 1px solid #2a2010;
    }
    th {
      background: #1a1508;
      color: #c9a84c;
      font-weight: bold;
    }
    tr:hover td {
      background: rgba(201, 168, 76, 0.1);
    }
    .key {
      font-family: monospace;
      color: #80d0ff;
      font-weight: bold;
    }
    .glyph {
      font-size: 1.5rem;
      color: #f0c040;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>𓆣 KEMIT v4.0 — Mapa de Teclado</h1>
  
  <div class="section">
    <div class="section-title">🏺 EGIPCIO — Comandos (A-V)</div>
    <table>
      <tr><th>Tecla</th><th>Glifo</th><th>Comando</th><th>Descripción</th></tr>
      <tr><td class="key">A</td><td class="glyph">𓂀</td><td>PRINT</td><td>Mostrar/Imprimir</td></tr>
      <tr><td class="key">B</td><td class="glyph">𓃭</td><td>VAR</td><td>Declarar variable</td></tr>
      <tr><td class="key">C</td><td class="glyph">𓉐</td><td>FUNC</td><td>Definir función</td></tr>
      <tr><td class="key">D</td><td class="glyph">𓊪</td><td>IF</td><td>Condicional SI</td></tr>
      <tr><td class="key">E</td><td class="glyph">𓌀</td><td>FOR</td><td>Bucle PARA</td></tr>
      <tr><td class="key">F</td><td class="glyph">𓍯</td><td>WHILE</td><td>Bucle MIENTRAS</td></tr>
      <tr><td class="key">G</td><td class="glyph">𓎛</td><td>RETURN</td><td>Retornar valor</td></tr>
    </table>
  </div>

  <div class="section">
    <div class="section-title">𒀀 SUMERIO — Operadores (W-Z, R-U, K-L, %)</div>
    <table>
      <tr><th>Tecla</th><th>Glifo</th><th>Operador</th><th>Significado</th></tr>
      <tr><td class="key">R</td><td class="glyph">𒀭</td><td>==</td><td>Igual a</td></tr>
      <tr><td class="key">S</td><td class="glyph">𒁹</td><td>!=</td><td>Distinto de</td></tr>
      <tr><td class="key">W</td><td class="glyph">𒀸</td><td>+</td><td>Suma</td></tr>
      <tr><td class="key">X</td><td class="glyph">𒁻</td><td>-</td><td>Resta</td></tr>
    </table>
  </div>

  <div class="section">
    <div class="section-title">𝋀 MAYA — Dígitos (0-9)</div>
    <table>
      <tr><th>Tecla</th><th>Glifo</th><th>Dígito</th></tr>
      <tr><td class="key">0</td><td class="glyph">𝋀</td><td>Cero (concha)</td></tr>
      <tr><td class="key">1</td><td class="glyph">𝋁</td><td>Uno (punto)</td></tr>
      <tr><td class="key">5</td><td class="glyph">𝋅</td><td>Cinco (barra)</td></tr>
      <tr><td class="key">9</td><td class="glyph">𝋉</td><td>Nueve</td></tr>
    </table>
  </div>

  <div class="section">
    <div class="section-title">𐤀 FENICIO — Delimitadores</div>
    <table>
      <tr><th>Tecla</th><th>Glifo</th><th>Delimitador</th></tr>
      <tr><td class="key">(</td><td class="glyph">𐤀</td><td>Abre paréntesis</td></tr>
      <tr><td class="key">)</td><td class="glyph">𐤁</td><td>Cierra paréntesis</td></tr>
      <tr><td class="key">{</td><td class="glyph">𐤂</td><td>Abre bloque</td></tr>
      <tr><td class="key">}</td><td class="glyph">𐤃</td><td>Cierra bloque</td></tr>
    </table>
  </div>

  <div class="section">
    <div class="section-title">𐌀 IBÉRICO — Letras (a-z)</div>
    <p style="color: #b8a070;">Las letras minúsculas se convierten en glifos ibéricos para formar identificadores y palabras clave.</p>
  </div>
</body>
</html>`;
}

function deactivate() {}

module.exports = { activate, deactivate };
