// Pobierz token Discord
const token = await axios.get("https://discord.com/api/v8/users/@me/settings").then(response => response.data.token);

// Wyświetl token
console.log(token);
