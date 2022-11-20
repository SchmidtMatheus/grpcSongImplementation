import * as grpc from '@grpc/grpc-js';
import { SongsClient } from '../proto/songs_grpc_pb';

export default new SongsClient(
    `localhost:${4200}`,
    grpc.credentials.createInsecure(),
);
