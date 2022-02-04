interface uploadReturn {
  url: string;
  [key: string]: string;
}

const uploadImage = async (formData: FormData): Promise<uploadReturn> => {
  const url = `https://api.cloudinary.com/v1_1/card-maker-seeh/image/upload`;
  try {
    const fetchResult = await fetch(url, {
      method: 'POST',
      body: formData,
    });

    const data = await fetchResult.json();
    return data;
  } catch (e) {
    return {
      url: 'https://media.vlpt.us/images/seeh_h/profile/6b7bfde5-b67c-4665-a2e1-a308e8de2059/tt.PNG?w=120',
    };
  }
};

export default uploadImage;
