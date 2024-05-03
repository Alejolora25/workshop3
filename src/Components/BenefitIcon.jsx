import React from 'react';
import {
    BsWatch,
    BsPeople,
    BsEmojiSunglasses,
    BsFileEarmarkCheck,
} from "react-icons/bs";
import { CiHeart } from "react-icons/ci";
import { GrLocation } from "react-icons/gr";
import { LuClipboardCheck } from "react-icons/lu";
const BenefitIcon = ({ benefit }) => {

    return (
        <>
            {benefit === 'Seguro médico privado' && <CiHeart className="icon" />}
            {benefit === 'Horario Flexible' && <BsWatch className="icon" />}
            {benefit === 'Trabajo remoto parcial' && <GrLocation className="icon" />}
            {benefit === 'celebración de días especiales' && <BsEmojiSunglasses className="icon" />}
            {benefit === 'certificaciones' && <BsFileEarmarkCheck className="icon" />}
            {benefit === 'capacitaciones' && <LuClipboardCheck className="icon" />}
            {benefit === 'Ambiente de trabajo amigable' && <BsPeople className="icon" />}
        </>
    )
}

export default BenefitIcon

