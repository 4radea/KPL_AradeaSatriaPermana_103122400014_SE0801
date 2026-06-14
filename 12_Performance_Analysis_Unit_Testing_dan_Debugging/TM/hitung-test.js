import { test } from 'node:test';
import assert from 'node:assert';
import { tambahPengitung } from './hitung.js';

test('5 tambah 3 sama dengan 8', () => {
    assert.strictEqual(tambahPengitung(5, 3), 8);
});

test('0 tambah 10 sama dengan 10', () => {
    assert.strictEqual(tambahPengitung(0, 10), 10);
});

test('-5 tambah 3 sama dengan -2', () => {
    assert.strictEqual(tambahPengitung(-5, 3), -2);
});

test('10 tambah 0 sama dengan 10', () => {
    assert.strictEqual(tambahPengitung(10, 0), 10);
});

test('-5 tambah -5 sama dengan -10', () => {
    assert.strictEqual(tambahPengitung(-5, -5), -10);
});