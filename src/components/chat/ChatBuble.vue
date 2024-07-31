<template>
  <!-- Example Sent Message -->
  <div v-if="ismine" class="flex justify-end">
    <div class="bg-blue-200 text-black p-2 rounded-lg max-w-xs">
      <span class="capitalize"> {{ message }}</span>
      <img v-if="image" :src="image" alt="Message Image" class="w-16 h-16 object-cover rounded-full" />

    </div>
  </div>

  <!-- Example Received Message -->
  <div v-else class="flex">
    <div class="bg-gray-300 text-black p-2 rounded-lg max-w-xs">
      
      <span class="capitalize"> {{ message }}</span>
      <img v-if="image" :src="image" alt="Message Image" class="w-16 h-16 object-cover rounded-full" />

    </div>



  </div>
</template>

<script lang="ts" setup>
interface Props {
  ismine: boolean;
  message: string;
  image?: string;
}

defineProps<Props>();
</script>
