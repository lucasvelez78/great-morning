let weather = {
  apiKey: "cd9c7ad5d800f54810ab3b0674f8b7c4",
  fetchWeather: function (city) {
    fetch(
      "https://api.openweathermap.org/data/2.5/weather?q=" +
        city +
        "&units=metric&appid=" +
        this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed);
    document.querySelector(".city").innerText = name;
    document.querySelector(".icon").src =
      "https://openweathermap.org/img/wn/" + icon + ".png";
    document.querySelector(".description").innerText = description;
    document.querySelector(".temp").innerText = temp + " °C";
    document.querySelector(".humidity").innerText =
      "Humidity: " + humidity + " %";
    document.querySelector(".wind").innerText =
      "Wind Speed: " + speed + " km/h";
    document.querySelector(".weather").classList.remove("loading");
  },
  search: function () {
    this.fetchWeather(document.querySelector(".search-bar").value);
  },
};

document.querySelector(".search-btn").addEventListener("click", function () {
  weather.search();
});

document
  .querySelector(".search-bar")
  .addEventListener("keyup", function (event) {
    if (event.key === "Enter") {
      weather.search();
    }
  });

let joke = {
  fetchJoke: function () {
    fetch("https://icanhazdadjoke.com/", {
      headers: {
        accept: "application/json",
      },
    })
      .then((response) => response.json())
      .then((data) => this.displayJoke(data));
  },
  displayJoke: function (data) {
    const { joke } = data;
    document.querySelector(".joke").innerText = joke;
  },
};

document.querySelector(".joke-btn").addEventListener("click", function () {
  joke.fetchJoke();
});
