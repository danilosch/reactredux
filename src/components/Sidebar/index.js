import React from "react";

import { connect } from "react-redux";

import * as courseActions from "../../store/actions/course";

import { bindActionCreators } from "redux";

const Sidebar = ({ modules, toggleLesson, activeLesson }) => (
  <div>
    {modules.map(module => (
      <div className="accordion" id={"accordion_" + module.id} key={module.id}>
        <div className="card">
          <div className="card-header" id={"heading_" + module.id}>
            <h5 className="mb-0">
              <button
                className="btn btn-link"
                type="button"
                data-toggle="collapse"
                data-target={"#collapse_" + module.id}
                aria-expanded="true"
                aria-controls={"collapse_" + module.id}
              >
                {module.title}
              </button>
            </h5>
          </div>

          <div
            id={"collapse_" + module.id}
            className="collapse show"
            aria-labelledby={"#heading_" + module.id}
            data-parent={"#accordion_" + module.id}
          >
            <div className="card-body">
              <div className="list-group">
                {module.lessons.map(lesson => (
                  <button
                    key={lesson.id}
                    type="button"
                    className={
                      "list-group-item list-group-item-action " +
                      (activeLesson.id === lesson.id ? "active" : "")
                    }
                    onClick={() => toggleLesson(module, lesson)}
                  >
                    {lesson.title}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
);

const mapStateToProps = state => ({
  modules: state.course.modules,
  activeLesson: state.course.activeLesson
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(courseActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Sidebar);
