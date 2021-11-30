import mongoose from 'mongoose'
import connection from '../dbConfig'

void mongoose.connect(connection, {}, () => console.log('connected!'))
mongoose.Promise = global.Promise

export default mongoose
