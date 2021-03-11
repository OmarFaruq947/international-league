import React from 'react';
import './noMatch.css';

const NoMatch = () => {
    return (
        <div>
            <div class="vertical-center">
		<div class="container">
			<div id="notfound" class="text-center ">
				<h1>😮</h1>
				<h2>Oops! Page Not Be Found</h2>
				<p>Sorry but the page you are looking for does not exist.</p>
			</div>
		</div>
	</div>
        </div>
    );
};

export default NoMatch;