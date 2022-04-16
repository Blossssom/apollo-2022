import React from "react";
import { gql } from "@apollo/client";
import { useQuery } from "@apollo/client";
import styled from "styled-components";
import Movie from "../components/Movie";

const GET_MOVIES = gql`
    {
        movies(limit:20, rating:0) {
        id
        medium_cover_image
        isLiked @client
        }
    }
    `;

    const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  `;
  
  const Header = styled.header`
    background-image: linear-gradient(-45deg, #d754ab, #fd723a);
    height: 45vh;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  `;
  
  const Title = styled.h1`
    font-size: 60px;
    font-weight: 600;
    margin-bottom: 20px;
  `;
  
  const Subtitle = styled.h3`
    font-size: 35px;
  `;
  
  const Loading = styled.div`
    font-size: 18px;
    opacity: 0.5;
    font-weight: 500;
    margin-top: 10px;
  `;
  
  const Movies = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
    width: 60%;
    position: relative;
    top: -50px;
  `;

const Home = () => {
    const { loading, data } = useQuery(GET_MOVIES);

    return (
        <Container>
            <Header>
                <Title>Apollo 2022</Title>
                <Subtitle>Study Graphql & Styled-components</Subtitle>
            </Header>
            
                {loading && <Loading>Loading...</Loading>}
            <Movies>
                {!loading &&
                data.movies &&
                data.movies.map(v => <Movie key={v.id} id={v.id} bg={v.medium_cover_image} isLiked={v.isLiked} />)}
            </Movies>
        </Container>
    );
};

export default Home;