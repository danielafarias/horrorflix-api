const express = require("express");

const server = express();

server.get("/movies", (req, res) => {
  // /movies?test=testando
  const testQuery = req.query.test;

  return res.json([
    {
      backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
      id: 631842,
      overview:
        "Durante as férias em uma cabana remota, uma jovem e seus pais são feitos reféns por quatro estranhos armados que exigem que a família faça uma escolha impensável para evitar o apocalipse. Com acesso limitado ao mundo exterior, a família deve decidir no que acredita antes que tudo esteja perdido.",
      poster_path: "/xtLEm7icyupihsdhUYXJdQ7sKFo.jpg",
      title: "Batem à Porta",
      vote_average: 6.4,
      query: `${testQuery}`,
    },
  ]);
});

server.get("/movies/:id", (req, res) => {
// /movies/631842
  const id = req.params.id;

  return res.json(
    {
      backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
      id,
      overview:
        "Durante as férias em uma cabana remota, uma jovem e seus pais são feitos reféns por quatro estranhos armados que exigem que a família faça uma escolha impensável para evitar o apocalipse. Com acesso limitado ao mundo exterior, a família deve decidir no que acredita antes que tudo esteja perdido.",
      poster_path: "/xtLEm7icyupihsdhUYXJdQ7sKFo.jpg",
      title: "Batem à Porta",
      vote_average: 6.4,
    },
  );
});

server.listen(3000);
