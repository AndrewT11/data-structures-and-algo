- Intro
  Vertex or Node
  Edge or Connection connect the Vertex or Nodes

Vertices or Nodes can connect to multiple Nodes. No limitation.

If there are no arrows connecting the vertices, then the direction is bidirectional.

Edges can be uni- or bi-directional and can be weighted. This is how we would route traffic from slower routes to faster routes.

A binary tree is an example of a graph. It has limitations of only connecting to two other nodes and each is uni-directional.

**_Adjacency Matrix_**

- a way to store a graph
- a square chart (like bingo) that plugs 1s into places that the two nodes edge and 0s where two nodes do not.
- if all vertices have bidrectional edges, there will be a 45 degree angle down the middle inwhich no vertices connect. There will be symmetry across that line among edge connections to all the other vertices in the Matrix. If you make one of the connections uni-direcitonal, it will not be symmetrical anymore.
- In an Adjacency Matrix, you can also list the connections out by their weight number.
- Row, then column for which vertex connects to which vertex.

**_Adjacency List_**
This is how we will represent our lists

{
A: ['B', 'C'],
B: ["A", "C"],
C: ['B', 'D'],
D: ['C', 'E'],
E: ['A', 'D']

}

**_Big O_**

In an adjacency matrix, you need to store what each vertices is connected AND NOT connected to

- inefficient

Adjacency list, you store what the vertice is connected to only.

In general, adjacency list is more efficient than an adjancy matrix.

- many times O( |V| + |N|) vs O(|V|^2)

Space Complexity Matrix vs List:

- O(|V|^2) vs O( |V| + |N|)

Add Vertex Matrix vs List:

- O(|V|^2) vs O(1)

Add Edge Matrix vs List:

- O(1) for both

Remove Edge Matrix vs List:

- O(1) vs O(|E|)

Remove Vertex Matrix vs List:

- O(|V|^2) vs O(|V| + |E|)
