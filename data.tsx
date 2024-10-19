import Image from "next/image";

export const aboutItems = {
    header: '<about me />',
    desc2: 'Outside of all this creating, I love playing basketball (or any sport really), going to the gym, and playing video games.',
    img:'/assets/me.jpg',
    alt:'pic of me :)',
    width: 280,
    height: 180
};

const ModalContent = () => {
    return (
      <>
        <div
          className="bg-[#F5F5F7] dark:bg-navy-50 md:p-14 mb-4"
        >
          <p className="dark:text-gray-100 text-base md:text-2xl font-sans max-w-3xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae necessitatibus consectetur adipisci, porro aliquam recusandae repellendus aperiam voluptatum sit omnis asperiores distinctio cupiditate aliquid commodi dolor, sed voluptates a doloremque.
          </p>
          <Image
            src="/assets/me.jpg"
            alt="Macbook mockup from Aceternity UI"
            height="500"
            width="500"
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
        content: <ModalContent />
    },
    {
        category: 'Unity, C#',
        title: 'Alien Escape',
        src: "/assets/alien-escape-sample.png",
        git: "https://github.com/huzai4a/Alien-Escape",
        content: <ModalContent />
    },
    {
        category: 'Python',
        title: 'Autonomous Item Sorting & Disposal',
        src: "/assets/sorting-bot.png",
        content: <ModalContent />
    }
]