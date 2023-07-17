import { ErrorRequestHandler } from 'express';

const middlewaresDeErro: ErrorRequestHandler = (error, _req, res, _next) => {
  console.log(error);
  const { status, message } = error;
  return res.status(status || 500).json({ message });
};

export default middlewaresDeErro;
