import React, {FC, useCallback, useEffect} from 'react';

import {Alert, Image, View} from 'react-native';

import TrackPlayer, {State} from 'react-native-track-player';

import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {IDefaultFCProps} from '@shared/types';

import {ITrack} from '@src/shared/assets/sound/trackTypes';

import pauseIcon from '../../../../../shared/assets/graphics/icons/player/pause.png';
import audioForwardIcon from '../../../../../shared/assets/graphics/icons/player/audioForward.png';
import audioBackIcon from '../../../../../shared/assets/graphics/icons/player/audioBack.png';

import {exhibitTrackStyles as styles} from './styles';

interface IProps extends IDefaultFCProps {
    track: ITrack;
}

const LOG_TAG = '>>> EXHIBIT_TRACK_COMPONENT';

const MOCK_TRACK = {
    url: require('../../../../../shared/assets/sound/test_record.m4a'), // Load media from the app bundle
    title: 'test_record',
    artist: 'TEST',
    duration: 30,
};

const ExhibitTrack: FC<IProps> = ({track}) => {
    const getTrackState = useCallback(async () => {
        return await TrackPlayer.getState();
    }, []);

    const pauseTrack = useCallback(async () => {
        await TrackPlayer.pause();
    }, []);

    const playTrack = useCallback(async () => {
        await TrackPlayer.play();
    }, []);

    const stopTrack = useCallback(async () => {
        await TrackPlayer.stop();
    }, []);

    const startTrack = useCallback(async () => {
        console.log(LOG_TAG, 'startTrackCallback', track);
        const state = await getTrackState();
        console.log(LOG_TAG, state);
        if (state === State.Playing) {
            await stopTrack();
        }
        await TrackPlayer.add(track);
        await playTrack();
    }, [getTrackState, playTrack, stopTrack, track]);

    const resetTrack = useCallback(async () => {
        await TrackPlayer.reset();
        startTrack();
    }, [startTrack]);

    const handlePlayPauseButtonPress = useCallback(async () => {
        const state = await getTrackState();
        console.log(
            LOG_TAG,
            'handlePlayPauseButtonPressCallback',
            'track state',
            state,
        );

        if (state === State.Playing) {
            await pauseTrack();
        } else if (state === State.Paused) {
            const trackDuration = await TrackPlayer.getDuration();
            console.log(
                LOG_TAG,
                'trackDuration',
                trackDuration,
                trackDuration.toFixed(1),
            );
            const currentPosition = await TrackPlayer.getPosition();
            console.log(
                LOG_TAG,
                'currentPosition',
                currentPosition,
                currentPosition.toFixed(1),
            );
            if (currentPosition.toFixed(1) === trackDuration.toFixed(1)) {
                resetTrack();
            } else {
                await playTrack();
            }
        } else {
            console.error(LOG_TAG, 'track state', state);
            Alert.alert(
                'Ошибка воспроизведения',
                'Что-то пошло не так. Пожалуйста, перезагрузите приложение.',
            );
        }
    }, [getTrackState, pauseTrack, playTrack, resetTrack]);

    useEffect(() => {
        startTrack();

        return () => stopTrack();
    }, [startTrack, stopTrack]);

    return (
        <View style={styles.playerContainer}>
            <PressableComponent>
                <Image
                    source={audioBackIcon}
                    style={styles.trackMoveIcon}
                    resizeMode={'contain'}
                />
            </PressableComponent>
            <PressableComponent onPress={handlePlayPauseButtonPress}>
                <Image
                    source={pauseIcon}
                    style={styles.trackPlayPauseIcon}
                    resizeMode={'contain'}
                />
            </PressableComponent>
            <PressableComponent>
                <Image
                    source={audioForwardIcon}
                    style={styles.trackMoveIcon}
                    resizeMode={'contain'}
                />
            </PressableComponent>
        </View>
    );
};

export {ExhibitTrack};

// import React, {FC, useCallback, useEffect} from 'react';
//
// import TrackPlayer, {State} from 'react-native-track-player';
//
// import {IDefaultFCProps} from '@shared/types';
//
// import {ITrack} from '@src/shared/assets/sound/trackTypes';
//
// interface IProps extends IDefaultFCProps {
//     track: ITrack;
// }
//
// const MOCK_TRACK = {
//     url: require('../../../../../shared/assets/sound/test_record.m4a'), // Load media from the app bundle
//     title: 'test_record',
//     artist: 'TEST',
//     duration: 30,
// };
//
// const ExhibitTrack: FC<IProps> = ({track}) => {
//     const stopTrack = useCallback(async () => {
//         await TrackPlayer.stop();
//     }, []);
//
//     const startTrack = useCallback(async () => {
//         await TrackPlayer.add(track);
//         await TrackPlayer.play();
//         const trackIndex = await TrackPlayer.getCurrentTrack();
//         const state = await TrackPlayer.getState();
//         console.log(state, trackIndex);
//         if (state === State.Playing) {
//             stopTrack();
//         }
//     }, [stopTrack, track]);
//
//     useEffect(() => {
//         startTrack();
//         // TrackPlayer.play();
//
//         return () => stopTrack();
//     }, [startTrack, stopTrack]);
//
//     return <></>;
// };
//
// export {ExhibitTrack};
