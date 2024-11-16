import { Prata,Great_Vibes,Poppins } from 'next/font/google';

// Load the Prata font
export const prata = Prata({
  weight: ["400"], 
  subsets: ['latin'], 
  display: 'swap', 
});

export const great = Great_Vibes({weight:["400"],
  subsets:['latin-ext']
})


export const poppins = Poppins({
  weight :['200','300','400', '500'],
  subsets: ['latin'], 
})