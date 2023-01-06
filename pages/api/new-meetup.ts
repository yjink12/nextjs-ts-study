import { MongoClient } from 'mongodb';
import type { NextApiRequest, NextApiResponse } from 'next';

/**
 * post trigger code
 * @param req 
 * @param res 
 */
const handler = async (req: NextApiRequest, res: NextApiResponse) => {
    if (req.method === 'POST') {
        const data = req.body;
        //const { title, image, address, description } = data;
        const pwd = process.env.MONGOPWD
        const client = await MongoClient.connect(`mongodb+srv://admin:${pwd}@cluster0.qulnbds.mongodb.net/meetups?retryWrites=true&w=majority`)

        const db = client.db();
        const meetupsCollection = db.collection('meetups')

        const result = await meetupsCollection.insertOne(data);

        console.log('collection result', result);
        client.close();

        res.status(201).json({ message: 'Meetup insert Success!'});
    }
}
export default handler;