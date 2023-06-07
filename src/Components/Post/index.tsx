import { Heading } from '../Heading';
import * as Styled from './styles';
import { useEffect, useState } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { Description } from '../Description';
import { Tooltip } from '@mui/material';
import { useModal } from '@/context/ModalContext';
import { useEditModal } from '@/context/EditModalContext';
export type PostProps = {
  user: string;
  id: number;
  username: string;
  created_datetime: string;
  title: string;
  content: string;
};

export const Post = ({
  user,
  id,
  username,
  created_datetime,
  title,
  content,
}: PostProps) => {
  const { setShowModal, setSelectedPostId } = useModal();
  const { setShowEditModal, setSelectedPostEdidId } = useEditModal();
  const [isMine, setIsMine] = useState(false);
  const [minutes, setMinutes] = useState(0);
  const postedData = new Date(created_datetime);
  const currentData = new Date();
  const diffTime = currentData.getTime() - postedData.getTime();
  useEffect(() => {
    const calculatedMinutes = Math.floor(diffTime / (1000 * 60));
    setMinutes(calculatedMinutes);
  }, [diffTime]);
  useEffect(() => {
    if (user === username) {
      setIsMine(true);
    }
  }, [user, username]);
  const handleDelete = () => {
    setSelectedPostId(id);
    setShowModal(true);
  };
  const handleEdit = () => {
    setSelectedPostEdidId(id);
    setShowEditModal(true);
  };
  return (
    <Styled.Wrapper>
      <Styled.TitleContainer>
        <Heading as={'h3'} fontSize={'22px'} margin="0px 30px">
          {title}
        </Heading>
        {isMine && (
          <Styled.Buttons>
            <Tooltip title="Edit post">
              <Styled.Button onClick={handleEdit}>
                <EditIcon fontSize="inherit" />
              </Styled.Button>
            </Tooltip>
            <Tooltip title="Delete post">
              <Styled.Button onClick={handleDelete}>
                <DeleteForeverIcon fontSize="inherit" />
              </Styled.Button>
            </Tooltip>
          </Styled.Buttons>
        )}
      </Styled.TitleContainer>
      <Styled.InfoContainer>
        <div>@{username} </div>
        {minutes >= 60 ? (
          <div>{Math.floor(minutes / 60)} hours ago</div>
        ) : (
          <div>{minutes <= 0 ? 0 : minutes} minutes ago</div>
        )}
      </Styled.InfoContainer>
      <Description
        maxWidth="93%"
        color="#000000"
        father={`${username}-${title}`}
        fontSize="18px"
      >
        {content}
      </Description>
    </Styled.Wrapper>
  );
};
