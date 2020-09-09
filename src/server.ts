import app from './app';
import { helloRouter } from "./services/hello/hello.router";
import { Request, Response, NextFunction } from "express";

// Routers
app.use("/hi", helloRouter);

app.use("*", (req: Request, res: Response, next: NextFunction) => {
    res.statusMessage = "Not found";
    res.status(404).json({ url: req.originalUrl });
});

const server = app.listen(app.get('port'), () => {
    console.clear()
    console.group();
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.groupEnd();
});

export default server;
