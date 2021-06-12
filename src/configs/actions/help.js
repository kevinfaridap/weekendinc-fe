import axios from 'axios'

export const helpAndTips = () => dispatch=>{
  return new Promise((resolve, reject)=>{
    axios.get(`https://wknd-take-home-challenge-api.herokuapp.com/help-tips`)
    .then((res)=>{
      const data = res.data
      dispatch({type: 'GET_HELP_TIPS', payload: data})
      resolve(data)
    })
    .catch((err)=>{
      reject(err);
    })
  })
}