import { h } from "vue";
import type { ColumnDef } from "@tanstack/vue-table";

interface Payment {
  id: string;
  amount: number;
  status: string;
  email: string;
}

export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "id",
    header: () => h("div", { class: "text-left" }, "ID Key"),
    cell: ({ row }) => {
      console.log(row, "row");
      const id = row.getValue("id");
      return h("div", { class: "text-left font-medium" }, id as string);
    },
  },
  {
    accessorKey: "amount",
    header: () => h("div", { class: "text-right" }, "Amount"),
    cell: ({ row }) => {
      const amount = Number(row.getValue("amount"));
      return h("div", { class: "text-right font-medium" }, amount);
    },
  },
  {
    accessorKey: "status",
    header: () => h("div", { class: "text-right" }, "Status"),
    cell: ({ row }) => {
      const status = row.getValue("status");

      if (status === "pending") {
        return h(
          "div",
          { class: "text-right font-medium text-red-500" },
          status as string
        );
      } else {
        return h("div", { class: "text-right font-medium" }, status as string);
      }
    },
  },
  {
    accessorKey: "email",
    header: () => h("div", { class: "text-right" }, "Email"),
    cell: ({ row }) => {
      const email = row.getValue("email");
      return h("div", { class: "text-right font-medium" }, email as string);
    },
  },
];
