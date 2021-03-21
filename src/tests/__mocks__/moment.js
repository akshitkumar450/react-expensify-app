const moment = jest.requireActual('moment')

// for  real application moment will be the moment library 
// but for testing it will use mock moment 
export default (timestamp = 0) => {
    return moment(timestamp)
}