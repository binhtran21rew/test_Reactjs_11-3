import { keyframes } from "@emotion/react";

export const logoImg = 'https://tse2.mm.bing.net/th?id=OIP.BXyQ4JguISGSQbH1qqEfegHaHa&pid=Api&P=0&h=220'
export const backgroundHeader = 'https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/668c6c653c0661646361f681_Hillbrook_MattQue%CC%81re%CC%81e_D_0217%204-home.webp';
export const imageMain1= "https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/668dd09654cf83f7e5c179f5_Hillbrook_2_0638%207.webp"
export const videoMain = 'https://cdn.prod.website-files.com/6668dadedd368b850aa41ded%2F66a871308baf37107b23653a_hillbrook-estate-experience-transcode.mp4';
export const imageMain2= "https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/66a1d90e8b03bfc0ee397452_Hillbrook_MattQue%CC%81re%CC%81e_D_0095%203.avif";
export const imageMain3="https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/66a1d7ac40cbe5b3db3b8323_MattQue%CC%81re%CC%81e_Hillbrook_0122%206.avif";
export const imageMain4 = "https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/668c6c65f239006ba3ce99d4_Hillbrook_3_0704%202-home.webp"
export const widthFade = "80%";
export const heigthFade = "100%";
export const imageContent1="https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/668c8e5ccb93a03db7bddcdd_Frame%20240.webp";
export const imageContent2="https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/668c8f80fdd806287deeb981_Frame%20242.webp"
export const logoName="https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/6670ee5ac4a91ed4547a4ef8_Group%20468.svg";
export const imageContent5="https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/667216f2bd14e6106b06cec3_f98708063790300845a07f9a31bf508b-p-2000.webp";
const imageMarker1='https://cdn.prod.website-files.com/6670af4bec8905252ff0d180/66a1c29790727ae83e009a14_Screenshot%202024-05-16%20at%201.54.png'
const imageMarker2='https://cdn.prod.website-files.com/6670af4bec8905252ff0d180/66a1c1e302a7f4d75f351d49_image%20113.png';export const map = 'https://cdn.prod.website-files.com/6668dadedd368b850aa41ded/668c6c64e6d99f4c2a90d6b0_Group%20506%201-home.webp';

export const linkTheHouse = '/thehouse'
export const linkTheFarm = '/thefarm'
export const linkContact = '/contact'
export const linkBookNow = '/booknow'
export const linkGallery = '/gallery';
export const linkCuratedServices = '/curatedservices';
export const linkActivities = '/activities';

export const markers = [
    { id: 1, position: [100, 200], image: imageMarker1, name: 'Green Island', detail: 'A pristine oasis off the coast, perfect for exploration and adventure.'},
    { id: 2, position: [300, 500], image: imageContent1, name: 'Peninsular Hikes', detail: 'Enjoy the coastal landscape of the stunning Coromandel Peninsula walking tracks.' },
    { id: 3, position: [250, 650], image: imageMarker2, name: 'Green Island', detail: 'A pristine oasis off the coast, perfect for exploration and adventure.' },
    { id: 4, position: [100, 589],  image: imageContent1, name: 'Peninsular Hikes', detail: 'Enjoy the coastal landscape of the stunning Coromandel Peninsula walking tracks.'},
    { id: 5, position: [400, 370],  image: imageMarker1, name: 'Peninsular Hikes', detail: 'Enjoy the coastal landscape of the stunning Coromandel Peninsula walking tracks.'},
    { id: 6, position: [230, 200], image: imageMarker2, name: 'Green Island', detail: 'A pristine oasis off the coast, perfect for exploration and adventure.' },
];



export const customFade = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

export const letterAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);

  }
`;
