import mongoose from 'mongoose'
const Schema = mongoose.Schema
const Article=new Schema({
  id:{
    type:Number,
    unique:true,
    require:true
  },
  type:{
    type:Number,
    require:true
  },
  list:{
    type:Array,
    require:true
  }
})

export default mongoose.model('Article',Article)
