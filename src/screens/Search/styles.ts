import styled from 'styled-components/native';
import FontAwesome from 'react-native-vector-icons/FontAwesome'

export const Container = styled.SafeAreaView`
  flex: 1;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  padding-bottom: 16px;
`;

export const Title = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.white};
`;