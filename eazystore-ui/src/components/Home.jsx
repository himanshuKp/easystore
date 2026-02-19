import PageHeading from "./shared/PageHeading.jsx";
import ProductListings from "./product/ProductListings.jsx";
import {useLoaderData} from "react-router-dom";

export default function Home() {
    const products = useLoaderData();

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

