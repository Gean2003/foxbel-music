import React from 'react'

const Search = () => {
  return (
    <div className='w-full py-5  mx-auto flex items-center justify-between px-7'>
        <div>
            <input type="text" placeholder='discovery...'
                className='py-2 px-2 lg:w-[500px] rounded-full outline-gray-700 border-2 border-gray-300'/>
        </div>
          <section className='flex gap-3'>
              <p className='text-red-600'>
                  <i className='bx bxs-user'></i>
              </p>
              <p>Gean F.</p>
          </section>
    </div>
  )
}

export default Search