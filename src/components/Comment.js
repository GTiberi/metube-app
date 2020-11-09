import React from 'react';

const Comment = ({ comment }) => {
	return (
		<div className="comment">
			<a href={comment.authorChannelUrl} className="avatar">
				<img
					src={comment.authorProfileImageUrl}
					alt={comment.authorDisplayName}
				/>
			</a>
			<div className="content">
				<a href={comment.authorChannelUrl} className="author">
					{comment.authorDisplayName}
				</a>
				<div className="metadata">
					<span className="date">{comment.publishedAt}</span>
				</div>
				<div className="text">{comment.textOriginal}</div>
			</div>
		</div>
	);
};
export default Comment;
