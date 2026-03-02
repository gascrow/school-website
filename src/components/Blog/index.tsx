import SectionTitle from "../Common/SectionTitle";
import SingleBlog from "./SingleBlog";
import blogData from "./blogData";

const Blog = () => {
  return (
    <section
      id="blog"
      className="bg-white dark:bg-bg-color-dark py-16 md:py-20 lg:py-28"
    >
      <div className="container px-10 md:px-20 lg:px-10">
        <div className="bg-primary rounded-md p-8 shadow-xl mb-12">
          <div className="text-center mb-6">
            <SectionTitle
              title="Berita Terbaru"
              paragraph="Temukan berita terkini dan informasi terbaru seputar dunia pendidikan dan kegiatan kami."
              center
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-2 md:gap-x-6 lg:gap-x-8 xl:grid-cols-3">
          {blogData.map((blog) => (
            <div key={blog.id} className="w-full">
              <SingleBlog blog={blog} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
