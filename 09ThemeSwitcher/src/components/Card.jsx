/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

export default function Card() {
    const [darkTheme, setDarkTheme] = useState(false);

    const toggleTheme = () => {
        setDarkTheme(!darkTheme);
    };

    return (
        <div className={`${darkTheme ? 'dark' : ''} flex flex-col items-center justify-center h-screen`}>
            {/* Toggle Theme Button */}
            <div className="mb-4">
                <label className="inline-flex items-center cursor-pointer">
                    <input type="checkbox" className="sr-only" onClick={toggleTheme} />
                    <div className="w-11 h-6 bg-gray-200 rounded-full dark:bg-gray-700 peer">
                        <div className="dot absolute w-4 h-4 bg-white rounded-full left-1 top-1 peer-checked:bg-gray-800 peer-checked:translate-x-full transition-transform duration-200"></div>
                    </div>
                    <span className="ml-3 text-gray-900 dark:text-gray-300">Toggle Theme</span>
                </label>
            </div>

            {/* Card */}
            <div className="w-80 bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="/">
                    <img
                        className="p-4 rounded-t-lg object-contain mx-auto"
                        style={{ width: '200px', height: '200px' }}
                        src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRfP9AveR-GPPjKtD7mQHa_BOswndwiEZ-Njqm2yVjgOR2V5EdR-D2p3kEYzRzMOa6iyhVN_yoTL-FKr8Zt6Vq8oWSUGC1_LgokKuTbCtfqiNK8m89a4D5x6eM&usqp=CAE"
                        alt="product_image1"
                    />
                </a>
                <div className="px-5 pb-5 text-center">
                    <a href="/">
                        <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
                            Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
                        </h5>
                    </a>
                    <div className="flex justify-center items-center mt-2 mb-4">
                        <span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800">
                            $599
                        </span>
                    </div>
                    <a
                        href="/"
                        className="inline-block w-full text-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                        Add to cart
                    </a>
                </div>
            </div>
        </div>
    );
}
