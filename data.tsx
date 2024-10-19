import Image from "next/image";

export const aboutItems = {
    header: '<about me />',
    desc2: 'Outside of all this creating, I love playing basketball (or any sport really), going to the gym, and playing video games.',
    img:'/assets/me.jpg',
    alt:'pic of me :)',
    width: 280,
    height: 180
};

interface ModalContentProps {
  desc: string;
  img: string;
  alt: string;
  width?: number;
  height?: number;
}

const ModalContent = ({desc, img, alt, width=200, height=200}:ModalContentProps) => {
    return (
      <>
        <div
          className="bg-[#F5F5F7] dark:bg-navy-50 md:p-14 mb-4"
        >
          <p className="dark:text-gray-100 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            {desc}
          </p>
          <Image
            src={img}
            alt={alt}
            height={height}
            width={width}
            className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain pt-10"
          />
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
        desc="The project allows users to upload their Instagram data in order to identify individuals they follow who are not following them back. By processing user data from Instagram's JSON files, the tool efficiently scrapes and analyzes this information without storing any personal data or compromising user privacy. The identification of unfollowers is done securely, ensuring that no sensitive information is retained during the process. To enhance user experience, I designed a fully responsive interface using HTML and CSS, which adjusts seamlessly across different devices and screen sizes, ensuring smooth navigation and easy interaction. This tool provides a simple yet effective solution for Instagram users looking to manage their follower lists more effectively."
        img="/assets/"
        alt=""
        />
    },
    {
        category: 'Unity, C#',
        title: 'Alien Escape',
        src: "/assets/alien-escape-sample.png",
        git: "https://github.com/huzai4a/Alien-Escape",
        content: <ModalContent 
        desc=""
        img="/assets/"
        alt=""
        />
    },
    {
        category: 'Python',
        title: 'Autonomous Item Sorting & Disposal',
        src: "/assets/sorting-bot.png",
        content: <ModalContent 
        desc=""
        img="/assets/"
        alt=""
        />
    }
]