// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// import TitleHeader from "../components/TitleHeader";
// // import TechIconCardExperience from "../components/models/tech_logos/TechIconCardExperience";
// import TechIconCardExperience from "../components/models/TechIconCardExperience";
// import { techStackIcons } from "../constants";
// // import { techStackImgs } from "../constants";

// const TechStack = () => {
//   // Animate the tech cards in the skills section
//   useGSAP(() => {
//     // This animation is triggered when the user scrolls to the #skills wrapper
//     // The animation starts when the top of the wrapper is at the center of the screen
//     // The animation is staggered, meaning each card will animate in sequence
//     // The animation ease is set to "power2.inOut", which is a slow-in fast-out ease
//     gsap.fromTo(
//       ".tech-card",
//       {
//         // Initial values
//         y: 50, // Move the cards down by 50px
//         opacity: 0, // Set the opacity to 0
//       },
//       {
//         // Final values
//         y: 0, // Move the cards back to the top
//         opacity: 1, // Set the opacity to 1
//         duration: 1, // Duration of the animation
//         ease: "power2.inOut", // Ease of the animation
//         stagger: 0.2, // Stagger the animation by 0.2 seconds
//         scrollTrigger: {
//           trigger: "#skills", // Trigger the animation when the user scrolls to the #skills wrapper
//           start: "top center", // Start the animation when the top of the wrapper is at the center of the screen
//         },
//       }
//     );
//   });

//   return (
//     <div id="skills" className="flex-center section-padding">
//       <div className="w-full h-full md:px-10 px-5">
//         <TitleHeader
//           title="How I Can Contribute & My Key Skills"
//           sub="🤝 What I Bring to the Table"
//         />
//         <div className="tech-grid">
//           {/* Loop through the techStackIcons array and create a component for each item. 
//               The key is set to the name of the tech stack icon, and the classnames are set to 
//               card-border, tech-card, overflow-hidden, and group. The xl:rounded-full and rounded-lg 
//               classes are only applied on larger screens. */}
//           {techStackIcons.map((techStackIcon) => (
//             <div
//               key={techStackIcon.name}
//               className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
//             >
//               {/* The tech-card-animated-bg div is used to create a background animation when the 
//                   component is hovered. */}
//               <div className="tech-card-animated-bg" />
//               <div className="tech-card-content">
//                 {/* The tech-icon-wrapper div contains the TechIconCardExperience component, 
//                     which renders the 3D model of the tech stack icon. */}
//                 <div className="tech-icon-wrapper">
//                   <TechIconCardExperience model={techStackIcon} />
//                 </div>
//                 {/* The padding-x and w-full classes are used to add horizontal padding to the 
//                     text and make it take up the full width of the component. */}
//                 <div className="padding-x w-full">
//                   {/* The p tag contains the name of the tech stack icon. */}
//                   <p>{techStackIcon.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))}

//           {/* This is for the img part */}
//           {/* {techStackImgs.map((techStackIcon, index) => (
//             <div
//               key={index}
//               className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
//             >
//               <div className="tech-card-animated-bg" />
//               <div className="tech-card-content">
//                 <div className="tech-icon-wrapper">
//                   <img src={techStackIcon.imgPath} alt="" />
//                 </div>
//                 <div className="padding-x w-full">
//                   <p>{techStackIcon.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))} */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStack;



///optimise(fine)
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";
// import { Suspense } from "react";

// import TitleHeader from "../components/TitleHeader";
// import TechIconCardExperience from "../components/models/TechIconCardExperience";
// import { techStackIcons } from "../constants";

// const TechStack = () => {
//   // Animate the tech cards in the skills section
//   useGSAP(() => {
//     gsap.fromTo(
//       ".tech-card",
//       {
//         y: 50,
//         opacity: 0,
//       },
//       {
//         y: 0,
//         opacity: 1,
//         duration: 1,
//         ease: "power2.inOut",
//         stagger: 0.2,
//         scrollTrigger: {
//           trigger: "#skills",
//           start: "top center",
//           // Add performance optimization
//           once: true, // Run animation only once
//           fastScrollEnd: true,
//         },
//       }
//     );
//   });

//   return (
//     <div id="skills" className="flex-center section-padding">
//       <div className="w-full h-full md:px-10 px-5">
//         <TitleHeader
//           title="How I Can Contribute & My Key Skills"
//           sub="🤝 What I Bring to the Table"
//         />
//         <div className="tech-grid">
//           {techStackIcons.map((techStackIcon, index) => (
//             <div
//               key={techStackIcon.name}
//               className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
//             >
//               <div className="tech-card-animated-bg" />
//               <div className="tech-card-content">
//                 <div className="tech-icon-wrapper">
//                   <Suspense fallback={<div className="w-16 h-16 bg-gray-700 rounded animate-pulse" />}>
//                     <TechIconCardExperience 
//                       model={techStackIcon} 
//                       index={index}
//                       // Pass optimization flags
//                       lowPerformance={true}
//                       disableInteraction={true}
//                     />
//                   </Suspense>
//                 </div>
//                 <div className="padding-x w-full">
//                   <p>{techStackIcon.name}</p>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TechStack;


//skills more
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { Suspense, useState } from "react";

import TitleHeader from "../components/TitleHeader";
import TechIconCardExperience from "../components/models/TechIconCardExperience";
import { techStackIcons, skillCategories } from "../constants";

const TechStack = () => {
  const [activeCategory, setActiveCategory] = useState("frontend");

  // Animate the tech cards and skill sections
  useGSAP(() => {
    // Animate main 3D cards
    gsap.fromTo(
      ".tech-card",
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        ease: "power2.inOut",
        stagger: 0.2,
        scrollTrigger: {
          trigger: "#skills",
          start: "top center",
          once: true,
          fastScrollEnd: true,
        },
      }
    );

    // Animate category tabs
    gsap.fromTo(
      ".category-tab",
      {
        y: 30,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-categories",
          start: "top 80%",
          once: true,
        },
      }
    );

    // Animate skill items
    gsap.fromTo(
      ".skill-item",
      {
        x: -30,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power2.inOut",
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".skills-content",
          start: "top 80%",
          once: true,
        },
      }
    );
  });

  // const SkillProgressBar = ({ skill }) => (
  //   <div className="skill-item group">
  //     <div className="flex items-center justify-between mb-2">
  //       <div className="flex items-center gap-3">
  //         <div className="w-8 h-8 rounded-lg bg-gray-800 p-1.5 group-hover:scale-110 transition-transform">
  //           {skill.icon ? (
  //             <img 
  //               src={skill.icon} 
  //               alt={skill.name} 
  //               className="w-full h-full object-contain"
  //               onError={(e) => {
  //                 e.target.style.display = 'none';
  //                 e.target.nextSibling.style.display = 'flex';
  //               }}
  //             />
  //           ) : null}
  //           <div 
  //             className="w-full h-full rounded bg-gradient-to-r from-blue-500 to-purple-500 flex-center text-white text-xs font-bold hidden"
  //           >
  //             {skill.name.charAt(0)}
  //           </div>
  //         </div>
  //         <span className="text-gray-300 font-medium">{skill.name}</span>
  //       </div>
  //       <span className="text-gray-400 text-sm font-medium">{skill.level}%</span>
  //     </div>
  //     <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
  //       {/* <div 
  //         className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full transition-all duration-1000 ease-out group-hover:from-cyan-500 group-hover:to-blue-500"
  //         style={{ width: `${skill.level}%` }}
  //       /> */}
  //     </div>
  //   </div>
  // );

  return (
    <div id="skills" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="How I Can Contribute & My Key Skills"
          sub="🤝 What I Bring to the Table"
        />
        
        {/* Main 3D Tech Stack Icons */}
        <div className="tech-grid mb-16">
          {techStackIcons.map((techStackIcon, index) => (
            <div
              key={techStackIcon.name}
              className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg"
            >
              <div className="tech-card-animated-bg" />
              <div className="tech-card-content">
                <div className="tech-icon-wrapper">
                  <Suspense fallback={
                    <div className="w-16 h-16 bg-gray-700/20 rounded animate-pulse flex-center">
                      <div className="text-gray-400 text-sm font-bold">
                        {techStackIcon.name.charAt(0)}
                      </div>
                    </div>
                  }>
                    <TechIconCardExperience
                      model={techStackIcon}
                      index={index}
                      lowPerformance={true}
                      disableInteraction={true}
                    />
                  </Suspense>
                </div>
                <div className="padding-x w-full">
                  <p className="text-center">{techStackIcon.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Skills Section */}
        <div className="skills-categories">
          <div className="flex flex-col items-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Technical Expertise
            </h3>
            <p className="text-gray-400 text-center max-w-2xl">
              Comprehensive skill set across modern web development technologies
            </p>
          </div>

          {/* Category Navigation */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`category-tab px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? `bg-gradient-to-r ${category.color} text-white shadow-lg scale-105`
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
              >
                <span className="mr-2">{category.icon}</span>
                {category.title}
              </button>
            ))}
          </div>

          {/* Skills Content */}
          <div className="skills-content">
            {skillCategories.map((category) => (
              <div
                key={category.id}
                className={`transition-all duration-500 ${
                  activeCategory === category.id
                    ? 'opacity-100 max-h-screen'
                    : 'opacity-0 max-h-0 overflow-hidden'
                }`}
              >
                <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800">
                  <div className={`flex items-center gap-3 mb-8`}>
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${category.color} flex-center text-2xl`}>
                      {category.icon}
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {category.title}
                      </h4>
                      <p className="text-gray-400 text-sm">
                        {category.skills.length} skills
                      </p>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* {category.skills.map((skill, index) => (
                      <SkillProgressBar key={skill.name} skill={skill} />
                    ))} */}
                    {category.skills.map((skill) => (
    <div key={skill.name} className="skill-item flex items-center gap-3">
      {skill.icon ? (
        <img 
          src={skill.icon} 
          alt={skill.name} 
          className="w-8 h-8 object-contain"
          onError={(e) => {
            e.target.style.display = "none";
            e.target.nextSibling.style.display = "flex";
          }}
        />
      ) : (
        <div className="w-8 h-8 rounded bg-gradient-to-r from-blue-500 to-purple-500 flex-center text-white text-sm font-bold">
          {skill.name.charAt(0)}
        </div>
      )}
      <span className="text-gray-300 font-medium">{skill.name}</span>
    </div>
  ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;