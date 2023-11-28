'use client';
import { TopMenu } from '@/components';
import { Collections } from '@/components/layout';
import { useState } from 'react';

const Home = () => {
  const [collections, setCollections] = useState<string[]>([]);
  return (
    <div className="m-4">
      <TopMenu setCollections={setCollections} />
      <div className="flex h-[78vh] gap-1">
        <Collections collections={collections} />
        <div className="w-3/4">
          <div className="h-2/3 border">query</div>
          <div className="h-1/3 border">output</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
