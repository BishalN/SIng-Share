import {
  GET_MY_RECORDINGS_FAIL,
  GET_MY_RECORDINGS_REQUEST,
  GET_MY_RECORDINGS_SUCCESS,
  GET_USER_RECORDINGS_BY_USERNAME_FAIL,
  GET_USER_RECORDINGS_BY_USERNAME_REQUEST,
  GET_USER_RECORDINGS_BY_USERNAME_SUCCESS,
  USER_UPLOAD_RECORDING_FAIL,
  USER_UPLOAD_RECORDING_REQUEST,
  USER_UPLOAD_RECORDING_SUCCESS,
} from '../constants/recordingsConstants';

export const userUploadRecordingReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_UPLOAD_RECORDING_REQUEST:
      return { loading: true };
    case USER_UPLOAD_RECORDING_SUCCESS:
      return {
        loading: false,
        recordingInfo: action.payload,
        success: true,
      };
    case USER_UPLOAD_RECORDING_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getRecordingsByUsernameReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_USER_RECORDINGS_BY_USERNAME_REQUEST:
      return { loading: true };
    case GET_USER_RECORDINGS_BY_USERNAME_SUCCESS:
      return {
        loading: false,
        recordings: action.payload,
        success: true,
      };
    case GET_USER_RECORDINGS_BY_USERNAME_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const getMyRecordingsReducer = (state = {}, action) => {
  switch (action.type) {
    case GET_MY_RECORDINGS_REQUEST:
      return { loading: true };
    case GET_MY_RECORDINGS_SUCCESS:
      return {
        loading: false,
        recordings: action.payload,
        success: true,
      };
    case GET_MY_RECORDINGS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};