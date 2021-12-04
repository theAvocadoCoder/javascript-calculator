import React, { useState } from 'react';
import './Calculator.css';
import 'tailwindcss/tailwind.css';

export default function Calculator() {

    const [prevOperand, setPrevOperand] = useState('');
    const [currOperand, setCurrOperand] = useState('');
    const [currOperation, setCurrOperation] = useState(undefined);
    const [equaled, setEqualed] = useState(false);

    const getDisplayNumber = number => {
        const stringNumber = number.toString();
        const integerDigits = parseFloat(stringNumber.split('.')[0]);
        const decimalDigits = stringNumber.split('.')[1];
        let operation;
        if (stringNumber.includes('/')) {
            operation = '/';
        } else if (stringNumber.includes('*')) {
            operation = '*';
        } else if (stringNumber.includes('+')) {
            operation = '+';
        } else if (stringNumber.includes('-')) {
            operation = '-';
        }
        let integerDisplay;
        if (isNaN(integerDigits)) {
            integerDisplay = ''
        } else {
            integerDisplay = integerDigits.toLocaleString('en', { maximumFractionDigits: 0, maximumSignificantDigits: 10 })
        }
        if (decimalDigits != null) {
            return `${integerDisplay}.${decimalDigits}`;
        } else if (stringNumber.includes('/') || stringNumber.includes('*') || stringNumber.includes('+') || stringNumber.includes('-')) {
            return `${integerDisplay} ${operation}`;
        } else {
            return integerDisplay
        }
    }

    const compute = () => {
        let computation;
        const prev = parseFloat(prevOperand);
        const curr = parseFloat(currOperand);
        if (isNaN(prev) || isNaN(curr)) return
        switch (currOperation) {
            case '+':
                computation = prev + curr;
                break
            case '-':
                computation = prev - curr;
                break
            case '*':
                computation = prev * curr;
                break
            case '/':
                computation = prev / curr;
                break
            default:
                return
        }
        return computation;
    };

    const clear = () => {
        setPrevOperand('');
        setCurrOperand('');
        setCurrOperation(undefined);
    };

    const del = () => {
        setCurrOperand(currOperand.toString().slice(0, -1));
    };

    const appendNumber = (event) => {
        if (event.target.innerText === '.' && currOperand.includes('.')) return
        if (prevOperand === '' && currOperand !== '' && equaled === true) {
            setEqualed(false);
            setCurrOperand(event.target.innerText.toString());
        } else {
            setCurrOperand(currOperand.toString() + event.target.innerText.toString());
        }
    };

    const chooseOperation = (event) => {
        setCurrOperation(event.target.innerText);
        if (currOperand === '') return
        if (prevOperand === '') {
            setPrevOperand(currOperand.toString() + event.target.innerText);
            setCurrOperand('');
        }
        if (prevOperand !== '') {
            setPrevOperand(compute().toString() + event.target.innerText);
            setCurrOperand('');
        }
    };

    return (
        <div id="calculator-grid" class="z-10 h-full w-full rounded-2xl overflow-hidden grid justify-center content-center grid-cols-4 grid-rows-5 -mt-2">
            <div id="display" class="z-20 col-span-full row-span-2 bg-black bg-opacity-75 flex items-end justify-around p-1 flex-col break-words break-all">
                <div data-previous-operand id="previous-operand" class="text-white opacity-75 text-xs">{getDisplayNumber(prevOperand)}</div>
                <div data-current-operand id="current-operand" class="text-white text-base">{getDisplayNumber(currOperand)}</div>
            </div>
                <button data-all-clear onClick={clear} id="clear" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95 col-span-2">AC</button>
                <button data-delete onClick={del} id="del" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">DEL</button>
                <button data-operation onClick={chooseOperation} id="divide" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">/</button>
                <button data-number onClick={appendNumber} id="one" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">1</button>
                <button data-number onClick={appendNumber} id="two" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">2</button>
                <button data-number onClick={appendNumber} id="three" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">3</button>
                <button data-operation onClick={chooseOperation} id="multiply" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">*</button>
                <button data-number onClick={appendNumber} id="four" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">4</button>
                <button data-number onClick={appendNumber} id="five" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">5</button>
                <button data-number onClick={appendNumber} id="six" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">6</button>
                <button data-operation onClick={chooseOperation} id="add" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">+</button>
                <button data-number onClick={appendNumber} id="seven" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">7</button>
                <button data-number onClick={appendNumber} id="eight" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">8</button>
                <button data-number onClick={appendNumber} id="nine" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">9</button>
                <button data-operation onClick={chooseOperation} id="subtract" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">-</button>
                <button data-number onClick={appendNumber} id="decimal" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">.</button>
                <button data-number onClick={appendNumber} id="zero" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95">0</button>
                <button data-equals onClick={() => {setCurrOperand(compute()); setPrevOperand(''); setCurrOperation(undefined); setEqualed(true)}} id="equals" class="cursor-pointer text-base border border-solid border-white outline-none bg-white bg-opacity-75 hover:bg-opacity-95 col-span-2">=</button>
        </div>
    );
}