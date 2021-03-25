import Head from 'next/head';
import { Sample } from '../components/Sample';
import styled from 'styled-components';

export default function Home() {
  return (
    <Wrapper>
      <h1>hello world</h1>
      <Sample />
    </Wrapper>
  );
}
const Wrapper = styled.div`
  color: red;
`;
