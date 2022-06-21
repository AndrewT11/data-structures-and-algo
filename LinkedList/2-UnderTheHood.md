What is a node comprised of?

- A node is both the value and the pointer.
- A node looks somewhat like this:
  { value: 4, next: null }

11, 3, 23, 7, 4

- the 7 looks like this:
  { value: 7, next: <point to 4> } which looks like this...

{ value: 7, next: { value: 4, next: null } }

Head --> { value: 11, next:
{ value: 3, next: {
{ value: 23, next: {
value: 7, next: {
Tail --> value: 4, next: null }
}
}
}
