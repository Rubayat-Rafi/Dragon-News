import React from "react";
import { FiShare2 } from 'react-icons/fi';
import { AiOutlineStar, AiOutlineEye } from 'react-icons/ai';
import { Link } from "react-router-dom";

const NewsCard = ({ singleNews }) => {
//   console.log(singleNews);

  const {
    _id,
    title,
    author,
    rating,
    total_view,
    details,
    thumbnail_url,
    others_info,
    published_date
} = singleNews;

  return (

    <div className=" p-4 bg-white rounded-lg shadow-md border border-gray-200 mb-6">
    {/* Author Section */}
    <div className="flex items-center mb-4">
        <img
            src={author.img}
            alt="Author"
            className="w-10 h-10 rounded-full mr-3"
        />
        <div>
            <h2 className="font-semibold">{author.name}</h2>
            <p className="text-sm text-gray-500">{published_date}</p>
        </div>
        <div className="ml-auto text-gray-400">
            <FiShare2 size={20} />
        </div>
    </div>

    {/* Title */}
    <h3 className="text-lg font-bold mb-2">{title}</h3>

    {/* Thumbnail Image */}
    <img
        src={thumbnail_url}
        alt="News Thumbnail"
        className="w-full h-[400px] object-top object-cover rounded-md mb-3"
    />

    {/* Details */}
    <p className="text-sm text-gray-700 mb-3">
        {details.substring(0, 100)}... <Link to={`/news/${_id}`} className="text-blue-500">Read More</Link>
    </p>

    {/* Rating and Views */}
    <div className="flex items-center justify-between text-gray-500">
        <div className="flex items-center">
            <AiOutlineStar className="text-yellow-400 mr-1" />
            <span>{rating.number}</span>
        </div>
        <div className="flex items-center">
            <AiOutlineEye className="mr-1" />
            <span>{total_view} views</span>
        </div>
    </div>
</div>

  );
};

export default NewsCard;
