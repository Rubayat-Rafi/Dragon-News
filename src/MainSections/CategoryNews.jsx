import React from "react";
import { useLoaderData } from "react-router-dom";
import NewsCard from "../Components/NewsCard";
// import { RiH1 } from "react-icons/ri";

const CategoryNews = () => {
  const { data: news } = useLoaderData();

  //   console.log(news);

  return (
    <div>
      {news.length === 0 ? (
        <h1>No Data Found..</h1>
      ) : (
        news.map((singleNews) => (
          <NewsCard key={singleNews._id} singleNews={singleNews}></NewsCard>
        ))
      )}
    </div>
  );
};

export default CategoryNews;
