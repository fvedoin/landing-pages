import React from 'react';

import './styles.css';

const Home = () => {
    return (
        <>
            <div className="banner-area relative">
				<div className="overlay overlay-bg"></div>
				<div className="container">
					<div className="">
						<div className="banner-content">
							<h6 className="text-uppercase">Sempre que assamos, assamos com nosso coração</h6>
							<h1>
								Amor de um pão<br/> quentinho			
							</h1>
							<p>
								"O pão nosso de cada dia há muito tempo deixou de ser básico. Atualmente,<br/> ele tem uma infinidade de variações, recheios e formatos."
							</p>
							<a href="menu.php" className="btn text-uppercase">Confira nosso menu</a>
						</div>											
					</div>
				</div>
			</div>
        </>
    );
};

export default Home;