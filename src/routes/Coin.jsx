import styled from "styled-components";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router";

const Title = styled.header`
  font-size: 48px;
  color: #9c88ff;
  text-align: center;
`;

const Container = styled.div`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Loader = styled.span`
  text-align: center;
  display: block;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

const OverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

const Description = styled.p`
  margin: 20px 0;
`;

function Coin() {
  const [loading, setLoading] = useState(true);
  const [coin, setCoin] = useState({});
  const [info, setInfo] = useState([]);
  const { coinId } = useParams();

  const location = useLocation();
  const name = location.state?.name; // 안전 처리

  // 코인 정보 가져오기
  useEffect(() => {
    fetch(`https://api.coinpaprika.com/v1/coins/${coinId}`)
      .then((response) => response.json())
      .then((data) => setCoin(data));
  }, [coinId]);

  // 시세 정보 가져오기
  useEffect(() => {
    fetch(`https://ohlcv-api.nomadcoders.workers.dev?coinId=${coinId}`)
      .then((response) => response.json())
      .then((data) => {
        setInfo(data);
        setLoading(false);
      });
  }, [coinId]);

  return (
    <Container>
      <Title>{name || "Loading..."}</Title>

      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <>
          <Overview>
            <OverviewItem>
              <span>Rank:</span>
              <span>{coin?.rank}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Symbol:</span>
              <span>{coin?.symbol}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Open Source</span>
              <span>{coin?.open_source ? "Yes" : "No"}</span>
            </OverviewItem>
          </Overview>

          <Description>{coin?.description}</Description>

          <Overview>
            <OverviewItem>
              <span>High:</span>
              <span>{info[0]?.high}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Low:</span>
              <span>{info[0]?.low}</span>
            </OverviewItem>
            <OverviewItem>
              <span>Close:</span>
              <span>{info[0]?.close}</span>
            </OverviewItem>
          </Overview>
        </>
      )}
    </Container>
  );
}

export default Coin;
