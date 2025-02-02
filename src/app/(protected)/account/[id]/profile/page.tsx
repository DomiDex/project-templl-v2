import { Breadcrumb } from '@/components/ui/Breadcrumb';
import { Container } from '@/components/ui/container';
import { Section } from '@/components/ui/section';

export default function page() {
  const breadcrumbItems = [
    { label: 'Account', href: '/account' },
    { label: 'Profile', href: '/account/profile' },
  ];
  return (
    <Section padding='lg'>
      <Container size='lg'>
        <Breadcrumb items={breadcrumbItems} className='mb-6' />

        <div className='max-w-2xl '>
          <h1 className='text-4xl font-bold text-gray-900 dark:text-gray-50 mb-8'>
            Profile
          </h1>
        </div>
      </Container>
    </Section>
  );
}
