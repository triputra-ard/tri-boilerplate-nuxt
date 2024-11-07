<template>
  <div class="p-10">
    <SimpleTable :data="data" :columns="columns"></SimpleTable>
  </div>
</template>

<script setup>
import SimpleTable from "~/components/ui/simple-table/simple-table.vue";
import { columns } from "~/pages/table/component/columns";

const data = ref([
  {
    id: "728ed52f",
    amount: 100,
    status: "pending",
    email: "m@example.com",
  },
  {
    id: "728ed52g",
    amount: 200,
    status: "approved",
    email: "s@example.com",
  },
  {
    id: "728ed52h",
    amount: 300,
    status: "rejected",
    email: "mailtes@example.com",
  },
]);
</script>
