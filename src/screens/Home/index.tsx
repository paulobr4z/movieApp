import React, { useEffect, useState } from 'react';
import { Movies } from '../../types/movies';

import { api } from '../../services/api';
import { API_KEY } from '@env'

import {
  Container,
  Poster,
} from './styles';

export function Home() {
  const [movies, setMovies] = useState<Movies>();

  console.log(API_KEY)

  useEffect(() => {
    async function getMovie() {
      const response = await api(`trending/all/week?api_key=${API_KEY}&language=pt-br`);
      setMovies(response.data.results);
      console.log(response)
    };

    getMovie();
  }, []);

  return (
    <Container>
      <Poster source={{ uri: "https://image.tmdb.org/t/p/original/h4WLN3cmEjCsH1fNGRfvGV6IPBX.jpg" }} />   
    </Container>
  );
}