import '../styles/MenuChildren.css';
import React from 'react';

type MenuChildrenType = {
	selected: boolean
	children: React.ReactNode
}

const MenuChildren = ({selected, children}: MenuChildrenType)=>{
	return (
	<div className={`MenuChild ${selected ? 'MenuChild__selected':''}`}>
	{children}

	</div>
			)
}
export default MenuChildren;
