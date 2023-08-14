import React from "react";
import { FlatList, ListRenderItem } from "react-native";
type SnapIntervalProps<T> = {
  data: T[];
  renderItem: ListRenderItem<T>;
  loadMore: VoidFunction;
  pageHeight: number;
};
const SnapInterval = <T,>({
  data,
  renderItem,
  loadMore,
  pageHeight,
}: SnapIntervalProps<T>) => {
  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(_, index) => index.toString()}
      getItemLayout={(_, index) => {
        return { length: pageHeight, offset: pageHeight * index, index };
      }}
      initialScrollIndex={0}
      showsVerticalScrollIndicator={false}
      initialNumToRender={3}
      windowSize={4}
      decelerationRate={"fast"}
      snapToAlignment="start"
      onEndReached={loadMore}
      onEndReachedThreshold={1}
      snapToOffsets={data.map((_x, i) => i * pageHeight)}
    />
  );
};
export default SnapInterval;
