import {ImageSourcePropType} from 'react-native';

import sakaiMasamuneImage from '../../../../shared/assets/graphics/images/exhibits/sakai_masamune.png';
import i41_2 from '../../../../shared/assets/graphics/images/exhibits/41/march22 (219).png';
import i41_1 from '../../../../shared/assets/graphics/images/exhibits/41/march22 (218).png';
import i40_2 from '../../../../shared/assets/graphics/images/exhibits/40/march22 (210).png';
import i40_1 from '../../../../shared/assets/graphics/images/exhibits/40/march22 (208).png';
import i39_2 from '../../../../shared/assets/graphics/images/exhibits/39/march22 (223).png';
import i39_1 from '../../../../shared/assets/graphics/images/exhibits/39/march22 (221).png';
import i38_2 from '../../../../shared/assets/graphics/images/exhibits/38/march22 (206).png';
import i38_1 from '../../../../shared/assets/graphics/images/exhibits/38/march22 (203).png';
import i37_2 from '../../../../shared/assets/graphics/images/exhibits/37/march22 (198).png';
import i37_1 from '../../../../shared/assets/graphics/images/exhibits/37/march22 (196).png';
import i35_2 from '../../../../shared/assets/graphics/images/exhibits/35/march22 (202).png';
import i35_1 from '../../../../shared/assets/graphics/images/exhibits/35/march22 (200).png';
import i34_4 from '../../../../shared/assets/graphics/images/exhibits/34/march22 (57).png';
import i34_3 from '../../../../shared/assets/graphics/images/exhibits/34/march22 (56).png';
import i34_2 from '../../../../shared/assets/graphics/images/exhibits/34/march22 (54).png';
import i34_1 from '../../../../shared/assets/graphics/images/exhibits/34/march22 (52).png';
import i34_7 from '../../../../shared/assets/graphics/images/exhibits/34/march22 (119).png';
import i34_6 from '../../../../shared/assets/graphics/images/exhibits/34/march22 (117).png';
import i34_5 from '../../../../shared/assets/graphics/images/exhibits/34/march22 (116).png';
import i33_3 from '../../../../shared/assets/graphics/images/exhibits/33/march22 (170).png';
import i33_2 from '../../../../shared/assets/graphics/images/exhibits/33/march22 (160).png';
import i33_1 from '../../../../shared/assets/graphics/images/exhibits/33/march22 (156).png';
import i32_2 from '../../../../shared/assets/graphics/images/exhibits/32/march22 (99).png';
import i32_1 from '../../../../shared/assets/graphics/images/exhibits/32/march22 (66).png';
import i32_4 from '../../../../shared/assets/graphics/images/exhibits/32/march22 (113).png';
import i32_3 from '../../../../shared/assets/graphics/images/exhibits/32/march22 (112).png';
import i31_6 from '../../../../shared/assets/graphics/images/exhibits/31/march22 (95).png';
import i31_5 from '../../../../shared/assets/graphics/images/exhibits/31/march22 (76).png';
import i31_4 from '../../../../shared/assets/graphics/images/exhibits/31/march22 (75).png';
import i31_3 from '../../../../shared/assets/graphics/images/exhibits/31/march22 (72).png';
import i31_2 from '../../../../shared/assets/graphics/images/exhibits/31/march22 (63).png';
import i31_1 from '../../../../shared/assets/graphics/images/exhibits/31/march22 (59).png';
import i30_4 from '../../../../shared/assets/graphics/images/exhibits/30/march22 (193).png';
import i30_3 from '../../../../shared/assets/graphics/images/exhibits/30/march22 (179).png';
import i30_2 from '../../../../shared/assets/graphics/images/exhibits/30/march22 (176).png';
import i30_1 from '../../../../shared/assets/graphics/images/exhibits/30/march22 (171).png';
import i29_5 from '../../../../shared/assets/graphics/images/exhibits/29/march22 (150).png';
import i29_4 from '../../../../shared/assets/graphics/images/exhibits/29/march22 (148).png';
import i29_3 from '../../../../shared/assets/graphics/images/exhibits/29/march22 (145).png';
import i29_2 from '../../../../shared/assets/graphics/images/exhibits/29/march22 (144).png';
import i29_1 from '../../../../shared/assets/graphics/images/exhibits/29/march22 (142).png';
import i28_3 from '../../../../shared/assets/graphics/images/exhibits/28/march22 (253).png';
import i28_2 from '../../../../shared/assets/graphics/images/exhibits/28/march22 (252).png';
import i28_1 from '../../../../shared/assets/graphics/images/exhibits/28/march22 (249).png';
import i27_3 from '../../../../shared/assets/graphics/images/exhibits/27/march22 (247).png';
import i27_2 from '../../../../shared/assets/graphics/images/exhibits/27/march22 (244).png';
import i27_1 from '../../../../shared/assets/graphics/images/exhibits/27/march22 (238).png';
import i22_3 from '../../../../shared/assets/graphics/images/exhibits/22/march22 (274).png';
import i22_2 from '../../../../shared/assets/graphics/images/exhibits/22/march22 (264).png';
import i22_1 from '../../../../shared/assets/graphics/images/exhibits/22/march22 (256).png';

export const EXHIBIT_IMAGES = {
    SAKAI_MASAMUNE: sakaiMasamuneImage,
    22: [i22_1, i22_2, i22_3],
    27: [i27_1, i27_2, i27_3],
    28: [i28_1, i28_2, i28_3],
    29: [i29_1, i29_2, i29_3, i29_4, i29_5],
    30: [i30_1, i30_2, i30_3, i30_4],
    31: [i31_1, i31_2, i31_3, i31_4, i31_5, i31_6],
    32: [i32_1, i32_2, i32_3, i32_4],
    33: [i33_1, i33_2, i33_3],
    34: [i34_1, i34_2, i34_3, i34_4, i34_5, i34_6, i34_7],
    35: [i35_1, i35_2],
    37: [i37_1, i37_2],
    38: [i38_1, i38_2],
    39: [i39_1, i39_2],
    40: [i40_1, i40_2],
    41: [i41_1, i41_2],
} as Record<number | string, ImageSourcePropType[]>;
