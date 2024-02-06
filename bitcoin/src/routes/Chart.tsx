import { useQuery } from "react-query";
import { useOutletContext } from "react-router-dom";
import { fetchCoinHistroy } from "../api";
import ApexChart from "react-apexcharts";
import { useRecoilValue } from "recoil";
import { isDarkAtom } from "../atoms";

interface ICoinID {
  coinId: string;
}

interface IHistroical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}

interface IdataForSeries {
  x: Date;
  y: number[];
}

type IseriesForChart = {
  data: {
    x: Date;
    y: number[];
  }[];
}[];

function Chart() {
  const { coinId } = useOutletContext<ICoinID>();
  const isDark = useRecoilValue(isDarkAtom);

  const { isLoading, data } = useQuery<IHistroical[]>(["ohlcv", coinId], () =>
    fetchCoinHistroy(coinId)
  );
  const formatDate = (time: string) => {
    const date = new Date(+time * 1000);

    const day = date.getDate();
    const month = date.toLocaleString("en-US", { month: "short" });
    const year = date.getFullYear() % 100;
    // const formattedDate = `${day} ${month} ${year}`;
    const formattedDate = `${day} ${month}`;

    return formattedDate;
  };

  return (
    <h1>
      {isLoading ? (
        "Loading chart..."
      ) : (
        <ApexChart
          type="line"
          series={[
            {
              name: "close price",
              data: data?.map((item) => item.close) ?? [],
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
              categories: data?.map((item) => formatDate(item.time_close)),
              labels: { show: false },
              axisBorder: { show: false },
              axisTicks: { show: false },
            },
            fill: {
              type: "gradient",
              gradient: { gradientToColors: ["blue"], stops: [0, 100] },
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
        // <ApexChart
        //   type="candlestick"
        //   series={series}
        //   options={{
        //     chart: {
        //       type: "candlestick",
        //       height: 350,
        //     },
        //     title: {
        //       text: "CandleStick Chart",
        //       align: "left",
        //     },
        //     xaxis: {
        //       type: "datetime",
        //     },
        //     yaxis: {
        //       tooltip: {
        //         enabled: true,
        //       },
        //     },
        //   }}
        // />
      )}
    </h1>
  );
}

export default Chart;
