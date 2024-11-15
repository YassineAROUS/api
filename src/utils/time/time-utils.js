import moment from 'moment-timezone'

// Setting the timezone of tunisia with UTC 
export const setUTCTunisiaTime = (time) => {
    return moment(time).tz('utc').utc(true).format()
}

export const setUTCValidityCodeTime = () => {
    const date = new Date()
    return moment(date).tz('utc').utc(true).add(15, 'minutes').format() 
}

export const getUTCTime = () => {
    const date = new Date()
    return moment(date).tz('utc').utc(true).format()
}
