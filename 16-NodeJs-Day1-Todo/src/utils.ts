import * as fs from 'fs';

export function readJSON(file: string) {
    if (!fs.existsSync(file)) {
        fs.writeFileSync(file, '[]', 'utf-8');   // create empty array file
        return [];
    }

    try {
        const data = JSON.parse(fs.readFileSync(file, 'utf-8'));
        return Array.isArray(data) ? data: [];
    } catch (err) {
        console.error(`Error parsing ${file}, resetting file to empty array.`);
        fs.writeFileSync(file, '[]', 'utf-8');
        return [];
    }
}

export function writeJSON(file: string, data: any) {
    fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf-8');
}

export function getTime() {
    return new Date().toISOString();
}

export function generateId() {
    return Math.random().toString(36).substr(2,9);
}