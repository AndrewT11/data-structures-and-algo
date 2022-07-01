class HashTable {
    constructor(size =7) {
        this.dataMap = new Array(size);
    }

    _hash(key) {
        let hash = 0

        for(let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length;
        }
        return hash;
    }

    set(key, value) {
        // using _hash method to create a address space number for the item we are placing into hash map table
        let index = this._hash(key)

        // if there is no item at that index, create an empty array at that position
        if(!this.dataMap[index]) this.dataMap[index] = [];

        // set the item at that current index position
        this.dataMap[index].push([key, value])
        return this;
    }
}

const myHashTable = new HashTable();
myHashTable