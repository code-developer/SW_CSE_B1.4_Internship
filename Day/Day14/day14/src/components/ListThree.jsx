// Child component
function ProductList({products}) {
    return(
        <div className="list-box">
            {products.length === 0 ? (<p>No Products available</p>):(
                <ul>
                    {/* map() */}
                    {products.map((product)=>(
                        <li key={product.id}>
                            {product.name}, costs Rs.{product.price}/-
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}

// Parent Component
function ProductListDemo() {
    const products = [
       {id: 1, name:"Laptop",price:95000},
       {id: 2, name:"Phone",price:30000},
       {id: 3, name:"Keyboard",price:5000},
       {id: 4, name:"Mouse",price:1500},
    ];

    return(
        <div>
            <h2>Product Demo</h2>
            <ProductList products={products} />
        </div>
    )
}
export default ProductListDemo;