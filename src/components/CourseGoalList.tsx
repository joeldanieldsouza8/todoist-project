import { CourseGoalProps } from "../App";
import CourseGoal from "../components/CourseGoal";
import InfoBox from "./InfoBox";
import { ReactNode } from "react";
import { WarningBoxProps } from "./InfoBox";

interface CourseGoalListProps {
  goals: CourseGoalProps[]; // This is an array because we expect multiple goals
  onDelete: (id: number) => void;
}

export default function CourseGoalList({
  goals,
  onDelete,
}: CourseGoalListProps) {
  let messageBox: ReactNode;

  // if (goals.length === 0) {
  //   warningBox = (
  //     <InfoBox mode="hint">
  //       No goals found. Maybe add one to get started?
  //     </InfoBox>
  //   );
  // }

  // if (goals.length >= 4) {
  //   warningBox = (
  //     <InfoBox mode="warning" severity="medium">
  //       You're collecting a lot of goals. Don't put too much on your plate!
  //     </InfoBox>
  //   );
  // }

  function getSeverity(goalCount: number): WarningBoxProps["severity"] {
    if (goalCount >= 4) {
      return "high";
    }

    if (goalCount === 3) {
      return "medium";
    }

    return "low";
  }

  if (goals.length === 0) {
    messageBox = (
      <InfoBox mode="hint">
        No goals found. Maybe add one to get started?
      </InfoBox>
    );
  } else {
    messageBox = (
      <InfoBox mode="warning" severity={getSeverity(goals.length)}>
        You're collecting a lot of goals. Don't put too much on your plate!
      </InfoBox>
    );
  }

  return (
    <>
      {messageBox}

      <ul>
        {goals.map((goal) => (
          <li key={goal.id}>
            <CourseGoal title={goal.title} onDelete={() => onDelete(goal.id)}>
              {goal.description}
            </CourseGoal>
          </li>
        ))}
      </ul>
    </>
  );
}
