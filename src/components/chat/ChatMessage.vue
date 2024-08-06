<template>
  <div ref="scrollContainer" class="flex-1 overflow-y-auto p-4">
    <div class="flex flex-col space-y-2">
      <ChatBubble  
        v-for="message in messages" 
        :key="message.id"
        v-bind="message"
    />

    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  watch,
} from 'vue';

import type { ChatMessage } from '@/interfaces/chatmessageinterface';

import ChatBubble from './ChatBuble.vue';

interface Props {
  messages: ChatMessage[];
}

const {messages} = defineProps<Props>();
const scrollContainer = ref<HTMLElement | null>(null);

watch(messages,()=>{
  
  setTimeout(() => {
      
      scrollContainer.value?.scrollTo({
        behavior:'smooth',
        top: scrollContainer.value?.scrollHeight,
      })


    }, 100);
});



</script>