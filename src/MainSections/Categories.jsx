import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

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
            <h1 className='text-lg font-semibold text-[#403F3F] leading-8 mb-6'>All Caterogy</h1>

            <div className='flex items-start flex-col'>
                {
                    categories.map(category => <NavLink to={`/category/${category.category_id}`} className='transition-colors text-left text-lg font-medium text-[#9F9F9F] leading-8 pl-12 w-full py-4 rounded-md'>{category.category_name}</NavLink>)
                }
            </div>

        </div>
    );
};

export default Categories;