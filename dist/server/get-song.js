"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const songs_pb_1 = require("../proto/songs_pb");
const db_1 = __importDefault(require("./db"));
function default_1() {
    const song = new songs_pb_1.Song();
    const songs = db_1.default.get('songs').value();
    const s = songs[Math.floor(Math.random() * songs.length)];
    song.setId(s.id);
    song.setTitle(s.title);
    song.setArtist(s.artist);
    return song;
}
exports.default = default_1;
//# sourceMappingURL=get-song.js.map