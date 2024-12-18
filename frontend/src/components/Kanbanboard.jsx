import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDrop } from "react-dnd";
import TaskCard from "./TaskCard";
import { fetchTasks, updateTask } from "../api";
import axios from "axios";

const BoardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background-color: #eef2f7;
`;

const Column = styled.div`
  background: #2e3b4e;
  border-radius: 8px;
  padding: 10px;
  width: 22%;
  color: white;
`;

const KanbanBoard = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    fetchTasks().then((res) => setTasks(res.data));
  }, []);

  const moveTask = (id, status) => {
    updateTask(id, { status }).then(() =>
      setTasks((prev) =>
        prev.map((task) => (task.id === id ? { ...task, status } : task))
      )
    );
  };

  const [{ isOver: isOverBacklog }, dropRefBacklog] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => moveTask(item.id, "backlog"),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [{ isOver: isOverPending }, dropRefPending] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => moveTask(item.id, "pending"),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [{ isOver: isOverReview }, dropRefReview] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => moveTask(item.id, "review"),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const [{ isOver: isOverDone }, dropRefDone] = useDrop(() => ({
    accept: "TASK",
    drop: (item) => moveTask(item.id, "done"),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  const renderColumn = (status, title, dropRef, isOver) => {
    return (
      <Column
        ref={dropRef}
        style={{ backgroundColor: isOver ? "#1f2b38" : "" }}
      >
        <h3>{title}</h3>
        {tasks
          .filter((task) => task.status === status)
          .map((task) => (
            <TaskCard key={task.id} task={task} />
          ))}
      </Column>
    );
  };

  return (
    <BoardContainer>
      {renderColumn("backlog", "Backlog", dropRefBacklog, isOverBacklog)}
      {renderColumn("pending", "Pending", dropRefPending, isOverPending)}
      {renderColumn("review", "Review", dropRefReview, isOverReview)}
      {renderColumn("done", "Done", dropRefDone, isOverDone)}
    </BoardContainer>
  );
};

export default KanbanBoard;
