import styled from 'styled-components/native';

export const Container = styled.View``;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
  margin: 32px 0 16px 16px;
`;

export const TrendingMovieList = styled.FlatList.attrs({
  horizontal: true,
  contentContainerStyle: { paddingHorizontal: 16 } 
})``;

export const ImageMovie = styled.Image`
  width: 120px;
  height: 180px;
  border-radius: 4px;
`;

export const Separator = styled.View`
  width: 8px;
`;