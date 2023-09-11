var ctx = document.getElementById("myChart").getContext("2d");
var earning = document.getElementById("earning").getContext("2d");

var myChart = new Chart(ctx, {
  type: "polarArea",
  data: {
    labels: ["Facebook", "Instagram", "Website"],
    datasets: [
      {
        label: "",
        data: [1650, 1352, 2000],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});

var myChart = new Chart(earning, {
  type: "bar",
  data: {
    labels: [
      "January",
      "February",
      "March",
      "April",
      "June",
      "July",
      "August",
      "September",
      "November",
      "December",
    ],
    datasets: [
      {
        label: "Earning",
        data: [
          1200, 1600, 3000, 1900, 2150, 5300, 2930, 3650, 5500, 8000, 7800,
          12000,
        ],
        backgroundColor: [
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
          "rgba(255, 99, 132, 0.5)",
          "rgba(54, 162, 235, 0.5)",
          "rgba(255, 206, 86, 0.5)",
          "rgba(75, 192, 192, 0.5)",
          "rgba(153, 102, 255, 0.5)",
          "rgba(255, 159, 64, 0.5)",
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
