import "../css/index.scss";
import Example from "./Example.js";
import { default as ExampleTs } from "./Example.ts";

const ExampleInstance = new Example("hello world javascript");
const ExampleTsInstance = new ExampleTs("hello world typescript");

console.log(ExampleInstance.getMessage());
console.log(ExampleTsInstance.getMessage());
