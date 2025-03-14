
interface containerProps {
    children: React.ReactNode;

}

const ContainerPage = (props:containerProps) => {

    const {children} = props

return (

    <div className="w-full max-w-6xl px-4 pb-40
    mx-auto mt-40 md:pb-0 md:px-6">

        {children}

    </div>


)


};

export default ContainerPage;