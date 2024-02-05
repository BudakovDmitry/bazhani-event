import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import * as React from "react";

const ModalTerms = ({ open, handleClose }: any) => {
    return (
        <>
            <Dialog
                open={open}
                onClose={handleClose}
                scroll='paper'
                aria-labelledby="scroll-dialog-title"
                aria-describedby="scroll-dialog-description"
            >
                <DialogTitle id="scroll-dialog-title">Контактна інформація</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <p><strong>Івент «Cash party»</strong></p>
                        <ul className='modal__list'>
                            <li ><strong
                            >Виконавець:</strong> ФОП Будакова Дар’я Геннадіївна
                            </li>
                            <li><strong>Код
                                одержувача:</strong> 3572902586
                            </li>
                            <li><strong>Рахунок
                                отримувача у форматі відповідно до стандарту
                                IBAN:</strong> UA433052990000026002050589130
                            </li>
                            <li><strong>Назва
                                банку:</strong> АТ КБ «ПриватБанк»
                            </li>
                            <li><strong>Адреса надання
                                послуги:</strong> Арт простір Fabrica L (Генерала Пушкіна 1а)
                            </li>
                            <li><strong>Вайбер /
                                Телеграм:</strong> +38099 122 47 83
                            </li>
                        </ul>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ModalTerms;