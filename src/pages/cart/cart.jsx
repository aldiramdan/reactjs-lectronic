import { InputGroup, FormControl, Button, Card } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { BsPerson, BsBagCheck, BsSearch } from 'react-icons/bs'
import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'
import Header from '../../components/header/header'
import CardCart from '../../components/cart/comCart'
import useApi from '../../helpers/api'
import withAuth from '../../helpers/withAuth'

import style from './cart.module.css'

function Cart() {
	const navigate = useNavigate()
	const [data, setData] = useState({})
	const params = useParams()
	const api = useApi()

	const getProduct = async () => {
		api
		.req({
			method: 'GET',
			url: `/products/${params.id}`
		})
		.then((res) => {
			const { data } = res.data
			setData(data)
		})
		.catch((err) => {
			console.log(err)
		})
	}

	useEffect(() => {
		getProduct()
	}, [])

	return (
		<>
		<Header />
		<div className="head">
			<InputGroup className={style.parent}>
			<FormControl
				className={style.input_search}
				placeholder="Tap To Search For Something"
				aria-label="Tap To Search For Something"
				aria-describedby="basic-addon2"
			/>
			<Button className={style.btn_search} id="button-addon2">
				<BsSearch className={style.bs_icon} />
			</Button>
			<div>
				<Button className={style.btn_w}>
				<BsPerson className={style.bs_icon} />
				</Button>
				<Button className={style.btn_w}>
				<BsBagCheck className={style.bs_icon} />
				</Button>
			</div>
			</InputGroup>
			<div className={style.content}>
			<div className={style.title}>
				<div className={style.text}>Cart</div>
				<div className={style.sel}>
				<FormCheckInput className={style.select} inline type="checkbox" />
				<div className={style.text2}>Select All</div>
				</div>
			</div>
			<div className={style.cardCart}>
				<div>
				<CardCart
					name={data.name}
					type={data.category}
					price={data.price}
					img={data.image}
				/>
				</div>
				<div>
				<Card className={style.card_total}>
					<Card.Body className={style.cardBody}>
					<Card.Title className={style.total}>Total</Card.Title>
					<div className={style.price}>
						<Card.Text className={style.title_price}>
							{' '}
							Item Price
						</Card.Text>
						<Card.Text className={style.cost_price}> $ {data.price}</Card.Text>
					</div>
					<div className={style.dsc}>
						<Card.Text className={style.title_dsc}> Discount</Card.Text>
						<Card.Text className={style.cost_dsc}>
							$ 0
						</Card.Text>
					</div>
					<div>
						<hr className={style.line} />
					</div>
					<div className={style.bill}>
						<Card.Text className={style.title_bill}> Bill</Card.Text>
						<Card.Text className={style.cost_bill}>
							$ {data.price}
						</Card.Text>
					</div>
					<Button
						onClick={() => navigate(`/checkout/${params.id}`)}
						className={style.but_checkout}
						style={{ width: '97%' }}
					>
						Check Out
					</Button>
					</Card.Body>
				</Card>
				</div>
			</div>
			</div>
		</div>
		</>
	)
}

export default withAuth(Cart)
