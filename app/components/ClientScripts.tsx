"use client";

import Script from "next/script";
import React from "react";

const ClientScripts: React.FC = () => {
  return (
    <>
      {/* Main.js JavaScript */}
      <Script
        src="/assets/js/main.js"
        strategy="lazyOnload"
        onLoad={() => console.log("Main.js loaded!")}
      />
    </>
  );
};

export default ClientScripts;
