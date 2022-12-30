import React, {Fragment, useEffect, useState} from 'react';

const DiscountSectionComponent = () => {
    const [data, setData]=useState([])
    const getData=async ()=>{
        await axios.get()
            .then(x=> {
                this.setState({data: x.data})
            })
    }
    useEffect(()=>{

    },[])
    return (
        <Fragment>

        </Fragment>
    );
};
export default DiscountSectionComponent;
