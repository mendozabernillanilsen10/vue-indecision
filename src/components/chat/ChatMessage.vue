<template>
  <div class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble  
        v-for="message in messages" 
        :key="message.id"
        :ismine="message.isMine"
        :message="message.message"
        :image="message.image"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ChatMessage } from '../interfaces/chatmessageinterface.ts';
import ChatBubble from './ChatBuble.vue';

interface Props {
  messages:  ChatMessage[];
}
defineProps<Props>();
</script>