#!/usr/bin/env node

import path from 'path'
import { fromBase64U, toBase64U } from './base64u'

const [, scriptFile, ...args] = process.argv

const command = path.basename(scriptFile)

if (command === 'base64u-encode') {
    if (args.length !== 1) {
        console.log('Usage: base64u-encode <string>')
        process.exit(0)
    }
    const data = args[0]
    const encoded = toBase64U(data)
    console.log(encoded)
    process.exit(0)
}

if (command === 'base64u-decode') {
    if (args.length !== 1) {
        console.log('Usage: base64u-decode <string>')
        process.exit(0)
    }
    const data = args[0]
    const decoded = fromBase64U(data)
    console.log(decoded)
    process.exit(0)
}

console.log(`Unknown command: ${command}`)