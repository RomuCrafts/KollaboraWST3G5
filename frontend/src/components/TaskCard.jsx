import React from "react";
import styled from "styled-components";
import { useDrag } from "react-dnd";

const Card = styled.div`
  background-color: #f5d0f9;
  border-radius: 8px;
  padding: 10px;
  margin: 10px 0;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
  cursor: grab;
`;

export default function TaskCard({ task }) {
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: "TASK",
    item: { id: task.id },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <Card ref={dragRef} style={{ opacity: isDragging ? 0.5 : 1 }}>
      <h4>{task.title}</h4>
      <p>{task.description}</p>
    </Card>
  );
}
