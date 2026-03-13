import PageTitle from "../../components/PageTitle.jsx";
import {Form, Link, useActionData, useNavigate, useNavigation} from "react-router-dom";
import {useEffect} from "react";
import {toast} from "react-toastify";

export default function Login() {
    const actionData = useActionData();
    const navigation = useNavigation();
    const isSubmitting = navigation.state === "submitting";
    const navigate = useNavigate();

    useEffect(() => {
        if (actionData?.success) {
            navigate("/home");
        } else if (actionData?.errors) {
            toast.error(actionData?.errors?.message || "Login Failed");
        }
    }, [actionData, navigate]);

    const labelStyle =
        "block text-lg font-semibold text-primary dark:text-light mb-2";
    const textFieldStyle =
        "w-full px-4 py-2 text-base border rounded-md transition border-primary dark:border-light focus:ring focus:ring-dark dark:focus:ring-lighter focus:outline-none text-gray-800 dark:text-lighter bg-white dark:bg-gray-600 placeholder-gray-400 dark:placeholder-gray-300";

    return (
        <div className="min-h-213 flex items-center justify-center font-primary dark:bg-darkbg">
            <div className="bg-white dark:bg-gray-700 shadow-md rounded-lg max-w-md w-full px-8 py-6">
                {/* Title */}
                <PageTitle title="Login"/>

                <Form method={"POST"} className="space-y-6">
                    {/* Email Field */}
                    <div>
                        <label htmlFor="username" className={labelStyle}>
                            Username
                        </label>
                        <input
                            id="username"
                            type="text"
                            name="username"
                            placeholder="Your Username"
                            autoComplete={"username"}
                            required
                            className={textFieldStyle}
                        />
                    </div>

                    {/* Password Field */}
                    <div>
                        <label htmlFor="password" className={labelStyle}>
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            placeholder="Your Password"
                            required
                            autoComplete={"current-password"}
                            minLength={8}
                            maxLength={20}
                            className={textFieldStyle}
                        />
                    </div>

                    {/* Submit Button */}
                    <div>
                        <button
                            type="submit"
                            className="w-full px-6 py-2 text-white dark:text-black text-xl rounded-md transition duration-200 bg-primary dark:bg-light hover:bg-dark dark:hover:bg-lighter"
                        >
                            {isSubmitting ? "Submitting..." : "Login"}
                        </button>
                    </div>
                </Form>

                {/* Register Link */}
                <p className="text-center text-gray-600 dark:text-gray-400 mt-4">
                    Don't have an account?{" "}
                    <Link
                        to="/register"
                        className="text-primary dark:text-light hover:text-dark dark:hover:text-primary transition duration-200"
                    >
                        Register Here
                    </Link>
                </p>
            </div>
        </div>
    );
}

