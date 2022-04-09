const Fuse = require('fuse.js')

const fruits = ['apple', 'orange','apricot','banana','mango','coconut']
const fuse = new Fuse(fruits,{keys:[],includeScore:true,threshold:0.01})
// const options = {
//     getFn: (obj, path) => {
//       // Use the default `get` function
//       const value = Fuse.config.getFn(obj, path)
//       // ... do something with `value`
//       return value
//     }
//   }

console.log(fuse.search("ap"))