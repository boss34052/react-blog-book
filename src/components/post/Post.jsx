import "./post.css"

export default function Post() {
  return (
    <div className="post">
        <img 
          className="postImg"
          src="https://cdn141.picsart.com/326306801036201.jpg" 
          alt="" 
        />
        <div className="postInfo">
            <div className="postCats">
                <span className="postCat">Music</span>
                <span className="postCat">Life</span>
            </div>
            <span className="postTitle">
                Book Lover
            </span>
            <hr />
            <span className="postDate">1 hour ago</span>
        </div>
        <p className="postDesc">
            Book Description : Flower book aesthetic soft 326306801036201 by @glossypearl
            Creator : glossypearl 
            Complete complaints require the physical or electronic signature of the copyright owner or a representative authorized to act on their behalf. To satisfy this requirement, you may type your full legal name to act as your signature at the bottom of your complaint.
        </p>
    </div>
  )
}
