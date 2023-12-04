import toast from 'react-hot-toast';
import { getDataFromLocalStorage, postData } from '.';

export const runQuery = async (setQueryResponse, setIsLoading, query) => {
  try {
    const { selected_db } = getDataFromLocalStorage();
    if (!query) {
      toast.error('no query');
      return;
    }
    setIsLoading(true);
    const { data, status } = await postData(
      `${process.env.NEXT_PUBLIC_API_ENDPOINT}/runQuery`,
      {
        query: query,
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
    setIsLoading(false);
    toast.error(error?.response?.data?.message || error.message);
  }
};
