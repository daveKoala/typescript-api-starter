import app from './app';

console.log('hello world.......!!!!!!!dfdfdfd!!!');

const server = app.listen(app.get('port'), () => {
    console.group();
    console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
    console.groupEnd();
});

export default server;
