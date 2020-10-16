import { AxiosResponse } from 'axios';

const axiosResponse: AxiosResponse = {
    data: {},
    status: 401,
    statusText: 'Unauthorized',
    config: {},
    headers: {
        crossDomain: true, 
        'Access-Control-Allow-Origin' : 'http://localhost:4040',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
};

export default {
  defaults: {
    withCredentials: true,
    post: jest.fn().mockImplementation(() => Promise.resolve(axiosResponse)),
  },
  
  withCredentials: true,
  post: jest.fn(() => Promise.resolve(axiosResponse)),
  get: jest.fn(() => Promise.resolve(
          {
              data: {}, 
              status: 300
            }))
};