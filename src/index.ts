import express,{ NextFunction, Request, Response } from "express";
import taskroute from "./routes/route.task";

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.use('/tasks', taskroute);

app.get('/', (req: Request, res: Response) => {
    res.send(`Hello typescript API using node js`)
})

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send(`Something went wrong....!`)
})

app.listen(port, () => {
    console.log(`Server listening at port : ${port}`)
})