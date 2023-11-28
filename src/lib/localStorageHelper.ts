import { LOCAL_STORAGE_KEYS } from '@/components/constant';
import { formValuesType } from '@/components/layout/TopMenu';

export const addDataToLocalStorage = (
  key: 'DB_LIST' | 'SELECTED_DB' | 'COLLECTION_LIST',
  value: any,
) => {
  const parsedValue = JSON.stringify(value);
  const storageKey = LOCAL_STORAGE_KEYS[key];
  localStorage.setItem(storageKey, parsedValue);
};

export const getDataFromLocalStorage = (): {
  db_list: formValuesType[];
  selected_db: formValuesType;
  collection_list: string[];
} => {
  const localStorageData: any = {};
  const keys = Object.values(LOCAL_STORAGE_KEYS);

  keys.forEach((key) => {
    const storedValue = localStorage.getItem(key);
    if (storedValue !== null) {
      localStorageData[key] = JSON.parse(storedValue);
    } else {
      localStorageData[key] = null;
    }
  });

  return localStorageData;
};
