import Image from "next/image";

export const aboutItems = {
    header: '<about me />',
    desc2: 'Outside of all this creating, I love playing basketball (or any sport really), going to the gym, and playing video games.',
    img:'/assets/me.jpg',
    alt:'pic of me :)',
    width: 280,
    height: 180
};

// might make content modular if i get the time
// interface TimelineImage {
//   src: string;
//   alt: string;
// }

// interface TimelineContentProps {
//   summary: string[]; // list of strings
//   content: string;   // description
//   img1: TimelineImage; // first image
//   img2: TimelineImage; // second image
// }

// const TimelineContent = ({summary, content, img1, img2}:TimelineContentProps) => {
//   return (
//     <div className="font-geistSans">
//         <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base pb-8 mb-8">
//           <h3>Summary:</h3>
//           <ul className="list-none text-gray-100 font-geistSans ml-5">
//             {summary.map((item, index) => {
//               return (
//                 <li>
//                   {item}
//                 </li>
//               )
//             })}
//           </ul>
//           <br />
//           {content}
//         </div>

//         {/* Flex container for images */}
//         <div className="flex gap-4 items-center justify-center w-full pt-5">
//           <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
//             <Image
//               src={img1.src}
//               alt={img1.alt}
//               width={300} // Explicit width
//               height={300} // Explicit height
//               className="img"
//             />
//           </div>

//           <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
//             <Image
//               src={img2.src}
//               alt={img2.alt}
//               width={300} // Explicit width
//               height={300} // Explicit height
//               className="img"
//             />
//           </div>
//         </div>
//       </div>
//   );
// };

export const data = [
  {
    title: "Full-Stack Developer Intern",
    date: "May 2025 - Aug. 2025",
    location: "Remote, Canada",
    content: (
      <div className="font-geistSans">
        <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base pb-8 mb-8">
          <h3>Summary:</h3>
          <ul className="list-none text-gray-100 font-geistSans ml-5">
            <li>- Refactored and optimized a legacy codebase, improving maintainability and lowering load times by 15%</li>
            <li>- Built a conversational chatbot for FredAI that reduced API usage costs by 40%</li>
            <li>- Added multilingual support to increase user adoption and broaden market reach</li>
          </ul>
          <br />
          At myAIPathway I worked across front-end and back-end tasks to modernize an existing product and reduce operational costs. I focused on refactoring for maintainability and performance, implemented a cost-efficient conversational agent for FredAI, and integrated multilingual features to expand accessibility. Collaborating with senior engineers, I followed Agile practices and contributed to architecture and deployment decisions.
        </div>

        <div className="flex gap-4 items-center justify-center w-full pt-5">
          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/myaipathway.png"
              alt="myAIPathway logo"
              width={400}
              height={400}
              className="img"
            />
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Frontend Developer Intern",
    date: "Feb. 2025 - Apr. 2025",
    location: "Remote, Canada",
    content: (
      <div className="font-geistSans">
        <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base pb-8 mb-8">
          <h3>Summary:</h3>
          <ul className="list-none text-gray-100 font-geistSans ml-5">
            <li>- Improved Arkhet AI’s web platform with animations, UI polish, and responsive behavior</li>
            <li>- Designed and optimized a modular component architecture during weekly sprints</li>
            <li>- Iterated features continuously based on beta tester feedback</li>
          </ul>
          <br />
          As a Frontend Developer Intern at Arkhet AI, I focused on enhancing the user experience by adding smooth animations, refining responsive layouts, and polishing visual design. I helped restructure components to be modular and reusable, collaborating with the product team in weekly sprints. Feedback from early testers informed iterative improvements that increased usability and consistency across the app.
        </div>

        <div className="flex gap-4 items-center justify-center w-full pt-5">
          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/arkhet_logo.jpeg"
              alt="Arkhet AI logo"
              width={400}
              height={300}
              className="img"
            />
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Software Development Trainer",
    date: "Aug. 2022 - Jun. 2023",
    location: "Whitby, ON, Canada",
    content: (
      <div className="font-geistSans">
        <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base pb-8 mb-8">
          <h3>Summary:</h3>
          <ul className="list-none text-gray-100 font-geistSans ml-5">
            <li>
              - Troubleshooting experience: aiding in bug fixes, formatting issues, etc.
            </li>
            <li>- Lead a team to facilitate club meetings and events</li>
            <li>
              - Created HTML/CSS/JS foundational lessons to teach responsive website fundamentals
            </li>
          </ul>
          <br />
          At Sinclair Coding I developed and delivered foundational lessons in HTML, CSS, and JavaScript focused on responsive web design. I regularly assisted learners with debugging and semantic/layout issues, improving their coding confidence and project outcomes. This role strengthened my ability to communicate technical concepts and lead hands-on workshops.
        </div>

        <div className="flex gap-4 items-center justify-center w-full pt-5">
          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/cc-logo.png"
              alt="Sinclair Coding logo"
              width={300}
              height={300}
              className="img"
            />
          </div>

          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/lesson-ex.png"
              alt="lesson example"
              width={300}
              height={300}
              className="img"
            />
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Youth in Policing Intern",
    date: "Jul. 2022 - Aug. 2022",
    location: "Oshawa, ON, Canada",
    content: (
      <div className="font-geistSans">
        <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base  mb-8">
          <h3>Summary:</h3>
          <ul className="list-none text-gray-100 font-geistSans ml-5">
            <li>- Facilitated a youth forum with 550+ attendees (10% attendance increase vs previous year)</li>
            <li>- Planned and coordinated youth-focused events and public speaking opportunities</li>
            <li>- Strengthened teamwork, communication, and leadership skills</li>
          </ul>
          <br />
          The Youth in Policing program with Durham Regional Police expanded my leadership and public-facing skills. I helped organize and facilitate a large youth forum, supported event coordination, and presented at public events—experiences that improved my communication and team collaboration.
        </div>

        <div className="flex gap-4 items-center justify-center w-full pt-5">
          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/durham-sign.png"
              alt="Durham Regional Police sign"
              width={300}
              height={300}
              className="img"
            />
          </div>

          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/yip-poster.png"
              alt="Youth in Policing poster"
              width={300}
              height={300}
              className="img"
            />
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Software Engineering Intern",
    date: "Feb. 2022 - Jun. 2022",
    location: "Ottawa, ON, Canada",
    content: (
      <div className="font-geistSans">
        <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base  mb-8">
          <h3>Summary:</h3>
          <ul className="list-none text-gray-100 font-geistSans ml-5">
            <li>- Improved event system UI using Vue.js, increasing user engagement by ~15%</li>
            <li>- Secured login/registration flows using parameterized queries (PDO) in PHP</li>
            <li>- Implemented backend improvements under senior developer guidance</li>
          </ul>
          <br />
          At Digitera Interactive I worked on an event management system, improving the frontend experience with Vue.js and hardening backend authentication using PDO parameterized queries. I collaborated with senior developers to integrate features without disrupting existing functionality and learned industry workflows using GitHub.
        </div>

        <div className="flex gap-4 items-center justify-center w-full pt-5">
          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/digitera-landing.png"
              alt="Digitera landing"
              width={300}
              height={300}
              className="img"
            />
          </div>

          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/digitera-techs-stacked.png"
              alt="Digitera tech stack"
              width={300}
              height={300}
              className="img"
            />
          </div>
        </div>
      </div>
    ),
  },
];


interface ModalContentProps {
  desc: React.ReactNode | string;
}

const ModalContent = ({ desc }:ModalContentProps) => {
    return (
      <>
        <div
          className="bg-[#F5F5F7] dark:bg-navy-50"
        >
          <p className="dark:text-gray-100 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {desc}
          </p>
        </div>
      </>
    );
  };


export const projects = [
  {
    category: 'ReactJS, Flask, OpenCV, TensorFlow, MediaPipe',
    title: 'AI-powered Paper Piano',
    src: "/assets/ink-keys.png",
    git: "https://github.com/obljubej/ink-keys",
    content: <ModalContent 
      desc={
        <>
          Check out the demo video below to see it in action!<br /><br />
          <div className="flex justify-center">
            <iframe 
              width="560" 
              height="315" 
              src="https://www.youtube.com/embed/FEbX3Bo4c6Q?si=FV5CVZLqcIeXJLwE" 
              title="YouTube video player" 
              frameBorder="0" 
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
              referrerPolicy="strict-origin-when-cross-origin" 
              allowFullScreen
              className="my-40 py-32"
            ></iframe>
          </div>
          <br /><br />
          Ink-Keys turns drawings into instruments using a webcam and hand tracking, offering a portable, affordable way to make music. Accessible for kids, beginners, and creatives alike! 
          <br /><br />
          The idea for Ink-Keys came from the desire to make music accessible, affordable, and portable for everyone. The hefty price tag on pianos often makes music education inaccessible, discouraging beginners. Ink-Keys combines a child&apos;s love of drawing with the joy of playing music, fostering creativity and learning through fun. 
          <br /><br />
          We wanted to eliminate the barriers by allowing users to draw their own piano and bring it to life anywhere, anytime. The project uses a webcam, phone or any camera available to detect a printed or drawn piano on paper, allowing users to learn, create, and play around with a piano system, with realtime feedback. 
          <br /><br />
          We built it using ReactJS and TailwindCSS for the frontend, Flask for the backend with SocketIO for real-time updates, OpenCV for webcam access and key detection, and TensorFlow and MediaPipe for hand tracking. 
          <br /><br />
        </>
      }
    />
  },
  {
    category: 'Python, Open3D, C',
    title: 'Automated Mapping System',
    src: "/assets/room-mapping-visual.png",
    git: "https://github.com/huzai4a/Room-Mapping-System",
    content: <ModalContent 
      desc={
        <>
            <strong>Room Mapping System</strong> is a personal project I built to explore how embedded systems can be used for real-time spatial awareness and mapping. At its core, it uses the <strong>VL53L1X time-of-flight sensor</strong> to measure distances and generate a 2D layout of a room or space. The system is powered by the <strong>MSP432E401Y microcontroller</strong>, which I programmed in C to handle sensor input, data processing, and output control.
            <br /><br />
            The motivation behind this project was to gain hands-on experience with hardware-level I2C communication, microcontroller programming, and integrating sensor data into a usable mapping interface. The idea was to simulate the core function of a LIDAR system, but on a smaller scale and with more accessible hardware.
            <br /><br />
            I structured the firmware into clean, modular components:  
            <ul>
              <li>A <strong>sensor module</strong> to handle VL53L1X communication</li>
              <li>A <strong>UART module</strong> for serial data transmission</li>
              <li><strong>System tick timers</strong> for precise timing</li>
              <li><strong>LED feedback control</strong> for basic UI</li>
            </ul>
            The data from the ToF sensor is sent over UART, allowing me to visualize room boundaries or obstacles in a basic plotting environment. The system is flexible and can be extended further into robotics or autonomous navigation applications.
            <br /><br />
            Overall, this project helped me deepen my understanding of embedded systems, low-level communication protocols, and the challenges of real-world sensor integration.
        </>
      }
    />
  },
  {
    category: 'Node.JS, React.JS',
    title: 'Instagram Unfollow Tracker',
    src: "/assets/instagram-unfollow-tracker.png",
    git: "https://github.com/huzai4a/instaUnfollows",
    content: <ModalContent 
    desc="The project allows users to upload their Instagram data in order to identify individuals they follow who are not following them back. I felt like this was an inconvenience on instagram&apos;s part that could be satisfied through a simple site. By getting users to upload JSON data, the site efficiently analyzes this information without storing any personal data or compromising user privacy. The identification of unfollowers is done securely, ensuring that no sensitive information is retained during the process. To enhance user experience, I designed a fully responsive interface using HTML and CSS, which adjusts seamlessly across different devices and screen sizes, ensuring smooth navigation and easy interaction. This tool provides a simple yet effective solution for Instagram users looking to manage their follower lists more effectively."
    />
  },
  {
    category: 'Python',
    title: 'Autonomous Item Sorting & Disposal',
    src: "/assets/sorting-bot.png",
    content: <ModalContent 
    desc="I developed a track-following movement system for a simulated Quanser robot, ensuring smooth and precise control of the robot’s motions in various tasks. The movement system was integral to the robot’s ability to navigate its environment effectively, especially in conjunction with the bin detection system I helped implement. Utilizing both color and ultrasonic sensors, this detection system enabled the robot to identify and interact with specific bins, a critical feature for sorting and organizing items within the simulated environment. Additionally, I worked closely with the design team to develop a fully functioning robot dispenser system, which allowed the robot to efficiently deposit sorted items into designated bins. This collaborative effort ensured that the dispenser mechanism was aligned with the overall design goals, making the robot both practical and efficient in its operations. Through this project, we combined sensor integration, mechanical design, and teamwork to create a versatile, high-performing robotic system capable of complex tasks."
    />
  },
  {
    category: 'Unity, C#',
    title: 'Alien Escape',
    src: "/assets/alien-escape-sample.png",
    git: "https://github.com/huzai4a/Alien-Escape",
    content: <ModalContent 
    desc="An alien has crash landed onto a planet, and they find themselves surrounded by unfamilliar terrain. On impact, the ship dissassembled and scattered pieces across town. Your job is to get the ship pieces and escape, dodging the humans standing in your way. This 2D topdown game was made using unity and C# with some friends. I took on key responsibilities in designing both the leaderboard and enemy AI functionality. The leaderboard tracks player scores and ranks them based on the time it takes to gather the ship pieces. For the enemy AI, I developed intelligent behaviors that actively challenge the player by patrolling the area, guarding ship parts, and adapting based on the player&apos;s actions. Working closely with collaborators, I explored the framing process of the project, ensuring that each team member’s input was integrated smoothly to shape the game's core mechanics and structure. One of the more intricate aspects was handling event-driven conditions, particularly when key inputs triggered specific player actions like dodging enemies or interacting with ship pieces. This ensured the gameplay was fluid, engaging, and responsive to player inputs, while keeping the challenge dynamic and fun."
    />
  },
];