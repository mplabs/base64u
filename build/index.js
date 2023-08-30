#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const base64u_1 = require("./base64u");
const [, scriptFile, ...args] = process.argv;
const command = path_1.default.basename(scriptFile);
if (command === 'base64u-encode') {
    if (args.length !== 1) {
        console.log('Usage: base64u-encode <string>');
        process.exit(0);
    }
    const data = args[0];
    const encoded = (0, base64u_1.toBase64U)(data);
    console.log(encoded);
    process.exit(0);
}
if (command === 'base64u-decode') {
    if (args.length !== 1) {
        console.log('Usage: base64u-decode <string>');
        process.exit(0);
    }
    const data = args[0];
    const decoded = (0, base64u_1.fromBase64U)(data);
    console.log(decoded);
    process.exit(0);
}
console.log(`Unknown command: ${command}`);
//# sourceMappingURL=index.js.map