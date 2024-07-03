export function splitMix32(seed: number) {
    return function() {
        seed |= 0;
        seed = seed + 0x9e3779b9 | 0;
        let hash = seed ^ seed >>> 16;
        hash = Math.imul(hash, 0x21f0aaad);
        hash = hash ^ hash >>> 15;
        hash = Math.imul(hash, 0x735a2d97);
        return ((hash = hash ^ hash >>> 15) >>> 0) / 4294967296;
    };
}

export function getSeedFromString(value: string) {
    let seed = 0;
    for (let index = 0; index < value.length; index++) {
        seed = (seed * 31 + value.charCodeAt(index)) | 0;
    }
    return seed;
}
