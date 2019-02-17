import { APIGatewayProxyHandler } from 'aws-lambda';
import * as dotenv from 'dotenv';

dotenv.config();

export const hello: APIGatewayProxyHandler = async event => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Go Serverless Webpack (Typescript) v1.0! Your function executed successfully!',
      input: event
    })
  };
};
