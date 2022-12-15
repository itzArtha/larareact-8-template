const SimpleFooter = ({ bottomFooter = "bottom-10" }) => {
    return (
        <>
            <footer className={`py-2 ${bottomFooter} left-4`}>
                <p className={"text-blue-500"}>Managed by Bullyid Indonesia.</p>
            </footer>
        </>
    );
};
export default SimpleFooter;
