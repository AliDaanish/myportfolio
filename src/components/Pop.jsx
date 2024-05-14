import React, { useRef } from "react"       
       export const Pop = ( { onClose, props } ) => {
        const popRef = useRef()

        const closePop = (e) => {
            if(popRef.current === e.target){
                onClose()
            }
        }
            return(
                <>
                <div ref={popRef} onClick={closePop} className="fixed inset-0 bg-tertiary bg-opacity-30 backdrop-blur-sm flex justify-center items-center">
                    <div className="w-96 h-fit bg-gradient-to-b from-blue-950 to-violet-950 shadow-card rounded-xl flex flex-col items-center justify-between py-6 px-4 gap-4">
                        {props.map((prop) => (
                            <div className=" flex flex-col justify-center items-center" key={prop.id}>
                                <img src={prop.icon} alt='' className="h-32 flex" />
                                <h4 className={`flex text-3xl font-bold tracking-widest`}>{prop.first}</h4>
                                <p className="text-center">{prop.second}</p>
                            </div>
                        ))}
                        <button
                            onClick={onClose} className='bg-violet-900 w-full h-12 p-3 flex outline-none text-white justify-center font-bold shadow-md shadow-primary rounded-lg text-xl'
                        >
                        Okay
                        </button>
                    </div>
                </div>
                
                </>
        )}