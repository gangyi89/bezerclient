import { connect } from "react-redux";

import { selectors, actions } from "../../../stores";

import Dashboard from "../../../layout/dashboard";

const mapStateToProps = (state) => ({
  dashboardLoading: selectors.project.dashboardLoading(state),
  currentProject: selectors.userSession.currentProject(state),
  isUser: true,
});
const mapDispatchToProps = (dispatch) => ({
  getProjectHandler: (payload) =>
    dispatch(actions.userSession.getProject(payload)),
  getProjectsHandler: (payload) => null,
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
