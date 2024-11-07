<script setup lang="ts">
import { computed } from "vue";
import { cn } from "@/lib/utils";
import * as icons from "lucide-vue-next";

const props = defineProps({
  class: String,
  name: {
    type: String,
    required: true,
  },
  size: {
    type: Number,
    default: 12,
  },
  color: String,
  strokeWidth: Number,
  defaultClass: String,
  fontControlled: { type: Boolean, default: false },
});

const icon = computed(() => {
  const iconLibrary = icons[props.name];
  if (iconLibrary) {
    return iconLibrary;
  }
  return defineAsyncComponent(() => {
    const svgPath = `../../assets/icon/${props.name}.svg`;
    return import(svgPath + "?component");
  });
});

onMounted(() => {
  console.log(props.name);
});
</script>

<template>
  <component
    :class="cn(props.class)"
    :is="icon"
    :size="size"
    :color="color"
    :stroke-width="strokeWidth"
    :default-class="defaultClass"
    :font-controlled="fontControlled"
  />
</template>
