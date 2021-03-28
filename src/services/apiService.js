import axios from 'axios'

export const getGames = () =>
  new Promise(resolve => {
    axios
      .get('https://public.connectnow.org.uk/applicant-test/', {
        timeout: 10000
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
