"use client";

import { Issue } from "@prisma/client";
import { Select } from "@radix-ui/themes";
import axios from "axios";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";

const StatusSelect = ({ issue }: { issue: Issue }) => {
  const router = useRouter();

  return (
    <Select.Root
      defaultValue={issue.status}
      onValueChange={async (status) => {
        try {
          await axios.patch("/api/issues/" + issue.id, {
            status,
          });
          router.refresh();
        } catch (error) {
          toast.error("Changes could not be saved.");
        }
      }}
    >
      <Select.Trigger placeholder="Update Status..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Issue Status</Select.Label>
          <Select.Item value="OPEN">Open</Select.Item>
          <Select.Item value="IN_PROGRESS">In Progress</Select.Item>
          <Select.Item value="CLOSED">Closed</Select.Item>
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default StatusSelect;
