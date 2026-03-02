import { Program } from "@/types/program";
import Link from "next/link";

const SingleProgram = ({ program }: { program: Program }) => {
  const { name, content, designation, url } = program;

  const getProgramIcon = (programName: string) => {
    if (programName.includes("Paket A")) {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    } else if (programName.includes("Paket B")) {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
        </svg>
      );
    } else {
      return (
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      );
    }
  };

  return (
    <div className="w-full relative">
      <div className={`shadow-two dark:bg-dark dark:shadow-three bg-white p-0 duration-300 lg:px-0 xl:px-0 relative z-30 -mt-20 md:-mt-24 lg:-mt-28 ${program.name.includes("Paket A") ? "rounded-tl-2xl" : program.name.includes("Paket C") ? "rounded-tr-2xl" : ""}`}>
        {/* Header with Primary Color */}
        <div className={`bg-primary text-white px-6 py-8 ${program.name.includes("Paket A") ? "rounded-tl-2xl" : program.name.includes("Paket C") ? "rounded-tr-2xl" : ""}`}>
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              {getProgramIcon(name)}
            </div>
            <div>
              <h3 className="text-lg font-bold lg:text-base xl:text-lg">
                {name}
              </h3>
              <p className="text-sm opacity-90 font-medium">{designation}</p>
            </div>
          </div>
        </div>
        
        {/* Image Section - Full width image attached to header */}
        <div className="p-0">
          <Link href={url || "#"}>
            <img 
              src={program.image} 
              alt={name}
              className="w-full h-auto cursor-pointer hover:opacity-90 transition-opacity"
            />
          </Link>
        </div>
      </div>
      
      {/* Description Section - Outside the card but below the image */}
      <div className="p-6 bg-white dark:bg-dark">
        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
          {content}
        </p>
        {url && (
          <div className="mt-4">
            <Link 
              href={url}
              className="inline-flex items-center px-4 py-2 bg-primary text-white text-sm font-medium rounded-lg hover:bg-opacity-90 transition-colors"
            >
              Selengkapnya
              <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default SingleProgram;