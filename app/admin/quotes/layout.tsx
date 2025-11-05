import AdminLogoutButton from "@/components/logout/logout";

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function AdminQuotesLayout({ children }: { children: React.ReactNode }) {
  return <>
  <AdminLogoutButton />
  {children}
  </>;
}