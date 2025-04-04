import { query } from "../config/db.js";

export const getNews = (req, res) => {
    query ("SELECT * FROM news", (err,results) => {
        if (err){
            return res.status(500).json({error:"Erro ai buscar notícias", detels: err});
        }
        res.json(results)
    })
}