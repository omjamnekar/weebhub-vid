var options = {
  series: [44, 33, 54, 45],
  chart: {
    width: 380,
    type: "pie",
  },
  colors: ["#f89b25", "#f89b25", "#f89b25", "#f89b25"],
  fill: {
    type: "image",
    opacity: 0.85,
    image: {
      src: [
        "../img/jjk.webp",
        "../img/fairytail.webp",
        "../img/mob.jpg",
        "../img/titan.webp",
      ],
      width: 25,
      imagedHeight: 25,
    },
  },
  stroke: {
    width: 4,
  },
  dataLabels: {
    enabled: true,
    style: {
      colors: ["#111"],
    },
    background: {
      enabled: true,
      foreColor: "#fff",
      borderWidth: 0,
    },
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        chart: {
          width: 200,
        },
        legend: {
          position: "bottom",
        },
      },
    },
  ],
};

var chart = new ApexCharts(document.querySelector("#chart"), options);
chart.render();
