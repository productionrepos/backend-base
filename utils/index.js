var dayjs = require('dayjs')
var customParseFormat = require('dayjs/plugin/customParseFormat')
var isoWeek = require('dayjs/plugin/isoWeek')
require('dayjs/locale/es')
dayjs.extend(customParseFormat)
dayjs.extend(isoWeek)

const date = () => {
    const today = new Date()
    const format = dayjs(today).format('YYYY-MM-DD')
    return format;
}



module.exports = {
    date
}