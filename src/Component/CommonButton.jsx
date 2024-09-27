import React from 'react';

const CommonButton = ({label, onClick, className,disabled,}) => {
    return (
        <button
            className={`bg-[#FF3811] btn border-none text-white hover:bg-[rgb(255,100,17)] ${className}`}
            onClick={onClick}
            disabled={disabled}
        >
            {label}
        </button>
    );
};

export default CommonButton;