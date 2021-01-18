import React from "react";
import MainTable from "../../components/Exercise/Table/Table";

const Exercise = () => {

  const exercise = [
    {
      id: 1,
      icon: "icon1",
      exerciseName: "Push Ups",
      approaches: 0,
      repetitions: 0,
      completed: false,
    },
    {
      id: 2,
      icon: "icon2",
      exerciseName: "Squat",
      approaches: 0,
      repetitions: 0,
      completed: false,
    },
    {
      id: 3,
      icon: "icon3",
      exerciseName: "Press",
      approaches: 0,
      repetitions: 0,
      completed: false,
    },
  ];

  return <MainTable exercise={exercise} />;
};
export default Exercise;
