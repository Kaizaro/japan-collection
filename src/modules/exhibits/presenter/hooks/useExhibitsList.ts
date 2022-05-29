import {useCallback, useEffect, useState} from 'react';

import {getExhibitsList} from '@src/modules/exhibits/useCase/get-exhibits-list';
import {filterExhibitsListByName} from '@src/modules/exhibits/presenter/lib/filterExhibitsListByName';
import {filterExhibitsListByCategory} from '@src/modules/exhibits/presenter/lib/filterExhibitsListByCategory';
import {
    IExhibit,
    TExhibitFilterCategoryId,
} from '@src/modules/exhibits/entities';

const useExhibitsList = () => {
    const [exhibitsList, setExhibitsList] = useState<IExhibit[][]>([]);
    const [searchText, setSearchText] = useState('');
    // const [selectedCategory, setSelectedCategory] =
    //     useState<TExhibitFilterCategoryId | null>(null);

    // const filterExhibitsList = useCallback(() => {
    //     console.log('@FILTER', searchText);
    //     console.log('@FILTER', searchText.length);
    //     if (searchText.length === 0) {
    //         return exhibitsList;
    //     } else if (searchText.length < 3) {
    //         const parsedNumber = parseInt(searchText, 10);
    //         console.log('@FILTER', parsedNumber);
    //         console.log('@FILTER', 'isNaN', !isNaN(parsedNumber));
    //         if (!isNaN(parsedNumber)) {
    //             const filteredExhibits = exhibitsList.filter(
    //                 (exhibit) => parsedNumber === exhibit.exhibit_number,
    //             );
    //             console.log('@FILTER', 'filteredExhibits', filteredExhibits);
    //
    //             if (filteredExhibits) {
    //                 return exhibitsList;
    //             } else {
    //                 return [];
    //             }
    //         }
    //     }
    // }, [exhibitsList, searchText]);

    useEffect(() => {
        setExhibitsList(getExhibitsList());
    }, []);

    useEffect(() => {
        if (searchText) {
            setExhibitsList(
                getExhibitsList(filterExhibitsListByName(searchText)),
            );
        }
    }, [searchText]);

    // useEffect(() => {
    //     if (selectedCategory) {
    //         setExhibitsList(
    //             filterExhibitsList(getExhibitsList(), selectedCategory),
    //         );
    //     }
    // }, [selectedCategory]);

    return {
        exhibitsList,
        searchText,
        setSearchText,
    };
};

/** @internal */
export {useExhibitsList};
