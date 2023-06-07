import { CreatePost } from '@/Components/CreatePost';
import { Menu } from '@/Components/Menu';
import { HomeProps } from '@/pages';
import { useEffect, useRef, useState } from 'react';
import * as Styled from './styles';
import { Post, PostProps } from '@/Components/Post';
import { v4 as uuid } from 'uuid';
import { DeleteModal } from '@/Components/DeleteModal';
import { EditModal } from '@/Components/EditModal';
export const HomeTemplate = ({ username, data, next }: HomeProps) => {
  const [posts, setPosts] = useState(data.slice(0, 10));
  const [instancePostCount, setInstancePostCount] = useState(0);
  const [newPosts, setNewPosts] = useState<PostProps[]>();

  const instancePostCountRef = useRef(instancePostCount);
  useEffect(() => {
    const fetchMorePosts = async () => {
      const res = await fetch(next);
      const newData = await res.json();
      setNewPosts(newData.results);
      setInstancePostCount(0);
      instancePostCountRef.current = 0;
    };

    const moreOnePost = async () => {
      if (instancePostCountRef.current > 9) {
        await fetchMorePosts();
      }

      if (!newPosts) return;

      setPosts((prevPosts) => [
        ...prevPosts,
        newPosts[instancePostCountRef.current],
      ]);
      setInstancePostCount((prev) => prev + 1);
      instancePostCountRef.current += 1;
    };

    const handleScroll = () => {
      if (
        document.documentElement.scrollHeight -
          (window.innerHeight + document.documentElement.scrollTop) <
        100
      ) {
        moreOnePost();
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [next, newPosts]);
  useEffect(() => {
    (async () => {
      const res = await fetch(next);
      const newData = await res.json();
      setNewPosts(newData.results);
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <Styled.Wrapper>
      <DeleteModal setPosts={setPosts}></DeleteModal>
      <EditModal setPosts={setPosts}></EditModal>
      <Menu username={username}></Menu>
      <CreatePost username={username} setPosts={setPosts}></CreatePost>
      {posts.map((post) => (
        <Post
          content={post.content}
          created_datetime={post.created_datetime}
          id={post.id}
          title={post.title}
          user={username}
          username={post.username}
          key={uuid()}
        />
      ))}
    </Styled.Wrapper>
  );
};
