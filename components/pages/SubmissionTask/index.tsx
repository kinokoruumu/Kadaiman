import * as React from "react";

// templates
import SubmissionTaskPageTemplate from "../../templates/SubmissionTask";

const task = {
  title: "SV42 - No.01",
  subtitle: "環境構築とかなんとか",
  user: "奥信 将人",
  limit: "5月7日 18時までに",
  checkList: [
    "BirthdayReminder.zipを課題サーバーに提出",
    "先生のチェックを受ける"
  ]
};

const SubmissionTaskPage: React.StatelessComponent = () => (
  <SubmissionTaskPageTemplate task={task} />
);

export default SubmissionTaskPage;
