import Link from "next/link";
import { clearAdminAuthCookie } from "@/lib/auth";

export default function AdminPage() {
  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 hidden md:flex md:flex-col">
        <div className="h-16 flex items-center px-6 border-b border-gray-200 dark:border-gray-700">
          <h1 className="text-lg font-semibold text-gray-900 dark:text-white">
            PKBM Kejuruan Terbuka
          </h1>
        </div>

        <nav className="flex-1 px-4 py-6 space-y-2">
          <Link
            href="/admin"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-md bg-gray-900 text-white dark:bg-white dark:text-gray-900"
          >
            Dashboard
          </Link>

          <Link
            href="/admin/blogs"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Blog Management
          </Link>

          <Link
            href="/admin/media"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Media Library
          </Link>

          <Link
            href="/admin/analytics"
            className="flex items-center px-4 py-2 text-sm font-medium rounded-md text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition"
          >
            Analytics
          </Link>
        </nav>

        <div className="p-4 border-t border-gray-200 dark:border-gray-700">
          <form
            action={async () => {
              "use server";
              await clearAdminAuthCookie();
            }}
          >
            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md text-sm font-medium transition"
            >
              Logout
            </button>
          </form>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Topbar */}
        <header className="h-16 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between px-6">
          <h2 className="text-lg font-semibold text-gray-900 dark:text-white">
            Dashboard
          </h2>

          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block px-3 py-2 text-sm border border-gray-300 dark:border-gray-600 rounded-md bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-white"
            />
            <div className="h-8 w-8 rounded-md bg-gray-300 dark:bg-gray-600" />
          </div>
        </header>

        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-md border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Posts
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-2">
                0
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-md border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Active Users
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-2">
                0
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 p-6 rounded-md border border-gray-200 dark:border-gray-700">
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Views
              </p>
              <p className="text-2xl font-semibold text-gray-900 dark:text-white mt-2">
                0
              </p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
