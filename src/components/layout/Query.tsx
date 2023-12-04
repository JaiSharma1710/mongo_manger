'use client';
const Query = ({ setQuery }: { setQuery: (query: string) => void }) => {
  return (
    <div className="h-2/3 border">
      <textarea
        className="w-full h-full p-3"
        onChange={(e) => setQuery(e.target.value)}
        cols={30}
        rows={10}
      ></textarea>
    </div>
  );
};

export default Query;
