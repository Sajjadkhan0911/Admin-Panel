import React from 'react'


const products = [
    {
        id: 1,
        name: "Wireless Headphones",
        category: "Electronics",
        price: "$59.99",
        stock: 25,
        status: "Active",
    },
    {
        id: 2,
        name: "Smart Watch",
        category: "Electronics",
        price: "$89.99",
        stock: 12,
        status: "Active",
    },
    {
        id: 3,
        name: "Running Shoes",
        category: "Fashion",
        price: "$74.99",
        stock: 0,
        status: "Out of Stock",
    },
    {
        id: 4,
        name: "Laptop Backpack",
        category: "Accessories",
        price: "$39.99",
        stock: 18,
        status: "Active",
    },
    {
        id: 5,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: "$45.99",
        stock: 7,
        status: "Active",
    },
];

export default function ProductsPage() {
    return (
        <div className='py-12 px-8 w-full h-full bg-gray-200'>
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
                <div>
                    <h1 className="text-3xl font-bold text-gray-800">
                        Products
                    </h1>

                    <p className="text-gray-500 mt-1">
                        Manage your products
                    </p>
                </div>

                <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-lg font-medium transition">
                    + Add Product
                </button>
            </div>
            <div>
                <table className='w-full'>
                    <thead className='bg-blue-700 text-[18px] font-semibold text-white '>
                        <tr>
                        <th className='text-left px-6 py-4  '>
                            Product
                        </th>
                         <th className='text-left px-6 py-4 '>
                            Category
                        </th>
                        <th className='text-left px-6 py-4 '>
                            Price
                        </th> 
                        <th className='text-left px-6 py-4 '>
                            Stock
                        </th> 
                        <th className='text-left px-6 py-4 '>
                            Status
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                        {products.map((product) => (
                            <tr className='hover:bg-blue-200 transition' key={product.id}>
                                <td className='text-left px-6 py-4 text-sm font-semibold text-gray-600'>
                                    {product.name}
                                </td>
                                <td className='text-left px-6 py-4 text-sm font-semibold text-gray-600'>
                                    {product.category}
                                </td>
                                <td className='text-left px-6 py-4 text-sm font-semibold text-gray-600'>
                                    {product.price}
                                </td>
                                <td className='text-left px-6 py-4 text-sm font-semibold text-gray-600'>
                                    {product.stock}
                                </td>
                                <td className='text-left px-6 py-4 text-sm font-semibold text-gray-600'>
                                    {product.status}
                                </td>
                            </tr>
                            
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

