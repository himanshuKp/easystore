import PageHeading from "./shared/PageHeading.jsx";
import ProductListings from "./product/ProductListings.jsx";
import {useEffect, useState} from "react";
import apiClient from "../api/apiClient.js";

export default function Home() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchProducts = async () => {
        try {
            setLoading(true);
            return await apiClient.get("/products");
        } catch (error) {
            setError(
                error?.response?.data?.message ||
                "Failed to fetch products."
            );
        } finally {
            setLoading(false);
        }

    }

    useEffect(() => {
        fetchProducts().then(response => {
            setProducts(response.data);
        });
    }, []);

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="text-xl font-semibold">Loading products...</span>
            </div>
        );
    }

    if (error) {
        return (
            <div className="flex items-center justify-center min-h-screen">
                <span className="text-xl text-red-500">Error: {error}</span>
            </div>
        )
    }

    return (
        <div className={"max-w-6xl mx-auto px-6 py-8"}>
            <PageHeading title={"Explore Eazy Stickers"}>
                Add a touch of creativity to your space with our wide range of fun and
                unique stickers. Perfect for any occasion!
            </PageHeading>
            <ProductListings products={products}/>
        </div>
    )
}