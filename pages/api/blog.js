import { blogData, blogDataHome } from './../../utils/blogData';

export default function handler(req, res) {
  if(req.query.id) {
    let filterData =  blogData.filter(el => el.id == req.query.id)
    res.status(200).json(filterData)

  } else if(req.query.home =="home"){
    res.status(200).json(blogDataHome)
  } else {
    res.status(200).json(blogData)
  }
}
