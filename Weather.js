


function fetchW(latitude, longtitude, locationName) {
    fetch(`https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longtitude}&current_weather=true`)
    .then(response => {
        if (!response.ok) {
            throw new Error("Error fetching posts: " + response.status);
        }
        return response.json();
    })
            .then(data => {
                const weather = data.current_weather;
                const article = document.getElementById(locationName);
                article.innerHTML = `
                    <h3>${locationName}</h3>
                    <p>Temperature: ${weather.temperature}</p>
                    <p>Windspeed: ${weather.windspeed} </p>
                    <p>Wind direction: ${weather.winddirection}</p>`;
                
            })
    }
    function locations() {
        console.log("locations");
        fetchW(35.6895, 139.6917, "Tokyo");
        fetchW(40.7128, -74.0060, "New York");
        fetchW(51.5074, -0.1278, "London");
        fetchW(-33.8688, 151.2093, "Sydney");
        fetchW(59.9139, 10.7522, "Oslo");
    }
    

locations();

setInterval(locations, 10000);