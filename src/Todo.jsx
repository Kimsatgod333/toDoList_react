import './assets/styles/reset.css';
import './assets/styles/Todo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import * as writeBtn from '@fortawesome/free-solid-svg-icons'
function Todo(){
    return(
        <main>
            <input type="text" placeholder="오늘의 할 일을 적어주세요" />
            <button type="button">
            <FontAwesomeIcon icon={writeBtn.faPenToSquare} />
            </button>
        </main>
    )
}
export default Todo;