import React from "react";

import { Layout } from "../index";

const NotFound = () => (
    <Layout>
        <section className="w-full px-5 md:px-10 2xl:px-16 md:py-8">
            <div className="flex items-center justify-between flex-col md:flex-row py-6 2xl:py-4">
                <div className="flex bg-mmt-light p-16 w-full rounded-md mb-16 flex-col">
                    <h1 className="text-2xl mb-6 font-bold text-mmt-white">404 Not Found</h1>
                    <p className="text-mmt-white mb-16">The page you've requested is not available</p>
                    <a className="ring ring-yellow-300 rounded-full w-28 font-bold bg-yellow-300 hover:bg-yellow-400 hover:ring-yellow-400 focus:ring-yellow-400 outline-none p-2 text-center" href="/">Home</a>
                </div>
            </div>
        </section>
    </Layout>
);;

export default NotFound;