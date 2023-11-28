'use client';
import { Input } from '@nextui-org/react';
import { useMemo, useState } from 'react';

type collections = {
  collections: string[];
};

const Collections = ({ collections }: collections) => {
  const [collectionSearch, setCollectionSearch] = useState('');

  if (!collections.length) {
    return (
      <div className="w-1/4 border overflow-auto flex items-center justify-center">
        <p className="bg-green-50 text-green-700 p-2 rounded-md">
          connect to a database to show collections
        </p>
      </div>
    );
  }

  const collectionToShow = collectionSearch
    ? collections.filter((collection) => collection.includes(collectionSearch))
    : collections;

  return (
    <div className="w-1/4 border">
      <Input
        size="sm"
        placeholder="search collections"
        radius="none"
        onChange={(e) => setCollectionSearch(e.target.value)}
        value={collectionSearch}
        className="h-[10%]"
      />
      <div className="overflow-auto h-[90%]">
        {collectionToShow.map((collection, index) => (
          <div
            key={index}
            className="p-2 bg-green-50 hover:bg-green-100 cursor-pointer m-2 rounded-md"
          >
            {collection}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collections;
