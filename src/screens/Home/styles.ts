import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import { Dimensions } from 'react-native'

const win = Dimensions.get('window');

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.primary};
  flex-direction: row;
`;

export const Poster = styled.Image.attrs({
  resizeMode: 'cover'
})`
  width: ${Math.round(win.width)}px;
  height: ${Math.round((win.width / 2) * 3)}px;
`;