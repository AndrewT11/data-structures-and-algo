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
        let index = this._hash(key)
        if(this.dataMap[index]) {
            for(let i = 0; i < this.dataMap[index].length; i++) {
                if(this.dataMap[index][i][0] === key) {
                    return this.dataMap[index][i][1]
                }
             }
         }
         return undefined
     }

     keys() {
        // creating an empty array for all the keys
        let allKeys = [];

        // iterating through the complete hash table
        for(let i = 0; i < this.dataMap.length; i++) {

            // at each index, push all the keys[0] into allKeys array
            // if there is nothing at that address space, we will move onto the next index or address space
            // Basically, you need the first for loop to run through all the indexes, you nede the second for loop to run through all the items inside the index. Thus, you are returning all the items inside all the indexes
            if(this.dataMap[i]) {
                for(let j = 0; j < this.dataMap[i].length; j++) {
                    allKeys.push(this.dataMap[i][j][0])
                }
            }
        }

        // return the allKeys array for your viewing pleasure
        return allKeys;
     }
}

let myHashTable = new HashTable()
myHashTable.set('bolts', 1400)
myHashTable.set('washers', 50)