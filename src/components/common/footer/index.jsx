import React from "react";
import { GetYear } from "../../../helpers";

const Footer = () => {
    const currentYear = GetYear();
    return (
        <footer className="text-gray-600 body-font bg-gray-700" data-testid="footer">
            <div className="bg-gray-900">
                <div className="container mx-auto py-4 px-5 flex flex-wrap flex-row text-white text-sm text-center">
                    <p className="sm:text-left">&copy;&nbsp;{currentYear},</p>&nbsp;<a className="text-gray-300" href="https://github.com/ypk">ypk</a>.&nbsp;
                    <p>Everything is open-sourced.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;