import { NextPage } from 'next';
import { useRouter } from 'next/router';
import MainLayout from '../../app/layouts/MainLayout';

const Person: NextPage = () => {
  const router = useRouter();
  console.log(router);
  return <MainLayout>person</MainLayout>;
};

export default Person;
