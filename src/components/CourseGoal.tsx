import { ReactNode } from "react";
import Button from "./Button";

interface CourseGoalProps {
  title: string;
  children: ReactNode;
  onDelete: () => void;
}

export default function CourseGoal({
  title,
  children,
  onDelete,
}: CourseGoalProps) {
  // function handleDelete() {}

  return (
    <article>
      <div>
        <h2>{title}</h2>
        <p>{children}</p>
      </div>

      <Button onclick={onDelete}>Delete</Button>
    </article>
  );
}
