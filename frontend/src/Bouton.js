import './Bouton.css';

const Bouton = () => {
    return (
        <div class="formbold-form-btn-wrapper">
            <button class="formbold-btn">
                Ajouter
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clip-path="url(#clip0_1675_1807)">
                <path d="M10.7814 7.33312L7.20541 3.75712L8.14808 2.81445L13.3334 7.99979L8.14808 13.1851L7.20541 12.2425L10.7814 8.66645H2.66675V7.33312H10.7814Z" fill="white"/>
                </g>
                <defs>
                <clipPath id="clip0_1675_1807">
                <rect width="16" height="16" fill="white"/>
                </clipPath>
                </defs>
                </svg>
            </button>
        </div>
    );
}


export default Bouton;