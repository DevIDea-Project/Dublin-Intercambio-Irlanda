const express = require('express');

const app = express();

const appName = 'Vaquinha';

const localBuild = `${__dirname}/dist/${appName}`;

app.use(express.static(localBuild));

app.get('/*', (req, res) => {
    res.sendFile(`${localBuild}/index.html`);
})

app.listen(process.env.PORT);