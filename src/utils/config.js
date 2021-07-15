import Q from 'q';
import queryString from 'querystring';
import axios from 'axios';
import { getToken } from './common';

export const Host = 'https://tncnhan.codes/api';

export const GetUser = () => {
    axios.get(`${Host}/users/`,{ headers: { 'Authorization': `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MGVjMzc2OTZiNmQzNDM4YjhmYWYwYjQiLCJpYXQiOjE2MjYwOTM0MTd9.KSJt1eYUcTzRLnzjTGZx55MaOsDdc1E1hpTCn220gmw` }, })
    .then(res => {
        const users = res.data.data;
        console.log(users);
        return users;
    }).catch((error) => {
      console.log(error);
    });
  };
  export async function makeHttpRequest(methodOriginal, urlOriginal, data, customHeaders) {
    var deferred = Q.defer()
  
    const method = methodOriginal.toLowerCase()
    let url = `${Host}${urlOriginal}`
    let config = {
      method: method,
      url: url
    }
  
    if (data) {
      const paramsTxt = queryString.stringify(data)
      if (method === 'get' || method === 'delete') config['url'] = url + '?' + paramsTxt
      else if (method === 'post' || method === 'put') config['data'] = data
    }
  
    let headers = customHeaders
    config['headers'] = headers
  
    try {
      let retReq = await axios(config)
      if (Array.isArray(retReq.data) || ('' + retReq.status).startsWith('2'))
        deferred.resolve(retReq.data)
      else deferred.reject(retReq.data)
    } catch (err) {
      deferred.reject(err)
    }
  
    return deferred.promise
  }
  
  export function authenable() {
        let token = getToken();
        return { headers: { 'Authorization': `Bearer ${token}` }, }
  }

  export function makeJsonRequest(methodOriginal, urlOriginal, data, customHeaders) {
    let token = getToken();
    let headers = {

      'Content-type': 'application/json',
      Accept: 'application/json',
      'Authorization': `${token}` 
    }
    if (customHeaders) {
      for (let cusHead in customHeaders) {
        headers[cusHead] = customHeaders[cusHead]
      }
    }
    return makeHttpRequest(methodOriginal, urlOriginal, data, headers)
  }
  
  export function makeMultipartRequest(methodOriginal, urlOriginal, formData, customHeaders) {
    let headers = { 'Content-type': 'multipart/form-data' }
    // let headers = {};
    if (customHeaders) {
      for (var cusHead in customHeaders) {
        headers[cusHead] = customHeaders[cusHead]
      }
    }
    return makeHttpRequest(methodOriginal, urlOriginal, formData, headers)
  }
  
  // CRUD JSON
  export function getJson(path, data, headers) {
    return makeJsonRequest('GET', path, data, headers)
  }
  
  export function postJson(path, data, headers) {
    return makeJsonRequest('POST', path, data, headers)
  }
  
  export function putJson(path, data, headers) {
    return makeJsonRequest('PUT', path, data, headers)
  }
  
  export function deleteJson(path, data, headers) {
    return makeJsonRequest('DELETE', path, data, headers)
  }
  
  export function postMultipartForm(path, data, headers) {
    return makeMultipartRequest('POST', path, data, headers)
  }
