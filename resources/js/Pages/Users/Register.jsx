import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

const Register = () => {
    const { data, setData, post, processing, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const submitUser = (e) => {
        e.preventDefault();
        post(route("user.store"));
    };
    return (
        <>
            <Head title="Register" />
            <GuestLayout>
                <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
                    <header className="text-center">
                        <h2 className="text-2xl font-bold uppercase mb-2">
                            Register
                        </h2>
                        <p className="mb-4">
                            Create an account to add albums to favorites
                        </p>
                    </header>

                    <form onSubmit={submitUser}>
                        <div className="mb-6">
                            <label
                                htmlFor="name"
                                className="inline-block text-lg mb-2"
                            >
                                Name
                            </label>
                            <input
                                id="name"
                                type="text"
                                className="border border-gray-200 rounded p-2 w-full"
                                name="name"
                                value={data.name}
                                onChange={(e) =>
                                    setData("name", e.target.value)
                                }
                                required
                            />
                            {errors.name && (
                                <div className="text-red-500 mt-2">
                                    {errors.name}
                                </div>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="email"
                                className="inline-block text-lg mb-2"
                            >
                                Email
                            </label>
                            <input
                                id="email"
                                type="email"
                                className="border border-gray-200 rounded p-2 w-full"
                                name="email"
                                value={data.email}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                                required
                            />
                            {errors.email && (
                                <div className="text-red-500 mt-2">
                                    {errors.email}
                                </div>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password"
                                className="inline-block text-lg mb-2"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                className="border border-gray-200 rounded p-2 w-full"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
                                required
                            />
                            {errors.password && (
                                <div className="text-red-500 mt-2">
                                    {errors.password}
                                </div>
                            )}
                        </div>

                        <div className="mb-6">
                            <label
                                htmlFor="password2"
                                className="inline-block text-lg mb-2"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="password_confirmation"
                                type="password"
                                className="border border-gray-200 rounded p-2 w-full"
                                name="password_confirmation"
                                value={data.password_confirmation}
                                onChange={(e) =>
                                    setData(
                                        "password_confirmation",
                                        e.target.value
                                    )
                                }
                                required
                            />
                            {errors.password && (
                                <div className="text-red-500 mt-2">
                                    {errors.password}
                                </div>
                            )}
                        </div>

                        <div className="mb-6">
                            <button
                                type="submit"
                                disabled={processing}
                                className="bg-black text-white rounded py-2 px-4 hover:bg-white hover:text-black border border-black w-full"
                            >
                                Sign Up
                            </button>
                        </div>

                        <div className="mt-8">
                            <p>
                                Already have an account?
                                <Link
                                    href="/login"
                                    className="ml-1 text-black underline hover:text-slate-500"
                                >
                                    Login
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </GuestLayout>
        </>
    );
};

export default Register;
