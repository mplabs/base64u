"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromBase64U = exports.toBase64U = void 0;
function toBase64U(data) {
    return Buffer.from(data)
        .toString('base64')
        .replaceAll('=', '')
        .replaceAll('+', '-')
        .replaceAll('/', '_');
}
exports.toBase64U = toBase64U;
function fromBase64U(data) {
    data = data.padEnd(data.length + ((4 - (data.length % 4)) % 4), '=');
    return Buffer.from(data.replaceAll('-', '+').replaceAll('_', '/'), 'base64').toString('utf-8');
}
exports.fromBase64U = fromBase64U;
//# sourceMappingURL=base64u.js.map