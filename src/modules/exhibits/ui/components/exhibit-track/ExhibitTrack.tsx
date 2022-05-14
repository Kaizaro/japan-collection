import React, {FC, useCallback, useEffect, useMemo, useState} from 'react';

import {Alert, Image, View} from 'react-native';

import TrackPlayer, {State} from 'react-native-track-player';

import {PressableComponent} from '@shared/ui/buttons/pressable-component';
import {IDefaultFCProps} from '@shared/types';

import {ITrack} from '@src/shared/assets/sound/trackTypes';

import playIcon from '../../../../../shared/assets/graphics/icons/player/play.png';
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
    const [playerStatus, setPlayerStatus] = useState<State>(State.None);
    const isTrackPlaying = useMemo(
        () =>
            playerStatus === State.Playing || playerStatus === State.Buffering,
        [playerStatus],
    );

    const getPlayerState = useCallback(async () => {
        const playerState = await TrackPlayer.getState();
        console.log(LOG_TAG, 'playerState', playerState);
        setPlayerStatus(playerState);
        return playerState;
    }, []);

    const getCurrentTrackPosition = useCallback(() => {
        return TrackPlayer.getPosition();
    }, []);

    const pauseTrack = useCallback(async () => {
        await TrackPlayer.pause();
        getPlayerState();
    }, [getPlayerState]);

    const playTrack = useCallback(async () => {
        await TrackPlayer.play();
        getPlayerState();
    }, [getPlayerState]);

    const stopTrack = useCallback(async () => {
        await TrackPlayer.stop();
        getPlayerState();
    }, [getPlayerState]);

    const playForward = useCallback(async () => {
        const currentPosition = await getCurrentTrackPosition();
        await TrackPlayer.seekTo(currentPosition + 5);
    }, [getCurrentTrackPosition]);

    const playBack = useCallback(async () => {
        const currentPosition = await getCurrentTrackPosition();
        await TrackPlayer.seekTo(currentPosition - 5);
    }, [getCurrentTrackPosition]);

    const startTrack = useCallback(async () => {
        console.log(LOG_TAG, 'startTrackCallback', track);
        const state = await getPlayerState();
        console.log(LOG_TAG, state);
        if (state === State.Playing) {
            await stopTrack();
        }
        await TrackPlayer.add(track);
        await playTrack();
    }, [getPlayerState, playTrack, stopTrack, track]);

    const resetTrack = useCallback(async () => {
        await TrackPlayer.reset();
        startTrack();
    }, [startTrack]);

    const handlePausedPlayer = useCallback(async () => {
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
    }, [playTrack, resetTrack]);

    const handlePlayerError = useCallback(() => {
        Alert.alert(
            'Ошибка воспроизведения',
            'Что-то пошло не так. Пожалуйста, перезагрузите приложение.',
        );
    }, []);

    const handlePlayPauseButtonPress = useCallback(async () => {
        const state = await getPlayerState();
        console.log(
            LOG_TAG,
            'handlePlayPauseButtonPressCallback',
            'track state',
            state,
        );

        if (state === State.Playing) {
            await pauseTrack();
        } else if (state === State.Paused) {
            handlePausedPlayer();
        } else {
            console.error(LOG_TAG, 'track state', state);
            handlePlayerError();
        }
    }, [getPlayerState, handlePausedPlayer, handlePlayerError, pauseTrack]);

    useEffect(() => {
        startTrack();

        return () => stopTrack();
    }, [startTrack, stopTrack]);

    const PlayPauseButton = useMemo(
        () => (
            <PressableComponent onPress={handlePlayPauseButtonPress}>
                <Image
                    source={isTrackPlaying ? pauseIcon : playIcon}
                    style={styles.trackPlayPauseIcon}
                    resizeMode={'contain'}
                />
            </PressableComponent>
        ),
        [handlePlayPauseButtonPress, isTrackPlaying],
    );

    return (
        <View style={styles.playerContainer}>
            <PressableComponent onPress={playBack}>
                <Image
                    source={audioBackIcon}
                    style={styles.trackMoveIcon}
                    resizeMode={'contain'}
                />
            </PressableComponent>
            {PlayPauseButton}
            <PressableComponent onPress={playForward}>
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
