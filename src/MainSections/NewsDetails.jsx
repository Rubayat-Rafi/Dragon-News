import React from "react";
import { Link, useLoaderData } from "react-router-dom";
import Header from "../Components/Header";
import RightSide from "./RightSide";
import { FaArrowLeftLong } from "react-icons/fa6";

const NewsDetails = () => {
  const data = useLoaderData();
  console.log(data.data[0]);

  const { details, title, thumbnail_url, category_id, image_url } =
    data.data[0];
  return (
    <div>
      <header>
        <Header></Header>
      </header>

      <main className="mx-auto w-11/12 max-w-[1440px] grid grid-cols-12 items-start gap-8 my-12">
        {/* news details section start here */}
        <section className="col-span-9 ">
            <h1 className="text-lg font-semibold text-[#403f3f] leading-8 mb-6">Dragon News</h1>
          <div className="border border-[#E7E7E7] p-8 rounded-md">
            <img src={image_url} className="w-full" alt="image" />
            <div className="mt-6 text[#403F3F]">
              <h3 className="text-2xl font-bold leading-10">{title}</h3>
              <p className="text-base font-normal leading-6 mt-3">{details}</p>
              <Link
                to={`/category/${category_id}`}
                className="bg-[#D72050] font-medium text-lg leading-7 text-white mt-8 py-2 px-6 inline-flex items-center gap-2"
              >
                {" "}
                <span className="text-xl">
                  <FaArrowLeftLong />
                </span>{" "}
                <span>All news in this category</span>
              </Link>
            </div>
          </div>
        </section>

        {/* news details section ends here */}

        <aside className="col-span-3">
          <RightSide></RightSide>
        </aside>
      </main>
    </div>
  );
};

export default NewsDetails;
