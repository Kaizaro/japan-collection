export class ExhibitTrack {
    // Load media from the network
    url: string;
    title: string;
    artist?: string;
    album?: string;
    genre?: string;
    // RFC 3339
    date?: string;
    // Album image
    artwork?: string;
    // Duration in seconds
    duration?: number;

    constructor(
        url: string,
        title: string,
        artist?: string,
        album?: string,
        genre?: string,
        date?: string,
        artwork?: string,
        duration?: number,
    ) {
        this.url = url;
        this.title = title;
        this.artist = artist;
        this.album = album;
        this.genre = genre;
        this.date = date;
        this.artwork = artwork;
        this.duration = duration;
    }
}
