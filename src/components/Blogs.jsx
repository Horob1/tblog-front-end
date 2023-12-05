import React from 'react'

const Blogs = () => {
  const blogs = [{
    "id":1,
    'titile': 'Blog 1',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas inventore, ducimus odio, alias tenetur totam quia magnam molestiae sunt numquam facere eos porro qui deleniti tempora illo hic labore.",
    'coverImg': "https://cdn.dribbble.com/users/111430/screenshots/12956412/media/25c5233ded91916b5d598be7931b9ab4.png?resize=1000x750&vertical=center"
  },
  {
    "id":2,
    'titile': 'Blog 1',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas inventore, ducimus odio, alias tenetur totam quia magnam molestiae sunt numquam facere eos porro qui deleniti tempora illo hic labore.",
    'coverImg': "https://cdn.dribbble.com/users/111430/screenshots/12956412/media/25c5233ded91916b5d598be7931b9ab4.png?resize=1000x750&vertical=center"
  },
  {
    "id":3,
    'titile': 'Blog 1',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas inventore, ducimus odio, alias tenetur totam quia magnam molestiae sunt numquam facere eos porro qui deleniti tempora illo hic labore.",
    'coverImg': "https://cdn.dribbble.com/users/111430/screenshots/12956412/media/25c5233ded91916b5d598be7931b9ab4.png?resize=1000x750&vertical=center"
  },{
    "id":4,
    'titile': 'Blog 1',
    'desc': "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quas inventore, ducimus odio, alias tenetur totam quia magnam molestiae sunt numquam facere eos porro qui deleniti tempora illo hic labore.",
    'coverImg': "https://cdn.dribbble.com/users/111430/screenshots/12956412/media/25c5233ded91916b5d598be7931b9ab4.png?resize=1000x750&vertical=center"
  }
]
  return (
    <div className='w-full bg-[#f9f9f9] py-[50px]'>
        <div className='max-w-[1240px] mx-auto'>
          <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 ss:grid-cols-1 gap-8 px-4 text-black'>
            {blogs.map(item => 
              <div className='bg-white rounded-xl overflow-hidden drop-shadow-md '>
                <img src={item.coverImg} alt="" className='h-56 w-full object-cover'/>
                <div className='p-8'>
                  <h3 className='font-bold text-2x1 my-1'>{item.titile}</h3>
                  <p className='text-gray-600 text-x1 '>{item.desc}</p>
              </div>
            </div>)}
          </div>
        </div>
    </div>
  )
}

export default Blogs