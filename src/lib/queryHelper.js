import toast from 'react-hot-toast';
import { getDataFromLocalStorage, postData } from '.';

export const runQuery = async (setQueryResponse, setIsLoading) => {
  try {
    const selectedQuery = getSelectedText();
    const { selected_db } = getDataFromLocalStorage();
    if (!selectedQuery) {
      toast.error('no query selected');
      return;
    }
    setIsLoading(true);
    const { data, status } = await postData(
      `https://mongo-manager-backend.vercel.app/runQuery`,
      {
        query: selectedQuery,
        selected_db,
      },
    );
    setIsLoading(false);
    if (status !== 200) {
      toast.error('cannot connect to DB. check your URI');
      return;
    }

    setQueryResponse(data.data);
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
  }
};

export const handelDownload = async (setIsLoading) => {
  const selectedQuery = getSelectedText();
  const { selected_db } = getDataFromLocalStorage();
  if (!selectedQuery) {
    toast.error('no query selected');
    return;
  }
  setIsLoading(true);
  const { data, status } = await postData(
    `https://mongo-manager-backend.vercel.app/createCsv`,
    {
      selected_db,
      selectedQuery,
    },
  );
  setIsLoading(false);
  if (status === 200) {
    window.location.assign(data);
  } else {
    toast.error(`something went wrong`);
    console.log(data);
  }
};

function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection()?.toString() ?? '';
  } else if (document.selection && document.selection.type !== 'Control') {
    return document.selection.createRange().text ?? '';
  }
  return '';
}
