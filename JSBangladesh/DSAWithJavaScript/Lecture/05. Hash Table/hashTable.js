class HashTable {
  constructor(chunkSize = 10) {
    this.chunkSize = chunkSize;
    this.chunks = new Array(chunkSize).fill(undefined);
  }

  insert(value) {
    const hashIndex = this.hash(value);

    if (Array.isArray(this.chunks[hashIndex])) {
      this.chunks[hashIndex].push(value);
    } else {
      this.chunks[hashIndex] = [value];
    }
  }

  delete(value) {
    const hashIndex = this.hash(value);
    let found = false;

    if (Array.isArray(this.chunks[hashIndex])) {
      const chunk = this.chunks[hashIndex];

      const newChunk = [];
      for (let i = 0; i < chunk.length; i++) {
        if (chunk[i] === value) {
          found = true;
        }
        newChunk.push(chunk[i]);
      }

      this.chunks[hashIndex] = newChunk;
    }

    return found;
  }

  has(value) {
    const hashIndex = this.hash(value);

    if (Array.isArray(this.chunks[hashIndex])) {
      const chunk = this.chunks[hashIndex];

      for (let i = 0; i < chunk.length; i++) {
        if (chunk[i] === value) return true;
      }
    }

    return false;
  }

  hash(value) {
    const stringified = String(value);

    let unicodeSum = 0;
    for (let i = 0; i < stringified.length; i++) {
      unicodeSum += stringified.charCodeAt(i);
    }

    return unicodeSum % this.chunkSize;
  }
}

let hashTable = new HashTable(5);

hashTable.insert("a");
hashTable.insert("b");
hashTable.insert("c");
hashTable.insert("d");
hashTable.insert("e");
hashTable.insert("f");

console.log(hashTable.chunks);
