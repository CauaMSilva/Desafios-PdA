import dataBase from "../data/produtos.js";
import Produto from "../models/Produto.js";

class ProdutoController {
    listarTodos(req, res) {
        return res.status(200).json(dataBase);
    }
    buscarPorId(req, res) {
        const indice = dataBase.findIndex(elemento => elemento.id == req.params.id);
        if (indice == -1)
            return res.status(404).send("Produto não encontrado");
        return res.status(200).json(dataBase[indice]);
    }
    criar(req, res) {
        const lista = dataBase;
        const { nome, categoria, preco } = req.body;
        
        const novoProduto = new Produto(
            lista.length + 1,
            nome,
            categoria,
            Number(preco)
        )
        
        lista.push(novoProduto);

        return res.status(201).json(novoProduto);
    }
    atualizar(req, res) {
        const indice = dataBase.findIndex(elemento => elemento.id == req.params.id);

        if (indice == -1) 
            return res.status(404).send("Produto não encontrado");

        const id = dataBase[indice].id;

        const { nome, categoria, preco } = req.body;

        const produtoAtualizado = new Produto(
            id,
            nome,
            categoria,
            preco
        )

        dataBase[indice] = produtoAtualizado;

        return res.status(200).json(dataBase[indice]);
    }
    deletar(req, res) {
        const indice = dataBase.findIndex(elemento => elemento.id == req.params.id);
        if  (indice == -1) 
            return res.status(404).send("Produto não encontrado");
        dataBase.splice(indice, 1);

        return res.status(200).send("Produto deletado com sucesso");
    }
}

export default ProdutoController;