import Image from "next/image";

export const aboutItems = {
    header: '<about me />',
    desc2: 'Outside of all this creating, I love playing basketball (or any sport really), going to the gym, and playing video games.',
    img:'/assets/me.jpg',
    alt:'pic of me :)',
    width: 280,
    height: 180
};

export const data = [
  {
    title: "Coding Club President",
    date: "Aug. 2022 - Jun. 2023",
    location: "Whitby, ON, Canada",
    content: (
      <div className="font-geistSans">
        <div className="text-neutral-800 dark:text-gray-100 text-sm md:text-base  mb-8">
          <h3>Summary:</h3>
          <ul className="list-none text-gray-100 font-geistSans ml-5">
            <li>
              - Troubleshooting experience: aiding in bug fixes. formatting
              issues, etc.
            </li>
            <li>- Lead a team to facilitate club meetings and events</li>
            <li>
              - Created HTML/CSS/JS foundational lessons to teach responsive
              website fundamentals
            </li>
          </ul>
          <br />
          I have gained valuable experience in troubleshooting, aiding in bug
          fixes and resolving formatting issues across various projects. As a
          team leader, I have successfully facilitated club meetings and events,
          ensuring effective collaboration and smooth execution. Additionally,
          I developed and delivered foundational lessons in HTML, CSS, and
          JavaScript to teach responsive website design, helping others build
          essential skills in web development.
        </div>
        <div className="grid grid-cols-2 gap-4 text-gray-50 font-bold">
          <Image
            src="/assets/cc-logo.png"
            alt="coding club logo"
            width={500}
            height={800}
            className="h-full rounded-xl object-cover shadow-lg drop-shadow-2xl"
          />
          <Image
            src="/assets/lesson-ex.png"
            alt="lesson demo example"
            width={500}
            height={800}
            className="h-full rounded-xl object-cover shadow-lg drop-shadow-2xl"
          />
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
                - Participated in various leadership ventures with some focus on communication
              </li>
              <li>
              - Achieved various certifications including CPR training
              </li>
            </ul>
            <br />
            I had the opportunity to work as part of a team to facilitate a Youth Forum, where we collaborated to ensure the event ran smoothly and effectively engaged young participants. Throughout the program, I participated in several leadership ventures that emphasized communication, helping me strengthen my interpersonal and organizational skills. Additionally, I earned various certifications, including CPR training, which further enhanced my ability to contribute to both individual and team-focused initiatives.
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-50 font-bold">
            <Image
              src="/assets/durham-sign.png"
              alt="youth in policing poster"
              width={500}
              height={800}
              className="max-h-[80dvh] rounded-xl object-cover shadow-lg drop-shadow-2xl"
            />
            <Image
              src="/assets/yip-poster.png"
              alt="lesson demo example"
              width={500}
              height={800}
              className="max-h-[80dvh] rounded-xl object-cover shadow-lg drop-shadow-2xl"
            />
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
                -  Developed backend database connections through AJAX with PHP PDO protection
              </li>
              <li>
                - Updated a deprecated login system for ease of access for future developers
              </li>
              <li>
                - Worked on seamlessly integrating code blocks into existing sites
              </li>
            </ul>
            <br />
            During my time at Digitera, I developed backend database connections using AJAX, ensuring secure data transmission with PHP PDO protection. This experience helped me deepen my understanding of backend processes and security measures. One of the key tasks I handled was updating a deprecated login system, which I streamlined for easier access by future developers, improving the overall user authentication flow.
            <br /><br />
            Additionally, I worked on integrating code blocks seamlessly into existing websites, enhancing their functionality without disrupting the current structure. This role also gave me the chance to familiarize myself with GitHub and the typical workflow of large-scale projects, providing me hands-on experience in both frontend and backend development. This exposure to collaboration tools and coding practices has significantly sharpened my technical and team coordination skills.
          </div>
          <div className="grid grid-cols-2 gap-4 text-gray-50 font-bold">
            <Image
              src="/assets/digitera-landing.png"
              alt="digitera home page"
              width={500}
              height={800}
              className="h-full rounded-xl object-cover shadow-lg drop-shadow-2xl"
            />
            <Image
              src="/assets/digitera-techs-stacked.png"
              alt="languages used"
              width={500}
              height={800}
              className="h-full rounded-xl object-cover shadow-lg drop-shadow-2xl"
            />
          </div>
        </div>
      ),
    },
  ];

interface ModalContentProps {
  desc: string;
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
        category: 'Node.JS, React.JS',
        title: 'Instagram Unfollow Tracker',
        src: "/assets/instagram-unfollow-tracker.png",
        git: "https://github.com/huzai4a/js-projects/tree/main/listChecker",
        content: <ModalContent 
        desc="The project allows users to upload their Instagram data in order to identify individuals they follow who are not following them back. I felt like this was an inconvenience on instagram's part that could be satisfied through a simple site. By getting users to upload JSON data, the site efficiently analyzes this information without storing any personal data or compromising user privacy. The identification of unfollowers is done securely, ensuring that no sensitive information is retained during the process. To enhance user experience, I designed a fully responsive interface using HTML and CSS, which adjusts seamlessly across different devices and screen sizes, ensuring smooth navigation and easy interaction. This tool provides a simple yet effective solution for Instagram users looking to manage their follower lists more effectively."
        />
    },
    {
        category: 'Unity, C#',
        title: 'Alien Escape',
        src: "/assets/alien-escape-sample.png",
        git: "https://github.com/huzai4a/Alien-Escape",
        content: <ModalContent 
        desc="An alien has crash landed onto a planet, and they find themselves surrounded by unfamilliar terrain. On impact, the ship dissassembled and scattered pieces across town. Your job is to get the ship pieces and escape, dodging the humans standing in your way. This 2D topdown game was made using unity and C# with some friends. I took on key responsibilities in designing both the leaderboard and enemy AI functionality. The leaderboard tracks player scores and ranks them based on the time it takes to gather the ship pieces. For the enemy AI, I developed intelligent behaviors that actively challenge the player by patrolling the area, guarding ship parts, and adapting based on the player’s actions. Working closely with collaborators, I explored the framing process of the project, ensuring that each team member’s input was integrated smoothly to shape the game's core mechanics and structure. One of the more intricate aspects was handling event-driven conditions, particularly when key inputs triggered specific player actions like dodging enemies or interacting with ship pieces. This ensured the gameplay was fluid, engaging, and responsive to player inputs, while keeping the challenge dynamic and fun."
        />
    },
    {
        category: 'Python',
        title: 'Autonomous Item Sorting & Disposal',
        src: "/assets/sorting-bot.png",
        content: <ModalContent 
        desc="I developed a track-following movement system for a simulated Quanser robot, ensuring smooth and precise control of the robot’s motions in various tasks. The movement system was integral to the robot’s ability to navigate its environment effectively, especially in conjunction with the bin detection system I helped implement. Utilizing both color and ultrasonic sensors, this detection system enabled the robot to identify and interact with specific bins, a critical feature for sorting and organizing items within the simulated environment. Additionally, I worked closely with the design team to develop a fully functioning robot dispenser system, which allowed the robot to efficiently deposit sorted items into designated bins. This collaborative effort ensured that the dispenser mechanism was aligned with the overall design goals, making the robot both practical and efficient in its operations. Through this project, we combined sensor integration, mechanical design, and teamwork to create a versatile, high-performing robotic system capable of complex tasks."
        />
    }
]