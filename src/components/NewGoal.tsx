import { useRef } from "react";
import Button from "./Button";

interface NewGoalProps {
  onAddGoal: (title: string, description: string) => void;
}

export default function NewGoal({ onAddGoal }: NewGoalProps) {
  const goal = useRef<HTMLInputElement>(null);
  const summary = useRef<HTMLInputElement>(null);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // Guard clause to ensure refs are not null
    if (!goal.current || !summary.current) {
      return;
    }

    const enteredGoal = goal.current.value;
    const enteredSummary = summary.current.value;

    onAddGoal(enteredGoal, enteredSummary);

    // Reset the form
    e.currentTarget.reset();
  }

  return (
    <form onSubmit={handleSubmit}>
      <p>
        <label htmlFor="goal">Your Goal</label>
        <input id="goal" type="text" ref={goal} />
      </p>

      <p>
        <label htmlFor="summary">Short Summary</label>
        <input id="summary" type="text" ref={summary} />
      </p>

      <Button>Add Goal</Button>
    </form>
  );
}
