import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistroy } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";
import { useEffect } from "react";

interface ICoinID {
  coinId: string;
}

interface IHistroical {
  time_open: number;
  time_close: number;
  open: string;
  high: string;
  low: string;
  close: string;
  volume: string;
  market_cap: number;
}

function Chart() {
  const { coinId } = useOutletContext<ICoinID>();
  const isDark = useRecoilValue(isDarkAtom);

  const { isLoading, data } = useQuery<IHistroical[]>(["ohlcv", coinId], () =>
    fetchCoinHistroy(coinId)
  );
  const formatDate = (time: number) => {
    const date = new Date(+time * 1000);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    // const year = date.getFullYear() % 100;
    // const formattedDate = `${day} ${month} ${year}`;
    const formattedDate = `${day} ${month}`;

    return formattedDate;
  };
  useEffect(() => console.log(data), [data]);

  return (
    <h1>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              data:
                data?.map((item) => ({
                  x: formatDate(item.time_open),
                  y: [item.open, item.high, item.low, item.close],
                })) ?? [],
            },
          ]}
          options={{
            theme: {
              mode: isDark ? "dark" : "light",
            },
            chart: {
              height: 300,
              width: 500,
              toolbar: { show: false },
              background: "transparent",
            },
            xaxis: {
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
            },
            colors: ["red"],
            tooltip: {
              y: {
                formatter: (value) => `$ ${value.toFixed(1)}`,
              },
            },
            yaxis: {
              labels: { show: false },
            },
            grid: { show: false },
            stroke: {
              curve: "smooth",
              width: 4,
            },
          }}
        />
      )}
    </h1>
  );
}

export default Chart;
