import { App } from './Application/app';

new App().server.listen(3333, () => {
	console.info('Server is runing on port 3333 ⭐');
});