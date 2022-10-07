import BlogItem from '../BlogItem'

const BlogList = props => {
  const {blogsList} = props

  return (
    <ul className="list-items">
      {blogsList.map(eachBlog => (
        <BlogItem key={eachBlog.id} BlogDetails={eachBlog} />
      ))}
    </ul>
  )
}

export default BlogList
