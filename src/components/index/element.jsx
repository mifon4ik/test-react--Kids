import React from 'react';
import style from './index.module.scss';
import { enumDirections } from '../../utils/game-utils';

import img_arrow from '../../assets/images/arrow.png';
import img_start from '../../assets/images/start.png';
import img_win from '../../assets/images/win.png';
import img_lose from '../../assets/images/lose.png';
import img_right_answer from '../../assets/images/right_answer.png';

const IndexElement = props => {
  const getDirection = (o) => {
    switch (o) {
      case enumDirections.LEFT:
        return style.left;
      case enumDirections.UP:
        return style.up;
      case enumDirections.DOWN:
        return style.down;
      default:
        return '';
    }
  }

  return (
    <>
      <section>
        {
          props.field.map(function (oRow, iRow) {
            return (
              <div className={style.row} key={iRow}>
                {
                  oRow.map(function (oCol, iCol) {
                    return (
                      <div className={style.row__col} key={iCol} onClick={() => props.setAnswer({ x: iCol, y: iRow })}>
                        {props.posAnswer.x === -1 &&
                          props.posAnswer.y === -1 &&
                          props.posStart.x === iCol &&
                          props.posStart.y === iRow ? <img src={img_start} alt='Старт' /> : ''}
                        {props.posAnswer.x === iCol &&
                          props.posAnswer.y === iRow &&
                          props.isWin ? <img src={img_win} alt='Вы ответили правильно!' /> : ''}
                        {props.posAnswer.x === iCol &&
                          props.posAnswer.y === iRow &&
                          !props.isWin ? <img src={img_lose} alt='Вы ответили не правильно!' /> : ''}
                        {props.posAnswer.x !== -1 &&
                          props.posAnswer.y !== -1 &&
                          !props.isWin &&
                          props.posEnd.x === iCol &&
                          props.posEnd.y === iRow ? <img src={img_right_answer} alt='Правильный ответ!' /> : ''}
                      </div>
                    );
                  })
                }
              </div>
            )
          })
        }
      </section>
      <section>
        <div className={style.way_section}>
          {
            props.way.map(function (o, i) {
              return (
                <div key={i} className={style.way_section__item}>
                  <img src={img_arrow} className={getDirection(o)} alt='' />
                </div>
              )
            })
          }
        </div>
        <div>
          <input type='button' value='Новая игра' onClick={props.startGame} />
        </div>
      </section>
    </>
  )
}

export default IndexElement;