import React from 'react';
import Comment from './Comment';

const CommentList = props => {
	const renderedList = props.comments.map(comment => {
		return (
			<Comment
				key={comment.id}
				comment={comment.snippet.topLevelComment.snippet}
			/>
		);
	});
	return (
		<div className="ui comments">
			<h3 className="ui dividing header">Comments</h3>
			{renderedList}
		</div>
	);
};
export default CommentList;
