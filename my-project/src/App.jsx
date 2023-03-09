import { useState } from 'react'
import './index.css';
import './App.css'

function App() {
  return (
    <div className="bg-gray-100">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Welcome to our store</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Get your products here
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            We have a wide range of products to choose from. Shop now and get amazing deals!
          </p>
        </div>

        <div className="mt-10">
          <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-01.jpg"
                  alt="product"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <a href="#" className="mt-4 block font-medium text-gray-900">
                Wireless earbuds
              </a>
              <p className="mt-1 text-sm text-gray-500">Starting at $89</p>
            </div>

            <div className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-02.jpg"
                  alt="product"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <a href="#" className="mt-4 block font-medium text-gray-900">
                Camera
              </a>
              <p className="mt-1 text-sm text-gray-500">Starting at $300</p>
            </div>

            <div className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-03.jpg"
                  alt="product"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <a href="#" className="mt-4 block font-medium text-gray-900">
                Travel bag
              </a>
              <p className="mt-1 text-sm text-gray-500">Starting at $95</p>
            </div>

            <div className="group relative">
              <div className="aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75">
                <img
                  src="https://tailwindui.com/img/ecommerce-images/home-page-02-product-04.jpg"
                  alt="product"
                  className="w-full h-full object-center object-cover"
                />
              </div>
              <a href="#" className="mt-4 block font-medium text-gray-900">
                Wireless headphones
              </a>
              <p className="mt-1 text-sm text-gray-500">Starting at $140</p>
            </div>
          </div>
        </div>
        <div className="mt-16 text-center">
      <h3 className="text-base font-medium text-gray-400 uppercase tracking-wider">Our sponsors</h3>
      <div className="mt-5 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-5">
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
            alt="Tuple"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
            alt="Mirage"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
            alt="StaticKit"
          />
        </div>
        <div className="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
          <img
            className="h-12"
            src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
            alt="Transistor"
          />
        </div>
        <div className="col-span-2 flex justify-center md:col-span-2 lg:col-span-1">
            <img
                className="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
            />
            </div>
        </div>
        </div>
    </div>
    </div>
);
}

export default App
