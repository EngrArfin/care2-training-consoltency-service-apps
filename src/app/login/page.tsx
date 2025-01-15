"use client";

import Link from "next/link";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import { Suspense, useState } from "react";
import loginImage from "../../UI/image/log.png";

export type FormValues = {
  email: string;
  password: string;
};

const Login = () => {
  const router = useRouter();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginContent router={router} />
    </Suspense>
  );
};

interface LoginContentProps {
  router: ReturnType<typeof useRouter>;
}

const LoginContent = ({ router }: LoginContentProps) => {
  const searchParams = useSearchParams();

  const redirectPath = searchParams?.get("redirect") || "/";

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const resp = await signIn("credentials", {
      email,
      password,
      redirect: false,
      callbackUrl: redirectPath,
    });

    if (resp?.ok) {
      const sessionResp = await fetch("/api/auth/session");

      const session = await sessionResp.json();
      console.log(session);

      if (session?.user?.role === "admin") {
        router.push("/admin");
      } else if (session?.user?.role === "user") {
        router.push(redirectPath);
      } else {
        router.push("/");
      }
    } else {
      console.error("Login failed:", resp?.error);
    }
  };

  const handleAdminLogin = () => {
    setEmail("admin@gmail.com");
    setPassword("Admin");
  };

  const handleUserLogin = () => {
    setEmail("user@gmail.com");
    setPassword("User");
  };

  return (
    <div className="flex h-screen">
      <div
        className="w-1/2 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${loginImage.src})` }}
      ></div>

      <div className="w-1/2 flex items-center justify-center bg-gray-50 py-6 px-12 sm:px-8 lg:px-10">
        <div className="w-full max-w-md bg-white rounded-xl overflow-hidden p-8">
          <h2 className="text-3xl font-medium text-center mb-6 text-gray-800">
            welcome to Login
          </h2>

          <div className="flex justify-between mb-6">
            <button
              onClick={handleAdminLogin}
              className="px-4 py-2 bg-blue-900 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-800"
            >
              Admin
            </button>
            <button
              onClick={handleUserLogin}
              className="px-4 py-2 bg-blue-900 text-white font-semibold rounded-lg shadow-lg "
            >
              User
            </button>
          </div>

          <form onSubmit={handleLogin} className="space-y-8">
            <div className="space-y-4">
              <div>
                <label className="block text-lg font-medium text-gray-700">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
                  required
                />
              </div>
              <div>
                <label className="block text-lg font-medium text-gray-800">
                  Password
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-xl shadow-sm"
                  required
                />
              </div>
            </div>

            <div className="flex justify-between items-center">
              <Link href="/forget-password" className="text-sm text-blue-900 ">
                Forgot Password?
              </Link>
              <p className="text-sm text-blue-900">
                i have no account?{" "}
                <Link href="/signup" className="hover:underline">
                  Signup
                </Link>
              </p>
            </div>

            <div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r bg-blue-900 text-white font-semibold rounded-lg shadow-lg"
              >
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
