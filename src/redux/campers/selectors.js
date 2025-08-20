export const selectCampers = (state) => state.campers.items;
export const selectTotalCampers = (state) => state.campers.total;
export const selectPage = (state) => state.campers.page;

export const selectIsLoading = (state) => state.campers.isLoading;
export const selectIsLoadingMore = (state) => state.campers.isLoadingMore;
export const selectError = (state) => state.campers.error;

