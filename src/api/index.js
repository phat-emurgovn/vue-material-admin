// implement your own methods in here, if your data is coming from A rest API

import * as Activity from "./activity";
import * as Post from "./post";
import * as Chart from "./chart";
import * as Project from "./project";
export default {
  // project
  getProject: Project.getProject,
  // activity
  getActivity: Activity.default.getActivity,
  // post
  getPost: Post.getPost,
  // chart data
  getMonthVisit: Chart.monthVisitData,
  getCampaign: Chart.campaignData,
  getLocation: Chart.locationData
};
