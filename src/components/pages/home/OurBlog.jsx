import CardOurBlog from "./CardOurBlog";
import Section from "../../Section";
import { blogs } from "./../../../data/blogs";
const OurBlog = () => {
  return (
    <Section
      subtitle={"Our Blogs"}
      title={"Latest Posts"}
      css={"px-4 bg-gray-100 text-center py-16 md:py-24"}
      cssTitle={"text-primary"}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8 md:py-12 text-left">
        {blogs.map((blog) => (
          <CardOurBlog
            key={blog.id}
            thumbnail={blog.thumbnail}
            title={blog.title}
            ava={blog.ava}
            author={blog.name}
            date={new Date(blog.date).toLocaleString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          />
        ))}
      </div>
    </Section>
  );
};

export default OurBlog;
