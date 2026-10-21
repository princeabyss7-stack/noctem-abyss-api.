const http = require("http");

const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "application/json; charset=utf-8");
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    res.writeHead(204);
    return res.end();
  }

  if (req.url === "/api/check") {
    res.writeHead(200);
    return res.end(JSON.stringify({
      service: "SHADOW NOCTEM ABYSS",
      status: "unknown",
      message: "Le statut WhatsApp ne peut pas encore être vérifié. Aucune source officielle n'est connectée."
    }));
  }

  res.writeHead(200);
  res.end(JSON.stringify({
    service: "SHADOW NOCTEM ABYSS API",
    online: true
  }));
});

server.listen(process.env.PORT || 3000, "0.0.0.0", () => {
  console.log("SHADOW NOCTEM ABYSS API démarrée");
});
