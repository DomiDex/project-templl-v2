import AccountHeader from '@/components/layout/AccountHeader';

export default function AccountLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <AccountHeader />
      <main className='container mx-auto py-6'>{children}</main>
    </>
  );
}
