import express from "express";
import produtoRoutes from "./routes/produtosRoutes.js";

const app = express();
const PORT = 3000;
app.use(express.json());
app.use('/produtos', produtoRoutes);

app.get("/", (req, res) => {
    res.status(200).send("Bem vindo ao API do catálogo");
});

app.listen(PORT, () => {
    console.log("Servidor rodando");
});