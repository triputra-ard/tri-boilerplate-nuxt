<template>
  <div class="flex flex-wrap justify-center mt-20 container">
    <card class="w-full h-auto">
      <card-header>
        <card-title>Hello World</card-title>
        <card-description
          >Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Necessitatibus ratione perferendis quaerat, eius assumenda, asperiores
          hic aperiam repudiandae deleniti ex exercitationem! Facilis animi
          ratione expedita sapiente maiores magni est
          officiis.</card-description
        >
      </card-header>
      <card-content>
        <h3>Installed Module</h3>
        <ul class="list-disc ps-5">
          <li v-for="item in list">
            {{ item.name }}
          </li>
        </ul>
        <br />
        <logica-button @click="clickMe">Click Me !</logica-button>

        <p class="mt-[2rem]">
          Using server API to fetch the data : <b>{{ message }}</b>
        </p>
        <p class="mb-[5rem]">
          When the server is started you can access Tailwind directly from
          <a class="text-primary" href="/_tailwind">here</a>
        </p>

        <alert>
          <icon name="AppWindow"></icon>
          <alert-title class="ms-2">All Done</alert-title>
          <alert-description class="ms-2">
            The components is ready to use
          </alert-description>
        </alert>
      </card-content>
      <card-footer> Thank You </card-footer>
    </card>
  </div>
</template>

<script setup lang="ts">
import { useAppStore } from "@/stores";

const { name } = useAppStore();

const message = ref("Hello World");
const list = ref([
  {
    name: "Nuxt JS",
  },
  {
    name: "Shadcdn",
  },
  {
    name: "Tailwind",
  },
  {
    name: "Lucide Icon",
  },
  {
    name: "Pinia",
  },
]);
function clickMe() {
  alert("Your'e amazing");
}
onMounted(async () => {
  const fetchData = await $fetch("/api/example");
  message.value = fetchData.message;
});
</script>
