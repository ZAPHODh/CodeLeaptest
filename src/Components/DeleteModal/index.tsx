import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import { Button } from '../Button';
import { Heading } from '../Heading';
import * as Styled from './styles';
import { useModal } from '@/context/ModalContext';
import { PostProps } from '../Post';
export type DeleteModalProps = {
  setPosts: Dispatch<SetStateAction<PostProps[]>>;
};
export const DeleteModal = ({ setPosts }: DeleteModalProps) => {
  const { showModal, setShowModal, selectedPostId, setSelectedPostId } =
    useModal();
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClick = async () => {
    const res = await fetch(
      `https://dev.codeleap.co.uk/careers/${selectedPostId}/`,
      {
        method: 'DELETE',
      },
    );

    if (res.ok) {
      setPosts((posts) => posts.filter((post) => post.id !== selectedPostId));
      setShowModal(false);
    }
  };

  useEffect(() => {
    setShowModal(showModal);
  }, [showModal, setShowModal]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
        setSelectedPostId(null);
      }
    };
    if (showModal) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showModal, setShowModal, setSelectedPostId]);
  return (
    <Styled.Wrapper visible={showModal} id="Delete-Background">
      <Styled.Modal ref={modalRef}>
        <Heading as="h6" fontSize={'22px'} margin="20px">
          Are you sure you want to delete this item?
        </Heading>
        <Styled.Buttons>
          <Button
            // reverse={true}
            margin={'10px'}
            height={'32px'}
            width={'120px'}
            bg={'#999999'}
            onClick={() => {
              setShowModal(false);
              setSelectedPostId(null);
            }}
          >
            Cancel
          </Button>
          <Button
            width={'120px'}
            reverse={true}
            onClick={handleClick}
            height={'32px'}
            bg="#FF5151"
          >
            Delete
          </Button>
        </Styled.Buttons>
      </Styled.Modal>
    </Styled.Wrapper>
  );
};
