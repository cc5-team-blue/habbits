import { Dimensions, Platform } from 'react-native';

const isIphoneX = () => {
  const d = Dimensions.get('window');
  const { height, width } = d;

  return (
    // This has to be iOS duh
    Platform.OS === 'ios' &&
    // Accounting for the height in either orientation
    (height === 812 || width === 812)
  );
};

const widthRes = widthPoints => {
  // since initial styling is based on iPhone 6, we devide the given points by its width
  const widthPercent = widthPoints / 375;
  const screenWidth = Dimensions.get('window').width;
  return widthPercent * screenWidth;
};

const imageRes = heightPoints => {
  // since initial styling is based on iPhone 6, we devide the given points by its height
  const heightPercent = heightPoints / 667;
  const screenHeight = Dimensions.get('window').height;
  if (isIphoneX()) {
    return heightPercent * screenHeight * 0.82;
  }
  return heightPercent * screenHeight;
};

const heightRes = heightPoints => {
  // since initial styling is based on iPhone 6, we devide the given points by its height
  const heightPercent = heightPoints / 667;
  const screenHeight = Dimensions.get('window').height;
  // if (isIphoneX) {
  //   return heightPercent * screenHeight * 0.82;
  // }
  return heightPercent * screenHeight;
};
export { widthRes, heightRes, imageRes };
