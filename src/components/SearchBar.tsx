// components/SearchBar.tsx

import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';

type SearchResult = {
    name: string;
    severity: string;
    link: string;
    vulnerability: string;
};

type SearchBarProps = {
    data: SearchResult[];
    setFilteredData: (data: SearchResult[]) => void;
};

const SearchBar: React.FC<SearchBarProps> = ({ data, setFilteredData }) => {
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fuse = new Fuse(data, {
            keys: ['vulnerability'],
            includeScore: true,
        });

        if (searchTerm.trim()) {
            const results = fuse.search(searchTerm);
            setFilteredData(results.map((result) => result.item));
        } else {
            setFilteredData(data);
        }
    }, [searchTerm, data, setFilteredData]);

    return (
        <div className="w-full">
            <input
                className="w-full p-2 border border-gray-300 rounded"
                type="text"
                placeholder="Search vulnerabilities eg. Reentrancy"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
        </div>
    );
};

export default SearchBar;
