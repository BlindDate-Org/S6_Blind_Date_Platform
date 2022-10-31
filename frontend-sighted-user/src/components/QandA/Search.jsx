import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'

const Search = () => {

  const onSubmition = (e) => {
    e.preventDefault();
    //Get input value
    let searchContent = e.target.elements[0].value;
    //TODO: request content
    console.log(searchContent);
    //Reset search input
    e.target.reset();
  }
  return (
    <div className='w-full flex'>
      <form className='flex-1' onSubmit={(e) => onSubmition(e)}>
        <label className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300">Search</label>
        <div className="relative">
          <div className="flex absolute inset-y-0 left-0 items-center pl-1.5 pointer-events-none">
            <MagnifyingGlassIcon className='text-cyan-800 w-8' />
          </div>
          <input type="search" id="search-input" className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search your questions" />
          <button type="submit" className="search-btn">Search</button>
        </div>
      </form>
      <button className='w-fit btn m-2 flex items-center'><PlusCircleIcon className='w-5' />New Question</button>
    </div>
  )

}

export default Search