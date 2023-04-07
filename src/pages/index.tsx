// pages/index.tsx

import React, { useState, useEffect } from 'react';
import SearchBar from '../components/SearchBar';
import SeverityFilter from '../components/SeverityFilter';
import Card from '../components/Card';
import Head from 'next/head';
import Hero from '../components/Hero';

type SearchResult = {
  name: string;
  severity: string;
  link: string;
  vulnerability: string;
};

type Severity = 'H' | 'M' | 'L' | 'N' | 'G';

const IndexPage: React.FC = () => {
  const [data, setData] = useState<SearchResult[]>([]);
  const [filteredData, setFilteredData] = useState<SearchResult[]>([]);
  const [severityFilter, setSeverityFilter] = useState('');

  useEffect(() => {
    fetch('/api.json')
      .then((response) => response.json())
      .then((jsonData) => {
        setData(jsonData);
        setFilteredData(jsonData);
      });
  }, []);

  useEffect(() => {
    setFilteredData(data.filter((item) => !severityFilter || item.severity === severityFilter));
  }, [severityFilter, data]);

  return (
    <div className="container mx-auto px-4 mb-4 font-jetbrains">
      <Head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>⚡️</text></svg>"
        />
        <title>Filter4rena</title>
      </Head>
      {/* <h1 className="text-4xl font-semibold mb-4">Filter4rena</h1> */}
      <Hero />
      <div className="grid grid-cols-2 gap-4 mb-4">
        <SearchBar data={data} setFilteredData={setFilteredData} />
        <SeverityFilter setSeverityFilter={setSeverityFilter} />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredData.map((item, index) => (
          <Card key={index} link={item.link} severity={item.severity as Severity} vulnerability={item.vulnerability} name={item.name} />
        ))}
      </div>
    </div>
  );
};

export default IndexPage;
