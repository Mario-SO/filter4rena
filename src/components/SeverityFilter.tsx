// components/SeverityFilter.tsx

import React from 'react';

type SeverityFilterProps = {
    setSeverityFilter: (severity: string) => void;
};

const SeverityFilter: React.FC<SeverityFilterProps> = ({ setSeverityFilter }) => {
    const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSeverityFilter(e.target.value);
    };

    return (
        <div className="w-full">
            <select
                className="w-full p-2 border border-gray-300 rounded"
                onChange={handleChange}
            >
                <option value="">All</option>
                <option value="H">High</option>
                <option value="M">Medium</option>
                <option value="L">Low</option>
                <option value="N">Note</option>
                <option value="G">Gas Optimization</option>
            </select>
        </div>
    );
};

export default SeverityFilter;
