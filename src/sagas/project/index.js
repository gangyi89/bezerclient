import { takeLatest } from "redux-saga/effects";

import { types } from "../../stores";

import createProject from "./createProject";
import getProjects from "./getProjects";
import getProject from "./getProject";
import postStage from "./postStage";

function* watchCreateProjectRequest() {
  yield takeLatest(types.project.CREATE_PROJECT, createProject);
}

function* watchGetProjectsRequest() {
  yield takeLatest(types.project.GET_PROJECTS, getProjects);
}

function* watchGetProjectRequest() {
  yield takeLatest(types.project.GET_PROJECT, getProject);
}

function* watchPostStageRequest() {
  yield takeLatest(types.project.POST_STAGE, postStage);
}

export default [
  watchCreateProjectRequest(),
  watchGetProjectsRequest(),
  watchGetProjectRequest(),
  watchPostStageRequest(),
];
