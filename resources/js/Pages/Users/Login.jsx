import GuestLayout from "@/Layouts/GuestLayout";
import { Head } from "@inertiajs/react";
import React from "react";
import { Link } from "@inertiajs/react";
import { useForm } from "@inertiajs/react";

const Login = () => {
    const { data, setData, post, errors, processing } = useForm({
        email: "",
        password: "",
    });

    const login = (e) => {
        e.preventDefault();
        route(post("login"));
    };
    return (
        <>
            <Head title="Login" />
            <GuestLayout>
                <div className="bg-gray-50 border border-gray-200 p-10 rounded max-w-lg mx-auto mt-24">
                    <header className="text-center">
                        <h2 className="text-2xl font-bold uppercase mb-1">
                            Log In
                        </h2>
                        <p className="mb-4">
                            Log in to add albums to favorites
                        </p>
                    </header>

                    <form action="" onSubmit={login}>
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
                                type="password"
                                className="border border-gray-200 rounded p-2 w-full"
                                name="password"
                                value={data.password}
                                onChange={(e) =>
                                    setData("password", e.target.value)
                                }
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
                                className="bg-black text-white rounded py-2 px-4 hover:bg-white hover:text-black border border-black w-full"
                            >
                                Sign In
                            </button>
                        </div>

                        <div className="mt-8">
                            <p>
                                Don't have an account?
                                <Link
                                    href="/register"
                                    className="ml-1 text-black underline hover:text-slate-500"
                                >
                                    Register
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </GuestLayout>
        </>
    );
};

export default Login;
