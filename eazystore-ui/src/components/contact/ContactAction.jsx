import apiClient from "../../api/apiClient.js";

export async function contactAction({request}) {
    const data = await request.formData();

    const contactData = {
        name: data.get("name"),
        email: data.get("email"),
        mobileNumber: data.get("mobileNumber"),
        message: data.get("message"),
    }
    try {
        await apiClient.post("/contacts", contactData);
        return {
            success: true
        }
    } catch (error) {
        if (error?.response.status === 400) {
            return {
                success: false,
                errors: error.response?.data
            }
        }
        throw new Response(error?.response?.data?.errorMessage || error.message || "Failed to submit your messages. Please try again.", {status: error.status || 500});
    }
}