"use client";
import React, { useState } from "react";
const QuantityAddRemove:React.FC = () => {
    const [value, setValue] = useState<number>(1);
    return (
        <div className="flex items-center gap-x-2">
            <button   onClick={() => setValue(value <= 1 ? 1 : value - 1)} className="flex justify-center hover:bg-gray-300 bg-gray-200 rounded-full w-9 h-9 text-2xl">-</button>
            <span className="text-sm">{value}</span>
            <button onClick={() => {setValue(value + 1);}} className="flex justify-center hover:bg-gray-300 bg-gray-200 rounded-full w-9 h-9 text-2xl">+</button>
        </div>
    );
};

export default QuantityAddRemove;

