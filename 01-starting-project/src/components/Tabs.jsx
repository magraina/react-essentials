import { EXAMPLES } from '../data';
import Section from './Section';
import TabButton from './TabButton';
import { useState } from 'react';

export default function Tabs({ children, tabButtons, TabContainer='menu' }) {
	return (
		<>
			<TabContainer>
				{tabButtons}
			</TabContainer>
			{children}
		</>
	);
}