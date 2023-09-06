import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { getCast } from 'services/API';
import { List, Subtitle, Text, Title } from './Cast.styled';
import image from '../../assets/images/profile.png';

const Cast = () => {
  const { movieId } = useParams();
  const [actors, setActors] = useState([]);
  const posterUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    const fetchCast = async () => {
      try {
        const cast = await getCast(movieId);
        const actors = cast.map(({ id, character, profile_path, name }) => ({
          id,
          character,
          profile_path,
          name,
        }));
        setActors(actors);
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
    fetchCast();
  }, [movieId]);

  return (
    <List>
      {actors.map(({ id, name, profile_path, character }) => (
        <li key={id}>
          <img
            src={profile_path ? `${posterUrl}${profile_path}` : image}
            alt={name}
          />
          <div>
            <Title>{name}</Title>
            <Subtitle>Character</Subtitle>
            <Text>{character}</Text>
          </div>
        </li>
      ))}
      <Toaster />
    </List>
  );
};

export default Cast;
