import * as cdk from 'aws-cdk-lib';
import * as s3 from 'aws-cdk-lib/aws-s3';
import { Construct } from 'constructs';
import {FrontWebResources} from "./resources/website-resources";

export class PalacetestStack2 extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id,props);


    new FrontWebResources(this);
  }
}
