let ohlc;
let date = new Date(1612040125 * 1000);
fetch(
  "https://api.coinpaprika.com/v1/coins/btc-bitcoin/ohlcv/historical?start=2020-12-24&end=2021-01-24"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (j) {
    ohlc = j;
    console.log(ohlc);
    console.log(ohlc[0].close);

    var options = {
      chart: {
        type: "candlestick",
      },
      series: [
        {
          data: [
            {
              // x: date.getDate() + "/" + date.getMonth() + 1+'/'+date.getFullYear(),
              x: new Date(ohlc[0].time_open),
              y: [ohlc[0].open, ohlc[0].high, ohlc[0].low, ohlc[0].close],
            },
            {
              x: new Date(ohlc[1].time_open),
              y: [ohlc[1].open, ohlc[1].high, ohlc[1].low, ohlc[1].close],
            },
            {
              x: new Date(ohlc[2].time_open),
              y: [ohlc[2].open, ohlc[2].high, ohlc[2].low, ohlc[2].close],
            },
            {
              x: new Date(ohlc[3].time_open),
              y: [ohlc[3].open, ohlc[3].high, ohlc[3].low, ohlc[3].close],
            },
            {
              x: new Date(ohlc[4].time_open),
              y: [ohlc[4].open, ohlc[4].high, ohlc[4].low, ohlc[4].close],
            },
            {
              x: new Date(ohlc[5].time_open),
              y: [ohlc[5].open, ohlc[5].high, ohlc[5].low, ohlc[5].close],
            },
            {
              x: new Date(ohlc[6].time_open),
              y: [ohlc[6].open, ohlc[6].high, ohlc[6].low, ohlc[6].close],
            },
            {
              x: new Date(ohlc[7].time_open),
              y: [ohlc[7].open, ohlc[7].high, ohlc[7].low, ohlc[7].close],
            },
            {
              x: new Date(ohlc[8].time_open),
              y: [ohlc[8].open, ohlc[8].high, ohlc[8].low, ohlc[8].close],
            },
            {
              x: new Date(ohlc[9].time_open),
              y: [ohlc[9].open, ohlc[9].high, ohlc[9].low, ohlc[9].close],
            },
            {
              x: new Date(ohlc[10].time_open),
              y: [ohlc[10].open, ohlc[10].high, ohlc[10].low, ohlc[10].close],
            },
            {
              x: new Date(ohlc[11].time_open),
              y: [ohlc[11].open, ohlc[11].high, ohlc[11].low, ohlc[11].close],
            },
            {
              x: new Date(ohlc[12].time_open),
              y: [ohlc[12].open, ohlc[12].high, ohlc[12].low, ohlc[12].close],
            },
            {
              x: new Date(ohlc[13].time_open),
              y: [ohlc[13].open, ohlc[13].high, ohlc[13].low, ohlc[13].close],
            },
            {
              x: new Date(ohlc[14].time_open),
              y: [ohlc[14].open, ohlc[14].high, ohlc[14].low, ohlc[14].close],
            },
            {
              x: new Date(ohlc[15].time_open),
              y: [ohlc[15].open, ohlc[15].high, ohlc[15].low, ohlc[15].close],
            },
            {
              x: new Date(ohlc[16].time_open),
              y: [ohlc[16].open, ohlc[16].high, ohlc[16].low, ohlc[16].close],
            },
            {
              x: new Date(ohlc[17].time_open),
              y: [ohlc[17].open, ohlc[17].high, ohlc[17].low, ohlc[17].close],
            },
            {
              x: new Date(ohlc[18].time_open),
              y: [ohlc[18].open, ohlc[18].high, ohlc[18].low, ohlc[18].close],
            },
            {
              x: new Date(ohlc[19].time_open),
              y: [ohlc[19].open, ohlc[19].high, ohlc[19].low, ohlc[19].close],
            },
            {
              x: new Date(ohlc[20].time_open),
              y: [ohlc[20].open, ohlc[20].high, ohlc[20].low, ohlc[20].close],
            },
            {
              x: new Date(ohlc[21].time_open),
              y: [ohlc[21].open, ohlc[21].high, ohlc[21].low, ohlc[21].close],
            },
            {
              x: new Date(ohlc[22].time_open),
              y: [ohlc[22].open, ohlc[22].high, ohlc[22].low, ohlc[22].close],
            },
            {
              x: new Date(ohlc[23].time_open),
              y: [ohlc[23].open, ohlc[23].high, ohlc[23].low, ohlc[23].close],
            },
            {
              x: new Date(ohlc[24].time_open),
              y: [ohlc[24].open, ohlc[24].high, ohlc[24].low, ohlc[24].close],
            },
            {
              x: new Date(ohlc[25].time_open),
              y: [ohlc[25].open, ohlc[25].high, ohlc[25].low, ohlc[25].close],
            },
            {
              x: new Date(ohlc[26].time_open),
              y: [ohlc[26].open, ohlc[26].high, ohlc[26].low, ohlc[26].close],
            },
            {
              x: new Date(ohlc[27].time_open),
              y: [ohlc[27].open, ohlc[27].high, ohlc[27].low, ohlc[27].close],
            },
            {
              x: new Date(ohlc[28].time_open),
              y: [ohlc[28].open, ohlc[28].high, ohlc[28].low, ohlc[28].close],
            },
            {
              x: new Date(ohlc[29].time_open),
              y: [ohlc[29].open, ohlc[29].high, ohlc[29].low, ohlc[29].close],
            },
            {
              x: new Date(ohlc[30].time_open),
              y: [ohlc[30].open, ohlc[30].high, ohlc[30].low, ohlc[30].close],
            },
          ],
        },
      ],
    };
    var chart = new ApexCharts(document.querySelector("#coin"), options);

    chart.render();
  });
