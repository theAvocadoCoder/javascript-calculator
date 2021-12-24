import React from 'react';
// import './PhoneContainer.css';
import 'tailwindcss/tailwind.css';
import Calculator from '../Calculator/Calculator'

export default function PhoneContainer() {
    return (
        <div id="phone-wrapper" class="flex items-center justify-center z-0 px-10 py-5 h-screen">
            <div id="phone-outline" class="z-0 rounded-3xl xl:rounded-4xl border-gray-700 border-4 border-t-8 border-b-8 h-full lg:h-128 xl:h-192 w-60 xl:w-96 overflow-hidden">
                <div id="front-camera" class="z-50 w-3 h-3 rounded-full bg-gray-300 ml-auto mr-auto -mt-1"></div>
                <Calculator />
            </div>
        </div>
    );
}