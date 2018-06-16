import * as React from "react";

// templates
import TaskDetailPageTemplate from "../../templates/TaskDetail";

const cards = [
  {
    title: "SV42 - No.01",
    subtitle: "環境構築とかなんとか",
    user: "奥信 将人",
    limit: "5月7日 18時までに",
    remaining: 2
  },
  {
    title: "SV42 - No.01",
    subtitle: "環境構築とかなんとか",
    user: "奥信 将人",
    limit: "5月7日 18時までに",
    remaining: 2
  },
  {
    title: "SV42 - No.01",
    subtitle: "環境構築とかなんとか",
    user: "奥信 将人",
    limit: "5月7日 18時までに",
    remaining: 2
  },
  {
    title: "SV42 - No.01",
    subtitle: "環境構築とかなんとか",
    user: "奥信 将人",
    limit: "5月7日 18時までに",
    remaining: 2
  }
];

const tasks = [
  {
    title: "SV42 - No.01",
    subtitle: "環境構築とかなんとか",
    user: "奥信 将人",
    limit: "5月7日 18時までに",
    remaining: 2
  },
  {
    title: "SV42 - No.01",
    subtitle: "環境構築とかなんとか",
    user: "奥信 将人",
    limit: "5月7日 18時までに",
    remaining: 2
  },
  {
    title: "SV42 - No.01",
    subtitle: "環境構築とかなんとか",
    user: "奥信 将人",
    limit: "5月7日 18時までに",
    remaining: 2
  },
  {
    title: "SV42 - No.01",
    subtitle: "環境構築とかなんとか",
    user: "奥信 将人",
    limit: "5月7日 18時までに",
    remaining: 2
  }
];

const TaskDetailPage: React.StatelessComponent = () => (
  <TaskDetailPageTemplate nearDeadlineTasks={cards} tasks={tasks} />
);

export default TaskDetailPage;
