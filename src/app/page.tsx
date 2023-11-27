import { TopMenu } from '@/components';

const Home = () => {
  return (
    <div className="m-4">
      <TopMenu />
      <div className="flex h-[78vh] gap-1">
        <div className="w-1/4 border">collections</div>
        <div className="w-3/4">
          <div className="h-2/3 border">query</div>
          <div className="h-1/3 border">output</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
