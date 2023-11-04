import * as React from 'react';

require('dotenv').config();

const NotFoundPage = () => {

  // const name_public = process.env.NEXT_PUBLIC_SITE_BASE_URL;
  // console.log(name_public);
  
  return (
    <main>
      <section className='bg-white'>
        <div className='flex flex-col items-center justify-center min-h-screen text-center text-black layout'>
          <div className='text-red-500 drop-shadow-glow animate-flicker' />
          <h1 className='mt-8 text-4xl md:text-6xl'>Page Not Found</h1>
        </div>
      </section>
    </main>
  );
};

export default NotFoundPage;
