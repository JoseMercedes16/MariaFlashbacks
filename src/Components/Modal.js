import 'bootstrap/dist/css/bootstrap.css'
import DateFnsUtils from '@date-io/date-fns'
import { useState } from 'react'
import { Label, Modal, Button, Input, ModalBody, ModalFooter, ModalHeader } from 'reactstrap'
import { DateTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'



const Ventana = () => {
    const [modelStatus, setModelStatus] = useState(false);
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <MuiPickersUtilsProvider utils={DateFnsUtils}>
            <div>
                <Button onClick={() => setModelStatus(!modelStatus)}>SELECTOR DE FECHA</Button>
            </div>

            <Modal isOpen={modelStatus}>
                <ModalHeader>Ingrese sus datos</ModalHeader>
                <ModalBody>
                    <Label form='Usuario'>Nombre</Label>
                    <Input type='text' id='Usuario'></Input>
                    <Label form='Usuario'>Correo Electronico</Label>
                    <Input type='text' id='Usuario'></Input>
                    <Label form='Usuario'>Fecha</Label><br></br>
                    <DateTimePicker value={selectedDate} onChange={handleDateChange} style={{ textAlign: 'center' }} /> <br></br>
                    <Label form='Usuario'>Comentario</Label>
                    <Input type='Coment' id='Usuario'></Input>

                </ModalBody>
                <ModalFooter>
                    <Button onClick={() => setModelStatus(!modelStatus)}>SEND</Button>
                    <Button onClick={() => setModelStatus(!modelStatus)}>CANCEL</Button>
                </ModalFooter>
            </Modal>
        </MuiPickersUtilsProvider>
    )

}

export default Ventana;