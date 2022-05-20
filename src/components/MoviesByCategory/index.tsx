import React, { useEffect, useState } from 'react';
import { ListRenderItem, ListRenderItemInfo, Text } from 'react-native';
import { getTrendingMovie } from '../../services/movies';
import { IMovies } from '../../types/movies';

import {
  Container,
  ImageMovie,
  Separator,
  Title,
  TrendingMovieList
} from './styles';

interface IMoviesByCategory {
  title: string;
}

export function MoviesByCategory({
  title = ''
}: IMoviesByCategory) {
  const [trendingMovie, setonTrendingMovie] = useState<IMovies[]>([]);
  
  useEffect(() => {
    async function onTrendingMovie() {
      const response = await getTrendingMovie();
      setonTrendingMovie(response);
    };

    onTrendingMovie()
  }, []);

  function renderItem({ item }: ListRenderItemInfo<IMovies>) {
    return <ImageMovie source={{ uri: `https://image.tmdb.org/t/p/w500${item?.poster_path}` }} />
  }

  return (
    <Container>
      <Title>{title}</Title>
      <TrendingMovieList
        data={trendingMovie}
        keyExtractor={( item: IMovies ) => item.id.toString()}
        renderItem={renderItem}
        ItemSeparatorComponent={Separator}
      />
    </Container>
  );
}