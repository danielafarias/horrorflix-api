import { Request, Response } from "express";

const express = require("express");

const server = express();

server.use(express.json());

const movies = [
  {
    backdrop_path: "/AsEgGeccI32SwMBkxpwhOkhbzmF.jpg",
    id: 1,
    overview:
      "Décadas atrás, a URSS desenvolveu tubarões impossíveis de matar e os lançou à lua. Hoje, uma equipe de astronautas americanos enfrentará a luta de suas vidas.",
    poster_path: "/v5CfpzxoJDkZxjZAizClFdlEF0U.jpg",
    title: "Shark Side of the Moon",
    vote_average: 5.3,
  },
  {
    backdrop_path: "/22z44LPkMyf5nyyXvv8qQLsbom.jpg",
    id: 2,
    overview:
      "Durante as férias em uma cabana remota, uma jovem e seus pais são feitos reféns por quatro estranhos armados que exigem que a família faça uma escolha impensável para evitar o apocalipse. Com acesso limitado ao mundo exterior, a família deve decidir no que acredita antes que tudo esteja perdido.",
    poster_path: "/xtLEm7icyupihsdhUYXJdQ7sKFo.jpg",
    title: "Batem à Porta",
    vote_average: 6.4,
  },
];

server.get("/movies", (req: Request, res: Response) => {
  return res.json(movies);
});

server.get("/movies/:id", (req: Request, res: Response) => {
  const id = req.params.id;

  return res.json(movies[Number(id)]);
});

server.post("/movies", (req: Request, res: Response) => {
  const { backdrop_path, id, overview, poster_path, title, vote_average } =
    req.body;

  movies.push({
    backdrop_path,
    id,
    overview,
    poster_path,
    title,
    vote_average,
  });

  return res.json(movies);
});

server.put("/movies/:id", (req: Request, res: Response) => {
    const id = req.params.id;

    const object =
      req.body;
  
    movies[Number(id)] = object;
  
    return res.json(movies);
  });

server.listen(3000);
