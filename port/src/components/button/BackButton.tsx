import {useNavigate} from "react-router-dom"



export function BackButton() {

    const navigate = useNavigate();


    return (
        <button onClick={() => navigate(-1)}>
            <img className="backArrow" src="/images/back.png" alt="backArrow" />
            <h2 className="backTxt">back</h2>
            </button>
        )
}