"use client";
import axios from "axios";
import React, { useState } from "react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

export default function ProfilePage() {
  const router = useRouter();
  const [data, setData] = React.useState("");
  const logout = async () => {
    try {
      await axios.get("/API/Users/Logout");
      toast.success("Logout Successful");
      router.push("/Login");
    } catch (error: any) {
      console.log(error.message);
      toast.error(error.message);
    }
  };

  const getUserDetails = async () => {
    const res = await axios.get("/API/Users/Me");
    console.log(res.data);
    setData(res.data.data.username);
  };
  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <h1>Profile</h1>
      <hr />
      <p>Profile Page</p>
      <h2 className="rounded bg-green-500 p-4">
        {data === "nothing" ? (
          "Nothing"
        ) : (
          <Link href={`/Profile/${data}`}>{data}</Link>
        )}
      </h2>
      <hr />
      <button
        className="bg-blue-500 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={logout}
      >
        Logout
      </button>
      <button
        className="bg-green-800 mt-4 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={getUserDetails}
      >
        GetUserDetails
      </button>
    </div>
  );
}
