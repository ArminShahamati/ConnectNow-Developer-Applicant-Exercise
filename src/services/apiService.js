import axios from 'axios'

export const getGames = () =>
  new Promise(resolve => {
    axios({
      method: 'get',           
      url: 'https://cors-anywhere.herokuapp.com/https://public.connectnow.org.uk/applicant-test',    
      timeout: 5000,
      header: {
        'Access-Control-Allow-Credentials': true

        }
       
    })
      .then(res => {
        var ret = {
          code: 200,
          type: 'success',
          title: '',
          data: res.data
        }
        resolve(ret)
      })
      .catch(err => {
        var ret = {
          code: 400,
          type: 'error',
          title: 'error',
          data: 'Can not Fetch Data From Server, Please Try Again Later'
        }
        resolve(ret)
      })
   
  })
