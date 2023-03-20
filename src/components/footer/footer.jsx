import React from 'react';
import logo from './logoFooter.png';

import style from './footer.module.css'

function Footer() {
	return (
		<>
		<div className={style.footer}>
			<div className={style.gridfooter}>
			<div className={style.itemfooter}>
				<img alt="" src={logo} width="40" height="40" className="d-inline-block align-top" />
				<p>91 Spring Dr. Hudsonville, MI 49426</p>
			</div>
			<div className={style.itemfooter}>
				<h4>how it works</h4>
				<ul>
				<li>select product</li>
				<li>make payment</li>
				<li>receive product</li>
				</ul>
			</div>
			<div className={style.itemfooter}>
				<h4>product</h4>
				<ul>
				<li>headphone</li>
				<li>air conditioner</li>
				<li>router</li>
				<li>television</li>
				</ul>
			</div>
			<div className={style.itemfooter}>
				<h4>help</h4>
				<ul>
				<li>about</li>
				<li>contact us</li>
				<li>download app</li>
				<li>FAQs</li>
				</ul>
			</div>
			</div>
		</div>
		</>
	);
}

export default Footer;