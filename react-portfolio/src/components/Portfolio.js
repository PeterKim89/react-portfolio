import React from "react";

import BookRecos from "../../assets/images/BookRecos.png";
import CollegeTracker from "../../assets/images/collegeTracker.png";
import Glassify from "../../assets/images/glassify.jpg";

function Portfolio() {
	return (
		<section class="portfolio">
			<div class="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 g-4">
				<div class="col">
					<div class="card">
						<img src={BookRecos} alt="bookRecos" class="card-img-top" />
						<div class="card-body">
							<a href="https://github.com/sbhikshe/Book-Recos">
								<button>GitHub Repo</button>
							</a>
							<a href="https://sbhikshe.github.io/Book-Recos/">
								<button>Website Deployment</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Portfolio;
