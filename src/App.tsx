import Headers from "./components/Headers";

import goalsImg from "./assets/goals.jpg";
import { useState } from "react";
import CourseGoalList from "./components/CourseGoalList";
// import Button from "./components/Button";
import NewGoal from "./components/NewGoal";

export interface CourseGoalProps {
  title: string;
  description: string;
  id: number;
}

export default function App() {
  const [goals, setGoals] = useState<CourseGoalProps[]>([]);

  function handleAddGoal(title: string, description: string) {
    const newGoal: CourseGoalProps = {
      title: title,
      description: description,
      id: Math.random(),
    };

    setGoals((prevState) => {
      return [...prevState, newGoal];
    });
  }

  // We have the delete logic in the App.tsx file because the setGoals state is in here.
  function handleDeleteGoal(id: number) {
    setGoals((prevState) => {
      return prevState.filter((goal) => goal.id !== id);
    });
  }

  return (
    <main>
      <Headers image={{ src: goalsImg, alt: "A list of goals" }}>
        Your Course Goals
      </Headers>
      {/* <Button onclick={handleAddGoal}>Add New Goal</Button> */}
      <NewGoal onAddGoal={handleAddGoal} />
      <CourseGoalList goals={goals} onDelete={handleDeleteGoal} />
    </main>
  );
}
