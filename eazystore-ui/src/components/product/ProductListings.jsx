import ProductCard from "./ProductCard.jsx";
import SearchBox from "../Searchbox.jsx";
import Dropdown from "../Dropdown.jsx";
import {useState} from "react";

export default function ProductListings({products}) {

    const [search, setSearch] = useState("");

    function handleSearchChange(inputSearch) {
        setSearch(inputSearch);
        console.log(inputSearch);
    }

    let filteredProducts = Array.isArray(products) ?
        products.filter(product =>
            product.name.toLowerCase().includes(search.toLowerCase()) ||
            product.description.toLowerCase().includes(search.toLowerCase())
        ) : [];

    return (
        <div className="max-w-6xl mx-auto">
            <div className={"flex flex-col sm:flex-row justify-between items-center gap-4 pt-12"}>
                <SearchBox
                    label={"Search"}
                    placeholder={"Search Products..."}
                    value={search}
                    handleSearch={(value) => handleSearchChange(value)}
                />
                <Dropdown
                    label={"Sort by:"}
                    options={[]}
                />
            </div>
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
                {
                    filteredProducts.length > 0 ?
                        filteredProducts.map((product) => (
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