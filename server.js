const express = require("express");
const fetch = require("node-fetch");

const app = express();

const API_KEY = "curl --request GET \
	--url https://cricbuzz-cricket.p.rapidapi.com/mcenter/v1/40381/hscard \
	--header 'Content-Type: application/json' \
	--header 'x-rapidapi-host: cricbuzz-cricket.p.rapidapi.com' \
	--header 'x-rapidapi-key: 8a77def33emshfc41788a513d193p13ce83jsn478050f8c31a'
app.get("/", (req, res) => {
  res.send("Server Running ✅");
});"

app.get("/api", async (req, res) => {
  try {
    const response = await fetch("https://cricbuzz-cricket.p.rapidapi.com/matches/v1/live", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "cricbuzz-cricket.p.rapidapi.com",
        "x-rapidapi-key": API_KEY
      }
    });

    const data = await response.json();
    res.json(data);

  } catch {
    res.send("Error");
  }
});

app.listen(3000);
