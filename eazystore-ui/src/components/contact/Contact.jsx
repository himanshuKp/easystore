import PageTitle from "../shared/PageTitle.jsx";
import {Form, useActionData, useNavigation} from "react-router-dom";
import {useEffect, useRef} from "react";
import {toast} from "react-toastify";

export default function Contact() {
    const actionData = useActionData();
    const formData = useRef(null);
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";

    useEffect(() => {
        if (actionData?.success) {
            formData.current?.reset();
            toast.success("Your message has been successfully submitted!");
        }
    }, [actionData]);

    const labelStyle =
        "block text-lg font-semibold text-primary dark:text-light mb-2";
    const textFieldStyle =
        "w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300";

    return (
        <div className="max-w-6xl min-h-213 mx-auto px-6 py-8 font-primary bg-normalbg dark:bg-darkbg">
            {/* Page Title */}
            <PageTitle title="Contact Us"/>
            <p className="max-w-3xl mx-auto mt-8 text-gray-600 dark:text-lighter mb-8 text-center">
                We’d love to hear from you! If you have any questions, feedback, or
                suggestions, please don’t hesitate to reach out.
            </p>
            <Form ref={formData} method={"POST"} className={"space-y-6 max-w-3xl mx-auto"}>
                <div>
                    <label htmlFor="name" className={labelStyle}>
                        Name
                    </label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your Name"
                        className={textFieldStyle}
                        required
                        minLength={5}
                        maxLength={30}
                    />
                </div>

                {/* Email and mobile Row */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="email" className={labelStyle}>
                            Email
                        </label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Your Email"
                            className={textFieldStyle}
                            required
                        />
                    </div>

                    {/* Mobile Field */}
                    <div>
                        <label htmlFor="mobileNumber" className={labelStyle}>
                            Mobile Number
                        </label>
                        <input
                            id="mobileNumber"
                            name="mobileNumber"
                            type="tel"
                            required
                            pattern="^\d{10}$"
                            title="Mobile number must be exactly 10 digits"
                            placeholder="Your Mobile Number"
                            className={textFieldStyle}
                        />
                    </div>
                </div>

                {/* Message Field */}
                <div>
                    <label htmlFor="message" className={labelStyle}>
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows="4"
                        placeholder="Your Message"
                        className={textFieldStyle}
                        required
                        minLength={5}
                        maxLength={500}
                    ></textarea>
                </div>

                {/* Submit Button */}
                <div className="text-center">
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="px-6 py-2 text-white dark:text-black text-xl rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter"
                    >
                        {isSubmitting ? "Submitting..." : "Submit"}
                    </button>
                </div>
            </Form>
        </div>
    )
}

