'use client';
import Image from 'next/image';
import toast from 'react-hot-toast';
import ModalComponent from '@/components/ui/ModalComponent';
import SelectComponent from '@/components/ui/Select';
import { Button, Input, useDisclosure } from '@nextui-org/react';
import { useEffect, useState } from 'react';
import { FaFileExcel, FaPlay } from 'react-icons/fa';
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
  postData,
  runQuery,
} from '@/lib';

export type formValuesType = {
  mongoUri: string;
  dbName: string;
  dropDownName: string;
};

type TopMenuProps = {
  setCollections: ([]) => void;
  setQueryResponse: any;
  setIsLoading: any;
  query: string;
  activateDownload: boolean;
};

const initialFormValue = {
  mongoUri: '',
  dbName: '',
  dropDownName: '',
};

const TopMenu = ({
  setCollections,
  setQueryResponse,
  setIsLoading,
  query,
  activateDownload,
}: TopMenuProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [selectedDb, setSelectedDb] =
    useState<formValuesType>(initialFormValue);
  const [dbList, setDbList] = useState<formValuesType[]>([]);
  const [formValues, setFromValues] =
    useState<formValuesType>(initialFormValue);

  useEffect(() => {
    const { db_list, selected_db, collection_list } = getDataFromLocalStorage();
    setDbList(db_list || []);
    setSelectedDb(selected_db || initialFormValue);
    setCollections(collection_list || []);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handelFromSubmit = () => {
    setDbList((pre) => {
      addDataToLocalStorage('DB_LIST', [...pre, formValues]);
      return [...pre, formValues];
    });
    setFromValues({
      mongoUri: '',
      dbName: '',
      dropDownName: '',
    });
    onClose();
    toast.success('Database successfully added');
  };

  const onDropDownValueSelection = async (selectedItem: string) => {
    const DB = dbList.find((ele) => ele.dropDownName === selectedItem);
    if (DB) {
      setSelectedDb(DB);
      addDataToLocalStorage('SELECTED_DB', DB);
      const { data, status } = await postData(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT}/getCollections`,
        DB,
      );

      if (status !== 200) {
        toast.error('cannot connect to DB. check your URI');
        return;
      }
      setCollections(data.collections);
      addDataToLocalStorage('COLLECTION_LIST', data.collections);
    }
  };

  const disableSubmit =
    !formValues.mongoUri || !formValues.dbName || !formValues.dropDownName;
  return (
    <div className="mb-2 flex gap-2">
      <Button
        className="h-auto w-[10%]"
        color="success"
        radius="sm"
        onClick={onOpen}
      >
        Add DataBase
      </Button>
      <SelectComponent
        className="w-[70%]"
        buttonText={selectedDb?.dropDownName || 'Select DB'}
        handleDropDownValueSelection={onDropDownValueSelection}
        selectedDb={selectedDb}
        dropDownItems={dbList}
      />
      <Button
        className="h-auto w-[10%]"
        color="success"
        radius="sm"
        onClick={() => runQuery(setQueryResponse, setIsLoading, query)}
        startContent={<FaPlay className="w-32" />}
      >
        Run
      </Button>
      {activateDownload ? (
        <form
          method="POST"
          action={`${process.env.NEXT_PUBLIC_API_ENDPOINT}/createCsv`}
        >
          <input type="hidden" name="dbName" value={selectedDb.dbName} />
          <input type="hidden" name="mongoUri" value={selectedDb.mongoUri} />
          <input type="hidden" name="query" value={query} />
          <button
            className="w-full rounded-md bg-green-500 px-4 h-full hover:bg-green-400 flex justify-between items-center gap-2"
            type="submit"
          >
            <FaFileExcel /> Download
          </button>
        </form>
      ) : (
        <Button
          className="h-auto w-[10%]"
          color="success"
          radius="sm"
          onClick={() =>
            toast.error('download only available once you run your query')
          }
        >
          Download
        </Button>
      )}
      <ModalComponent
        onOpenChange={onOpenChange}
        isOpen={isOpen}
        modalTitle={
          <div className="text-center">
            <Image
              alt="Logo"
              src="/images/logo.png"
              width={250}
              height={61}
              className="w-48 mb-2 mx-auto h-auto"
            />
            <p className="font-bold">Connect your DataBase</p>
          </div>
        }
      >
        <Input
          type="text"
          label="Mongo URI"
          onChange={(e) =>
            setFromValues((pre) => ({ ...pre, mongoUri: e.target.value }))
          }
          value={formValues.mongoUri}
        />
        <Input
          type="text"
          label="DB Name"
          onChange={(e) =>
            setFromValues((pre) => ({ ...pre, dbName: e.target.value }))
          }
          value={formValues.dbName}
        />
        <Input
          type="text"
          label="DB DropDown Name"
          onChange={(e) =>
            setFromValues((pre) => ({ ...pre, dropDownName: e.target.value }))
          }
          value={formValues.dropDownName}
        />
        <Button
          onClick={handelFromSubmit}
          color="success"
          radius="sm"
          className="mb-2"
          isDisabled={disableSubmit}
        >
          Add DataBase
        </Button>
      </ModalComponent>
    </div>
  );
};

export default TopMenu;
