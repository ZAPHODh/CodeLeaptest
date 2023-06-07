import {
  Dispatch,
  FormEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from 'react';
import { Wrapper } from '../DeleteModal/styles';
import * as Styled from './styles';
import { useEditModal } from '@/context/EditModalContext';
import { Heading } from '../Heading';
import { PostProps } from '../Post';
import { Input } from '../Input';
import { ButtonContainer } from '../Login/styles';
import { Button } from '../Button';
import { Roboto } from 'next/font/google';

export type EditModalProps = {
  setPosts: Dispatch<SetStateAction<PostProps[]>>;
};
const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const EditModal = ({ setPosts }: EditModalProps) => {
  const {
    showEditModal,
    setShowEditModal,
    selectedPostEdidId,
    setSelectedPostEdidId,
  } = useEditModal();
  const [editPost, setEditPost] = useState<{
    title: string;
    content: string;
  }>({
    title: '',
    content: '',
  });
  const modalRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowEditModal(false);
        setSelectedPostEdidId(null);
      }
    };
    if (showEditModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [
    showEditModal,
    setShowEditModal,
    selectedPostEdidId,
    setSelectedPostEdidId,
  ]);
  const handleSubmit = async () => {
    console.log(editPost);
    const res = await fetch(
      `https://dev.codeleap.co.uk/careers/${selectedPostEdidId}/`,
      {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(editPost),
      },
    );
    if (!res.ok) {
      alert('There was an error in the editing of the post.');
    }
    const fetchingNewPosts = await fetch('https://dev.codeleap.co.uk/careers/');
    const newPosts = await fetchingNewPosts.json();
    setPosts(newPosts.results);
    setShowEditModal(false);
    setSelectedPostEdidId(null);
    setEditPost({ title: '', content: '' });
  };
  return (
    <Wrapper visible={showEditModal}>
      <Styled.Form ref={modalRef}>
        <Heading as="h2" margin="15px 0px">
          Edit item
        </Heading>
        <label htmlFor="Input-Name" className={roboto.className}>
          Title
        </label>
        <Input
          id={'Input-Title'}
          placeholder="Type the title"
          value={editPost?.title}
          onChange={(e) => {
            setEditPost((postContent) => {
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
          value={editPost?.content}
          onChange={(e) => {
            setEditPost((postContent) => {
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
            width={'111px'}
            height={'32px'}
            margin={'15px 0px 0px 0px'}
            onClick={(e: FormEvent) => {
              e.preventDefault();
              setShowEditModal(false);
              setSelectedPostEdidId(null);
            }}
          >
            Cancel
          </Button>
          <Button
            reverse={true}
            width={'111px'}
            height={'32px'}
            margin={'15px 0px 0px 15px'}
            bg="#47B960"
            disabled={
              editPost.content === '' || editPost.title === '' ? true : false
            }
            onClick={(e: FormEvent) => {
              e.preventDefault();
              if (
                editPost.title === '' ||
                editPost.content === '' ||
                selectedPostEdidId === null
              )
                return;
              handleSubmit();
              return;
            }}
          >
            Edit
          </Button>
        </ButtonContainer>
      </Styled.Form>
    </Wrapper>
  );
};
