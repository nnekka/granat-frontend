import {useState} from 'react'
import granatService from './services/granat'
import 'bootstrap/dist/css/bootstrap.css';
import {Table, Button} from 'react-bootstrap'


const App = () => {
    const [temp, setTemp] = useState(1)
    const [plusMinus, setPlusminus] = useState(2)
    const [mode, setMode] = useState(0)
    const [onOff, setOnOff] = useState(0)
    const [stroka, setStroka] = useState('')

    const onChangeTemp = (event) => {
      if (event.target.value <30 && event.target.value > -20){
        setTemp(event.target.value)
      }
      else {
        console.log('Invalid temperature data')
      }
    }

    const onChangePlusMinus = (event) => {
        if (event.target.value < 10){
            setPlusminus(event.target.value)
        }
        else {
            console.log('Invalid plusMinus data')
        }
    }

    const onChangeMode = (event) => {
        if (event.target.value < 2){
            setMode(event.target.value)
        }
        else {
            console.log('Invalid mode data')
        }
    }

    const onChangeOnOff = (event) => {
        if (event.target.value < 2){
            setOnOff(event.target.value)
        }
        else {
            console.log('Invalid OnOff data')
        }
    }

    const sendSettings = (event) => {

        const str = temp + ',' + plusMinus + ',' + mode + ',' + onOff
        setStroka(str)
        granatService.sendStroka(str)
    }

    const OnOffForm = () => (
        <tr>
            <td>
                Включить/выключить нагрев
            </td>
            <td>
                <input value={onOff} onChange={onChangeOnOff}/>
            </td>
        </tr>

    )

    const showStroka = () => (
        <div>
            <div> <h2>You sent {stroka}</h2></div>
        </div>
    )


    return (
        <div className="container">


            <h1>Центр управления микроконтроллером</h1>
            <Table striped bordered hover>
                <tbody>
                <tr>
                    <td>
                        Температура:
                    </td>
                    <td>
                        <input type="number" value={temp} onChange={onChangeTemp}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Разброс:
                    </td>
                    <td>

                        <input value={plusMinus} onChange={onChangePlusMinus}/>
                    </td>
                </tr>
                <tr>
                    <td>
                        Режим:
                    </td>
                    <td>
                        <input  value={mode} onChange={onChangeMode}/>
                    </td>
                </tr>
                {mode === '1' && OnOffForm()}

                </tbody>
            </Table>
            <Button variant="outline-secondary" onClick={sendSettings}>send</Button>
            {stroka !== '' && showStroka()}
        </div>
    )
}

export default App
