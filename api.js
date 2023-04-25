fetch("https://api.chucknorris.io/jokes/random")
    .then((response) => response.json())
    .then((data) => {
        // console.log(JSON.parse(data));
        var joke = data.value;
        console.log(joke);
    })
    .catch()

