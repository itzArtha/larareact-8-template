const Navbar = () => {
    return (
        <>
            <div className={"flex justify-between"}>
                <div className={"w-48"}>
                    <img
                        src={
                            process.env.MIX_APP_URL +
                            "/storage/assets/logo_helpline.png"
                        }
                        alt="Logo Helpline"
                    />
                </div>
            </div>
        </>
    );
};
export default Navbar;
