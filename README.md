# step-functions
### Introduction
This is a step function application using SAM. This application has a separate file using ASL(Amazon States Language) file using json.
### Working
In template.yaml file we create 5 Lambda functions, 1 Step function which uses these lambdas. Then a role is created to invoke Lambda function and start Execution role of Step function.

In ASL file there are 5 states which uses the lambda functions by specifying its ARN and each step function has timeout for how long it can run.

After each state execution added a wait type state to wait for particular period time before it executes the Lambda function
