import { useState } from 'react';
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { getReviews } from 'services/API';
import { Item, Subscript, Wrapper } from './Reviews.styled';
import reviewsImg from '../../assets/images/reviews.png';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const reviewsList = await getReviews(movieId);
        const reviews = reviewsList.map(({ author, content, id }) => ({
          author,
          content,
          id,
        }));
        setReviews(reviews);
      } catch (error) {
        toast.error(
          'Oops, something went wrong. Please try reloading the page.',
          {
            style: {
              borderRadius: '10px',
              background: 'var(--bg-color)',
              color: 'var(--main-color)',
              textAlign: 'center',
              width: '300px',
            },
          }
        );
      }
    };
    fetchReviews(movieId);
  }, [movieId]);
  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(({ id, content, author }) => (
          <Item key={id}>
            <p>{content}</p>
            <Subscript>{author}</Subscript>
          </Item>
        ))
      ) : (
        <Wrapper>
          <img src={reviewsImg} alt="No reviews" />
          <p>No reviews for this movie</p>
        </Wrapper>
      )}
      <Toaster />
    </ul>
  );
};

export default Reviews;
