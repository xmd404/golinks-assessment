import express from 'express';
const app: express.Application = express();
const port: number = 3000;

app.get('/', (_req, _res) => {
    _res.send('GoLinks API server is working!')
  })

app.listen(port, () => console.log(`GoLinks API listening at http://localhost:${port}`))