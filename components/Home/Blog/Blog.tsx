import SectionHeading from "@/components/Helper/SectionHeading";
import { blogs } from "@/data/data";
import React from "react";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <div id="blog" className="py-16 bg-gray-100 scroll-mt-20">
      <div className="w-[80%] mx-auto">
        <SectionHeading heading="Check our Blog" />
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 mt-16 gap-6 items-center">
          {blogs.map((blog, i) => {
            return (
              <div
                key={blog.id}
                data-aos="zoom-out"
                data-aos-delay={i * 100}
                data-aos-anchor-placement="top-center"
              >
                <BlogCard blog={blog} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Blog;
