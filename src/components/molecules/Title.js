// React
import React from "react";

// Atoms
import Text from "Components/atoms/UI/Text";

const Title = (props) => {
	const { title, color } = props;
	return (
		<>
			<Text variant="h6" title={title} color={color} upper />
			{title && (
				<div
					style={{
						width: "100px",
						height: "3px",
						backgroundColor: "#21717b",
						margin: "0.5rem 0 2rem 0",
					}}
				/>
			)}
		</>
	);
};

Title.defaultProps = {
  title: "tripleS",
  color: "inherit"
};

export default Title;
