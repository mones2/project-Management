import { createPortal } from "react-dom";
import { useImperativeHandle, useRef} from "react";

export default function Modal ({ref, children}){
    const dialog = useRef();
    useImperativeHandle(ref, ()=>{
        return {
            open (){
                dialog.current.showModal();
            }
        }
    })

    return createPortal(
        <dialog ref = {dialog} className = 'backdrop:bg-stone-900/90 p-4 rounded-md shadow-md' >{children} 
        <form method="dialog">
            <button className="my-4 px-4 py-2 text-xs md:text-base rounded-md bg-stone-700 text-stone-400 hover:bg-stone-600 hover:text-stone-100">Close</button>
        </form>
        </dialog>,
        document.getElementById('modal-root')
    );
}

