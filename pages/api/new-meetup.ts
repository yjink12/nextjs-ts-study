import type { NextApiRequest, NextApiResponse } from 'next'

/**
 * post trigger code
 * @param req 
 * @param res 
 */
const handler = (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const data = req.body;
        const { title, image, address, description } = data;
    }
}
export default handler;