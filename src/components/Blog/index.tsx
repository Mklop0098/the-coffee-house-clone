import { useEffect, useState } from "react";
import { blogs as fakeBlogs, blogTopics as fakeBlogTopics } from "../../data";
import "./style.css";
import { BlogItem } from "./BlogItem";
import { Blog, BlogTopic } from "../../types";

export const BlogSection: React.FC = () => {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [blogTopics, setBlogTopics] = useState<BlogTopic[]>([]);

  useEffect(() => {
    setBlogs(fakeBlogs);
    setBlogTopics(fakeBlogTopics);
  }, []);

  return (
    <section id="blog">
      <div className="container">
        <div className="blog__title">
          <img src="https://file.hstatic.net/1000075078/file/coffee-2_2_92db24958ff14ac4b4249b3256f7a415.png" />
          <h2>Chuyện Nhà</h2>
        </div>
        {blogTopics.map((topic) => (
          <div className="blog__topic" key={topic.id}>
            <h2 className="topic__title">{topic.title}</h2>
            <div className="blog-topic-contain">
              {blogs
                .filter((blog) => blog.topic === topic.id)
                .map((blog) => (
                  <BlogItem blog={blog} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
