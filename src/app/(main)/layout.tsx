import MainHeader from '@/components/layout/MainHeader';

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <MainHeader />
      {children}
    </>
  );
}
