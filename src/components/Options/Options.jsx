import css from './Options.module.css'

export default function Options({ updateFeedback, reset, totalFeedback }) {
  return (
    <div className={css.optionsBlock}>
      <button className={css.optionsButton} onClick={() => updateFeedback('good')}>Good</button>
      <button className={css.optionsButton} onClick={() => updateFeedback('neutral')}>Neutral</button>
      <button className={css.optionsButton} onClick={() => updateFeedback('bad')}>Bad</button>
    {totalFeedback > 0 && <button className={css.resetButton} onClick={reset}>Reset</button>}
      </div>
  )
}