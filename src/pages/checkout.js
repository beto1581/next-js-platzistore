import React, { useContext } from 'react';
import Head from 'next/head';
import OrderItem from '@components/OrderItem';
import AppContext from '@context/AppContext';
import styles from '@styles/Checkout.module.scss';

const Checkout = () => {
	const { state, toggleOrder } = useContext(AppContext);

	const sumTotal = () => {
		const reducer = (accumalator, currentValue) => accumalator + currentValue.price;
		const sum = state.cart.reduce(reducer, 0);
		return sum;
	}
	return (
		<>
			<Head>
				<title>Checkout</title>
			</Head>
			<div className={styles.Checkout}>
				<div className={styles['Checkout-container']}>
					<h1 className={styles.title}>My order</h1>
					<div className={styles['Checkout-content']}>
						<div className={styles.order}>
							<p>
								<span>03.25.21</span>
								<span>{state.cart.lenght} articles</span>
							</p>
							<p>${sumTotal()}</p>
						</div>
					</div>
					<OrderItem />
				</div>
			</div>
		</>
	);
}

export default Checkout;
