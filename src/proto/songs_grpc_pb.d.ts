// package: songs
// file: songs.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as songs_pb from "./songs_pb";
import * as google_protobuf_empty_pb from "google-protobuf/google/protobuf/empty_pb";

interface ISongsService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    getSong: ISongsService_IGetSong;
    addSongs: ISongsService_IAddSongs;
}

interface ISongsService_IGetSong extends grpc.MethodDefinition<google_protobuf_empty_pb.Empty, songs_pb.Song> {
    path: "/songs.Songs/GetSong";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    requestDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
    responseSerialize: grpc.serialize<songs_pb.Song>;
    responseDeserialize: grpc.deserialize<songs_pb.Song>;
}
interface ISongsService_IAddSongs extends grpc.MethodDefinition<songs_pb.Song, google_protobuf_empty_pb.Empty> {
    path: "/songs.Songs/AddSongs";
    requestStream: true;
    responseStream: false;
    requestSerialize: grpc.serialize<songs_pb.Song>;
    requestDeserialize: grpc.deserialize<songs_pb.Song>;
    responseSerialize: grpc.serialize<google_protobuf_empty_pb.Empty>;
    responseDeserialize: grpc.deserialize<google_protobuf_empty_pb.Empty>;
}

export const SongsService: ISongsService;

export interface ISongsServer {
    getSong: grpc.handleUnaryCall<google_protobuf_empty_pb.Empty, songs_pb.Song>;
    addSongs: handleClientStreamingCall<songs_pb.Song, google_protobuf_empty_pb.Empty>;
}

export interface ISongsClient {
    getSong(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    addSongs(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    addSongs(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    addSongs(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    addSongs(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
}

export class SongsClient extends grpc.Client implements ISongsClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public getSong(request: google_protobuf_empty_pb.Empty, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    public getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    public getSong(request: google_protobuf_empty_pb.Empty, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: songs_pb.Song) => void): grpc.ClientUnaryCall;
    public addSongs(callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    public addSongs(metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    public addSongs(options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
    public addSongs(metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: google_protobuf_empty_pb.Empty) => void): grpc.ClientWritableStream<songs_pb.Song>;
}
