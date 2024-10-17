import { useState } from 'react';
import styles from './app.module.css';
import data from './data.json';

export const App = () => {
    const [steps, setSteps] = useState(data[0])
    const [activeIndex, setActiveIndex] = useState(0)

    const clickBack = ()=> {
        setActiveIndex(activeIndex - 1)
        setSteps(data[activeIndex - 1])
    }

    const clickForward = ()=> {
        setActiveIndex(activeIndex + 1)
        setSteps(data[activeIndex + 1])
    }
    const clickStep = ({ target })=> {
        setActiveIndex(Number(target.textContent) - 1)
        setSteps(data[Number(target.textContent) - 1])
    }
    const clickBeginAgain = ()=> {
        setActiveIndex(0)
        setSteps(data[0 ])
    }
    
    let checkActiveIndexBack = ''
    if(activeIndex === 0){
        checkActiveIndexBack = true
    } else {
        checkActiveIndexBack = false
    }
    let check = ''
        if(activeIndex == 6) {
            check = true
        } else {
            check = false
        }
    
	return (
		<div className={styles.container}>
			<div className={styles.card}>
				<h1>Инструкция по готовке пельменей</h1>
				<div className={styles.steps}>
					<div className={styles['steps-content']}>
						{steps.content}
					</div>
					<ul className={styles['steps-list']}>
                    {data.map((item, index) => {
							return (
								<li
									key={item.id}
									className={`${styles['steps-item']} + ' ' + ${index < activeIndex ? styles.done : ''} + ' ' + ${index === activeIndex ? styles.active : ''}`}
								>
									<button
										className={styles['steps-item-button']}
										onClick={clickStep}
									>
										{Number(item.id)}
									</button>
									{item.title}
								</li>
							);
						})}
					</ul>
					<div className={styles['buttons-container']}>
						<button className={styles.button} onClick={clickBack} disabled={checkActiveIndexBack}>Назад</button>
                        {!check ? (
							<button
								className={styles.button}
								onClick={clickForward}
							>
								Далее
							</button>
						) : (
							<button className={styles.button} onClick={clickBeginAgain}>
								Начать сначала
							</button>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};
