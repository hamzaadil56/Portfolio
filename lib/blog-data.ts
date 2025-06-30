// In-memory blog storage (in production, this would be a database)
export interface Blog {
  id: string;
  title: string;
  url: string;
  platform: string;
  date: string;
  readTime: string;
  description: string;
  tags: string[];
  gradient: string;
  platformColor: string;
  createdAt: string;
  updatedAt: string;
}

let blogs: Blog[] = [
  {
    id: "1",
    title: "What is metaprogramming and its role in AI Workflows?",
    url: "https://dev.to/hamzaadil56/what-is-metaprogramming-io7",
    platform: "Dev.to",
    date: "2024",
    readTime: "8 min read",
    description: "Exploring the fascinating world of metaprogramming and how it's revolutionizing AI workflows. Learn about code that writes code and its applications in modern AI systems.",
    tags: ["Metaprogramming", "AI", "Programming", "Automation"],
    gradient: "from-green-600 to-blue-600",
    platformColor: "text-green-400",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  },
  {
    id: "2",
    title: "What is MCP (Model Context Protocol), and why is it generating so much buzz?",
    url: "https://medium.com/@hamzaadil56/what-is-mcp-model-context-protocol-and-why-is-it-generating-so-much-buzz-c53b7dc48493",
    platform: "Medium",
    date: "2024",
    readTime: "6 min read",
    description: "Diving deep into the Model Context Protocol (MCP) and understanding why it's creating waves in the AI community. Discover how MCP is changing the landscape of AI model interactions.",
    tags: ["MCP", "AI", "Protocol", "Machine Learning"],
    gradient: "from-purple-600 to-pink-600",
    platformColor: "text-purple-400",
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  }
];

export const getAllBlogs = (): Blog[] => {
  console.log('Getting all blogs, current count:', blogs.length);
  return blogs.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
};

export const getBlogById = (id: string): Blog | undefined => {
  console.log('Getting blog by ID:', id);
  const blog = blogs.find(blog => blog.id === id);
  console.log('Found blog:', blog ? 'Yes' : 'No');
  return blog;
};

export const createBlog = (blogData: Omit<Blog, 'id' | 'createdAt' | 'updatedAt'>): Blog => {
  console.log('Creating new blog with data:', blogData);
  
  const newBlog: Blog = {
    ...blogData,
    id: Date.now().toString(),
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString()
  };
  
  blogs.push(newBlog);
  console.log('Blog created and added to array. Total blogs:', blogs.length);
  console.log('New blog:', newBlog);
  
  return newBlog;
};

export const updateBlog = (id: string, blogData: Partial<Omit<Blog, 'id' | 'createdAt'>>): Blog | null => {
  console.log('Updating blog with ID:', id);
  const blogIndex = blogs.findIndex(blog => blog.id === id);
  
  if (blogIndex === -1) {
    console.log('Blog not found for update');
    return null;
  }
  
  blogs[blogIndex] = {
    ...blogs[blogIndex],
    ...blogData,
    updatedAt: new Date().toISOString()
  };
  
  console.log('Blog updated successfully');
  return blogs[blogIndex];
};

export const deleteBlog = (id: string): boolean => {
  console.log('Deleting blog with ID:', id);
  const blogIndex = blogs.findIndex(blog => blog.id === id);
  
  if (blogIndex === -1) {
    console.log('Blog not found for deletion');
    return false;
  }
  
  blogs.splice(blogIndex, 1);
  console.log('Blog deleted successfully. Remaining blogs:', blogs.length);
  return true;
};