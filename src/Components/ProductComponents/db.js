// product data.
let data = fetch('https://fakestoreapi.com/products?limit=5')
.then(res=>res.json())
.then(json=>console.log(json))


export default data