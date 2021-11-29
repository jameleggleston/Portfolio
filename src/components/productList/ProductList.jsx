import "./productList.css";
import Product from "../product/Product";
import { products } from "../product/data"

const ProductList = () => {
    return (
        <div className="pl">
            <div className="pl-text">
                <h1 className="pl-title">Create and Inspire</h1>
                <p className="pl-desc">
                    this is a collection of work for you to browse through. please let me know what you
                    think about anything i've worked on or contributed to.
                </p>
            </div>
            <div className="pl-list">
               {products.map((item) => (
                   <Product  key={item.id} img={item.img} link={item.link} desc={item.desc}/>
               ))}
            </div>
        </div>
    )
}

export default ProductList
