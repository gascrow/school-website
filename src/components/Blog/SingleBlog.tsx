import { Blog } from "@/types/blog";
import Image from "next/image";
import Link from "next/link";

const SingleBlog = ({ blog }: { blog: Blog }) => {
  const { id, title, image, paragraph, tags, publishDate } = blog;
  return (
    <>
      <div className="group shadow-one hover:shadow-two dark:bg-dark dark:hover:shadow-gray-dark relative overflow-hidden rounded-lg bg-white duration-300">
        <Link
          href={`/blog/${id}`}
          className="relative block aspect-[37/18] w-full  overflow-hidden group"
        >
          <span className="bg-white absolute bottom-6 left-6 z-20 inline-flex items-center justify-center rounded-lg px-2 py-1 text-xs font-bold text-primary capitalize">
            {tags[0]}
          </span>
          <Image src={image} alt="image" fill className="transition-transform duration-300 group-hover:scale-105" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300"></div>
        </Link>
      </div>
      
      <div className="px-0 py-6 sm:py-8 md:py-8 lg:py-8 xl:py-2 2xl:py-8">
        <h3>
          <Link
            href={`/blog/${id}`}
            className="text-md font-bold text-black sm:text-xl line-clamp-2"
          >
            {title}
          </Link>
        </h3>
        <div className="inline-block">
          <h4 className="text-dark mb-1 text-sm font-medium dark:text-white">
          </h4> 
          <p className="text-body-color font-bold text-md">{publishDate}</p>
        </div>
        <p className="text-body-color mb-4 pb-6 text-base font-bold dark:border-white/10 line-clamp-2 h-12 overflow-hidden">
          {paragraph}
        </p>
      </div>
    </>
  );
};

export default SingleBlog;
