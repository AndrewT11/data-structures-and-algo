class Hashtable {
    // default size for this hastable class will be 7. You can pass any number, you'd like, but if no number is passed, 7 will be its size
    // this is the constructor for our empty array
    constructor(size=7) {
        this.dataMap = new Array(size)
    }

    // This is used to generate the hash for a certain item to be placed in a hash map
    // _ designates that this function should not be called on its own, but should be called within another function
    _hash(key) {
        let hash = 0;
        
        // for loop that generates the particular hash for the item. The modulo will be the hash number inside the hash table for each item. That is why we return the hash.
        for(let i=0; i < key.length; i++) {
            // we divide by 23 because it helps in randomization of hash table. We modulo this.dataMap.length because those numbers that will be returned as a modulo (example: 0-6, 7 numbers total) are the address spaces available in the hash table
            hash = (hash + key.charCodeAt(i) * 23) % this.dataMap.length
        }
        return hash;
    }
}