import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import ProductItem from './ProductItem';
import { FaStar, FaFire, FaShippingFast, FaRegHeart } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const BestSeller = () => {
    const { products } = useContext(ShopContext);
    const [bestSeller, setBestSeller] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (products && products.length > 0) {
            const bestProduct = products.filter((item) => (item.bestseller));
            setBestSeller(bestProduct.slice(0, 5));
            setLoading(false);
        }
    }, [products]);

    if (loading) {
        return (
            <div className="my-10 text-center py-20">
                <p>Loading best sellers...</p>
            </div>
        );
    }



    return (
        <div className='my-10'>
            <div className='text-center text-3xl py-8'>
                <div className='flex items-center justify-center gap-2 mb-2'>
                    <Title text1={'BEST'} text2={'SELLERS'} />
                </div>
                <p className='w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600 mb-4'>
                    Our most beloved pieces, chosen for their exceptional quality and timeless design. From organic cotton t-shirts to tailored wool blazers, these customer favorites showcase our commitment to excellence.
                </p>
                <div className='flex flex-wrap justify-center gap-4 text-sm mb-6'>
                    <span className='bg-red-100 text-red-700 px-3 py-1 rounded-full flex items-center'>
                        <FaStar className='mr-1' /> Customer Favorites
                    </span>
                    <span className='bg-green-100 text-green-700 px-3 py-1 rounded-full flex items-center'>
                        <FaShippingFast className='mr-1' /> Free Shipping
                    </span>
                    <span className='bg-blue-100 text-blue-700 px-3 py-1 rounded-full'>Limited Stock</span>
                </div>
            </div>

            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6'>
                {bestSeller.map((item, index) => (
                    <div key={index} className='relative group'>
                        {/* Top Rated Badge */}
                        <div className='absolute top-2 right-2 bg-red-500 text-white text-xs px-2 py-1 rounded-full z-10'>
                            Top Rated
                        </div>
                        
                        {/* Product Item with fallback handling */}
                        <div className='overflow-hidden'>
                            {item && item._id && item.name && item.image && item.price ? (
                                <>
                                    <ProductItem 
                                        id={item._id} 
                                        name={item.name} 
                                        image={item.image} 
                                        price={item.price} 
                                    />
                                    
                                    {/* Hover overlay with ratings */}
                                    <div className='absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-2 px-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300'>
                                        <div className='flex items-center justify-between'>
                                            <div className='flex'>
                                                {[...Array(5)].map((_, i) => (
                                                    <FaStar key={i} className='text-yellow-400 text-xs' />
                                                ))}
                                            </div>
                                            <span className='text-xs'>{Math.floor(Math.random() * 100) + 50} sold</span>
                                        </div>
                                    </div>
                                    
                                    {/* Wishlist icon */}
                                    <div className='absolute top-2 left-2 bg-white rounded-full p-1.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300'>
                                        <FaRegHeart className='text-gray-700 hover:text-red-500 transition-colors' />
                                    </div>
                                </>
                            ) : (
                                <div className="bg-gray-100 h-60 flex items-center justify-center">
                                    <p className="text-gray-500 text-xs">Product unavailable</p>
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
            
            <div className='text-center mt-8'>
                <Link to="/collection" className='bg-black text-white px-6 py-3 inline-block hover:bg-gray-800 transition-colors'>
                    View All Best Sellers
                </Link>
            </div>
        </div>
    )
}

export default BestSeller