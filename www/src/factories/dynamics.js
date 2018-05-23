import instance from './instance'

const dynamicsResource = {
  addDynamics (dynamics) {
    return instance.post('/dynamics', dynamics)
  },
  getSelfDynamicsByUserId (userId) {
    return instance.get('dynamics/self/' + userId)
  },
  getDynamicsByUserId (userId) {
    return instance.get('/dynamics/follow/' + userId)
  },
  getRecommendDynamics () {
    return instance.get('/dynamics/recommend')
  }
}

export default dynamicsResource
