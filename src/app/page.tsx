"use client";

import Header from "./components/Header";

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-y-scroll">
      <Header />
      <div className="w-full bg-primary-100" style={{ height: "2000px" }}></div>
    </div>

    // <div className="relative w-full h-screen snap-y snap-mandatory overflow-scroll">
    //   <Header />
    //   <div
    //     className="snap-y snap-mandatory overflow-scroll"
    //     style={{ height: "calc(100vh - 6rem)" }}
    //   >
    //     <section className="h-screen snap-start bg-blue-500 flex items-center justify-center">
    //       <h1 className="text-white text-4xl">First Screen</h1>
    //     </section>
    //     <section className="h-screen snap-start bg-green-500 flex items-center justify-center">
    //       <h1 className="text-white text-4xl">Second Screen</h1>
    //     </section>
    //     <section className="h-screen snap-start bg-red-500 flex items-center justify-center">
    //       <h1 className="text-white text-4xl">Third Screen</h1>
    //     </section>
    //     <section className="h-screen snap-start bg-yellow-500 flex items-center justify-center">
    //       <h1 className="text-white text-4xl">Fourth Screen</h1>
    //     </section>
    //   </div>
    // </div>
  );
};

export default Home;
