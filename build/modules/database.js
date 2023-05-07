"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const servidor = '127.0.0.1';
const db = 'delivery';
class Database {
    constructor() {
        //Promesas
        mongoose_1.default.connect(`mongodb://${servidor}/${db}`)
            .then(() => {
            console.log('Se conecto a mongo');
        }).catch((error) => {
            console.log(error);
        });
    }
}
exports.default = Database;
