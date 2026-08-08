import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCategory } from '../../features/categorySlice/categorySlice';

const CategoryList = () => {
    const dispatch = useDispatch();

    const {categories, isLoading, isError} = useSelector((state) => state.cate);

    useEffect(() => {
        dispatch(getCategory());
    },[dispatch])

  return (
    <div>
        {categories.map((item) => (
            <div key={item._id}>
                <p>{item.name}</p>
            </div>
        ))}
    </div>
  )
}

export default CategoryList