import Link from "next/link";
import { IoMdArrowDown } from "react-icons/io";

const data = [
  {
    id: 1,
    heading: "",
    content: `
    As Diatom Technologies, a pioneering company in the field of bioprinting and ventilator development, we are committed to pushing the boundaries of respiratory care. The future of ventilator technology holds immense potential for improving patient outcomes and enhancing the efficiency of healthcare delivery.
    One of the most promising advancements is the integration of artificial intelligence (AI) and machine learning algorithms into ventilator systems. These cutting-edge technologies will enable real-time monitoring and adjustment of ventilator settings, tailoring the treatment to each patient's unique respiratory needs. By continuously analyzing vital signs and respiratory patterns, AI-powered ventilators can optimize oxygen delivery and reduce the risk of complications.
    `,
  },
  {
    id: 3,
    heading: "Advanced Sensors and Monitoring Capabilities",
    content: `
    Another exciting development is the incorporation of advanced sensors and monitoring capabilities into ventilator systems. These sensors can measure various physiological parameters, such as blood oxygen levels, lung compliance, and airway resistance, providing healthcare professionals with comprehensive data for better-informed decision-making.
    `,
  },
  {
    id: 4,
    heading: "Portable and Wearable Ventilators",
    content: `
    Furthermore, the advent of portable and wearable ventilators is revolutionizing respiratory care. These compact and lightweight devices offer greater mobility and independence for patients, improving their quality of life and facilitating seamless transition between healthcare settings.
    `,
  },
  {
    id: 5,
    heading: "Diatom Technologies' Commitment to Innovation",
    content: `
    At Diatom Technologies, we are at the forefront of these innovations, combining our expertise in bioprinting and ventilator technology to create cutting-edge solutions. Our goal is to empower healthcare professionals with the tools they need to deliver exceptional respiratory care, ultimately improving patient outcomes and enhancing overall well-being.
    `,
  },
];

export default function Home() {
  return (
    <div className="padding-x py-20 w-full ">
      <h1 className="md:text-5xl text-4xl font-bold open-sans md:leading-[4rem] ">
        The Future of Respiratory Care: Advancements in Ventilator Technology
      </h1>
      <div className="w-full my-8 max-h-[600px] overflow-hidden flex items-center">
        <img
          src="/bg/blogbg2.jpg"
          alt="blog background"
          className="object-cover object-center"
        />
      </div>
      <div className="flex gap-4 items-center">
        <img src="/author.jpeg" alt="author" className="w-8 rounded-full" />
        <p className="text-md font-semibold ">John Doe</p>
        <p className="font-semibold text-md">7 Min Read</p>
      </div>

      <div className=" pt-6 pb-10 max-w-6xl flex-col flex gap-10">
        {data.map((ele) => {
          return (
            <div className="w-full flex flex-col gap-6" key={ele.id}>
              <h3 className="font-semibold open-sans text-2xl">
                {ele.heading}
              </h3>
              <p className="text-lg monts">{ele.content}</p>
            </div>
          );
        })}
      </div>
      <h3 className="text-4xl monts my-4 font-semibold">
        Related Blog articles
      </h3>
      <div className="w-full grid lg:grid-cols-3 grid-cols-1 gap-8">
        <Link
          href="/blog/sample"
          className="flex-col flex relative gap-1 group py-4"
        >
          <div className="overflow-hidden">
            <img
              src="/bg/blog.jpg"
              alt="blog"
              className="max-w-full transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="w-full mt-8 relative">
            <p className="font-semibold text-sm inline monts">john doe</p>
            <p className="font-bold text-xl inline mx-1 ">.</p>
            <p className="font-semibold inline text-sm monts">20 May 2024</p>
          </div>
          <div className="flex justify-between monts ">
            <h3 className="text-xl font-semibold ">Migrating to Linear 101</h3>
            <div className="-rotate-90 ">
              <IoMdArrowDown className="-rotate-45 text-xl group-hover:text-2xl transition-all delay-100 duration-200" />
            </div>
          </div>
          <p className="mt-1 ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </p>
          <div className="monts font-semibold mt-1">
            <p className="text-[10px] border-[1.7px] rounded-xl inline px-2 py-1  border-black">
              Technology
            </p>
          </div>
        </Link>
        <Link
          href="/blog/sample"
          className="flex-col flex relative gap-1 group py-4"
        >
          <div className="overflow-hidden">
            <img
              src="/bg/blog.jpg"
              alt="blog"
              className="max-w-full transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="w-full mt-8 relative">
            <p className="font-semibold text-sm inline monts">john doe</p>
            <p className="font-bold text-xl inline mx-1 ">.</p>
            <p className="font-semibold inline text-sm monts">20 May 2024</p>
          </div>
          <div className="flex justify-between monts ">
            <h3 className="text-xl font-semibold ">Migrating to Linear 101</h3>
            <div className="-rotate-90 ">
              <IoMdArrowDown className="-rotate-45 text-xl group-hover:text-2xl transition-all delay-100 duration-200" />
            </div>
          </div>
          <p className="mt-1 ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </p>
          <div className="monts font-semibold mt-1">
            <p className="text-[10px] border-[1.7px] rounded-xl inline px-2 py-1  border-black">
              Technology
            </p>
          </div>
        </Link>
        <Link
          href="/blog/sample"
          className="flex-col flex relative gap-1 group py-4"
        >
          <div className="overflow-hidden">
            <img
              src="/bg/blog.jpg"
              alt="blog"
              className="max-w-full transition duration-300 ease-in-out hover:scale-110"
            />
          </div>
          <div className="w-full mt-8 relative">
            <p className="font-semibold text-sm inline monts">john doe</p>
            <p className="font-bold text-xl inline mx-1 ">.</p>
            <p className="font-semibold inline text-sm monts">20 May 2024</p>
          </div>
          <div className="flex justify-between monts ">
            <h3 className="text-xl font-semibold ">Migrating to Linear 101</h3>
            <div className="-rotate-90 ">
              <IoMdArrowDown className="-rotate-45 text-xl group-hover:text-2xl transition-all delay-100 duration-200" />
            </div>
          </div>
          <p className="mt-1 ">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum.
          </p>
          <div className="monts font-semibold mt-1">
            <p className="text-[10px] border-[1.7px] rounded-xl inline px-2 py-1  border-black">
              Technology
            </p>
          </div>
        </Link>
      </div>
    </div>
  );
}
