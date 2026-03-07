import { Metadata } from "next";
import AdminShell from "@/components/Admin/AdminShell";

export const metadata: Metadata = {
  title: "Admin Dashboard | PKBM Kejuruan terbuka",
  description: "Admin dashboard for managing PKBM Kejuruan terbuka content",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <AdminShell>
      {children}
    </AdminShell>
  );
}
