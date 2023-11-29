import toast from 'react-hot-toast';
import { getDataFromLocalStorage, postData } from '.';

export const runQuery = async (setQueryResponse) => {
  try {
    const selectedQuery = getSelectedText();
    const { selected_db } = getDataFromLocalStorage();
    if (!selectedQuery) {
      toast.error('no query selected');
      return;
    }
    const { data, status } = await postData('http://localhost:9000/runQuery', {
      query: selectedQuery,
      selected_db,
    });

    if (status !== 200) {
      toast.error('cannot connect to DB. check your URI');
      return;
    }

    setQueryResponse(data.data);
  } catch (error) {
    toast.error(error?.response?.data?.message || error.message);
  }
};

export const handelDownload = async () => {
  const selectedQuery = getSelectedText();
  const { selected_db } = getDataFromLocalStorage();
  if (!selectedQuery) {
    toast.error('no query selected');
    return;
  }

  const { data, status } = await postData('http://localhost:9000/createCsv', {
    selected_db,
    selectedQuery,
  });

  if (status === 200) {
    window.location.assign('http://localhost:9000/downloadcsv');
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
