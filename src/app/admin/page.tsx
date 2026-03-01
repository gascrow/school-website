import Link from "next/link";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-gray-light dark:bg-bg-color-dark py-16">
      <div className="container">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 text-center">
            <h1 className="text-4xl font-bold text-black dark:text-white mb-4">
              Admin Dashboard
            </h1>
            <p className="text-lg text-body-color dark:text-white/70">
              Manage your blog content with ease
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <Link
              href="/admin/blogs"
              className="group block rounded-lg border border-body-color/10 bg-white p-8 shadow-one dark:border-white/10 dark:bg-dark hover:shadow-two dark:hover:shadow-gray-dark transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    Blog Management
                  </h3>
                  <p className="text-body-color dark:text-white/70">
                    Create, edit, and manage your blog posts
                  </p>
                </div>
                <div className="text-4xl text-primary group-hover:scale-110 transition-transform duration-300">
                  ✏️
                </div>
              </div>
            </Link>
            
            <div className="group block rounded-lg border border-body-color/10 bg-white p-8 shadow-one dark:border-white/10 dark:bg-dark hover:shadow-two dark:hover:shadow-gray-dark transition-all duration-300 opacity-50 cursor-not-allowed">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-xl font-bold text-black dark:text-white mb-2">
                    Analytics (Coming Soon)
                  </h3>
                  <p className="text-body-color dark:text-white/70">
                    View blog statistics and insights
                  </p>
                </div>
                <div className="text-4xl text-gray-400">
                  📊
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}