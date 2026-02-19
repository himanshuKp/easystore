import apiClient from "../../api/apiClient.js";

export async function productsLoader() {
    try {
        const response = await apiClient.get("/products");
        return response.data;
    } catch (error) {
        throw new Response(error.message || "Failed to capture products. Please try again.", {status: error.status || 500})
    }
}