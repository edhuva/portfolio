import React from 'react';
import ProjectSlider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectCarousal = ({ project_images }) => {
  const settings = {
    arrows: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  console.log("Images:", project_images);

  return (
    <div className="w-full  mx-auto">
      <ProjectSlider {...settings}>
        {project_images && project_images.length > 0 ? (
          project_images.map((image, idx) => (
            <div key={idx} className="w-full h-64 px-2">
              <img
                src={image}
                alt="carousel"
                className="w-full h-full object-cover rounded-md"
              />
            </div>
          ))
        ) : (
          <p>No images found</p>
        )}
      </ProjectSlider>
    </div>
  );
};

export default ProjectCarousal;




// import React from 'react';
// import ProjectSlider from 'react-slick';
// import { NextArrow, PrevArrow } from './ArrowsComponent';

// // CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ProjectCarousal = ({ project_images }) => {
//   const settings = {
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
//   };

//   const settingsLg = {
//     ...settings,
//     centerMode: true,
//     centerPadding: "10%",
//   };

//   return (
//     <div className="w-full md:w-1/2 lg:w-1/2 mx-auto">
//       <ProjectSlider {...settingsLg}>
//         {project_images.map((image) => (
//           <div key={image} className="w-full aspect-[16/9] px-2">
//             <img
//               src={image}
//               alt="carousel"
//               className="w-full h-full object-cover rounded-md"
//             />
//           </div>
//         ))}
//       </ProjectSlider>
//     </div>
//   );
// };

// export default ProjectCarousal;




// import React from 'react';
// import ProjectSlider from 'react-slick';
// import { NextArrow, PrevArrow } from './ArrowsComponent';

// // CSS
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

// const ProjectCarousal = ({ project_images }) => {

//   const settings = {
//     arrows: true,
//     infinite: true,
//     speed: 500,
//     autoplay: true,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     nextArrow: <NextArrow />,
//     prevArrow: <PrevArrow />
//   };

//   const settingsLg = {
//     ...settings,
//     centerMode: true,
//     centerPadding: "10%", // Adjust padding for large screens
//   };

//   return (
//     <>
//       {/* Small devices */}
//       <div className="md:hidden w-full">
//         <ProjectSlider {...settings}>
//           {project_images.map(image => (
//             <div key={image} className="w-full aspect-[16/9]">
//               <img
//                 src={image}
//                 alt="carousel"
//                 className="w-full h-full object-cover rounded-md"
//               />
//             </div>
//           ))}
//         </ProjectSlider>
//       </div>

//       {/* Medium devices */}
//       <div className="hidden md:block lg:hidden w-full max-w-3xl mx-auto">
//         <ProjectSlider {...settings}>
//           {project_images.map(image => (
//             <div key={image} className="w-full aspect-[16/9]">
//               <img
//                 src={image}
//                 alt="carousel"
//                 className="w-full h-full object-cover rounded-md"
//               />
//             </div>
//           ))}
//         </ProjectSlider>
//       </div>

//       {/* Large devices */}
//       <div className="hidden lg:block w-full max-w-5xl mx-auto">
//         <ProjectSlider {...settingsLg}>
//           {project_images.map(image => (
//             <div key={image} className="w-full aspect-[16/9] px-2">
//               <img
//                 src={image}
//                 alt="carousel"
//                 className="w-full h-full object-cover rounded-md"
//               />
//             </div>
//           ))}
//         </ProjectSlider>
//       </div>
//     </>
//   );
// };

// export default ProjectCarousal;




// import React from 'react'
// import ProjectSlider from 'react-slick'
// import { NextArrow, PrevArrow } from './ArrowsComponent';

// //import CSS files
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";



// const ProjectCarousal = ({project_images}) => {

//     const settingsLg = {
//         arrows: true,
//         autoplay: true,
//         centerMode: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         // centerPadding: "300px",
//         infinite: true,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />
//       };
    
//       const settings = {
//         arrows: true,
//         // dots: true,
//         infinite: true,
//         speed: 500,
//         autoplay:true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         nextArrow: <NextArrow />,
//         prevArrow: <PrevArrow />
//       };

//   return (
//     <>
//     <div className=' md:hidden w-full '>
//         <ProjectSlider {...settings}>
//             {
//                 project_images.map(image => (
//                     <div className='w-20 h-72  py-3' key={image}>
//                         <img src={image} alt='hero images' className='w-full h-full rounded-md' />
//                     </div>
//                 ))
//             }
//         </ProjectSlider> 
//     </div>

//     <div className=' hidden md:block lg:hidden w-96 '>
//         <ProjectSlider {...settings}>
//             {
//                 project_images.map(image => (
//                     <div className='w-20 h-72 py-3' key={image}>
//                         <img src={image} alt='hero images' className='w-full h-full rounded-md' />
//                     </div>
//                 ))
//             }
//         </ProjectSlider> 
//     </div>

//     <div className='flex-1 w-96 h-96 hidden lg:block'>
//         <ProjectSlider {...settingsLg}>
//             {
//                 project_images.map(image => (
//                     <div className='flex-1 w-96 h-96 px-1 rounded-md'  key={image}>
//                         <img src={image} alt='hero images' className='w-full h-full rounded-md' />
                        
//                     </div>
//                 ))
//             }
//         </ProjectSlider> 
//     </div>
//     </>
//   )
// }

// export default ProjectCarousal
