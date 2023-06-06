import { LoginTemplate } from '@/Templates/LoginTemplate';
import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';

export default function LoginPage() {
  return <LoginTemplate></LoginTemplate>;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);

  if (session) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}
