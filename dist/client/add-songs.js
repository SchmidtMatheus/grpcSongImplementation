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
const lodash_1 = __importDefault(require("lodash"));
const client_1 = __importDefault(require("./client"));
const songs_pb_1 = require("../proto/songs_pb");
const inquirer_1 = __importDefault(require("inquirer"));
function addSongs() {
    const stream = client_1.default.addSongs((err, res) => {
        if (err) {
            throw err;
        }
        lodash_1.default.noop(res);
    });
    return (song) => {
        if (song == null) {
            stream.end();
            return;
        }
        stream.write(song);
    };
}
function inputSong() {
    return __awaiter(this, void 0, void 0, function* () {
        const answers = yield inquirer_1.default.prompt([
            {
                name: 'title',
                message: 'What is the song title?',
            },
            {
                name: 'artist',
                message: 'Who is the artist?',
            },
        ]);
        const song = new songs_pb_1.Song();
        song.setTitle(answers.title);
        song.setArtist(answers.artist);
        return song;
    });
}
function shouldAddMore() {
    return __awaiter(this, void 0, void 0, function* () {
        const answer = yield inquirer_1.default.prompt({
            type: 'confirm',
            name: 'more',
            message: 'Would you like to add another song?',
        });
        return answer.more;
    });
}
exports.default = {
    command: 'add-songs',
    describe: 'Add songs',
    builder: {},
    handler: () => __awaiter(void 0, void 0, void 0, function* () {
        const addSong = addSongs();
        addSong(yield inputSong());
        while (yield shouldAddMore()) {
            addSong(yield inputSong());
        }
        addSong(null);
    }),
};
//# sourceMappingURL=add-songs.js.map