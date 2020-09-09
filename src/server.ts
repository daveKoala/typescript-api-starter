import app from './app';
import { helloRouter } from "./services/hello/hello.router";

// Routers
app.use("/hi", helloRouter);

const server = app.listen(app.get('port'), () => {
    console.clear()
    console.group();
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.groupEnd();
});

export default server;
