"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const index_1 = __importDefault(require("./server/index"));
const get_song_1 = __importDefault(require("./client/get-song"));
const add_songs_1 = __importDefault(require("./client/add-songs"));
yargs_1.default
    .command(index_1.default)
    .command(get_song_1.default)
    .command(add_songs_1.default)
    .help().argv;
//# sourceMappingURL=index.js.map