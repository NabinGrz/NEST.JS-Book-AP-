import { Request, Response, NextFunction } from 'express';

function globalMiddleWareOne(req: Request, res: Response, next: NextFunction) {
  console.log('This is first global middleware');
  next();
}
function globalMiddleWareTwo(req: Request, res: Response, next: NextFunction) {
  console.log('This is second global middleware');
  next();
}
function apiLogger(req: Request, res: Response, next: NextFunction) {
  const protocol = req.protocol;
  const host = req.get('host');
  const url = req.originalUrl;
  const method = req.method;
  const date = new Date().toDateString();
  console.log(
    '✅ ✅ ✅ ✅' + protocol + '://' + host + url + ' ' + method + '' + date,
  );
  next();
}
export { globalMiddleWareOne, globalMiddleWareTwo, apiLogger };
