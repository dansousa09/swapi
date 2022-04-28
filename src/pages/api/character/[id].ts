import { NextApiRequest, NextApiResponse } from "next";
import api from "../../../api";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    try {
        const { id } = req.query;
        console.log(id)
        const { data } = await api.get("/people/" + id);
        res.status(200).json(data);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export default handler;
