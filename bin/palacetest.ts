#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { PalacetestStack2 } from '../lib/palacetest-stack';

const app = new cdk.App();
new PalacetestStack2(app, 'PalacetestStack', {
  env: { account:"767397949373", region: "us-west-1"}
});