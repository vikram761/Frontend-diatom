export interface blog {
  id : number;
  author : string;
  authorImg : string;
  blogImg :string;
  href : string;
  date : string;
  title : string;
  description : string;
  tag : string;
  time : number;
}

export const BlogData : blog[] = [
  {
    id: 1,
    author: "mary cross",
    authorImg: "/author.jpeg",
    blogImg: "/bg/blogbg2.jpg",
    href: "/blog/sample",
    date: "20 May 2024",
    title: "The Future of Respiratory Care",
    description: `cumque nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est.
              `,
    tag: "Technology",
    time: 8,
  },
  {
    id: 2,
    author: "john doe",
    authorImg: "/author.jpeg",
    blogImg: "/bg/blog.jpg",
    href: "/blog/sample",
    date: "20 May 2024",
    title: "Unlocking the Potential of Regenerative Medicine",
    description: `cumque nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est.
              `,
    tag: "Technology",
    time: 12,
  },
  {
    id: 3,
    author: "john doe",
    authorImg: "/author.jpeg",
    blogImg: "/bg/blogbg3.jpg",
    href: "/blog/sample",
    date: "20 May 2024",
    title: "Bridging the Gap: Collaborative Efforts in Healthcare Innovation",
    description: `cumque nihil impedit quo minus id quod maxime placeat facere
                possimus, omnis voluptas assumenda est.
              `,
    tag: "Technology",
    time: 10,
  },
];


