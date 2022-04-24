import React, {FC, useCallback, useEffect} from 'react';

import TrackPlayer, {State} from 'react-native-track-player';

import {IDefaultFCProps} from '@shared/types';

import {ITrack} from '@src/shared/assets/sound/trackTypes';

interface IProps extends IDefaultFCProps {
    track: ITrack;
}

const MOCK_TRACK = {
    url: require('../../../../../shared/assets/sound/test_record.m4a'), // Load media from the app bundle
    title: 'test_record',
    artist: 'TEST',
    duration: 30,
};

const ExhibitTrack: FC<IProps> = ({track}) => {
    const stopTrack = useCallback(async () => {
        await TrackPlayer.stop();
    }, []);

    const startTrack = useCallback(async () => {
        await TrackPlayer.add(track);
        await TrackPlayer.play();
        const trackIndex = await TrackPlayer.getCurrentTrack();
        const state = await TrackPlayer.getState();
        console.log(state, trackIndex);
        if (state === State.Playing) {
            stopTrack();
        }
    }, [stopTrack, track]);

    useEffect(() => {
        startTrack();
        // TrackPlayer.play();

        return () => stopTrack();
    }, [startTrack, stopTrack]);

    return <></>;
};

export {ExhibitTrack};
