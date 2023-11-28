import toast from 'react-hot-toast';
import { getDataFromLocalStorage, postData } from '.';

export const runQuery = async () => {
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
    console.log(data);
  } catch (error: any) {
    toast.error(error?.response?.data?.message || error.message);
  }
};

function getSelectedText(): string {
  if (window.getSelection) {
    return window.getSelection().toString();
  } else if (document.selection && document.selection.type !== 'Control') {
    return document.selection.createRange().text;
  }
  return '';
}
