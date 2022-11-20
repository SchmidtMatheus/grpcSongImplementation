import { Song } from '../proto/songs_pb';
import db from './db';

export default function(song: Song): void {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const dbSongs = db.get('songs') as any;
    song.setId(dbSongs.value().length + 1);
    dbSongs.push(song.toObject()).write();
}
