/**
 * Created by niuyuanqiang on 16/8/8.
 */
const ADD_TODO = Symbol();
const UPDATE_TODO = Symbol();

function doaction(actionType) {
  switch (actionType) {
    case ADD_TODO:
      console.log('add');
      break;
    case UPDATE_TODO:
      console.log('update')
  }
}

doaction(ADD_TODO);
doaction(UPDATE_TODO);