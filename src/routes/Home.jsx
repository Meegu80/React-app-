import styled from "styled-components";
import { Link } from "react-router";
import { useEffect, useState } from "react";

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Header = styled.header`
  height: 15dvh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 48px;
  color: #9c88ff;
`;

const CoinList = styled.ul``;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.color};
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    padding: 20px;
    display: block;
  }
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

function Home() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://api.coinpaprika.com/v1/coins")
      .then((response) => response.json())
      .then((data) => {
        setCoins(data);
        setLoading(false);
      });
  }, []);

  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins.map((item) => (
            <Coin key={item.id}>
              <Link to={`/${item.id}`} state={{ name: item.name }}>
                {item.name} →
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Home;
