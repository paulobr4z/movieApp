import styled from 'styled-components/native';
import { Dimensions } from 'react-native'

const win = Dimensions.get('window');

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Poster = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: ${Math.round(win.width)}px;
  height: ${Math.round((win.width / 2) * 3)}px;
`;

export const Section = styled.View`
  margin-bottom: 16px;
`;