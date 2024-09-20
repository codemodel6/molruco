const Header: React.FC = () => {
  return (
    <header className="fixed w-screen h-24 bg-sub100 z-50 border-b-2 border-primary100 flex justify-between items-center px-8">
      <div className="flex justify-between items-center w-2/5 h-full">
        <button className="flex flex-col justify-center items-center bg-black text-white h-1/2 w-2/5 text-lg">
          molruco
        </button>
        <div className="flex flex-col justify-center items-center h-full w-3/5 text-xs">
          몰루코 헤더
        </div>
      </div>
      <div className="flex justify-around items-center w-2/5 h-full">
        <button className="text-base cursor-pointer">Intro</button>
        <button className="text-base cursor-pointer">Career</button>
        <button className="text-base cursor-pointer">Project</button>
        <button className="text-base cursor-pointer">Education</button>
      </div>
    </header>
  );
};

export default Header;
