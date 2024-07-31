<template>
      <ChatBubble  
        :key="message.id"
        :ismine="message.isMine"
        :message="message.message"
      />
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