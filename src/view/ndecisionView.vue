<!-- eslint-disable @typescript-eslint/no-unused-vars -->
<!-- Fuente: https://tailwindcomponents.com/component/chat-layout -->
<template>
  <div class="bg-gray-100 h-screen flex flex-col max-w-lg mx-auto">
    <div class="bg-blue-500 p-4 text-white flex justify-between items-center">
      <span>Mi esposa</span>
    </div>
      <ChatMessages :messages="messages" />
      <Messabox @-sed-mesaje="onMenssage" />
  </div>
</template>

<script lang="ts" setup>
import ChatMessages from '@/components/chat/ChatMessage.vue';
import Messabox from '@/components/chat/MessaBox.vue';
import { useChat } from '@/composables/useChat';

const {messages,onMenssage}= useChat( );


</script>