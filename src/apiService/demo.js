import api from '@/api';
import utils from '@/utils';

const {Get} = utils.request;

function getCubes (){
  return Get({
    url: api.demo.getCubes
  })
}

export default {
  getCubes
}
