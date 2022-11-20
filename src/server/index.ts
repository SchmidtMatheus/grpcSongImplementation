import * as grpc from '@grpc/grpc-js';
import { sendUnaryData } from '@grpc/grpc-js/build/src/server-call';
import { Empty } from 'google-protobuf/google/protobuf/empty_pb';
import { Song, Comment } from '../proto/songs_pb';
import { ISongsServer, SongsService } from '../proto/songs_grpc_pb';
import getSong from './get-song';
import addSong from './add-song';

class SongsServer implements ISongsServer {
    getSong(call: grpc.ServerUnaryCall<Empty, Song>, callback: sendUnaryData<Song>): void {
        console.log(`${new Date().toISOString()}    getSong`);
        callback(null, getSong());
    }
    addSongs(call: grpc.ServerReadableStream<Song, Empty>, callback: sendUnaryData<Empty>): void {
        console.log(`${new Date().toISOString()}    addSongs`);
        call.on('data', (song: Song) => {
            addSong(song);
        });
        call.on('end', () => callback(null, new Empty()));
    }
}

function serve(): void {
    const server = new grpc.Server();
    // @ts-ignore
    server.addService(SongsService, new SongsServer());
    server.bindAsync(`localhost:${4200}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
        if (err) {
            throw err;
        }
        console.log(`Listening on ${port}`);
        server.start();
    });
}

export default {
    command: 'serve',
    describe: 'Start the gRPC server',
    builder: {},
    handler: serve,
};
