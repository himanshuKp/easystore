import ProductCard from "./ProductCard.jsx";
import SearchBox from "../Searchbox.jsx";
import Dropdown from "../Dropdown.jsx";
import {useMemo, useState} from "react";

const sortList = ["Popularity", "Price Low to High", "Price High to Low"];

export default function ProductListings({products}) {

    const [search, setSearch] = useState("");
    const [sortValue, setSortValue] = useState("Popularity");

    function handleSearchChange(inputSearch) {
        setSearch(inputSearch);
        console.log(inputSearch);
    }

    function handleSortChange(filterInput) {
        setSortValue(filterInput);
        console.log(sortValue)
    }

    const filteredAndSortedProducts = useMemo(() => {
        console.log("Search useMemo", search)

        if (!Array.isArray(products)) {
            return [];
        }

        const filteredProducts = Array.isArray(products) ?
            products.filter(product =>
                product.name.toLowerCase().includes(search.toLowerCase()) ||
                product.description.toLowerCase().includes(search.toLowerCase())
            ) : [];

        return filteredProducts.sort((a, b) => {
            switch (sortValue) {
                case "Price Low to High":
                    return parseFloat(a.price) - parseFloat(b.price);
                case "Price High to Low":
                    return parseFloat(b.price) - parseFloat(a.price);
                case "Popularity":
                default:
                    return parseInt(b.popularity) - parseInt(a.popularity);
            }
        });
    }, [search, sortValue, products])

    return (
        <div className="max-w-6xl mx-auto">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4 pt-12">
                <SearchBox
                    label={"Search"}
                    placeholder={"Search Products..."}
                    value={search}
                    handleSearch={(value) => handleSearchChange(value)}
                />
                <Dropdown
                    label={"Sort by:"}
                    options={sortList}
                    handleSort={(value) => handleSortChange(value)}
                />
            </div>
            <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-6 py-12">
                {
                    filteredAndSortedProducts.length > 0 ?
                        filteredAndSortedProducts.map((product) => (
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