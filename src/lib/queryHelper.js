import toast from 'react-hot-toast';
import { getData, getDataFromLocalStorage, postData } from '.';

export const runQuery = async (setQueryResponse) => {
  try {
    const selectedQuery = getSelectedText();
    const { selected_db } = getDataFromLocalStorage();
    if (!selectedQuery) {
      toast.error('no query selected');
      return;
    }
    const { data } = await postData('/api/runquery', {
      query: selectedQuery,
      selected_db,
    });
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

  window.location.assign(
    `/api/downloadcsv?mongoUri=${selected_db.mongoUri}&query=${selectedQuery}`,
  );
};

function getSelectedText() {
  if (window.getSelection) {
    return window.getSelection()?.toString() ?? '';
  } else if (document.selection && document.selection.type !== 'Control') {
    return document.selection.createRange().text ?? '';
  }
  return '';
}
