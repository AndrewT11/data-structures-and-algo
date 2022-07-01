class HashTable {
    constructor(size = 7) {
        this.dataMap = new Array(size)
    }
   
    _hash(key) {
        let hash = 0
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash
    }

    set(key,value) {
        let index = this._hash(key)
        if(!this.dataMap[index]) this.dataMap[index] = []
        
        this.dataMap[index].push([key, value])
        return this
    }

    get(key) {
        // matching word to hashed address
        let index = this._hash(key)
        
        // if there is any item at that address space
        if(this.dataMap[index]) {

            // If there is an item at that index ( or if that index exists)
            // the length is the length of the array located at the indexed address space
            for(let i = 0; i < this.dataMap[index].length; i++) {

                // if there is a key that matches the key you are searching for [hence we are searcing index [0] inside the Hash table and comparing it to the key we passed in
                // [i] is there because we are doing separate chaining, so there can be multiple items at the same address. We are now looking through each key inside that address to see if it matches the key we are searching for
                if (this.dataMap[index][i][0] === key) {
                    
                    // return the value of the key. If you were looking for "screws", you'd get the amount of screws you have
                    return this.dataMap[index][i][1]
                }
            }
        }
        return undefined;
    }
}

let myHashTable = new HashTable()
myHashTable.set('bolts', 1400)
myHashTable.set('washers', 50)