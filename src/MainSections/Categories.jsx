import React, { useEffect, useState } from 'react';

const Categories = () => {

    const [categories, setCategories] =useState([]);


    useEffect(()=>{
        fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(res => res.json())
        .then(data => setCategories(data.data.news_category))
    },[])


    // {
    //     "category_id": "01",
    //     "category_name": "Breaking News"
    //   },

    return (
        <div>
            <h1 className='text-lg font-semibold text-[#403F3F] leading-8'>All Caterogy ({categories.length})</h1>

            <div className='flex items-start flex-col'>
                {
                    categories.map(category => <button className='transition-colors text-left text-lg font-medium text-[#9F9F9F] leading-8 pl-12 w-full py-4 rounded-md hover:text-[#403F3F] hover:bg-[#E7E7E7]'>{category.category_name}</button>)
                }
            </div>

        </div>
    );
};

export default Categories;