import React, {FC, useCallback, useEffect} from 'react';

import TrackPlayer, {State} from 'react-native-track-player';

const MOCK_TRACK = {
    url: require('../../../../../shared/assets/sound/test_record.m4a'), // Load media from the app bundle
    title: 'test_record',
    artist: 'TEST',
    duration: 30,
};

const ExhibitTrack: FC = () => {
    const testCallback = useCallback(async () => {
        await TrackPlayer.add(MOCK_TRACK);
        await TrackPlayer.play();
        const trackIndex = await TrackPlayer.getCurrentTrack();
        const state = await TrackPlayer.getState();
        console.log(state, trackIndex);
        if (state === State.Playing) {
            await TrackPlayer.stop();
        }
    }, []);

    useEffect(() => {
        testCallback();
        // TrackPlayer.play();
        return () => TrackPlayer.stop();
    }, [testCallback]);

    return <></>;
};

export {ExhibitTrack};
