import {useEffect} from 'react'

const BlogPg = () => {

  useEffect(() => {
    document.title = 'Portfoilo | Blogs'
  }, [])

  return (
    <div>BlogPg</div>
  )
}

export default BlogPg