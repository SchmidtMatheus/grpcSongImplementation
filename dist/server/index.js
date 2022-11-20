"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const grpc = __importStar(require("@grpc/grpc-js"));
const empty_pb_1 = require("google-protobuf/google/protobuf/empty_pb");
const songs_grpc_pb_1 = require("../proto/songs_grpc_pb");
const get_song_1 = __importDefault(require("./get-song"));
const add_song_1 = __importDefault(require("./add-song"));
const get_chat_1 = __importDefault(require("./get-chat"));
const live_chat_1 = require("./live-chat");
class SongsServer {
    getSong(call, callback) {
        console.log(`${new Date().toISOString()}    getSong`);
        callback(null, get_song_1.default());
    }
    addSongs(call, callback) {
        console.log(`${new Date().toISOString()}    addSongs`);
        call.on('data', (song) => {
            add_song_1.default(song);
        });
        call.on('end', () => callback(null, new empty_pb_1.Empty()));
    }
    getChat(call) {
        return __awaiter(this, void 0, void 0, function* () {
            console.log(`${new Date().toISOString()}    getChat`);
            const song = call.request;
            const comments = yield get_chat_1.default(song.getId());
            for (const comment of comments) {
                call.write(comment);
            }
            call.end();
        });
    }
    liveChat(call) {
        console.log(`${new Date().toISOString()}    liveChat`);
        live_chat_1.registerListener((comment) => call.write(comment));
        call.on('data', (comment) => {
            live_chat_1.addComment(comment);
        });
        call.on('end', () => call.end());
    }
}
function serve() {
    const server = new grpc.Server();
    // @ts-ignore
    server.addService(songs_grpc_pb_1.SongsService, new SongsServer());
    server.bindAsync(`localhost:${4200}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            throw err;
        }
        console.log(`Listening on ${port}`);
        server.start();
    });
}
exports.default = {
    command: 'serve',
    describe: 'Start the gRPC server',
    builder: {},
    handler: serve,
};
//# sourceMappingURL=index.js.map