import React, { useState } from 'react';

export const ClientComponent: React.FC<{ hello: string }> = ({ hello }) => {
	const [count, setCount] = useState(0);
	return (
		<span>
			<h1>{`hello frends ${hello} ${count}`}</h1>
			<button onClick={() => setCount(count + 1)}>Click me</button>
		</span>
	);
};
