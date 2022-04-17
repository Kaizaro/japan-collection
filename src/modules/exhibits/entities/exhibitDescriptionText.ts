import {IExhibitLink} from '@src/modules/exhibits/entities/exhibitLink';

export interface IExhibitDescriptionText extends IExhibitLink {
    type: 'regular' | 'pressable';
}
