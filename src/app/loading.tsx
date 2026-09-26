import React from 'react';

const GlobalLoading = () => {
    return (
        <div className="flex flex-col items-center justify-center mt-10 gap-4 text-gray-400">
            <span className="loading loading-spinner loading-xl"></span>
            Loading…
        </div>
    );
};

export default GlobalLoading;