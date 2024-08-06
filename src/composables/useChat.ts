import { ref } from 'vue';

import { sleep } from '@/helper/sleep';
import type { ChatMessage } from '@/interfaces/chatmessageinterface';
import type { YesNo } from '@/interfaces/yes-no.response.interface';

export const useChat =() => { 

    
const messages = ref<ChatMessage[]>([]);

const getresponse = async() => {
    const  resp =await fetch('https://yesno.wtf/api');
    const data = await resp.json() as YesNo;
    return data ;
    
}


const  onMenssage = async (text: string )=>{
 if(text.length === 0) return ;

  messages.value.push({
      id:new Date().getTime(),
      message:text,
      isMine: true,
  });


sleep(1.4);


if( !text.endsWith('?') ) return ;

const {answer, image}= await getresponse();

messages.value.push({
  id:new Date().getTime(),
  message:answer,
  isMine: false,
  image: image,
});


}
// evaluar si termina en signo de punto 

    return {
      // properties
      messages,
      // methods
      onMenssage,

    }
}