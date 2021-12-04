import React from 'react';
// import './PhoneContainer.css';
import 'tailwindcss/tailwind.css';
import Calculator from '../Calculator/Calculator'

export default function PhoneContainer() {
    return (
        <div id="phone-wrapper" class="z-0 py-5 px-3 h-screen w-52 m-auto">
            <div id="phone-outline" class="z-0 rounded-3xl border-gray-700 border-4 border-t-8 border-b-8 h-full w-3/4 overflow-hidden">
                <div id="front-camera" class="z-50 w-3 h-3 rounded-full bg-gray-300 ml-auto mr-auto -mt-1"></div>
                <Calculator />
            </div>
        </div>
    );
}