import { useSelector, useDispatch } from 'react-redux';
import newsImage from '../../imgs/image-news.png';
import HideBtn from '../buttons/HideBtn';
import NextBtn from '../buttons/NextBtn';
import PrevBtn from '../buttons/PrevBtn';
import ShowBtn from '../buttons/ShowBtn';
import { actions as navbarActions } from '../store/slices/navbarSlice';

const News = () => {
	const { news, currentNewsId, hidden } = useSelector((state) => state.navbar);
	const currentArticle = news.find((el) => el.id === currentNewsId);
	const lastPage = news.length;
	const dispatch = useDispatch();

	const handleNextBtn = () => {
		dispatch(navbarActions.setCurrentNewsId(currentNewsId + 1));
	};

	const handlePrevBtn = () => {
		dispatch(navbarActions.setCurrentNewsId(currentNewsId - 1));
	};

	return (
		<>
			{hidden ? (
				<div className='container bg-white rounded mb-4 p-3 shadow-sm'>
					<div className='row align-items-center justify-content-between'>
						<div className='col-2'>
							<div className='d-flex align-items-center gap-2'>
								<ShowBtn />
							</div>
						</div>
						<h3 className='col-3' style={{ fontSize: '18px' }}>
							{currentArticle.shortTitle}
						</h3>
						<p className='col-6 fw-normal color-grey text-truncate'>
							{currentArticle.body}
						</p>
					</div>
				</div>
			) : (
				<div className='container shadow-sm p-0 mb-4 bg-white rounded overflow-hidden'>
					<div className='row news-content'>
						<div className='col-lg-6 p-4 order-2 order-lg-1 d-flex flex-column justify-content-start rounded'>
							<div>
								<p className='fw-light color-grey my-2'>
									{currentArticle.date}
								</p>
								<h2
									className='fw-medium mb-3 my-2'
									style={{ fontSize: '25px' }}
								>
									{currentArticle.title}
								</h2>
								<p className='fw-normal color-grey my-2'>
									{currentArticle.body}
								</p>
							</div>
							<div className='d-flex align-items-center mt-auto justify-content-between'>
								<div className='d-flex align-items-center gap-2'>
									<HideBtn />
								</div>
								<div className='d-flex align-items-center gap-2'>
									<div>
										<span>{currentNewsId} </span>
										<span className='color-grey'>/ {news.length}</span>
									</div>
									{currentNewsId === 1 && (
										<NextBtn handleNextBtn={handleNextBtn} />
									)}
									{currentNewsId > 1 && currentNewsId < lastPage && (
										<>
											<PrevBtn handlePrevBtn={handlePrevBtn} />
											<NextBtn handleNextBtn={handleNextBtn} />
										</>
									)}
									{currentNewsId === lastPage && (
										<PrevBtn handlePrevBtn={handlePrevBtn} />
									)}
								</div>
							</div>
						</div>
						<img
							src={newsImage}
							alt='image for news'
							className='col-lg-6 order-1 order-lg-2'
						/>
					</div>
				</div>
			)}
		</>
	);
};

export default News;
