import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import * as apigateway from 'aws-cdk-lib/aws-apigateway';

export class LambdaStack extends cdk.Stack {
    constructor(scope: Construct, id: string, props?: cdk.StackProps) {
        super(scope, id, props);

        const lambdaFunction = new lambda.Function(this, 'HelloFunction', {
            runtime: lambda.Runtime.NODEJS_18_X,
            code: lambda.Code.fromAsset('../lambda-function/dist'),
            handler: 'handler.handler',
        });

        const api = new apigateway.LambdaRestApi(this, 'Endpoint', {
            handler: lambdaFunction,
            proxy: false
        });

        api.root.addResource('swagger.json').addMethod('GET', new apigateway.LambdaIntegration(lambdaFunction));
        const helloResource = api.root.addResource('hello'); 
        helloResource.addMethod('GET', new apigateway.LambdaIntegration(lambdaFunction))
    }
}
