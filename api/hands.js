import fs from 'fs'
import util from 'util'
const readFile = util.promisify(fs.readFile)

module.exports = async (req, res) => {
    return readFile('./hands.json', { encoding: 'utf8' })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch((error) => {
        res.status(400).send(JSON.stringify(error))
    })
}