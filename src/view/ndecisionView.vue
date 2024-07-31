<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>
      <ChatMessages :messages="messages" />
      <Messabox/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

import ChatMessages from '@/components/chat/ChatMessage.vue';
import Messabox from '@/components/chat/MessaBox.vue';

import { ChatMessage } from '../interfaces/chatmessageinterface.ts';

// Example usage: Creating an array of chat messages

const messages = ref<ChatMessage[]>([
    {
        id: 1,
        message: "hola guapa que haces ",
        isMine: true,
        image: "https://yesno.wtf/assets/no/23-5fe6c1ca6c78e7bf9a7cf43e406fb8db.gif"
    },
    {
        id: 2,
        message: "nada aqui en mi cama ",
        isMine: false,
        image: "https://yesno.wtf/assets/no/23-5fe6c1ca6c78e7bf9a7cf43e406fb8db.gif"
    },
    {
        id: 3,
        message: "sales hoy para ir a tomar ",
        isMine: true,
        image: "https://yesno.wtf/assets/no/23-5fe6c1ca6c78e7bf9a7cf43e406fb8db.gif"
    },
    {
        id: 4,
        message: "sonse tu quieras voy ",
        isMine: false,
    },

]);
</script>