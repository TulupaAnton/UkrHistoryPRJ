// import { question } from './History/src/data/questions_for_galicia.json'
// const newArray = question.map(item => item.question)
// console.log(newArray)

import question from '../src/data/questions_clean_fixed.json'

// export function TEST () {
//   return (
//     <div>
//       <h1>
//         {question.map(q => (
//           <p key={q.id}>{q.question[1]}</p>
//         ))}
//       </h1>
//     </div>
//   )
// }
export function TEST () {
  const filteredArray = question.filter(q => q.id === 8)
  return (
    <div>
      <h1>
        {' '}
        {filteredArray.map(q => (
          <p key={q.id}>{q.question}</p>
        ))}
      </h1>
    </div>
  )
}
