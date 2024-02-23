

interface Props {
    children: ReactNode;
    trigger:  (trigger: PopupTriggerType ) => void
}

const NewProjectPopup = () => {
    const closeWindow: PopupTriggerType = {
        action: "",
    }

    return (
        <div className={'bg-white opacity-95 flex justify-center border-8'}>
            <button className={'w-14 h-10 flex justify-center '}
                    onClick={() => trigger(closeWindow)}> <XMarkIcon className={'w-12 h-10 text-red-500'}/> </button>
            {children}
        </div>
    )
}