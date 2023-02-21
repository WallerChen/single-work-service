// This file is created by egg-ts-helper@1.34.6
// Do not modify this file!!!!!!!!!
/* eslint-disable */

import 'egg';
import ExportActivity = require('../../../../app/controller/activity');
import ExportHome = require('../../../../app/controller/home');
import ExportUser = require('../../../../app/controller/user');

declare module 'egg' {
  interface IController {
    activity: ExportActivity;
    home: ExportHome;
    user: ExportUser;
  }
}
