import React from 'react'
const images_gallery=[
    "/promo/view1.jpg", 
    "/promo/view2.jpg", 
    "/promo/view3.jpg", 
    "/promo/view4.jpg", 
    "/promo/view5.jpg",
    "/promo/view6.jpg",
    "/promo/view7.jpg",
]






const image_gallery = () => {
  return (
  
  <div>


    <div className="text-center mb-10 sm:mb-12">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#ffffff] mb-4">
      Projects Gallrery 
      <span className="block w-12 sm:w-16 h-1 sm:h-2 bg-[#ff0000] mx-auto mt-3 sm:mt-4 rounded-full"></span>
    </h2>

  </div>
    
    <div className='columns-1 sm:columns-2 lg:columns-4 py-10 md:py-20  gap-4'>
         
        {images_gallery.map((src,index)=>(
            <div key ={index} className='mb-4 break-inside avoid'>
                <img src={src} className='w-full object-cver rounded-lg'/>
            </div>
        ))}
    </div>

    </div>
  )
}

export default image_gallery