"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = __importDefault(require("./client"));
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const cli_table_1 = __importDefault(require("cli-table"));
function getSong() {
    return new Promise((resolve, reject) => {
        client_1.default.getSong(new empty_pb_1.Empty(), (err, song) => {
            if (err) {
                return reject(err);
            }
            return resolve(song);
        });
    });
}
exports.default = {
    command: 'get-song',
    describe: 'Get a random song',
    builder: {},
    handler: () => __awaiter(void 0, void 0, void 0, function* () {
        const song = yield getSong();
        const table = new cli_table_1.default();
        table.push({
            'Song ID': song.getId(),
        }, {
            Title: song.getTitle(),
        }, {
            Artist: song.getArtist(),
        });
        console.log(table.toString());
    }),
};
//# sourceMappingURL=get-song.js.map