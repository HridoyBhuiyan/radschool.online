import React, {Fragment} from 'react';
import HeaderNav from "../../Components/HeaderNav";
import FooterNav from "../../Components/FooterNav";
import FaqComponent from "../../Components/FAQ/FaqComponent";

const FaqPage = () => {
    return (
        <Fragment>
            <HeaderNav/>
            <FaqComponent/>
            <FooterNav/>
        </Fragment>
    );
};

export default FaqPage;