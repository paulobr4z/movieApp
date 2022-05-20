import React, { useEffect, useState } from 'react';
import { IMovies } from '../../types/movies';

import { getPosterImage } from '../../services/movies';

import {
  Container,
  Poster,
  Section,
} from './styles';
import { MoviesByCategory } from '../../components/MoviesByCategory';
import { Text } from 'react-native';

export function Home() {
  const [movies, setMovies] = useState<IMovies>();
  
  async function onGetPosterImage() {
    const response = await getPosterImage();
    setMovies(response);
  };

  async function onTrendingMovie() {
    const response = await getPosterImage();
    setMovies(response);
  };
  
  useEffect(() => {
    onGetPosterImage();
    onTrendingMovie()
  }, []);  

  return (
    <Container>
      <Poster source={{ uri: `https://image.tmdb.org/t/p/w500${movies?.poster_path}` }} />
      <Section>
        <MoviesByCategory
          title='Filmes da semana'
        />
        <MoviesByCategory
          title='Series da semana'
        />
      </Section>
    </Container>
  );
}