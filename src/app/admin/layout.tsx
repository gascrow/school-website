import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Admin Dashboard | PKBM Intan",
  description: "Admin dashboard for managing PKBM Intan content",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {children}
    </div>
  );
}
