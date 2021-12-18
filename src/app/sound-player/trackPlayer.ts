import TrackPlayer from 'react-native-track-player';

await TrackPlayer.setupPlayer({});

TrackPlayer.registerPlaybackService(() => require('./playbackService'));
