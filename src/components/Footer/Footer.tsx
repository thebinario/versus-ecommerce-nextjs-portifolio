import SocialLinks from './SocialLinks';
import ServicesLinks from './ServicesLinks';
import CompanyLinks from './CompanyLinks';
import HelpfulLinks from './HelpfulLinks';
import LegalLinks from './LegalLinks';
import Image from "next/image";
import React from "react";

const Footer = () => {
    return (
        <footer className="bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="sm:flex sm:items-center sm:justify-between">
                    <div className="text-teal-600">
                        <Image src="/versus.png" alt="Logo" width={160} height={160}/>
                    </div>

                    <SocialLinks />
                </div>

                <div className="grid grid-cols-1 gap-8 border-t border-gray-100 pt-8 sm:grid-cols-2 lg:grid-cols-4 lg:pt-16">
                    <ServicesLinks />
                    <CompanyLinks />
                    <HelpfulLinks />
                    <LegalLinks />
                </div>

                <p className="text-xs text-gray-500">&copy; 2022. Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
