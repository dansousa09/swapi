import { NextApiRequest, NextApiResponse } from "next";
import api from "../../api";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {

        const { page } = req.query; 

        if (page) {
            const { data } = await api.get("/people?page=" + page);
            res.status(200).json(data);    
        }

        const { data } = await api.get("/people");
        res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default handler;
