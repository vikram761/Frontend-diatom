import Link from "next/link";

const data = [
  {
    id: 1,
    heading: "",
    content: `
    As Diatom Technologies, a pioneering company in the field of bioprinting and ventilator development, we are committed to pushing the boundaries of respiratory care. The future of ventilator technology holds immense potential for improving patient outcomes and enhancing the efficiency of healthcare delivery.
    `,
  },
  {
    id: 2,
    heading: "AI and Machine Learning for Intelligent Ventilation",
    content: `
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
    <div className="2xl:px-[31rem]  lg:px-72  md:px-28 px-6 py-20 w-full ">
      <h1 className="md:text-5xl text-4xl font-bold open-sans md:leading-[4rem] ">
        The Future of Respiratory Care: Advancements in Ventilator Technology
      </h1>
      <div className="flex py-8 gap-4 items-center">
        <img src="/author.jpeg" alt="author" className="w-10 rounded-full" />
        <div className="flex flex-col ">
          <h2 className="text-lg text-gray-800">John doe</h2>
          <div className="flex gap-4 items-center">
            <p className="text-sm text-gray-500">4 min read</p>
            <p className="text-sm text-gray-600">May 20,2024</p>
          </div>
        </div>
      </div>
      <hr />
      <div className="w-full max-h-[50vh] overflow-hidden flex items-center">
        <img
          src="/bg/blogbg2.jpg"
          alt="blog background"
          className="object-cover object-center"
        />
      </div>
      <div className=" py-10 flex-col flex gap-10">
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
      <h3 className="text-4xl open-sans mt-6 font-semibold">
        Related Blog article
      </h3>
      <Link href="/blog/sample" className="flex max-md:flex-col max-md:items-center mt-12 gap-6 group">
        <div className=" md:min-w-40 md:max-w-60 w-full overflow-hidden">
          <img
            src="/bg/blog.jpg"
            alt="blog bg"
            className="object-cover w-full max-h-96 group-hover:scale-110 duration-200 delay-100 transition-all ease-out"
          />
        </div>
        <div >
          <h3 className="open-sans sm:text-2xl text-xl font-semibold">
            Unlocking the Potential of Regenerative Medicine: The Power of
            Biological 3D Printing
          </h3>
          <div className="flex gap-4 mt-4">
            <p className="text-gray-500 text-sm">Mary cross</p>
            <p className="text-gray-700 text-sm">10 min read</p>
            <p className="text-sm text-gray-900">19 May,2024</p>
          </div>
        </div>
      </Link>
    </div>
  );
}
