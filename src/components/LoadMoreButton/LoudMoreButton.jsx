import { Button } from './LoudMoreButton.styled';

export const LoudMoreButton = ({ loadMore }) => {
  return (
    <Button onClick={loadMore} type="button">
      Load more
    </Button>
  );
};
