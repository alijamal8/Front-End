"use client";
import Link from "next/link";
import React from "react";

function Logo() {
  return (
    <div>
      <Link href={"/"}>
        <h1 className="text-2xl font-bold tracking-wider">ESTORE</h1>
      </Link>
    </div>
  );
}

export default Logo;
