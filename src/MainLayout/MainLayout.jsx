import React from "react";
import Header from "../Components/Header";
import Latest from "../Components/Latest";
import Navbar from "../Components/Navbar";
import Categories from "../MainSections/Categories";

const MainLayout = () => {
  return (
    <div>
      {/* header section start here  */}
      <header>
        <Header></Header>
      </header>

      {/* Latest news section start here  */}
      <section className="mx-auto w-11/12 max-w-[1440px]">
        <Latest></Latest>
      </section>

      {/* Navbar section start here  */}
      <nav className="mx-auto w-11/12 max-w-[1440px]">
        <Navbar></Navbar>
      </nav>

      {/* main section start here  */}
      <main className="mx-auto w-11/12 max-w-[1440px] grid md:grid-cols-12 gap-6 mt-14">
        <aside className="col-span-3">
            <Categories></Categories>
        </aside>

        <section className="col-span-6">
            <h1>Dragon News Home</h1>
        </section>

        <aside className="col-span-3">
            <h1>Login With</h1>
        </aside>
      </main>
    </div>
  );
};

export default MainLayout;
