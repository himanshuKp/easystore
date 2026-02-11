import ProductCard from "./ProductCard.jsx";
import SearchBox from "../Searchbox.jsx";
import Dropdown from "../Dropdown.jsx";

export default function ProductListings({products}) {
    return (
        <div className="max-w-6xl mx-auto">
            <div className={"flex flex-col sm:flex-row justify-between items-center gap-4 pt-12"}>
                <SearchBox
                    label={"Search"}
                    placeholder={"Search Products..."}
                    value={""}
                />
                <Dropdown
                    label={"Sort by:"}
                    options={[]}
                />
            </div>
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
                {
                    products.length > 0 ?
                        products.map((product) => (
                            <ProductCard key={product.productId} product={product}/>
                        ))
                        : (
                            <p className="text-center font-primary font-bold text-lg text-primary">No products found</p>
                        )
                }
            </div>
        </div>
    )
}