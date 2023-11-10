import { config } from "@/config";
import * as React from "react";
import Image from "next/image";

require("dotenv").config();
console.log(config.apiBaseUrl);

const NotFoundPage = () => {
  return (
    <main>
      <section className="bg-white">
        <div className="flex flex-col items-center justify-center min-h-screen text-center text-black layout">
          <div className="text-red-500 drop-shadow-glow animate-flicker" />
          <h1 className="mt-8 text-4xl md:text-6xl">Page Not Found</h1>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
