"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

// export default function AdminLayout({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const router = useRouter();

//   useEffect(() => {
//     const auth = localStorage.getItem("admin_auth");
//     if (!auth) router.push("/admin/login");
//   }, [router]);

//   return <>{children}</>;
// }
export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="min-h-screen bg-[#5a011a] text-white">{children}</div>;
}
