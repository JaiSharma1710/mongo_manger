'use client';
import { Collections, Output, Query, TopMenu } from '@/components/layout';
import { useState } from 'react';

const Home = () => {
  const [collections, setCollections] = useState<string[]>([]);
  const [queryResponse, setQueryResponse] = useState([]);
  return (
    <div className="m-4">
      <TopMenu
        setCollections={setCollections}
        setQueryResponse={setQueryResponse}
      />
      <div className="flex h-[78vh] gap-1">
        <Collections collections={collections} />
        <div className="w-3/4">
          <Query />
          <Output queryResponse={queryResponse} />
        </div>
      </div>
    </div>
  );
};

export default Home;
