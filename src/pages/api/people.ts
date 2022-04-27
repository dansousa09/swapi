// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { NextApiRequest, NextApiResponse } from "next";
import api from '../../api';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  
  try {
    const data = await api.get('/people')
    res.status(200).json(data.data);
  } catch (error) {
    return res.status(500).json({ message: error.message })
  }
}

export default handler; 