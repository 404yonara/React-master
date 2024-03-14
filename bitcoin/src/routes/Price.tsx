import { useQuery } from "react-query";
import { useLocation, useOutletContext } from "react-router-dom";
import styled from "styled-components";
import { Container, Overview, OverviewItem } from "./Coin";

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
