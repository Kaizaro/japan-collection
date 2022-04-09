import {scaleVertical} from '@shared/utils/scale';

export const getHeaderHeight = (insetTop: number): number =>
    insetTop + scaleVertical(40);
