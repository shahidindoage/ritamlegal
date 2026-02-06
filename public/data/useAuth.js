"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const useAuth = () => {
  const router = useRouter();
  const [logged, setLogged] = useState(null); // Initialize as `null` to indicate loading

  useEffect(() => {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    setLogged(isLoggedIn);

    if (!isLoggedIn) {
      router.push("/login");
    }
  }, [router]);

  return logged; // Return the authentication status
};

export default useAuth;
