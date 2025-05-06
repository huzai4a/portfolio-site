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
    date: "Jan. 2025 - Apr. 2025",
    location: "Remote, Canada",
    content: (
      <div className="font-geistSans">
        <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base pb-8 mb-8">
          <h3>Summary:</h3>
          <ul className="list-none text-gray-100 font-geistSans ml-5">
            <li>
              - Enhanced Arkhet AI’s web platform with animations, improved UI, and responsive design
            </li>
            <li>
              - Designed and optimized a modular component architecture through agile weekly sprints 
            </li>
            <li>
              - Iterated features continuously based on beta tester feedback and user interaction patterns
            </li>
          </ul>
          <br />
          As a Full-Stack Developer Intern at Arkhet AI, I contributed to the development of an interactive web platform that empowers users to prototype digital products quickly and intuitively. The platform allows users to build wireframes with drag-and-drop components, customize design systems, and generate interactive prototypes in one click. My work focused on improving the front-end experience—adding smooth animations, refining responsive behavior, and implementing stylistic enhancements to better align with user expectations. I collaborated with the product team during weekly sprints to redesign component architecture, enabling flexible, modular updates. Feedback gathered from early testers guided several iterative improvements I implemented, helping Arkhet AI remain agile in its development cycle and responsive to user needs.
        </div>

        {/* Flex container for images */}
        <div className="flex gap-4 items-center justify-center w-full pt-5">
          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/arkhet_logo.jpg"
              alt="coding club logo"
              width={400} // Explicit width
              height={300} // Explicit height
              className="img"
            />
          </div>
        </div>
      </div>

    ),
  },
  {
    title: "Coding Club President",
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
          Being the president of the coding club allowed me to be involved with software in a way I never had before. Being the one that students looked to for help applied pressure for me to have a better understanding of foundational HTML/CSS/JS. This understanding included syntax but also extended to logical issues, semantic errors, layout problems, and more. This gave me the opportunity to come up with troubleshooting strategies and also forced me to adapt and recognize bug causes regularly. As a team leader, I have successfully facilitated club meetings and events, ensuring effective collaboration and smooth execution. Additionally, I developed and delivered foundational lessons in HTML, CSS, and JavaScript to teach responsive website design, helping others build essential skills in web development.
        </div>

        {/* Flex container for images */}
        <div className="flex gap-4 items-center justify-center w-full pt-5">
          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/cc-logo.png"
              alt="coding club logo"
              width={300} // Explicit width
              height={300} // Explicit height
              className="img"
            />
          </div>

          <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
            <Image
              src="/assets/lesson-ex.png"
              alt="lesson demo example"
              width={300} // Explicit width
              height={300} // Explicit height
              className="img"
            />
          </div>
        </div>
      </div>

    ),
  },
    {
      title: "Policing Leadership Program",
      date: "Jul. 2022 - Aug. 2022",
      location: "Oshawa, ON, Canada",
      content: (
        <div className="font-geistSans">
          <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base  mb-8">
            <h3>Summary:</h3>
            <ul className="list-none text-gray-100 font-geistSans ml-5">
              <li>
              - Worked as part of a team to facilitate a <a target="_blank" href='https://www.instagram.com/drps_official/p/Cf7PsdVL8Cj/' className='text-purple-100 font-medium underline decoration-navy-50 hover:decoration-purple-100 hover:decoration-solid'>Youth Forum</a>
              </li>
              <li>
                - Participated in various leadership ventures
              </li>
              <li>
              - Frequently planned/collaborated with a small team, furthering my communication skills
              </li>
            </ul>
            <br />
            This initiative drastically changed my outlook on communication, collaboration and leadership, all of which contribute to my skill as a developer. We worked in a tight-knit team, and this experience brought together people that were able to step up when their expertise were needed, which is something that is essential in software development. Throughout the program, I had many opportunities to lead the team and speak in public, which furthered my communication and leadership.
          </div>
          
          {/* Flex container for images */}
          <div className="flex gap-4 items-center justify-center w-full pt-5">
            <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
              <Image
                src="/assets/durham-sign.png"
                alt="youth in policing poster"
                width={300} // Explicit width
                height={300} // Explicit height
                className="img"
              />
            </div>

            <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
              <Image
                src="/assets/yip-poster.png"
                alt="lesson demo example"
                width={300} // Explicit width
                height={300} // Explicit height
                className="img"
              />
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Digitera Interactive",
      date: "Jan. 2022 - Jun. 2022",
      location: "Remote, Canada",
      content: (
        <div className="font-geistSans">
          <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base  mb-8">
            <h3>Summary:</h3>
            <ul className="list-none text-gray-100 font-geistSans ml-5">
              <li>
                -  Worked on preventing SQL injection in backend connections with PHP PDO protection
              </li>
              <li>
                - Refurbished a deprecated login system to use in newer web apps
              </li>
              <li>
                - Worked on integrating various features into existing event site
              </li>
            </ul>
            <br />
            During my time at Digitera, I had the opportunity to work on an event management system with a team of 3 interns and a senior developer. This experience allowed for great mentoring and learning of common SEO practices, which was Digitera&apos;s specialty. Also, we were given a login system with a faulty JSON token method, which we used to create an improved version. I later developed backend database connections, ensuring secure data transmission with PHP PDO protection. This experience helped me deepen my understanding of backend processes and security measures.
            <br /><br />
            Additionally, I worked on integrating various features into existing websites, enhancing their functionality without disrupting the current structure. These features included changing the parameters necessary when adding events, managing the way event deletion was performer, and more. This role also gave me the chance to familiarize myself with GitHub and the typical workflow of large-scale projects, providing me hands-on experience in both frontend and backend development.
          </div>

          {/* Flex container for images */}
          <div className="flex gap-4 items-center justify-center w-full pt-5">
            <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
              <Image
                src="/assets/digitera-landing.png"
                alt="digitera home page"
                width={300} // Explicit width
                height={300} // Explicit height
                className="img"
              />
            </div>

            <div className="flex-1 max-w-sm lg:max-w-md shadow-lg drop-shadow-2xl" style={{borderRadius:'10px', overflow: 'hidden'}}>
              <Image
                src="/assets/digitera-techs-stacked.png"
                alt="languages used"
                width={300} // Explicit width
                height={300} // Explicit height
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