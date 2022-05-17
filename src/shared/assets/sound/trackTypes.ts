import {ResourceObject} from 'react-native-track-player';

export interface ITrack {
    url: ResourceObject;
    title: string;
    artist: string;
    duration: number;
}
