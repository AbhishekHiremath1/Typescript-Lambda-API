# Typescript-Lambda-API
A serverless API project using AWS Lambda, API Gateway, and Express.js.This project includes Swagger UI for API documentation, TypeScript for robust type-checking, and ESLint for code quality. The setup ensures seamless deployment and development, with a focus on maintainable and scalable serverless applications

## Project Structure

- **root/**: The root directory of the project.
  - **packages/**: Contains the separate packages of the project.
    - **infra/**: Infrastructure code using AWS CDK.
      - **bin/**: Contains the CDK application entry point.
        - `infra.ts`: Entry point for CDK app.
      - **lib/**: Contains the CDK stack definitions.
        - `infrastructure-stack.ts`: Definition of the infrastructure stack.
      - `node_modules/`: Directory for package dependencies.
      - `package.json`: Project configuration and dependencies.
      - `tsconfig.json`: TypeScript configuration for the infra package.
    - **lambda-function/**: Contains the Lambda function code and related configuration.
      - **dist/**: Directory for compiled output.
      - **node_modules/**: Directory for package dependencies.
      - **src/**: Source code for the Lambda function.
        - `app.ts`: Express application setup.
        - `lambda.ts`: Lambda handler setup.
        - `handler.ts`: Additional handler functions.
        - `swagger.html`: Swagger UI documentation file.
        - `swagger.json`: Swagger API specification.
      - `webpack.config.js`: Webpack configuration.
      - `package.json`: Project configuration and dependencies.
      - `tsconfig.json`: TypeScript configuration for the Lambda function package.
- `node_modules/`: Directory for root project dependencies.
- `package.json`: Root project configuration and dependencies.
- `tsconfig.json`: TypeScript configuration for the root project.
- `yarn.lock`: Yarn lock file for dependencies.




## Features

- **Serverless Architecture**: Utilizes AWS Lambda and API Gateway for scalable backend services.
- **Express Integration**: Simplifies route handling and middleware configuration.
- **Swagger UI Documentation**: Provides interactive API documentation.
- **TypeScript**: Ensures type safety and enhanced development experience.
- **ESLint**: Maintains code quality and consistency with customizable linting rules.

## Prerequisites

- Node.js and npm (or yarn)
- AWS CLI
- AWS Account

## Setup

1. **Install Dependencies**:

   ```bash
   yarn install -W 
   ```
   We are using -W flag to install all the dependencies for our infra and lambda-function packages together

2. **Configure AWS CLI**
    ```bash
   aws configure
   ```
   Enter all the details required such as AWS_ACCESS_KEY, AWS_SECRECT_KEY_ID for your AWS account to complete the AWS setup

3. **Set Up Environment Variables**
    ```bash
   NODE_ENV=development
   ```
## Development
1. **Run ESlint and check for code issues**
    ```bash
   cd packages/lambda-function
   yarn lint
   ```
2. **Run Test cases to test code functionality**
    ```bash
    cd packages/lambda-function
    yarn test
    ```

3. **Build lambda-function package**
    ```bash
   cd packages/lambda-function
   yarn build
   ```

4. **Build infra package**
    ```bash
   cd packages/infra
   yarn build
   ```

## Deloyment
1. **Bootstrap the CDK environment**
    ```bash
   yarn cdk bootstrap
   ```

2. **Deploy the Stack**
    ```bash
   yarn cdk deploy
   ```


## Accessing the API
    After deploying the API using AWS CDK, you can access it via the API Gateway endpoint. The base URL for the API will be provided by AWS CloudFormation output. The endpoint typically looks like this

    [https://<api-id>.execute-api.<region>.amazonaws.com/prod](https://<api-id>.execute-api.<region>.amazonaws.com/prod)

## API Endpoints
The following are the primary endpoints available in the API:

### GET /hello
Returns a greeting message.

- **URL**: `/hello`
- **Query Parameter**: `name` (optional) - The name of the person to greet.
- **Response**: A JSON object with a greeting message.

#### Example:
```json
{
  "message": "Hello, World!"
}
```

### GET /swagger.json
The raw Swagger/OpenAPI JSON specification file

- **URL**: `/swagger.json`
#### Example:
[https://<api-id>.execute-api.<region>.amazonaws.com/prod/swagger.json](https://<api-id>.execute-api.<region>.amazonaws.com/prod/swagger.json)

## Testing the API
 ### Using Curl
You can test the API endpoints using curl from the command line. Replace <api-url> with your actual API URL.

    ``` bash
    curl -X GET "<api-url>/hello"
    curl -X GET "<api-url>/hello?name=Abhi"
    ```

 ### Using Postman
#### You can also use Postman to test the API
#### Create new Get Request

#### Enter request URL:
 [https://<api-id>.execute-api.<region>.amazonaws.com/prod/hello](https://<api-id>.execute-api.<region>.amazonaws.com/prod/hello) 

#### Add Query Parameters(if needed)
**key**: name
**value**: Abhi

    