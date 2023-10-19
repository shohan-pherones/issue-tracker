"use client";

import { Skeleton } from "@/app/components";
import { Issue, User } from "@prisma/client";
import { Avatar, Select } from "@radix-ui/themes";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

const AssigneeSelect = ({ issue }: { issue: Issue }) => {
  const {
    data: users,
    error,
    isLoading,
  } = useQuery<User[]>({
    queryKey: ["users"],
    queryFn: () => axios.get("/api/users").then((res) => res.data),
    staleTime: 60 * 1000, //60s
    retry: 3,
  });

  if (isLoading) return <Skeleton />;

  if (error) return null;

  return (
    <Select.Root
      defaultValue={issue.assignedToUserId || "UNASSIGNED"}
      onValueChange={async (userId) => {
        try {
          await axios.patch("/api/issues/" + issue.id, {
            assignedToUserId: userId === "UNASSIGNED" ? null : userId,
          });
        } catch (error) {
          toast.error("Changes could not be saved.");
        }
      }}
    >
      <Select.Trigger placeholder="Assign..." />
      <Select.Content>
        <Select.Group>
          <Select.Label>Suggestions</Select.Label>
          <Select.Item value="UNASSIGNED">Unassigned</Select.Item>
          {users?.map((user) => (
            <Select.Item key={user.id} value={user.id}>
              <Avatar
                src={user.image!}
                fallback="?"
                size="1"
                radius="full"
                referrerPolicy="no-referrer"
              />{" "}
              {user.name}
            </Select.Item>
          ))}
        </Select.Group>
      </Select.Content>
    </Select.Root>
  );
};

export default AssigneeSelect;
