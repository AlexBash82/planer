import './App.css'
import Calendar from './Components/Calendar'

function App() {
  const week = ['вс', 'пн', 'вт', 'ср', 'чт', 'пт', 'сб']
  const month = [
    'дек',
    'янв',
    'фев',
    'мар',
    'апр',
    'май',
    'инь',
    'иль',
    'авг',
    'сен',
    'окт',
    'ноя',
  ]
  const nowDate = new Date()
  const currentMonth = nowDate.getMonth() + 1
  const currentYear = nowDate.getFullYear()
  const currentDate = nowDate.getDate()
  const currentDay = nowDate.getDay()

  // const d =
  // console.log(d)
  // d.setDate(d.getDate() - 1)
  // console.log(d)

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Сегодня - год: '{currentYear}', месяц: '{month[currentMonth]}' число:
          '{currentDate}' и день '{week[currentDay]}'
        </p>
        <Calendar />
        <p>
          {/* "Алгоритм:

Создать заголовок таблицы с <th> и именами дней недели.
Создать объект даты d = new Date(year, month-1). Это первый день месяца month (с учётом того, что месяцы в JS начинаются от 0, а не от 1).
Ячейки первого ряда пустые от начала и до дня недели d.getDay(), с которого начинается месяц. Заполним <td></td>.
Увеличить день в d: d.setDate(d.getDate()+1). Если d.getMonth() ещё не в следующем месяце, то добавим новую ячейку <td> в календарь. Если это воскресенье, то добавим новую строку «</tr><tr>».
Если месяц закончился, но строка таблицы ещё не заполнена, добавим в неё пустые <td>, чтобы сделать в календаре красивые пустые квадратики."*/}
        </p>
      </header>
    </div>
  )
}

export default App
