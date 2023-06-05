import { Card } from '../Card';
import * as Styled from './styles';
import { SelectIcon } from './utils/SelectIcon';
import { v4 as uuid } from 'uuid';
export type theme = {
  name: string;
  icon: string;
};
export type CardsProps = {
  themes?: theme[];
  selectedTheme: string;
  // eslint-disable-next-line no-unused-vars
  handleCardClick: (theme: string) => void;
};

export const Cards = ({
  themes = [
    { icon: 'default', name: 'Padrão' },
    { icon: 'game', name: 'Jogos' },
  ],
  selectedTheme,
  handleCardClick,
}: CardsProps) => {
  return (
    <Styled.Wrapper>
      {themes.map((theme) => {
        const selected = selectedTheme === theme.icon;
        const icon = SelectIcon(theme.icon);
        return (
          <Card
            key={uuid()}
            theme={theme.name}
            Icon={icon}
            onClick={() => handleCardClick(theme.icon)}
            selected={selected}
          ></Card>
        );
      })}
    </Styled.Wrapper>
  );
};
