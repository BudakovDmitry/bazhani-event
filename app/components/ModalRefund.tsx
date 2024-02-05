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
                <DialogTitle id="scroll-dialog-title">Політика повернення коштів</DialogTitle>
                <DialogContent dividers>
                    <DialogContentText
                        id="scroll-dialog-description"
                        tabIndex={-1}
                    >
                        <strong>Підстави для повернення:</strong>
                        <ul>
                            <li>1.1. Повернення коштів може бути здійснене в таких випадках:
                                - за власним бажанням учасники івенту можуть скасувати участь в івенті не пізніше 2х тижнів до початку дати івенту.
                            </li>
                        </ul>

                        <strong>Терміни та умови повернення:</strong>
                        <ul>
                            <li>2.1. Учасник має право подати запит на повернення коштів впродовж не пізніше 2х тижнів до початку дати івенту.</li>
                            <li>2.2. Повернення коштів здійснюється тим же способом оплати, яким була здійснена покупка.
                            </li>
                        </ul>

                        <strong>Скасування івенту:</strong>
                        <ul>
                            <li>3.1. У випадку скасування Івенту з нашого боку, повернення коштів буде автоматично здійснено в повному обсязі.
                            </li>
                            <li>3.2. У разі перенесення івенту, учасники мають право на повернення коштів, якщо нова дата не підходить.
                            </li>
                        </ul>

                        <strong>Відмова від повернення:
                        </strong>
                        <ul>
                            <li>4.1. Заяви про повернення можуть бути відхилені у таких випадках:
                                - порушення умов політики.
                            </li>
                        </ul>

                        <strong>Процедура подання запиту на повернення:</strong>
                        <ul>
                            <li>5.1. Учасник повинен звернутися до організаторів івенту і пояснити причини повернення.
                            </li>
                        </ul>

                        <strong>Часові рамки повернення:</strong>
                        <ul>
                            <li>6.1. Повернення коштів буде здійснено протягом 3 робочих днів  після затвердження запиту на повернення.
                            </li>
                        </ul>
                    </DialogContentText>
                </DialogContent>
            </Dialog>
        </>
    );
}

export default ModalTerms;
