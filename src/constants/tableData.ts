export interface tableDataInterface {
  id: number;
  brand: {
    imgURL: string;
    name: string;
    unreadMessages: number;
  };
  description: string;
  members: {
    imgURL: string;
    name: string;
  }[];
  categories: string[];
  tags: string[];
  nextMeeting: string;
}

export const tableData: tableDataInterface[] = [
  {
    id: 1,
    brand: {
      imgURL: "https://github.com/shadcn.png",
      name: "Wix",
      unreadMessages: 0,
    },
    description: "Website builder with powerful drag-and-drop tools.",
    members: [
      {
        imgURL: "https://github.com/shadcn.png",
        name: "John Doe",
      },
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Jane Smith",
      },
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Alice Parker",
      },
    ],
    categories: ["B2C", "SaaS"],
    tags: ["#websitebuilder", "#webdesign"],
    nextMeeting: "in 30 minutes",
  },
  {
    id: 2,
    brand: {
      imgURL: "https://github.com/shadcn.png",
      name: "Acme Corp",
      unreadMessages: 2,
    },
    description: "Manufacturer of innovative gadgets.",
    members: [
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Bob Johnson",
      },
    ],
    categories: ["B2B", "Manufacturing"],
    tags: ["#gadgets", "#innovation"],
    nextMeeting: "tomorrow",
  },
  {
    id: 3,
    brand: {
      imgURL: "https://github.com/shadcn.png",
      name: "Trendy Fashion",
      unreadMessages: 5,
    },
    description: "Online retailer of stylish clothing.",
    members: [
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Emily Davis",
      },
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Mark Wilson",
      },
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Sarah Lee",
      },
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Peter Thompson",
      },
    ],
    categories: ["E-Comm", "B2C"],
    tags: ["#fashion", "#onlineshopping"],
    nextMeeting: "no contact",
  },
  {
    id: 4,
    brand: {
      imgURL: "https://github.com/shadcn.png",
      name: "CloudByte",
      unreadMessages: 0,
    },
    description: "Cloud storage solutions for businesses.",
    members: [
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Olivia Baker",
      },
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Noah Carter",
      },
    ],
    categories: ["SaaS", "B2B", "Cloud"],
    tags: ["#cloudstorage", "#datasecurity"],
    nextMeeting: "in 6 hours",
  },
  {
    id: 5,
    brand: {
      imgURL: "https://github.com/shadcn.png",
      name: "SocialBuzz",
      unreadMessages: 1,
    },
    description: "Social media marketing agency.",
    members: [
      {
        imgURL: "https://github.com/shadcn.png",
        name: "Jessica Miller",
      },
    ],
    categories: ["SaaS", "Marketing"],
    tags: ["#socialmedia", "#digitalmarketing"],
    nextMeeting: "next month",
  },
];
