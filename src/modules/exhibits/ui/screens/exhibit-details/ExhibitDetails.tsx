import React, {FC, useCallback, useEffect} from 'react';
import TrackPlayer, {State} from 'react-native-track-player';

// const slotTrack = {
//     url: require('../../../../../shared/assets/sound/SteinsGate.m4p'), // Load media from the app bundle
//     title: 'SteinsGate',
//     artist: 'ITO KANAKO',
//     duration: 120,
// };

const ExhibitDetails: FC = () => {
    const testCallback = useCallback(async () => {
        await TrackPlayer.add([slotTrack]);
        await TrackPlayer.play();
        let trackIndex = await TrackPlayer.getCurrentTrack();
        const state = await TrackPlayer.getState();
        console.log(state, trackIndex);
        if (state === State.Playing) {
            console.log('The player is playing');
        }
    }, []);

    useEffect(() => {
        // testCallback();
        // TrackPlayer.play();

        // return () => TrackPlayer.stop();
    }, [testCallback]);

    return <></>;
};

/** @internal */
export default ExhibitDetails;
