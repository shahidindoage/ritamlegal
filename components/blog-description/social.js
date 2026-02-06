"use client"
import { usePathname } from 'next/navigation'

import { 
  FacebookShareButton, 
  FacebookIcon, 
 
  WhatsappShareButton, 
  WhatsappIcon, 
  LinkedinShareButton, 
  LinkedinIcon, 
  TelegramShareButton,
  TelegramIcon,
  TwitterShareButton,
  TwitterIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
  EmailShareButton,
  EmailIcon,
} from 'next-share'; 
import { BASE_URL } from "@/public/data/url";

const SocialTwo = ({pageUrl}) => {
  const pathname = usePathname()
const SOCIAL_URL = "https://ritamlegal.com"
console.log(SOCIAL_URL,pathname)
  return (
    <>
     
<div className='py-4'> 
      <FacebookShareButton 
        url={`${SOCIAL_URL}${pathname}`} > 
        <FacebookIcon size={32} round /> 
      </FacebookShareButton> 
      
      <WhatsappShareButton 
               url={`${SOCIAL_URL}${pathname}`} > 

        <WhatsappIcon size={32} round /> 
      </WhatsappShareButton> 


      <LinkedinShareButton 
              url={`${SOCIAL_URL}${pathname}`} > 

        <LinkedinIcon size={32} round /> 
      </LinkedinShareButton> 


      <TelegramShareButton
             url={`${SOCIAL_URL}${pathname}`} > 


        <TelegramIcon size={32} round /> 
      </TelegramShareButton>
      <FacebookMessengerShareButton
             url={`${SOCIAL_URL}${pathname}`} > 

        <FacebookMessengerIcon size={32} round /> 
      </FacebookMessengerShareButton> 
       <EmailShareButton
             url={`${SOCIAL_URL}${pathname}`} > 

        <EmailIcon size={32} round /> 
      </EmailShareButton>
      <TwitterShareButton
             url={`${SOCIAL_URL}${pathname}`} > 

        <TwitterIcon size={32} round /> 
      </TwitterShareButton>
    </div> 
    </>
  );
};

export default SocialTwo;
