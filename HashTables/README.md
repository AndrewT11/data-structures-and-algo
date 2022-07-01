- Hash Tables

**_ Hash Intro _**
Run Key:value pairs through a hash.

Only the key that gets run through the hash. Each letter has an ascii numerical value. The hash will run those numbers through a math equaltion and create a number.

Two characteristics of hashes:

1. One way. A string can create a hash. The has cannot create a string.
2. Determistics. Once a hash is produced from a key, the same hash will always be produced from that key.

set(key, value). The data will be sent to the hash table as an array of [key, value], inserted into the correct hash number. Collision may occur when two separate pieces of info have the same hash number.

**_ Collision _**

- Collision - when two items are mapped into the same spot in memory (of a hash table)

- These two arrays (each item is an array) is stored inside another array

- Separate Chaining - process of putting all key value pairs that map to a particular address in the same address space.

- Linear Probing (open addressing) - Instead of placing two items in the same address space, if an address space is taken, the item will look to be placed in the next available address space.

- You can also add a linked list to each address space by pushing.

**_Constructor_**

- You will get a more randomized distribution if items in your hash table if you have a prime number of address spaces
