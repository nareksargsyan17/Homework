const UI = require("./modules/UI");
const POST = require("./modules/POST");
const GET = require("./modules/GET");
const PATCH = require("./modules/PATCH");
const PUT = require("./modules/PUT");
const DELETE = require("./modules/DELETE");
UI.start();
POST();
GET(UI,PATCH,PUT,DELETE);
console.log(document.querySelectorAll(".listsBlockItem > [data-rm]"));

