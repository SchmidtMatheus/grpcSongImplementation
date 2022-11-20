"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const db_1 = __importDefault(require("./db"));
function default_1(song) {
    // Use of `any` required due to bug in @types/lowdb
    // SEE: https://github.com/typicode/lowdb/issues/349
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbSongs = db_1.default.get('songs');
    song.setId(dbSongs.value().length + 1);
    dbSongs.push(song.toObject()).write();
}
exports.default = default_1;
//# sourceMappingURL=add-song.js.map