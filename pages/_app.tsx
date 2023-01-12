import "../styles/globals.css";
import Head from "next/head";
import Script from "next/script";
import type { AppProps } from "next/app";
import Navbar from "../layouts/navbar/navbar";
import "bootstrap/dist/css/bootstrap.css";
import { useEffect } from "react";


export default function App({ Component, pageProps }: AppProps) {

  return (
    <>


      <div className="pageBody">
        <Navbar />
        <Component {...pageProps} />
      </div>
    </>
  );
}
