import "./singlePost.css"

export default function SinglePost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img 
              className="singlePostImg"
              src="https://ae01.alicdn.com/kf/Hce6f2323aa4b4dafb510e95abc48d93fG.jpg" 
              alt="" 
            />
            <h1 className="singlePostTitle">
                Book Information for everything.
                <div className="singlePostEdit">
                    <i className="singlePostIcon fa-solid fa-pen-to-square"></i>
                    <i className="singlePostIcon fa-solid fa-trash"></i>
                </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">
                    Author: <b>Safak</b>
                </span>
                <span className="singlePostDate">1 hour ago</span>
            </div>
            <p className="singlePostDesc">
                Book Description : Flower book aesthetic soft 326306801036201 by @glossypearl
                Creator : glossypearl 
                Complete complaints require the physical or electronic signature of the copyright owner or a representative authorized to act on their behalf. To satisfy this requirement, you may type your full legal name to act as your signature at the bottom of your complaint.
            </p>
        </div>
    </div>
  )
}
