import * as React from "react";

// templates
import SubmissionTaskPageTemplate from "../../templates/SubmissionTask";

const task = {
  title: "SV42 - No.01",
  subtitle: "環境構築とかなんとか",
  user: "奥信 将人",
  limit: "5月7日 18時までに",
  remaining: 2
};

const SubmissionTaskPage: React.StatelessComponent = () => (
  <SubmissionTaskPageTemplate />
);

export default SubmissionTaskPage;
