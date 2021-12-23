import { $http, Post, Get, Put, Patch, Delete, RequestUse } from 'skytech-request';

$http.defaults.validateStatus = function (status) {
  return status >= 200 && status < 400;
};

export default {
  Post,
  Get,
  Put,
  Patch,
  Delete,
  RequestUse
}
