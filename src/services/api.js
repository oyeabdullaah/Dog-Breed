const BASE_URL = 'https://dog.ceo/api/breeds/list/all';
// const IMAGE_URL = 'https://dog.ceo/api/breed/hound/images';


export const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw new Error(`Error fetching data: ${error.message}`);
  }
};
// export const ImageData = async () => {
//   try {
//     const response = await fetch(IMAGE_URL);
//     if (!response.ok) {
//       throw new Error('Network response was not ok');
//     }
//     const Images = await response.json();
//     return Images.message;
//   } catch (error) {
//     throw new Error(`Error fetching data: ${error.message}`);
//   }
// };


