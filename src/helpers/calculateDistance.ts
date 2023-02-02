export const calculateDistance = (
  srcLat: number,
  srcLng: number,
  dstLat: number,
  dstLng: number
) => {
  return (
    Math.acos(
      Math.sin(srcLat) * Math.sin(dstLat) +
        Math.cos(srcLat) * Math.cos(dstLat) * Math.cos(dstLng - srcLng)
    ) * 6371
  );
};
