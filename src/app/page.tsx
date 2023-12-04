'use client';
import { Collections, Output, Query, TopMenu } from '@/components/layout';
import { ModalComponent } from '@/components/ui';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const Home = () => {
  const [collections, setCollections] = useState<string[]>([]);
  const [queryResponse, setQueryResponse] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [query, setQuery] = useState('');
  const [activateDownload, setActivateDownload] = useState(false);

  useEffect(() => {
    if (!!query && queryResponse.length) {
      setActivateDownload(true);
    } else {
      setActivateDownload(false);
    }
  }, [queryResponse, query]);

  useEffect(() => {
    setQueryResponse([]);
  }, [query]);

  return (
    <>
      <ModalComponent hideCloseButton isOpen={isLoading}>
        <div className="flex justify-center items-center w-full">
          <Image
            alt="loading gif"
            src="/loading.gif"
            width={100}
            height={100}
            className="z-30 rounded-md"
          />
        </div>
      </ModalComponent>
      <div className="m-4">
        <TopMenu
          setCollections={setCollections}
          setQueryResponse={setQueryResponse}
          setIsLoading={setIsLoading}
          query={query}
          activateDownload={activateDownload}
        />
        <div className="flex h-[78vh] gap-1">
          <Collections collections={collections} />
          <div className="w-3/4">
            <Query setQuery={setQuery} />
            <Output queryResponse={queryResponse} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
