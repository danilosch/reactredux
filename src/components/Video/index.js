import React from "react";

import { connect } from "react-redux";

const Video = ({ activeModule, activeLesson }) => {
  return (
    <div>
      <h4>{activeModule.title}</h4>
      <h5>{activeLesson.title}</h5>
    </div>
  );
};

export default connect(state => ({
  activeModule: state.course.activeModule,
  activeLesson: state.course.activeLesson
}))(Video);
