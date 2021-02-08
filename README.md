# lambert-w
Javascript implementation of Lambert W function based on the implementation by [protobi/lambertw](https://github.com/protobi/lambertw).

This implementation introduces a number of changes made as of 2021/02/08:
- Removes error calculations 
- Significantly simplifies domain violation handling and return values.
- It does not currently implement Lambert W_{-1}(x).

## Lambert W Functions

Lambert’s W functions, W(x), are defined to be solutions of the equation W(x) \exp(W(x)) = x. This function has multiple branches for x < 0; however, it has only two real-valued branches. We define W_0(x) to be the principal branch, where W > -1 for x < 0, and W_{-1}(x) to be the other real branch, where W < -1 for x < 0.

## Usage

```
npm install CheezBarger/lambert-w
```


```javascript
const {lambertW0} = require('lambert-w');
// Compute the principal Lambert W_0 branch
lambertW0(1.0); // 0.5671432904097838
```
