/* eslint-disable react/no-unescaped-entities */
import { Dispatch, FormEvent, SetStateAction, useState } from 'react';
import * as Styled from './styles';
import { Heading } from '../Heading';
import { Roboto } from 'next/font/google';
import React from 'react';
import { Input } from '../Input';
import { Button } from '../Button';
import { ButtonContainer } from '../Login/styles';
import { PostProps } from '../Post';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export type CreatePostProps = {
  setPosts: Dispatch<SetStateAction<PostProps[]>>;
  username: string;
};

export type NewPost = {
  username: string;
  title: string;
  content: string;
};

export const CreatePost = ({ username, setPosts }: CreatePostProps) => {
  const [newPost, setNewPost] = useState<NewPost>({
    username,
    title: '',
    content: '',
  });

  const handleSubmit = async () => {
    const data = await fetch('https://dev.codeleap.co.uk/careers/', {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(newPost),
    });
    if (data.ok) {
      const res = await fetch('https://dev.codeleap.co.uk/careers/');
      const data = await res.json();
      setPosts(data.results);
      setNewPost({ username, title: '', content: '' });
      return;
    }
    alert("We couldn't create a new post.");
  };

  return (
    <Styled.Wrapper>
      <Heading as="h2" margin="15px 0px">
        What's on your mind?
      </Heading>
      <label htmlFor="Input-Name" className={roboto.className}>
        Title
      </label>
      <Input
        id={'Input-Title'}
        placeholder="Type the title"
        value={newPost?.title}
        onChange={(e) => {
          setNewPost((postContent) => {
            return { ...postContent, title: e.target.value };
          });
        }}
        width={'100%'}
        height={'32px'}
        margin={'5px 0px 20px 0px'}
        className={roboto.className}
      ></Input>
      <label htmlFor="Input-Content" className={roboto.className}>
        Content
      </label>
      <Input
        id={'Input-Content'}
        placeholder="Type the Content"
        value={newPost?.content}
        onChange={(e) => {
          setNewPost((postContent) => {
            return { ...postContent, content: e.target.value };
          });
        }}
        width={'100%'}
        height={'74px'}
        className={roboto.className}
        type="textarea"
      ></Input>
      <ButtonContainer>
        <Button
          reverse={true}
          width={'111px'}
          height={'32px'}
          margin={'15px 0px 0px 0px'}
          disabled={
            newPost.content === '' || newPost.title === '' ? true : false
          }
          onClick={(e: FormEvent) => {
            e.preventDefault();
            if (
              newPost.title === '' ||
              newPost.content === '' ||
              newPost.username === ''
            ) {
              return;
            }
            handleSubmit();
            return;
          }}
        >
          Create
        </Button>
      </ButtonContainer>
    </Styled.Wrapper>
  );
};
