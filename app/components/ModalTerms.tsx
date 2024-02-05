import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

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
                <DialogTitle id="scroll-dialog-title">Правила і умови участі у івенті</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <strong>Опис Послуги:</strong>
                        <ul>
                            <li>1.1. Cash party (далі - &apos;Івент&apos;) надає можливість участі у програмі івенту, а саме у
                                його
                                навчальний та розважальні програмі
                            </li>
                        </ul>

                        <strong>Умови Придбання:</strong>
                        <ul>
                            <li>2.1. Учасники повинні бути віком 18+</li>
                            <li>2.2. Реєстрація на Івент відбувається через платіжну систему, після проходження якої
                                додаємо
                                в спільний чат з учасниками телеграм.
                            </li>
                        </ul>

                        <strong>Ціна та Оплата:</strong>
                        <ul>
                            <li>3.1. Вартість участі у Івенті становить 999 грн</li>
                            <li>3.2. Оплата приймається через платіжну систему по реквізитам на ФОП Будакова Дарʼя
                                Геннадіївна.
                            </li>
                        </ul>

                        <strong>Скасування та Повернення Коштів:</strong>
                        <ul>
                            <li>4.1. Учасники можуть скасувати участь в Івенті у термін не пізніше 2х тижнів до дати
                                івенту
                                за власним бажанням.
                            </li>
                        </ul>

                        <strong>Відповідальність:</strong>
                        <ul>
                            <li>5.2. Організатор не несе відповідальності за власні речі учасників івенту в момент
                                проведення заходу.
                            </li>
                        </ul>

                        <strong>Зміни та Скасування Заходу:</strong>
                        <ul>
                            <li>6.1. Організатор має право змінити дати або формат Івенту за попередженням учасників.
                            </li>
                            <li>6.2. У випадку скасування Івенту з об&apos;єктивних причин, повернення коштів проводиться
                                згідно
                                з політикою.
                            </li>
                        </ul>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ModalTerms;