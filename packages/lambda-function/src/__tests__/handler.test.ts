import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import { handler } from '../handler';
 
describe('Lambda Function', () => {
  it('should return Hello, World when no name is provided', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const event:APIGatewayProxyEvent = { queryStringParameters: null } as any;
    const result:APIGatewayProxyResult = await handler(event);
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify({ message: 'Hello, World' }));
  });

  it('should return Hello, [name] when a name is provided', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const event:APIGatewayProxyEvent = { queryStringParameters: { name: 'Abhi' } } as any;
    const result:APIGatewayProxyResult = await handler(event);
    expect(result.statusCode).toBe(200);
    expect(result.body).toBe(JSON.stringify({ message: 'Hello, Abhi' }));
  });

  it('should check swagger api', async () => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const event:APIGatewayProxyEvent = { path: "/swagger.json" } as any;
    const result:APIGatewayProxyResult = await handler(event);
    expect(result.statusCode).toBe(200);
  });
});