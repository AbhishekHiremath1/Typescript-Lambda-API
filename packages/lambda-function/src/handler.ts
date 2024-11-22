import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';
import * as path from 'path'; 
import * as fs from 'fs';

export const handler = async (event: APIGatewayProxyEvent): Promise<APIGatewayProxyResult> => {
    
    if (event.path === '/swagger.json') {
            const swaggerPath = path.resolve(__dirname, 'swagger.json');
            const swaggerFile = fs.readFileSync(swaggerPath, 'utf8');
    
            return {
                statusCode: 200,
                body: swaggerFile,
                headers: {'Content-Type': 'Application/json'}
            };
        }
    const name:string = event.queryStringParameters?.name || 'World';
    return {
        statusCode: 200,
        body: JSON.stringify({ message: `Hello, ${name}` }),
    };
};