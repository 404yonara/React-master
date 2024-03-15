import { useQuery } from "react-query";
import { useLocation, useOutletContext } from "react-router-dom";
import styled from "styled-components";

interface PriceDataOfUSD {
  ath_date: string;
  ath_price: number;
  market_cap: number;
  market_cap_change_24h: number;
  percent_change_1h: number;
  percent_change_1y: number;
  percent_change_6h: number;
  percent_change_7d: number;
  percent_change_12h: number;
  percent_change_15m: number;
  percent_change_24h: number;
  percent_change_30d: number;
  percent_change_30m: number;
  percent_from_price_ath: number;
  price: number;
  volume_24h: number;
  volume_24h_change_24h: number;
}

const Container = styled.div`
  padding: 0px 20px;
  max-width: 480px;
  margin: 0 auto;
`;

const Overview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
  margin-bottom: 10px;
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

interface ICoinID {
  coinId: string;
}

function Price() {
  const { coinId } = useOutletContext<ICoinID>();
  const { state } = useLocation();
  const priceData = state as PriceDataOfUSD;
  console.log(priceData);

  return (
    <Container>
      <Overview>
        <OverviewItem>
          <span>price change</span>
          <span>15 minutes ago</span>
        </OverviewItem>
        <OverviewItem>
          <span>percent</span>
          <span>{priceData.percent_change_15m}</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>price change</span>
          <span>1 hour ago</span>
        </OverviewItem>
        <OverviewItem>
          <span>percent</span>
          <span>{priceData.percent_change_1h}</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>price change</span>
          <span>24 hour ago</span>
        </OverviewItem>
        <OverviewItem>
          <span>percent</span>
          <span>{priceData.percent_change_24h}</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>price change</span>
          <span>7 days ago</span>
        </OverviewItem>
        <OverviewItem>
          <span>percent</span>
          <span>{priceData.percent_change_7d}</span>
        </OverviewItem>
      </Overview>
      <Overview>
        <OverviewItem>
          <span>price change</span>
          <span>30 days ago</span>
        </OverviewItem>
        <OverviewItem>
          <span>percent</span>
          <span>{priceData.percent_change_30d}</span>
        </OverviewItem>
      </Overview>
    </Container>
  );
}

export default Price;
