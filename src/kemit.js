#!/usr/bin/env node
// ============================================================
// KEMIT v4.0 — Intérprete y REPL
// 4 Civilizaciones: Egipcia, Sumeria, Maya, Ibérica
// ============================================================

'use strict';
const fs = require('fs');

const KEY_TO_GLYPH = {
  'A': '𓂀', 'B': '𓃭', 'C': '𓉐', 'D': '𓊪', 'E': '𓌀',
  'F': '𓍯', 'G': '𓎛', 'H': '𓆑', 'J': '𓋪', 'M': '𓋹',
  'N': '𓂞', 'O': '𓇯', 'P': '𓆣', 'Q': '𓄿', 'V': '𓋴',
  'R': '𒀭', 'S': '𒁹', 'T': '𒂗', 'U': '𒁺', 'K': '𒀝',
  'L': '𒌋', 'W': '𒀸', 'X': '𒁻', 'Y': '𒅗', 'Z': '𒁾',
  '0': '𝋀', '1': '𝋁', '2': '𝋂', '3': '𝋃', '4': '𝋄',
  '5': '𝋅', '6': '𝋆', '7': '𝋇', '8': '𝋈', '9': '𝋉',
  '(': '𐤀', ')': '𐤁', '{': '𐤂', '}': '𐤃', '[': '𐤄',
  ']': '𐤅', ',': '𐤆', '.': '𐤇', ':': '𐤈', '"': '𐤉',
  'a': '𐌀', 'b': '𐌁', 'c': '𐌂', 'd': '𐌃', 'e': '𐌄',
  'f': '𐌅', 'g': '𐌆', 'h': '𐌇', 'i': '𐌉', 'j': '𐌊',
  'k': '𐌋', 'l': '𐌌', 'm': '𐌍', 'n': '𐌎', 'o': '𐌏',
  'p': '𐌐', 'q': '𐌑', 'r': '𐌓', 's': '𐌔', 't': '𐌕',
  'u': '𐌖', 'v': '𐌗', 'w': '𐌘', 'x': '𐌙', 'y': '𐌚',
  'z': '𐌛', '=': '←', '+': '𒀸', '-': '𒁻', '*': '𒅗',
  '/': '𒁾', '%': '𒂖', '^': '𒀭', '!': '𓋪', '&': '𒀝',
  '|': '𒌋', '>': '𒂗', '<': '𒁺', ' ': ' ', '\n': '\n',
};

const GLYPH_TO_KEY = {};
for (const [k, g] of Object.entries(KEY_TO_GLYPH)) {
  if (!GLYPH_TO_KEY[g]) GLYPH_TO_KEY[g] = k;
}

const GLYPH_CIV = {};
const EG = '𓂀𓃭𓉐𓊪𓌀𓍯𓎛𓆑𓋪𓋹𓂞𓇯𓆣𓄿𓋴𐤉←';
const SU = '𒀭𒁹𒂗𒁺𒀝𒌋𒀸𒁻𒅗𒁾𒂖';
const MA = '𝋀𝋁𝋂𝋃𝋄𝋅𝋆𝋇𝋈𝋉';
const PH = '𐤀𐤁𐤂𐤃𐤄𐤅𐤆𐤇𐤈';
const IB = '𐌀𐌁𐌂𐌃𐌄𐌅𐌆𐌇𐌉𐌊𐌋𐌌𐌍𐌎𐌏𐌐𐌑𐌓𐌔𐌕𐌖𐌗𐌘𐌙𐌚𐌛';
for (const g of [...EG]) GLYPH_CIV[g] = 'Egipcio';
for (const g of [...SU]) GLYPH_CIV[g] = 'Sumerio';
for (const g of [...MA]) GLYPH_CIV[g] = 'Maya';
for (const g of [...PH]) GLYPH_CIV[g] = 'Fenicio';
for (const g of [...IB]) GLYPH_CIV[g] = 'Ibérico';

function keyboardToGlyphs(src) {
  let out = '';
  for (let i = 0; i < src.length; i++) {
    const ch = src[i];
    if (ch === '#') {
      while (i < src.length && src[i] !== '\n') out += src[i++];
      continue;
    }
    if (ch === '"' || ch === "'") {
      const q = ch;
      out += '𐤉';
      i++;
      while (i < src.length && src[i] !== q) out += src[i++];
      out += '𐤉';
      continue;
    }
    out += KEY_TO_GLYPH[ch] !== undefined ? KEY_TO_GLYPH[ch] : ch;
  }
  return out;
}

console.log('\x1b[33m\n  𓆣 KEMIT v4.0 — Lanzamiento inicial\x1b[0m');
console.log('\x1b[2m  📜 Lenguaje de programación jeroglífico\x1b[0m\n');

module.exports = { KEY_TO_GLYPH, GLYPH_TO_KEY, GLYPH_CIV, keyboardToGlyphs };
