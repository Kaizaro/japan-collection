/** @internal */
export const keyExtractor = (item: Entit, index: number): string => {
    return `${item.title}_${index}`;
};
