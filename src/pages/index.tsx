import { PostProps } from '@/Components/Post';
import { HomeTemplate } from '@/Templates/HomeTemplate';

import { GetServerSidePropsContext } from 'next';
import { getSession } from 'next-auth/react';
import Head from 'next/head';
export type HomeProps = {
  username: string;
  data: PostProps[];
  next: string;
};

export default function Home({ username, data, next }: HomeProps) {
  return (
    <>
      <Head>
        <title>CodeLeap Network</title>
        <meta name="description" content="Create and read posts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <HomeTemplate
          username={username}
          data={data}
          next={next}
        ></HomeTemplate>
      </main>
    </>
  );
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await getSession(context);
  const res = await fetch('https://dev.codeleap.co.uk/careers/');
  const data = await res.json();
  if (!session) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {
      username: session.user?.name,
      data: data.results,
      next: data.next,
    },
  };
}
