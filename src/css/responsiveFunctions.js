import { Dimensions } from 'react-native';

const widthRes = widthPoints => {
  // since initial styling is based on iPhone 6, we devide the given points by its width
  const widthPercent = widthPoints / 375;
  const screenWidth = Dimensions.get('window').width;
  return widthPercent * screenWidth;
};
const heightRes = heightPoints => {
  // since initial styling is based on iPhone 6, we devide the given points by its height
  const heightPercent = heightPoints / 667;
  const screenHeight = Dimensions.get('window').height;
  return heightPercent * screenHeight;
};
export { widthRes, heightRes };
